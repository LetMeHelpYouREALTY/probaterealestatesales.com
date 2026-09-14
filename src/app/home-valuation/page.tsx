import { ArrowRight, DollarSign, Home, Phone, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { CalendlyBookingPanel } from '@/components/calendly/CalendlyBookingPanel';
import PageHero from '@/components/PageHero';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading FAQ...</div>,
});

export const metadata: Metadata = {
  title: 'Free Home Valuation & CMA | Probate Property Value Assessment | Las Vegas',
  description: `Get a free home valuation and comparative market analysis (CMA) for your probate property in Las Vegas. Expert property value assessment by probate realtor. Understand your inherited property worth today. Free consultation: ${SITE_PHONE_DISPLAY}`,
  keywords:
    'comparative market analysis, CMA, home valuation, property value assessment, probate property valuation, Las Vegas home appraisal, free home estimate, probate property CMA',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/home-valuation/',
  },
  openGraph: {
    title: 'Free Home Valuation & CMA | Probate Property Value Assessment | Las Vegas',
    description:
      'Get a free home valuation and comparative market analysis (CMA) for your probate property in Las Vegas. Expert property value assessment by probate realtor.',
    type: 'website',
    url: 'https://www.probaterealestatesales.com/home-valuation/',
  },
};

export default function HomeValuationPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Home Valuation', url: '/home-valuation/' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <PageHero
        title="Free Home Valuation"
        subtitle="Get an accurate estimate of your probate property's value in Las Vegas, Nevada."
        imageId="propertyValuation"
      />

      {/* Schedule CMA discussion (Calendly replaces legacy valuation request form) */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg p-8 md:p-12">
            <CalendlyBookingPanel
              title="Request your free property valuation & CMA"
              description="Schedule a short call so we can discuss your probate property and next steps for a comparative market analysis (CMA) in Las Vegas and Clark County."
              embedHeight={700}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-12 text-center">
            Why Get a Professional Valuation?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <TrendingUp className="h-12 w-12 text-primary-700 mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Accurate Market Value
              </h3>
              <p className="text-secondary-600">
                Get an accurate estimate based on current Las Vegas real estate market conditions
                and comparable sales.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <DollarSign className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Maximize Sale Price</h3>
              <p className="text-secondary-600">
                Understand your property's worth to price it competitively and maximize your sale
                proceeds.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <Home className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Probate-Specific Insights
              </h3>
              <p className="text-secondary-600">
                Our valuations consider probate-specific factors and timelines that affect property
                value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-secondary-900 mb-4">
                Frequently Asked Questions About Property Valuation
              </h2>
              <p className="text-xl text-secondary-600">
                Common questions about probate property valuation and CMA
              </p>
            </div>
            <FAQ />
            <div className="text-center mt-8">
              <Link
                href="/faq/"
                className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-900 font-semibold"
              >
                View All FAQs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Call us directly at {SITE_PHONE_DISPLAY} for a free consultation and property valuation.
          </p>
          <a
            href={SITE_PHONE_TEL_HREF}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call {SITE_PHONE_DISPLAY}
          </a>
        </div>
      </section>
      <SchemaMarkup type="faq" breadcrumbs={breadcrumbs} />
    </main>
  );
}
