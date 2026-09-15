import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { CalendlyBadgeScript } from '@/components/calendly/CalendlyBadgeScript';
import Footer from '@/components/Footer';
import GbpLocalActions from '@/components/GbpLocalActions';
import Navigation from '@/components/Navigation';
import { getLocalBusinessSameAsUrls, OFFICE_GOOGLE_MAPS_LISTING_URL } from '@/config/site-google';
import { defaultSchemas } from '@/lib/schema';
import {
  GBP_BUSINESS_NAME,
  GBP_DESCRIPTION,
  GBP_OPENING_HOURS_STRING,
  SITE_PHONE_E164,
} from '@/lib/site-contact';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Probate Real Estate Sales | Las Vegas & Clark County Probate Real Estate',
  description:
    "Expert probate real estate services in Las Vegas and Clark County. Specialized in comprehensive probate real estate services, court-approved property sales, and estate liquidation with Nevada's fastest probate process (6-8 months vs California's 9-18 months).",
  keywords:
    'probate real estate sales, probate homes Las Vegas, Clark County probate, probate property sales, inherited property sales, Nevada probate real estate',
  authors: [
    { name: 'Probate Real Estate Sales' },
    { name: 'Dr. Jan Duffy', url: 'https://www.probaterealestatesales.com/about/' },
  ],
  openGraph: {
    title: 'Probate Real Estate Sales | Las Vegas & Clark County Probate Real Estate',
    description:
      "Expert probate real estate services in Las Vegas and Clark County. Specialized in comprehensive probate real estate services, court-approved property sales, and estate liquidation with Nevada's fastest probate process (6-8 months vs California's 9-18 months).",
    type: 'website',
    locale: 'en_US',
    siteName: GBP_BUSINESS_NAME,
    url: 'https://www.probaterealestatesales.com/',
    images: [
      {
        url: '/images/og-dr-jan-duffy.jpg',
        width: 1200,
        height: 630,
        alt: 'Probate Real Estate Sales — Las Vegas probate real estate services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Probate Real Estate Sales | Las Vegas & Clark County',
    description:
      "Expert probate real estate services in Las Vegas and Clark County. Nevada's fastest probate process: 6-8 months vs California's 9-18 months.",
    images: ['/images/og-dr-jan-duffy.jpg'],
  },
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://www.probaterealestatesales.com'),
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Las Vegas, Nevada',
    'geo.position': '36.1699;-115.1398',
    ICBM: '36.1699, -115.1398',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0369a1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Sitemap for crawlers */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        {/* DNS prefetch only (no preconnect): GTM/GA/RealScout load afterInteractive/lazyOnload so preconnect was unused per Lighthouse. */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://imagedelivery.net" />
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />

        {/* WebSite + LocalBusiness + RealEstateAgent + Person (E-E-A-T) - on every page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(defaultSchemas.webSite),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(defaultSchemas.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(defaultSchemas.localBusiness),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(defaultSchemas.realEstateAgent),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(defaultSchemas.person),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LegalService',
              name: GBP_BUSINESS_NAME,
              description: GBP_DESCRIPTION,
              url: 'https://www.probaterealestatesales.com',
              logo: 'https://www.probaterealestatesales.com/images/dr-jan-duffy.jpg',
              image: 'https://www.probaterealestatesales.com/images/dr-jan-duffy.jpg',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '400 S 4th St suite 250 b',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                postalCode: '89101',
                addressCountry: 'US',
              },
              telephone: SITE_PHONE_E164,
              email: 'DrJanSells@ProbateRealEstateSales.com',
              openingHours: GBP_OPENING_HOURS_STRING,
              priceRange: '$$',
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.1699,
                longitude: -115.1398,
              },
              areaServed: [
                { '@type': 'City', name: 'Las Vegas' },
                { '@type': 'City', name: 'Henderson' },
                { '@type': 'City', name: 'Summerlin' },
                { '@type': 'City', name: 'North Las Vegas' },
                { '@type': 'City', name: 'Boulder City' },
                { '@type': 'City', name: 'Mesquite' },
                { '@type': 'AdministrativeArea', name: 'Clark County' },
              ],
              hasMap: OFFICE_GOOGLE_MAPS_LISTING_URL,
              sameAs: getLocalBusinessSameAsUrls(),
              knowsAbout: [
                'Probate Real Estate',
                'Estate Administration',
                'Property Sales',
                'Nevada Law',
                'Real Estate Law',
                'Clark County Probate Court',
                'Nevada Probate Timeline',
                'Estate Liquidation',
              ],
            }),
          }}
        />

        {/* Google Search Console Verification */}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
          />
        )}
      </head>
      <body className={`${inter.className} antialiased text-secondary-900 bg-white`}>
        {/* RealScout script loaded only on widget pages via useRealScoutScript (see RealScoutOfficeListings, Services). */}
        {/* Google tag (gtag.js): lazyOnload to avoid competing with LCP (Lighthouse). */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P0TH2525DP"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P0TH2525DP', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `}
        </Script>
        <Navigation />
        <GbpLocalActions />
        <main>{children}</main>
        <Footer />
        <CalendlyBadgeScript />
      </body>
    </html>
  );
}
