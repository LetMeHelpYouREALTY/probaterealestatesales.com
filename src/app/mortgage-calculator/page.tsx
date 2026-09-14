import { ArrowRight, Calculator, DollarSign, Home, Info, Phone, TrendingUp } from 'lucide-react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading FAQ...</div>,
});

export const metadata: Metadata = {
  title: 'Mortgage Calculator | Probate Property Financing | Free Calculator Las Vegas',
  description: `Free mortgage calculator for probate properties in Las Vegas. Calculate monthly payments for inherited property purchases. Plan your probate property financing with our free tool. Expert guidance available: ${SITE_PHONE_DISPLAY}`,
  keywords:
    'mortgage calculator, probate property financing, Las Vegas mortgage, home loan calculator, monthly payment calculator, probate property mortgage, free mortgage calculator',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/mortgage-calculator/',
  },
  openGraph: {
    title: 'Mortgage Calculator | Probate Property Financing | Free Calculator Las Vegas',
    description:
      'Free mortgage calculator for probate properties in Las Vegas. Calculate monthly payments for inherited property purchases.',
    type: 'website',
    url: 'https://www.probaterealestatesales.com/mortgage-calculator/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function MortgageCalculatorPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Mortgage Calculator', url: '/mortgage-calculator/' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calculator className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Mortgage Calculator</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Calculate your monthly mortgage payment for probate properties in Las Vegas, Nevada.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Loan Details</h2>

                <div>
                  <label
                    htmlFor="homePrice"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Home Price ($)
                  </label>
                  <input
                    type="number"
                    id="homePrice"
                    name="homePrice"
                    min="0"
                    step="1000"
                    defaultValue="500000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="downPayment"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Down Payment ($)
                  </label>
                  <input
                    type="number"
                    id="downPayment"
                    name="downPayment"
                    min="0"
                    step="1000"
                    defaultValue="100000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                  <p className="text-xs text-secondary-500 mt-1">Typically 20% of home price</p>
                </div>

                <div>
                  <label
                    htmlFor="interestRate"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    id="interestRate"
                    name="interestRate"
                    min="0"
                    max="100"
                    step="0.125"
                    defaultValue="6.5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="loanTerm"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Loan Term (Years)
                  </label>
                  <select
                    id="loanTerm"
                    name="loanTerm"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="15">15 Years</option>
                    <option value="30" selected>
                      30 Years
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="propertyTax"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Annual Property Tax ($)
                  </label>
                  <input
                    type="number"
                    id="propertyTax"
                    name="propertyTax"
                    min="0"
                    step="100"
                    defaultValue="5000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="homeInsurance"
                    className="block text-sm font-medium text-secondary-700 mb-2"
                  >
                    Annual Home Insurance ($)
                  </label>
                  <input
                    type="number"
                    id="homeInsurance"
                    name="homeInsurance"
                    min="0"
                    step="100"
                    defaultValue="1500"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              {/* Results Section */}
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-bold text-secondary-900 mb-6">Monthly Payment</h2>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <div className="text-sm text-secondary-600 mb-1">Principal & Interest</div>
                    <div className="text-3xl font-bold text-secondary-900" id="principalInterest">
                      $2,528
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <div className="text-sm text-secondary-600 mb-1">Property Tax</div>
                    <div className="text-2xl font-semibold text-secondary-900" id="monthlyTax">
                      $417
                    </div>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <div className="text-sm text-secondary-600 mb-1">Home Insurance</div>
                    <div
                      className="text-2xl font-semibold text-secondary-900"
                      id="monthlyInsurance"
                    >
                      $125
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="text-sm text-secondary-600 mb-1">Total Monthly Payment</div>
                    <div className="text-4xl font-bold text-primary-700" id="totalPayment">
                      $3,070
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <div className="text-sm text-secondary-700">
                      <p className="font-medium mb-1">Loan Details:</p>
                      <p>
                        Loan Amount: <span id="loanAmount">$400,000</span>
                      </p>
                      <p>
                        Monthly Interest: <span id="monthlyInterest">$2,167</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors"
                  >
                    Calculate Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-12 text-center">
            Understanding Your Mortgage
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <DollarSign className="h-12 w-12 text-primary-700 mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Down Payment</h3>
              <p className="text-secondary-600">
                A 20% down payment is typically recommended to avoid Private Mortgage Insurance
                (PMI) and get better rates.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Interest Rates</h3>
              <p className="text-secondary-600">
                Current interest rates vary based on credit score, loan type, and market conditions.
                Shop around for the best rate.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <Home className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Additional Costs</h3>
              <p className="text-secondary-600">
                Remember to factor in property taxes, homeowners insurance, HOA fees, and
                maintenance costs.
              </p>
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
                Frequently Asked Questions About Mortgage Financing
              </h2>
              <p className="text-xl text-secondary-600">
                Common questions about financing probate property purchases
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
          <h2 className="text-3xl font-bold mb-4">Ready to Buy a Probate Property?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Let our probate real estate experts help you find and finance the perfect property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors"
            >
              Get Started Today
            </Link>
            <a
              href={SITE_PHONE_TEL_HREF}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-md font-medium text-lg hover:bg-white hover:text-primary-700 transition-colors"
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
