import { ArrowRight, Phone, Search } from 'lucide-react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import RealScoutOfficeListings from '@/components/RealScoutOfficeListings';
import SchemaMarkup from '@/components/SchemaMarkup';
import SectionVisual from '@/components/SectionVisual';
import { SITE_PHONE_DISPLAY, SITE_PHONE_E164, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading FAQ...</div>,
});

export const metadata: Metadata = {
  title: 'Probate Homes for Sale in Las Vegas, Nevada | Find Probate Properties | Dr. Jan Duffy',
  description:
    'Discover probate homes for sale in Las Vegas, Nevada. Expert guidance from Dr. Jan Duffy on finding and purchasing probate properties. Complete listings, market insights, and buyer resources for probate real estate in Clark County.',
  keywords: [
    'probate homes for sale',
    'probate homes for sale Las Vegas',
    'probate homes for sale Nevada',
    'probate properties for sale',
    'probate houses for sale',
    'probate real estate listings',
    'probate property listings Las Vegas',
    'buy probate homes',
    'probate home buyers',
    'probate property search',
    'Las Vegas probate homes',
    'Nevada probate properties',
    'Clark County probate homes',
    'probate estate homes',
    'inherited homes for sale',
    'probate property market',
  ].join(', '),
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/probate-homes-for-sale/',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Probate Homes for Sale in Las Vegas, Nevada | Find Probate Properties',
    description:
      'Discover probate homes for sale in Las Vegas, Nevada. Expert guidance on finding and purchasing probate properties with complete listings and market insights.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.probaterealestatesales.com/probate-homes-for-sale/',
  },
};

export const revalidate = 3600;

