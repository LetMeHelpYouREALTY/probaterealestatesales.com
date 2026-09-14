import {
  ArrowRight,
  Calculator,
  Clock,
  FileText,
  Gavel,
  Home as HomeIcon,
  Phone,
  Shield,
} from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import GbpOfficeMap from '@/components/GbpOfficeMap';
import Hero from '@/components/Hero';
import SchemaMarkup from '@/components/SchemaMarkup';
import SectionVisual from '@/components/SectionVisual';
import { GBP_BUSINESS_NAME, SITE_PHONE_DISPLAY } from '@/lib/site-contact';

// Removed heavy components - moved to dedicated pages for better performance

export const metadata: Metadata = {
  title: 'Probate Real Estate Sales | Las Vegas & Clark County Probate Real Estate',
  description: `Probate Real Estate Sales: expert probate real estate in Las Vegas and Clark County—court-approved property sales, estate liquidation, and Nevada’s 6–8 month timeline. Free consultation: ${SITE_PHONE_DISPLAY}.`,
  keywords:
    'probate real estate sales, probate homes Las Vegas, Clark County probate, probate property sales, inherited property sales, Nevada probate real estate',
  openGraph: {
    title: 'Probate Real Estate Sales | Las Vegas & Clark County Probate Real Estate',
    description: `Probate Real Estate Sales: Las Vegas and Clark County probate real estate—court-approved sales and inherited property guidance. Free consultation: ${SITE_PHONE_DISPLAY}.`,
    type: 'website',
    locale: 'en_US',
    siteName: GBP_BUSINESS_NAME,
    url: 'https://www.probaterealestatesales.com/',
    images: [
      {
        url: '/images/og-dr-jan-duffy.jpg',
        width: 1200,
        height: 630,
        alt: 'Probate Real Estate Sales — Las Vegas probate real estate services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Probate Real Estate Sales | Las Vegas Probate Real Estate',
    description: `Probate Real Estate Sales: Las Vegas and Clark County probate real estate services. Free consultation: ${SITE_PHONE_DISPLAY}.`,
    images: ['/images/og-dr-jan-duffy.jpg'],
  },
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/',
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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Quick Navigation */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 border-b border-gray-200">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-3">
              Quick Navigation
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Jump to the information you need most. All tools and resources are available on
              dedicated pages.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link
              href="/resources/#probate-timeline"
              className="bg-blue-100 text-blue-800 hover:bg-blue-200 rounded-lg p-4 text-center transition-all duration-200 hover:shadow-md hover-lift group focus-ring"
              aria-label="View Probate Timeline - 6-8 month process"
            >
              <Clock className="h-6 w-6 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm mb-1">Probate Timeline</h3>
              <p className="text-xs text-secondary-600">6-8 month process</p>
            </Link>
            <Link
              href="/resources/#property-checklist"
              className="bg-green-100 text-green-800 hover:bg-green-200 rounded-lg p-4 text-center transition-all duration-200 hover:shadow-md hover-lift group focus-ring"
              aria-label="View Probate Property Checklist - Step-by-step guide"
            >
              <FileText className="h-6 w-6 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm mb-1">Property Checklist</h3>
              <p className="text-xs text-secondary-600">Step-by-step guide</p>
            </Link>
            <Link
              href="/resources/#cost-calculator"
              className="bg-purple-100 text-purple-800 hover:bg-purple-200 rounded-lg p-4 text-center transition-all duration-200 hover:shadow-md hover-lift group focus-ring"
              aria-label="Use Probate Cost Calculator - Estimate costs"
            >
              <Calculator className="h-6 w-6 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm mb-1">Cost Calculator</h3>
              <p className="text-xs text-secondary-600">Estimate costs</p>
            </Link>
            <Link
              href="/home-valuation/"
              className="bg-orange-100 text-orange-800 hover:bg-orange-200 rounded-lg p-4 text-center transition-all duration-200 hover:shadow-md hover-lift group focus-ring"
              aria-label="Get Free Property Valuation - Free estimate"
            >
              <HomeIcon className="h-6 w-6 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm mb-1">Property Valuation</h3>
              <p className="text-xs text-secondary-600">Free estimate</p>
            </Link>
            <Link
              href="/faq/"
              className="bg-red-100 text-red-800 hover:bg-red-200 rounded-lg p-4 text-center transition-all duration-200 hover:shadow-md hover-lift group focus-ring"
              aria-label="View Frequently Asked Questions - Common questions"
            >
              <FileText className="h-6 w-6 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm mb-1">FAQ</h3>
              <p className="text-xs text-secondary-600">Common questions</p>
            </Link>
            <Link
              href="/contact/"
              className="bg-teal-100 text-teal-800 hover:bg-teal-200 rounded-lg p-4 text-center transition-all duration-200 hover:shadow-md hover-lift group focus-ring"
              aria-label="Contact Us - Free consultation with Dr. Duffy"
            >
              <Phone className="h-6 w-6 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-sm mb-1">Free Consultation</h3>
              <p className="text-xs text-secondary-600">Speak with Dr. Duffy</p>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-center">
            <Link
              href="/services/"
              className="inline-flex items-center text-primary-700 hover:text-primary-900 font-medium text-sm"
            >
              View All Services
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
            <Link
              href="/probate-division/"
              className="text-primary-700 hover:text-primary-900 font-medium text-sm"
            >
              Probate Division
            </Link>
            <Link
              href="/probate-homes-for-sale/"
              className="text-primary-700 hover:text-primary-900 font-medium text-sm"
            >
              Probate Homes
            </Link>
            <Link
              href="/trust-property-sales/"
              className="text-primary-700 hover:text-primary-900 font-medium text-sm"
            >
              Trust Sales
            </Link>
            <Link
              href="/conservatorship-real-estate/"
              className="text-primary-700 hover:text-primary-900 font-medium text-sm"
            >
              Conservatorship
            </Link>
            <Link
              href="/probate-property-buyers/"
              className="text-primary-700 hover:text-primary-900 font-medium text-sm"
            >
              Probate Buyers
            </Link>
            <Link
              href="/probate-estate-sales/"
              className="text-primary-700 hover:text-primary-900 font-medium text-sm"
            >
              Estate Sales
            </Link>
            <Link
              href="/contact/"
              className="text-primary-700 hover:text-primary-900 font-medium text-sm"
            >
              Contact
            </Link>
            <Link
              href="/locations/enterprise/"
              className="text-primary-700 hover:text-primary-900 font-medium text-sm"
            >
              Enterprise
            </Link>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section id="services" className="scroll-mt-20 bg-white">
        <div className="container-max py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Comprehensive Probate Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Dr. Jan Duffy provides end-to-end solutions to help families navigate the complex
              process of{' '}
              <Link
                href="/services/"
                className="text-primary-700 hover:text-primary-900 font-semibold underline"
              >
                probate real estate
              </Link>{' '}
              with compassion, expertise, and maximum value for your estate. Our{' '}
              <Link
                href="/probate-property-valuation/"
                className="text-primary-700 hover:text-primary-900 font-semibold underline"
              >
                probate property valuation
              </Link>{' '}
              services ensure you get fair market value for inherited properties across{' '}
              <Link
                href="/locations/"
                className="text-primary-700 hover:text-primary-900 font-semibold underline"
              >
                all Nevada locations
              </Link>
              .
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            <div className="md:col-span-2 lg:col-span-4">
              <SectionVisual imageId="consultationRoom" className="h-56 md:h-72" />
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md hover-lift transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <HomeIcon className="h-6 w-6 text-primary-700" />
              </div>
              <Link href="/probate-property-valuation/" className="block">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2 hover:text-primary-700 transition-colors">
                  Estate Property Valuation
                </h3>
                <p className="text-secondary-600 text-sm">
                  Comprehensive market analysis and court-compliant property appraisal. Learn more
                  about our{' '}
                  <span className="text-primary-700 font-medium">probate property valuation</span>{' '}
                  services.
                </p>
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md hover-lift transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Gavel className="h-6 w-6 text-primary-700" />
              </div>
              <Link href="/services/#probate-sales" className="block">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2 hover:text-primary-700 transition-colors">
                  Probate Process Navigation
                </h3>
                <p className="text-secondary-600 text-sm">
                  Step-by-step guidance through court requirements with attorney coordination. View
                  our complete{' '}
                  <span className="text-primary-700 font-medium">probate services</span> and{' '}
                  <Link
                    href="/resources/nevada-probate-guide/"
                    className="text-primary-700 font-medium underline"
                  >
                    Nevada probate guide
                  </Link>
                  .
                </p>
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md hover-lift transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary-700" />
              </div>
              <Link href="/services/#court-representation" className="block">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2 hover:text-primary-700 transition-colors">
                  Legal Compliance
                </h3>
                <p className="text-secondary-600 text-sm">
                  Complete handling of all legal documents and probate court requirements. Explore
                  our <span className="text-primary-700 font-medium">court representation</span>{' '}
                  services and{' '}
                  <Link
                    href="/probate-division/"
                    className="text-primary-700 font-medium underline"
                  >
                    probate division
                  </Link>{' '}
                  expertise.
                </p>
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md hover-lift transition-all duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary-700" />
              </div>
              <Link href="/probate-homes-for-sale/" className="block">
                <h3 className="text-lg font-semibold text-secondary-900 mb-2 hover:text-primary-700 transition-colors">
                  Market Optimization
                </h3>
                <p className="text-secondary-600 text-sm">
                  Strategic marketing to qualified buyers with proven negotiation support. Browse{' '}
                  <span className="text-primary-700 font-medium">probate homes for sale</span> and
                  learn about{' '}
                  <Link
                    href="/probate-property-buyers/"
                    className="text-primary-700 font-medium underline"
                  >
                    probate property buyers
                  </Link>
                  .
                </p>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/services/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 hover-lift transition-all duration-200 focus-ring"
              aria-label="View all probate services"
            >
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Quick Links */}
      <section id="resources" className="scroll-mt-20 bg-gray-50">
        <div className="container-max py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Probate Resources & Tools
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Access our comprehensive probate guides, calculators, and checklists to help you
              navigate the process
            </p>
            <div className="mt-6 max-w-3xl mx-auto">
              <SectionVisual imageId="resourcesGuides" className="h-48 md:h-64" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              href="/resources/#probate-timeline"
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover-lift transition-all duration-300 border border-gray-200 focus-ring"
              aria-label="View Nevada Probate Timeline - Complete 6-8 month process breakdown"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Nevada Probate Timeline
              </h3>
              <p className="text-secondary-600 mb-4">Complete 6-8 month process breakdown</p>
              <span className="text-primary-700 font-medium inline-flex items-center">
                View Timeline <ArrowRight className="h-4 w-4 ml-1" />
              </span>
            </Link>
            <Link
              href="/resources/#property-checklist"
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover-lift transition-all duration-300 border border-gray-200 focus-ring"
              aria-label="View Probate Property Checklist - Essential steps for selling inherited property"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Probate Property Checklist
              </h3>
              <p className="text-secondary-600 mb-4">
                Essential steps for selling inherited property
              </p>
              <span className="text-primary-700 font-medium inline-flex items-center">
                View Checklist <ArrowRight className="h-4 w-4 ml-1" />
              </span>
            </Link>
            <Link
              href="/resources/#cost-calculator"
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover-lift transition-all duration-300 border border-gray-200 focus-ring"
              aria-label="Use Probate Cost Calculator - Estimate total probate costs and fees"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Probate Cost Calculator
              </h3>
              <p className="text-secondary-600 mb-4">Estimate total probate costs and fees</p>
              <span className="text-primary-700 font-medium inline-flex items-center">
                Use Calculator <ArrowRight className="h-4 w-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Property Valuation CTA */}
      <section
        id="valuation"
        className="scroll-mt-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white"
      >
        <div className="container-max py-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-6 overflow-hidden rounded-xl">
              <SectionVisual imageId="propertyValuation" className="h-48 md:h-60" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Get Your Free Property Valuation</h2>
            <p className="text-xl text-white mb-6">
              Get an instant estimate of your property value with our professional valuation tool
            </p>
            <Link
              href="/home-valuation/"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 hover-lift transition-all duration-200 focus-ring"
              aria-label="Start free property valuation"
            >
              Start Free Valuation
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Properties CTA */}
      <section className="py-16 bg-white">
        <div className="container-max text-center">
          <div className="mb-8 max-w-4xl mx-auto">
            <SectionVisual imageId="listingsHero" className="h-52 md:h-72" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Browse Probate Homes for Sale
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
            Explore our current inventory of probate homes in Las Vegas. These probate properties
            are available for immediate purchase with court-approved sales and expert guidance.
          </p>
          <Link
            href="/probate-homes-for-sale/"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 hover-lift transition-all duration-200 focus-ring"
            aria-label="View all probate properties for sale"
          >
            View All Probate Properties
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Why Choose Us CTA */}
      <section id="why-choose-us" className="scroll-mt-20 bg-white">
        <div className="container-max py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Why Choose Dr. Jan Duffy?
            </h2>
            <div className="mb-6 max-w-xl mx-auto">
              <SectionVisual imageId="consultationRoomSide" className="h-48" />
            </div>
            <p className="text-lg text-secondary-600 mb-6">
              With 20+ years of experience, deep work in probate and trust property sales, and a
              Ph.D. in Research, Dr. Jan Duffy brings focused expertise to every probate
              transaction. Learn more about{' '}
              <Link
                href="/about/"
                className="text-primary-700 hover:text-primary-900 font-semibold underline"
              >
                Dr. Jan Duffy's background
              </Link>{' '}
              and read{' '}
              <Link
                href="/testimonials/"
                className="text-primary-700 hover:text-primary-900 font-semibold underline"
              >
                client testimonials
              </Link>{' '}
              from families we've helped with{' '}
              <Link
                href="/probate-estate-sales/"
                className="text-primary-700 hover:text-primary-900 font-semibold underline"
              >
                probate estate sales
              </Link>
              .
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-2xl font-bold text-primary-700 mb-2">Probate &amp; trust</div>
                <div className="text-secondary-700 font-medium">
                  Las Vegas &amp; Clark County focus
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-700 mb-2">20+</div>
                <div className="text-secondary-700 font-medium">Years Experience</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-2xl font-bold text-primary-700 mb-2">Ph.D.</div>
                <div className="text-secondary-700 font-medium">
                  Research &amp; data-driven guidance
                </div>
              </div>
            </div>
            <Link
              href="/about/"
              className="inline-flex items-center text-primary-700 hover:text-primary-900 font-medium focus-ring rounded-md px-2 py-1"
              aria-label="Learn more about Dr. Jan Duffy"
            >
              Learn More About Dr. Duffy
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ & Testimonials CTA */}
      <section id="faq-testimonials" className="scroll-mt-20 bg-gray-50">
        <div className="container-max py-12">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-secondary-600 mb-6">
                Get comprehensive answers to all your questions about probate real estate sales in
                Nevada.
              </p>
              <Link
                href="/faq/"
                className="inline-flex items-center text-primary-700 hover:text-primary-900 font-medium focus-ring rounded-md px-2 py-1"
                aria-label="View all frequently asked questions"
              >
                View All FAQs
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">Client Testimonials</h2>
              <p className="text-secondary-600 mb-6">
                Read what our clients say about working with Dr. Jan Duffy on their probate property
                sales.
              </p>
              <Link
                href="/testimonials/"
                className="inline-flex items-center text-primary-700 hover:text-primary-900 font-medium focus-ring rounded-md px-2 py-1"
                aria-label="Read client testimonials"
              >
                Read Testimonials
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="scroll-mt-20 bg-primary-600 text-white">
        <div className="container-max py-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-6 overflow-hidden rounded-xl">
              <SectionVisual imageId="freeConsultation" className="h-48 md:h-60" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-white mb-6">
              Contact us today for a free consultation about your probate real estate needs
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 hover-lift transition-all duration-200 focus-ring-dark"
              aria-label="Contact us for free consultation"
            >
              Contact Us
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-max">
          <GbpOfficeMap heading="Visit our Las Vegas office on Google Maps" />
        </div>
      </section>

      <SchemaMarkup type="home" />
    </main>
  );
}
