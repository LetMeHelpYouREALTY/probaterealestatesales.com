import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';
// Import components for SEO and schema markup

import {
  ArrowRight,
  Building,
  CheckCircle,
  Clock,
  DollarSign,
  Gavel,
  MapPin,
  Phone,
  Users,
} from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SchemaMarkup from '@/components/SchemaMarkup';
import SEOMetaTags from '@/components/SEOMetaTags';
import SectionVisual from '@/components/SectionVisual';

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading FAQ...</div>,
});

export default function LasVegasProbateGuide() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources/' },
    { name: 'Las Vegas Probate Guide', url: '/resources/las-vegas-probate-guide/' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <SEOMetaTags
        title="Las Vegas Probate Real Estate Guide 2025"
        description="Complete guide to probate real estate in Las Vegas, Nevada. Learn about court procedures, timelines, costs, and how to sell inherited property in Clark County. Free consultation available."
        keywords={[
          'Las Vegas probate real estate',
          'Clark County probate court',
          'Nevada probate timeline',
          'inherited property Las Vegas',
          'probate property sales',
          'Las Vegas estate liquidation',
          'Clark County probate process',
          'Nevada probate costs',
        ]}
        canonicalUrl="https://www.probaterealestatesales.com/resources/las-vegas-probate-guide/"
        ogType="article"
        articleAuthor="Dr. Jan Duffy"
        articlePublishedTime="2025-01-01T00:00:00Z"
        articleSection="Probate Guides"
        articleTags={['Las Vegas', 'Probate', 'Real Estate', 'Nevada', 'Clark County']}
      />

      <SchemaMarkup
        type="faq"
        breadcrumbs={breadcrumbs}
        article={{
          headline: 'Las Vegas Probate Real Estate Guide 2025',
          description:
            'Complete guide to probate real estate in Las Vegas, Nevada including court procedures, timelines, and costs.',
          author: 'Dr. Jan Duffy',
          datePublished: '2025-01-01T00:00:00Z',
          dateModified: new Date().toISOString(),
          url: 'https://www.probaterealestatesales.com/resources/las-vegas-probate-guide/',
          image: 'https://www.probaterealestatesales.com/images/las-vegas-probate-guide.jpg',
        }}
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to Navigate Las Vegas Probate Real Estate',
          description: 'Step-by-step guide to probate real estate in Las Vegas, Nevada',
          step: [
            {
              '@type': 'HowToStep',
              name: 'File Petition with Clark County Court',
              text: 'Submit probate petition to Clark County District Court within 30 days of death',
            },
            {
              '@type': 'HowToStep',
              name: 'Appoint Personal Representative',
              text: 'Court appoints personal representative to manage estate assets',
            },
            {
              '@type': 'HowToStep',
              name: 'How Much Is My Inherited Property Worth? & Marketing',
              text: 'Professional real estate agent markets inherited property for maximum value',
            },
            {
              '@type': 'HowToStep',
              name: 'Court Confirmation Sale',
              text: 'Property sale approved by probate court commissioner',
            },
          ],
        }}
      />

      <PageHero
        title="Las Vegas Probate Real Estate Complete Guide 2025"
        subtitle="How to sell inherited property in Las Vegas and Clark County, with court timelines, costs, and local probate specialists."
        imageId="lasVegasHomes"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={SITE_PHONE_TEL_HREF}
            className="bg-white text-primary-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            <Phone className="mr-2 h-5 w-5" />
            Free Consultation: {SITE_PHONE_DISPLAY}
          </a>
          <a
            href="/contact/"
            className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-primary-800 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </PageHero>

      <section className="border-b border-gray-200 bg-slate-50 py-5">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-gray-700 md:text-base">
            <span className="font-semibold text-gray-900">See also:</span>{' '}
            <Link
              href="/resources/las-vegas-probate-legal-resources/"
              className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
            >
              Clark County courts, self-help &amp; Legal Aid directory
            </Link>{' '}
            — phones, addresses, and official links for Las Vegas.
          </p>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">6-8</div>
              <div className="text-gray-600">Months (typical Nevada range)</div>
              <div className="text-sm text-gray-500">Often faster than many California matters</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">Clark County</div>
              <div className="text-gray-600">Local probate procedures</div>
              <div className="text-sm text-gray-500">Outcomes depend on the court and the case</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-600">Licensed</div>
              <div className="text-gray-600">Nevada real estate</div>
              <div className="text-sm text-gray-500">
                S.0197614 — verify with your legal counsel on fees
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-600">20+</div>
              <div className="text-gray-600">Years of experience</div>
              <div className="text-sm text-gray-500">Probate &amp; trust property focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Las Vegas Specific Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
              Why Las Vegas Probate is Different
            </h2>
            <div className="mb-12">
              <SectionVisual imageId="courthouse" className="h-48 md:h-64" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Clark County Court System
                    </h3>
                    <p className="text-gray-600">
                      Las Vegas probate cases are handled by Clark County District Court, which has
                      specialized probate commissioners and streamlined procedures.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Faster Timeline</h3>
                    <p className="text-gray-600">
                      Nevada's probate process is significantly faster than California, typically
                      completing in 6-8 months vs 9-18 months.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Lower Costs</h3>
                    <p className="text-gray-600">
                      Reduced court fees, faster processing, and efficient procedures result in
                      lower overall probate costs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Local Market Expertise
                    </h3>
                    <p className="text-gray-600">
                      Our team knows the Las Vegas real estate market intimately, including property
                      values, buyer preferences, and market trends.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 rounded-full">
                    <Gavel className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Court Relationships
                    </h3>
                    <p className="text-gray-600">
                      Established relationships with Clark County probate commissioners and court
                      staff for smoother proceedings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-full">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Network</h3>
                    <p className="text-gray-600">
                      Strong connections with local attorneys, title companies, and real estate
                      professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
              Las Vegas Probate Process: Step by Step
            </h2>
            <div className="mb-12">
              <SectionVisual imageId="probateTimeline" className="h-48 md:h-64" />
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Initial Consultation & Assessment
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We meet with you to understand your situation, assess the property, and explain
                    the probate process. This includes:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Property condition evaluation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Market value assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Timeline planning
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Cost breakdown
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Court Filing & Administration
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We handle all court filings and administrative tasks:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Probate petition filing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Personal representative appointment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Notice to creditors
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Inventory preparation
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Property Marketing & Sale
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professional real estate marketing and sale process:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Professional photography and staging
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      MLS listing and marketing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Buyer qualification and offers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Negotiation and contract management
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Court Confirmation & Closing
                  </h3>
                  <p className="text-gray-600 mb-4">Final court approval and property transfer:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Court hearing attendance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Sale confirmation order
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Title transfer coordination
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Final accounting and distribution
                    </li>
                  </ul>
                </div>
              </div>
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
                Frequently Asked Questions About Las Vegas Probate
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about probate real estate in Las Vegas and Clark County
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
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get your free consultation and learn how we can help you navigate the Las Vegas
              probate process efficiently and cost-effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SITE_PHONE_TEL_HREF}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call {SITE_PHONE_DISPLAY}
              </a>
              <a
                href="/#contact"
                className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
