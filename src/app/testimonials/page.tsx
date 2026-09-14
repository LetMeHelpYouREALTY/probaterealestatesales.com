import { ArrowRight, Award, ExternalLink, Phone, Quote, Star } from 'lucide-react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SchemaMarkup from '@/components/SchemaMarkup';
import { GOOGLE_BUSINESS_REVIEW_URL } from '@/config/site-google';
import { buildLocalBusinessNestedReviewsStructuredData } from '@/lib/schema';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading FAQ...</div>,
});

export const metadata: Metadata = {
  title: 'Client Testimonials & Success Stories | Dr. Jan Duffy Probate Real Estate',
  description:
    "Read real testimonials from families who trusted Dr. Jan Duffy with their probate property sales. See how we've helped clients achieve results above asking price with compassionate, expert guidance.",
  keywords:
    'probate real estate testimonials, client success stories, probate property sales reviews, Dr. Jan Duffy reviews, estate sale testimonials',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/testimonials/',
  },
  openGraph: {
    title: 'Client Testimonials & Success Stories | Dr. Jan Duffy',
    description:
      "Real stories from families who have experienced Dr. Duffy's compassionate, expert guidance through the probate process.",
    type: 'website',
    url: 'https://www.probaterealestatesales.com/testimonials/',
  },
};

const testimonials = [
  {
    id: 1,
    datePublished: '2025-01-15',
    name: 'The Anderson Family',
    role: 'Summerlin Estate',
    emotionalSituation:
      "After our mother passed, we were overwhelmed by the probate process and had three siblings with different opinions on what to do with Mom's house.",
    specificAction:
      'Dr. Duffy handled everything with compassion and professionalism, coordinating family meetings and mediating between all three siblings.',
    specificResult:
      "She sold Mom's house for $50,000 over asking price and completed the entire process in just 45 days.",
    emotionalOutcome:
      'Her expertise turned a difficult situation into a smooth process that brought our family closer together.',
    rating: 5,
    property: 'Summerlin Luxury Home',
    salePrice: '$750,000',
    marketValue: '$700,000',
    timeline: '45 days',
    location: 'Summerlin, Las Vegas',
  },
  {
    id: 2,
    datePublished: '2025-01-10',
    name: 'Robert Martinez',
    role: 'Executor, Henderson Property',
    emotionalSituation:
      "As executor of my uncle's estate, I needed someone who understood both the legal requirements and the real estate market.",
    specificAction:
      "Dr. Duffy's knowledge of probate law was invaluable. She coordinated with our attorney and handled all court requirements.",
    specificResult:
      'She sold the property in just 30 days for $425,000, which was $25,000 above the initial estate valuation.',
    emotionalOutcome:
      'I felt confident and supported throughout the entire process, knowing Dr. Duffy was handling everything professionally.',
    rating: 5,
    property: 'Henderson Family Home',
    salePrice: '$425,000',
    marketValue: '$400,000',
    timeline: '30 days',
    location: 'Henderson, NV',
  },
  {
    id: 3,
    datePublished: '2024-12-20',
    name: 'Jennifer & David Thompson',
    role: 'North Las Vegas Estate',
    emotionalSituation:
      'We inherited a property that needed significant repairs and were worried about the costs and timeline.',
    specificAction:
      'Dr. Duffy assessed the property, coordinated necessary repairs, and managed the entire renovation process.',
    specificResult:
      'The property sold for $380,000 after repairs, netting us $60,000 more than if we had sold it as-is.',
    emotionalOutcome:
      "Dr. Duffy's guidance gave us peace of mind during a stressful time, and the final result exceeded our expectations.",
    rating: 5,
    property: 'North Las Vegas Family Home',
    salePrice: '$380,000',
    marketValue: '$320,000',
    timeline: '60 days',
    location: 'North Las Vegas, NV',
  },
  {
    id: 4,
    datePublished: '2024-11-08',
    name: 'The Williams Family',
    role: 'Boulder City Estate',
    emotionalSituation:
      "Our father's estate had multiple properties across different counties, and we were concerned about the complexity.",
    specificAction:
      'Dr. Duffy managed the sale of three properties simultaneously, coordinating with multiple courts and attorneys.',
    specificResult:
      'All three properties sold within 90 days, totaling $1.2M in sales with an average of 18% above initial valuations.',
    emotionalOutcome:
      "Dr. Duffy's expertise in multi-property estates saved us months of stress and maximized our inheritance.",
    rating: 5,
    property: 'Multi-Property Estate',
    salePrice: '$1.2M',
    marketValue: '$1.02M',
    timeline: '90 days',
    location: 'Boulder City, Henderson, Las Vegas',
  },
  {
    id: 5,
    datePublished: '2024-10-22',
    name: 'Sarah Mitchell',
    role: 'Las Vegas Downtown Property',
    emotionalSituation:
      "I was living out of state and needed to sell my grandmother's property in Las Vegas. I couldn't travel frequently and was worried about the process.",
    specificAction:
      'Dr. Duffy handled everything remotely, providing regular updates and coordinating all necessary inspections and showings.',
    specificResult:
      "The property sold for $285,000, closing smoothly even though I couldn't be present for most of the process.",
    emotionalOutcome:
      'Dr. Duffy made a difficult long-distance situation manageable and stress-free.',
    rating: 5,
    property: 'Las Vegas Downtown Condo',
    salePrice: '$285,000',
    marketValue: '$270,000',
    timeline: '35 days',
    location: 'Las Vegas, NV',
  },
  {
    id: 6,
    datePublished: '2024-09-12',
    name: 'Michael Chen',
    role: 'Enterprise Area Estate',
    emotionalSituation:
      "My father's estate was complicated with several creditors and disputes among beneficiaries.",
    specificAction:
      'Dr. Duffy worked closely with our probate attorney, navigating creditor claims and ensuring all legal requirements were met.',
    specificResult:
      'The property sold for $520,000, and Dr. Duffy ensured all creditor claims were properly addressed before distribution.',
    emotionalOutcome:
      "Her legal knowledge and attention to detail prevented potential issues and protected all beneficiaries' interests.",
    rating: 5,
    property: 'Enterprise Family Home',
    salePrice: '$520,000',
    marketValue: '$500,000',
    timeline: '55 days',
    location: 'Enterprise, NV',
  },
];

