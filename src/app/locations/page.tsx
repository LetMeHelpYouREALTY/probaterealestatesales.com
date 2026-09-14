import { ArrowRight, Clock, DollarSign, Users } from 'lucide-react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import GbpLocalActions from '@/components/GbpLocalActions';
import GbpOfficeMap from '@/components/GbpOfficeMap';
import PageHero from '@/components/PageHero';
import RealScoutOfficeListings from '@/components/RealScoutOfficeListings';
import SchemaMarkup from '@/components/SchemaMarkup';
import SiteImage from '@/components/SiteImage';
import { getLocationImageId } from '@/lib/cloudflare-images';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading FAQ...</div>,
});

export const metadata: Metadata = {
  title: 'Probate Las Vegas | Nevada Probate Real Estate Services | All Locations',
  description: `Probate Las Vegas expert services. Expert probate realtor serving Las Vegas, Henderson, Summerlin, North Las Vegas and all Clark County. Nevada's fastest probate: 6-8 months. Free consultation: ${SITE_PHONE_DISPLAY}`,
  keywords:
    'probate las vegas, Las Vegas probate, probate realtor Las Vegas, Nevada probate real estate, Henderson probate, Summerlin probate, Clark County probate, probate las vegas nevada',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/locations/',
  },
  openGraph: {
    title: 'Probate Las Vegas | Nevada Probate Real Estate Services | All Locations',
    description:
      "Probate Las Vegas expert services. Expert probate realtor serving all Clark County areas. Nevada's fastest probate: 6-8 months. Free consultation.",
    type: 'website',
    locale: 'en_US',
    url: 'https://www.probaterealestatesales.com/locations/',
  },
};

const locations = [
  {
    name: 'Las Vegas',
    slug: 'las-vegas',
    description: 'Downtown and Strip area probate real estate services',
    features: ['Downtown probate court access', 'Strip area properties', 'Quick market analysis'],
    probateTimeline: '6-8 months',
    courtCosts: '$1,000',
  },
  {
    name: 'Henderson',
    slug: 'henderson',
    description: 'Green Valley and Anthem probate property expertise',
    features: [
      'Green Valley Ranch area',
      'Anthem community',
      'Green Valley Ranch golf course homes',
    ],
    probateTimeline: '6-8 months',
    courtCosts: '$1,000',
  },
  {
    name: 'Summerlin',
    slug: 'summerlin',
    description: 'Master-planned community probate real estate',
    features: ['Luxury home probate sales', 'Golf course properties', 'High-end market expertise'],
    probateTimeline: '6-8 months',
    courtCosts: '$1,000',
  },
  {
    name: 'North Las Vegas',
    slug: 'north-las-vegas',
    description: 'Aliante and Centennial Hills probate services',
    features: ['Aliante area properties', 'Centennial Hills homes', 'Growing market opportunities'],
    probateTimeline: '6-8 months',
    courtCosts: '$1,000',
  },
  {
    name: 'Boulder City',
    slug: 'boulder-city',
    description: 'Historic area probate property management',
    features: ['Historic home expertise', 'Lake Mead proximity', 'Small town probate process'],
    probateTimeline: '6-8 months',
    courtCosts: '$1,000',
  },
  {
    name: 'Mesquite',
    slug: 'mesquite',
    description: 'Golf community probate real estate',
    features: ['Golf course properties', 'Virgin Valley homes', 'Desert landscape homes'],
    probateTimeline: '6-8 months',
    courtCosts: '$1,000',
  },
  {
    name: 'Spring Valley',
    slug: 'spring-valley',
    description: 'Residential area probate services',
    features: [
      'Single-story and two-story residences',
      'Southwest Las Vegas streets',
      'Mid-valley probate listings',
    ],
    probateTimeline: '6-8 months',
    courtCosts: '$1,000',
  },
  {
    name: 'Enterprise',
    slug: 'enterprise',
    description: 'Southwest Las Vegas probate expertise',
    features: ['Newer developments', 'Growing area', 'Modern home probate sales'],
    probateTimeline: '6-8 months',
    courtCosts: '$1,000',
  },
];

export default function LocationsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations/' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <SchemaMarkup type="faq" breadcrumbs={breadcrumbs} />

      <PageHero
        title="Nevada Probate Real Estate Services"
        subtitle="Expert probate real estate services across Las Vegas, Henderson, Summerlin, and Clark County. Nevada's 6-8 month probate timeline vs California's 9-18 months."
        imageId="listingsHero"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>6-8 Month Timeline</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            <span>Clark County: $1,000 Court Costs</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <span>2 Probate Commissioners</span>
          </div>
        </div>
      </PageHero>

      {/* Nevada Advantage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Nevada for Probate Real Estate?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nevada offers significant advantages over other states for probate property sales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Faster Timeline</h3>
              <p className="text-gray-600">
                Nevada: 6-8 months vs California: 9-18 months. Get your inheritance faster with
                Nevada's efficient probate process.
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lower Costs</h3>
              <p className="text-gray-600">
                Clark County court costs: $1,000. Trust administration: $2,500 vs Probate:
                $8,000-9,000.
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Access</h3>
              <p className="text-gray-600">
                Direct access to Clark County's two probate commissioners. Personalized service and
                faster court processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Probate Real Estate Services by Location
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert probate real estate services across all major Nevada locations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <div
                key={location.slug}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <SiteImage
                    imageId={getLocationImageId(location.slug)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{location.name}</h3>
                  <p className="text-gray-600 mb-4">{location.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>Timeline: {location.probateTimeline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <DollarSign className="h-4 w-4" />
                      <span>Court Costs: {location.courtCosts}</span>
                    </div>
                  </div>

                  <ul className="space-y-1 mb-6">
                    {location.features.map((feature, featureIndex) => (
                      <li
                        key={`${location.slug}-feature-${featureIndex}`}
                        className="text-sm text-gray-600 flex items-center gap-2"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/locations/${location.slug}/`}
                    className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View {location.name} Services
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <GbpLocalActions variant="stack" className="mb-10 items-center text-center" />
          <GbpOfficeMap heading="Google Maps pin — Probate Real Estate Sales, Las Vegas" />
        </div>
      </section>

      <RealScoutOfficeListings
        title="Current Las Vegas Properties Available"
        subtitle="Browse our current inventory of properties in the Las Vegas area. These properties are available for immediate purchase with our expert guidance."
        themeColor="blue"
      />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Nevada Probate
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about probate real estate services across Nevada locations
              </p>
            </div>
            <FAQ />
            <div className="text-center mt-8">
              <Link
                href="/faq/"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
              >
                View All FAQs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Nevada Probate Process?</h2>
          <p className="text-xl mb-8">
            Get a free consultation and learn how Nevada's faster probate timeline can help you sell
            inherited property quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE_PHONE_TEL_HREF}
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Call {SITE_PHONE_DISPLAY}
            </a>
            <Link
              href="/contact/"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
