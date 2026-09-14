import {
  ArrowRight,
  Award,
  Building2,
  Calculator,
  CheckCircle,
  Clock,
  DollarSign,
  Download,
  FileText,
  Gavel,
  MessageCircle,
  Phone,
  Scale,
  Shield,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { ProbateTimelineEstimator } from '@/components/ProbateTimelineEstimator';
import SchemaMarkup from '@/components/SchemaMarkup';
import SiteImage from '@/components/SiteImage';
import { SITE_LOGO_ABSOLUTE_URL } from '@/config/site-google';
import { SERVICE_PAGES } from '@/lib/service-pages';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading FAQ...</div>,
});

export const metadata: Metadata = {
  title: 'Las Vegas Probate Real Estate Agent | Expert Probate Services | 45-Day Guarantee',
  description: `Licensed Las Vegas probate real estate agent. Expert probate services: court-approved sales and inherited property valuation. Free consultation: ${SITE_PHONE_DISPLAY}`,
  keywords:
    'probate real estate agent, Las Vegas probate real estate agent, companies that buy probate houses in nevada, probate realtor, probate services Las Vegas, probate property sales, court-approved sales, inherited property, buy probate houses nevada',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/services/',
  },
  openGraph: {
    title: 'Las Vegas Probate Real Estate Agent | Expert Probate Services | 45-Day Guarantee',
    description:
      'Top-rated probate real estate agent in Las Vegas. Expert probate services: court-approved sales, inherited property valuation, 45-day sale guarantee.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.probaterealestatesales.com/services/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ServicesPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <SchemaMarkup
        type="faq"
        breadcrumbs={breadcrumbs}
        customSchema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'RealEstateAgent',
              '@id': 'https://www.probaterealestatesales.com/#organization',
              name: 'Las Vegas Probate Real Estate Services',
              url: 'https://www.probaterealestatesales.com',
              logo: SITE_LOGO_ABSOLUTE_URL,
              areaServed: {
                '@type': 'AdministrativeArea',
                name: 'Clark County',
                containedInPlace: {
                  '@type': 'State',
                  name: 'Nevada',
                },
              },
              knowsAbout: [
                'Nevada Probate Law',
                'NRS Chapter 148',
                'Clark County Probate Court',
                'Letters Testamentary',
                'Certificate of Incumbency',
                'Court Confirmation Sales',
                'Independent Administration',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Probate Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    name: 'How Much Is My Inherited Property Worth?',
                    price: '0',
                    priceCurrency: 'USD',
                    description: 'Free court-accepted property valuation',
                  },
                  {
                    '@type': 'Offer',
                    name: 'Court Confirmation Sales',
                    price: 'Paid at closing',
                    description: 'Complete court representation included',
                  },
                  {
                    '@type': 'Offer',
                    name: '45-Day Sale Program',
                    price: 'Standard commission',
                    description: 'Guaranteed 45-day sale or reduced commission',
                  },
                ],
              },
            },
            {
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How long does probate take in Las Vegas?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Traditional probate in Clark County takes 6-8 months. With our expedited services and court relationships, we typically complete sales in 45 days.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What documents do I need to sell probate property in Nevada?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You need Letters Testamentary or Letters of Administration from Clark County Probate Court. These are issued after filing, which we help coordinate with your attorney.',
                  },
                },
              ],
            },
          ],
        }}
      />

      {/* 1. HERO SECTION WITH PSYCHOLOGICAL TRIGGERS */}
      <section
        className="hero-probate relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20"
        data-intent="solve-urgent-problem"
      >
        <div className="absolute inset-0">
          <SiteImage
            imageId="courtApprovedSales"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative">
          {/* Headline Formula: Problem + Solution + Unique Differentiator + Location */}
          <h1 className="emotional-headline text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Overwhelmed by Nevada Probate? We Sell Inherited Properties in{' '}
            <span className="highlight text-yellow-400 animate-pulse">45 Days</span> While You Focus
            on Family
          </h1>

          {/* Address All Stakeholder Concerns */}
          <div className="stakeholder-messages max-w-4xl mx-auto mb-12">
            <p className="for-executors text-xl mb-3 bg-blue-800/30 px-6 py-3 rounded-lg inline-block mx-2">
              For Executors: Navigate Clark County Court with confidence
            </p>
            <p className="for-heirs text-xl mb-3 bg-green-800/30 px-6 py-3 rounded-lg inline-block mx-2">
              For Heirs: Get fair market value without delays
            </p>
            <p className="for-attorneys text-xl mb-3 bg-purple-800/30 px-6 py-3 rounded-lg inline-block mx-2">
              For Attorneys: Trusted partner for 50+ law firms
            </p>
          </div>

          {/* Social Proof Ticker */}
          <div className="live-ticker bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-12 overflow-hidden">
            <div className="flex space-x-8 animate-scroll">
              <span className="update text-lg whitespace-nowrap">
                🏠 Probate property in Summerlin: Sold in 38 days
              </span>
              <span className="update text-lg whitespace-nowrap">
                📍 Henderson estate: $15K over asking price
              </span>
              <span className="update text-lg whitespace-nowrap">
                ⚖️ Court-ready filings aligned with Clark County probate procedures
              </span>
              <span className="update text-lg whitespace-nowrap">
                🏠 Probate property in Summerlin: Sold in 38 days
              </span>
              <span className="update text-lg whitespace-nowrap">
                📍 Henderson estate: $15K over asking price
              </span>
              <span className="update text-lg whitespace-nowrap">
                ⚖️ Court-ready filings aligned with Clark County probate procedures
              </span>
            </div>
          </div>

          {/* Multi-Option CTA Strategy */}
          <div className="cta-matrix space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <a
              href="https://drjanduffy.realscout.com/onboarding"
              className="primary-cta bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Need Immediate Help? Call {SITE_PHONE_DISPLAY}</span>
              <span className="availability text-sm block opacity-90">
                Available 24/7 for urgent matters
              </span>
            </a>
            <a
              href="https://drjanduffy.realscout.com/onboarding"
              className="secondary-cta bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download: "2025 Nevada Probate Timeline + Checklist"</span>
            </a>
            <a
              href="https://drjanduffy.realscout.com/onboarding"
              className="tertiary-cta bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Calculator className="w-5 h-5" />
              <span>Get Free Property Assessment</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Service Categories and Specialized Offerings
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_PAGES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}/`}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 transition hover:border-primary-300 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
                  {service.category}
                </p>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-sm text-gray-700">{service.summary}</p>
                <span className="mt-4 inline-flex items-center font-semibold text-primary-700">
                  View service details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SERVICE CARDS WITH MICRO-CONVERSIONS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Complete Probate Real Estate Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Court Confirmation Sales */}
            <div
              className="service-card bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              data-service="court-confirmation"
            >
              <div className="text-center mb-6">
                <Gavel className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Court Confirmation Sales: We Handle Every Hearing
                </h3>
              </div>

              <p className="problem text-red-600 font-semibold mb-3">
                Worried about court appearances and legal procedures?
              </p>
              <p className="solution text-gray-700 mb-6">
                Our team attends hearings, prepares court-focused documentation, and works within
                procedures used at{' '}
                <Link
                  href="/locations/las-vegas/"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline"
                >
                  Clark County Probate Court
                </Link>{' '}
                (outcomes vary by judge and case). Learn more about{' '}
                <Link
                  href="/resources/nevada-probate-guide/"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline"
                >
                  Nevada probate court procedures
                </Link>
                .
              </p>

              <ul className="deliverables space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Prepare & file all court petitions
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Attend Wednesday/Friday hearings with commissioners
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Handle overbid procedures
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Coordinate with your attorney
                </li>
              </ul>

              <div className="proof-points bg-blue-50 p-4 rounded-lg mb-6">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm text-blue-800">
                  <span className="stat">Court confirmation guidance</span>
                  <span className="time">Timelines vary by case—ask during consultation</span>
                  <span className="savings">Coordinate with your attorney on fees</span>
                </div>
              </div>

              <a
                href="https://drjanduffy.realscout.com/onboarding"
                className="micro-conversion w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>See Our Court Confirmation Process</span>
                <ArrowRight className="w-4 h-4" />
                <span className="incentive text-xs opacity-90 block">
                  + Get free court checklist
                </span>
              </a>
            </div>

            {/* Independent Administration */}
            <div
              className="service-card bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              data-service="independent-administration"
            >
              <div className="text-center mb-6">
                <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Independent Administration: Faster & More Private
                </h3>
              </div>

              <p className="problem text-red-600 font-semibold mb-3">
                Want to avoid court oversight and speed up the process?
              </p>
              <p className="solution text-gray-700 mb-6">
                Independent administration allows you to sell property without court confirmation,
                reducing timeline by 3-4 months. This is ideal for{' '}
                <Link
                  href="/trust-property-sales/"
                  className="text-green-600 hover:text-green-800 font-semibold underline"
                >
                  trust property sales
                </Link>{' '}
                and estates that qualify. See our{' '}
                <Link
                  href="/resources/nevada-probate-guide/#timeline"
                  className="text-green-600 hover:text-green-800 font-semibold underline"
                >
                  probate timeline guide
                </Link>{' '}
                for details.
              </p>

              <ul className="deliverables space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  No court hearings required
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Faster closing process
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Lower legal costs
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Maintain privacy
                </li>
              </ul>

              <div className="proof-points bg-green-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between text-sm text-green-800">
                  <span className="stat">300+ independent sales</span>
                  <span className="time">Average time: 45 days</span>
                  <span className="savings">Save $3,000+ in fees</span>
                </div>
              </div>

              <a
                href="https://drjanduffy.realscout.com/onboarding"
                className="micro-conversion w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Learn About Independent Administration</span>
                <ArrowRight className="w-4 h-4" />
                <span className="incentive text-xs opacity-90 block">
                  + Get qualification checklist
                </span>
              </a>
            </div>

            {/* Trust Administration */}
            <div
              className="service-card bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              data-service="trust-administration"
            >
              <div className="text-center mb-6">
                <FileText className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Trust Administration: Certificate of Incumbency
                </h3>
              </div>

              <p className="problem text-red-600 font-semibold mb-3">
                Need to access trust property but don't have authority?
              </p>
              <p className="solution text-gray-700 mb-6">
                We help obtain certificates of incumbency and navigate trust administration for
                faster property access and sales. Learn more about{' '}
                <Link
                  href="/blog/certificate-of-incumbency/"
                  className="text-purple-600 hover:text-purple-800 font-semibold underline"
                >
                  certificates of incumbency
                </Link>{' '}
                and our{' '}
                <Link
                  href="/trust-property-sales/"
                  className="text-purple-600 hover:text-purple-800 font-semibold underline"
                >
                  trust property sales
                </Link>{' '}
                services.
              </p>

              <ul className="deliverables space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Certificate of incumbency preparation
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Trust document review
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Attorney coordination
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Property transfer assistance
                </li>
              </ul>

              <div className="proof-points bg-purple-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between text-sm text-purple-800">
                  <span className="stat">200+ trust administrations</span>
                  <span className="time">Average time: 30 days</span>
                  <span className="savings">Cost: $750 flat fee</span>
                </div>
              </div>

              <a
                href="https://drjanduffy.realscout.com/onboarding"
                className="micro-conversion w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Trust Administration</span>
                <ArrowRight className="w-4 h-4" />
                <span className="incentive text-xs opacity-90 block">+ Get trust review</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HYPER-LOCAL CONTENT SECTIONS */}
      <section className="local-expertise py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            We Know Every Las Vegas Neighborhood's Probate Nuances
          </h2>

          <div className="neighborhood-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Summerlin */}
            <article className="neighborhood-card bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Summerlin Probate Sales</h3>
              <ul className="local-insights space-y-2 mb-4">
                <li className="text-sm text-gray-700">• Average sale time: 42 days</li>
                <li className="text-sm text-gray-700">• Common issue: HOA documentation delays</li>
                <li className="text-sm text-gray-700">
                  • Solution: Pre-approved with 12 Summerlin HOAs
                </li>
                <li className="text-sm text-gray-700">
                  • Recent sale: Red Rock Country Club - $1.2M in 35 days
                </li>
              </ul>
              <a
                href="/locations/summerlin/"
                className="text-red-600 hover:text-red-800 font-semibold flex items-center"
              >
                Summerlin Probate Guide <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </article>

            {/* Henderson */}
            <article className="neighborhood-card bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Henderson Estate Properties</h3>
              <ul className="local-insights space-y-2 mb-4">
                <li className="text-sm text-gray-700">• Average sale time: 48 days</li>
                <li className="text-sm text-gray-700">
                  • Specialty: 55+ communities (Sun City, Anthem)
                </li>
                <li className="text-sm text-gray-700">
                  • Challenge: Out-of-state heirs coordination
                </li>
                <li className="text-sm text-gray-700">
                  • Recent: Seven Hills estate - 5 heirs, 3 states, closed in 44 days
                </li>
              </ul>
              <a
                href="/locations/henderson/"
                className="text-green-600 hover:text-green-800 font-semibold flex items-center"
              >
                Henderson Probate Guide <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </article>

            {/* North Las Vegas */}
            <article className="neighborhood-card bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">North Las Vegas Probate</h3>
              <ul className="local-insights space-y-2 mb-4">
                <li className="text-sm text-gray-700">• Average sale time: 45 days</li>
                <li className="text-sm text-gray-700">
                  • Specialty: Newer developments & family homes
                </li>
                <li className="text-sm text-gray-700">• Challenge: Multiple heir coordination</li>
                <li className="text-sm text-gray-700">
                  • Recent: Aliante estate - 3 heirs, closed in 41 days
                </li>
              </ul>
              <a
                href="/locations/north-las-vegas/"
                className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
              >
                North Las Vegas Guide <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE ELEMENTS FOR ENGAGEMENT */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Calculate Your Probate Timeline
          </h2>

          <div
            className="interactive-tool max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"
            id="probate-timeline"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Get Your Personalized Timeline Estimate
            </h3>

            <ProbateTimelineEstimator />
          </div>
        </div>
      </section>

      {/* 5. TRUST-BUILDING ELEMENTS */}
      <section className="credibility py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Trusted by Las Vegas Probate Attorneys
          </h2>

          <div className="endorsements max-w-4xl mx-auto mb-16">
            <blockquote className="attorney-quote bg-gray-50 p-8 rounded-xl text-center">
              <p className="text-xl text-gray-700 mb-6 italic">
                "They understand Nevada probate law better than most realtors. They know about
                certificates of incumbency, letters testamentary, and court procedures. I refer all
                my probate clients to them."
              </p>
              <cite className="text-gray-600 font-semibold">
                - Probate Attorney, 20 years experience
              </cite>
            </blockquote>
          </div>

          {/* Certification Badges */}
          <div className="certifications flex justify-center space-x-8 mb-16">
            <div className="text-center">
              <Award className="w-16 h-16 text-yellow-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Probate Real Estate Specialist</p>
            </div>
            <div className="text-center">
              <Building2 className="w-16 h-16 text-blue-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Clark County Court Approved Vendor</p>
            </div>
            <div className="text-center">
              <Scale className="w-16 h-16 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Nevada Bar Association Preferred</p>
            </div>
          </div>

          {/* Live Chat Integration */}
          <div className="trust-chat text-center bg-blue-50 p-8 rounded-xl">
            <p className="text-xl text-gray-700 mb-4">
              Questions? Our probate specialists are online now
            </p>
            <a
              href="https://drjanduffy.realscout.com/onboarding"
              className="chat-trigger bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center mx-auto space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat with Probate Expert</span>
            </a>
            <p className="availability text-sm text-gray-600 mt-3">Average response: 30 seconds</p>
          </div>
        </div>
      </section>

      {/* 6. CONVERSION OPTIMIZATION ELEMENTS */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your Probate Property Sale?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Don't let probate delays keep you from moving forward. Our team has helped hundreds of
            families in Las Vegas sell inherited properties quickly and for fair market value.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 p-6 rounded-lg">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">45-Day Guarantee</h3>
              <p className="text-gray-300">
                We guarantee to sell your property in 45 days or reduce our commission
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No Upfront Costs</h3>
              <p className="text-gray-300">
                All fees are paid at closing - no out-of-pocket expenses
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Family-Focused</h3>
              <p className="text-gray-300">
                We handle the legal details while you focus on what matters most
              </p>
            </div>
          </div>

          <div className="space-x-4">
            <a
              href="https://drjanduffy.realscout.com/onboarding"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Get Free Property Assessment
            </a>
            <a
              href="https://drjanduffy.realscout.com/onboarding"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Download Probate Guide
            </a>
          </div>
        </div>
      </section>

      {/* Companies That Buy Probate Houses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900">
              Companies That Buy Probate Houses in Nevada vs. Probate Realtor
            </h2>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              While some companies buy probate houses directly, working with a probate real estate
              agent ensures you receive fair market value through court-approved sales processes.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border-l-4 border-green-600">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Why Choose a Probate Realtor vs. Cash Buyers
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>
                        Fair market value through proper appraisal (vs. 30-50% below market from
                        cash buyers)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Court-approved sales process protects all beneficiaries</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Transparent pricing with full market analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Professional guidance through legal requirements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Pricing strategy aligned with current market data</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Our Probate Realtor Process
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Professional property valuation and market analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Court-approved sales ensuring legal compliance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Access to qualified buyers and investors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>45-day sale guarantee or reduced commission</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Complete court representation and documentation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-gray-800 leading-relaxed">
                  <strong>Important:</strong> Companies that buy probate houses in Nevada typically
                  offer quick cash sales but pay 30-50% below market value. Working with a probate
                  real estate agent like Dr. Jan Duffy ensures you receive fair market value through
                  a court-approved process that protects all beneficiaries' interests. Contact us at{' '}
                  {SITE_PHONE_DISPLAY} for a free consultation and property valuation.
                </p>
              </div>

              <div className="mt-6 text-center">
                <a
                  href={SITE_PHONE_TEL_HREF}
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-md font-medium text-lg hover:bg-blue-700 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call {SITE_PHONE_DISPLAY} for Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Our Services
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our probate real estate services
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
    </>
  );
}
