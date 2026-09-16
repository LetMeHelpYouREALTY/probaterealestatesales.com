#!/usr/bin/env node
/**
 * Upload git-backed images to Cloudflare Images (hosted storage).
 *
 * Docs (2026-09): https://developers.cloudflare.com/images/storage/upload-images/methods/
 * Custom IDs:     https://developers.cloudflare.com/images/storage/upload-images/upload-custom-path/
 * Delivery:       https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT_NAME>
 *
 * Primary CDN: imagedelivery.net (or a custom images hostname)
 * Backup: files in public/images/ committed to git
 *
 * Required env:
 *   CLOUDFLARE_IMAGES_API_TOKEN  (Account.Cloudflare Images:Edit)
 *
 * Optional:
 *   CLOUDFLARE_ACCOUNT_ID        defaults to the Images account in src/lib/cloudflare-images.ts
 *
 * Usage:
 *   CLOUDFLARE_IMAGES_API_TOKEN=xxx npm run cloudflare:images
 */

const fs = require('node:fs');
const path = require('node:path');

const ROOT = process.cwd();
const CATALOG_PATH = path.join(ROOT, 'public/images/cloudflare-catalog.json');
const MAP_PATH = path.join(ROOT, 'public/images/cloudflare-image-ids.json');
const IMAGES_DIR = path.join(ROOT, 'public/images');

const ACCOUNT_ID = '2cc579c1ec9e426ed585e933ebf4753b';
const ACCOUNT_HASH = 'byE6BTe9lNqo21V57n4aPQ';
const DEFAULT_VARIANT = 'public';

const token = process.env.CLOUDFLARE_IMAGES_API_TOKEN || process.env.CLOUDFLARE_API_TOKEN;
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID || ACCOUNT_ID;

if (!token) {
  console.error('Set CLOUDFLARE_IMAGES_API_TOKEN (Account → Cloudflare Images:Edit).');
  console.error('Git-backed files in public/images/ remain the live source until uploads succeed.');
  console.error(
    `Delivery URL once hosted: https://imagedelivery.net/${ACCOUNT_HASH}/<image_id>/${DEFAULT_VARIANT}`
  );
  process.exit(1);
}

const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
const existingMap = fs.existsSync(MAP_PATH) ? JSON.parse(fs.readFileSync(MAP_PATH, 'utf8')) : {};

function deliveryUrl(id) {
  return `https://imagedelivery.net/${ACCOUNT_HASH}/${id}/${DEFAULT_VARIANT}`;
}

async function uploadOne(id, relativeFile) {
  const filePath = path.join(IMAGES_DIR, relativeFile);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing file for ${id}: ${relativeFile}`);
  }

  const form = new FormData();
  const buffer = fs.readFileSync(filePath);
  form.append('file', new Blob([buffer], { type: 'image/jpeg' }), path.basename(relativeFile));
  form.append('id', id);
  form.append('requireSignedURLs', 'false');
  form.append(
    'metadata',
    JSON.stringify({
      source: 'git-backup',
      file: relativeFile,
      site: 'probaterealestatesales.com',
    })
  );

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    }
  );

  const json = await response.json();
  if (!response.ok || !json.success) {
    const alreadyExists = JSON.stringify(json.errors || []).includes('Duplicate');
    if (alreadyExists) {
      console.log(`ℹ️  ${id} already on Cloudflare Images → ${deliveryUrl(id)}`);
      return { id, cloudflareId: id, file: relativeFile, deliveryUrl: deliveryUrl(id) };
    }
    throw new Error(`Upload failed for ${id}: ${JSON.stringify(json.errors || json)}`);
  }

  console.log(`✅ Uploaded ${id} (${relativeFile}) → ${deliveryUrl(id)}`);
  return {
    id,
    cloudflareId: json.result?.id || id,
    file: relativeFile,
    filename: json.result?.filename,
    deliveryUrl: json.result?.variants?.[0] || deliveryUrl(id),
  };
}

async function main() {
  const nextMap = { ...existingMap };
  let failed = 0;
  for (const [id, file] of Object.entries(catalog)) {
    try {
      const result = await uploadOne(id, file);
      nextMap[id] = result;
    } catch (error) {
      failed += 1;
      console.error(`❌ ${id}:`, error.message);
    }
  }

  fs.writeFileSync(MAP_PATH, `${JSON.stringify(nextMap, null, 2)}\n`);
  console.log(`\nWrote ${MAP_PATH}`);
  if (failed > 0) {
    console.error(`${failed} upload(s) failed. Git backup stays live.`);
    process.exit(1);
  }
  console.log('All catalog images are on Cloudflare Images.');
  console.log(
    'Set NEXT_PUBLIC_CLOUDFLARE_IMAGES_HOSTED=true on Vercel Production to serve from imagedelivery.net.'
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
