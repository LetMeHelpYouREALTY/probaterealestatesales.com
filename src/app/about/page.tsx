import {
  ArrowRight,
  Award,
  Clock,
  Mail,
  MapPin,
  Phone,
  Shield,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SchemaMarkup from '@/components/SchemaMarkup';
import SiteImage from '@/components/SiteImage';
import WhyChooseUs from '@/components/WhyChooseUs';
import { SITE_PHONE_DISPLAY, SITE_PHONE_E164, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading FAQ...</div>,
});

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | Top Las Vegas Probate Realtor | 20+ Years Experience',
  description: `Meet Dr. Jan Duffy, Las Vegas probate real estate agent with 20+ years of experience. Licensed Nevada real estate professional (S.0197614) specializing in probate real estate sales. Ph.D. in Research, expert in Clark County probate procedures. Free consultation: ${SITE_PHONE_DISPLAY}`,
  keywords:
    'Dr. Jan Duffy, probate realtor, Las Vegas probate realtor, probate real estate expert, Las Vegas real estate agent, Nevada probate specialist, probate real estate broker, licensed real estate professional',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/about/',
  },
  openGraph: {
    title: 'About Dr. Jan Duffy | Top Las Vegas Probate Realtor | 20+ Years Experience',
    description:
      'Meet Dr. Jan Duffy, top Las Vegas probate realtor with 20+ years experience. Licensed Nevada real estate professional specializing in probate real estate sales.',
    type: 'website',
    url: 'https://www.probaterealestatesales.com/about/',
  },
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about/' },
  ];

  const personSchema = {
    name: 'Dr. Jan Duffy',
    jobTitle: 'Licensed Nevada Real Estate Agent | Probate Real Estate Specialist',
    description:
      'Dr. Jan Duffy is a top Las Vegas probate realtor with 20+ years of experience. Licensed Nevada real estate professional (S.0197614) specializing in probate real estate sales. Ph.D. in Research, expert in Clark County probate procedures.',
    email: 'DrJanSells@ProbateRealEstateSales.com',
    telephone: SITE_PHONE_E164,
    url: 'https://www.probaterealestatesales.com/about/',
    knowsAbout: [
      'Nevada Probate Law',
      'Clark County Probate Court',
      'Probate Real Estate Sales',
      'Trust Administration',
      'Certificate of Incumbency',
      'Estate Liquidation',
      'Nevada Revised Statutes',
      'Real Estate Market Analysis',
    ],
    award: [
      'Top Las Vegas Probate Realtor',
      '20+ Years Experience',
      'Licensed Nevada Real Estate Professional (S.0197614)',
    ],
    worksFor: {
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
      url: 'https://www.probaterealestatesales.com',
    },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <SchemaMarkup type="faq" breadcrumbs={breadcrumbs} person={personSchema} />

      <PageHero
        title="About Dr. Jan Duffy"
        subtitle="Licensed Nevada Real Estate Professional | Probate Real Estate Specialist"
        imageId="consultationRoom"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            <span>License #S.0197614</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>20+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>Las Vegas, Nevada</span>
          </div>
        </div>
      </PageHero>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image and Credentials */}
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 mb-8">
                <div className="aspect-square max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                  <SiteImage
                    imageId="agentPortrait"
                    alt="Dr. Jan Duffy, Las Vegas probate realtor"
                    width={512}
                    height={512}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 512px"
                    priority
                  />
                </div>
              </div>

              {/* Credentials */}
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center">
                    <Award className="h-6 w-6 text-primary-700 mr-2" />
                    Professional Credentials
                  </h3>
                  <ul className="space-y-2 text-secondary-700">
                    <li className="flex items-start">
                      <span className="text-primary-700 mr-2">•</span>
                      <span>
                        <strong>License:</strong> Nevada Real Estate License #S.0197614
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-700 mr-2">•</span>
                      <span>
                        <strong>Education:</strong> Ph.D. in Research
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-700 mr-2">•</span>
                      <span>
                        <strong>Specialization:</strong> Probate Real Estate
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-700 mr-2">•</span>
                      <span>
                        <strong>Experience:</strong> 20+ Years in Las Vegas Real Estate
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center">
                    <Star className="h-6 w-6 text-primary-700 mr-2" />
                    Expertise Areas
                  </h3>
                  <ul className="space-y-2 text-secondary-700">
                    <li className="flex items-start">
                      <span className="text-primary-700 mr-2">•</span>
                      <span>Probate Property Sales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-700 mr-2">•</span>
                      <span>Estate Liquidation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-700 mr-2">•</span>
                      <span>Clark County Probate Court Procedures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-700 mr-2">•</span>
                      <span>Trust Administration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-700 mr-2">•</span>
                      <span>Property Valuation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-700 mr-2">•</span>
                      <span>Court-Approved Sales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Biography */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                  Helping You Move Forward—The Professional Way
                </h2>
                <p className="text-lg text-secondary-700 leading-relaxed mb-4">
                  As a highly-trained, professional, and skilled real estate specialist with
                  extensive probate expertise, you can be confident with me helping you move into
                  the next season of life with convenience while maximizing your sale proceeds.
                </p>
                <p className="text-lg text-secondary-700 leading-relaxed mb-4">
                  I've supported hundreds of people and families with real property including Single
                  Family Homes, High-Rise Units, Multi-Family Properties, Condos, and Land in the
                  Las Vegas valley since 2004. My background includes specialized knowledge in
                  probate real estate, estate liquidation, and Clark County probate court
                  procedures.
                </p>
                <p className="text-lg text-secondary-700 leading-relaxed mb-4">
                  With a Ph.D. in Research, I bring analytical rigor and attention to detail to
                  every probate transaction. I understand the complexities of Nevada probate law and
                  work diligently to ensure smooth, efficient property sales during what can be a
                  difficult time for families.
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-4 my-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-primary-700 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-secondary-900">20+</div>
                  <div className="text-sm text-secondary-600">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-6 text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-secondary-900">100+</div>
                  <div className="text-sm text-secondary-600">Families Helped</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg p-6 text-center">
                  <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-secondary-900">6-8</div>
                  <div className="text-sm text-secondary-600">Months Timeline</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg p-6 text-center">
                  <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-secondary-900">100%</div>
                  <div className="text-sm text-secondary-600">Court Trusted</div>
                </div>
              </div>

              {/* Why Choose Section */}
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                  Why Choose Dr. Jan Duffy?
                </h3>
                <ul className="space-y-3 text-secondary-700">
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">✓</span>
                    <span>
                      <strong>Nevada Probate Expertise:</strong> Deep understanding of Nevada's 6-8
                      month probate timeline vs California's 9-18 months
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">✓</span>
                    <span>
                      <strong>Court Experience:</strong> Familiar with Clark County probate
                      commissioners and procedures
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">✓</span>
                    <span>
                      <strong>Compassionate Service:</strong> Understanding that probate sales
                      happen during difficult times
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">✓</span>
                    <span>
                      <strong>Comprehensive Knowledge:</strong> From certificates of incumbency to
                      trust administration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-700 mr-2">✓</span>
                    <span>
                      <strong>Local Expertise:</strong> Serving all of Clark County including Las
                      Vegas, Henderson, Summerlin, and more
                    </span>
                  </li>
                </ul>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Let's Discuss Your Probate Real Estate Needs
                </h3>
                <p className="text-white mb-6">
                  Schedule a free consultation to discuss your probate property situation and learn
                  how we can help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={SITE_PHONE_TEL_HREF}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-700 rounded-md font-medium hover:bg-blue-50 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call {SITE_PHONE_DISPLAY}
                  </a>
                  <a
                    href="mailto:DrJanSells@ProbateRealEstateSales.com"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-primary-900 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <WhyChooseUs />
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">Get In Touch</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="h-8 w-8 text-primary-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Phone</h3>
                <a
                  href={SITE_PHONE_TEL_HREF}
                  className="text-primary-700 hover:text-primary-900 font-medium"
                >
                  {SITE_PHONE_DISPLAY}
                </a>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 text-primary-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Email</h3>
                <a
                  href="mailto:DrJanSells@ProbateRealEstateSales.com"
                  className="text-primary-700 hover:text-primary-900 font-medium"
                >
                  DrJanSells@ProbateRealEstateSales.com
                </a>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-primary-700 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Office</h3>
                <p className="text-secondary-600">
                  400 S 4th St suite 250 b<br />
                  Las Vegas, NV 89101
                </p>
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
              <h2 className="text-4xl font-bold text-secondary-900 mb-4">
                Frequently Asked Questions About Dr. Jan Duffy
              </h2>
              <p className="text-xl text-secondary-600">
                Common questions about our probate real estate expertise and services
              </p>
            </div>
            <FAQ />
            <div className="text-center mt-8">
              <Link
                href="/faq/"
                className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-900 font-semibold"
              >
                View All FAQs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
