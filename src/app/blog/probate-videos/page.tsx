import { ArrowLeft, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { FeaturedYouTubeVideo } from '@/components/FeaturedYouTubeVideo';
import PageHero from '@/components/PageHero';
import SchemaMarkup from '@/components/SchemaMarkup';
import SiteImage from '@/components/SiteImage';
import { YouTubeChannelEmbed } from '@/components/YouTubeChannelEmbed';
import { SITE_LOGO_ABSOLUTE_URL } from '@/config/site-google';
import {
  YOUTUBE_CHANNEL_HANDLE_URL,
  YOUTUBE_FEATURED_DESCRIPTION,
  YOUTUBE_FEATURED_EMBED_SRC,
  YOUTUBE_FEATURED_THUMB,
  YOUTUBE_FEATURED_TITLE,
  YOUTUBE_FEATURED_UPLOAD_DATE,
  YOUTUBE_FEATURED_WATCH_URL,
} from '@/config/youtube';
import { getSiteImageSrc } from '@/lib/cloudflare-images';
import { GBP_BUSINESS_NAME } from '@/lib/site-contact';

export const metadata: Metadata = {
  title: 'Probate Real Estate Videos | Educational Content | Las Vegas',
  description:
    'Watch a featured probate real estate video on this page, plus more uploads from the YouTube channel and topic outlines for Nevada probate.',
  keywords:
    'probate videos, probate real estate videos, Nevada probate education, probate process videos, estate sales videos',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/blog/probate-videos/',
  },
  openGraph: {
    title: 'Probate Real Estate Videos | Educational Content',
    description: 'Watch educational videos about probate real estate processes and best practices.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Probate Real Estate Sales',
    url: 'https://www.probaterealestatesales.com/blog/probate-videos/',
    images: [
      {
        url: getSiteImageSrc('probateVideos'),
        width: 1200,
        height: 675,
        alt: 'Probate real estate education desk with video lesson and Las Vegas listing packet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Probate Real Estate Videos | Las Vegas',
    description: 'Educational probate real estate videos and topics from Dr. Jan Duffy, Las Vegas.',
    images: [getSiteImageSrc('probateVideos')],
  },
};

export default function ProbateVideosPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog/' },
    { name: 'Probate Videos', url: '/blog/probate-videos/' },
  ];

  const pageUrl = 'https://www.probaterealestatesales.com/blog/probate-videos/';
  const videoObjectLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${pageUrl}#featured-video`,
    name: YOUTUBE_FEATURED_TITLE,
    description: YOUTUBE_FEATURED_DESCRIPTION,
    thumbnailUrl: YOUTUBE_FEATURED_THUMB,
    uploadDate: YOUTUBE_FEATURED_UPLOAD_DATE,
    contentUrl: YOUTUBE_FEATURED_WATCH_URL,
    embedUrl: YOUTUBE_FEATURED_EMBED_SRC,
    publisher: {
      '@type': 'Organization',
      name: GBP_BUSINESS_NAME,
      logo: {
        '@type': 'ImageObject',
        url: SITE_LOGO_ABSOLUTE_URL,
      },
    },
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD schema injection is safe
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectLd) }}
      />
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <PageHero
        title="Probate Real Estate Videos"
        subtitle="Watch the featured video on this page, then browse more uploads and topic outlines below."
        imageId="probateVideos"
      >
        <Link href="/blog/" className="inline-flex items-center text-white hover:text-white">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Blog
        </Link>
        <div className="mt-6">
          <a
            href={YOUTUBE_CHANNEL_HANDLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 rounded-md font-semibold hover:bg-blue-50 transition-colors"
            aria-label="Open Dr. Jan Duffy's YouTube channel in a new tab"
          >
            Watch on YouTube
            <ExternalLink className="h-5 w-5 shrink-0" aria-hidden />
          </a>
        </div>
      </PageHero>

      <FeaturedYouTubeVideo />

      <YouTubeChannelEmbed />

      {/* Topic outlines — add per-video pages with iframe + VideoObject when you want video rich results */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            Episodes are published on{' '}
            <a
              href={YOUTUBE_CHANNEL_HANDLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-700 font-medium underline hover:text-primary-900"
            >
              Dr. Jan Duffy&apos;s YouTube channel
            </a>
            . The cards below are topic outlines; full episodes are on YouTube.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
              <div className="aspect-video relative">
                <SiteImage
                  imageId="probateTimeline"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Topic
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Understanding Nevada Probate Timeline
                </h3>
                <p className="text-gray-400 text-sm">
                  Learn about Nevada's 6-8 month probate process and what to expect at each stage.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
              <div className="aspect-video relative">
                <SiteImage
                  imageId="certificateOfIncumbency"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Topic
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Certificate of Incumbency Explained
                </h3>
                <p className="text-gray-400 text-sm">
                  Complete guide to Nevada's certificate of incumbency for trust administration.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
              <div className="aspect-video relative">
                <SiteImage
                  imageId="courthouse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Topic
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Clark County Probate Court Procedures
                </h3>
                <p className="text-gray-400 text-sm">
                  Step-by-step walkthrough of Clark County probate court processes and requirements.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
              <div className="aspect-video relative">
                <SiteImage
                  imageId="propertyValuation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Topic
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Pricing Your Probate Property
                </h3>
                <p className="text-gray-400 text-sm">
                  Learn how to properly value and price inherited properties for sale.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
              <div className="aspect-video relative">
                <SiteImage
                  imageId="trustSales"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Topic
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Trust vs. Probate Administration
                </h3>
                <p className="text-gray-400 text-sm">
                  Understanding the differences between trust administration and probate processes.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800">
              <div className="aspect-video relative">
                <SiteImage
                  imageId="courtGavel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Topic
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Working with Probate Commissioners
                </h3>
                <p className="text-gray-400 text-sm">
                  Tips for navigating Clark County probate commissioner schedules and requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-secondary-600 mb-4">
              New episodes on YouTube as they publish—subscribe on the channel for updates.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors"
            >
              Request Specific Topics
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions After Watching?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your specific probate real estate situation.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
      <SchemaMarkup
        type="article"
        breadcrumbs={breadcrumbs}
        webPage={{
          name: 'Probate Real Estate Videos',
          description:
            'Watch page with an embedded featured video, channel uploads playlist, and probate topic outlines.',
          url: 'https://www.probaterealestatesales.com/blog/probate-videos/',
          isPartOf: {
            name: 'Las Vegas Probate Real Estate Sales',
            url: 'https://www.probaterealestatesales.com',
          },
        }}
      />
    </main>
  );
}
