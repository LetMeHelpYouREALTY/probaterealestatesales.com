import { ArrowLeft, BarChart, Calendar, DollarSign, Home, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SchemaMarkup from '@/components/SchemaMarkup';
import SiteImage from '@/components/SiteImage';
import { getSiteImageSrc } from '@/lib/cloudflare-images';

export const metadata: Metadata = {
  title: 'Las Vegas Probate Property Market Update January 2025 | Real Estate Trends',
  description:
    'Comprehensive Las Vegas probate real estate market update for January 2025. Analysis of sale prices, days on market, inventory levels, and probate property trends.',
  keywords:
    'Las Vegas real estate market 2025, probate property market, Las Vegas housing market, probate sales trends, January 2025 market update',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/blog/las-vegas-market-jan-2025/',
  },
  openGraph: {
    title: 'Las Vegas Probate Property Market Update January 2025',
    description:
      'Comprehensive analysis of Las Vegas probate real estate market trends for January 2025.',
    type: 'article',
    url: 'https://www.probaterealestatesales.com/blog/las-vegas-market-jan-2025/',
    publishedTime: '2025-01-15T00:00:00Z',
    modifiedTime: '2025-01-31T00:00:00Z',
    authors: ['Dr. Jan Duffy'],
    images: [
      {
        url: getSiteImageSrc('listingsHero'),
        width: 1200,
        height: 675,
        alt: 'Las Vegas valley homes — probate property market update',
      },
    ],
  },
  other: {
    'article:published_time': '2025-01-15T00:00:00Z',
    'article:modified_time': '2025-01-31T00:00:00Z',
    'article:author': 'Dr. Jan Duffy',
  },
};

