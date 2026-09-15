import {
  FACEBOOK_PAGE_URL,
  getLocalBusinessSameAsUrls,
  INSTAGRAM_PAGE_URL,
  LINKEDIN_COMPANY_URL,
  OFFICE_GOOGLE_MAPS_LISTING_URL,
  SITE_LOGO_ABSOLUTE_URL,
  THREADS_PROFILE_URL,
} from '@/config/site-google';
import { YOUTUBE_CHANNEL_URL } from '@/config/youtube';
import { getSiteImageAbsoluteUrl } from '@/lib/cloudflare-images';
import {
  GBP_BUSINESS_NAME,
  GBP_DESCRIPTION,
  GBP_OPENING_DATE_ISO,
  GBP_OPENING_HOURS_ARRAY,
  SITE_BRAND_PRIMARY,
  SITE_PHONE_E164,
} from '@/lib/site-contact';

export interface LocalBusinessSchema {
  '@context': 'https://schema.org';
  '@type': 'LocalBusiness';
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    '@type': 'GeoCoordinates';
    latitude: number;
    longitude: number;
  };
  openingHours: string;
  priceRange: string;
  paymentAccepted: string[];
  areaServed: {
    '@type': 'GeoCircle';
    geoMidpoint: {
      '@type': 'GeoCoordinates';
      latitude: number;
      longitude: number;
    };
    geoRadius: string;
  };
  hasOfferCatalog: {
    '@type': 'OfferCatalog';
    name: string;
    itemListElement: Array<{
      '@type': 'Offer';
      itemOffered: {
        '@type': 'Service';
        name: string;
        description: string;
      };
    }>;
  };
}

export interface RealEstateAgentSchema {
  '@context': 'https://schema.org';
  '@type': 'RealEstateAgent';
  name: string;
  description: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  areaServed: string[];
  serviceArea: {
    '@type': 'GeoCircle';
    geoMidpoint: {
      '@type': 'GeoCoordinates';
      latitude: number;
      longitude: number;
    };
    geoRadius: string;
  };
  hasOfferCatalog: {
    '@type': 'OfferCatalog';
    name: string;
    itemListElement: Array<{
      '@type': 'Offer';
      itemOffered: {
        '@type': 'Service';
        name: string;
        description: string;
        provider: {
          '@type': 'Organization';
          name: string;
        };
      };
    }>;
  };
}

export interface LegalServiceSchema {
  '@context': 'https://schema.org';
  '@type': 'LegalService';
  name: string;
  description: string;
  provider: {
    '@type': 'Organization';
    name: string;
    url: string;
  };
  serviceType: string;
  areaServed: {
    '@type': 'AdministrativeArea';
    name: string;
  };
  hasOfferCatalog: {
    '@type': 'OfferCatalog';
    name: string;
    itemListElement: Array<{
      '@type': 'Offer';
      itemOffered: {
        '@type': 'Service';
        name: string;
        description: string;
        price: string;
        priceCurrency: string;
      };
    }>;
  };
}

export interface ServiceSchema {
  '@context': 'https://schema.org';
  '@type': 'Service';
  name: string;
  description: string;
  provider: {
    '@type': 'Organization';
    name: string;
    url: string;
  };
  areaServed: string[];
  serviceType: string;
  offers: {
    '@type': 'Offer';
    description: string;
    price: string;
    priceCurrency: string;
  };
}

export interface FAQPageSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: Array<{
    '@type': 'Question';
    name: string;
    acceptedAnswer: {
      '@type': 'Answer';
      text: string;
    };
  }>;
}

export interface ReviewSchema {
  '@context': 'https://schema.org';
  '@type': 'Review';
  itemReviewed: {
    '@type': 'LocalBusiness';
    name: string;
  };
  reviewRating: {
    '@type': 'Rating';
    ratingValue: number;
    bestRating: number;
  };
  author: {
    '@type': 'Person';
    name: string;
  };
  reviewBody: string;
  datePublished: string;
}

