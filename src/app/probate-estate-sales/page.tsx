import { ArrowRight, Gavel, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SchemaMarkup from '@/components/SchemaMarkup';
import SectionVisual from '@/components/SectionVisual';
import { SITE_PHONE_DISPLAY, SITE_PHONE_E164, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading FAQ...</div>,
});

export const metadata: Metadata = {
  title: 'Probate Estate Sales | Complete Guide to Selling Estate Property | Las Vegas, Nevada',
  description:
    'Complete guide to probate estate sales in Las Vegas, Nevada. Expert guidance on selling estate property through probate court. Court-approved sales, executor responsibilities, and professional representation from Dr. Jan Duffy.',
  keywords: [
    'probate estate sales',
    'probate estate sales Las Vegas',
    'selling estate property',
    'probate property sales',
    'estate liquidation',
    'probate court sales',
    'selling inherited property',
    'probate estate liquidation',
    'Nevada probate estate sales',
    'Clark County probate sales',
    'executor property sales',
    'probate real estate sales',
    'estate property disposal',
    'probate home sales',
    'court-approved property sales',
  ].join(', '),
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/probate-estate-sales/',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Probate Estate Sales | Complete Guide to Selling Estate Property | Las Vegas, Nevada',
    description:
      'Complete guide to probate estate sales in Las Vegas, Nevada. Expert guidance on selling estate property through probate court with court-approved sales.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.probaterealestatesales.com/probate-estate-sales/',
  },
};

