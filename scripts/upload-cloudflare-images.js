#!/usr/bin/env node
/**
 * Upload git-backed images to Cloudflare Images.
 *
 * Primary CDN: imagedelivery.net (or a custom images hostname)
 * Backup: files in public/images/ committed to git
 *
 * Required env:
 *   CLOUDFLARE_IMAGES_API_TOKEN  (Account.Cloudflare Images:Edit)
 *   CLOUDFLARE_ACCOUNT_ID
 *
 * Optional:
 *   CLOUDFLARE_IMAGES_CUSTOM_ID  if true (default), uses catalog keys as Cloudflare image ids
 *
 * Usage:
 *   CLOUDFLARE_IMAGES_API_TOKEN=xxx CLOUDFLARE_ACCOUNT_ID=yyy node scripts/upload-cloudflare-images.js
 */

const fs = require('node:fs');
const path = require('node:path');

const ROOT = process.cwd();
const CATALOG_PATH = path.join(ROOT, 'public/images/cloudflare-catalog.json');
const MAP_PATH = path.join(ROOT, 'public/images/cloudflare-image-ids.json');
const IMAGES_DIR = path.join(ROOT, 'public/images');

const token = process.env.CLOUDFLARE_IMAGES_API_TOKEN || process.env.CLOUDFLARE_API_TOKEN;
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;

if (!token || !accountId) {
  console.error('Set CLOUDFLARE_IMAGES_API_TOKEN and CLOUDFLARE_ACCOUNT_ID.');
  console.error('Git-backed files in public/images/ remain the working source until then.');
  process.exit(1);
}

const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, 'utf8'));
const existingMap = fs.existsSync(MAP_PATH) ? JSON.parse(fs.readFileSync(MAP_PATH, 'utf8')) : {};

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
      console.log(`ℹ️  ${id} already on Cloudflare Images`);
      return { id, cloudflareId: id, file: relativeFile };
    }
    throw new Error(`Upload failed for ${id}: ${JSON.stringify(json.errors || json)}`);
  }

  console.log(`✅ Uploaded ${id} (${relativeFile})`);
  return {
    id,
    cloudflareId: json.result?.id || id,
    file: relativeFile,
    filename: json.result?.filename,
  };
}

async function main() {
  const nextMap = { ...existingMap };
  for (const [id, file] of Object.entries(catalog)) {
    try {
      const result = await uploadOne(id, file);
      nextMap[id] = result;
    } catch (error) {
      console.error(`❌ ${id}:`, error.message);
    }
  }

  fs.writeFileSync(MAP_PATH, `${JSON.stringify(nextMap, null, 2)}\n`);
  console.log(`\nWrote ${MAP_PATH}`);
  console.log('Set NEXT_PUBLIC_CLOUDFLARE_IMAGES_ACCOUNT_HASH in Vercel to serve from Cloudflare.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