export interface AggregateRatingSchema {
  '@context': 'https://schema.org';
  '@type': 'AggregateRating';
  ratingValue: number;
  reviewCount: number;
  bestRating: number;
  worstRating: number;
}

export interface BreadcrumbListSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
  }>;
}

export interface ArticleSchema {
  '@context': 'https://schema.org';
  '@type': 'Article';
  headline: string;
  description: string;
  image: string;
  author: {
    '@type': 'Person';
    name: string;
  };
  publisher: {
    '@type': 'Organization';
    name: string;
    logo: {
      '@type': 'ImageObject';
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
  mainEntityOfPage: {
    '@type': 'WebPage';
    '@id': string;
  };
}

export interface OrganizationSchema {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  description: string;
  url: string;
  logo: string;
  contactPoint: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: string;
    areaServed: string;
    availableLanguage: string;
  };
  sameAs: string[];
  founder: {
    '@type': 'Person';
    name: string;
    jobTitle: string;
  };
  foundingDate: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}

export interface HowToSchema {
  '@context': 'https://schema.org';
  '@type': 'HowTo';
  name: string;
  description: string;
  estimatedCost: {
    '@type': 'MonetaryAmount';
    currency: string;
    value: string;
  };
  totalTime: string;
  step: Array<{
    '@type': 'HowToStep';
    name: string;
    text: string;
  }>;
}

export interface RealEstateListingSchema {
  '@context': 'https://schema.org';
  '@type': 'RealEstateListing';
  name: string;
  description: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  numberOfRooms: number;
  floorSize: {
    '@type': 'QuantitativeValue';
    value: number;
    unitCode: string;
  };
  price: {
    '@type': 'MonetaryAmount';
    currency: string;
    value: string;
  };
  listingStatus: string;
}

/** WebSite schema with SearchAction for sitelinks search box - Google 2025/2026 */
export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.probaterealestatesales.com/#website',
  name: GBP_BUSINESS_NAME,
  /** Short brand + one descriptive alias aligned with GBP-focused positioning */
  alternateName: [SITE_BRAND_PRIMARY, 'Las Vegas Probate Real Estate Sales'],
  url: 'https://www.probaterealestatesales.com',
  description: GBP_DESCRIPTION,
  publisher: {
    '@id': 'https://www.probaterealestatesales.com/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate:
        'https://www.google.com/search?q=site:probaterealestatesales.com+{search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'en-US',
};

/** Person schema for E-E-A-T (Experience, Expertise, Authoritativeness, Trust) - Google 2025/2026 */
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.probaterealestatesales.com/about/#dr-jan-duffy',
  name: 'Dr. Jan Duffy',
  jobTitle: 'Licensed Nevada Real Estate Agent | Probate Real Estate Specialist',
  description:
    'Licensed Nevada real estate professional (S.0197614) specializing in probate, trust, and conservatorship property sales in Las Vegas and Clark County. Ph.D. in Research; experience with Clark County probate procedures and Nevada Revised Statutes.',
  url: 'https://www.probaterealestatesales.com/about/',
  image: 'https://www.probaterealestatesales.com/images/dr-jan-duffy.jpg',
  telephone: SITE_PHONE_E164,
  email: 'DrJanSells@ProbateRealEstateSales.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '400 S 4th St suite 250 b',
    addressLocality: 'Las Vegas',
    addressRegion: 'NV',
    postalCode: '89101',
    addressCountry: 'US',
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: 'Nevada Real Estate License S.0197614',
      recognizedBy: { '@type': 'Organization', name: 'Nevada Real Estate Division' },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'Ph.D. in Research',
    },
  ],
  knowsAbout: [
    'Nevada Probate Law',
    'Clark County Probate Court',
    'Probate Real Estate Sales',
    'Trust Administration',
    'Conservatorship Property Sales',
    'Certificate of Incumbency',
    'Estate Liquidation',
    'Nevada Revised Statutes',
    'Real Estate Market Analysis',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Berkshire Hathaway HomeServices Nevada Properties',
    url: 'https://www.berkshirehathawayhs.com',
  },
  /** Profile URLs (not site pages) — aligned with Organization sameAs in this file */
  sameAs: [
    FACEBOOK_PAGE_URL,
    LINKEDIN_COMPANY_URL,
    INSTAGRAM_PAGE_URL,
    THREADS_PROFILE_URL,
    YOUTUBE_CHANNEL_URL,
  ],
};

