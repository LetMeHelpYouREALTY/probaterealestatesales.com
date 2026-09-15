import { ArrowRight, BookOpen, Calendar, TrendingUp, Video } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SchemaMarkup from '@/components/SchemaMarkup';
import SiteImage from '@/components/SiteImage';

export const metadata: Metadata = {
  title: 'Probate Properties Blog | Las Vegas Probate Real Estate News & Market Updates',
  description:
    'Stay informed about probate properties in Las Vegas. Read expert blog posts on probate homes, watch probate videos, and get the latest market updates from Dr. Jan Duffy. Free resources for probate property buyers and sellers.',
  keywords:
    'probate properties, probate homes, probate real estate blog, probate videos, Las Vegas probate properties, probate news, estate sales information, probate property listings',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/blog/',
  },
  openGraph: {
    title: 'Probate Properties Blog | Las Vegas Probate Real Estate News & Market Updates',
    description:
      'Stay informed about probate properties in Las Vegas. Read expert blog posts on probate homes, watch probate videos, and get the latest market updates.',
    type: 'website',
    url: 'https://www.probaterealestatesales.com/blog/',
  },
};

export default function BlogPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog/' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <PageHero
        title="Probate Real Estate Blog & Resources"
        subtitle="Stay informed with Las Vegas probate real estate news, market updates, and educational videos."
        imageId="resourcesGuides"
      />

      {/* Blog Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Link href="/blog/probate-videos/" className="group">
              <div className="overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-lg transition-shadow">
                <div className="relative h-36">
                  <SiteImage
                    imageId="probateVideos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <Video className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-900">
                    Probate Videos
                  </h3>
                  <p className="text-secondary-600">
                    Watch educational videos about probate real estate processes, timelines, and
                    best practices.
                  </p>
                  <div className="mt-4 flex items-center text-primary-700 font-medium">
                    Watch Videos
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/blog/market-updates/" className="group">
              <div className="overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-lg transition-shadow">
                <div className="relative h-36">
                  <SiteImage
                    imageId="listingsHero"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-900">
                    Market Updates
                  </h3>
                  <p className="text-secondary-600">
                    Get the latest Las Vegas real estate market trends and probate property
                    insights.
                  </p>
                  <div className="mt-4 flex items-center text-primary-700 font-medium">
                    Read Updates
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/resources/" className="group">
              <div className="overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-violet-100 hover:shadow-lg transition-shadow">
                <div className="relative h-36">
                  <SiteImage
                    imageId="resourcesGuides"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <BookOpen className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-2 group-hover:text-primary-900">
                    Resources & Guides
                  </h3>
                  <p className="text-secondary-600">
                    Comprehensive guides on Nevada probate laws, timelines, costs, and procedures.
                  </p>
                  <div className="mt-4 flex items-center text-primary-700 font-medium">
                    View Resources
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <SiteImage
                  imageId="probateTimeline"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-secondary-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>November 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  Understanding Nevada Probate Timeline
                </h3>
                <p className="text-secondary-600 mb-4">
                  Learn about Nevada's 6-8 month probate process and how it compares to other
                  states.
                </p>
                <Link
                  href="/blog/nevada-probate-timeline/"
                  className="text-primary-700 hover:text-primary-900 font-medium flex items-center"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <SiteImage
                  imageId="certificateOfIncumbency"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-secondary-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>October 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  Certificate of Incumbency Guide
                </h3>
                <p className="text-secondary-600 mb-4">
                  Everything you need to know about Nevada's certificate of incumbency for trusts.
                </p>
                <Link
                  href="/blog/certificate-of-incumbency/"
                  className="text-primary-700 hover:text-primary-900 font-medium flex items-center"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <SiteImage
                  imageId="courthouse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-secondary-500 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>September 2024</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  Clark County Probate Court Procedures
                </h3>
                <p className="text-secondary-600 mb-4">
                  Step-by-step guide to navigating Clark County probate court for property sales.
                </p>
                <Link
                  href="/blog/clark-county-probate/"
                  className="text-primary-700 hover:text-primary-900 font-medium flex items-center"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions About Probate Real Estate?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our probate real estate experts today.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors"
          >
            Get Free Consultation
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
      <SchemaMarkup type="breadcrumb" breadcrumbs={breadcrumbs} />
    </main>
  );
}
