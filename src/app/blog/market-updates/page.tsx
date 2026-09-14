import { ArrowLeft, BarChart, Calendar, DollarSign, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Las Vegas Real Estate Market Updates | Probate Property Trends',
  description:
    'Stay informed with the latest Las Vegas real estate market trends, probate property insights, and market analysis from Dr. Jan Duffy.',
  keywords:
    'Las Vegas real estate market, probate property trends, real estate market updates, Las Vegas housing market, probate sales data',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/blog/market-updates/',
  },
  openGraph: {
    title: 'Las Vegas Real Estate Market Updates',
    description:
      'Stay informed with the latest Las Vegas real estate market trends and probate property insights.',
    type: 'website',
    url: 'https://www.probaterealestatesales.com/blog/market-updates/',
  },
};

export default function MarketUpdatesPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog/' },
    { name: 'Market Updates', url: '/blog/market-updates/' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <PageHero
        title="Market Updates"
        subtitle="Latest Las Vegas real estate market trends and probate property insights."
        imageId="listingsHero"
      >
        <Link href="/blog/" className="inline-flex items-center text-white hover:text-blue-100">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Blog
        </Link>
      </PageHero>

      {/* Market Updates Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Update Card */}
            <article className="bg-white rounded-xl shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center text-sm text-secondary-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>January 2025</span>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Current
                </span>
              </div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-3">
                Las Vegas Probate Property Market Update - January 2025
              </h2>
              <p className="text-secondary-700 mb-4 leading-relaxed">
                The Las Vegas probate real estate market continues to show strong activity with an
                average time on market of 45-60 days for well-priced properties. Inventory levels
                remain stable, and buyer interest in probate properties continues to grow due to
                potential value opportunities.
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-secondary-700">
                      Average Sale Price
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-secondary-900">$425,000</div>
                  <div className="text-sm text-green-600">↑ 3.2% YoY</div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <BarChart className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm font-medium text-secondary-700">Days on Market</span>
                  </div>
                  <div className="text-2xl font-bold text-secondary-900">52 Days</div>
                  <div className="text-sm text-secondary-600">Average</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-sm font-medium text-secondary-700">Inventory</span>
                  </div>
                  <div className="text-2xl font-bold text-secondary-900">Stable</div>
                  <div className="text-sm text-secondary-600">2.5 months supply</div>
                </div>
              </div>
              <Link
                href="/blog/las-vegas-market-jan-2025/"
                className="text-primary-700 hover:text-primary-900 font-medium"
              >
                Read Full Report →
              </Link>
            </article>

            {/* Coming Soon Placeholder */}
            <div className="bg-gray-50 rounded-xl p-8 text-center border-2 border-dashed border-gray-300">
              <BarChart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                More Market Updates Coming Soon
              </h3>
              <p className="text-secondary-600 mb-4">
                We'll be posting regular market updates with detailed analysis of Las Vegas probate
                property trends.
              </p>
              <Link
                href="/contact/"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors"
              >
                Subscribe for Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-12 text-center">
            Key Market Insights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <TrendingUp className="h-12 w-12 text-primary-700 mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Probate Timeline Advantage
              </h3>
              <p className="text-secondary-600">
                Nevada's 6-8 month probate timeline continues to attract families from states with
                longer processes, making probate properties an attractive option for buyers.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <DollarSign className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Pricing Trends</h3>
              <p className="text-secondary-600">
                Well-priced probate properties are selling quickly, often at or near asking price,
                indicating strong demand in the Las Vegas market.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <BarChart className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Market Stability</h3>
              <p className="text-secondary-600">
                The Las Vegas probate property market shows steady growth and stability, making it
                an ideal time for both buyers and sellers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Market-Specific Advice?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Get personalized market analysis and pricing strategy for your probate property.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
      <SchemaMarkup
        type="article"
        breadcrumbs={breadcrumbs}
        article={{
          headline: 'Las Vegas Real Estate Market Updates | Probate Property Trends',
          description:
            'Stay informed with the latest Las Vegas real estate market trends, probate property insights, and market analysis from Dr. Jan Duffy.',
          image: 'https://www.probaterealestatesales.com/images/market-updates.jpg',
          author: 'Dr. Jan Duffy',
          datePublished: new Date().toISOString(),
          dateModified: new Date().toISOString(),
          url: 'https://www.probaterealestatesales.com/blog/market-updates/',
        }}
      />
    </main>
  );
}