export default function TestimonialsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Testimonials', url: '/testimonials/' },
  ];

  const testimonialsReviewLd = buildLocalBusinessNestedReviewsStructuredData(
    testimonials.map((t) => ({
      author: t.name,
      reviewBody: `${t.emotionalSituation} ${t.specificAction} ${t.specificResult} ${t.emotionalOutcome}`,
      ratingValue: t.rating,
      datePublished: t.datePublished,
    }))
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema injection is safe
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialsReviewLd) }}
      />
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <PageHero
        title="Clients Trust Dr. Jan Duffy During Difficult Times"
        subtitle="Real stories from executors and heirs who used Dr. Duffy's probate real estate guidance in Las Vegas and Clark County."
        imageId="freeConsultation"
      />

      {/* Dr. Jan Duffy Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
                  Trusted by Hundreds of Families
                </h2>
                <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                  Dr. Jan Duffy's compassionate approach and proven expertise have helped countless
                  families navigate the complex probate process with confidence. Her dedication to
                  maximizing property value while minimizing stress has earned her the trust of Las
                  Vegas probate courts and families alike.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
                  <Link
                    href="/contact/"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors"
                  >
                    Get Your Free Consultation
                  </Link>
                  <a
                    href={SITE_PHONE_TEL_HREF}
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-700 text-primary-700 rounded-md font-medium hover:bg-primary-50 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call {SITE_PHONE_DISPLAY}
                  </a>
                  <a
                    href={GOOGLE_BUSINESS_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-amber-600 text-amber-800 bg-amber-50 rounded-md font-medium hover:bg-amber-100 transition-colors"
                  >
                    <Star className="h-5 w-5 mr-2 fill-amber-500 text-amber-500" aria-hidden />
                    Leave a Google review
                    <ExternalLink className="h-4 w-4 ml-2 opacity-70" aria-hidden />
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 overflow-hidden rounded-2xl border-4 border-primary-200 shadow-xl">
                    <Image
                      src="/images/dr-jan-duffy.jpg"
                      alt="Dr. Jan Duffy - Trusted Probate Real Estate Expert"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-3 shadow-lg border-2 border-primary-200">
                    <Award className="h-8 w-8 text-primary-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-lg relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className="h-8 w-8 text-primary-200" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={`star-${star}`} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Structure */}
                <div className="space-y-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">The Challenge:</h4>
                    <p className="text-red-700 text-sm leading-relaxed">
                      {testimonial.emotionalSituation}
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">Dr. Duffy's Solution:</h4>
                    <p className="text-blue-700 text-sm leading-relaxed">
                      {testimonial.specificAction}
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">The Result:</h4>
                    <p className="text-green-700 text-sm leading-relaxed">
                      {testimonial.specificResult}
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">The Outcome:</h4>
                    <p className="text-purple-700 text-sm leading-relaxed">
                      {testimonial.emotionalOutcome}
                    </p>
                  </div>
                </div>

                {/* Property Details */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-secondary-500">Property:</span>
                      <div className="font-semibold text-secondary-900">{testimonial.property}</div>
                    </div>
                    <div>
                      <span className="text-secondary-500">Location:</span>
                      <div className="font-semibold text-secondary-900">{testimonial.location}</div>
                    </div>
                    <div>
                      <span className="text-secondary-500">Sale Price:</span>
                      <div className="font-semibold text-primary-700">{testimonial.salePrice}</div>
                    </div>
                    <div>
                      <span className="text-secondary-500">Timeline:</span>
                      <div className="font-semibold text-green-600">{testimonial.timeline}</div>
                    </div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-700 font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">{testimonial.name}</div>
                    <div className="text-sm text-secondary-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & focus (no fabricated volume/satisfaction metrics) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
                Professional credentials &amp; local focus
              </h2>
              <p className="text-lg text-secondary-600">
                Licensed Nevada probate real estate guidance for Las Vegas and Clark County
                families.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-700 mb-2">Licensed Nevada</div>
                <div className="text-secondary-600 text-sm">
                  Real estate professional (S.0197614)
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-700 mb-2">Clark County</div>
                <div className="text-secondary-600 text-sm">Probate &amp; trust property sales</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-700 mb-2">20+</div>
                <div className="text-secondary-600 text-sm">Years of experience</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <a
                  href={GOOGLE_BUSINESS_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-primary-700 hover:text-primary-900 underline"
                >
                  Google reviews
                </a>
                <div className="text-secondary-600 text-sm mt-1">See feedback on Google</div>
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
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-secondary-600">
                Common questions about our probate real estate services
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

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Same Success?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join hundreds of families who have trusted Dr. Jan Duffy with their probate property
            sales. Get a free consultation to discuss your unique situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <a
              href={SITE_PHONE_TEL_HREF}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-md font-medium text-lg hover:bg-primary-700 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call {SITE_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
      <SchemaMarkup type="faq" breadcrumbs={breadcrumbs} />
    </main>
  );
}
