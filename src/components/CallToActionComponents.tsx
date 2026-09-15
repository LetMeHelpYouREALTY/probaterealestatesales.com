import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  Heart,
  Phone,
  Shield,
  Star,
  Users,
} from 'lucide-react';
import { SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const primaryCTA = {
  headline: 'Need Help With a Probate Property?',
  subheadline:
    'Dr. Jan Duffy provides compassionate, expert guidance through the entire probate process',
  primaryButton: {
    text: 'Schedule Free Consultation',
    subtext: 'Speak directly with Dr. Duffy',
    href: 'https://drjanduffy.realscout.com/onboarding',
    icon: Calendar,
  },
  secondaryButton: {
    text: 'Download Probate Guide',
    subtext: 'Get your free 20-page guide',
    href: '/resources/nevada-probate-guide',
    icon: Download,
  },
  trustIndicators: [
    { icon: Shield, text: 'Court-Approved Expert' },
    { icon: Star, text: 'Las Vegas probate focus' },
    { icon: CheckCircle, text: 'Client-centered service' },
  ],
  urgency: {
    icon: '⚡',
    title: 'Probate deadlines are strict',
    message: "Don't delay - get expert help today",
  },
};

const serviceCTAs = [
  {
    title: 'Property Valuation',
    description: 'Get an accurate market analysis of your inherited property',
    buttonText: 'Free Valuation',
    href: 'https://drjanduffy.realscout.com/onboarding',
    icon: Shield,
    color: 'primary',
  },
  {
    title: 'Probate Consultation',
    description: 'Speak with Dr. Duffy about your specific situation',
    buttonText: 'Schedule Call',
    href: 'https://drjanduffy.realscout.com/onboarding',
    icon: Phone,
    color: 'accent',
  },
  {
    title: 'Legal Guidance',
    description: 'Understand court requirements and documentation needs',
    buttonText: 'Get Guide',
    href: '/resources/nevada-probate-guide',
    icon: Download,
    color: 'green',
  },
];

const urgencyCTAs = [
  {
    type: 'Immediate',
    title: 'Probate Deadline Approaching?',
    message: 'Court deadlines are strict and cannot be extended',
    urgency: 'High',
    buttonText: 'Emergency Consultation',
    href: SITE_PHONE_TEL_HREF,
    icon: Clock,
    color: 'red',
  },
  {
    type: 'Timeline',
    title: 'Want to Sell in 45 Days?',
    message: "Dr. Duffy's average timeline vs. 90-day market average",
    urgency: 'Medium',
    buttonText: 'Fast-Track Service',
    href: 'https://drjanduffy.realscout.com/onboarding',
    icon: ArrowRight,
    color: 'accent',
  },
  {
    type: 'Value',
    title: 'Maximize Your Estate Value',
    message: 'Market analysis and pricing strategy for inherited property',
    urgency: 'Medium',
    buttonText: 'Value Assessment',
    href: 'https://drjanduffy.realscout.com/onboarding',
    icon: Star,
    color: 'green',
  },
];

const testimonialCTAs = [
  {
    quote: 'Dr. Duffy sold our inherited property for $50,000 over asking price',
    author: 'The Anderson Family',
    location: 'Summerlin Estate',
    buttonText: 'Read Success Story',
    href: '/testimonials',
    icon: Heart,
  },
  {
    quote: 'She completed the entire process in just 45 days',
    author: 'Robert Martinez',
    location: 'Henderson Property',
    buttonText: 'See Timeline',
    href: '/resources/nevada-probate-guide#timeline',
    icon: Clock,
  },
];

export default function CallToActionComponents() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ArrowRight className="h-4 w-4" />
            Call-to-Action Components
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Compelling CTAs Throughout the Site
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Strategic call-to-action components designed to convert visitors into qualified probate
            consultations with Dr. Jan Duffy.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">{primaryCTA.headline}</h3>
              <p className="text-xl text-white max-w-2xl mx-auto">{primaryCTA.subheadline}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={primaryCTA.primaryButton.href}
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 group"
              >
                <primaryCTA.primaryButton.icon className="h-5 w-5" />
                {primaryCTA.primaryButton.text}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={primaryCTA.secondaryButton.href}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-colors inline-flex items-center justify-center gap-2 group"
              >
                <primaryCTA.secondaryButton.icon className="h-5 w-5" />
                {primaryCTA.secondaryButton.text}
              </a>
            </div>

            <div className="flex flex-wrap gap-6 justify-center mb-6">
              {primaryCTA.trustIndicators.map((indicator) => (
                <span key={indicator.text} className="flex items-center gap-2 text-white">
                  <indicator.icon className="h-5 w-5" />
                  {indicator.text}
                </span>
              ))}
            </div>

            <div className="bg-primary-700 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">{primaryCTA.urgency.icon}</span>
                <div>
                  <p className="font-semibold text-white">{primaryCTA.urgency.title}</p>
                  <p className="text-white text-sm">{primaryCTA.urgency.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service CTAs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Service-Specific CTAs
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {serviceCTAs.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-soft p-6 border border-gray-100 text-center"
              >
                <div
                  className={`w-16 h-16 bg-${service.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                </div>

                <h4 className="text-lg font-semibold text-secondary-900 mb-2">{service.title}</h4>

                <p className="text-secondary-600 text-sm mb-4">{service.description}</p>

                <a
                  href={service.href}
                  className={`bg-${service.color}-600 hover:bg-${service.color}-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2 group`}
                >
                  {service.buttonText}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Urgency CTAs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Urgency-Based CTAs
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {urgencyCTAs.map((cta) => (
              <div
                key={cta.type}
                className={`bg-${cta.color}-50 border border-${cta.color}-200 rounded-xl p-6 text-center`}
              >
                <div
                  className={`w-16 h-16 bg-${cta.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <cta.icon className={`h-8 w-8 text-${cta.color}-600`} />
                </div>

                <div
                  className={`inline-block bg-${cta.color}-100 text-${cta.color}-700 text-xs font-semibold px-3 py-1 rounded-full mb-3`}
                >
                  {cta.urgency} Urgency
                </div>

                <h4 className="text-lg font-semibold text-secondary-900 mb-2">{cta.title}</h4>

                <p className="text-secondary-600 text-sm mb-4">{cta.message}</p>

                <a
                  href={cta.href}
                  className={`bg-${cta.color}-600 hover:bg-${cta.color}-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2 group`}
                >
                  {cta.buttonText}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial CTAs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Social Proof CTAs
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonialCTAs.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white rounded-xl shadow-soft p-6 border border-gray-100"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-accent-100 rounded-full mt-1">
                    <testimonial.icon className="h-5 w-5 text-accent-600" />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-secondary-700 mb-3 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-sm text-secondary-600">
                      <span className="font-semibold">{testimonial.author}</span>
                      <span className="text-secondary-500"> • {testimonial.location}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={testimonial.href}
                  className="text-primary-700 hover:text-primary-900 font-medium inline-flex items-center gap-2 group"
                >
                  {testimonial.buttonText}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Best Practices */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            CTA Best Practices
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-8 w-8 text-primary-700" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Clear Action</h4>
              <p className="text-sm text-secondary-600">Use specific, action-oriented language</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Urgency</h4>
              <p className="text-sm text-secondary-600">Create time-sensitive motivation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Trust Signals</h4>
              <p className="text-sm text-secondary-600">Include credibility indicators</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Value First</h4>
              <p className="text-sm text-secondary-600">Offer immediate value before asking</p>
            </div>
          </div>
        </div>

        {/* Implementation CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border border-primary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Ready to Implement High-Converting CTAs?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Use these proven call-to-action components to convert more visitors into qualified
              probate consultations with Dr. Jan Duffy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://drjanduffy.realscout.com/onboarding"
                className="btn-primary inline-block"
              >
                Start Converting Visitors
              </a>
              <a href="/resources/nevada-probate-guide/" className="btn-outline inline-block">
                Download Free Guide
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-secondary-600">
              <span className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4 text-primary-700" />
                Action-Oriented
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent-600" />
                Urgency-Driven
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                Trust-Building
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
