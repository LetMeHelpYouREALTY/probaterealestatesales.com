import { ArrowRight, Gavel, Phone } from 'lucide-react';
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
  title: 'Conservatorship Real Estate Sales in Las Vegas, Nevada | Court-Appointed Sales Expert',
  description:
    'Expert conservatorship real estate sales in Las Vegas, Nevada. Complete guidance for conservators, attorneys, and families on selling property for conservatees. Court-approved sales, fiduciary compliance, and professional representation.',
  keywords: [
    'conservatorship real estate',
    'conservatorship real estate sales',
    'conservatorship property sales',
    'conservatorship real estate Las Vegas',
    'conservatorship sales Nevada',
    'court-appointed conservator sales',
    'conservatorship property',
    'conservatee property sales',
    'conservatorship real estate expert',
    'Nevada conservatorship sales',
    'Clark County conservatorship',
    'conservatorship court sales',
    'fiduciary property sales',
    'conservatorship real estate attorney',
    'selling conservatorship property',
  ].join(', '),
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/conservatorship-real-estate/',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Conservatorship Real Estate Sales in Las Vegas, Nevada | Court-Appointed Sales Expert',
    description:
      'Expert conservatorship real estate sales in Las Vegas, Nevada. Complete guidance for conservators, attorneys, and families on selling property for conservatees.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.probaterealestatesales.com/conservatorship-real-estate/',
  },
};

