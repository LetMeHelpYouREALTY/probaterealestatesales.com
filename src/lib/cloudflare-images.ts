import { SITE_ORIGIN } from '@/config/site-google';

/**
 * Cloudflare Images (hosted) is the primary CDN. Git-tracked files under
 * `public/images/` are the backup and the local/dev source until hosted
 * delivery is switched on.
 *
 * Dashboard → Images → Developer Resources (public; appears in every URL):
 *   Account ID   2cc579c1ec9e426ed585e933ebf4753b
 *   Account hash byE6BTe9lNqo21V57n4aPQ
 *   Delivery     https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<image_id>/<variant_name>
 *
 * Based on Cloudflare Images hosted docs (2026-09): upload with custom IDs,
 * serve the `public` variant, keep the Vercel apex DNS-only (do not orange-cloud).
 *
 * Switch live src to Images after `npm run cloudflare:images`:
 *   NEXT_PUBLIC_CLOUDFLARE_IMAGES_HOSTED=true
 * Optional override: NEXT_PUBLIC_CLOUDFLARE_IMAGES_ACCOUNT_HASH
 * Optional custom host: NEXT_PUBLIC_CLOUDFLARE_IMAGES_DELIVERY_BASE
 */

/** Cloudflare account that owns Images storage (API uploads). Not a secret. */
export const CLOUDFLARE_IMAGES_ACCOUNT_ID = '2cc579c1ec9e426ed585e933ebf4753b';

/** Images account hash from Developer Resources. Safe to expose in URLs. */
export const CLOUDFLARE_IMAGES_ACCOUNT_HASH = 'byE6BTe9lNqo21V57n4aPQ';

/** Default named variant created on every Images account. */
export const CLOUDFLARE_IMAGES_DEFAULT_VARIANT = 'public';

