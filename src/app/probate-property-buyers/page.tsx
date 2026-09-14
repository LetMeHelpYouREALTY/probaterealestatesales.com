import {
  ArrowRight,
  CheckCircle,
  DollarSign,
  Home,
  MapPin,
  Phone,
  Search,
  Shield,
  Users,
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
  title: 'Probate Property Buyers Guide | How to Buy Probate Homes in Las Vegas, Nevada',
  description:
    'Complete guide for probate property buyers in Las Vegas, Nevada. Learn how to find, evaluate, and purchase probate homes. Expert tips from Dr. Jan Duffy on navigating probate sales, court approvals, and closing procedures.',
  keywords: [
    'probate property buyers',
    'probate property buyers Las Vegas',
    'buy probate property',
    'probate home buyers',
    'how to buy probate homes',
    'probate property buying guide',
    'probate real estate buyers',
    'buying probate homes Nevada',
    'probate property investment',
    'probate buyers guide',
    'Las Vegas probate buyers',
    'Clark County probate buyers',
    'probate property purchase',
    'buying inherited property',
    'probate real estate investment',
  ].join(', '),
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/probate-property-buyers/',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Probate Property Buyers Guide | How to Buy Probate Homes in Las Vegas, Nevada',
    description:
      'Complete guide for probate property buyers. Learn how to find, evaluate, and purchase probate homes with expert tips on navigating probate sales and court approvals.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.probaterealestatesales.com/probate-property-buyers/',
  },
};

export default function ProbatePropertyBuyersPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Probate Property Buyers', url: '/probate-property-buyers/' },
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
              name: 'Probate Property Buyer Services',
              description:
                'Complete guide and services for probate property buyers in Las Vegas, Nevada. Expert guidance on finding, evaluating, and purchasing probate homes.',
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
          title="Complete Guide for Probate Property Buyers"
          subtitle="Learn how to find, evaluate, and purchase probate homes in Las Vegas, Nevada with confidence."
          imageId="listingsHero"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
            >
              <Search className="h-5 w-5 mr-2" />
              Find Probate Properties
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
                Why Buy Probate Properties?
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Probate property buyers represent a growing segment of the real estate market in Las
                Vegas and throughout Nevada. These buyers are attracted to probate properties for
                various reasons, including potential value opportunities, less competition, and the
                structured nature of probate sales. Understanding the probate buying process and
                what makes these properties unique can help you make informed investment decisions.
              </p>
              <p className="text-lg text-secondary-700 mb-6">
                Probate properties become available when someone passes away and their estate must
                go through the probate court process. During this process, real estate may need to
                be sold to settle debts, pay expenses, or distribute assets to beneficiaries. These
                sales are court-supervised, which provides transparency and ensures fair dealing,
                but also adds specific steps and timelines that differ from standard real estate
                transactions.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Advantages for Probate Property Buyers
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Buying probate properties can offer several advantages:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  <strong>Fair Market Pricing:</strong> Properties are typically priced at fair
                  market value based on professional appraisals, which may represent good value in
                  competitive markets
                </li>
                <li>
                  <strong>Less Competition:</strong> Fewer buyers actively search for probate
                  properties, reducing bidding wars and multiple offer situations
                </li>
                <li>
                  <strong>Transparent Process:</strong> Court oversight ensures all parties follow
                  proper procedures and disclosures
                </li>
                <li>
                  <strong>Motivated Sellers:</strong> Estates often need to sell to settle debts and
                  distribute assets, creating urgency
                </li>
                <li>
                  <strong>Potential for Value:</strong> Properties may need updates or repairs,
                  offering opportunities for improvement and equity building
                </li>
                <li>
                  <strong>Structured Process:</strong> Court approval requirements provide a clear,
                  documented process
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Types of Probate Property Buyers
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Different types of buyers are attracted to probate properties:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  <strong>First-Time Homebuyers:</strong> Looking for affordable entry into the
                  housing market
                </li>
                <li>
                  <strong>Real Estate Investors:</strong> Seeking properties with potential for
                  appreciation or rental income
                </li>
                <li>
                  <strong>House Flippers:</strong> Interested in properties that need renovation and
                  can be quickly resold
                </li>
                <li>
                  <strong>Primary Residence Buyers:</strong> Looking for a home to live in, often at
                  fair market value
                </li>
                <li>
                  <strong>Cash Buyers:</strong> Investors or buyers who can close quickly without
                  financing contingencies
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Finding Probate Properties */}
        <section className="py-16 bg-gray-50">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                How to Find Probate Properties for Sale
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Finding probate properties requires different strategies than searching for standard
                real estate listings. These properties often don't appear on traditional MLS
                immediately, and the buying process involves unique steps. Here are the most
                effective methods for probate property buyers to locate opportunities in Las Vegas
                and throughout Nevada.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Work with a Probate Real Estate Specialist
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                The most effective way to find probate properties is to work with a real estate
                agent who specializes in probate sales, such as Dr. Jan Duffy. Probate specialists
                offer:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Access to probate properties before they hit the general market</li>
                <li>
                  Relationships with estate attorneys, executors, and trustees who list probate
                  properties
                </li>
                <li>Knowledge of properties in pre-listing stages</li>
                <li>
                  Understanding of the probate sale process and ability to guide buyers through
                  court requirements
                </li>
                <li>
                  Experience negotiating probate sales and handling court-required documentation
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Monitor Probate Court Filings
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Clark County Probate Court maintains public records that probate property buyers can
                review:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Review probate court calendars for scheduled hearings on property sales</li>
                <li>
                  Search court records for petitions requesting authorization to sell real estate
                </li>
                <li>
                  Monitor notices of proposed sales that executors must publish before court
                  approval
                </li>
                <li>Attend probate court hearings where property sales are being considered</li>
                <li>
                  Review court orders approving property sales to identify available properties
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Check Specialized Probate Property Databases
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Several online platforms specialize in probate, trust, and estate sales:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Centralized databases of probate properties across multiple counties</li>
                <li>Search filters for property type, location, price range, and sale status</li>
                <li>Information about upcoming probate sales and auction dates</li>
                <li>Details about court approval status and required procedures</li>
                <li>Email alerts for new probate property listings matching your criteria</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Network with Estate Professionals
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Building relationships with professionals who work with estates can provide early
                access:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Estate attorneys who represent executors and trustees</li>
                <li>Probate court clerks who process sale petitions</li>
                <li>Estate planning attorneys who may know of upcoming probate sales</li>
                <li>Financial advisors and accountants who work with estates</li>
                <li>Property managers who handle estate properties</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Evaluating Probate Properties */}
        <section className="py-16 bg-white">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Evaluating Probate Properties
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Evaluating probate properties requires careful consideration of both the property
                itself and the unique aspects of probate sales. Probate property buyers should
                conduct thorough due diligence to understand property condition, market value, and
                the probate sale process timeline.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Property Condition Assessment
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Probate properties may have unique condition considerations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  Properties may have deferred maintenance if the deceased owner was unable to
                  maintain them
                </li>
                <li>Homes may need updates or repairs that the estate cannot fund</li>
                <li>Properties may be sold "as-is," meaning the estate won't make repairs</li>
                <li>
                  Professional inspection is essential to identify needed repairs and estimate costs
                </li>
                <li>Consider the cost of necessary repairs when evaluating the purchase price</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Market Value Analysis
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Understanding market value is crucial for probate property buyers:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Review comparable sales in the area to understand market value</li>
                <li>Consider the property's condition relative to comparable properties</li>
                <li>Factor in needed repairs or updates when evaluating value</li>
                <li>
                  Understand that probate properties are typically priced at fair market value based
                  on appraisals
                </li>
                <li>Work with your agent to determine if the asking price represents good value</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Probate Sale Timeline Considerations
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Probate sales have extended timelines that buyers must consider:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Court approval can add 30-90 days to the closing process</li>
                <li>
                  Buyers must be willing to wait for court confirmation before the sale is final
                </li>
                <li>
                  Property may be subject to competing offers during the court approval process
                </li>
                <li>Financing must remain valid through the extended timeline</li>
                <li>Plan for potential delays in closing dates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Making Offers */}
        <section className="py-16 bg-gray-50">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Making Offers on Probate Properties
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Making offers on probate properties involves unique considerations compared to
                standard real estate transactions. Understanding these differences helps probate
                property buyers structure competitive offers that have the best chance of acceptance
                and court approval.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Offer Price Considerations
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Probate offers must meet specific requirements:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Offers must typically be at or above the appraised fair market value</li>
                <li>
                  The executor cannot accept offers below appraised value without court approval
                </li>
                <li>Lowball offers are unlikely to be accepted or approved by the court</li>
                <li>
                  Competitive offers at or near asking price have the best chance of acceptance
                </li>
                <li>Cash offers may be preferred for their speed and certainty</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Financing Considerations
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Financing probate property purchases requires planning:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Pre-approval letter demonstrates buyer qualification and seriousness</li>
                <li>Some lenders have specific requirements for probate property loans</li>
                <li>Financing must remain valid through the extended court approval timeline</li>
                <li>Cash offers eliminate financing contingencies and may be preferred</li>
                <li>Work with lenders familiar with probate property transactions</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Contingencies and Terms
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Probate offers may include standard contingencies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Inspection contingency allows buyers to inspect and potentially renegotiate</li>
                <li>Financing contingency protects buyers if financing falls through</li>
                <li>Appraisal contingency ensures the property appraises at purchase price</li>
                <li>Title contingency ensures clear title can be delivered</li>
                <li>
                  Court approval contingency acknowledges the sale is subject to court confirmation
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Closing Process */}
        <section className="py-16 bg-white">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                The Probate Property Closing Process
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Closing on a probate property involves additional steps beyond standard real estate
                transactions. Understanding this process helps probate property buyers prepare and
                avoid delays.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Court Approval Stage
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                After offer acceptance, the executor must obtain court approval:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Executor files petition with probate court requesting sale authorization</li>
                <li>Court reviews the proposed sale price and terms</li>
                <li>Notice is published to give other interested parties opportunity to object</li>
                <li>Court hearing is scheduled where the judge reviews the sale</li>
                <li>Court issues order approving or denying the sale</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Due Diligence Period
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                While waiting for court approval, buyers can conduct due diligence:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Professional home inspection to identify needed repairs</li>
                <li>Title search to verify clear ownership and identify liens</li>
                <li>Property appraisal for lender if obtaining financing</li>
                <li>Review of property disclosures and condition</li>
                <li>Assessment of property value relative to purchase price</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">Final Closing</h3>
              <p className="text-lg text-secondary-700 mb-4">
                Once court approval is obtained, closing proceeds:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Finalize mortgage financing if not paying cash</li>
                <li>Complete any remaining contingencies</li>
                <li>Coordinate closing date with title company and estate attorney</li>
                <li>Review closing documents, including court order confirming sale</li>
                <li>Transfer of title from estate to buyer</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-20 bg-gray-50">
          <div className="container-max py-8 border-b border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-2">
                  Frequently Asked Questions for Probate Property Buyers
                </h2>
                <p className="text-secondary-600">
                  Common questions about buying probate properties
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
              Ready to Start Buying Probate Properties?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Work with Dr. Jan Duffy, Las Vegas's leading probate real estate specialist, to find
              and purchase probate properties with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
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