// Default schema data for the Nevada probate real estate business
export const defaultSchemas = {
  webSite: webSiteSchema,
  person: personSchema,

  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    /** Stable id for @graph references (e.g. testimonials Review.itemReviewed) */
    '@id': 'https://www.probaterealestatesales.com/#localbusiness',
    name: GBP_BUSINESS_NAME,
    alternateName: [SITE_BRAND_PRIMARY],
    description: GBP_DESCRIPTION,
    url: 'https://www.probaterealestatesales.com',
    telephone: SITE_PHONE_E164,
    email: 'DrJanSells@ProbateRealEstateSales.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '400 S 4th St suite 250 b',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89101',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1699,
      longitude: -115.1398,
    },
    openingHours: [...GBP_OPENING_HOURS_ARRAY],
    priceRange: '$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Check'],
    currenciesAccepted: 'USD',
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 36.1699,
        longitude: -115.1398,
      },
      geoRadius: '50 miles',
    },
    logo: SITE_LOGO_ABSOLUTE_URL,
    image: [
      SITE_LOGO_ABSOLUTE_URL,
      getSiteImageAbsoluteUrl('downtownOffice'),
      getSiteImageAbsoluteUrl('lasVegasHomes'),
      getSiteImageAbsoluteUrl('consultationRoom'),
      getSiteImageAbsoluteUrl('listingsHero'),
      getSiteImageAbsoluteUrl('courthouse'),
      getSiteImageAbsoluteUrl('probateTimeline'),
    ],
    /** Maps listing URL helps Google connect site ↔ Maps ↔ GBP */
    hasMap: OFFICE_GOOGLE_MAPS_LISTING_URL,
    sameAs: getLocalBusinessSameAsUrls(),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Nevada Probate Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nevada Probate Property Valuation',
            description:
              'Professional appraisal and market analysis for inherited properties in Las Vegas area',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Clark County Probate Sale Management',
            description:
              "Complete handling of probate property sales with Nevada's 6-8 month timeline",
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nevada Estate Liquidation',
            description:
              'Comprehensive estate liquidation services following Nevada Revised Statutes',
          },
        },
      ],
    },
  },

  realEstateAgent: {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://www.probaterealestatesales.com/#agent',
    name: GBP_BUSINESS_NAME,
    image: 'https://www.probaterealestatesales.com/images/dr-jan-duffy.jpg',
    description:
      'Licensed Nevada real estate agent specializing in comprehensive probate real estate services, court-approved property sales, and inherited property transactions. Expert in Clark County probate court procedures and Nevada probate law.',
    url: 'https://www.probaterealestatesales.com',
    telephone: SITE_PHONE_E164,
    email: 'DrJanSells@ProbateRealEstateSales.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '400 S 4th St suite 250 b',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89101',
      addressCountry: 'US',
    },
    areaServed: [
      'Las Vegas',
      'Henderson',
      'North Las Vegas',
      'Boulder City',
      'Mesquite',
      'Summerlin',
      'Spring Valley',
      'Enterprise',
      'Anthem',
      'Seven Hills',
      'MacDonald Ranch',
      'Green Valley',
      'Centennial Hills',
      'Southern Highlands',
      'Mountains Edge',
      'Clark County',
      'Washoe County',
      'Nevada',
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 36.1699,
        longitude: -115.1398,
      },
      geoRadius: '50 miles',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
      url: 'https://www.berkshirehathawayhs.com',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Nevada Probate Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nevada Probate Property Sales',
            description: "Expert guidance through Nevada's 6-8 month probate process",
            provider: {
              '@type': 'Organization',
              name: 'Las Vegas Probate Real Estate Sales',
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nevada Estate Planning Consultation',
            description: 'Strategic advice for estate planning following Nevada Revised Statutes',
            provider: {
              '@type': 'Organization',
              name: 'Las Vegas Probate Real Estate Sales',
            },
          },
        },
      ],
    },
  },

  legalService: {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: GBP_BUSINESS_NAME,
    description:
      'Comprehensive probate legal services in Nevada, including certificate of incumbency, trust administration, and probate court representation.',
    provider: {
      '@type': 'Organization',
      name: GBP_BUSINESS_NAME,
      url: 'https://www.probaterealestatesales.com',
    },
    serviceType: 'Probate Administration',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Clark County, Nevada',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Nevada Probate Legal Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Certificate of Incumbency',
            description: 'Nevada certificate of incumbency (affidavit of successor trustee) - $750',
            price: '750.00',
            priceCurrency: 'USD',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Probate Administration',
            description: 'Complete Nevada probate administration - $8,000-9,000',
            price: '8000-9000',
            priceCurrency: 'USD',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Trust Administration',
            description:
              'Nevada trust administration - $2,500 (3 months vs 6-8 months for probate)',
            price: '2500.00',
            priceCurrency: 'USD',
          },
        },
      ],
    },
  },

  faqPage: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does probate take in Nevada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nevada probate typically takes 6-8 months, which is faster than California's 9-18 month process. Clark County has two probate commissioners: James Fontana (Fridays) and Russell Geis (Wednesdays at 9:30 AM). Court orders take about 3 weeks to release.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is a certificate of incumbency in Nevada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "A certificate of incumbency in Nevada is a 5-7 page document (also known as affidavit of successor trustee) that's required after trustors die. It costs $750 from attorneys and must be recorded with Clark County. This document is essential for trust administration and property transfers.",
        },
      },
      {
        '@type': 'Question',
        name: 'How much does probate cost in Las Vegas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nevada probate costs average $8,000-9,000 in attorney fees. Court costs vary by county: Clark County $1,000, Washoe County $1,300, and rural counties like Esmeralda $850. Trust administration is more affordable at $2,500 and takes only 3 months.',
        },
      },
      {
        '@type': 'Question',
        name: "What is Nevada's small estate limit?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nevada's small estate limit is $100,000 (vs California's $184,500). For estates under $25,000, Nevada offers a simplified 'set-aside' procedure that avoids formal probate entirely. This makes Nevada an attractive option for smaller estates.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a certificate of incumbency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, if you're dealing with a trust after the trustors have passed away. The certificate of incumbency proves your authority as successor trustee and is required for property transfers, bank accounts, and other trust assets. Title companies cannot create these documents - only attorneys can.",
        },
      },
      {
        '@type': 'Question',
        name: 'What are the two methods of selling property in Nevada probate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nevada offers two methods: 1) Court Confirmation - requires court approval for each step, and 2) Independent Administration - gives the personal representative more authority to act without court supervision. Independent administration is faster and more cost-effective but requires family cooperation.',
        },
      },
    ],
  },

  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    /** Must match `webSiteSchema.publisher.@id` (Search Central: stable entity IDs in JSON-LD). */
    '@id': 'https://www.probaterealestatesales.com/#organization',
    name: GBP_BUSINESS_NAME,
    description: GBP_DESCRIPTION,
    url: 'https://www.probaterealestatesales.com',
    logo: SITE_LOGO_ABSOLUTE_URL,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_PHONE_E164,
      contactType: 'customer service',
      areaServed: 'US-NV',
      availableLanguage: 'English',
    },
    sameAs: [
      FACEBOOK_PAGE_URL,
      LINKEDIN_COMPANY_URL,
      INSTAGRAM_PAGE_URL,
      THREADS_PROFILE_URL,
      YOUTUBE_CHANNEL_URL,
    ],
    founder: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      jobTitle: 'Founder & Principal Broker',
    },
    foundingDate: GBP_OPENING_DATE_ISO,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '400 S 4th St suite 250 b',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89101',
      addressCountry: 'US',
    },
  },

  howTo: {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Sell Property in Nevada Probate',
    description:
      "Complete guide to selling inherited property through Nevada's probate process, including timeline, costs, and required documents.",
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '9000',
    },
    totalTime: 'P6M',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Obtain Letters Testamentary',
        text: 'File with Clark County District Court to obtain letters testamentary or letters of administration. This gives you legal authority to act on behalf of the estate.',
      },
      {
        '@type': 'HowToStep',
        name: 'Sign Binding Listing Agreement',
        text: 'Once letters are issued with court stamp and signature, you can sign a binding listing agreement. This cannot be done before obtaining proper court authority.',
      },
      {
        '@type': 'HowToStep',
        name: 'Choose Sale Method',
        text: 'Select between court confirmation (requires court approval for each step) or independent administration (more authority, faster process).',
      },
      {
        '@type': 'HowToStep',
        name: 'Complete Property Transfer',
        text: "Follow Nevada's 6-8 month timeline, ensuring all 30 required documents are properly filed with the court.",
      },
    ],
  },
};

