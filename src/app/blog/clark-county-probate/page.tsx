import { ArrowLeft, CheckCircle, Clock, DollarSign, FileText, MapPin, Scale } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getSiteImageSrc } from '@/lib/cloudflare-images';

export const metadata: Metadata = {
  title: 'Clark County Probate Court Procedures Guide | Step-by-Step Process',
  description:
    'Complete step-by-step guide to navigating Clark County probate court for property sales. Learn about filing procedures, court approval, and required documentation.',
  keywords:
    'Clark County probate court, probate court procedures, Nevada probate court, probate property sales, court approval',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/blog/clark-county-probate/',
  },
  openGraph: {
    title: 'Clark County Probate Court Procedures Guide',
    description: 'Step-by-step guide to navigating Clark County probate court for property sales.',
    type: 'article',
    url: 'https://www.probaterealestatesales.com/blog/clark-county-probate/',
    publishedTime: '2024-09-20T00:00:00Z',
    modifiedTime: '2025-01-31T00:00:00Z',
    authors: ['Dr. Jan Duffy'],
    images: [
      {
        url: getSiteImageSrc('courthouse'),
        width: 1200,
        height: 675,
        alt: 'Clark County Regional Justice Center Las Vegas probate court building',
      },
    ],
  },
};

export default function ClarkCountyProbatePage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog/' },
    { name: 'Clark County Probate', url: '/blog/clark-county-probate/' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <PageHero
        title="Clark County Probate Court Procedures"
        subtitle="Step-by-step guide to navigating Clark County probate court for property sales."
        imageId="courthouse"
        overlayClassName="from-slate-950/80 via-purple-950/70 to-primary-900/55"
      >
        <Link href="/blog/" className="inline-flex items-center text-white hover:text-white">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Blog
        </Link>
      </PageHero>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MapPin className="h-12 w-12 text-primary-700 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Clark County Probate Court Overview
            </h2>
            <p className="text-lg text-secondary-700 max-w-3xl mx-auto">
              Clark County Probate Court is part of the Eighth Judicial District Court of Nevada.
              The court has 2 probate commissioners who handle probate matters, making the process
              more efficient than many other jurisdictions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <Clock className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-secondary-900 mb-1">6-8 Months</div>
              <div className="text-sm text-secondary-600">Typical Timeline</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <DollarSign className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-secondary-900 mb-1">$1,000</div>
              <div className="text-sm text-secondary-600">Court Filing Fees</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <Scale className="h-10 w-10 text-purple-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-secondary-900 mb-1">2 Commissioners</div>
              <div className="text-sm text-secondary-600">Probate Commissioners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Step-by-Step Court Procedures
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Initial Petition Filing</h3>
              </div>
              <div className="ml-14">
                <p className="text-secondary-700 mb-4">
                  File a petition with the{' '}
                  <Link
                    href="/locations/las-vegas/"
                    className="text-primary-700 hover:text-primary-900 font-semibold underline"
                  >
                    Clark County Probate Court
                  </Link>{' '}
                  to open the probate case. Required documents include:
                </p>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Original or certified copy of death certificate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Original will (if one exists) or statement that no will exists</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Petition for probate or letters of administration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>List of known heirs and beneficiaries</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">
                  Appointment of Executor/Administrator
                </h3>
              </div>
              <div className="ml-14">
                <p className="text-secondary-700 mb-4">
                  The court will review the petition and appoint an executor (if there's a will) or
                  administrator (if there's no will). This person receives "Letters Testamentary" or
                  "Letters of Administration" which grant legal authority to act on behalf of the
                  estate.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                  3
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Inventory and Appraisal</h3>
              </div>
              <div className="ml-14">
                <p className="text-secondary-700 mb-4">
                  Within 60 days of appointment, the executor/administrator must file an inventory
                  of all estate assets, including real estate. Real property requires a professional{' '}
                  <Link
                    href="/probate-property-valuation/"
                    className="text-primary-700 hover:text-primary-900 font-semibold underline"
                  >
                    appraisal
                  </Link>
                  . Learn about our{' '}
                  <Link
                    href="/services/#property-valuation"
                    className="text-primary-700 hover:text-primary-900 font-semibold underline"
                  >
                    property valuation services
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                  4
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">Creditor Notice Period</h3>
              </div>
              <div className="ml-14">
                <p className="text-secondary-700 mb-4">
                  Notice must be given to all known creditors. Creditors have 120 days from the date
                  notice is published to file claims against the estate. This period cannot be
                  shortened.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                  5
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">
                  Petition to Sell Real Estate
                </h3>
              </div>
              <div className="ml-14">
                <p className="text-secondary-700 mb-4">
                  To sell real estate, the executor/administrator must file a petition requesting{' '}
                  <Link
                    href="/services/#probate-sales"
                    className="text-primary-700 hover:text-primary-900 font-semibold underline"
                  >
                    probate property sale
                  </Link>
                  . Our{' '}
                  <Link
                    href="/services/#court-representation"
                    className="text-primary-700 hover:text-primary-900 font-semibold underline"
                  >
                    court representation services
                  </Link>{' '}
                  handle this process. court approval. The petition must include:
                </p>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Description of the property</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Appraised value</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proposed sale price</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Notice to all interested parties (heirs, beneficiaries, creditors)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4">
                  6
                </div>
                <h3 className="text-2xl font-bold text-secondary-900">
                  Court Approval and Confirmation
                </h3>
              </div>
              <div className="ml-14">
                <p className="text-secondary-700 mb-4">
                  After reviewing the petition, the court will hold a hearing (if required) and
                  issue an order authorizing the sale. Once an offer is received, the court must
                  confirm the sale before closing can proceed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Court Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Clark County Probate Court Information
          </h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Location</h3>
                <p className="text-secondary-700">
                  Regional Justice Center
                  <br />
                  200 Lewis Avenue
                  <br />
                  Las Vegas, NV 89101
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Hours</h3>
                <p className="text-secondary-700">
                  Monday - Friday: 8:00 AM - 5:00 PM
                  <br />
                  (Closed on weekends and court holidays)
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Contact</h3>
                <p className="text-secondary-700">
                  Phone: (702) 671-3000
                  <br />
                  Website:{' '}
                  <a
                    href="https://www.clarkcountycourts.us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-700 hover:text-primary-900"
                  >
                    www.clarkcountycourts.us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Tips for Navigating Clark County Probate Court
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <FileText className="h-8 w-8 text-primary-700 mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Organize Documents Early
              </h3>
              <p className="text-secondary-700">
                Having all required documents prepared and organized before filing can significantly
                speed up the process.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Clock className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Plan for Timeline</h3>
              <p className="text-secondary-700">
                Build in extra time for court scheduling and potential delays. The 6-8 month
                timeline is typical but not guaranteed.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Work with Specialists
              </h3>
              <p className="text-secondary-700">
                Probate attorneys and probate real estate agents understand court procedures and can
                help avoid common mistakes.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <DollarSign className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Budget for Costs</h3>
              <p className="text-secondary-700">
                Include court fees, attorney fees, appraisal costs, and property maintenance in your
                budget planning.
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
              href="/blog/nevada-probate-timeline/"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Nevada Probate Timeline
              </h3>
              <p className="text-secondary-600 text-sm">
                Complete breakdown of the 6-8 month Nevada probate timeline.
              </p>
            </Link>
            <Link
              href="/resources/nevada-probate-guide/"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Complete Probate Guide
              </h3>
              <p className="text-secondary-600 text-sm">
                Comprehensive guide with all Nevada probate information.
              </p>
            </Link>
            <Link
              href="/services/"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Court Navigation Services
              </h3>
              <p className="text-secondary-600 text-sm">
                Get expert help navigating Clark County probate court.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Clark County Probate Court?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Dr. Jan Duffy has extensive experience navigating Clark County probate court procedures
            for property sales. We can guide you through each step of the process.
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
          headline: 'Clark County Probate Court Procedures Guide | Step-by-Step Process',
          description:
            'Complete step-by-step guide to navigating Clark County probate court for property sales. Learn about filing procedures, court approval, and required documentation.',
          image: 'https://www.probaterealestatesales.com/images/clark-county-probate.jpg',
          author: 'Dr. Jan Duffy',
          datePublished: '2025-01-01T00:00:00Z',
          dateModified: new Date().toISOString(),
          url: 'https://www.probaterealestatesales.com/blog/clark-county-probate/',
        }}
      />
    </main>
  );
}
