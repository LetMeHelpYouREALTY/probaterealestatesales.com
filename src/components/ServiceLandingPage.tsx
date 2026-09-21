import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import GbpLocalActions from '@/components/GbpLocalActions';
import PageHero from '@/components/PageHero';
import SchemaMarkup from '@/components/SchemaMarkup';
import SectionVisual from '@/components/SectionVisual';
import SiteImage from '@/components/SiteImage';
import { OFFICE_ADDRESS_LINE } from '@/config/site-google';
import { getServiceImageId } from '@/lib/cloudflare-images';
import { getRelatedServices, type ServicePageContent } from '@/lib/service-pages';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

type ServiceLandingPageProps = {
  service: ServicePageContent;
};

export default function ServiceLandingPage({ service }: ServiceLandingPageProps) {
  const relatedServices = getRelatedServices(service);
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services/' },
    { name: service.title, url: `/services/${service.slug}/` },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <SchemaMarkup
        type="breadcrumb"
        breadcrumbs={breadcrumbs}
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.summary,
          serviceType: service.category,
          url: service.canonicalUrl,
          areaServed: {
            '@type': 'AdministrativeArea',
            name: 'Clark County, Nevada',
          },
          provider: {
            '@id': 'https://www.probaterealestatesales.com/#localbusiness',
          },
        }}
      />

      <PageHero
        title={service.title}
        subtitle={service.summary}
        imageId={getServiceImageId(service.slug)}
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
          {service.category}
        </p>
      </PageHero>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-secondary-900">
            Service Coverage: Las Vegas & Clark County
          </h2>
          <div className="mt-4">
            <SectionVisual imageId="serviceCoverage" className="h-48 md:h-64" />
          </div>
          <p className="mt-4 text-secondary-700">{service.details}</p>
          <p className="mt-4 text-secondary-700">
            Contact: <a href={SITE_PHONE_TEL_HREF}>{SITE_PHONE_DISPLAY}</a>
          </p>
          <p className="text-secondary-700">Office: {OFFICE_ADDRESS_LINE}</p>
          <div className="mt-6">
            <GbpLocalActions variant="stack" />
          </div>
        </div>

        {relatedServices.length > 0 && (
          <div className="mt-8 rounded-xl border bg-gray-50 p-6">
            <h2 className="text-2xl font-semibold text-secondary-900">Related Services</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {relatedServices.map((related) => (
                <li key={related.slug} className="overflow-hidden rounded-lg border bg-white">
                  <div className="relative h-24">
                    <SiteImage
                      imageId={getServiceImageId(related.slug)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
                      {related.category}
                    </p>
                    <Link
                      href={`/services/${related.slug}/`}
                      className="mt-1 block font-semibold text-secondary-900 hover:text-primary-700"
                    >
                      {related.title}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={SITE_PHONE_TEL_HREF}
            className="rounded-md bg-primary-700 px-5 py-3 font-semibold text-white hover:bg-primary-800"
          >
            Call {SITE_PHONE_DISPLAY}
          </a>
          <Link
            href="/contact/"
            className="rounded-md border border-primary-700 px-5 py-3 font-semibold text-primary-700 hover:bg-primary-50"
          >
            Request Consultation
          </Link>
          <Link
            href="/services/"
            className="rounded-md border border-secondary-300 px-5 py-3 font-semibold text-secondary-700 hover:bg-gray-50"
          >
            View All Services
          </Link>
        </div>
      </section>
    </main>
  );
}