const SITE_BASE_URL = 'https://www.probaterealestatesales.com';

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      let absoluteUrl: string;
      if (item.url.startsWith('http://') || item.url.startsWith('https://')) {
        absoluteUrl = item.url;
      } else {
        const path = item.url.startsWith('/') ? item.url : `/${item.url}`;
        const pathWithSlash = path.length > 1 && !path.endsWith('/') ? `${path}/` : path;
        absoluteUrl = `${SITE_BASE_URL}${pathWithSlash}`;
      }
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: absoluteUrl,
      };
    }),
  };
}

export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image: string;
  author: string;
  datePublished: string;
  dateModified: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    /** Reference global Organization in layout JSON-LD (avoid duplicate publisher blobs). */
    publisher: { '@id': 'https://www.probaterealestatesales.com/#organization' },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}

export function generateLegalServiceSchema(service: {
  name: string;
  description: string;
  price: string;
  area: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Las Vegas Probate Real Estate Sales',
      url: 'https://www.probaterealestatesales.com',
    },
    serviceType: 'Probate Administration',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: service.area,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Nevada Probate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
            price: service.price,
            priceCurrency: 'USD',
          },
        },
      ],
    },
  };
}

/** Stable @id — must match `defaultSchemas.localBusiness['@id']` (layout JSON-LD). */
export const SITE_LOCAL_BUSINESS_JSONLD_ID =
  'https://www.probaterealestatesales.com/#localbusiness' as const;

