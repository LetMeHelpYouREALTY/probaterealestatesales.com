import { SITE_ORIGIN } from '@/config/site-google';

/**
 * Cloudflare Images is the primary CDN. Git-tracked files under `public/images/`
 * are the backup and the local/dev source when no delivery hash is configured.
 *
 * Set NEXT_PUBLIC_CLOUDFLARE_IMAGES_ACCOUNT_HASH (imagedelivery.net) and/or
 * NEXT_PUBLIC_CLOUDFLARE_IMAGES_DELIVERY_BASE (custom images hostname).
 * Upload with: node scripts/upload-cloudflare-images.js
 */

export const SITE_IMAGE_IDS = [
  'agentPortrait',
  'ogAgent',
  'lasVegasHomes',
  'lasVegasSunset',
  'hendersonHomes',
  'summerlinHomes',
  'northLasVegasHomes',
  'boulderCityHomes',
  'mesquiteHomes',
  'springValleyHomes',
  'enterpriseHomes',
  'downtownOffice',
  'consultationRoom',
  'consultationRoomSide',
  'propertyChecklist',
  'courtGavel',
  'courthouse',
  'listingsHero',
  'resourcesGuides',
  'freeConsultation',
  'courtApprovedSales',
  'estateLiquidation',
  'propertyValuation',
  'trustSales',
  'conservatorship',
] as const;

export type SiteImageId = (typeof SITE_IMAGE_IDS)[number];

type SiteImageRecord = {
  file: string;
  alt: string;
  heading: string;
};

export const SITE_IMAGES: Record<SiteImageId, SiteImageRecord> = {
  agentPortrait: {
    file: 'dr-jan-duffy.jpg',
    alt: 'Dr. Jan Duffy, Las Vegas probate realtor, on a consultation call',
    heading: 'Dr. Jan Duffy',
  },
  ogAgent: {
    file: 'og-dr-jan-duffy.jpg',
    alt: 'Probate Real Estate Sales — Dr. Jan Duffy, Las Vegas probate real estate',
    heading: 'Probate Real Estate Sales',
  },
  lasVegasHomes: {
    file: 'locations/las-vegas-probate-homes.jpg',
    alt: 'Las Vegas Nevada stucco home with tile roof — probate property exterior',
    heading: 'Las Vegas Probate Real Estate Services',
  },
  lasVegasSunset: {
    file: 'locations/las-vegas-home-sunset.jpg',
    alt: 'Las Vegas home exterior at sunset — probate homes for sale',
    heading: 'Browse Probate Homes for Sale',
  },
  hendersonHomes: {
    file: 'locations/henderson-probate-homes.jpg',
    alt: 'Henderson Nevada residential street with McCullough Range — probate property',
    heading: 'Henderson Probate Real Estate Services',
  },
  summerlinHomes: {
    file: 'locations/summerlin-probate-homes.jpg',
    alt: 'Summerlin Las Vegas homes beside a golf course and Red Rock backdrop',
    heading: 'Summerlin Probate Real Estate Services',
  },
  northLasVegasHomes: {
    file: 'locations/north-las-vegas-probate-homes.jpg',
    alt: 'North Las Vegas Aliante and Centennial Hills homes — probate real estate',
    heading: 'North Las Vegas Probate Real Estate Services',
  },
  boulderCityHomes: {
    file: 'locations/boulder-city-probate-homes.jpg',
    alt: 'Boulder City Nevada historic residential street — probate property sales',
    heading: 'Boulder City Probate Real Estate Services',
  },
  mesquiteHomes: {
    file: 'locations/mesquite-probate-homes.jpg',
    alt: 'Mesquite Nevada golf-community homes — probate real estate',
    heading: 'Mesquite Probate Real Estate Services',
  },
  springValleyHomes: {
    file: 'locations/spring-valley-probate-homes.jpg',
    alt: 'Spring Valley Las Vegas residential street — probate property sales',
    heading: 'Spring Valley Probate Real Estate Services',
  },
  enterpriseHomes: {
    file: 'locations/enterprise-probate-homes.jpg',
    alt: 'Enterprise and Southern Highlands Las Vegas homes — probate real estate',
    heading: 'Enterprise Probate Real Estate Services',
  },
  downtownOffice: {
    file: 'sections/downtown-las-vegas-office.jpg',
    alt: 'Downtown Las Vegas office building near 400 S 4th St suite 250 b',
    heading: 'Contact us',
  },
  consultationRoom: {
    file: 'sections/probate-consultation-room.jpg',
    alt: 'Probate consultation room Las Vegas Nevada',
    heading: 'Comprehensive Probate Services',
  },
  consultationRoomSide: {
    file: 'sections/probate-office-conference.jpg',
    alt: 'Conference table for probate and trust property meetings in Las Vegas',
    heading: 'Why Choose Dr. Jan Duffy?',
  },
  propertyChecklist: {
    file: 'sections/probate-property-checklist.jpg',
    alt: 'Probate property checklist clipboard for inherited homes in Clark County',
    heading: 'Probate Property Checklist',
  },
  courtGavel: {
    file: 'sections/probate-court-gavel.jpg',
    alt: 'Probate court gavel icon for Clark County court-approved sales',
    heading: 'Court-Approved Property Sales',
  },
  courthouse: {
    file: 'sections/clark-county-courthouse.jpg',
    alt: 'Clark County Regional Justice Center Las Vegas probate court building',
    heading: 'Clark County Probate Division',
  },
  listingsHero: {
    file: 'sections/probate-homes-for-sale-hero.jpg',
    alt: 'Las Vegas valley homes with Strip skyline — probate homes for sale',
    heading: 'Probate Homes for Sale in Las Vegas, Nevada',
  },
  resourcesGuides: {
    file: 'sections/probate-resources-guides.jpg',
    alt: 'Nevada probate guides and checklists on a Las Vegas office desk',
    heading: 'Probate Resources & Tools',
  },
  freeConsultation: {
    file: 'sections/free-consultation.jpg',
    alt: 'Probate real estate consultation in Las Vegas — keys and listing packet',
    heading: 'Ready to Get Started?',
  },
  courtApprovedSales: {
    file: 'services/court-approved-property-sales.jpg',
    alt: 'Court-approved probate sale documents, keys, and gavel in Las Vegas',
    heading: 'Court-Approved Property Sales',
  },
  estateLiquidation: {
    file: 'services/estate-liquidation.jpg',
    alt: 'Las Vegas home interior prepared for estate liquidation',
    heading: 'Estate Liquidation',
  },
  propertyValuation: {
    file: 'services/probate-property-valuation.jpg',
    alt: 'Probate property valuation CMA report for a Las Vegas home',
    heading: 'Get Your Free Property Valuation',
  },
  trustSales: {
    file: 'services/trust-property-sales.jpg',
    alt: 'Trust-owned Las Vegas home exterior at dusk — trust property sales',
    heading: 'Trust Sale Services',
  },
  conservatorship: {
    file: 'services/conservatorship-real-estate.jpg',
    alt: 'Conservatorship real estate files and keys for a Clark County property',
    heading: 'Conservatorship Real Estate',
  },
};

