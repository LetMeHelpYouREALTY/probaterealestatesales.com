import {
  Award,
  Building,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Gavel,
  Heart,
  Home,
  MapPin,
  Shield,
  Star,
  Target,
} from 'lucide-react';
import RealScoutScriptLoader from '@/components/RealScoutScriptLoader';
import { GOOGLE_BUSINESS_REVIEW_URL } from '@/config/site-google';

// Reorganized services by priority and user journey
const services = [
  {
    icon: Home,
    title: 'Estate Property Valuation',
    description:
      'Get a comprehensive market analysis and court-compliant property appraisal to ensure maximum value for your inherited estate.',
    features: [
      'Free Market Analysis',
      'Court-Compliant Appraisals',
      'Detailed Comparative Reports',
      'Property Condition Assessment',
    ],
    timeline: '3-5 days',
    pricing: 'Free consultation',
    question: 'How Much Is My Inherited Property Worth?',
    specialNote: 'Includes neighborhood analysis and market trends',
    priority: 1,
  },
  {
    icon: Gavel,
    title: 'Probate Process Navigation',
    description:
      'Step-by-step guidance through court requirements with coordination of attorneys and executors.',
    features: [
      'Court Requirement Guidance',
      'Attorney Coordination',
      'Executor Support',
      'Timeline Management',
    ],
    timeline: 'Ongoing support',
    pricing: 'Included in service',
    question: 'How Long Will This Take?',
    specialNote: 'We handle all court communications and deadlines',
    priority: 2,
  },
  {
    icon: FileText,
    title: 'Legal Documentation',
    description:
      'Complete handling of all legal documents and probate court requirements with expert guidance.',
    features: [
      'Court Petition Preparation',
      'Required Disclosures',
      'Nevada Law Compliance',
      'Document Filing',
    ],
    timeline: '1-2 weeks',
    pricing: 'Court fees only',
    question: 'What Documents Do I Need?',
    specialNote: 'Death certificate, will, property deeds, court letters',
    priority: 3,
  },
  {
    icon: Shield,
    title: 'Legal Compliance & Risk Management',
    description:
      'Protect your interests with comprehensive compliance and risk assessment throughout the process.',
    features: [
      'Nevada Law Compliance',
      'Risk Assessment',
      'Insurance Review',
      'Liability Protection',
    ],
    timeline: '1-2 weeks',
    pricing: 'Included in service',
    question: 'How Long Will This Take?',
    specialNote: 'We ensure full compliance with all probate laws',
    priority: 4,
  },
  {
    icon: Building,
    title: 'Property Preparation & Sale',
    description:
      'Complete property preparation including estate clean-out, repairs, staging, and strategic marketing.',
    features: [
      'Estate Clean-out Coordination',
      'Property Repairs Management',
      'Professional Staging',
      'Strategic Marketing',
    ],
    timeline: '45 days',
    pricing: 'Standard commission',
    question: 'How Long Will This Take?',
    specialNote: 'Pricing strategy aligned with current market conditions',
    priority: 5,
  },
  {
    icon: Target,
    title: 'Market Optimization & Buyer Outreach',
    description:
      'Strategic marketing approach to qualified buyers with proven negotiation support.',
    features: [
      'Qualified Buyer Outreach',
      'Marketing Strategy',
      'Negotiation Support',
      'Closing Coordination',
    ],
    timeline: '30-45 days',
    pricing: 'Standard commission',
    question: 'How Long Will This Take?',
    specialNote: 'Ongoing communication through listing and closing',
    priority: 6,
  },
  {
    icon: MapPin,
    title: 'Neighborhood & Market Analysis',
    description:
      'Comprehensive analysis of local market conditions and neighborhood trends for optimal pricing.',
    features: [
      'Local Market Trends',
      'Neighborhood Analysis',
      'Comparable Sales',
      'Price Optimization',
    ],
    timeline: '2-3 days',
    pricing: 'Free analysis',
    question: 'How Much Is My Inherited Property Worth?',
    specialNote: 'Includes Summerlin, Henderson, and all Clark County areas',
    priority: 7,
  },
  {
    icon: Heart,
    title: 'Heir Coordination',
    description: 'Clear communication among co-owners and executors during court-supervised sales.',
    features: [
      'Co-owner coordination',
      'Executor briefings',
      'Clear Communication',
      'Heir Coordination',
    ],
    timeline: 'Ongoing support',
    pricing: 'Included in service',
    question: 'How Long Will This Take?',
    specialNote: 'We keep co-owners and executors on the same timeline',
    priority: 8,
  },
];

