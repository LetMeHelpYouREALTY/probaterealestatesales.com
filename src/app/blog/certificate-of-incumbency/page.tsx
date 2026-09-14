import { AlertCircle, ArrowLeft, CheckCircle, FileText, Info } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Certificate of Incumbency in Las Vegas | Complete Guide | Nevada Trusts 2025',
  description:
    'Complete guide to certificate of incumbency in Las Vegas, Nevada. Learn when and how to obtain this essential $750 document for trust property sales. Clark County requirements explained.',
  keywords:
    'certificate of incumbency in Las Vegas, certificate of incumbency Las Vegas, Nevada certificate of incumbency, Clark County certificate of incumbency, trust documentation, probate trusts, trustee certificate',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/blog/certificate-of-incumbency/',
  },
  openGraph: {
    title: 'Certificate of Incumbency in Las Vegas | Complete Guide | Nevada Trusts 2025',
    description:
      'Complete guide to certificate of incumbency in Las Vegas, Nevada. Learn when and how to obtain this essential $750 document for trust property sales.',
    type: 'article',
    url: 'https://www.probaterealestatesales.com/blog/certificate-of-incumbency/',
    publishedTime: '2024-10-15T00:00:00Z',
    modifiedTime: '2025-01-31T00:00:00Z',
    authors: ['Dr. Jan Duffy'],
  },
};

export default function CertificateOfIncumbencyPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog/' },
    { name: 'Certificate of Incumbency', url: '/blog/certificate-of-incumbency/' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog/" className="inline-flex items-center text-white hover:text-white mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Certificate of Incumbency Guide</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Everything you need to know about Nevada's certificate of incumbency for trusts and
              probate property transactions.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              What is a Certificate of Incumbency?
            </h2>
            <p className="text-lg text-secondary-700 mb-4">
              A Certificate of Incumbency is an official document that verifies the identity and
              authority of the current trustee(s) of a trust. This document is essential when a
              trust holds real estate property and you need to establish who has the legal authority
              to act on behalf of the trust.
            </p>
            <p className="text-lg text-secondary-700 mb-6">
              In Nevada, this document is particularly important for property transactions involving
              trusts, as it provides proof that the person(s) signing documents on behalf of the
              trust have the legal authority to do so.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <div className="flex items-start">
                <Info className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Key Purpose</h3>
                  <p className="text-blue-800">
                    The certificate establishes that the named trustee(s) currently have the legal
                    authority to manage, sell, or transfer trust assets, including real estate
                    property.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Needed Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8">
            When Do You Need a Certificate of Incumbency?
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    Real Estate Sales
                  </h3>
                  <p className="text-secondary-700">
                    When selling property held in a trust, title companies and buyers require proof
                    that the trustee has authority to sell the property.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    Property Transfers
                  </h3>
                  <p className="text-secondary-700">
                    When transferring property into or out of a trust, the certificate confirms who
                    can authorize the transfer.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">Refinancing</h3>
                  <p className="text-secondary-700">
                    Lenders require a certificate of incumbency when refinancing trust-held property
                    to verify the trustee's authority.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                    Probate Proceedings
                  </h3>
                  <p className="text-secondary-700">
                    When a trust is involved in probate proceedings, the court may require a
                    certificate to identify the current trustee.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Obtain Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8">
            How to Obtain a Certificate of Incumbency
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary-600 pl-6">
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Step 1: Review Trust Documents
              </h3>
              <p className="text-secondary-700 mb-4">
                The first step is to review the trust agreement (trust instrument) to identify:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 mb-4">
                <li>Current trustee(s) as named in the trust document</li>
                <li>Successor trustees (if applicable)</li>
                <li>Any specific requirements for trustee certification</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Step 2: Prepare the Certificate
              </h3>
              <p className="text-secondary-700 mb-4">The certificate typically includes:</p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700 mb-4">
                <li>Trust name and date of trust creation</li>
                <li>Current trustee(s) name(s) and contact information</li>
                <li>Statement confirming the trustee's authority</li>
                <li>Notarized signature of the trustee(s)</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                Step 3: Notarization
              </h3>
              <p className="text-secondary-700">
                The certificate must be notarized to be legally valid. The trustee(s) must sign the
                document in the presence of a notary public who will verify their identity.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mt-8">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-900 mb-2">Important Note</h3>
                <p className="text-yellow-800">
                  While you can prepare a certificate of incumbency yourself, it's highly
                  recommended to work with an experienced probate attorney or trust specialist to
                  ensure the document meets all legal requirements and is properly formatted for
                  your specific transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8">
            Common Issues and Solutions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Trustee Has Changed</h3>
              <p className="text-secondary-700">
                If the original trustee is deceased or has resigned, you'll need documentation
                showing the appointment of the successor trustee. This may require court approval
                depending on the trust terms.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Multiple Trustees</h3>
              <p className="text-secondary-700">
                When a trust has multiple trustees, the certificate must list all current trustees.
                Some trusts require all trustees to sign, while others may allow a majority or
                specific combination.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Trust Document Not Available
              </h3>
              <p className="text-secondary-700">
                If the original trust document is missing, you may need to obtain a copy from the
                attorney who created it, or in some cases, petition the court for guidance on
                trustee authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              href="/faq/"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover-lift transition-all duration-300 focus-ring"
              aria-label="View Trust Administration FAQ"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Trust Administration FAQ
              </h3>
              <p className="text-secondary-600 text-sm">
                Answers to common questions about trusts and certificates of incumbency.
              </p>
            </Link>
            <Link
              href="/resources/nevada-probate-guide/"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover-lift transition-all duration-300 focus-ring"
              aria-label="View Nevada Probate Guide"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Nevada Probate Guide
              </h3>
              <p className="text-secondary-600 text-sm">
                Complete guide covering probate and trust administration processes.
              </p>
            </Link>
            <Link
              href="/services/"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg hover-lift transition-all duration-300 focus-ring"
              aria-label="View Trust Property Services"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Trust Property Services
              </h3>
              <p className="text-secondary-600 text-sm">
                Professional services for trust property sales and administration.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Trust Property Transactions?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Dr. Jan Duffy specializes in probate and trust property sales. We can help navigate the
            documentation requirements for your trust property transaction.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
      <SchemaMarkup
        type="article"
        breadcrumbs={breadcrumbs}
        article={{
          headline: 'Certificate of Incumbency in Las Vegas | Complete Guide | Nevada Trusts 2025',
          description:
            'Complete guide to certificate of incumbency in Las Vegas, Nevada. Learn when and how to obtain this essential $750 document for trust property sales. Clark County requirements explained.',
          image: 'https://www.probaterealestatesales.com/images/certificate-of-incumbency.jpg',
          author: 'Dr. Jan Duffy',
          datePublished: '2025-01-01T00:00:00Z',
          dateModified: new Date().toISOString(),
          url: 'https://www.probaterealestatesales.com/blog/certificate-of-incumbency/',
        }}
      />
    </main>
  );
}
