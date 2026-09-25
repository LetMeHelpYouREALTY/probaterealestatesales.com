import { ArrowRight, FileText, Phone } from 'lucide-react';
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
  title: 'Trust Property Sales in Las Vegas, Nevada | Trust Real Estate Expert | Dr. Jan Duffy',
  description:
    'Expert trust property sales in Las Vegas, Nevada. Complete guidance for trustees, beneficiaries, and attorneys on selling trust-owned real estate. Certificate of incumbency, court procedures, and trust administration services.',
  keywords: [
    'trust property sales',
    'trust property sales Las Vegas',
    'trust property sales Nevada',
    'trust real estate sales',
    'selling trust property',
    'trustee property sales',
    'trust administration real estate',
    'certificate of incumbency',
    'trust property listings',
    'Nevada trust sales',
    'Clark County trust sales',
    'trust real estate expert',
    'trust property valuation',
    'trust estate sales',
    'revocable trust property sales',
    'irrevocable trust property sales',
  ].join(', '),
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/trust-property-sales/',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Trust Property Sales in Las Vegas, Nevada | Trust Real Estate Expert',
    description:
      'Expert trust property sales in Las Vegas, Nevada. Complete guidance for trustees, beneficiaries, and attorneys on selling trust-owned real estate.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.probaterealestatesales.com/trust-property-sales/',
  },
};

