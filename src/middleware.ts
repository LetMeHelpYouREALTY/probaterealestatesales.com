import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const CANONICAL_HOST = 'https://www.probaterealestatesales.com';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  const pathname = url.pathname;

  // Skip middleware for API routes, static files, sitemap, robots, and Next.js internals
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    pathname.match(/\.(svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot|xml|txt)$/)
  ) {
    return NextResponse.next();
  }

  // Skip redirects for Vercel preview deployments and localhost
  const isVercelPreview = hostname.includes('vercel.app') || hostname.includes('vercel-dev');
  const isLocalhost = hostname.includes('localhost') || hostname.includes('127.0.0.1');
  const isProductionDomain =
    hostname === 'www.probaterealestatesales.com' || hostname === 'probaterealestatesales.com';

  if (isLocalhost || isVercelPreview) {
    return NextResponse.next();
  }

  if (!isProductionDomain) {
    return NextResponse.next();
  }

  // Redirect malformed URLs (e.g. /$ from broken links) to homepage
  if (pathname === '/$' || pathname === '/%24' || pathname === '/$$') {
    return NextResponse.redirect(`${CANONICAL_HOST}/`, 301);
  }

  // Build canonical path: add trailing slash for non-root paths (matches next.config trailingSlash: true)
  const needsTrailingSlash = pathname !== '/' && !pathname.endsWith('/');
  const canonicalPath = needsTrailingSlash ? `${pathname}/` : pathname;
  const search = url.search;

  // Single-hop redirect: consolidate http, non-www, and missing trailing slash into ONE 301
  const needsHttps = url.protocol === 'http:';
  const needsWww = !hostname.startsWith('www.');

  if (needsHttps || needsWww || needsTrailingSlash) {
    const canonicalUrl = `${CANONICAL_HOST}${canonicalPath}${search}`;
    return NextResponse.redirect(canonicalUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot)).*)',
  ],
};
