import { type NextRequest, NextResponse } from 'next/server';
import { INDEXNOW_URLS, submitToIndexNow } from '@/lib/indexnow';

/**
 * IndexNow submission - notify Bing/Yandex when URLs change.
 * POST /api/indexnow?secret=xxx
 * Optional: ?urls=/path1,/path2 (comma-separated) or omit for all sitemap URLs.
 * Uses REVALIDATION_SECRET for auth.
 */
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }

  const urlsParam = request.nextUrl.searchParams.get('urls');
  const base = 'https://www.probaterealestatesales.com';
  const urls = urlsParam
    ? urlsParam.split(',').map((p) => `${base}${p.startsWith('/') ? p : `/${p}`}`)
    : INDEXNOW_URLS;

  const result = await submitToIndexNow(urls);
  return NextResponse.json(
    result.ok
      ? { submitted: urls.length, status: result.status }
      : { error: result.message, status: result.status },
    { status: result.ok ? 200 : 500 }
  );
}