export default function TrustPropertySalesPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Trust Property Sales', url: '/trust-property-sales/' },
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
              name: 'Trust Property Sales',
              description:
                'Expert trust property sales services in Las Vegas, Nevada. Complete guidance for trustees, beneficiaries, and attorneys on selling trust-owned real estate.',
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
          title="Trust Property Sales in Las Vegas, Nevada"
          subtitle="Expert guidance for trustees, beneficiaries, and attorneys on selling trust-owned real estate with confidence and compliance"
          imageId="trustSales"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
            >
              <FileText className="h-5 w-5 mr-2" />
              Get Trust Sale Consultation
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

        {/* Understanding Trust Property Sales */}
        <section className="py-16 bg-white">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Understanding Trust Property Sales
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Trust property sales represent a specialized segment of real estate transactions in
                Las Vegas and throughout Nevada. When real property is held in a trust, whether
                revocable or irrevocable, the sale process involves specific legal requirements,
                documentation, and procedures that differ from standard{' '}
                <Link
                  href="/services/#probate-sales"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  probate real estate transactions
                </Link>
                . Understanding these requirements is essential for trustees, beneficiaries, and
                their legal advisors. Learn about{' '}
                <Link
                  href="/blog/certificate-of-incumbency/"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  certificates of incumbency
                </Link>{' '}
                required for trust sales.
              </p>
              <p className="text-lg text-secondary-700 mb-6">
                A trust is a legal arrangement where a trustee holds and manages property for the
                benefit of beneficiaries. When the trust document authorizes the sale of real
                property, or when circumstances require liquidation of trust assets, the trustee
                must follow specific procedures to ensure the sale is legally valid and protects the
                interests of all beneficiaries.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                What is a Trust Property Sale?
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                A trust property sale occurs when real estate held in a trust is sold to a third
                party. This type of transaction has several distinguishing characteristics:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  The property is owned by a trust, not an individual, requiring the trustee to act
                  as the seller
                </li>
                <li>
                  The trustee must have authority under the trust document to sell the property
                </li>
                <li>
                  Nevada law requires specific documentation, including a{' '}
                  <Link
                    href="/blog/certificate-of-incumbency/"
                    className="text-primary-700 hover:text-primary-900 font-semibold underline"
                  >
                    certificate of incumbency
                  </Link>{' '}
                  in many cases
                </li>
                <li>The sale must comply with the trustee's fiduciary duties to beneficiaries</li>
                <li>
                  Title companies require proof of the trustee's authority before insuring the sale
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Types of Trusts That Hold Real Property
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Different types of trusts can hold real property, each with specific considerations
                for sales:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  <strong>Revocable Living Trusts:</strong> The grantor can modify or revoke the
                  trust during their lifetime. After death, these become irrevocable and the
                  successor trustee manages sales
                </li>
                <li>
                  <strong>Irrevocable Trusts:</strong> Cannot be modified without beneficiary
                  consent. Sales require careful adherence to trust terms
                </li>
                <li>
                  <strong>Testamentary Trusts:</strong> Created through a will and become active
                  after the grantor's death. Property sales follow probate court oversight
                </li>
                <li>
                  <strong>Special Needs Trusts:</strong> Hold property for beneficiaries with
                  disabilities. Sales must preserve eligibility for government benefits
                </li>
                <li>
                  <strong>Charitable Trusts:</strong> Hold property for charitable purposes. Sales
                  must comply with charitable trust regulations
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certificate of Incumbency */}
        <section className="py-16 bg-gray-50">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Certificate of Incumbency for Trust Property Sales
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                One of the most critical documents required for trust property sales in Nevada is
                the Certificate of Incumbency. This document proves that the person signing the sale
                documents is the current, authorized trustee of the trust. Title companies and
                buyers require this certificate to ensure the sale is legally valid.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                What is a Certificate of Incumbency?
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                A Certificate of Incumbency is a legal document that certifies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  The identity of the current trustee or trustees authorized to act on behalf of the
                  trust
                </li>
                <li>
                  That the trustee has the authority under the trust document to sell real property
                </li>
                <li>The date the trustee assumed their role and any relevant succession details</li>
                <li>That the trust is valid and in good standing under Nevada law</li>
                <li>Any limitations or conditions on the trustee's authority to sell</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                When is a Certificate of Incumbency Required?
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                In Las Vegas and throughout Clark County, a Certificate of Incumbency is typically
                required when:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  The original grantor (trust creator) has passed away and a successor trustee is
                  selling the property
                </li>
                <li>
                  There has been a change in trustees since the property was acquired by the trust
                </li>
                <li>
                  The title company cannot verify the trustee's authority from the trust document
                  alone
                </li>
                <li>The trust document is unclear about who has authority to sell</li>
                <li>Multiple trustees are involved and the company needs to verify who can sign</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                How to Obtain a Certificate of Incumbency
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Obtaining a Certificate of Incumbency involves several steps:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  <strong>Gather Required Documents:</strong> Original trust document, death
                  certificate (if applicable), any trust amendments, and documentation of trustee
                  succession
                </li>
                <li>
                  <strong>Work with Trust Attorney:</strong> An estate attorney prepares the
                  certificate based on the trust document and current circumstances
                </li>
                <li>
                  <strong>Notarization:</strong> The certificate must be notarized to be legally
                  valid
                </li>
                <li>
                  <strong>Recording:</strong> In some cases, the certificate may need to be recorded
                  with the county recorder's office
                </li>
                <li>
                  <strong>Cost:</strong> Certificate preparation typically costs $500-$1,000,
                  depending on complexity
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trust Sale Process */}
        <section className="py-16 bg-white">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                The Trust Property Sale Process
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Selling trust property involves a structured process that ensures legal compliance
                and protects all parties. Understanding each step helps trustees and their advisors
                navigate the transaction successfully.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 1: Verify Trustee Authority
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Before listing the property, the trustee must confirm they have authority to sell:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  Review the trust document to confirm the trustee has power to sell real property
                </li>
                <li>
                  Verify the trustee is the current, authorized trustee (especially important for
                  successor trustees)
                </li>
                <li>Check for any restrictions or conditions on the trustee's sale authority</li>
                <li>Confirm whether beneficiary consent or court approval is required</li>
                <li>Obtain legal opinion from trust attorney if the document is unclear</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 2: Property Valuation and Pricing
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Trustees have a fiduciary duty to obtain fair market value for trust property:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Obtain professional appraisal to establish fair market value</li>
                <li>Consider broker's price opinion (BPO) for additional market insight</li>
                <li>Review comparable sales in the area to validate pricing</li>
                <li>Document the valuation process to demonstrate fiduciary compliance</li>
                <li>Set listing price at or near appraised value to attract serious buyers</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 3: Property Preparation and Marketing
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Preparing the property for sale maximizes value and attracts qualified buyers:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Conduct property inspection to identify needed repairs or updates</li>
                <li>Make necessary repairs to maximize sale price and marketability</li>
                <li>Stage the property or ensure it's clean and presentable for showings</li>
                <li>Professional photography and marketing materials to showcase the property</li>
                <li>List on MLS and other marketing channels to reach maximum buyer pool</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 4: Offer Negotiation and Acceptance
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                When offers are received, trustees must evaluate them carefully:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Compare offers against appraised value and market conditions</li>
                <li>Consider buyer qualifications, financing, and proposed closing timeline</li>
                <li>Evaluate any contingencies and their impact on the transaction</li>
                <li>Consult with beneficiaries if required by the trust document</li>
                <li>Accept the offer that best serves the trust's interests</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 5: Documentation and Closing
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                The closing process requires specific trust-related documentation:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Certificate of Incumbency proving trustee authority</li>
                <li>Copy of the trust document (or relevant excerpts) showing sale authority</li>
                <li>Trustee's signature on all sale documents in their capacity as trustee</li>
                <li>Title insurance commitment showing trust as the property owner</li>
                <li>Distribution of sale proceeds according to trust terms</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trustee Responsibilities */}
        <section className="py-16 bg-gray-50">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Trustee Responsibilities in Property Sales
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Trustees have significant legal and ethical responsibilities when selling trust
                property. Understanding these duties helps trustees avoid liability and ensures
                beneficiaries' interests are protected.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Fiduciary Duty to Beneficiaries
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Trustees must act in the best interests of beneficiaries:
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
                Trustees must comply with all applicable laws and regulations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Follow Nevada trust law requirements for property sales</li>
                <li>Comply with real estate disclosure laws and regulations</li>
                <li>Ensure all documentation meets title company and lender requirements</li>
                <li>File required tax forms and report sale proceeds appropriately</li>
                <li>Maintain proper records of all sale-related activities and expenses</li>
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
                  Frequently Asked Questions About Trust Property Sales
                </h2>
                <p className="text-secondary-600">
                  Common questions about selling trust-owned real estate
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
              Need Expert Help with Your Trust Property Sale?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Work with Dr. Jan Duffy, Las Vegas's leading trust property sales specialist, to
              navigate your trust sale with confidence and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Trust Sale Consultation
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