const LOCAL_ORG_REVIEW_TARGET_ID = `${SITE_LOCAL_BUSINESS_JSONLD_ID}-org`;

function resolveItemReviewed(item?: { name: string; type?: string }) {
  const name = item?.name ?? GBP_BUSINESS_NAME;
  if (item?.type === 'Organization') {
    return {
      '@type': 'Organization' as const,
      '@id': LOCAL_ORG_REVIEW_TARGET_ID,
      name,
      url: 'https://www.probaterealestatesales.com/',
    };
  }
  /** Google review snippets: itemReviewed must be a supported type (e.g. LocalBusiness). */
  return {
    '@type': 'LocalBusiness' as const,
    '@id': SITE_LOCAL_BUSINESS_JSONLD_ID,
    name,
    url: 'https://www.probaterealestatesales.com/',
  };
}

/** Fields for a Review nested under LocalBusiness `review` (omit itemReviewed per Google). */
export type NestedReviewForLocalBusinessInput = {
  author: string;
  reviewBody: string;
  ratingValue: number;
  datePublished: string;
  bestRating?: number;
  worstRating?: number;
};

/**
 * One LocalBusiness node with nested `review` + `aggregateRating`.
 * Use on pages that show multiple reviews so Google does not treat each Review as an orphan
 * (avoids Review snippet "invalid parent" / parent_node issues). Same @id as layout merges graph.
 *
 * @see https://developers.google.com/search/docs/appearance/structured-data/review-snippet#embedded-review-example
 */
