'use client';

import { useEffect } from 'react';
import {
  defaultSchemas,
  generateAggregateRatingSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateLegalServiceSchema,
  generatePersonSchema,
  generateReviewSchema,
  generateVideoObjectSchema,
  generateWebPageSchema,
} from '@/lib/schema';
import { GBP_BUSINESS_NAME, SITE_PHONE_E164 } from '@/lib/site-contact';

/** Returns true if schema is or contains an FAQPage (root, inside @graph, or in array). Used to avoid duplicate FAQPage. */
function schemaIsOrContainsFAQPage(schema: any): boolean {
  if (!schema) return false;
  if (typeof schema !== 'object') return false;
  if (schema['@type'] === 'FAQPage') return true;
  if (Array.isArray(schema)) return schema.some((item: any) => schemaIsOrContainsFAQPage(item));
  const graph = schema['@graph'];
  if (Array.isArray(graph))
    return graph.some((item: any) => item && schemaIsOrContainsFAQPage(item));
  return false;
}

/** Alias for clarity when checking customSchema. */
function customSchemaHasFAQPage(schema: any): boolean {
  return schemaIsOrContainsFAQPage(schema);
}

interface SchemaMarkupProps {
  type:
    | 'home'
    | 'service'
    | 'faq'
    | 'breadcrumb'
    | 'article'
    | 'contact'
    | 'legal'
    | 'location'
    | 'property';
  breadcrumbs?: Array<{ name: string; url: string }>;
  article?: {
    headline: string;
    description: string;
    image: string;
    author: string;
    datePublished: string;
    dateModified: string;
    url: string;
  };
  customSchema?: any;
  location?: string;
  serviceType?: string;
  reviews?: Array<{
    author: string;
    reviewBody: string;
    ratingValue: number;
    datePublished: string;
    itemReviewed?: { name: string; type?: string };
  }>;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  person?: {
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
  };
  video?: {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration?: string;
    contentUrl?: string;
    embedUrl?: string;
    publisher?: { name: string; logo?: string };
  };
  webPage?: {
    name: string;
    description: string;
    url: string;
    isPartOf?: { name: string; url: string };
    datePublished?: string;
    dateModified?: string;
    author?: string;
  };
}

