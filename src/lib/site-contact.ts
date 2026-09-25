/**
 * Google Business Profile (GBP) — single source of truth for NAP, hours, and business description.
 *
 * Most leads come from Search / Maps / the Business Profile; this site is built to **mirror GBP**
 * so name, phone, SMS, website, address, service area, hours, and “About” text stay identical
 * everywhere (visible copy + JSON-LD). Update this file when GBP changes, then align pages/schema.
 */
import { SITE_ORIGIN } from '@/config/site-google';

export const GBP_BUSINESS_NAME = 'Probate Real Estate Sales - Dr. Jan Duffy';

/**
 * Short brand for tight UI (nav, some titles). Footer, contact, and LocalBusiness JSON-LD should
 * still use the full `GBP_BUSINESS_NAME` where space allows so the site matches Google verbatim.
 */
export const SITE_BRAND_PRIMARY = 'Probate Real Estate Sales';

/** Primary Google Business Profile category */
export const GBP_BUSINESS_CATEGORY = 'Real estate agent';

/** “About your business” description (GBP) */
export const GBP_DESCRIPTION =
  "Expert probate real estate services in Las Vegas and Clark County. Specialized in comprehensive probate real estate services, court-approved property sales, and estate liquidation with Nevada's fastest probate process (6-8 months vs California's 9-18 months).";

/** GBP service area label */
export const GBP_SERVICE_AREA_PRIMARY = 'Las Vegas, NV, USA';

export const SITE_PHONE_DISPLAY = '(702) 830-9222';

/** E.164 (no separators) — single format for JSON-LD `telephone` and `tel:` links */
export const SITE_PHONE_E164 = '+17028309222';

/** Same digits as E.164 for any API expecting a “tel string” without `tel:` prefix */
export const SITE_PHONE_TEL = SITE_PHONE_E164;

/** Single import for `<a href={SITE_PHONE_TEL_HREF}>` across the site */
export const SITE_PHONE_TEL_HREF = `tel:${SITE_PHONE_E164}` as const;

/** GBP “Chat” / SMS */
export const SITE_SMS_HREF = 'sms:+17028309222';

/** Website URL as listed on GBP (trailing slash) */
export const SITE_WEBSITE_GBP = `${SITE_ORIGIN}/`;

/** Opening hours: 8:00 AM–8:00 PM every day */
export const GBP_OPENING_HOURS_ARRAY = ['Mo-Su 08:00-20:00'] as const;

export const GBP_OPENING_HOURS_STRING = 'Mo-Su 08:00-20:00';

/** GBP opening date (September 20, 2008) in ISO format for schema fields. */
export const GBP_OPENING_DATE_ISO = '2008-09-20';

/** Special hours from GBP (show in visible hours; re-validate each year) */
export const GBP_SPECIAL_HOURS = [
  { label: 'Easter', dateLabel: 'April 5, 2026', note: 'Closed' },
] as const;
