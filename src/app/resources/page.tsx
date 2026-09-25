import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import CallToActionComponents from '@/components/CallToActionComponents';
import ContentMarketingCalendar from '@/components/ContentMarketingCalendar';
import EducationalContentHub from '@/components/EducationalContentHub';
import HeadingPhotoCard from '@/components/HeadingPhotoCard';
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
            <HeadingPhotoCard
              imageId="resourcesGuides"
              title="Educational Content"
              href="#educational-content"
            >
              <p className="text-sm text-secondary-600">
                Guides, FAQs, videos, and downloadable resources
              </p>
            </HeadingPhotoCard>

            <HeadingPhotoCard
              imageId="courthouse"
              title="Courts & legal aid (Clark County)"
              href="/resources/las-vegas-probate-legal-resources/"
            >
              <p className="text-sm text-secondary-600">
                Self-help center, courts, and Legal Aid contacts for Las Vegas
              </p>
            </HeadingPhotoCard>

            <HeadingPhotoCard imageId="courtGavel" title="Nevada Probate Laws" href="#nevada-laws">
              <p className="text-sm text-secondary-600">
                Key statutes, requirements, and legal compliance
              </p>
            </HeadingPhotoCard>

            <HeadingPhotoCard
              imageId="probateTimeline"
              title="Probate Timeline"
              href="#probate-timeline"
            >
              <p className="text-sm text-secondary-600">
                Step-by-step process from filing to closing
              </p>
            </HeadingPhotoCard>

            <HeadingPhotoCard
              imageId="propertyChecklist"
              title="Property Checklist"
              href="#property-checklist"
            >
              <p className="text-sm text-secondary-600">Executor's comprehensive task checklist</p>
            </HeadingPhotoCard>

            <HeadingPhotoCard
              imageId="probateCostCalculator"
              title="Cost Calculator"
              href="#cost-calculator"
            >
              <p className="text-sm text-secondary-600">Estimate total probate costs and fees</p>
            </HeadingPhotoCard>

            <HeadingPhotoCard
              imageId="downloadableGuides"
              title="Marketing Tools"
              href="#marketing-tools"
            >
              <p className="text-sm text-secondary-600">
                SEO strategy, lead generation, and content calendar
              </p>
            </HeadingPhotoCard>
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
