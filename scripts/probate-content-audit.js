#!/usr/bin/env node
/**
 * Probate Content Audit
 * Audits probate service content across pages for hyperlocal coverage.
 * Run: node scripts/probate-content-audit.js
 */

const fs = require('node:fs');
const path = require('node:path');

const LOCATIONS = [
  'Las Vegas',
  'Henderson',
  'Summerlin',
  'North Las Vegas',
  'Boulder City',
  'Enterprise',
  'Mesquite',
  'Spring Valley',
];

const REQUIRED_TERMS = ['probate', '702-830-9222', 'Nevada', '6-8 month'];

function scanDirectory(dir, ext = '.tsx') {
  const results = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory() && !item.name.startsWith('_')) {
      results.push(...scanDirectory(full, ext));
    } else if (item.isFile() && item.name.endsWith(ext)) {
      results.push(full);
    }
  }
  return results;
}

function auditPage(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relative = path.relative(path.join(__dirname, '..'), filePath);
  const report = { file: relative, terms: {}, locations: [], issues: [] };

  for (const term of REQUIRED_TERMS) {
    const re = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    report.terms[term] = (content.match(re) || []).length;
  }

  for (const loc of LOCATIONS) {
    if (content.includes(loc)) report.locations.push(loc);
  }

  if (report.terms.probate === 0) report.issues.push('No "probate" mentions');
  const isServiceOrLocationPage =
    (relative.includes('probate-') ||
      relative.includes('trust-') ||
      relative.includes('conservatorship-') ||
      (relative.includes('locations') && !relative.includes('[slug]'))) &&
    !relative.includes('blog');
  if (isServiceOrLocationPage && report.terms['702-830-9222'] === 0) {
    report.issues.push('No phone number in page (add CTA)');
  }

  return report;
}

function main() {
  const appPath = path.join(__dirname, '..', 'src', 'app');
  const pages = scanDirectory(appPath).filter((p) => p.endsWith('page.tsx'));

  console.log('=== Probate Content Audit ===\n');
  console.log(`Scanning ${pages.length} pages...\n`);

  const reports = pages.map(auditPage);
  let hasIssues = false;

  for (const r of reports) {
    if (r.issues.length > 0) {
      hasIssues = true;
      console.log(`${r.file}:`);
      for (const issue of r.issues) {
        console.log(`  - ${issue}`);
      }
      console.log();
    }
  }

  const locationPages = reports.filter((r) => r.file.includes('locations'));
  const totalLocs = locationPages.reduce((acc, r) => acc + r.locations.length, 0);
  console.log(`Location pages: ${locationPages.length}`);
  console.log(`Total location mentions across pages: ${totalLocs}`);

  if (!hasIssues) {
    console.log('\n✓ No critical issues found.');
  }

  process.exit(hasIssues ? 1 : 0);
}

main();
