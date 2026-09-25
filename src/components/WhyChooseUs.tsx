import {
  Award,
  Building,
  CheckCircle,
  Clock,
  Gavel,
  GraduationCap,
  Heart,
  Shield,
  Star,
  TrendingUp,
  Trophy,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import SectionVisual from '@/components/SectionVisual';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const reasons = [
  {
    icon: Award,
    title: 'Proven Track Record',
    description:
      'Over 20 years of experience in probate real estate with a strong focus on successful closings.',
    stat: '20+',
    detail: 'Years in real estate',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Average time from listing to closing is 45 days, well below market average.',
    stat: '45 days',
    detail: 'Average Sale Time',
  },
  {
    icon: Heart,
    title: 'Compassionate Service',
    description: 'We understand this is a difficult time and provide caring, sensitive support.',
    stat: '100%',
    detail: 'Executor support',
  },
  {
    icon: Shield,
    title: 'Legal Expertise',
    description: 'Full legal compliance and documentation handling to protect your interests.',
    stat: '20+ years',
    detail: 'Legal Experience',
  },
  {
    icon: Users,
    title: 'Executor Support',
    description: 'Dedicated guidance for executors and heirs through court-supervised sales.',
    stat: '200+',
    detail: 'Clark County estates',
  },
  {
    icon: TrendingUp,
    title: 'Maximum Value',
    description: 'Our properties consistently sell above market value through strategic marketing.',
    stat: '+15%',
    detail: 'Above Initial Value',
  },
];

const credentials = [
  {
    icon: GraduationCap,
    title: 'Ph.D.',
    subtitle: 'Research',
    description: 'Academic expertise in research methodology and analysis',
    color: 'text-blue-700',
    bgColor: 'bg-blue-100',
  },
  {
    icon: Award,
    title: '9 Exceptions to Probate Expert',
    subtitle: 'Specialized Knowledge',
    description:
      'Expert in inventory, appraisal, orders, title, sales, authority, documents, taxes, transfers, and marketing techniques',
    color: 'text-primary-700',
    bgColor: 'bg-primary-100',
  },
  {
    icon: Gavel,
    title: 'Nevada Real Estate License',
    subtitle: 'Active since 2003',
    description: 'Licensed real estate professional in Nevada for over 20 years',
    color: 'text-green-700',
    bgColor: 'bg-green-100',
  },
  {
    icon: Building,
    title: 'Expert in 9 Exceptions to Probate',
    subtitle: 'Approved Expert Witness',
    description:
      'Specialized knowledge in inventory, appraisal, orders, title, sales, authority, documents, taxes, transfers, and marketing techniques',
    color: 'text-purple-700',
    bgColor: 'bg-purple-100',
  },
];

const professionalAffiliations = [
  'Las Vegas Probate Court - Preferred Realtor List',
  'Nevada State Bar Association - Probate Section Partner',
  'Estate Planning Council of Southern Nevada',
  'National Academy of Elder Law Attorneys - Allied Professional',
  'National Association of Realtors (NAR)',
  'Greater Las Vegas Association of Realtors (GLVAR)',
];

const awards = [
  {
    title: 'Probate Realtor of the Year',
    organization: 'Las Vegas Real Estate Awards 2024',
    icon: Trophy,
    color: 'text-yellow-600',
  },
  {
    title: 'Top 1% of Probate Specialists',
    organization: 'National Probate Network',
    icon: Star,
    color: 'text-accent-600',
  },
  {
    title: 'Excellence in Estate Services',
    organization: 'Nevada Association of Realtors',
    icon: Award,
    color: 'text-primary-700',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="h-4 w-4" />
            Why Choose Dr. Jan Duffy for Your Probate Sale?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Las Vegas's Premier Probate Real Estate Expert
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Dr. Jan Duffy combines academic excellence, professional certification, and proven
            results to deliver exceptional probate real estate services with compassion and
            expertise.
          </p>
          <div className="mt-8 max-w-4xl mx-auto">
            <SectionVisual imageId="consultationRoomSide" className="h-48 md:h-64" />
          </div>
        </div>

        {/* Dr. Jan Duffy Photo & Introduction */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border border-primary-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
                  Meet Dr. Jan Duffy
                </h3>
                <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                  With over 20 years of experience in Las Vegas real estate and specialized
                  expertise in probate sales, Dr. Duffy combines academic excellence with clear,
                  court-ready guidance for executors navigating complex probate sales with
                  confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href="https://drjanduffy.realscout.com/onboarding"
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    Schedule Free Consultation
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
                  <div className="w-64 h-64 overflow-hidden rounded-2xl border-4 border-primary-200 shadow-2xl">
                    <Image
                      src="/images/dr-jan-duffy.jpg"
                      alt="Dr. Jan Duffy - Professional Portrait"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg border-2 border-primary-200">
                    <Award className="h-8 w-8 text-primary-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Unique Qualifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Unique Qualifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential) => (
              <div key={credential.title} className="text-center group">
                <div className="mb-4">
                  <div
                    className={`w-20 h-20 ${credential.bgColor} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <credential.icon className={`h-10 w-10 ${credential.color}`} />
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                  {credential.title}
                </h4>

                <p className="text-sm font-medium text-primary-700 mb-3">{credential.subtitle}</p>

                <p className="text-secondary-600 text-sm leading-relaxed">
                  {credential.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Track Record */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Proven Track Record
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div
                key={`reason-${reason.title.replace(/\s+/g, '-').toLowerCase()}`}
                className="text-center group"
              >
                <div className="mb-6">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary-200 transition-colors duration-300">
                    <reason.icon className="h-10 w-10 text-primary-700" />
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary-700 block">{reason.stat}</span>
                  <span className="text-sm text-secondary-500">{reason.detail}</span>
                </div>

                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{reason.title}</h3>

                <p className="text-secondary-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-2">Licensed Nevada</div>
              <div className="text-white/95 text-sm md:text-base">
                Real estate professional (S.0197614)
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
              <div className="text-white">Years of Experience</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-2">Clark County</div>
              <div className="text-white/95 text-sm md:text-base">
                Probate &amp; trust property focus
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-2">Ph.D.</div>
              <div className="text-white/95 text-sm md:text-base">Research-backed guidance</div>
            </div>
          </div>
        </div>

        {/* Professional Affiliations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Professional Affiliations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {professionalAffiliations.map((affiliation) => (
              <div
                key={`affiliation-${affiliation.substring(0, 20).replace(/\s+/g, '-').toLowerCase()}`}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="h-5 w-5 text-green-700 flex-shrink-0" />
                <span className="text-secondary-700 text-sm">{affiliation}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award) => (
              <div
                key={award.title}
                className="text-center p-6 bg-gradient-to-br from-accent-50 to-white rounded-xl border border-accent-200"
              >
                <div className="mb-4">
                  <award.icon className={`h-12 w-12 ${award.color} mx-auto`} />
                </div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">{award.title}</h4>
                <p className="text-secondary-600 text-sm">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-secondary-900 mb-8">
            Trusted by Las Vegas Probate Courts
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-secondary-400">Clark County Probate Court</div>
            <div className="text-2xl font-bold text-secondary-400">Nevada State Bar</div>
            <div className="text-2xl font-bold text-secondary-400">NAR</div>
            <div className="text-2xl font-bold text-secondary-400">GLVAR</div>
            <div className="text-2xl font-bold text-secondary-400">BBB A+</div>
          </div>
        </div>
      </div>
    </section>
  );
}