export default function LasVegasMarketJan2025Page() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog/' },
    { name: 'Las Vegas Market January 2025', url: '/blog/las-vegas-market-jan-2025/' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <PageHero
        title="Las Vegas Probate Property Market Update"
        subtitle="Comprehensive analysis of probate real estate trends and market conditions in Las Vegas."
        imageId="listingsHero"
      >
        <Link
          href="/blog/market-updates/"
          className="inline-flex items-center text-white hover:text-white"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Market Updates
        </Link>
        <p className="mt-4 inline-flex items-center text-white/90">
          <Calendar className="h-5 w-5 mr-2" aria-hidden />
          January 2025
        </p>
      </PageHero>

      {/* Executive Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Executive Summary
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
              The Las Vegas probate real estate market continues to demonstrate strong activity and
              stability as we enter 2025. Well-priced probate properties are attracting significant
              buyer interest, with average days on market remaining competitive at 45-60 days. The
              market shows healthy inventory levels and steady pricing trends that benefit both
              buyers seeking value opportunities and families looking to liquidate estate properties
              efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-12 text-center">
            Key Market Metrics
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-secondary-900 mb-2">$425,000</div>
              <div className="text-lg text-secondary-600 mb-3">Average Sale Price</div>
              <div className="text-sm text-green-600 font-semibold">↑ 3.2% Year-over-Year</div>
              <p className="text-sm text-secondary-500 mt-4">
                Probate properties continue to appreciate, with strong buyer demand driving
                competitive pricing.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Home className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-secondary-900 mb-2">52 Days</div>
              <div className="text-lg text-secondary-600 mb-3">Average Days on Market</div>
              <div className="text-sm text-blue-600 font-semibold">↓ 5 Days vs. Last Quarter</div>
              <p className="text-sm text-secondary-500 mt-4">
                Properties priced correctly are selling faster, indicating strong market
                fundamentals.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <BarChart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-secondary-900 mb-2">2.5 Months</div>
              <div className="text-lg text-secondary-600 mb-3">Inventory Supply</div>
              <div className="text-sm text-secondary-600 font-semibold">Stable</div>
              <p className="text-sm text-secondary-500 mt-4">
                Balanced market conditions with healthy inventory levels supporting steady sales
                activity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Market Trends & Analysis
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Pricing Trends</h3>
              <p className="text-secondary-700 mb-4">
                Probate property prices have shown consistent appreciation, with the average sale
                price increasing 3.2% year-over-year. This growth is driven by several factors:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700">
                <li>Strong buyer demand for well-maintained probate properties</li>
                <li>Limited inventory in desirable neighborhoods</li>
                <li>Value perception among buyers seeking investment opportunities</li>
                <li>Competitive bidding on properties in prime locations</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-8 border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Sales Velocity</h3>
              <p className="text-secondary-700 mb-4">
                The average days on market decreased by 5 days compared to the previous quarter,
                indicating strong buyer activity. Key observations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700">
                <li>Properties priced at or slightly below market value sell within 30-45 days</li>
                <li>Overpriced properties sit longer but eventually adjust to market conditions</li>
                <li>Buyers are well-informed and act quickly on attractive opportunities</li>
                <li>Pre-inspected properties tend to close faster</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-8 border-l-4 border-purple-600">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Buyer Behavior</h3>
              <p className="text-secondary-700 mb-4">
                Buyer interest in probate properties continues to grow for several reasons:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary-700">
                <li>Perception of value opportunities in probate sales</li>
                <li>Desire for properties with clear title and court-validated sales</li>
                <li>Attraction to well-maintained inherited properties</li>
                <li>Investor interest in properties with potential for appreciation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Insights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-12 text-center">
            Neighborhood Performance
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-36">
                <SiteImage
                  imageId="summerlinHomes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Summerlin</h3>
                <p className="text-secondary-700 mb-3">
                  Premium properties in Summerlin continue to command strong prices, with average
                  sale prices above market average. Days on market: 38-50 days.
                </p>
                <div className="text-primary-700 font-semibold">↑ Strong Demand</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-36">
                <SiteImage
                  imageId="hendersonHomes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Henderson</h3>
                <p className="text-secondary-700 mb-3">
                  Steady activity in Henderson with consistent pricing. Well-maintained properties
                  in Green Valley and Anthem areas selling quickly. Days on market: 45-60 days.
                </p>
                <div className="text-blue-600 font-semibold">→ Stable Market</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-36">
                <SiteImage
                  imageId="northLasVegasHomes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">North Las Vegas</h3>
                <p className="text-secondary-700 mb-3">
                  Growing interest in North Las Vegas properties, particularly in newer
                  developments. Value-oriented buyers finding opportunities. Days on market: 50-65
                  days.
                </p>
                <div className="text-green-600 font-semibold">↑ Increasing Interest</div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-36">
                <SiteImage
                  imageId="lasVegasHomes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">Las Vegas Central</h3>
                <p className="text-secondary-700 mb-3">
                  Downtown and central Las Vegas properties showing consistent activity. Investor
                  interest remains strong. Days on market: 40-55 days.
                </p>
                <div className="text-purple-600 font-semibold">→ Active Market</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outlook */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">Market Outlook</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-secondary-700 mb-4">
              Looking ahead, we expect the Las Vegas probate property market to maintain its current
              strength through the first half of 2025. Key factors supporting this outlook include:
            </p>
            <ul className="space-y-3 text-secondary-700">
              <li className="flex items-start">
                <TrendingUp className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Continued population growth in the Las Vegas metropolitan area</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Strong job market and economic fundamentals</span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  Nevada's favorable probate timeline (6-8 months) attracting out-of-state families
                </span>
              </li>
              <li className="flex items-start">
                <TrendingUp className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Ongoing investor interest in probate properties</span>
              </li>
            </ul>
            <p className="text-lg text-secondary-700 mt-6">
              Families selling probate properties should work with experienced probate real estate
              specialists to ensure proper pricing and efficient sales processes. Well-priced
              properties in good condition continue to attract competitive offers and close
              successfully.
            </p>
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              href="/blog/market-updates/"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">All Market Updates</h3>
              <p className="text-secondary-600 text-sm">
                Stay informed with the latest Las Vegas probate property market trends.
              </p>
            </Link>
            <Link
              href="/home-valuation/"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Free Home Valuation</h3>
              <p className="text-secondary-600 text-sm">
                Get a free market analysis for your probate property.
              </p>
            </Link>
            <Link
              href="/locations/"
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Service Areas</h3>
              <p className="text-secondary-600 text-sm">
                Learn about probate services in Las Vegas neighborhoods.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Market-Specific Pricing for Your Property?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get a free market analysis and pricing strategy tailored to your probate property's
            location and condition.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors"
          >
            Schedule Free Property Valuation
          </Link>
        </div>
      </section>
      <SchemaMarkup
        type="article"
        breadcrumbs={breadcrumbs}
        article={{
          headline: 'Las Vegas Probate Property Market Update January 2025 | Real Estate Trends',
          description:
            'Comprehensive Las Vegas probate real estate market update for January 2025. Analysis of sale prices, days on market, inventory levels, and probate property trends.',
          image: 'https://www.probaterealestatesales.com/images/las-vegas-market-jan-2025.jpg',
          author: 'Dr. Jan Duffy',
          datePublished: '2025-01-15T00:00:00Z',
          dateModified: new Date().toISOString(),
          url: 'https://www.probaterealestatesales.com/blog/las-vegas-market-jan-2025/',
        }}
      />
    </main>
  );
}
