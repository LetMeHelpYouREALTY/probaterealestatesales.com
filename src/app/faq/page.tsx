import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import FAQ from '@/components/FAQ';
import HeadingPhotoCard from '@/components/HeadingPhotoCard';
import PageHero from '@/components/PageHero';
import RealScoutOfficeListings from '@/components/RealScoutOfficeListings';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

export const metadata: Metadata = {
  title: 'How Long Does Probate Take in Nevada? | FAQ | Las Vegas Probate Timeline',
  description: `How long does probate take in Nevada? 6-8 months (vs 9-18 in California). Complete FAQ with expert answers on timeline, costs ($1,000 court fees), Clark County procedures. Free consultation: ${SITE_PHONE_DISPLAY}`,
  keywords:
    'how long does probate take in nevada, Nevada probate timeline, probate FAQ, Clark County probate, Nevada probate costs, probate timeline Las Vegas, certificate of incumbency',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/faq/',
  },
  openGraph: {
    title: 'How Long Does Probate Take in Nevada? | FAQ | Las Vegas Probate Timeline',
    description:
      'How long does probate take in Nevada? 6-8 months (vs 9-18 in California). Complete FAQ with expert answers on timeline, costs, Clark County procedures.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.probaterealestatesales.com/faq/',
  },
};

export const revalidate = 3600;

export default function FAQPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq/' },
  ];

  return (
    <main className="min-h-screen">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      {/* Hero Section */}
      <PageHero
        title="Nevada Probate Real Estate FAQ"
        subtitle="Get comprehensive answers about probate real estate sales in Nevada. From timelines to court requirements, we cover what buyers and executors ask most."
        imageId="resourcesGuides"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={SITE_PHONE_TEL_HREF}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
          >
            Call Now: {SITE_PHONE_DISPLAY}
          </a>
          <a
            href="https://drjanduffy.realscout.com/onboarding"
            className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
          >
            Free Consultation
          </a>
        </div>
      </PageHero>

      {/* FAQ Section */}
      <FAQ />

      {/* Additional Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Additional Nevada Probate Resources
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Explore our comprehensive guides and resources to better understand Nevada probate
              real estate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <HeadingPhotoCard
              imageId="probateTimeline"
              title="Nevada Probate Timeline Guide"
              href="/resources/nevada-probate-guide/"
            >
              <p className="text-secondary-600 mb-6">
                Detailed breakdown of the 6-8 month Nevada probate process, including court
                schedules, document requirements, and how to expedite your case.
              </p>
              <span className="inline-flex items-center text-primary-700 font-semibold">
                Read Guide →
              </span>
            </HeadingPhotoCard>

            <HeadingPhotoCard
              imageId="courthouse"
              title="Clark County Probate Procedures"
              href="/blog/clark-county-probate/"
            >
              <p className="text-secondary-600 mb-6">
                Specific information about Clark County probate court, commissioners, filing
                procedures, and local requirements for probate real estate sales.
              </p>
              <span className="inline-flex items-center text-primary-700 font-semibold">
                Learn More →
              </span>
            </HeadingPhotoCard>

            <HeadingPhotoCard
              imageId="smallEstateAffidavit"
              title="Small Estate Affidavit Guide"
              href="/resources/nevada-probate-guide/#small-estates"
            >
              <p className="text-secondary-600 mb-6">
                Complete guide to Nevada's $100,000 small estate limit, including simplified
                procedures for estates under $25,000 and how to avoid formal probate.
              </p>
              <span className="inline-flex items-center text-primary-700 font-semibold">
                View Guide →
              </span>
            </HeadingPhotoCard>
          </div>
        </div>
      </section>

      <RealScoutOfficeListings
        title="Current Las Vegas Properties Available"
        subtitle="Browse our current inventory of properties in the Las Vegas area. These properties are available for immediate purchase with our expert guidance."
        themeColor="blue"
      />

      {/* Contact CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-900 mb-6">Still Have Questions?</h2>
          <p className="text-lg text-secondary-600 mb-8">
            Our Nevada probate real estate experts are here to help. Get personalized answers about
            your specific situation and learn how we can help you navigate the probate process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE_PHONE_TEL_HREF}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              Call {SITE_PHONE_DISPLAY}
            </a>
            <a
              href="https://drjanduffy.realscout.com/onboarding"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-300 text-lg font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <SchemaMarkup type="faq" breadcrumbs={breadcrumbs} />
    </main>
  );
}