export default function ConservatorshipRealEstatePage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Conservatorship Real Estate', url: '/conservatorship-real-estate/' },
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
              name: 'Conservatorship Real Estate Sales',
              description:
                'Expert conservatorship real estate sales services in Las Vegas, Nevada. Complete guidance for conservators, attorneys, and families on selling property for conservatees.',
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
          title="Conservatorship Real Estate Sales in Las Vegas, Nevada"
          subtitle="Expert guidance for conservators and attorneys navigating court-supervised property sales with compliance."
          imageId="conservatorship"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
            >
              <Gavel className="h-5 w-5 mr-2" />
              Get Conservatorship Sale Help
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

        {/* Understanding Conservatorship Real Estate */}
        <section className="py-16 bg-white">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Understanding Conservatorship Real Estate Sales
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Conservatorship real estate sales represent one of the most sensitive and legally
                complex types of property transactions in Las Vegas and throughout Nevada. When an
                individual (called a conservatee) is unable to manage their own affairs due to
                incapacity, the{' '}
                <Link
                  href="/blog/clark-county-probate/"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  court
                </Link>{' '}
                may appoint a conservator to manage their property and financial affairs. Selling
                real estate in this context requires strict adherence to{' '}
                <Link
                  href="/services/#court-representation"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  court procedures
                </Link>{' '}
                and fiduciary responsibilities. Our{' '}
                <Link
                  href="/services/"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  conservatorship real estate services
                </Link>{' '}
                ensure compliance.
              </p>
              <p className="text-lg text-secondary-700 mb-6">
                Conservatorship property sales are fundamentally different from standard{' '}
                <Link
                  href="/probate-homes-for-sale/"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  real estate transactions
                </Link>
                . Every aspect of the sale, from listing price to buyer selection, requires court
                approval. The conservator must demonstrate that the sale serves the conservatee's
                best interests and complies with all legal requirements. This process demands
                expertise in both real estate and conservatorship law. Learn about our{' '}
                <Link
                  href="/services/#court-representation"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  court representation
                </Link>{' '}
                services.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                What is a Conservatorship?
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                A conservatorship is a court-supervised legal arrangement where:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  An individual (conservatee) is determined by the court to lack capacity to manage
                  their own affairs
                </li>
                <li>
                  A conservator is appointed by the court to manage the conservatee's property and
                  financial decisions
                </li>
                <li>
                  The conservator has fiduciary duties to act in the conservatee's best interests
                </li>
                <li>Major decisions, including property sales, require court approval</li>
                <li>The court maintains ongoing oversight of the conservator's actions</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                When Conservatorship Property Sales Are Necessary
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Several circumstances may require selling property in a conservatorship:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  <strong>Medical Care Costs:</strong> The conservatee needs funds for medical
                  treatment, long-term care, or assisted living
                </li>
                <li>
                  <strong>Property Maintenance:</strong> The property requires repairs or
                  maintenance that the conservatorship cannot afford
                </li>
                <li>
                  <strong>Liquidity Needs:</strong> The conservatee needs cash for living expenses
                  or other financial obligations
                </li>
                <li>
                  <strong>Property Management:</strong> The property is difficult to manage or
                  maintain given the conservatee's circumstances
                </li>
                <li>
                  <strong>Estate Planning:</strong> Selling the property is part of a broader plan
                  to restructure the conservatee's assets
                </li>
                <li>
                  <strong>Debt Settlement:</strong> The property must be sold to pay creditors or
                  settle financial obligations
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Court Approval Process */}
        <section className="py-16 bg-gray-50">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                The Court Approval Process for Conservatorship Sales
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Selling property in a conservatorship requires obtaining court approval before the
                sale can proceed. This process ensures the sale serves the conservatee's best
                interests and complies with Nevada conservatorship law. Understanding this process
                helps conservators and their advisors prepare properly and avoid delays.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 1: Petition for Authority to Sell
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                The conservator must file a petition with the probate court requesting authority to
                sell the property. This petition must include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  Detailed explanation of why the sale is necessary and in the conservatee's best
                  interests
                </li>
                <li>
                  Property description, including address, legal description, and current condition
                </li>
                <li>
                  Proposed sale price and how it was determined (typically requires appraisal)
                </li>
                <li>Proposed terms of sale, including any contingencies or special conditions</li>
                <li>
                  Information about how sale proceeds will be used for the conservatee's benefit
                </li>
                <li>
                  Notice to interested parties, including the conservatee and their family members
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 2: Property Appraisal and Valuation
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                The court requires evidence that the proposed sale price represents fair market
                value:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  Professional appraisal by a licensed appraiser familiar with the local market
                </li>
                <li>Broker's price opinion (BPO) from a qualified real estate professional</li>
                <li>
                  Comparable sales analysis showing recent sales of similar properties in the area
                </li>
                <li>
                  Documentation of any factors affecting property value, such as needed repairs or
                  market conditions
                </li>
                <li>Explanation of how the proposed sale price relates to the appraised value</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 3: Court Hearing and Approval
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                The court schedules a hearing to review the proposed sale:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>The conservator presents evidence supporting the sale and proposed terms</li>
                <li>
                  Interested parties, including the conservatee and family members, may appear and
                  express opinions
                </li>
                <li>
                  The court evaluates whether the sale serves the conservatee's best interests
                </li>
                <li>
                  The judge reviews the proposed price to ensure it represents fair market value
                </li>
                <li>
                  Court issues an order either approving, denying, or modifying the proposed sale
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 4: Post-Approval Sale Process
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                After court approval, the sale proceeds similar to a standard transaction:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Property is listed and marketed to potential buyers</li>
                <li>Offers are received and evaluated by the conservator</li>
                <li>
                  If the accepted offer differs significantly from court-approved terms, additional
                  court approval may be needed
                </li>
                <li>Due diligence, inspections, and financing proceed normally</li>
                <li>Closing occurs with court order as part of the documentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conservator Responsibilities */}
        <section className="py-16 bg-white">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Conservator Responsibilities in Property Sales
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Conservators have significant legal and ethical responsibilities when selling
                property. These duties are more extensive than those in standard real estate
                transactions because the conservator acts as a fiduciary for someone who cannot
                protect their own interests. Understanding these responsibilities helps conservators
                avoid liability and ensures the conservatee's interests are properly protected.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Fiduciary Duty to the Conservatee
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                The conservator's primary duty is to act in the conservatee's best interests:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  <strong>Duty of Loyalty:</strong> Put the conservatee's interests first, avoiding
                  any conflicts of interest
                </li>
                <li>
                  <strong>Duty of Care:</strong> Exercise reasonable care and skill in managing the
                  sale, including obtaining professional advice when needed
                </li>
                <li>
                  <strong>Duty to Preserve Assets:</strong> Take steps to maintain property value
                  and prevent waste during the sale process
                </li>
                <li>
                  <strong>Duty to Account:</strong> Maintain detailed records of all sale-related
                  activities and provide accounting to the court
                </li>
                <li>
                  <strong>Duty to Inform:</strong> Keep the conservatee and interested parties
                  informed about the sale process, to the extent possible
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Legal Compliance Requirements
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Conservators must comply with all applicable laws and court orders:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Follow Nevada conservatorship law and court rules for property sales</li>
                <li>
                  Comply with all terms and conditions in the court order authorizing the sale
                </li>
                <li>Ensure all documentation meets title company and lender requirements</li>
                <li>File required reports and accountings with the court</li>
                <li>Maintain proper records of all sale-related expenses and activities</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Professional Assistance Requirements
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Conservators should engage qualified professionals to assist with the sale:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  <strong>Real Estate Agent:</strong> Work with an agent experienced in
                  conservatorship sales who understands court requirements
                </li>
                <li>
                  <strong>Attorney:</strong> Consult with a conservatorship attorney to ensure legal
                  compliance
                </li>
                <li>
                  <strong>Appraiser:</strong> Obtain professional appraisal to establish fair market
                  value
                </li>
                <li>
                  <strong>Accountant:</strong> Ensure proper accounting and tax treatment of sale
                  proceeds
                </li>
                <li>
                  <strong>Title Company:</strong> Work with a title company familiar with
                  conservatorship sales
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Challenges and Solutions */}
        <section className="py-16 bg-gray-50">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Common Challenges in Conservatorship Sales
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Conservatorship property sales present unique challenges that don't arise in
                standard real estate transactions. Understanding these challenges and how to address
                them helps ensure successful sales that serve the conservatee's interests.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Extended Timeline Challenges
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Court approval processes can significantly extend sale timelines:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Court hearings may be scheduled weeks or months in advance</li>
                <li>Buyers may be unwilling to wait for court approval before committing</li>
                <li>
                  Property may deteriorate or market conditions may change during the approval
                  process
                </li>
                <li>
                  <strong>Solution:</strong> Work with buyers who understand conservatorship sales
                  and are willing to wait for court approval. Consider obtaining preliminary court
                  approval before listing
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Property Condition Issues
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Conservatorship properties may have maintenance issues:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  Properties may have deferred maintenance if the conservatee was unable to maintain
                  them
                </li>
                <li>The conservatorship may lack funds for significant repairs before sale</li>
                <li>
                  Buyers may be concerned about property condition and request extensive inspections
                </li>
                <li>
                  <strong>Solution:</strong> Obtain professional inspection and provide full
                  disclosure. Consider pricing to reflect needed repairs. Explore financing repairs
                  through sale proceeds
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Family Disputes and Objections
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Family members may object to property sales:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Family members may disagree about whether the sale is necessary</li>
                <li>Disputes may arise about sale price or terms</li>
                <li>Objections can delay or derail court approval</li>
                <li>
                  <strong>Solution:</strong> Communicate openly with family members about the
                  reasons for the sale. Provide documentation supporting the sale decision. Work
                  with an attorney to address legitimate concerns
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
                  Frequently Asked Questions About Conservatorship Real Estate
                </h2>
                <p className="text-secondary-600">
                  Common questions about conservatorship property sales
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
              Need Expert Help with Your Conservatorship Property Sale?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Work with Dr. Jan Duffy, Las Vegas's leading conservatorship real estate specialist,
              to navigate your court-supervised sale with confidence and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Conservatorship Sale Help
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href={SITE_PHONE_TEL_HREF}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-700 transition-colors"
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