export default function ProbateEstateSalesPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Probate Estate Sales', url: '/probate-estate-sales/' },
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
              name: 'Probate Estate Sales',
              description:
                'Complete probate estate sales services in Las Vegas, Nevada. Expert guidance on selling estate property through probate court with court-approved sales.',
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
          title="Probate Estate Sales in Las Vegas, Nevada"
          subtitle="Complete guide to selling estate property through probate court with expert guidance and professional representation"
          imageId="estateLiquidation"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
            >
              <Gavel className="h-5 w-5 mr-2" />
              Get Estate Sale Help
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
                Understanding Probate Estate Sales
              </h2>
              <div className="mb-6">
                <SectionVisual imageId="estateLiquidation" className="h-48 md:h-64" />
              </div>
              <p className="text-lg text-secondary-700 mb-6">
                Probate estate sales represent a specialized type of real estate transaction that
                occurs when property from a deceased person's estate must be sold as part of the
                probate process. In Las Vegas and throughout Nevada, these sales are
                court-supervised to ensure fair dealing, proper valuation, and compliance with
                probate law. Understanding how probate estate sales work helps executors,
                beneficiaries, and their advisors navigate this complex process successfully.
              </p>
              <p className="text-lg text-secondary-700 mb-6">
                When someone passes away without a living trust or other estate planning mechanism,
                their assets, including real property, typically enter probate court. The court
                oversees the process of identifying assets, paying debts and expenses, and
                distributing remaining property to heirs or beneficiaries. As part of this process,
                real estate may need to be sold to generate cash for estate expenses, pay creditors,
                or divide assets among multiple beneficiaries.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                What is a Probate Estate Sale?
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                A probate estate sale is the sale of real property that is part of an estate going
                through probate court proceedings. These sales have several distinguishing
                characteristics:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  The property owner has passed away and the estate is being administered through
                  probate court
                </li>
                <li>
                  The property must be sold as part of settling the estate, either by court order or
                  executor decision
                </li>
                <li>
                  All sales require court approval, ensuring transparency and fair market value
                  pricing
                </li>
                <li>
                  The sale process follows specific legal procedures mandated by Nevada probate law
                </li>
                <li>
                  Buyers may need to wait for court confirmation before the sale can be finalized
                </li>
                <li>The executor or administrator acts as the seller on behalf of the estate</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                When Probate Estate Sales Are Necessary
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Several circumstances may require selling property in a probate estate:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  <strong>Estate Liquidation:</strong> The estate needs cash to pay debts, taxes, or
                  administrative expenses
                </li>
                <li>
                  <strong>Multiple Heirs:</strong> Several beneficiaries prefer cash distribution
                  rather than co-owning the property
                </li>
                <li>
                  <strong>Property Maintenance:</strong> The estate cannot afford ongoing property
                  expenses like taxes, insurance, and maintenance
                </li>
                <li>
                  <strong>Geographic Distribution:</strong> Heirs live in different locations and
                  cannot manage the property
                </li>
                <li>
                  <strong>Market Conditions:</strong> The executor determines it's an optimal time
                  to sell based on market conditions
                </li>
                <li>
                  <strong>Property Condition:</strong> The home requires significant repairs that
                  the estate cannot fund
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* The Probate Sale Process */}
        <section className="py-16 bg-gray-50">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                The Probate Estate Sale Process
              </h2>
              <div className="mb-6">
                <SectionVisual imageId="courtPetitionSale" className="h-48 md:h-64" />
              </div>
              <p className="text-lg text-secondary-700 mb-6">
                Selling property in a probate estate involves a structured process that ensures
                legal compliance and protects all parties. Understanding each step helps executors
                and their advisors navigate the transaction successfully.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 1: Determine Need for Sale
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                The executor or administrator must determine if property sale is necessary:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Review estate assets, debts, and expenses to determine if cash is needed</li>
                <li>
                  Consult with beneficiaries about their preferences for property distribution
                </li>
                <li>
                  Consider property maintenance costs and estate's ability to maintain the property
                </li>
                <li>Evaluate market conditions and timing for optimal sale results</li>
                <li>
                  Determine if sale is required by will, court order, or necessary for estate
                  administration
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 2: Property Valuation
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Obtain professional property valuation for court approval:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Hire a licensed appraiser to determine fair market value</li>
                <li>Obtain broker's price opinion (BPO) for additional market insight</li>
                <li>Review comparable sales in the area to validate pricing</li>
                <li>Document the valuation process to demonstrate fiduciary compliance</li>
                <li>Use valuation to set listing price and guide acceptable offer ranges</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 3: Court Petition for Sale Authority
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                File petition with probate court requesting authority to sell:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  Prepare petition explaining why sale is necessary and in estate's best interests
                </li>
                <li>
                  Include property description, proposed sale price, and valuation documentation
                </li>
                <li>Provide notice to interested parties, including beneficiaries and creditors</li>
                <li>Schedule court hearing for judge to review the proposed sale</li>
                <li>Obtain court order authorizing the sale at specified terms</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 4: Property Marketing and Sale
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Market the property and negotiate sale:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>List property on MLS and other marketing channels</li>
                <li>Prepare property for showings and marketing</li>
                <li>
                  Review offers and evaluate them against appraised value and market conditions
                </li>
                <li>Accept offer that best serves estate's interests</li>
                <li>
                  If accepted offer differs significantly from court-approved terms, seek additional
                  court approval
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 5: Court Confirmation and Closing
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Complete sale with court confirmation:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>File petition for court confirmation of the accepted offer</li>
                <li>Provide notice of proposed sale to interested parties</li>
                <li>Attend court hearing for final sale approval</li>
                <li>Obtain court order confirming the sale</li>
                <li>Proceed to closing with court order as part of documentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Executor Responsibilities */}
        <section className="py-16 bg-white">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Executor Responsibilities in Probate Estate Sales
              </h2>
              <div className="mb-6">
                <SectionVisual imageId="executorConsulting" className="h-48 md:h-64" />
              </div>
              <p className="text-lg text-secondary-700 mb-6">
                Executors have significant legal and ethical responsibilities when selling estate
                property. Understanding these duties helps executors avoid liability and ensures
                beneficiaries' interests are protected.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Fiduciary Duty to Beneficiaries
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Executors must act in the best interests of beneficiaries:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  <strong>Duty of Loyalty:</strong> Put beneficiaries' interests ahead of personal
                  interests
                </li>
                <li>
                  <strong>Duty of Care:</strong> Exercise reasonable care and skill in managing the
                  sale
                </li>
                <li>
                  <strong>Duty to Inform:</strong> Keep beneficiaries informed about the sale
                  process
                </li>
                <li>
                  <strong>Duty to Account:</strong> Provide accurate accounting of sale proceeds and
                  expenses
                </li>
                <li>
                  <strong>Duty to Preserve Assets:</strong> Take steps to maintain property value
                  during the sale process
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Legal Compliance Requirements
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Executors must comply with all applicable laws and court orders:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Follow Nevada probate law requirements for property sales</li>
                <li>Comply with all terms and conditions in court orders authorizing sales</li>
                <li>Ensure all documentation meets title company and lender requirements</li>
                <li>File required reports and accountings with the court</li>
                <li>Maintain proper records of all sale-related expenses and activities</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Professional Assistance
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Executors should engage qualified professionals:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  <strong>Real Estate Agent:</strong> Work with an agent experienced in probate
                  sales
                </li>
                <li>
                  <strong>Attorney:</strong> Consult with a probate attorney for legal compliance
                </li>
                <li>
                  <strong>Appraiser:</strong> Obtain professional appraisal for fair market value
                </li>
                <li>
                  <strong>Accountant:</strong> Ensure proper accounting and tax treatment
                </li>
                <li>
                  <strong>Title Company:</strong> Work with a title company familiar with probate
                  sales
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Challenges */}
        <section className="py-16 bg-gray-50">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Common Challenges in Probate Estate Sales
              </h2>
              <div className="mb-6">
                <SectionVisual imageId="propertyChecklist" className="h-48 md:h-64" />
              </div>
              <p className="text-lg text-secondary-700 mb-6">
                Probate estate sales present unique challenges that don't arise in standard real
                estate transactions. Understanding these challenges and how to address them helps
                ensure successful sales that serve the estate's interests.
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
                  <strong>Solution:</strong> Work with buyers who understand probate sales and are
                  willing to wait. Consider obtaining preliminary court approval before listing
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Property Condition Issues
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Estate properties may have maintenance issues:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  Properties may have deferred maintenance if the deceased was unable to maintain
                  them
                </li>
                <li>The estate may lack funds for significant repairs before sale</li>
                <li>
                  Buyers may be concerned about property condition and request extensive inspections
                </li>
                <li>
                  <strong>Solution:</strong> Obtain professional inspection and provide full
                  disclosure. Consider pricing to reflect needed repairs
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Beneficiary Disputes
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Beneficiaries may disagree about property sales:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Beneficiaries may disagree about whether sale is necessary</li>
                <li>Disputes may arise about sale price or terms</li>
                <li>Objections can delay or derail court approval</li>
                <li>
                  <strong>Solution:</strong> Communicate openly with beneficiaries. Provide
                  documentation supporting the sale decision. Work with an attorney to address
                  legitimate concerns
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
                  Frequently Asked Questions About Probate Estate Sales
                </h2>
                <p className="text-secondary-600">
                  Common questions about selling estate property through probate
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
              Need Expert Help with Your Probate Estate Sale?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Work with Dr. Jan Duffy, Las Vegas's leading probate real estate specialist, to
              navigate your estate sale with confidence and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Estate Sale Help
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