export const CLOUDFLARE_IMAGES_DELIVERY_ORIGIN = `https://imagedelivery.net/${CLOUDFLARE_IMAGES_ACCOUNT_HASH}`;

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
  'certificateOfIncumbency',
  'probateTimeline',
  'probateVideos',
  'smallEstateAffidavit',
  'serviceCoverage',
  'downloadableGuides',
  'independentAdministration',
  'probateCostCalculator',
  'partitionAction',
  'executorConsulting',
  'nevadaCaliforniaProbate',
  'courtPetitionSale',
  'mortgageCalculator',
  'attorneyReferral',
  'conservatorFiduciary',
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
  certificateOfIncumbency: {
    file: 'sections/certificate-of-incumbency.jpg',
    alt: 'Nevada certificate of incumbency and trustee documents for a Las Vegas trust property sale',
    heading: 'Certificate of Incumbency Guide',
  },
  probateTimeline: {
    file: 'sections/nevada-probate-timeline.jpg',
    alt: 'Nevada probate timeline calendar and Clark County court documents on a Las Vegas desk',
    heading: 'Nevada Probate Timeline Guide',
  },
  probateVideos: {
    file: 'sections/probate-videos-hero.jpg',
    alt: 'Probate real estate education desk with video lesson, timeline checklist, and Las Vegas listing packet',
    heading: 'Probate Real Estate Videos',
  },
  smallEstateAffidavit: {
    file: 'sections/small-estate-affidavit.jpg',
    alt: 'Nevada small estate affidavit packet, house keys, and Clark County court stamp on a Las Vegas desk',
    heading: 'Small Estate Affidavit Guide',
  },
  serviceCoverage: {
    file: 'sections/clark-county-service-coverage.jpg',
    alt: 'Clark County Nevada residential rooftops and desert mountain backdrop — Las Vegas probate service area',
    heading: 'Service Coverage: Las Vegas & Clark County',
  },
  downloadableGuides: {
    file: 'sections/downloadable-probate-guides.jpg',
    alt: 'Downloadable Nevada probate guides, checklist PDF, and Las Vegas home keys on an office desk',
    heading: 'Downloadable Resources',
  },
  independentAdministration: {
    file: 'services/independent-administration.jpg',
    alt: 'Independent administration closing packet, Letters of Administration, and house keys on a Las Vegas office desk',
    heading: 'Independent Administration: Faster & More Private',
  },
  probateCostCalculator: {
    file: 'sections/probate-cost-calculator.jpg',
    alt: 'Nevada probate cost calculator worksheet, court fee schedule, and house keys on a Las Vegas desk',
    heading: 'Nevada Probate Cost Calculator',
  },
  partitionAction: {
    file: 'services/partition-action-consulting.jpg',
    alt: 'Partition action consulting packet, survey plat, and house keys for a Las Vegas inherited property',
    heading: 'Partition Action Consulting',
  },
  executorConsulting: {
    file: 'services/executor-property-consulting.jpg',
    alt: 'Executor property consulting binder, listing packet, and Clark County checklist in a downtown Las Vegas office',
    heading: 'Executor Property Consulting',
  },
  nevadaCaliforniaProbate: {
    file: 'sections/nevada-california-probate.jpg',
    alt: 'Nevada and California probate timeline packets compared on a Las Vegas desk with house keys',
    heading: 'Why Nevada Probate is Better Than California',
  },
  courtPetitionSale: {
    file: 'sections/court-petition-sale.jpg',
    alt: 'Clark County petition for authority to sell real property with gavel and house keys overlooking Las Vegas',
    heading: 'The Court Approval Process for Conservatorship Sales',
  },
  mortgageCalculator: {
    file: 'sections/probate-mortgage-calculator.jpg',
    alt: 'Mortgage worksheet for an inherited Las Vegas probate home with calculator, keys, and stucco house photo',
    heading: 'Mortgage Calculator',
  },
  attorneyReferral: {
    file: 'services/estate-attorney-referral.jpg',
    alt: 'Estate attorney referral packet, Nevada code books, and Clark County court contact sheet in a Las Vegas office',
    heading: 'Estate Attorney Referral Services',
  },
  conservatorFiduciary: {
    file: 'services/conservator-fiduciary-files.jpg',
    alt: 'Conservator accounting ledger, Clark County court order packet, and probate checklist on a Las Vegas desk',
    heading: 'Conservator Responsibilities in Property Sales',
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
  'estate-attorney-referral-services': 'attorneyReferral',
  'partition-action-consulting': 'partitionAction',
  'executor-property-consulting': 'executorConsulting',
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
    case 'certificateOfIncumbency':
    case 'probateTimeline':
    case 'probateVideos':
    case 'smallEstateAffidavit':
    case 'serviceCoverage':
    case 'downloadableGuides':
    case 'independentAdministration':
    case 'probateCostCalculator':
    case 'partitionAction':
    case 'executorConsulting':
    case 'nevadaCaliforniaProbate':
    case 'courtPetitionSale':
    case 'mortgageCalculator':
    case 'attorneyReferral':
    case 'conservatorFiduciary':
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

export function getCloudflareImageDeliveryUrl(
  id: SiteImageId,
  variant = CLOUDFLARE_IMAGES_DEFAULT_VARIANT
): string {
  const customBase = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_DELIVERY_BASE?.replace(/\/$/, '');
  if (customBase) {
    return `${customBase}/${id}/${variant}`;
  }

  const hash = resolveCloudflareImagesAccountHash();
  return `https://imagedelivery.net/${hash}/${id}/${variant}`;
}

function resolveCloudflareImagesAccountHash(): string {
  const fromEnv = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ACCOUNT_HASH?.trim();
  if (fromEnv && fromEnv !== 'off' && fromEnv !== '0' && fromEnv !== 'false') {
    return fromEnv;
  }
  return CLOUDFLARE_IMAGES_ACCOUNT_HASH;
}

function isHostedDeliveryRequested(): boolean {
  const hostedFlag = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_HOSTED?.trim().toLowerCase();
  if (hostedFlag === 'true' || hostedFlag === '1' || hostedFlag === 'yes') {
    return true;
  }
  if (hostedFlag === 'false' || hostedFlag === '0' || hostedFlag === 'off') {
    return false;
  }

  const hashEnv = process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ACCOUNT_HASH?.trim();
  if (hashEnv === 'off' || hashEnv === '0' || hashEnv === 'false') {
    return false;
  }

  return Boolean(process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_DELIVERY_BASE?.trim() || hashEnv);
}

/**
 * Cloudflare Images delivery URL when hosted delivery is on; otherwise the
 * git-backed file under /images (served by Vercel).
 */
export function getSiteImageSrc(
  id: SiteImageId,
  variant = CLOUDFLARE_IMAGES_DEFAULT_VARIANT
): string {
  const record = getSiteImageRecord(id);
  if (isCloudflareImagesEnabled()) {
    return getCloudflareImageDeliveryUrl(id, variant);
  }
  return `/images/${record.file}`;
}

export function getSiteImageAlt(id: SiteImageId, override?: string): string {
  return override?.trim() || getSiteImageRecord(id).alt;
}

export function isCloudflareImagesEnabled(): boolean {
  return isHostedDeliveryRequested();
}

export function getSiteImageAbsoluteUrl(id: SiteImageId): string {
  const src = getSiteImageSrc(id);
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  return `${SITE_ORIGIN}${src}`;
}
