#!/usr/bin/env node
/**
 * Submit URLs to IndexNow (Bing, Yandex, etc.)
 * Run: node scripts/indexnow-submit.js
 * Or with specific URLs: node scripts/indexnow-submit.js /terms/ /faq/
 */

const INDEXNOW_KEY = 'a7f3c2e9d1b4567890abcdef12345678';
const HOST = 'www.probaterealestatesales.com';
const BASE = `https://${HOST}`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const ALL_URLS = [
  '/',
  '/services/',
  '/probate-division/',
  '/probate-homes-for-sale/',
  '/trust-property-sales/',
  '/conservatorship-real-estate/',
  '/probate-property-buyers/',
  '/probate-property-valuation/',
  '/probate-estate-sales/',
  '/locations/',
  '/resources/',
  '/faq/',
  '/about/',
  '/contact/',
  '/blog/',
  '/testimonials/',
  '/home-valuation/',
  '/mortgage-calculator/',
  '/locations/las-vegas/',
  '/locations/henderson/',
  '/locations/summerlin/',
  '/locations/north-las-vegas/',
  '/locations/boulder-city/',
  '/locations/enterprise/',
  '/locations/mesquite/',
  '/locations/spring-valley/',
  '/resources/nevada-probate-guide/',
  '/resources/las-vegas-probate-guide/',
  '/privacy/',
  '/terms/',
  '/blog/probate-videos/',
  '/blog/market-updates/',
  '/blog/nevada-probate-timeline/',
  '/blog/certificate-of-incumbency/',
  '/blog/clark-county-probate/',
  '/blog/las-vegas-market-jan-2025/',
];

const urls = process.argv.slice(2).length
  ? process.argv.slice(2).map((p) => `${BASE}${p.startsWith('/') ? p : `/${p}`}`)
  : ALL_URLS.map((p) => `${BASE}${p}`);

const body = {
  host: HOST,
  key: INDEXNOW_KEY,
  keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
  urlList: urls,
};

async function main() {
  console.log(`Submitting ${urls.length} URL(s) to IndexNow...`);
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });
  console.log(`Status: ${res.status} ${res.statusText}`);
  if (!res.ok) console.log(await res.text());
  process.exit(res.ok ? 0 : 1);
}

main();
