import {
  ArrowRight,
  Calculator,
  DollarSign,
  FileText,
  Home,
  Phone,
  Search,
  TrendingUp,
} from 'lucide-react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_PHONE_DISPLAY, SITE_PHONE_E164, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading FAQ...</div>,
});

export const metadata: Metadata = {
  title: 'Probate Property Valuation | Accurate Home Appraisals for Probate Sales | Las Vegas',
  description:
    'Expert probate property valuation services in Las Vegas, Nevada. Accurate home appraisals for probate sales, court-required valuations, and estate planning. Professional property assessments from Dr. Jan Duffy.',
  keywords: [
    'probate property valuation',
    'probate property appraisal',
    'probate home valuation',
    'probate property assessment',
    'probate real estate appraisal',
    'court-required appraisal',
    'probate property value',
    'home valuation probate',
    'Las Vegas probate valuation',
    'Nevada probate appraisal',
    'Clark County probate valuation',
    'probate property pricing',
    'estate property valuation',
    'probate home assessment',
    'fair market value probate',
  ].join(', '),
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/probate-property-valuation/',
  },
  openGraph: {
    title: 'Probate Property Valuation | Accurate Home Appraisals for Probate Sales | Las Vegas',
    description:
      'Expert probate property valuation services in Las Vegas, Nevada. Accurate home appraisals for probate sales and court-required valuations.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.probaterealestatesales.com/probate-property-valuation/',
  },
};

