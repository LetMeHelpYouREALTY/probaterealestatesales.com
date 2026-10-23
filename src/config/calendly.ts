/** Dr. Jan Duffy — Calendly booking (15-minute private conversation). */
export const CALENDLY_SCHEDULE_URL =
  'https://calendly.com/drjanduffy/dr-duffy-private-15-min-conversation' as const;

export const CALENDLY_LISTING_CONSULTATION_URL =
  'https://calendly.com/drjanduffy/listing-consultation' as const;

export const CALENDLY_SHOWING_URL = 'https://calendly.com/drjanduffy/showing' as const;

const CALENDLY_UTM_SOURCE = 'probaterealestatesales.com';

/** Pages where the visitor wants a value on estate property, so the listing consultation fits. */
const VALUATION_PATH_PREFIXES = ['/home-valuation', '/probate-property-valuation'];

/** Event that fits the page; everything else keeps the private 15-minute conversation. */
export function calendlyEventForPath(pathname?: string | null): string {
  if (pathname && VALUATION_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return CALENDLY_LISTING_CONSULTATION_URL;
  }
  return CALENDLY_SCHEDULE_URL;
}

/**
 * Adds tracking params. utm_source is the bare domain (the Calendly→FUB worker maps it to the
 * lead source), utm_medium the widget, utm_campaign the page path.
 */
export function tagCalendlyUrl(eventUrl: string, medium: string, pathname?: string | null): string {
  const url = new URL(eventUrl);
  url.searchParams.set('utm_source', CALENDLY_UTM_SOURCE);
  url.searchParams.set('utm_medium', medium);
  if (pathname) url.searchParams.set('utm_campaign', pathname);
  url.searchParams.set('hide_gdpr_banner', '1');
  return url.toString();
}

/** Page-intent event for this path, tagged for the given widget. */
export function calendlyUrlFor(pathname: string | null | undefined, medium: string): string {
  return tagCalendlyUrl(calendlyEventForPath(pathname), medium, pathname);
}
