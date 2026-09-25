import { ArrowRight, CheckCircle, Clock, DollarSign, FileText, Scale, Users } from 'lucide-react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SchemaMarkup from '@/components/SchemaMarkup';
import SectionVisual from '@/components/SectionVisual';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading FAQ...</div>,
});

export const metadata: Metadata = {
  title: 'Complete Nevada Probate Guide 2025 | Timeline, Costs & Process',
  description: `Comprehensive guide to Nevada probate real estate. Learn about Nevada's 6-8 month timeline, $1,000 court costs, and advantages over California. Free consultation: ${SITE_PHONE_DISPLAY}`,
  keywords:
    'Nevada probate guide, Nevada probate timeline, Nevada probate costs, Clark County probate, Nevada vs California probate',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/resources/nevada-probate-guide/',
  },
  openGraph: {
    title: 'Complete Nevada Probate Guide 2025 | Timeline, Costs & Process',
    description:
      'Comprehensive guide to Nevada probate real estate with 6-8 month timeline and cost advantages.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.probaterealestatesales.com/resources/nevada-probate-guide/',
  },
};

export default function NevadaProbateGuidePage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources/' },
    { name: 'Nevada Probate Guide', url: '/resources/nevada-probate-guide/' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <SchemaMarkup type="faq" breadcrumbs={breadcrumbs} />

      <PageHero
        title="Complete Nevada Probate Guide 2025"
        subtitle="Nevada's 6-8 month probate timeline, Clark County court costs, and how to sell inherited property in Las Vegas."
        imageId="resourcesGuides"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>6-8 Month Timeline</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            <span>Clark County: $1,000 Court Costs</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <span>2 Probate Commissioners</span>
          </div>
        </div>
      </PageHero>

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap gap-4 justify-center">
            <a href="#timeline" className="text-primary-700 hover:text-primary-900 font-medium">
              Timeline
            </a>
            <a href="#costs" className="text-primary-700 hover:text-primary-900 font-medium">
              Costs
            </a>
            <a href="#process" className="text-primary-700 hover:text-primary-900 font-medium">
              Process
            </a>
            <a href="#advantages" className="text-primary-700 hover:text-primary-900 font-medium">
              Nevada Advantages
            </a>
            <a href="#documents" className="text-primary-700 hover:text-primary-900 font-medium">
              Required Documents
            </a>
            <a href="#faq" className="text-primary-700 hover:text-primary-900 font-medium">
              FAQ
            </a>
            <Link
              href="/resources/las-vegas-probate-legal-resources/"
              className="text-primary-700 hover:text-primary-900 font-medium"
            >
              Courts &amp; Legal Aid
            </Link>
          </nav>
        </div>
      </section>

      {/* Nevada vs California Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Nevada Probate is Better Than California
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nevada offers significant advantages for probate property sales
            </p>
            <div className="mt-8 max-w-4xl mx-auto">
              <SectionVisual imageId="nevadaCaliforniaProbate" className="h-48 md:h-64" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-lg border border-red-200">
              <h3 className="text-2xl font-bold text-red-800 mb-6">California Probate</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-red-600" />
                  <span className="text-red-800 font-semibold">Timeline: 9-18 months</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-red-600" />
                  <span className="text-red-800 font-semibold">Court Costs: $1,000+</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-red-600" />
                  <span className="text-red-800 font-semibold">Complex court system</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-red-600" />
                  <span className="text-red-800 font-semibold">High attorney fees</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-lg border border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-6">Nevada Probate</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-green-600" />
                  <span className="text-green-800 font-semibold">Timeline: 6-8 months</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  <span className="text-green-800 font-semibold">Court Costs: $1,000</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-green-600" />
                  <span className="text-green-800 font-semibold">2 probate commissioners</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-green-600" />
                  <span className="text-green-800 font-semibold">Efficient process</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-blue-50 p-6 rounded-lg inline-block">
              <p className="text-lg text-blue-800 font-semibold">
                🎯 <strong>Result:</strong> Nevada probate is 3-10 months faster and more
                cost-effective than California!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nevada Probate Timeline */}
      <section id="timeline" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nevada Probate Timeline: 6-8 Months
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Step-by-step breakdown of Nevada's efficient probate process. Learn about our{' '}
              <Link
                href="/services/#probate-sales"
                className="text-primary-700 hover:text-primary-900 font-semibold underline"
              >
                probate services
              </Link>{' '}
              and{' '}
              <Link
                href="/blog/nevada-probate-timeline/"
                className="text-primary-700 hover:text-primary-900 font-semibold underline"
              >
                detailed probate timeline
              </Link>
              .
            </p>
            <div className="mt-8 max-w-4xl mx-auto">
              <SectionVisual imageId="probateTimeline" className="h-48 md:h-64" />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Court Filing</h3>
              <p className="text-gray-600 text-sm">
                File probate petition with Clark County District Court
              </p>
              <div className="mt-4 text-blue-600 font-semibold">Week 1</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Letters Issued</h3>
              <p className="text-gray-600 text-sm">Obtain letters testamentary or administration</p>
              <div className="mt-4 text-blue-600 font-semibold">Week 3-4</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Property Sale</h3>
              <p className="text-gray-600 text-sm">List and sell property with court approval</p>
              <div className="mt-4 text-blue-600 font-semibold">Month 4-6</div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Distribution</h3>
              <p className="text-gray-600 text-sm">Distribute proceeds to beneficiaries</p>
              <div className="mt-4 text-blue-600 font-semibold">Month 6-8</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-green-50 p-6 rounded-lg inline-block">
              <p className="text-lg text-green-800">
                ⚡ <strong>Key Advantage:</strong> Nevada's 6-8 month timeline is significantly
                faster than California's 9-18 month process!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nevada Probate Costs */}
      <section id="costs" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nevada Probate Costs Breakdown
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparent cost structure for Nevada probate services
            </p>
            <div className="mt-8 max-w-4xl mx-auto">
              <SectionVisual imageId="probateCostCalculator" className="h-48 md:h-64" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Court Costs by County</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">Clark County (Las Vegas)</span>
                  <span className="font-semibold text-green-600">$1,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">Washoe County (Reno)</span>
                  <span className="font-semibold text-blue-600">$1,300</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">Rural Counties (Esmeralda)</span>
                  <span className="font-semibold text-purple-600">$850</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Costs</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">Probate Administration</span>
                  <span className="font-semibold text-green-600">$8,000-9,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">Trust Administration</span>
                  <span className="font-semibold text-blue-600">$2,500</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">Certificate of Incumbency</span>
                  <span className="font-semibold text-purple-600">$750</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-blue-50 p-6 rounded-lg inline-block">
              <p className="text-lg text-blue-800">
                💰 <strong>Cost Savings:</strong> Trust administration ($2,500) is significantly
                cheaper than probate ($8,000-9,000) and takes only 3 months!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nevada Probate Process */}
      <section id="process" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nevada Probate Process: Step by Step
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed breakdown of Nevada's efficient probate process
            </p>
            <div className="mt-8 max-w-4xl mx-auto">
              <SectionVisual imageId="courtPetitionSale" className="h-48 md:h-64" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 1: Initial Filing</h3>
              <p className="text-gray-600 mb-3">
                File probate petition with Clark County District Court. Include death certificate,
                will (if applicable), and initial inventory of assets.
              </p>
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-sm text-blue-800">
                  <strong>Nevada Advantage:</strong> Clark County has two probate commissioners
                  (James Fontana - Fridays, Russell Geis - Wednesdays 9:30 AM) for faster
                  processing.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 2: Letters Issued</h3>
              <p className="text-gray-600 mb-3">
                Court issues letters testamentary or letters of administration, giving you legal
                authority to act on behalf of the estate.
              </p>
              <div className="bg-green-50 p-3 rounded">
                <p className="text-sm text-green-800">
                  <strong>Timeline:</strong> Letters typically issued within 3-4 weeks of filing.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Step 3: Property Management
              </h3>
              <p className="text-gray-600 mb-3">
                With letters issued, you can now sign binding listing agreements and begin property
                marketing and sales process.
              </p>
              <div className="bg-purple-50 p-3 rounded">
                <p className="text-sm text-purple-800">
                  <strong>Important:</strong> You cannot sign binding agreements before obtaining
                  letters with court stamp and signature.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Step 4: Sale Completion</h3>
              <p className="text-gray-600 mb-3">
                Complete property sale, handle closing, and distribute proceeds according to will or
                Nevada intestacy laws.
              </p>
              <div className="bg-orange-50 p-3 rounded">
                <p className="text-sm text-orange-800">
                  <strong>Total Timeline:</strong> 6-8 months from initial filing to final
                  distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nevada Advantages */}
      <section id="advantages" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nevada's Unique Probate Advantages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Why Nevada is the best choice for probate real estate
            </p>
            <div className="mt-8 max-w-4xl mx-auto">
              <SectionVisual imageId="smallEstateAffidavit" className="h-48 md:h-64" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Faster Timeline</h3>
              <p className="text-gray-600">
                Nevada's 6-8 month probate timeline is significantly faster than California's 9-18
                month process.
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lower Costs</h3>
              <p className="text-gray-600">
                Clark County court costs are $1,000, and trust administration is only $2,500 vs
                $8,000-9,000 for probate.
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct Court Access</h3>
              <p className="text-gray-600">
                Direct access to Clark County's two probate commissioners for faster processing.
              </p>
            </div>

            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <Scale className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Small Estate Options</h3>
              <p className="text-gray-600">
                Nevada offers $100,000 small estate limit and $25,000 set-aside procedure for
                simplified processing.
              </p>
            </div>

            <div className="text-center p-6 bg-red-50 rounded-lg">
              <CheckCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No State Estate Tax</h3>
              <p className="text-gray-600">
                Nevada has no state estate tax or inheritance tax, saving heirs significant money.
              </p>
            </div>

            <div className="text-center p-6 bg-indigo-50 rounded-lg">
              <FileText className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Efficient Documentation</h3>
              <p className="text-gray-600">
                While Nevada requires about 30 documents, the process is streamlined and efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Nevada Probate
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about Nevada probate law and procedures
              </p>
            </div>
            <FAQ />
            <div className="text-center mt-8">
              <Link
                href="/faq/"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
              >
                View All FAQs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Nevada Probate Process?</h2>
          <p className="text-xl mb-8">
            Get a free consultation and learn how Nevada's faster probate timeline can help you sell
            inherited property quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE_PHONE_TEL_HREF}
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Call {SITE_PHONE_DISPLAY}
            </a>
            <Link
              href="/contact/"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Free Nevada Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
