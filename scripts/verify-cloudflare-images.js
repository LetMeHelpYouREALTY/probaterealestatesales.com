#!/usr/bin/env node
/**
 * HEAD each catalog id on imagedelivery.net for this account hash.
 * Does not require an API token. Exit 0 only if every id returns HTTP 200.
 */

const fs = require('node:fs');
const path = require('node:path');

const ACCOUNT_HASH = 'byE6BTe9lNqo21V57n4aPQ';
const VARIANT = 'public';
const catalog = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), 'public/images/cloudflare-catalog.json'), 'utf8')
);

async function main() {
  let missing = 0;
  for (const id of Object.keys(catalog)) {
    const url = `https://imagedelivery.net/${ACCOUNT_HASH}/${id}/${VARIANT}`;
    const response = await fetch(url, { method: 'HEAD' });
    const ok = response.ok;
    console.log(`${ok ? '✅' : '❌'} ${response.status} ${url}`);
    if (!ok) missing += 1;
  }

  if (missing > 0) {
    console.error(
      `\n${missing} image(s) not hosted yet. Upload with CLOUDFLARE_IMAGES_API_TOKEN=… npm run cloudflare:images`
    );
    process.exit(1);
  }

  console.log('\nAll catalog images are reachable on Cloudflare Images.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
