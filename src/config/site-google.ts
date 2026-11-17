/**
 * Canonical URLs for Google Search Console, Maps, and Business Profile alignment.
 * NAP must match Google Business Profile everywhere (visible text + JSON-LD).
 * Lead flow is primarily GBP-driven; keep `src/lib/site-contact.ts` in sync with the live profile.
 */

export const SITE_ORIGIN = 'https://www.probaterealestatesales.com';

/**
 * Google Business Profile — leave a review (GBP “Ask for reviews” link).
 * Override with NEXT_PUBLIC_GOOGLE_BUSINESS_REVIEW_URL if Google regenerates the link.
 */
export const GOOGLE_BUSINESS_REVIEW_URL =
  process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_REVIEW_URL?.trim() ||
  'https://g.page/r/Ca2QWcDSV2PKEAE/review';

/** Use in JSON-LD logo / image when a dedicated /logo.png is not deployed (matches OG + Person schema). */
export const SITE_LOGO_ABSOLUTE_URL = `${SITE_ORIGIN}/images/dr-jan-duffy.jpg`;

/** Single-line address for Maps query params (matches GBP / site NAP) */
export const OFFICE_ADDRESS_LINE = '400 S 4th St suite 250 b, Las Vegas, NV 89101';

/**
 * Maps search / embed fallback when no GBP place URL is set in env.
 * Must match the Google Maps listing (business title + address on GBP).
 */
export const OFFICE_MAPS_SEARCH_QUERY =
  'Probate Real Estate Sales - Dr. Jan Duffy, 400 S 4th St suite 250 b, Las Vegas, NV 89101';

/** True when URL looks like a Google Maps / GBP share link (not the marketing site). */
function isLikelyGoogleMapsOrGbpUrl(url: string): boolean {
  try {
    const u = new URL(url);
    const host = u.hostname.toLowerCase();
    if (host === 'www.probaterealestatesales.com' || host === 'probaterealestatesales.com') {
      return false;
    }
    return (
      host.includes('google.') ||
      host === 'goo.gl' ||
      host.endsWith('.goo.gl') ||
      host === 'g.page' ||
      host.endsWith('.page.link') ||
      host.includes('maps.app.goo.gl') ||
      host === 'share.google'
    );
  } catch {
    return false;
  }
}

/** GBP CID for Probate Real Estate Sales - Dr. Jan Duffy (same listing as the g.page review link). */
export const GBP_CID = '14583596581037641901';

/** Canonical Maps listing (CID form): resolves to the GBP itself, not an address search. */
const MAPS_LISTING_FALLBACK = `https://maps.google.com/?cid=${GBP_CID}`;

/**
 * Google Maps listing URL for schema `hasMap`, footer, and sameAs tail.
 * Priority: explicit env → GBP Maps URL from NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL → address search.
 * Paste the official link from Google Business Profile (Share) so the pin matches GBP.
 */
export const OFFICE_GOOGLE_MAPS_LISTING_URL = (() => {
  const explicit = process.env.NEXT_PUBLIC_GOOGLE_MAPS_LISTING_URL?.trim();
  if (explicit) return explicit;
  const gbp = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL?.trim();
  if (gbp && /^https?:\/\//i.test(gbp) && isLikelyGoogleMapsOrGbpUrl(gbp)) {
    return gbp;
  }
  return MAPS_LISTING_FALLBACK;
})();

/** Driving directions; optional full URL override for Vercel env. */
export const OFFICE_GOOGLE_MAPS_DIRECTIONS_URL = (() => {
  const explicit = process.env.NEXT_PUBLIC_GOOGLE_MAPS_DIRECTIONS_URL?.trim();
  if (explicit) return explicit;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(OFFICE_MAPS_SEARCH_QUERY)}`;
})();

/**
 * Embed iframe src. Prefer `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC` from Maps → Share → Embed a map (exact pin).
 */
export const OFFICE_GOOGLE_MAPS_EMBED_SRC = (() => {
  const explicit = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC?.trim();
  if (explicit) return explicit;
  return `https://maps.google.com/maps?cid=${GBP_CID}&output=embed&hl=en`;
})();

/** Official business profiles (use in footer + sameAs; keep in sync with GBP / marketing). */
/** Must match Google Business Profile “Social profiles” (Facebook). */
export const FACEBOOK_PAGE_URL = 'http://facebook.com/probaterealestatesales' as const;
/** Company page — align with GBP “Social profiles” when listed */
export const LINKEDIN_COMPANY_URL =
  'https://www.linkedin.com/company/probaterealestatesales' as const;
export const INSTAGRAM_PAGE_URL = 'https://www.instagram.com/probaterealestatesales' as const;
export const THREADS_PROFILE_URL = 'https://www.threads.com/@probaterealestatesales' as const;

const SOCIAL_SAME_AS = [
  SITE_ORIGIN,
  FACEBOOK_PAGE_URL,
  LINKEDIN_COMPANY_URL,
  INSTAGRAM_PAGE_URL,
  THREADS_PROFILE_URL,
] as const;

/**
 * sameAs for LocalBusiness: optional GBP URL first (from env), then social + Maps listing.
 * Set NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL to your public Business Profile / Maps CID link.
 */
export function getLocalBusinessSameAsUrls(): string[] {
  const gbp = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL?.trim();
  const out: string[] = [];

  if (gbp && /^https?:\/\//i.test(gbp) && !out.includes(gbp)) {
    out.push(gbp);
  }

  for (const u of SOCIAL_SAME_AS) {
    if (!out.includes(u)) out.push(u);
  }

  if (!out.includes(OFFICE_GOOGLE_MAPS_LISTING_URL)) {
    out.push(OFFICE_GOOGLE_MAPS_LISTING_URL);
  }

  return out;
}
