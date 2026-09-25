import { ArrowRight, Clock, Mail, MapPin, MessageSquare, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { CalendlyBookingPanel } from '@/components/calendly/CalendlyBookingPanel';
import GbpLocalActions from '@/components/GbpLocalActions';
import PageHero from '@/components/PageHero';
import SchemaMarkup from '@/components/SchemaMarkup';
import SectionVisual from '@/components/SectionVisual';
import SiteImage from '@/components/SiteImage';
import {
  FACEBOOK_PAGE_URL,
  GOOGLE_BUSINESS_REVIEW_URL,
  INSTAGRAM_PAGE_URL,
  LINKEDIN_COMPANY_URL,
  OFFICE_GOOGLE_MAPS_DIRECTIONS_URL,
  OFFICE_GOOGLE_MAPS_EMBED_SRC,
  THREADS_PROFILE_URL,
} from '@/config/site-google';
import {
  GBP_BUSINESS_CATEGORY,
  GBP_BUSINESS_NAME,
  GBP_DESCRIPTION,
  GBP_SERVICE_AREA_PRIMARY,
  GBP_SPECIAL_HOURS,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL_HREF,
  SITE_SMS_HREF,
  SITE_WEBSITE_GBP,
} from '@/lib/site-contact';

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading FAQ...</div>,
});

export const metadata: Metadata = {
  title: `Contact Probate Real Estate Sales - Dr. Jan Duffy | ${SITE_PHONE_DISPLAY}`,
  description: `Contact matches our Google Business Profile: probate real estate in Las Vegas and Clark County. Call ${SITE_PHONE_DISPLAY}, text via SMS, or email DrJanSells@ProbateRealEstateSales.com.`,
  keywords:
    'contact probate real estate Las Vegas, probate real estate Clark County, Google Business Profile, probate consultation Nevada',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/contact/',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Contact Probate Real Estate Sales - Dr. Jan Duffy | ${SITE_PHONE_DISPLAY}`,
    description:
      'Same business name, phone, and hours as our Google Business Profile. Las Vegas probate real estate.',
    type: 'website',
    url: 'https://www.probaterealestatesales.com/contact/',
  },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact/' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <SchemaMarkup type="faq" breadcrumbs={breadcrumbs} />

      <PageHero
        title="Contact us"
        subtitle={`Reach the same team and phone number as our Google Business Profile—most clients find us there first.`}
        imageId="downtownOffice"
      />

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-secondary-600 mb-10 max-w-3xl mx-auto space-y-3">
            <p>
              <span className="font-semibold text-secondary-900 text-lg block">
                {GBP_BUSINESS_NAME}
              </span>
              <span className="text-sm text-secondary-500">{GBP_BUSINESS_CATEGORY}</span>
            </p>
            <p className="text-secondary-700 leading-relaxed">{GBP_DESCRIPTION}</p>
            <p className="text-sm">
              <span className="font-medium text-secondary-800">Website: </span>
              <a
                href={SITE_WEBSITE_GBP}
                className="text-primary-700 underline hover:text-primary-900"
              >
                {SITE_WEBSITE_GBP}
              </a>
              <span className="block text-secondary-600 mt-2">
                Service area: {GBP_SERVICE_AREA_PRIMARY}
              </span>
            </p>
            <p className="text-sm pt-2">
              <span className="font-medium text-secondary-800">Social: </span>
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 underline hover:text-primary-900"
              >
                Facebook
              </a>
              <span className="text-secondary-400 mx-1.5" aria-hidden>
                ·
              </span>
              <a
                href={LINKEDIN_COMPANY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 underline hover:text-primary-900"
              >
                LinkedIn
              </a>
              <span className="text-secondary-400 mx-1.5" aria-hidden>
                ·
              </span>
              <a
                href={INSTAGRAM_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 underline hover:text-primary-900"
              >
                Instagram
              </a>
              <span className="text-secondary-400 mx-1.5" aria-hidden>
                ·
              </span>
              <a
                href={THREADS_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-700 underline hover:text-primary-900"
              >
                Threads
              </a>
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 text-center">
              <Phone className="h-12 w-12 text-primary-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Phone</h3>
              <a
                href={SITE_PHONE_TEL_HREF}
                className="text-primary-700 hover:text-primary-900 font-medium text-lg"
              >
                {SITE_PHONE_DISPLAY}
              </a>
              <p className="text-sm text-secondary-600 mt-2">Call during business hours</p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-cyan-100 rounded-xl p-8 text-center">
              <MessageSquare className="h-12 w-12 text-sky-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Text (SMS)</h3>
              <a
                href={SITE_SMS_HREF}
                className="text-sky-700 hover:text-sky-900 font-medium text-lg"
              >
                {SITE_PHONE_DISPLAY}
              </a>
              <p className="text-sm text-secondary-600 mt-2">Same number as phone</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 text-center">
              <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Email</h3>
              <a
                href="mailto:DrJanSells@ProbateRealEstateSales.com"
                className="text-green-600 hover:text-green-800 font-medium text-lg break-all"
              >
                DrJanSells@ProbateRealEstateSales.com
              </a>
              <p className="text-sm text-secondary-600 mt-2">Email us today</p>
            </div>
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-violet-100 text-center">
              <div className="relative h-28">
                <SiteImage
                  imageId="downtownOffice"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-8">
                <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">Visit</h3>
                <p className="text-secondary-700 font-medium mb-4">
                  400 S 4th St suite 250 b<br />
                  Las Vegas, NV 89101
                </p>
                <a
                  href={OFFICE_GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-sm font-medium"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </a>
                <a
                  href={GOOGLE_BUSINESS_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 mt-3 bg-white text-purple-700 border border-purple-600 rounded-md hover:bg-purple-50 transition-colors text-sm font-medium"
                >
                  View Google Reviews
                </a>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-gray-50 rounded-xl p-8 text-center mb-12">
            <Clock className="h-8 w-8 text-primary-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">Office Hours</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto text-sm">
              <div>
                <p className="font-medium text-secondary-900">Monday – Sunday</p>
                <p className="text-secondary-600">8:00 AM – 8:00 PM</p>
              </div>
              {GBP_SPECIAL_HOURS.map((row) => (
                <div key={row.dateLabel}>
                  <p className="font-medium text-secondary-900">
                    {row.dateLabel} ({row.label})
                  </p>
                  <p className="text-secondary-600">{row.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <SectionVisual imageId="downtownOffice" className="h-52 md:h-72" />
          </div>
          <GbpLocalActions variant="stack" className="mb-10 items-center text-center" />
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6 text-center">Find Us</h2>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src={OFFICE_GOOGLE_MAPS_EMBED_SRC}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Probate Real Estate Sales Office Location - 400 S 4th St suite 250 b, Las Vegas, NV 89101"
                className="w-full"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a
                href={OFFICE_GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-700 hover:text-primary-900 font-medium"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Get Directions to Our Office
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule (Calendly replaces legacy contact form) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <CalendlyBookingPanel
              title="Schedule time with us"
              description="Choose a time for a private 15-minute conversation. You can also call or text us using the contact options above."
              embedHeight={700}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Call us directly for a free probate consultation. We're here to help you navigate the
            process.
          </p>
          <a
            href={SITE_PHONE_TEL_HREF}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call {SITE_PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-secondary-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-secondary-600">
                Get answers to common questions before contacting us
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
