/**
 * Hyperlocal probate data for Nevada / Clark County
 * Use for schema, metadata, and content generation.
 */
import {
  GBP_OPENING_HOURS_ARRAY,
  SITE_BRAND_PRIMARY,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
} from '@/lib/site-contact';

export const SITE_CONFIG = {
  name: SITE_BRAND_PRIMARY,
  agent: 'Dr. Jan Duffy',
  phone: SITE_PHONE_DISPLAY,
  phoneTel: SITE_PHONE_TEL,
  email: 'DrJanSells@ProbateRealEstateSales.com',
  url: 'https://www.probaterealestatesales.com',
  license: 'S.0197614.LLC',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
  address: {
    streetAddress: '400 S 4th St suite 250 b',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89101',
    addressCountry: 'US',
  },
  geo: {
    latitude: 36.1699,
    longitude: -115.1398,
  },
  openingHours: [...GBP_OPENING_HOURS_ARRAY],
};

/** Theme colors for location heroes */
export type LocationThemeColor = 'blue' | 'green' | 'slate' | 'amber';

/** Hyperlocal location data for schema and content */
export const HYPERLOCAL_LOCATIONS = [
  {
    slug: 'las-vegas',
    themeColor: 'blue' as LocationThemeColor,
    name: 'Las Vegas',
    description: 'Downtown and Strip area probate real estate',
    neighborhoods: ['Downtown', 'Strip', 'Arts District', 'Fremont East'],
    latitude: 36.1699,
    longitude: -115.1398,
    court: 'Clark County District Court',
  },
  {
    slug: 'henderson',
    themeColor: 'green' as LocationThemeColor,
    name: 'Henderson',
    description: 'Green Valley and Anthem probate property expertise',
    neighborhoods: [
      'Green Valley',
      'Anthem',
      'Green Valley Ranch',
      'MacDonald Ranch',
      'Seven Hills',
    ],
    latitude: 36.0395,
    longitude: -115.0498,
    court: 'Clark County District Court',
  },
  {
    slug: 'summerlin',
    themeColor: 'amber' as LocationThemeColor,
    name: 'Summerlin',
    description: 'Luxury master-planned community probate real estate',
    neighborhoods: ['Summerlin West', 'Summerlin North', 'The Cliffs', 'The Hills'],
    latitude: 36.1911,
    longitude: -115.2531,
    court: 'Clark County District Court',
  },
  {
    slug: 'north-las-vegas',
    themeColor: 'blue' as LocationThemeColor,
    name: 'North Las Vegas',
    description: 'Aliante and Centennial Hills probate services',
    neighborhoods: ['Aliante', 'Centennial Hills', 'Craig Ranch', 'Eldorado'],
    latitude: 36.1989,
    longitude: -115.1175,
    court: 'Clark County District Court',
  },
  {
    slug: 'boulder-city',
    themeColor: 'slate' as LocationThemeColor,
    name: 'Boulder City',
    description: 'Historic area probate property management',
    neighborhoods: ['Historic District', 'Lake Mead proximity'],
    latitude: 35.9786,
    longitude: -114.8325,
    court: 'Clark County District Court',
  },
  {
    slug: 'enterprise',
    themeColor: 'green' as LocationThemeColor,
    name: 'Enterprise',
    description: 'Southwest Las Vegas probate expertise',
    neighborhoods: ['Enterprise', "Mountain's Edge", 'Southern Highlands'],
    latitude: 36.0253,
    longitude: -115.2419,
    court: 'Clark County District Court',
  },
  {
    slug: 'mesquite',
    themeColor: 'amber' as LocationThemeColor,
    name: 'Mesquite',
    description: 'Golf community probate real estate',
    neighborhoods: ['Mesquite', 'Virgin Valley'],
    latitude: 36.8055,
    longitude: -114.0672,
    court: 'Clark County District Court',
  },
  {
    slug: 'spring-valley',
    themeColor: 'green' as LocationThemeColor,
    name: 'Spring Valley',
    description: 'Residential area probate services',
    neighborhoods: ['Spring Valley', 'Southwest Las Vegas'],
    latitude: 36.1081,
    longitude: -115.2453,
    court: 'Clark County District Court',
  },
] as const;

/** Comprehensive probate services for schema and content */
export const PROBATE_SERVICES = [
  {
    name: 'Nevada Probate Property Sales',
    description: "Court-approved probate property sales with Nevada's 6-8 month timeline",
    url: '/probate-homes-for-sale/',
  },
  {
    name: 'Probate Property Valuation',
    description: 'Professional appraisal and CMA for inherited properties in Las Vegas area',
    url: '/probate-property-valuation/',
  },
  {
    name: 'Trust Property Sales',
    description: 'Trust administration and successor trustee property sales (3 months)',
    url: '/trust-property-sales/',
  },
  {
    name: 'Conservatorship Real Estate',
    description: 'Court-appointed conservator property management and sales',
    url: '/conservatorship-real-estate/',
  },
  {
    name: 'Probate Property Buyers',
    description: 'Companies that buy probate houses in Nevada - fast cash offers',
    url: '/probate-property-buyers/',
  },
  {
    name: 'Probate Estate Sales',
    description: 'Complete estate liquidation following Nevada Revised Statutes',
    url: '/probate-estate-sales/',
  },
  {
    name: 'Clark County Probate Division',
    description:
      'Direct access to Clark County probate commissioners - James Fontana & Russell Geis',
    url: '/probate-division/',
  },
] as const;

/** Nevada probate facts for content */
export const NEVADA_PROBATE_FACTS = {
  timeline: '6-8 months',
  courtCostClark: '$1,000',
  courtCostWashoe: '$1,300',
  smallEstateLimit: '$100,000',
  trustAdminCost: '$2,500',
  trustAdminTimeline: '3 months',
  probateAttorneyCost: '$8,000-9,000',
  certificateIncumbencyCost: '$750',
};
