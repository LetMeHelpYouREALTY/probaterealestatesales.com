#!/usr/bin/env node
/**
 * Hyperlocal Schema Validation
 * Validates schema coverage for all probate service locations and services.
 * Run: node scripts/hyperlocal-schema-validate.js
 */

const fs = require('node:fs');
const path = require('node:path');

const BASE_URL = 'https://www.probaterealestatesales.com';
const LOCATIONS = [
  'las-vegas',
  'henderson',
  'summerlin',
  'north-las-vegas',
  'boulder-city',
  'enterprise',
  'mesquite',
  'spring-valley',
];

const PROBATE_SERVICES = [
  'probate-division',
  'probate-homes-for-sale',
  'probate-estate-sales',
  'probate-property-buyers',
  'probate-property-valuation',
  'trust-property-sales',
  'conservatorship-real-estate',
];

function checkSitemap() {
  const sitemapPath = path.join(__dirname, '..', 'src', 'app', 'sitemap.ts');
  const content = fs.readFileSync(sitemapPath, 'utf8');
  const missing = [];

  for (const loc of LOCATIONS) {
    const pathPattern = `/locations/${loc}/`;
    if (!content.includes(pathPattern)) missing.push(`${BASE_URL}${pathPattern}`);
  }

  for (const svc of PROBATE_SERVICES) {
    const pathPattern = `/${svc}/`;
    if (!content.includes(pathPattern)) missing.push(`${BASE_URL}${pathPattern}`);
  }

  return { missing, ok: missing.length === 0 };
}

function checkLocationPages() {
  const base = path.resolve(__dirname, '..', 'src', 'app', 'locations');
  const slugPagePath = path.join(base, '[slug]', 'page.tsx');
  const hyperlocalPath = path.resolve(__dirname, '..', 'src', 'lib', 'hyperlocal.ts');
  const exists = fs.existsSync(slugPagePath);
  if (!exists) return { missing: ['locations/[slug]/page.tsx'], ok: false };
  const pageContent = fs.readFileSync(slugPagePath, 'utf8');
  const hyperlocalContent = fs.existsSync(hyperlocalPath)
    ? fs.readFileSync(hyperlocalPath, 'utf8')
    : '';
  const hasGenerateStaticParams = pageContent.includes('generateStaticParams');
  const hasAllSlugs = LOCATIONS.every(
    (loc) => hyperlocalContent.includes(`'${loc}'`) || hyperlocalContent.includes(`"${loc}"`)
  );
  const ok = hasGenerateStaticParams && hasAllSlugs;
  return {
    missing: ok
      ? []
      : [hasGenerateStaticParams ? 'location slugs in hyperlocal.ts' : 'generateStaticParams'],
    ok,
  };
}

function checkSchemaReferences() {
  const schemaPath = path.join(__dirname, '..', 'src', 'lib', 'schema.ts');
  const content = fs.readFileSync(schemaPath, 'utf8');

  const checks = {
    areaServed: content.includes("'Las Vegas'") && content.includes("'Henderson'"),
    localBusiness: content.includes('LocalBusiness') || content.includes('RealEstateAgent'),
    probateServices: content.includes('Probate') && content.includes('hasOfferCatalog'),
    nap: content.includes('400 S 4th') && content.includes('702-830-9222'),
  };

  return { checks, ok: Object.values(checks).every(Boolean) };
}

function main() {
  console.log('=== Hyperlocal Probate Schema Validation ===\n');

  const sitemap = checkSitemap();
  const locations = checkLocationPages();
  const schema = checkSchemaReferences();

  console.log('Sitemap:');
  if (sitemap.ok) {
    console.log('  ✓ All hyperlocal URLs present\n');
  } else {
    console.log('  ✗ Missing URLs:', sitemap.missing.join(', '), '\n');
  }

  console.log('Location Pages:');
  if (locations.ok) {
    console.log('  ✓ All 8 location pages exist\n');
  } else {
    console.log('  ✗ Missing pages:', locations.missing.join(', '), '\n');
  }

  console.log('Schema:');
  Object.entries(schema.checks).forEach(([k, v]) => {
    console.log(`  ${v ? '✓' : '✗'} ${k}`);
  });
  console.log();

  const allOk = sitemap.ok && locations.ok && schema.ok;
  process.exit(allOk ? 0 : 1);
}

main();
