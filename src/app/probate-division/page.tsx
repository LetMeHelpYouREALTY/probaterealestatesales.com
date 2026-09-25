import { ArrowRight, Award, FileText, Gavel, MapPin, Phone, Shield } from 'lucide-react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import SchemaMarkup from '@/components/SchemaMarkup';
import SiteImage from '@/components/SiteImage';
import { SITE_LOGO_ABSOLUTE_URL } from '@/config/site-google';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading FAQ...</div>,
});

export const metadata: Metadata = {
  title:
    'Probate Real Estate Division | Trust, Probate & Conservatorship Sales | Las Vegas, Nevada',
  description:
    'Berkshire Hathaway HomeServices Nevada Properties Probate Real Estate Division. 30+ years experience in probate, trust, and conservatorship real estate sales. Expert guidance for attorneys, fiduciaries, executors, trustees, and conservators in Las Vegas and throughout Nevada.',
  keywords: [
    'probate real estate division',
    'trust probate',
    'conservatorship real estate',
    'probate realtor Nevada',
    'probate realtor Las Vegas',
    'trust sales Nevada',
    'probate sales Las Vegas',
    'conservatorship sales',
    'Berkshire Hathaway probate',
    'Nevada probate real estate',
    'Clark County probate',
    'probate property sales',
    'trust property sales',
    'inherited property Nevada',
    'estate liquidation Las Vegas',
    'probate court sales',
    'trust administration real estate',
  ].join(', '),
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/probate-division/',
  },
  openGraph: {
    title: 'Probate Real Estate Division | Trust, Probate & Conservatorship Sales | Las Vegas, NV',
    description:
      '30+ years experience in probate, trust, and conservatorship real estate sales. Expert guidance for attorneys, fiduciaries, executors, trustees, and conservators throughout Nevada.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.probaterealestatesales.com/probate-division/',
    siteName: 'Probate Real Estate Sales',
    images: [
      {
        url: 'https://www.probaterealestatesales.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Berkshire Hathaway HomeServices Nevada Properties - Probate Real Estate Division',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Probate Real Estate Division | Berkshire Hathaway HomeServices Nevada Properties',
    description:
      '30+ years experience in probate, trust, and conservatorship real estate sales in Las Vegas, Nevada.',
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

export default function ProbateDivisionPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Probate Division', url: '/probate-division/' },
  ];

  return (
    <>
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <SchemaMarkup
        type="faq"
        breadcrumbs={breadcrumbs}
        customSchema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': 'https://www.probaterealestatesales.com/probate-division/#organization',
              name: 'Berkshire Hathaway HomeServices Nevada Properties - Probate Real Estate Division',
              url: 'https://www.probaterealestatesales.com/probate-division/',
              logo: SITE_LOGO_ABSOLUTE_URL,
              description:
                'Dedicated Probate Real Estate Division offering expertise in probate, trust, and conservatorship real estate sales throughout Nevada.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                addressCountry: 'US',
              },
              areaServed: {
                '@type': 'State',
                name: 'Nevada',
              },
              knowsAbout: [
                'Probate Real Estate',
                'Trust Sales',
                'Conservatorship Sales',
                'Nevada Probate Law',
                'NRS Chapter 148',
                'Clark County Probate Court',
                'Court Proceedings',
                'Trust Administration',
                'Estate Liquidation',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Probate Real Estate Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Trust Property Sales',
                      description:
                        'Expert handling of real property held in trust, managed by successor trustees for beneficiaries.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Probate Property Sales',
                      description:
                        'Complete probate real estate services including court-approved sales and legal compliance.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Conservatorship Property Sales',
                      description:
                        'Specialized real estate services for conservatorship proceedings and court-monitored sales.',
                    },
                  },
                ],
              },
            },
            {
              '@type': 'Person',
              '@id': 'https://www.probaterealestatesales.com/probate-division/#nancy-sanborn',
              name: 'Nancy Sanborn',
              jobTitle: 'Director of Trust & Probate',
              worksFor: {
                '@id': 'https://www.probaterealestatesales.com/probate-division/#organization',
              },
              description:
                'Director of Trust & Probate with over 30 years of experience in Nevada real estate, specializing in trust, conservatorship, and probate transactions.',
              knowsAbout: [
                'Trust Administration',
                'Probate Law',
                'Conservatorship',
                'Nevada Real Estate',
                'Estate Planning',
              ],
            },
            {
              '@type': 'Service',
              name: 'Trust Real Estate Sales',
              description:
                'Real property held in trust, managed by a successor trustee for the benefit of beneficiaries, requires specialized expertise to navigate successfully.',
              provider: {
                '@id': 'https://www.probaterealestatesales.com/probate-division/#organization',
              },
              areaServed: {
                '@type': 'State',
                name: 'Nevada',
              },
            },
            {
              '@type': 'Service',
              name: 'Probate Real Estate Sales',
              description:
                'Legal process overseeing the distribution of assets, including real property, to heirs through supervised court procedures.',
              provider: {
                '@id': 'https://www.probaterealestatesales.com/probate-division/#organization',
              },
              areaServed: {
                '@type': 'State',
                name: 'Nevada',
              },
            },
            {
              '@type': 'Service',
              name: 'Conservatorship Real Estate Sales',
              description:
                'Expert guidance for conservatorship property sales, ensuring transactions are executed with precision for the benefit of conservatees.',
              provider: {
                '@id': 'https://www.probaterealestatesales.com/probate-division/#organization',
              },
              areaServed: {
                '@type': 'State',
                name: 'Nevada',
              },
            },
          ],
        }}
      />

      {/* Trustprobate Banner / Hero Section */}
      <section
        className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 overflow-hidden"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <div className="absolute inset-0">
          <SiteImage
            imageId="courthouse"
            fill
            priority
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative container-max section-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-800/50 text-blue-100 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm">
              <Award className="h-5 w-5" />
              Probate Real Estate Division
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span
                className="text-gradient bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                itemProp="name"
              >
                Berkshire Hathaway HomeServices Nevada Properties
              </span>
              <br />
              <span className="text-white">Probate Real Estate Division</span>
            </h1>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 space-y-6 text-left">
              <p className="text-xl leading-relaxed text-gray-100">
                Welcome to{' '}
                <span className="font-semibold text-white">
                  Berkshire Hathaway HomeServices Nevada Properties
                </span>
                , where our dedicated{' '}
                <span className="font-semibold text-blue-300">Probate Real Estate Division</span>{' '}
                offers unparalleled expertise in handling real property sales through probate,
                trust, or conservatorship.
              </p>

              <p className="text-lg leading-relaxed text-gray-200">
                With over <span className="font-semibold text-white">three decades</span> of
                experience, our team of real estate professionals brings a wealth of knowledge to
                every transaction. We specialize in guiding our clients through the intricacies of
                these situations with a sensitive, and pragmatic approach that has earned us the
                respect of attorneys, fiduciaries, executors, trustees, conservators, and fellow
                real estate professionals alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">SERVICES OFFERED</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Clients trust our expertise, established relationships, and experience with compliance
              in the probate court system to help them navigate pivotal decisions about a real
              estate transaction during a time of transition. Our specialists provide comprehensive
              real estate representation given their extensive grasp of the local landscape and
              backing of a respective multinational corporation. At{' '}
              <span className="font-semibold">
                Berkshire Hathaway HomeServices Nevada Properties
              </span>
              , we offer peace of mind to probate and trust clients across Nevada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Trust Service */}
            <article
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="text-center mb-6">
                <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2" itemProp="name">
                  Trust Property Sales
                </h3>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-4">trust</div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4" itemProp="description">
                Real property held in trust, managed by a successor trustee for the benefit of
                beneficiaries, requires specialized expertise to navigate successfully. Trust sales
                in Nevada are governed by state laws and often involve court proceedings, making
                astute management by a probate realtor essential to safeguard the assets for the
                long-term benefit of the beneficiaries.
              </p>

              <div className="mt-6">
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm"
                >
                  Learn More About Trust Sales
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>

            {/* Probate Service */}
            <article
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-green-600"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="text-center mb-6">
                <Gavel className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2" itemProp="name">
                  Probate Property Sales
                </h3>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-4">probate</div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4" itemProp="description">
                Probate, a legal process overseeing the distribution of assets, including real
                property, to heirs, can be intricate and highly regulated according to{' '}
                <Link
                  href="/resources/nevada-probate-guide/"
                  className="text-green-600 hover:underline"
                >
                  Nevada probate law
                </Link>
                . In this supervised court procedure, the transfer of legal title for real property
                to a buyer involves specific disclosures, procedural requirements, and critical
                deadlines. The ultimate objective of these real estate sales is to benefit the
                estate and we are here to ensure this probate process is as seamless and
                advantageous as possible.
              </p>

              <div className="mt-6">
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-800 font-semibold text-sm"
                >
                  Learn More About Probate Sales
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>

            {/* Conservatorship Service */}
            <article
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-purple-600"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="text-center mb-6">
                <Shield className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2" itemProp="name">
                  Conservatorship Property Sales
                </h3>
                <div className="text-sm text-gray-500 uppercase tracking-wide mb-4">
                  conservatorship
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4" itemProp="description">
                When an individual is unable to manage their own care or assets, the court may
                appoint a responsible party as a conservator. This conservator assumes a fiduciary
                responsibility, often necessitating the sale of real property for the benefit of the
                conservatee. Similar to trust and probate proceedings, the sale of real property
                through conservatorship occurs through a closely monitored legal process. We provide
                expert guidance to ensure that these transactions are executed with precision and
                result in the best possible outcome for all involved parties.
              </p>

              <div className="mt-6">
                <Link
                  href="/services/"
                  className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold text-sm"
                >
                  Learn More About Conservatorship Sales
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* The Probate Process Guide Section */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                THE PROBATE PROCESS GUIDE
              </h2>
              <div className="text-xl text-gray-600">Trustprobate Process Guide</div>
            </div>

            {/* Director Profile */}
            <article
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-xl"
              itemScope
              itemType="https://schema.org/Person"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Director Info */}
                <div className="space-y-6">
                  <div>
                    <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold mb-4">
                      Director of Probate
                    </div>
                    <h3
                      className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                      itemProp="name"
                    >
                      NANCY SANBORN
                    </h3>
                    <div className="text-xl text-gray-600 font-medium" itemProp="jobTitle">
                      Director of Trust & Probate
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-700 leading-relaxed" itemProp="description">
                    <p>
                      In the fiercely competitive{' '}
                      <Link href="/locations/las-vegas/" className="text-blue-600 hover:underline">
                        Las Vegas
                      </Link>{' '}
                      and{' '}
                      <Link href="/locations/" className="text-blue-600 hover:underline">
                        Nevada real estate market
                      </Link>
                      , <span className="font-semibold text-gray-900">Nancy Sanborn</span> stands as
                      a formidable force and one of the industry's most consistent and reliable
                      sales professionals.
                    </p>

                    <p>
                      Through a career spanning over{' '}
                      <span className="font-semibold text-gray-900">three decades</span>, Nancy has
                      cultivated an extensive network and built a team that delivers informed
                      representation to an impressive roster of repeat and referral clients
                      throughout{' '}
                      <Link href="/locations/" className="text-blue-600 hover:underline">
                        Clark County
                      </Link>{' '}
                      and all of Nevada.
                    </p>

                    <p>
                      Her expertise in{' '}
                      <span className="font-semibold text-gray-900">
                        trust, conservatorship, and probate transactions
                      </span>{' '}
                      has made her the trusted choice for some of Nevada's most prestigious
                      attorneys, accountants, trustees, administrators, and distinguished property
                      owners. She specializes in{' '}
                      <Link href="/services/" className="text-blue-600 hover:underline">
                        probate real estate services
                      </Link>{' '}
                      and{' '}
                      <Link
                        href="/resources/nevada-probate-guide/"
                        className="text-blue-600 hover:underline"
                      >
                        Nevada probate law compliance
                      </Link>
                      .
                    </p>
                  </div>

                  {/* Credentials */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">30+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600">1000+</div>
                      <div className="text-sm text-gray-600">Transactions</div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <SiteImage
                    imageId="consultationRoom"
                    width={640}
                    height={640}
                    className="aspect-square w-full object-cover"
                    alt="Trust and probate consultation office, Las Vegas Nevada"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-slate-900/80 p-4 text-center text-white">
                    <div className="text-lg font-semibold">Probate consultation room</div>
                    <div className="text-sm text-blue-100">400 S 4th St suite 250 b, Las Vegas</div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Resources & Information
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/services/"
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary-600"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Services</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive probate real estate services including court confirmation sales,
                  independent administration, and trust administration.
                </p>
              </Link>
              <Link
                href="/resources/nevada-probate-guide/"
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-600"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nevada Probate Guide</h3>
                <p className="text-gray-600 text-sm">
                  Complete guide to Nevada probate law, timelines, costs, and procedures for probate
                  real estate sales.
                </p>
              </Link>
              <Link
                href="/faq/"
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-600"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h3>
                <p className="text-gray-600 text-sm">
                  Common questions about probate, trust, and conservatorship real estate sales in
                  Nevada.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Probate Division Questions
            </h2>
            <FAQ />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Work with Our Probate Real Estate Division?
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Contact our team of experienced professionals to learn how we can help you navigate
              probate, trust, or conservatorship real estate transactions with confidence and
              expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <a
                href={SITE_PHONE_TEL_HREF}
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call {SITE_PHONE_DISPLAY}
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center gap-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              >
                <MapPin className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