export default function Services() {
  // Sort services by priority
  const sortedServices = [...services].sort((a, b) => a.priority - b.priority);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="h-4 w-4" />
            Dr. Jan Duffy's Probate Real Estate Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Comprehensive Probate Services
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Dr. Jan Duffy provides end-to-end solutions for executors navigating the complex process
            of probate real estate with clear guidance, expertise, and maximum value for the estate.
          </p>
        </div>

        {/* Core Services Grid - Reorganized by Priority */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Our Step-by-Step Process
            </h3>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              We guide you through every stage of the probate process with proven expertise and
              personalized care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <div
                key={service.title}
                className="card p-8 hover:scale-105 transition-transform duration-300 group border-l-4 border-l-primary-500 relative"
              >
                {/* Priority Badge */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary-700" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-secondary-900 mb-4">{service.title}</h3>

                <p className="text-secondary-600 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={`${service.title}-${feature}`}
                      className="flex items-center gap-3 text-sm text-secondary-600"
                    >
                      <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Question-based subheadings */}
                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-secondary-600">
                    <Clock className="h-4 w-4 text-primary-500" />
                    <span className="font-medium">{service.question}</span>
                    <span className="text-primary-700 font-semibold">{service.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-secondary-600">
                    <DollarSign className="h-4 w-4 text-primary-500" />
                    <span className="font-medium">What Does This Cost?</span>
                    <span className="text-primary-700 font-semibold">{service.pricing}</span>
                  </div>
                </div>

                {/* Special notes */}
                {service.specialNote && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-xs text-blue-700 font-medium">{service.specialNote}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust & Credibility Section */}
        <div className="mb-20 bg-gradient-to-r from-gray-50 to-primary-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Why Choose Dr. Jan Duffy?
            </h3>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Court-focused probate real estate guidance in Las Vegas and Clark County—Dr. Duffy is
              your partner for inherited-property sales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-700" />
              </div>
              <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                Court-Approved Expert
              </h4>
              <p className="text-secondary-600 text-sm">
                Recognized by Nevada courts for probate expertise
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent-600" />
              </div>
              <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                Probate sales experience
              </h4>
              <p className="text-secondary-600 text-sm">
                Focused guidance through court-approved and inherited-property sales
              </p>
            </div>
            <a
              href={GOOGLE_BUSINESS_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center block rounded-lg p-2 -m-2 hover:bg-primary-50/80 transition-colors focus-ring"
              aria-label="Read Google reviews for Probate Real Estate Sales"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-700" />
              </div>
              <h4 className="text-lg font-semibold text-secondary-900 mb-2">Google reviews</h4>
              <p className="text-secondary-600 text-sm">See feedback on Google</p>
            </a>
          </div>
        </div>

        {/* Property Listings Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Current Las Vegas Properties
            </h3>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Browse our current inventory of properties available in the Las Vegas area. These
              properties are available for immediate purchase with our expert guidance.
            </p>
          </div>

          <RealScoutScriptLoader>
            {/* Affordable Properties */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h4 className="text-xl md:text-2xl font-bold text-secondary-900 mb-3">
                  Affordable Las Vegas Properties
                </h4>
                <p className="text-secondary-600 max-w-2xl mx-auto">
                  Discover quality properties in the $500K-$750K range. Perfect for investors and
                  families looking for value in the Las Vegas market.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <realscout-office-listings
                  agent-encoded-id="QWdlbnQtMjI1MDUw"
                  sort-order="PRICE_LOW"
                  listing-status="For Sale,For Rent"
                  property-types="MF,SFR,OTHER,LAL"
                  price-min="500000"
                  price-max="750000"
                ></realscout-office-listings>
              </div>
            </div>

            {/* Premium Properties */}
            <div className="mb-8">
              <div className="text-center mb-8">
                <h4 className="text-xl md:text-2xl font-bold text-secondary-900 mb-3">
                  Premium Las Vegas Properties
                </h4>
                <p className="text-secondary-600 max-w-2xl mx-auto">
                  Browse our current inventory of premium properties in the Las Vegas area. These
                  properties are available for immediate purchase with our expert guidance.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <realscout-office-listings
                  agent-encoded-id="QWdlbnQtMjI1MDUw"
                  sort-order="PRICE_HIGH"
                  listing-status="For Sale"
                  property-types="MF,SFR,OTHER,LAL"
                  price-min="500000"
                  price-max="850000"
                ></realscout-office-listings>
              </div>
            </div>
          </RealScoutScriptLoader>
        </div>

        {/* Final CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border border-primary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Ready to Get Started with Dr. Jan Duffy?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your specific probate situation and learn how
              Dr. Duffy can help maximize the value of your inherited property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://drjanduffy.realscout.com/onboarding"
                className="btn-primary inline-block"
              >
                Schedule Free Consultation
              </a>
              <a href="/resources/nevada-probate-guide/" className="btn-outline inline-block">
                Download Free Probate Guide
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
              <a href="/locations/" className="text-primary-700 hover:text-primary-900 font-medium">
                Our Service Areas →
              </a>
              <a href="/blog/" className="text-primary-700 hover:text-primary-900 font-medium">
                Educational Resources →
              </a>
              <a
                href="/testimonials/"
                className="text-primary-700 hover:text-primary-900 font-medium"
              >
                Client Success Stories →
              </a>
              <a href="/contact/" className="text-primary-700 hover:text-primary-900 font-medium">
                Contact Us →
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-secondary-600">
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary-700" />
                Court-Approved Expert
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent-600" />
                Probate sales experience
              </span>
              <a
                href={GOOGLE_BUSINESS_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-700 hover:text-primary-900 font-medium"
              >
                <Heart className="h-4 w-4 text-green-700" />
                Google reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