export default function ProbatePropertyValuationPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Probate Property Valuation', url: '/probate-property-valuation/' },
  ];

  return (
    <>
      <SchemaMarkup
        type="faq"
        breadcrumbs={breadcrumbs}
        customSchema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: 'Probate Property Valuation',
              description:
                'Expert probate property valuation services in Las Vegas, Nevada. Accurate home appraisals for probate sales and court-required valuations.',
              provider: {
                '@type': 'RealEstateAgent',
                name: 'Dr. Jan Duffy',
                telephone: SITE_PHONE_E164,
              },
              areaServed: {
                '@type': 'City',
                name: 'Las Vegas',
              },
            },
          ],
        }}
      />
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <PageHero
          title="Probate Property Valuation Services"
          subtitle="Accurate home appraisals and property valuations for probate sales, court requirements, and estate planning in Las Vegas, Nevada"
          imageId="propertyValuation"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/home-valuation/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
            >
              <Calculator className="h-5 w-5 mr-2" />
              Get Property Valuation
            </Link>
            <Link
              href={SITE_PHONE_TEL_HREF}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call {SITE_PHONE_DISPLAY}
            </Link>
          </div>
        </PageHero>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Understanding Probate Property Valuation
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Probate property valuation is a critical component of the{' '}
                <Link
                  href="/services/"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  probate real estate process
                </Link>{' '}
                in Las Vegas and throughout Nevada. When real property is part of an estate going
                through{' '}
                <Link
                  href="/resources/nevada-probate-guide/"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  probate
                </Link>
                , accurate valuation is essential for multiple purposes, including determining sale
                prices, calculating estate taxes, distributing assets to beneficiaries, and
                obtaining court approval for sales. Understanding how probate property valuation
                works helps executors, trustees, beneficiaries, and buyers navigate the probate
                process effectively. Get a free{' '}
                <Link
                  href="/home-valuation/"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  property valuation
                </Link>
                .
              </p>
              <p className="text-lg text-secondary-700 mb-6">
                Probate property valuation differs from standard real estate appraisals in several
                ways. These valuations must meet specific legal requirements, often need to be
                conducted by licensed appraisers, and must be defensible in{' '}
                <Link
                  href="/locations/las-vegas/"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  court
                </Link>{' '}
                if challenged. The valuation process considers market conditions, property
                condition, comparable sales, and other factors that affect fair market value. Our{' '}
                <Link
                  href="/services/#property-valuation"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  property valuation services
                </Link>{' '}
                ensure court compliance.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Why Probate Property Valuation is Required
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Probate property valuation serves several critical purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  <strong>Court Approval:</strong> Probate courts require appraisals to ensure
                  property sales are at fair market value
                </li>
                <li>
                  <strong>Estate Tax Calculation:</strong> Property values determine estate tax
                  obligations
                </li>
                <li>
                  <strong>Beneficiary Distribution:</strong> Accurate values ensure fair
                  distribution of assets among beneficiaries
                </li>
                <li>
                  <strong>Sale Pricing:</strong> Appraisals guide listing prices and acceptable
                  offer ranges
                </li>
                <li>
                  <strong>Creditor Claims:</strong> Property values help determine if estate assets
                  are sufficient to pay debts
                </li>
                <li>
                  <strong>Legal Compliance:</strong> Nevada probate law requires proper valuation
                  for property sales
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Types of Probate Property Valuations
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Different types of valuations may be needed depending on the situation:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  <strong>Full Appraisal:</strong> Comprehensive property assessment by a licensed
                  appraiser, typically required for court approval
                </li>
                <li>
                  <strong>Broker's Price Opinion (BPO):</strong> Market analysis by a real estate
                  professional, often used for initial pricing decisions
                </li>
                <li>
                  <strong>Comparative Market Analysis (CMA):</strong> Review of comparable sales to
                  estimate market value
                </li>
                <li>
                  <strong>Desktop Appraisal:</strong> Limited appraisal based on available data
                  without full property inspection
                </li>
                <li>
                  <strong>Drive-By Appraisal:</strong> Exterior-only inspection with interior data
                  from public records
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Valuation Process */}
        <section className="py-16 bg-gray-50">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                The Probate Property Valuation Process
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                The probate property valuation process involves several steps to ensure accurate,
                defensible property values. Understanding this process helps executors, trustees,
                and their advisors obtain valuations that meet legal requirements and serve the
                estate's purposes.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 1: Selecting a Qualified Appraiser
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Choosing the right appraiser is critical for probate valuations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Appraiser must be licensed or certified in Nevada</li>
                <li>Experience with probate property appraisals and court requirements</li>
                <li>Knowledge of local Las Vegas and Clark County real estate markets</li>
                <li>Understanding of probate law and court expectations</li>
                <li>Ability to provide defensible valuations that can withstand court scrutiny</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 2: Property Inspection and Data Collection
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                The appraiser conducts a thorough property inspection:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  Exterior inspection of property condition, improvements, and site characteristics
                </li>
                <li>Interior inspection of living spaces, condition, and features</li>
                <li>Measurement of square footage and room counts</li>
                <li>Documentation of property condition, needed repairs, and updates</li>
                <li>Review of property records, permits, and zoning information</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 3: Market Analysis and Comparable Sales
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                The appraiser analyzes the local real estate market:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Identifies comparable properties that have sold recently in the area</li>
                <li>
                  Adjusts comparable sales for differences in size, condition, features, and
                  location
                </li>
                <li>Considers current market conditions and trends</li>
                <li>Reviews active listings and pending sales for market context</li>
                <li>Analyzes days on market and sale-to-list price ratios</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 4: Value Determination and Report
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                The appraiser determines fair market value and prepares a report:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  Applies appropriate valuation methods (sales comparison, cost, income approaches)
                </li>
                <li>Considers property condition, location, and market factors</li>
                <li>Documents valuation methodology and supporting data</li>
                <li>Prepares written appraisal report meeting USPAP standards</li>
                <li>Provides opinion of fair market value as of a specific date</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Factors Affecting Valuation */}
        <section className="py-16 bg-white">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Factors Affecting Probate Property Valuation
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Multiple factors influence probate property valuations in Las Vegas and throughout
                Nevada. Understanding these factors helps executors, trustees, and beneficiaries
                understand valuation results and make informed decisions about property sales.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Property Condition and Maintenance
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Property condition significantly affects valuation:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Properties in good condition with recent updates command higher values</li>
                <li>Deferred maintenance and needed repairs reduce property value</li>
                <li>Functional obsolescence (outdated features) affects marketability and value</li>
                <li>Structural issues or major defects require significant value adjustments</li>
                <li>Cosmetic condition and curb appeal influence buyer perception and value</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Location and Neighborhood Factors
              </h3>
              <p className="text-lg text-secondary-700 mb-4">Location is a primary value driver:</p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Desirable neighborhoods and school districts command premium values</li>
                <li>
                  Proximity to amenities, employment centers, and transportation affects value
                </li>
                <li>Neighborhood trends and development plans influence long-term value</li>
                <li>Crime rates, property values, and neighborhood stability impact valuation</li>
                <li>Future development and infrastructure projects can affect property values</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Market Conditions
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Current real estate market conditions affect valuations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Seller's markets with high demand may support higher valuations</li>
                <li>Buyer's markets with excess inventory may result in lower valuations</li>
                <li>Interest rates affect buyer purchasing power and property values</li>
                <li>Economic conditions and employment levels influence market activity</li>
                <li>Seasonal variations can affect property values and market activity</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Property Features and Characteristics
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Specific property features affect valuation:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Square footage, lot size, and room counts are primary value factors</li>
                <li>Property age and construction quality affect value and marketability</li>
                <li>Updates and improvements (kitchens, bathrooms, systems) add value</li>
                <li>Unique features (pools, views, garages) can enhance or limit value</li>
                <li>Property type (single-family, condo, townhome) affects comparable selection</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Court Requirements */}
        <section className="py-16 bg-gray-50">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Court Requirements for Probate Property Valuations
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Nevada probate courts have specific requirements for property valuations used in
                probate sales. Understanding these requirements helps ensure valuations meet court
                standards and facilitate smooth sale approvals.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Appraisal Standards and Requirements
              </h3>
              <p className="text-lg text-secondary-700 mb-4">Probate courts typically require:</p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Appraisals from licensed or certified appraisers</li>
                <li>USPAP-compliant appraisal reports meeting professional standards</li>
                <li>Fair market value as of a specific date (often date of death or sale date)</li>
                <li>Detailed documentation of valuation methodology and supporting data</li>
                <li>Appraiser qualifications and independence from interested parties</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Timing of Valuations
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Valuation timing is important for probate purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Date of death valuations for estate tax and initial estate planning</li>
                <li>Current date valuations for property sales and distribution</li>
                <li>Valuations must be recent enough to reflect current market conditions</li>
                <li>Some courts require valuations within 90 days of sale petitions</li>
                <li>
                  Updated valuations may be needed if significant time passes or market changes
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-20 bg-white">
          <div className="container-max py-8 border-b border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-2">
                  Frequently Asked Questions About Probate Property Valuation
                </h2>
                <p className="text-secondary-600">
                  Common questions about property appraisals for probate sales
                </p>
              </div>
              <Link
                href="/faq/"
                className="hidden md:flex items-center text-primary-700 hover:text-primary-900 font-medium"
              >
                View All FAQs
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <FAQ />
            <div className="text-center mt-6 md:hidden">
              <Link
                href="/faq/"
                className="inline-flex items-center text-primary-700 hover:text-primary-900 font-medium"
              >
                View All FAQs
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Professional Probate Property Valuation?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Work with Dr. Jan Duffy and her network of qualified appraisers to obtain accurate,
              court-ready property valuations for your probate sale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/home-valuation/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Property Valuation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href={SITE_PHONE_TEL_HREF}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-900 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call {SITE_PHONE_DISPLAY}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
