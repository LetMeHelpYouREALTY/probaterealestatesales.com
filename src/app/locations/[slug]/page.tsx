import { ArrowRight, Calendar, Clock, DollarSign, Home, MapPin, Phone, Users } from 'lucide-react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/Breadcrumb';
import GbpLocalActions from '@/components/GbpLocalActions';
import GbpOfficeMap from '@/components/GbpOfficeMap';
import PageHero from '@/components/PageHero';
import RealScoutOfficeListings from '@/components/RealScoutOfficeListings';
import SchemaMarkup from '@/components/SchemaMarkup';
import SectionVisual from '@/components/SectionVisual';
import { getLocationImageId, getSiteImageSrc } from '@/lib/cloudflare-images';
import {
  HYPERLOCAL_LOCATIONS,
  type LocationThemeColor,
  NEVADA_PROBATE_FACTS,
  SITE_CONFIG,
} from '@/lib/hyperlocal';

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading FAQ...</div>,
});

const LOCATION_SLUGS = HYPERLOCAL_LOCATIONS.map((l) => l.slug);

export function generateStaticParams() {
  return LOCATION_SLUGS.map((slug) => ({ slug }));
}

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = HYPERLOCAL_LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: `${loc.name} Probate Real Estate Services | Nevada Probate | Dr. Jan Duffy`,
    description: `Expert probate real estate services in ${loc.name}, Nevada. ${loc.description} Nevada's fastest probate: 6-8 months. Free consultation: ${SITE_CONFIG.phone}`,
    alternates: { canonical: `https://www.probaterealestatesales.com/locations/${slug}/` },
    robots: { index: true, follow: true },
    openGraph: {
      title: `${loc.name} Probate Real Estate Services | Nevada Probate | Dr. Jan Duffy`,
      description: `Expert probate real estate services in ${loc.name}, Nevada. ${loc.description}`,
      images: [
        {
          url: getSiteImageSrc(getLocationImageId(slug)),
          width: 1200,
          height: 675,
          alt: `${loc.name} Nevada probate real estate`,
        },
      ],
    },
  };
}

const themeAccent: Record<LocationThemeColor, string> = {
  blue: 'text-blue-600',
  green: 'text-green-600',
  slate: 'text-slate-600',
  amber: 'text-amber-600',
};

export default async function LocationSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = HYPERLOCAL_LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations/' },
    { name: loc.name, url: `/locations/${slug}/` },
  ];

  const theme = loc.themeColor ?? 'blue';
  const accentClass = themeAccent[theme];

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <SchemaMarkup type="faq" location={loc.name} breadcrumbs={breadcrumbs} />

      <PageHero
        title={`${loc.name} Probate Real Estate Services`}
        subtitle={`Expert probate real estate services in ${loc.name}, Nevada. ${loc.description}`}
        imageId={getLocationImageId(slug)}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>6-8 Month Timeline</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            <span>Clark County: {NEVADA_PROBATE_FACTS.courtCostClark} Court Costs</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <span>2 Probate Commissioners</span>
          </div>
        </div>
      </PageHero>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {loc.name} Probate Real Estate Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {loc.name} residents have convenient access to {loc.court}. Nevada's 6-8 month
                probate timeline and $1,000 Clark County court costs apply.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Home className={`h-6 w-6 ${accentClass} mt-1`} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Local Market Knowledge</h3>
                    <p className="text-gray-600">
                      Specialized probate expertise in {loc.name} neighborhoods and property
                      valuations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className={`h-6 w-6 ${accentClass} mt-1`} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Court Access</h3>
                    <p className="text-gray-600">
                      Direct access to Clark County probate commissioners James Fontana and Russell
                      Geis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{loc.name} Probate Timeline</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Court Filing</span>
                  <span className="font-semibold">Week 1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Letters Issued</span>
                  <span className="font-semibold">Week 3-4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Property Listed</span>
                  <span className="font-semibold">Week 4-5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sale Completed</span>
                  <span className="font-semibold">Month 6-8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {loc.name} Neighborhoods & Probate Real Estate
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert probate real estate services across {loc.name} areas including{' '}
              {loc.neighborhoods.join(', ')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loc.neighborhoods.map((nb) => (
              <div key={nb} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{nb}</h3>
                <p className="text-gray-600">
                  Probate property expertise in {nb}. Nevada's fastest probate timeline.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Court Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className={`h-5 w-5 ${accentClass}`} />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Clark County Regional Justice Center
                    </p>
                    <p className="text-gray-600">200 Lewis Ave, Las Vegas, NV 89101</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className={`h-5 w-5 ${accentClass}`} />
                  <div>
                    <p className="font-semibold text-gray-900">Court Phone</p>
                    <p className="text-gray-600">(702) 671-4500</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className={`h-5 w-5 ${accentClass}`} />
                  <div>
                    <p className="font-semibold text-gray-900">Probate Commissioners</p>
                    <p className="text-gray-600">
                      James Fontana (Fridays), Russell Geis (Wednesdays 9:30 AM)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Court Costs & Fees</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Probate Filing Fee</span>
                  <span className="font-semibold text-green-600">
                    {NEVADA_PROBATE_FACTS.courtCostClark}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Attorney Fees (Avg)</span>
                  <span className="font-semibold text-green-600">
                    {NEVADA_PROBATE_FACTS.probateAttorneyCost}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Trust Administration</span>
                  <span className="font-semibold text-green-600">
                    {NEVADA_PROBATE_FACTS.trustAdminCost}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <SectionVisual imageId={getLocationImageId(slug)} className="h-56 md:h-72" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Visit Probate Real Estate Sales — serving {loc.name}
          </h2>
          <GbpLocalActions variant="stack" className="mb-10 items-center text-center" />
          <GbpOfficeMap heading={`${loc.name} buyers: our Las Vegas office on Google Maps`} />
        </div>
      </section>

      <RealScoutOfficeListings
        title={`Current ${loc.name} Properties Available`}
        subtitle={`Browse probate properties in the ${loc.name} area. Available for immediate purchase with expert probate guidance.`}
        themeColor={theme}
      />

      <section
        className={`py-16 text-white ${
          theme === 'blue'
            ? 'bg-blue-600'
            : theme === 'green'
              ? 'bg-green-600'
              : theme === 'amber'
                ? 'bg-amber-600'
                : 'bg-slate-600'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your {loc.name} Probate Process?
          </h2>
          <p className="text-xl mb-8">
            Get a free consultation and learn how Nevada's faster probate timeline can help you sell
            inherited property in {loc.name} quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              aria-label={`Call Dr. Jan Duffy at ${SITE_CONFIG.phone}`}
            >
              Call {SITE_CONFIG.phone}
            </a>
            <Link
              href="/contact/"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Free {loc.name} Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About {loc.name} Probate
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about probate real estate in {loc.name}, Nevada
              </p>
            </div>
            <FAQ />
            <div className="text-center mt-8">
              <Link
                href="/faq/"
                className={`inline-flex items-center gap-2 ${accentClass} hover:opacity-80 font-semibold`}
              >
                View All FAQs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/locations/" className={`${accentClass} hover:opacity-80 font-semibold`}>
            ← Back to All Nevada Locations
          </Link>
        </div>
      </section>
    </div>
  );
}
