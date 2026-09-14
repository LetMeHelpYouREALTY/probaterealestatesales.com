'use client';

import Head from 'next/head';
import { getLocalBusinessSameAsUrls, OFFICE_GOOGLE_MAPS_LISTING_URL } from '@/config/site-google';
import {
  GBP_BUSINESS_NAME,
  GBP_DESCRIPTION,
  GBP_OPENING_HOURS_ARRAY,
  SITE_PHONE_E164,
  SITE_WEBSITE_GBP,
} from '@/lib/site-contact';

interface SEOMetaTagsProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile' | 'business.business';
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleSection?: string;
  articleTags?: string[];
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  language?: string;
  region?: string;
}

export default function SEOMetaTags({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  articleAuthor,
  articlePublishedTime,
  articleModifiedTime,
  articleSection,
  articleTags = [],
  twitterCard = 'summary_large_image',
  twitterSite = '@probaterealestate',
  twitterCreator = '@DrJanDuffy',
  noIndex = false,
  noFollow = false,
  language = 'en-US',
  region = 'US-NV',
}: SEOMetaTagsProps) {
  const fullTitle = title.includes('Probate Real Estate')
    ? title
    : `${title} | Probate Real Estate Sales - Las Vegas, NV`;

  const fullDescription =
    description.length > 160 ? `${description.substring(0, 157)}...` : description;

  const defaultKeywords = [
    'probate real estate',
    'inherited property',
    'estate liquidation',
    'probate sales',
    'Las Vegas real estate',
    'Nevada probate',
    'inheritance property',
    'estate planning',
    'real estate agent',
    'inherited property worth',
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content="Dr. Jan Duffy" />
      <meta name="robots" content={noIndex ? 'noindex' : 'index'} />
      {noFollow && <meta name="robots" content="nofollow" />}

      {/* Language and Region */}
      <meta httpEquiv="content-language" content={language} />
      <meta name="geo.region" content={region} />
      <meta name="geo.placename" content="Las Vegas, Nevada" />
      <meta name="geo.position" content="36.1699;-115.1398" />
      <meta name="ICBM" content="36.1699, -115.1398" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || 'https://www.probaterealestatesales.com'} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={GBP_BUSINESS_NAME} />
      <meta property="og:locale" content={language} />

      {/* Article-specific Open Graph tags */}
      {ogType === 'article' && articleAuthor && (
        <meta property="article:author" content={articleAuthor} />
      )}
      {ogType === 'article' && articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {ogType === 'article' && articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {ogType === 'article' && articleSection && (
        <meta property="article:section" content={articleSection} />
      )}
      {ogType === 'article' &&
        articleTags.length > 0 &&
        articleTags.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* Business-specific Meta Tags */}
      <meta name="business:contact_data:street_address" content="400 S 4th St suite 250 b" />
      <meta name="business:contact_data:locality" content="Las Vegas" />
      <meta name="business:contact_data:region" content="NV" />
      <meta name="business:contact_data:postal_code" content="89101" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content={SITE_PHONE_E164} />
      <meta name="business:contact_data:email" content="DrJanSells@ProbateRealEstateSales.com" />
      <meta name="business:contact_data:website" content={SITE_WEBSITE_GBP} />

      {/* Additional SEO Meta Tags */}
      <meta name="classification" content="Real estate agent" />
      <meta name="category" content="Business" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="revisit-after" content="7 days" />
      <meta name="generator" content="Next.js" />

      {/* Mobile and Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Probate Real Estate Sales" />

      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* DNS prefetch only (no preconnect) per Lighthouse: avoid unused preconnect on this page. */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google.com" />
      <link rel="dns-prefetch" href="https://maps.googleapis.com" />

      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: GBP_BUSINESS_NAME,
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
            hasMap: OFFICE_GOOGLE_MAPS_LISTING_URL,
            sameAs: getLocalBusinessSameAsUrls(),
            priceRange: '$$',
            paymentAccepted: ['Cash', 'Credit Card', 'Check'],
            areaServed: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 36.1699,
                longitude: -115.1398,
              },
              geoRadius: '50 miles',
            },
          }),
        }}
      />
    </Head>
  );
}
