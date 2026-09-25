#!/usr/bin/env node
/**
 * Check Internal Links for Trailing Slash (GSC "Page with redirect" prevention)
 * Flags internal hrefs that do not use trailing slash for non-root paths.
 * Run: node scripts/check-internal-links.js
 * Exit: 0 if all OK, 1 if any violations found.
 */

const fs = require('node:fs');
const path = require('node:path');

const SRC = path.join(__dirname, '..', 'src');
const EXT = ['.tsx', '.ts', '.jsx', '.js'];

// Static assets / special paths that do not need trailing slash
const SKIP_PATTERNS = [
  /^\/$/, // root
  /\.(xml|ico|png|jpg|jpeg|gif|webp|css|js|woff|woff2|ttf|eot|webmanifest)$/i,
  /^\/sitemap\.xml$/,
  /^\/robots\.txt$/,
  /^\/favicon/,
  /^\/apple-touch-icon/,
  /^\/site\.webmanifest$/,
];

function isSkipPath(hrefPath) {
  if (hrefPath.includes('#') || hrefPath.includes('?')) return true;
  return SKIP_PATTERNS.some((re) => re.test(hrefPath));
}

function isInternalPath(hrefPath) {
  // Protocol-relative (//) or absolute URL (http:) are not our internal paths
  if (hrefPath.startsWith('//') || /^[a-z]+:/.test(hrefPath)) return false;
  return hrefPath.startsWith('/');
}

function needsTrailingSlash(hrefPath) {
  if (!isInternalPath(hrefPath)) return false;
  const pathOnly = hrefPath.replace(/#.*$/, '').replace(/\?.*$/, '');
  if (isSkipPath(pathOnly)) return false;
  if (pathOnly === '/') return false;
  return !pathOnly.endsWith('/');
}

function* walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name === '.next') continue;
      yield* walkDir(full);
    } else if (EXT.includes(path.extname(e.name))) {
      yield full;
    }
  }
}

// Match href="/path" or href='/path' (capture path)
const RE_HREF = /href\s*=\s*["'](\/[^"']*)["']/g;

const violations = [];

for (const file of walkDir(SRC)) {
  const rel = path.relative(path.join(__dirname, '..'), file);
  const content = fs.readFileSync(file, 'utf8');
  RE_HREF.lastIndex = 0;
  let m = RE_HREF.exec(content);
  while (m !== null) {
    const hrefPath = m[1];
    if (needsTrailingSlash(hrefPath)) {
      violations.push({
        file: rel,
        href: hrefPath,
        line: content.slice(0, m.index).split('\n').length,
      });
    }
    m = RE_HREF.exec(content);
  }
}

if (violations.length === 0) {
  console.log('OK: All internal links use trailing slash for non-root paths.');
  process.exit(0);
}

console.error('Internal links without trailing slash (match sitemap & trailingSlash: true):\n');
for (const v of violations) {
  console.error(`  ${v.file}:${v.line}  href="${v.href}"`);
}
console.error('\nAdd trailing slash (e.g. href="/faq/"). See CONTRIBUTING.md.');
process.exit(1);