export default function SchemaMarkup({
  type,
  breadcrumbs,
  article,
  customSchema,
  location,
  serviceType,
  reviews,
  aggregateRating,
  person,
  video,
  webPage,
}: SchemaMarkupProps) {
  useEffect(() => {
    // Remove only scripts we previously added (avoid touching layout's JSON-LD to prevent React 418 hydration mismatch)
    const ourScripts = document.querySelectorAll(
      'script[type="application/ld+json"][data-schema-markup="page"]'
    );
    for (const script of ourScripts) {
      script.remove();
    }

    // Generate schema based on page type
    let schemas: any[] = [];

    switch (type) {
      /** Homepage: FAQ + HowTo only — layout already emits WebSite, Organization, LocalBusiness, agent, Person, LegalService (Search Essentials: avoid duplicate entity JSON-LD). */
      case 'home':
        schemas = [defaultSchemas.faqPage, defaultSchemas.howTo];
        break;

      case 'service':
        schemas = [
          defaultSchemas.localBusiness,
          defaultSchemas.realEstateAgent,
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Nevada Probate Real Estate Services',
            description:
              'Comprehensive probate real estate services in Las Vegas and Clark County, including court-approved property sales, inherited property worth assessment, sale management, and estate liquidation following Nevada Revised Statutes.',
            provider: {
              '@type': 'Organization',
              name: 'Las Vegas Probate Real Estate Sales',
              url: 'https://www.probaterealestatesales.com',
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
              'Nevada',
            ],
            serviceType: 'Probate Real Estate Services',
            offers: {
              '@type': 'Offer',
              description:
                'Professional Nevada probate real estate services with 6-8 month timeline',
              price: 'Variable',
              priceCurrency: 'USD',
            },
          },
        ];
        break;

      case 'legal':
        schemas = [
          {
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'Nevada Probate Legal Services',
            description:
              'Expert legal services for Nevada probate administration, including certificate of incumbency, trust administration, and court representation.',
            provider: {
              '@type': 'Organization',
              name: 'Las Vegas Probate Real Estate Sales',
              url: 'https://www.probaterealestatesales.com',
            },
            serviceType: 'Probate Administration',
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Clark County, Nevada',
            },
          },
        ];
        break;

      case 'location':
        if (location) {
          schemas = [
            {
              '@context': 'https://schema.org',
              '@type': 'Place',
              name: `${location} Probate Real Estate Services`,
              description: `Expert probate real estate services in ${location}, Nevada. Specialized in inherited property sales with Nevada's fastest probate process.`,
              address: {
                '@type': 'PostalAddress',
                addressLocality: location,
                addressRegion: 'NV',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.1699,
                longitude: -115.1398,
              },
              containedInPlace: {
                '@type': 'AdministrativeArea',
                name: 'Clark County, Nevada',
              },
            },
          ];
        }
        break;

      case 'property':
        schemas = [
          {
            '@context': 'https://schema.org',
            '@type': 'RealEstateListing',
            name: 'Nevada Probate Property',
            description: 'Inherited property available for sale through Nevada probate process',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'NV',
              addressCountry: 'US',
            },
            listingStatus: 'For Sale',
            provider: {
              '@type': 'Organization',
              name: 'Las Vegas Probate Real Estate Sales',
            },
          },
        ];
        break;

      case 'faq':
        schemas = [defaultSchemas.howTo];
        if (!customSchema || !customSchemaHasFAQPage(customSchema)) {
          schemas.unshift(defaultSchemas.faqPage);
        }
        break;

      /** Hub pages: BreadcrumbList only (layout already injects Person + LocalBusiness) */
      case 'breadcrumb':
        schemas = [];
        break;

      case 'article':
        if (article) {
          schemas = [generateArticleSchema(article)];
        }
        break;

      case 'contact':
        schemas = [
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Contact Las Vegas Probate Real Estate Experts',
            description:
              'Get in touch with our Nevada probate real estate experts for free consultation',
            mainEntity: {
              '@type': 'Organization',
              name: GBP_BUSINESS_NAME,
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: SITE_PHONE_E164,
                contactType: 'customer service',
                areaServed: 'US-NV',
                availableLanguage: 'English',
              },
            },
          },
        ];
        break;
    }

    // Add breadcrumbs if provided
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push(generateBreadcrumbSchema(breadcrumbs));
    }

    // Add reviews if provided
    if (reviews && reviews.length > 0) {
      reviews.forEach((review) => {
        schemas.push(generateReviewSchema(review));
      });
    }

    // Add aggregate rating if provided
    if (aggregateRating) {
      schemas.push(generateAggregateRatingSchema(aggregateRating));
    }

    // Add person schema if provided
    if (person) {
      schemas.push(generatePersonSchema(person));
    }

    // Add video schema if provided
    if (video) {
      schemas.push(generateVideoObjectSchema(video));
    }

    // Add web page schema if provided
    if (webPage) {
      schemas.push(generateWebPageSchema(webPage));
    }

    // Add custom schema if provided
    if (customSchema) {
      schemas.push(customSchema);
    }

    // Add location-specific legal service schema if applicable
    if (location && serviceType) {
      schemas.push(
        generateLegalServiceSchema({
          name: `${location} ${serviceType}`,
          description: `${serviceType} services in ${location}, Nevada`,
          price: 'Variable',
          area: location,
        })
      );
    }

    // Ensure at most one FAQPage per page (Google: "There must be one FAQPage type definition per page")
    let seenFAQPage = false;
    schemas = schemas.filter((s) => {
      if (schemaIsOrContainsFAQPage(s)) {
        if (seenFAQPage) return false;
        seenFAQPage = true;
      }
      return true;
    });

    // Inject schemas into head (mark so we only remove these, not layout's scripts)
    for (let index = 0; index < schemas.length; index++) {
      const schema = schemas[index];
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-schema-markup', 'page');
      script.text = JSON.stringify(schema);
      script.id = `schema-${index}`;
      document.head.appendChild(script);
    }

    // Cleanup: remove only our page-injected scripts
    return () => {
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"][data-schema-markup="page"]'
      );
      for (const script of scripts) {
        script.remove();
      }
    };
  }, [
    type,
    breadcrumbs,
    article,
    customSchema,
    location,
    serviceType,
    reviews,
    aggregateRating,
    person,
    video,
    webPage,
  ]);

  return null; // This component doesn't render anything visible
}