const LOCATION_IMAGE_BY_SLUG: Record<string, SiteImageId> = {
  'las-vegas': 'lasVegasHomes',
  henderson: 'hendersonHomes',
  summerlin: 'summerlinHomes',
  'north-las-vegas': 'northLasVegasHomes',
  'boulder-city': 'boulderCityHomes',
  mesquite: 'mesquiteHomes',
  'spring-valley': 'springValleyHomes',
  enterprise: 'enterpriseHomes',
};

const SERVICE_IMAGE_BY_SLUG: Record<string, SiteImageId> = {
  'probate-real-estate-sales': 'listingsHero',
  'estate-liquidation': 'estateLiquidation',
  'court-approved-property-sales': 'courtApprovedSales',
  'trust-sale-services': 'trustSales',
  'probate-property-valuation': 'propertyValuation',
  'estate-property-cma-reports': 'propertyValuation',
  'estate-attorney-referral-services': 'consultationRoom',
  'partition-action-consulting': 'courthouse',
  'executor-property-consulting': 'freeConsultation',
};

function assertNever(value: never): never {
  throw new Error(`Unhandled site image id: ${String(value)}`);
}

export function getSiteImageRecord(id: SiteImageId): SiteImageRecord {
  switch (id) {
    case 'agentPortrait':
    case 'ogAgent':
    case 'lasVegasHomes':
    case 'lasVegasSunset':
    case 'hendersonHomes':
    case 'summerlinHomes':
    case 'northLasVegasHomes':
    case 'boulderCityHomes':
    case 'mesquiteHomes':
    case 'springValleyHomes':
    case 'enterpriseHomes':
    case 'downtownOffice':
    case 'consultationRoom':
    case 'consultationRoomSide':
    case 'propertyChecklist':
    case 'courtGavel':
    case 'courthouse':
    case 'listingsHero':
    case 'resourcesGuides':
    case 'freeConsultation':
    case 'courtApprovedSales':
    case 'estateLiquidation':
    case 'propertyValuation':
    case 'trustSales':
    case 'conservatorship':
      return SITE_IMAGES[id];
    default:
      return assertNever(id);
  }
}

export function getLocationImageId(slug: string): SiteImageId {
  return LOCATION_IMAGE_BY_SLUG[slug] ?? 'lasVegasHomes';
}

export function getServiceImageId(slug: string): SiteImageId {
  return SERVICE_IMAGE_BY_SLUG[slug] ?? 'consultationRoom';
}

/**
 * Cloudflare Images delivery URL when configured; otherwise the git-backed
 * file under /images (served by Vercel).
 */
export function getSiteImageSrc(id: SiteImageId, variant = 'public'): string {
  const record = getSiteImageRecord(id);
  const customBase = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_DELIVERY_BASE?.replace(/\/$/, '');
  const accountHash = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ACCOUNT_HASH?.trim();

  if (customBase) {
    return `${customBase}/${id}/${variant}`;
  }

  if (accountHash) {
    return `https://imagedelivery.net/${accountHash}/${id}/${variant}`;
  }

  return `/images/${record.file}`;
}

export function getSiteImageAlt(id: SiteImageId, override?: string): string {
  return override?.trim() || getSiteImageRecord(id).alt;
}

export function isCloudflareImagesEnabled(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_DELIVERY_BASE?.trim() ||
      process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ACCOUNT_HASH?.trim()
  );
}

export function getSiteImageAbsoluteUrl(id: SiteImageId): string {
  const src = getSiteImageSrc(id);
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  return `${SITE_ORIGIN}${src}`;
}
