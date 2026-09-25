#!/usr/bin/env node
/**
 * Cloudflare Crawler Hints (IndexNow) helper.
 * Crawler Hints has NO public API - enable via dashboard only.
 *
 * This script outputs direct dashboard links to Caching > Configuration
 * so you can quickly enable Crawler Hints for each zone.
 *
 * Run: CLOUDFLARE_API_TOKEN=xxx node scripts/cloudflare-enable-crawler-hints.js
 */

const CLOUDFLARE_API = 'https://api.cloudflare.com/client/v4';
const DASHBOARD_BASE = 'https://dash.cloudflare.com';

async function listZones(token) {
  const all = [];
  let page = 1;
  let more = true;
  while (more) {
    const res = await fetch(`${CLOUDFLARE_API}/zones?per_page=50&page=${page}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.errors?.[0]?.message || 'Failed to list zones');
    const zones = data.result || [];
    all.push(...zones);
    more = zones.length === 50;
    page++;
  }
  return all;
}

const readline = require('node:readline');

function askToken() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    rl.question('Cloudflare API token: ', (answer) => {
      rl.close();
      resolve(answer?.trim() || '');
    });
  });
}

const isLinks = process.argv.includes('--links');
const isList = process.argv.includes('--list');

async function main() {
  let token = process.env.CLOUDFLARE_API_TOKEN;
  if (!token) {
    token = await askToken();
    if (!token) {
      console.error('Token required. Set CLOUDFLARE_API_TOKEN or enter when prompted.');
      process.exit(1);
    }
  }

  console.log('Fetching zones...');
  const zones = await listZones(token);
  if (zones.length === 0) {
    console.log('No zones found.');
    process.exit(0);
  }

  console.log(`\nCrawler Hints has NO public API. Enable manually for each zone:\n`);
  console.log(`1. Open Caching → Configuration for each domain`);
  console.log(`2. Toggle "Crawler Hints" ON\n`);

  if (isLinks) {
    console.log('Direct links to Caching > Configuration:\n');
    for (const zone of zones) {
      const accountId = zone.account?.id || 'account';
      const url = `${DASHBOARD_BASE}/${accountId}/${zone.name}/caching/configuration`;
      console.log(`${zone.name}\n  ${url}\n`);
    }
  } else if (isList) {
    for (const zone of zones) console.log(zone.name);
  } else {
    console.log(`Zones (${zones.length}):`);
    for (const zone of zones) console.log(`  ${zone.name}`);
    console.log(`\nRun with --links to print direct dashboard URLs for each zone.`);
    console.log(`Run with --list to print zone names only.`);
  }

  console.log('\nDone.');
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
