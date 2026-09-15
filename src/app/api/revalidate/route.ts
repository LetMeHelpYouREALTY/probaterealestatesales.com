import { revalidatePath, revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { submitToIndexNow } from '@/lib/indexnow';

const BASE_URL = 'https://www.probaterealestatesales.com';

/**
 * On-demand revalidation when new listings hit your feed.
 * Call with: POST /api/revalidate?secret=xxx&path=/locations/henderson/
 * Or: POST /api/revalidate?secret=xxx&tag=listings
 * Optionally notify IndexNow (Bing/Yandex) with indexnow=1
 *
 * Set REVALIDATION_SECRET in env.
 */
export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  const path = request.nextUrl.searchParams.get('path');
  const tag = request.nextUrl.searchParams.get('tag');
  const notifyIndexNow = request.nextUrl.searchParams.get('indexnow') === '1';

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }

  try {
    if (path) {
      revalidatePath(path);
      if (notifyIndexNow) {
        const url = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
        const canon = url.endsWith('/') ? url : `${url}/`;
        await submitToIndexNow([canon]).catch(() => {});
      }
      return NextResponse.json({ revalidated: true, path });
    }
    if (tag) {
      revalidateTag(tag);
      if (notifyIndexNow) {
        await submitToIndexNow().catch(() => {});
      }
      return NextResponse.json({ revalidated: true, tag });
    }
    return NextResponse.json({ error: 'Missing path or tag param' }, { status: 400 });
  } catch (err) {
    return NextResponse.json(
      { error: 'Revalidation failed', details: String(err) },
      { status: 500 }
    );
  }
}
