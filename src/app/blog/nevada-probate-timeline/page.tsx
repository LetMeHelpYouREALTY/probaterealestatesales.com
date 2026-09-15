import { ArrowLeft, Calendar, CheckCircle, Clock, FileText } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getSiteImageSrc } from '@/lib/cloudflare-images';

export const metadata: Metadata = {
  title: 'Nevada Probate Timeline Guide | Complete 6-8 Month Process',
  description:
    'Complete guide to Nevada probate timeline. Understand each step of the 6-8 month probate process for real estate sales in Clark County.',
  keywords:
    'Nevada probate timeline, probate process timeline, Clark County probate timeline, probate real estate timeline',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/blog/nevada-probate-timeline/',
  },
  openGraph: {
    title: 'Nevada Probate Timeline Guide | Complete 6-8 Month Process',
    description: 'Complete guide to Nevada probate timeline with detailed breakdown of each phase.',
    type: 'article',
    url: 'https://www.probaterealestatesales.com/blog/nevada-probate-timeline/',
    publishedTime: '2024-11-01T00:00:00Z',
    modifiedTime: '2025-01-31T00:00:00Z',
    authors: ['Dr. Jan Duffy'],
    images: [
      {
        url: getSiteImageSrc('probateTimeline'),
        width: 1200,
        height: 675,
        alt: 'Nevada probate timeline calendar and Clark County court documents',
      },
    ],
  },
};

export default function NevadaProbateTimelinePage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog/' },
    { name: 'Nevada Probate Timeline', url: '/blog/nevada-probate-timeline/' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <PageHero
        title="Nevada Probate Timeline Guide"
        subtitle="Understanding the 6-8 month probate process for real estate sales in Nevada."
        imageId="probateTimeline"
      >
        <Link href="/blog/" className="inline-flex items-center text-white hover:text-white">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Blog
        </Link>
      </PageHero>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
              Complete Probate Timeline Breakdown
            </h2>

            <div className="space-y-8">
              {/* Month 0-1 */}
              <div className="border-l-4 border-primary-600 pl-6 py-4">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-primary-700 mr-2" />
                  <span className="text-sm font-semibold text-primary-700 uppercase">
                    Months 0-1
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                  Initial Filing & Petition
                </h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      File petition with{' '}
                      <Link
                        href="/blog/clark-county-probate/"
                        className="text-primary-700 hover:text-primary-900 font-semibold underline"
                      >
                        Clark County Probate Court
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Submit death certificate and will (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Appoint executor or administrator</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Obtain Letters Testamentary or Letters of Administration</span>
                  </li>
                </ul>
              </div>

              {/* Month 1-2 */}
              <div className="border-l-4 border-blue-600 pl-6 py-4">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm font-semibold text-blue-600 uppercase">Months 1-2</span>
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                  Estate Inventory & Valuation
                </h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Complete inventory of all estate assets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Obtain{' '}
                      <Link
                        href="/probate-property-valuation/"
                        className="text-primary-700 hover:text-primary-900 font-semibold underline"
                      >
                        property appraisals and valuations
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>File inventory with probate court</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Notify creditors and heirs</span>
                  </li>
                </ul>
              </div>

              {/* Month 2-4 */}
              <div className="border-l-4 border-green-600 pl-6 py-4">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm font-semibold text-green-600 uppercase">Months 2-4</span>
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                  Creditor Claims Period
                </h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>120-day creditor claim period begins</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Review and address creditor claims</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Prepare property for sale (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Obtain court approval to sell real estate</span>
                  </li>
                </ul>
              </div>

              {/* Month 4-6 */}
              <div className="border-l-4 border-purple-600 pl-6 py-4">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-sm font-semibold text-purple-600 uppercase">
                    Months 4-6
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                  Property Sale & Closing
                </h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      List property with{' '}
                      <Link
                        href="/services/"
                        className="text-primary-700 hover:text-primary-900 font-semibold underline"
                      >
                        probate real estate specialist
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Accept offer and obtain court confirmation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Complete property sale and closing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Distribute proceeds according to will or intestate laws</span>
                  </li>
                </ul>
              </div>

              {/* Month 6-8 */}
              <div className="border-l-4 border-orange-600 pl-6 py-4">
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-orange-600 mr-2" />
                  <span className="text-sm font-semibold text-orange-600 uppercase">
                    Months 6-8
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                  Final Settlement & Distribution
                </h3>
                <ul className="space-y-2 text-secondary-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Pay all debts and expenses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Prepare final accounting for court</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Obtain court approval for final distribution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Close estate and discharge executor</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
              Key Timeline Factors
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <FileText className="h-8 w-8 text-primary-700 mb-4" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  Required Documents
                </h3>
                <p className="text-secondary-600">
                  Having all documents ready at the start can significantly speed up the process.
                  Missing documents can add weeks or months.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Court Schedule</h3>
                <p className="text-secondary-600">
                  Clark County has 2 probate commissioners, which helps keep the process moving
                  efficiently compared to other jurisdictions.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Clock className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Creditor Period</h3>
                <p className="text-secondary-600">
                  The 120-day creditor claim period is mandatory and cannot be shortened, but
                  planning ahead can help minimize delays.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Calendar className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Property Sales</h3>
                <p className="text-secondary-600">
                  Working with a probate real estate specialist who understands the court approval
                  process can expedite property sales.
                </p>
              </div>
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
              href="/blog/clark-county-probate/"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Clark County Probate Court
              </h3>
              <p className="text-secondary-600 text-sm">
                Step-by-step guide to navigating Clark County probate court procedures.
              </p>
            </Link>
            <Link
              href="/resources/nevada-probate-guide/"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Complete Nevada Probate Guide
              </h3>
              <p className="text-secondary-600 text-sm">
                Comprehensive guide to Nevada probate with costs, timeline, and process details.
              </p>
            </Link>
            <Link
              href="/services/"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Our Probate Services
              </h3>
              <p className="text-secondary-600 text-sm">
                Learn how we can help you navigate the probate process efficiently.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Navigating the Timeline?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Dr. Jan Duffy specializes in probate real estate sales and can help guide you through
            each step of the Nevada probate timeline.
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
          headline: 'Nevada Probate Timeline Guide | Complete 6-8 Month Process',
          description:
            'Complete guide to Nevada probate timeline. Understand each step of the 6-8 month probate process for real estate sales in Clark County.',
          image: 'https://www.probaterealestatesales.com/images/nevada-probate-timeline.jpg',
          author: 'Dr. Jan Duffy',
          datePublished: '2025-01-01T00:00:00Z',
          dateModified: new Date().toISOString(),
          url: 'https://www.probaterealestatesales.com/blog/nevada-probate-timeline/',
        }}
      />
    </main>
  );
}
