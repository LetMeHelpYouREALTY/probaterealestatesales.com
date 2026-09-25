import { Heart, Quote, Star } from 'lucide-react';
import SiteImage from '@/components/SiteImage';
import { GOOGLE_BUSINESS_REVIEW_URL } from '@/config/site-google';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const testimonials = [
  {
    id: 1,
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
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="h-4 w-4" />
            Client Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Executors Trust Dr. Jan Duffy During Difficult Times
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Real stories from executors and heirs who used Dr. Duffy's probate real estate guidance
            in Las Vegas and Clark County.
          </p>
        </div>

        {/* Dr. Jan Duffy Photo & Trust Building */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft border border-secondary-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
                  Trusted by executors and heirs
                </h3>
                <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                  Dr. Jan Duffy's approach and proven expertise have helped executors and heirs
                  navigate the complex probate process with confidence. Her dedication to maximizing
                  property value while minimizing stress has earned her the trust of Las Vegas
                  probate courts and clients alike.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="https://drjanduffy.realscout.com/onboarding"
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    Get Your Free Consultation
                  </a>
                  <a
                    href={SITE_PHONE_TEL_HREF}
                    className="btn-outline inline-flex items-center justify-center"
                  >
                    Call {SITE_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-56 h-56 overflow-hidden rounded-2xl border-4 border-primary-200 shadow-xl">
                    <SiteImage
                      imageId="agentPortrait"
                      alt="Dr. Jan Duffy, Las Vegas probate realtor"
                      width={224}
                      height={224}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-2 shadow-lg border-2 border-accent-200">
                    <Heart className="h-6 w-6 text-accent-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card p-8 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-primary-200" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={`star-${star}`} className="h-5 w-5 text-accent-500 fill-current" />
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
              <div className="bg-secondary-50 rounded-lg p-4 mb-6">
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
                    <div className="font-semibold text-accent-600">{testimonial.timeline}</div>
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

        {/* Credentials & focus (no fabricated volume/satisfaction metrics) */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Professional credentials &amp; local focus
            </h3>
            <p className="text-lg text-secondary-600">
              Licensed Nevada probate real estate guidance for Las Vegas and Clark County families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-700 mb-2">Licensed Nevada</div>
              <div className="text-secondary-600 text-sm">Real estate professional (S.0197614)</div>
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

        {/* Video Testimonials CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border border-primary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              See More Success Stories
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Watch video testimonials from clients who have worked with Dr. Duffy and see the
              difference expert probate guidance makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#video-testimonials" className="btn-primary inline-block">
                Watch Video Testimonials
              </a>
              <a
                href="https://drjanduffy.realscout.com/onboarding"
                className="btn-outline inline-block"
              >
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