export function buildLocalBusinessNestedReviewsStructuredData(
  reviews: NestedReviewForLocalBusinessInput[]
): Record<string, unknown> {
  const count = reviews.length;
  const sum = reviews.reduce((acc, r) => acc + r.ratingValue, 0);
  const ratingValue = count === 0 ? 0 : Math.round((sum / count) * 100) / 100;

  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': SITE_LOCAL_BUSINESS_JSONLD_ID,
    name: GBP_BUSINESS_NAME,
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewBody: r.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.ratingValue,
        bestRating: r.bestRating ?? 5,
        worstRating: r.worstRating ?? 1,
      },
      datePublished: r.datePublished,
    })),
  };

  if (count > 0) {
    base.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount: count,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return base;
}

export function generateReviewSchema(review: {
  author: string;
  reviewBody: string;
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
  datePublished: string;
  itemReviewed?: {
    name: string;
    type?: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewBody: review.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.ratingValue,
      bestRating: review.bestRating || 5,
      worstRating: review.worstRating || 1,
    },
    datePublished: review.datePublished,
    itemReviewed: resolveItemReviewed(review.itemReviewed),
  };
}

/** Use nested on LocalBusiness/Product; AggregateRating has no itemReviewed in schema.org. */
export function generateAggregateRatingSchema(rating: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: rating.ratingValue,
    reviewCount: rating.reviewCount,
    bestRating: rating.bestRating || 5,
    worstRating: rating.worstRating || 1,
  };
}

export function generatePersonSchema(person: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  email?: string;
  telephone?: string;
  url?: string;
  sameAs?: string[];
  knowsAbout?: string[];
  award?: string[];
  alumniOf?: string;
  worksFor?: {
    name: string;
    url?: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    ...(person.image && { image: person.image }),
    ...(person.email && { email: person.email }),
    ...(person.telephone && { telephone: person.telephone }),
    ...(person.url && { url: person.url }),
    ...(person.sameAs && person.sameAs.length > 0 && { sameAs: person.sameAs }),
    ...(person.knowsAbout && person.knowsAbout.length > 0 && { knowsAbout: person.knowsAbout }),
    ...(person.award && person.award.length > 0 && { award: person.award }),
    ...(person.alumniOf && { alumniOf: person.alumniOf }),
    ...(person.worksFor && {
      worksFor: {
        '@type': 'Organization',
        name: person.worksFor.name,
        ...(person.worksFor.url && { url: person.worksFor.url }),
      },
    }),
  };
}

export function generateWebSiteSchema(site: {
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    target: string;
    queryInput: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    ...(site.description && { description: site.description }),
    ...(site.potentialAction && {
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: site.potentialAction.target,
        },
        'query-input': site.potentialAction.queryInput,
      },
    }),
  };
}

export function generateVideoObjectSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
  publisher?: {
    name: string;
    logo?: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    ...(video.duration && { duration: video.duration }),
    ...(video.contentUrl && { contentUrl: video.contentUrl }),
    ...(video.embedUrl && { embedUrl: video.embedUrl }),
    ...(video.publisher && {
      publisher: {
        '@type': 'Organization',
        name: video.publisher.name,
        ...(video.publisher.logo && {
          logo: {
            '@type': 'ImageObject',
            url: video.publisher.logo,
          },
        }),
      },
    }),
  };
}

export function generateWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
  isPartOf?: {
    name: string;
    url: string;
  };
  breadcrumb?: Array<{ name: string; url: string }>;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.name,
    description: page.description,
    url: page.url,
    ...(page.isPartOf && {
      isPartOf: {
        '@type': 'WebSite',
        name: page.isPartOf.name,
        url: page.isPartOf.url,
      },
    }),
    ...(page.breadcrumb &&
      page.breadcrumb.length > 0 && {
        breadcrumb: generateBreadcrumbSchema(page.breadcrumb),
      }),
    ...(page.datePublished && { datePublished: page.datePublished }),
    ...(page.dateModified && { dateModified: page.dateModified }),
    ...(page.author && {
      author: {
        '@type': 'Person',
        name: page.author,
      },
    }),
  };
}
