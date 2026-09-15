import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import CallToActionComponents from '@/components/CallToActionComponents';
import ContentMarketingCalendar from '@/components/ContentMarketingCalendar';
import EducationalContentHub from '@/components/EducationalContentHub';
import LeadGenerationSystem from '@/components/LeadGenerationSystem';
import NevadaProbateLaws from '@/components/NevadaProbateLaws';
import PageHero from '@/components/PageHero';
import ProbateCostCalculator from '@/components/ProbateCostCalculator';
import ProbatePropertyChecklist from '@/components/ProbatePropertyChecklist';
import ProbateTimeline from '@/components/ProbateTimeline';
import RealScoutOfficeListings from '@/components/RealScoutOfficeListings';
import SchemaMarkup from '@/components/SchemaMarkup';
import SchemaMarkupExpert from '@/components/SchemaMarkupExpert';
import SEOContentStrategy from '@/components/SEOContentStrategy';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading FAQ...</div>,
});

export const metadata: Metadata = {
  title: 'Probate Real Estate Solutions | Complete Resources & Tools | Las Vegas Expert',
  description: `Comprehensive probate real estate solutions and resources. Nevada probate laws, timeline, checklist, cost calculator, and educational content. Complete probate real estate solutions by Dr. Jan Duffy. Free consultation: ${SITE_PHONE_DISPLAY}`,
  keywords:
    'probate real estate solutions, probate real estate resources, Nevada probate laws, probate timeline, probate checklist, probate cost calculator, Dr. Jan Duffy, Las Vegas probate expert, probate solutions',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/resources/',
  },
  openGraph: {
    title: 'Probate Real Estate Solutions | Complete Resources & Tools | Las Vegas Expert',
    description:
      'Comprehensive probate real estate solutions and resources. Nevada probate laws, timeline, checklist, cost calculator, and educational content.',
    type: 'website',
    url: 'https://www.probaterealestatesales.com/resources/',
  },
};

export const revalidate = 3600;

export default function ResourcesPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources/' },
  ];

  return (
    <main className="min-h-screen">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <PageHero
        title="Probate Real Estate Resources"
        subtitle="Guides, checklists, and calculators for Nevada probate property sales in Las Vegas and Clark County."
        imageId="resourcesGuides"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://drjanduffy.realscout.com/onboarding"
            className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Schedule Free Consultation
          </a>
          <a
            href={SITE_PHONE_TEL_HREF}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-colors inline-block"
          >
            Call {SITE_PHONE_DISPLAY}
          </a>
        </div>
      </PageHero>

      {/* Resource Navigation */}
      <section className="py-16 bg-secondary-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Choose Your Resource Category
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="#educational-content"
              className="bg-white rounded-xl shadow-soft p-6 border border-secondary-100 hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="h-8 w-8 text-primary-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>Educational Content</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Educational Content</h3>
              <p className="text-sm text-secondary-600">
                Guides, FAQs, videos, and downloadable resources
              </p>
            </a>

            <Link
              href="/resources/las-vegas-probate-legal-resources/"
              className="bg-white rounded-xl shadow-soft p-6 border border-secondary-100 hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="h-8 w-8 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>Courts and legal aid</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Courts &amp; legal aid (Clark County)
              </h3>
              <p className="text-sm text-secondary-600">
                Self-help center, courts, and Legal Aid contacts for Las Vegas
              </p>
            </Link>

            <a
              href="#nevada-laws"
              className="bg-white rounded-xl shadow-soft p-6 border border-secondary-100 hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="h-8 w-8 text-accent-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>Nevada Probate Laws</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Nevada Probate Laws</h3>
              <p className="text-sm text-secondary-600">
                Key statutes, requirements, and legal compliance
              </p>
            </a>

            <a
              href="#probate-timeline"
              className="bg-white rounded-xl shadow-soft p-6 border border-secondary-100 hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>Probate Timeline</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Probate Timeline</h3>
              <p className="text-sm text-secondary-600">
                Step-by-step process from filing to closing
              </p>
            </a>

            <a
              href="#property-checklist"
              className="bg-white rounded-xl shadow-soft p-6 border border-secondary-100 hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="h-8 w-8 text-primary-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>Property Checklist</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Property Checklist</h3>
              <p className="text-sm text-secondary-600">Executor's comprehensive task checklist</p>
            </a>

            <a
              href="#cost-calculator"
              className="bg-white rounded-xl shadow-soft p-6 border border-secondary-100 hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="h-8 w-8 text-accent-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>Cost Calculator</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Cost Calculator</h3>
              <p className="text-sm text-secondary-600">Estimate total probate costs and fees</p>
            </a>

            <a
              href="#marketing-tools"
              className="bg-white rounded-xl shadow-soft p-6 border border-secondary-100 hover:shadow-lg transition-shadow duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <title>Marketing Tools</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Marketing Tools</h3>
              <p className="text-sm text-secondary-600">
                SEO strategy, lead generation, and content calendar
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Educational Content Hub */}
      <section id="educational-content">
        <EducationalContentHub />
      </section>

      {/* Nevada Probate Laws */}
      <section id="nevada-laws">
        <NevadaProbateLaws />
      </section>

      {/* Probate Timeline */}
      <section id="probate-timeline">
        <ProbateTimeline />
      </section>

      {/* Property Checklist */}
      <section id="property-checklist">
        <ProbatePropertyChecklist />
      </section>

      {/* Cost Calculator */}
      <section id="cost-calculator">
        <ProbateCostCalculator />
      </section>

      {/* Marketing Tools Section */}
      <section id="marketing-tools" className="py-16 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Marketing & Business Development Tools
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Professional tools and strategies to grow your probate real estate business and
              establish Dr. Jan Duffy as Las Vegas's premier probate expert.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* SEO Strategy */}
            <div>
              <SEOContentStrategy />
            </div>

            {/* Lead Generation */}
            <div>
              <LeadGenerationSystem />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            {/* Schema Markup */}
            <div>
              <SchemaMarkupExpert />
            </div>

            {/* CTA Components */}
            <div>
              <CallToActionComponents />
            </div>
          </div>

          {/* Content Marketing Calendar */}
          <div className="mt-12">
            <ContentMarketingCalendar />
          </div>
        </div>
      </section>

      <RealScoutOfficeListings
        title="Current Las Vegas Properties Available"
        subtitle="Browse our current inventory of properties in the Las Vegas area. These properties are available for immediate purchase with our expert guidance."
        themeColor="blue"
      />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-secondary-900 mb-4">
                Frequently Asked Questions About Probate Resources
              </h2>
              <p className="text-xl text-secondary-600">
                Common questions about probate real estate resources and tools
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Access All Resources?</h2>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8">
            Get personalized guidance from Dr. Jan Duffy and access to all educational resources
            with your free probate consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://drjanduffy.realscout.com/onboarding"
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Schedule Free Consultation
            </a>
            <a
              href={SITE_PHONE_TEL_HREF}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-colors inline-block"
            >
              Call {SITE_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
      <SchemaMarkup type="faq" breadcrumbs={breadcrumbs} />
    </main>
  );
}
