import {
  AlertTriangle,
  ArrowRight,
  Award,
  BookOpen,
  Clock,
  Download,
  FileText,
  Gavel,
  Play,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import SectionVisual from '@/components/SectionVisual';
import SiteImage from '@/components/SiteImage';
import type { SiteImageId } from '@/lib/cloudflare-images';

const essentialGuides = [
  {
    title: 'Las Vegas courts, self-help & Legal Aid (directory)',
    description:
      'Civil Law Self-Help Center, Regional Justice Center, Family Courts, and Legal Aid Center of Southern Nevada—addresses and phones',
    icon: Gavel,
    duration: 'Quick reference',
    category: 'Clark County',
    link: '/resources/las-vegas-probate-legal-resources/',
    imageId: 'courthouse' as SiteImageId,
  },
  {
    title: "Understanding Nevada Probate Laws: A Homeowner's Guide",
    description: "Dr. Duffy's comprehensive guide to Nevada probate laws and procedures",
    icon: BookOpen,
    duration: '15 min read',
    category: 'Legal Guide',
    link: '/resources/nevada-probate-guide/',
    imageId: 'resourcesGuides' as SiteImageId,
  },
  {
    title: 'Timeline: What to Expect When Selling Probate Property',
    description:
      'Step-by-step timeline from filing to closing, based on field experience with Nevada probate sales',
    icon: Clock,
    duration: '10 min read',
    category: 'Timeline',
    link: '/resources/nevada-probate-guide/#timeline',
    imageId: 'probateTimeline' as SiteImageId,
  },
  {
    title: '5 Common Probate Sale Mistakes and How to Avoid Them',
    description: "Learn from Dr. Duffy's experience with common pitfalls and solutions",
    icon: AlertTriangle,
    duration: '12 min read',
    category: 'Tips & Advice',
    link: '/resources/nevada-probate-guide/#process',
    imageId: 'courtApprovedSales' as SiteImageId,
  },
  {
    title: "Maximizing Estate Value: Dr. Duffy's Proven Strategies",
    description: 'Strategies to align pricing and marketing with current market conditions',
    icon: TrendingUp,
    duration: '18 min read',
    category: 'Value Strategy',
    link: '/resources/nevada-probate-guide/#advantages',
    imageId: 'propertyValuation' as SiteImageId,
  },
];

const faqItems = [
  {
    question: 'What is probate real estate?',
    answer:
      'Probate real estate refers to property that must go through court-supervised distribution after someone passes away. Dr. Duffy specializes in navigating this complex process.',
    category: 'Basics',
  },
  {
    question: 'How long does a probate sale take in Las Vegas?',
    answer:
      "Nevada's efficient probate process often runs about 6-8 months, typically faster than many California matters (often 9-18 months). Listing-to-closing timing varies by property and court schedule.",
    category: 'Timeline',
  },
  {
    question: 'Can you sell a house before probate is complete?',
    answer:
      'No, you must obtain letters testamentary or administration from the court first. Dr. Duffy guides you through this process step-by-step.',
    category: 'Process',
  },
  {
    question: 'What repairs are required for probate properties?',
    answer:
      'Dr. Duffy assesses each property individually and coordinates necessary repairs to maximize value while staying within budget constraints.',
    category: 'Property',
  },
  {
    question: 'How is probate property priced?',
    answer:
      'Dr. Duffy uses comprehensive market analysis, comparable sales, and property condition assessment to ensure optimal pricing for maximum estate value.',
    category: 'Pricing',
  },
  {
    question: 'What are the court requirements for selling?',
    answer:
      'Nevada requires about 30 documents. Dr. Duffy handles all court filings and ensures full compliance with Nevada Revised Statutes.',
    category: 'Legal',
  },
];

const videoContent = [
  {
    title: 'Dr. Jan Duffy Explains the Probate Process',
    description: '3-minute overview of Nevada probate real estate',
    duration: '3:15',
    imageId: 'probateVideos' as SiteImageId,
    link: '/blog/probate-videos/',
  },
  {
    title: 'Client Success Story: Summerlin Estate',
    description: 'How Dr. Duffy sold a $750K property in 30 days',
    duration: '2:45',
    imageId: 'summerlinHomes' as SiteImageId,
    link: '/blog/probate-videos/',
  },
  {
    title: 'Virtual Probate Consultation Walkthrough',
    description: 'See what to expect in your free consultation',
    duration: '4:20',
    imageId: 'freeConsultation' as SiteImageId,
    link: '/blog/probate-videos/',
  },
];

const downloadableResources = [
  {
    title: 'Probate Property Checklist (PDF)',
    description: 'Complete checklist of required documents and steps',
    icon: FileText,
    size: '2.3 MB',
    downloads: '1,247',
    imageId: 'propertyChecklist' as SiteImageId,
    link: '/resources/#property-checklist',
  },
  {
    title: 'Nevada Probate Timeline (Infographic)',
    description: 'Visual timeline of the 6-8 month process',
    icon: Clock,
    size: '1.8 MB',
    downloads: '892',
    imageId: 'probateTimeline' as SiteImageId,
    link: '/resources/#probate-timeline',
  },
  {
    title: "Executor's Guide to Property Sales (eBook)",
    description: 'Comprehensive guide for estate executors',
    icon: BookOpen,
    size: '5.1 MB',
    downloads: '634',
    imageId: 'downloadableGuides' as SiteImageId,
    link: '/resources/nevada-probate-guide/',
  },
];

export default function EducationalContentHub() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="h-4 w-4" />
            Educational Resource Center
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Probate Real Estate Resource Center by Dr. Jan Duffy
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Access Dr. Duffy's expertise through comprehensive guides, videos, and downloadable
            resources designed to help you navigate probate real estate with confidence.
          </p>
          <div className="mt-8 max-w-4xl mx-auto">
            <SectionVisual imageId="resourcesGuides" className="h-48 md:h-64" />
          </div>
        </div>

        {/* Essential Guides */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Essential Guides by Dr. Jan Duffy
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {essentialGuides.map((guide) => (
              <div
                key={guide.title}
                className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative h-32">
                  <SiteImage
                    imageId={guide.imageId}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary-100 rounded-lg">
                      <guide.icon className="h-5 w-5 text-primary-700" />
                    </div>
                    <span className="text-xs font-medium text-primary-700 bg-primary-50 px-2 py-1 rounded-full">
                      {guide.category}
                    </span>
                  </div>

                  <h4 className="font-semibold text-secondary-900 mb-2 text-lg">{guide.title}</h4>

                  <p className="text-secondary-600 text-sm mb-4 leading-relaxed">
                    {guide.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-secondary-500 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {guide.duration}
                    </span>

                    <Link
                      href={guide.link}
                      className="text-primary-700 hover:text-primary-900 text-sm font-medium flex items-center gap-1 group"
                    >
                      Read Guide
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item) => (
              <div
                key={`faq-${item.question.substring(0, 20).replace(/\s+/g, '-').toLowerCase()}`}
                className="bg-white rounded-xl shadow-soft p-6 border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent-100 rounded-lg mt-1">
                    <span className="text-accent-600 font-bold text-sm">Q</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-secondary-900 mb-3">{item.question}</h4>
                    <p className="text-secondary-600 text-sm leading-relaxed">{item.answer}</p>
                    <span className="inline-block mt-3 text-xs text-primary-700 bg-primary-50 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Content */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Video Content by Dr. Jan Duffy
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {videoContent.map((video) => (
              <div
                key={video.title}
                className="bg-white rounded-xl shadow-soft overflow-hidden border border-gray-100"
              >
                <div className="aspect-video relative">
                  <SiteImage
                    imageId={video.imageId}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <Play className="h-16 w-16 text-white drop-shadow-lg absolute inset-0 m-auto" />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-semibold text-secondary-900 mb-2">{video.title}</h4>
                  <p className="text-secondary-600 text-sm mb-4">{video.description}</p>

                  <a
                    href={video.link}
                    className="text-primary-700 hover:text-primary-900 text-sm font-medium flex items-center gap-1 group"
                  >
                    Watch Video
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Downloadable Resources
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {downloadableResources.map((resource) => (
              <div
                key={resource.title}
                className="bg-white rounded-xl shadow-soft overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-32">
                  <SiteImage
                    imageId={resource.imageId}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-accent-100 rounded-lg">
                      <resource.icon className="h-6 w-6 text-accent-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900">{resource.title}</h4>
                      <p className="text-secondary-600 text-sm">{resource.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-secondary-500 mb-4">
                    <span>Size: {resource.size}</span>
                    <span>{resource.downloads} downloads</span>
                  </div>

                  <Link
                    href={resource.link}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Open resource
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border border-primary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Ready to Learn More from Dr. Jan Duffy?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Get personalized guidance and access to all educational resources with your free
              probate consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://drjanduffy.realscout.com/onboarding"
                className="btn-primary inline-block"
              >
                Schedule Free Consultation
              </a>
              <a href="/resources/nevada-probate-guide/" className="btn-outline inline-block">
                Read Complete Guide
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-secondary-600">
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary-700" />
                Expert Authored Content
              </span>
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 text-accent-600" />
                Based on probate field experience
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-green-600" />
                Trusted by executors
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
