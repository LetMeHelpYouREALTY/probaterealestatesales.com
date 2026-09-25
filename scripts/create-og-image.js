#!/usr/bin/env node
/**
 * Create OG-optimized image (1200x630) for social sharing.
 * Run: node scripts/create-og-image.js
 * Requires: sharp (npm install sharp)
 */

const sharp = require('sharp');
const path = require('node:path');
const fs = require('node:fs');

const INPUT = path.join(__dirname, '..', 'public', 'images', 'dr-jan-duffy.jpg');
const OUTPUT = path.join(__dirname, '..', 'public', 'images', 'og-dr-jan-duffy.jpg');
const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

async function main() {
  if (!fs.existsSync(INPUT)) {
    console.error('Input image not found:', INPUT);
    process.exit(1);
  }
  await sharp(INPUT)
    .resize(OG_WIDTH, OG_HEIGHT, { fit: 'cover', position: 'center' })
    .jpeg({ quality: 85, progressive: true, mozjpeg: true })
    .toFile(OUTPUT);
  const stats = fs.statSync(OUTPUT);
  console.log(
    `Created ${path.basename(OUTPUT)} (${OG_WIDTH}x${OG_HEIGHT}, ${(stats.size / 1024).toFixed(1)} KB)`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