export default function ProbateHomesForSalePage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Probate Homes for Sale', url: '/probate-homes-for-sale/' },
  ];

  return (
    <>
      <SchemaMarkup
        type="faq"
        breadcrumbs={breadcrumbs}
        customSchema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: 'Probate Homes for Sale',
              description:
                'Expert guidance and listings for probate homes for sale in Las Vegas, Nevada. Complete resources for buyers interested in probate properties.',
              provider: {
                '@type': 'RealEstateAgent',
                name: 'Dr. Jan Duffy',
                telephone: SITE_PHONE_E164,
              },
              areaServed: {
                '@type': 'City',
                name: 'Las Vegas',
              },
            },
            {
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What are probate homes for sale?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Probate homes for sale are properties that are being sold as part of the probate process after someone passes away. These properties are typically sold to settle the estate and distribute assets to beneficiaries.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I find probate homes for sale in Las Vegas?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You can find probate homes for sale in Las Vegas through probate real estate specialists like Dr. Jan Duffy, probate court filings, estate sale listings, and specialized probate property databases.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are probate homes cheaper than regular homes?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Probate homes can sometimes be priced below market value, but this varies. The executor must get court approval for the sale price, which must be fair market value. However, probate properties may need repairs or updates, which can affect pricing.',
                  },
                },
              ],
            },
          ],
        }}
      />
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <PageHero
          title="Probate Homes for Sale in Las Vegas, Nevada"
          subtitle="Court-approved probate listings for buyers in Las Vegas and Clark County, with expert guidance from Dr. Jan Duffy."
          imageId="listingsHero"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors"
            >
              <Search className="h-5 w-5 mr-2" />
              View Current Listings
            </Link>
            <Link
              href={SITE_PHONE_TEL_HREF}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call {SITE_PHONE_DISPLAY}
            </Link>
          </div>
        </PageHero>

        {/* Understanding Probate Homes for Sale */}
        <section className="py-16 bg-white">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Understanding Probate Homes for Sale
              </h2>
              <div className="mb-8">
                <SectionVisual imageId="lasVegasHomes" className="h-56 md:h-72" />
              </div>
              <p className="text-lg text-secondary-700 mb-6">
                Probate homes for sale represent a unique segment of the real estate market in Las
                Vegas and throughout Nevada. These properties become available when someone passes
                away and their estate must go through the{' '}
                <Link
                  href="/resources/nevada-probate-guide/"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  probate process
                </Link>{' '}
                to legally transfer ownership and settle debts. Understanding how{' '}
                <Link
                  href="/services/#probate-sales"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  probate sales
                </Link>{' '}
                work can help you identify opportunities and make informed purchasing decisions.
                Learn more about{' '}
                <Link
                  href="/probate-property-buyers/"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  buying probate properties
                </Link>
                .
              </p>
              <p className="text-lg text-secondary-700 mb-6">
                When a property owner dies without a{' '}
                <Link
                  href="/trust-property-sales/"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  living trust
                </Link>{' '}
                or other estate planning mechanism, their real estate typically enters{' '}
                <Link
                  href="/blog/clark-county-probate/"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  probate court
                </Link>
                . The court oversees the process of identifying assets, paying debts, and
                distributing remaining property to heirs or beneficiaries. As part of this process,
                real estate may need to be sold to generate cash for estate expenses, pay creditors,
                or divide assets among multiple beneficiaries. Explore our{' '}
                <Link
                  href="/probate-estate-sales/"
                  className="text-primary-700 hover:text-primary-900 font-semibold underline"
                >
                  probate estate sales
                </Link>{' '}
                services.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                What Makes a Property a Probate Home?
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                A probate home is any real property that is part of an estate going through probate
                court proceedings. These properties have several distinguishing characteristics:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  The property owner has passed away and the estate is being administered through
                  probate court
                </li>
                <li>
                  The property must be sold as part of settling the estate, either by court order or
                  executor decision
                </li>
                <li>
                  All sales require court approval, ensuring transparency and fair market value
                  pricing
                </li>
                <li>
                  The sale process follows specific legal procedures mandated by Nevada probate law
                </li>
                <li>
                  Buyers may need to wait for court confirmation before the sale can be finalized
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Why Probate Homes Enter the Market
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                There are several common reasons why probate homes come up for sale:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  <strong>Estate Liquidation:</strong> The estate needs cash to pay debts, taxes, or
                  administrative expenses
                </li>
                <li>
                  <strong>Multiple Heirs:</strong> Several beneficiaries prefer cash distribution
                  rather than co-owning the property
                </li>
                <li>
                  <strong>Property Maintenance:</strong> The estate cannot afford ongoing property
                  expenses like taxes, insurance, and maintenance
                </li>
                <li>
                  <strong>Geographic Distribution:</strong> Heirs live in different locations and
                  cannot manage the property
                </li>
                <li>
                  <strong>Market Conditions:</strong> The executor determines it's an optimal time
                  to sell based on market conditions
                </li>
                <li>
                  <strong>Property Condition:</strong> The home requires significant repairs that
                  the estate cannot fund
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Finding Probate Homes for Sale */}
        <section className="py-16 bg-gray-50">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                How to Find Probate Homes for Sale in Las Vegas
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Finding probate homes for sale requires a different approach than searching for
                traditional real estate listings. These properties often don't appear on standard
                MLS listings immediately, and the buying process involves unique steps. Here are the
                most effective methods for locating probate properties in the Las Vegas area.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Work with a Probate Real Estate Specialist
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                The most efficient way to find probate homes for sale is to work with a real estate
                agent who specializes in probate sales, such as Dr. Jan Duffy. Probate specialists
                have:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  Direct relationships with estate attorneys, executors, and trustees who list
                  probate properties
                </li>
                <li>
                  Access to probate court filings and notices that identify properties entering the
                  market
                </li>
                <li>
                  Knowledge of properties in pre-listing stages before they appear on public
                  listings
                </li>
                <li>
                  Understanding of the probate sale process and ability to guide buyers through
                  court requirements
                </li>
                <li>
                  Experience negotiating probate sales and handling court-required documentation
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Monitor Probate Court Filings
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Clark County Probate Court maintains public records of all probate cases, including
                petitions to sell real property. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Review probate court calendars for scheduled hearings on property sales</li>
                <li>
                  Search court records for petitions requesting authorization to sell real estate
                </li>
                <li>
                  Monitor notices of proposed sales that executors must publish before court
                  approval
                </li>
                <li>Attend probate court hearings where property sales are being considered</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Check Specialized Probate Property Databases
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Some real estate websites and services specialize in probate, trust, and estate
                sales. These platforms aggregate probate listings from multiple sources and provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Centralized databases of probate properties across multiple counties</li>
                <li>Search filters for property type, location, price range, and sale status</li>
                <li>Information about upcoming probate sales and auction dates</li>
                <li>Details about court approval status and required procedures</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Network with Estate Professionals
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Building relationships with professionals who work with estates can provide early
                access to probate property listings:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Estate attorneys who represent executors and trustees</li>
                <li>Probate court clerks who process sale petitions</li>
                <li>Estate planning attorneys who may know of upcoming probate sales</li>
                <li>Financial advisors and accountants who work with estates</li>
                <li>Property managers who handle estate properties</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Buying Probate Homes */}
        <section className="py-16 bg-white">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                The Process of Buying Probate Homes for Sale
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Purchasing a probate home involves additional steps beyond a typical real estate
                transaction. Understanding this process helps you prepare and avoid delays. The
                probate buying process typically follows these stages:
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 1: Property Identification and Initial Offer
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Once you identify a probate home you're interested in, you'll work with the listing
                agent to submit an offer. However, probate offers have unique considerations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Offers must typically be at or above the appraised fair market value</li>
                <li>
                  The executor cannot accept offers below appraised value without court approval
                </li>
                <li>Your offer may need to include proof of funds or pre-approval letter</li>
                <li>The offer is subject to court confirmation, which can take 30-60 days</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 2: Court Approval Process
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                After the executor accepts your offer, they must petition the probate court for
                approval. This process includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  Filing a petition with the court requesting authorization to sell at your offer
                  price
                </li>
                <li>
                  Providing the court with an appraisal or broker's price opinion showing fair
                  market value
                </li>
                <li>
                  Publishing notice of the proposed sale to give other interested parties an
                  opportunity to object
                </li>
                <li>Scheduling a court hearing where the judge reviews the sale terms</li>
                <li>Court confirmation of the sale, which makes the contract binding</li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 3: Due Diligence and Inspections
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                While waiting for court approval, you can conduct inspections and due diligence:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Professional home inspection to identify needed repairs or issues</li>
                <li>
                  Title search to verify clear ownership and identify any liens or encumbrances
                </li>
                <li>Property appraisal for your lender if you're obtaining financing</li>
                <li>Review of property disclosures, though probate sales are often "as-is"</li>
                <li>
                  Assessment of property condition, as probate homes may need updates or repairs
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Step 4: Financing and Closing
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Once court approval is obtained, the transaction proceeds similar to a standard
                sale:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>Finalize your mortgage financing if you're not paying cash</li>
                <li>Complete any remaining contingencies from your purchase agreement</li>
                <li>Coordinate closing date with the title company and estate attorney</li>
                <li>Review closing documents, which may include court order confirming the sale</li>
                <li>Transfer of title from the estate to you as the buyer</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits and Considerations */}
        <section className="py-16 bg-gray-50">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                Benefits and Considerations of Buying Probate Homes
              </h2>
              <p className="text-lg text-secondary-700 mb-6">
                Probate homes can offer unique opportunities for buyers, but they also come with
                specific considerations. Understanding both the advantages and potential challenges
                helps you make informed decisions.
              </p>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Potential Benefits of Probate Properties
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Buyers may find several advantages when purchasing probate homes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  <strong>Fair Pricing:</strong> Properties are typically priced at fair market
                  value, which may be below recent comparable sales in hot markets
                </li>
                <li>
                  <strong>Motivated Sellers:</strong> Estates often need to sell quickly to settle
                  debts and distribute assets
                </li>
                <li>
                  <strong>Less Competition:</strong> Fewer buyers actively search for probate
                  properties, reducing bidding wars
                </li>
                <li>
                  <strong>Transparent Process:</strong> Court oversight ensures fair dealing and
                  proper disclosures
                </li>
                <li>
                  <strong>Potential for Value:</strong> Properties may need updates, offering
                  opportunities for improvement and equity building
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-secondary-900 mt-8 mb-4">
                Important Considerations
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                Buyers should also be aware of potential challenges:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-secondary-700 mb-6 ml-4">
                <li>
                  <strong>Extended Timeline:</strong> Court approval can add 30-90 days to the
                  closing process
                </li>
                <li>
                  <strong>As-Is Condition:</strong> Many probate sales are as-is, meaning the estate
                  won't make repairs
                </li>
                <li>
                  <strong>Property Condition:</strong> Homes may have deferred maintenance or need
                  significant updates
                </li>
                <li>
                  <strong>Financing Requirements:</strong> Some lenders have specific requirements
                  for probate property loans
                </li>
                <li>
                  <strong>Potential Delays:</strong> Court schedules, beneficiary objections, or
                  competing offers can delay or derail sales
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-20 bg-white">
          <div className="container-max py-8 border-b border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-2">
                  Frequently Asked Questions About Probate Homes for Sale
                </h2>
                <p className="text-secondary-600">
                  Common questions about finding and purchasing probate properties
                </p>
              </div>
              <Link
                href="/faq/"
                className="hidden md:flex items-center text-primary-700 hover:text-primary-900 font-medium"
              >
                View All FAQs
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <FAQ />
            <div className="text-center mt-6 md:hidden">
              <Link
                href="/faq/"
                className="inline-flex items-center text-primary-700 hover:text-primary-900 font-medium"
              >
                View All FAQs
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        <RealScoutOfficeListings
          title="Las Vegas Probate Homes for Sale"
          subtitle="Browse our current inventory of probate homes in Las Vegas. These probate properties are available for immediate purchase with court-approved sales and expert guidance."
          themeColor="blue"
        />

        {/* CTA Section */}
        <section className="py-16 bg-primary-600 text-white">
          <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Probate Home?
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Work with Dr. Jan Duffy, Las Vegas's leading probate real estate specialist, to find
              and purchase probate properties with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link
                href={SITE_PHONE_TEL_HREF}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-900 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call {SITE_PHONE_DISPLAY}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
