import { ExternalLink, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import PageHero from '@/components/PageHero';
import SchemaMarkup from '@/components/SchemaMarkup';
import {
  getLegalResourcesByGroup,
  googleMapsSearchUrl,
  LEGAL_RESOURCE_GROUPS,
  type LegalResourceGroupId,
} from '@/lib/las-vegas-legal-resources';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const CANONICAL =
  'https://www.probaterealestatesales.com/resources/las-vegas-probate-legal-resources/';

export const metadata: Metadata = {
  title: 'Las Vegas Probate & Estate Legal Resources | Courts & Self-Help | Clark County',
  description: `Directory of Clark County self-help centers, courts, and legal aid in Las Vegas. For probate real estate, call Dr. Jan Duffy: ${SITE_PHONE_DISPLAY}. Not legal advice.`,
  keywords: [
    'Civil Law Self-Help Center Las Vegas',
    'Clark County probate court',
    'Regional Justice Center',
    'Legal Aid Center of Southern Nevada',
    'Las Vegas Justice Court',
    'Dr. Jan Duffy probate real estate',
  ],
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: 'Las Vegas Probate & Estate Legal Resources | Clark County',
    description:
      'Courts, self-help centers, and legal aid for probate and estate matters in Las Vegas and Clark County.',
    type: 'website',
    locale: 'en_US',
    url: CANONICAL,
  },
};

export const revalidate = 86400;

function ResourceCard({
  name,
  role,
  address,
  cityStateZip,
  phone,
  phoneE164,
  hoursNote,
  servicesNote,
  websiteUrl,
  websiteLabel,
}: {
  name: string;
  role: string;
  address: string;
  cityStateZip: string;
  phone?: string;
  phoneE164?: string;
  hoursNote?: string;
  servicesNote?: string;
  websiteUrl?: string;
  websiteLabel?: string;
}) {
  const mapsUrl = googleMapsSearchUrl(address, cityStateZip);

  return (
    <article className="rounded-xl border border-secondary-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-secondary-900">{name}</h3>
      <p className="mt-1 text-sm text-secondary-600">{role}</p>
      <ul className="mt-4 space-y-2 text-sm text-secondary-800">
        <li className="flex gap-2">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden />
          <span>
            {address}, {cityStateZip}
          </span>
        </li>
        {phone && phoneE164 && (
          <li className="flex gap-2">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" aria-hidden />
            <a
              href={`tel:${phoneE164}`}
              className="font-medium text-primary-700 hover:text-primary-900"
            >
              {phone}
            </a>
          </li>
        )}
        {hoursNote && (
          <li className="pl-6 text-secondary-600">
            <span className="sr-only">Hours note: </span>
            {hoursNote}
          </li>
        )}
        {servicesNote && (
          <li className="pl-6 text-secondary-600">
            <span className="sr-only">Services: </span>
            {servicesNote}
          </li>
        )}
      </ul>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-md border border-primary-200 bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary-800 hover:bg-primary-100"
        >
          Directions
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md border border-secondary-200 bg-secondary-50 px-3 py-1.5 text-sm font-medium text-secondary-800 hover:bg-secondary-100"
          >
            {websiteLabel ?? 'Website'}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}

function ResourceSection({ groupId }: { groupId: LegalResourceGroupId }) {
  const meta = LEGAL_RESOURCE_GROUPS.find((g) => g.id === groupId);
  const items = getLegalResourcesByGroup(groupId);
  if (!meta) return null;

  return (
    <section id={groupId} className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-secondary-900">{meta.title}</h2>
      <p className="mt-2 max-w-3xl text-secondary-700">{meta.description}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((e) => (
          <ResourceCard key={e.id} {...e} />
        ))}
      </div>
    </section>
  );
}

export default function LasVegasProbateLegalResourcesPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources/' },
    { name: 'Las Vegas probate legal resources', url: CANONICAL },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is the Civil Law Self-Help Center in Las Vegas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Civil Law Self-Help Center serves the public at the Regional Justice Center campus in downtown Las Vegas (200 Lewis Ave). Hours and services can change, so call (702) 671-4528 or visit the Clark County Courts website before visiting.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Dr. Jan Duffy provide legal advice for probate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dr. Jan Duffy provides probate real estate brokerage services in Las Vegas and Clark County. She is not a law firm. For legal advice, petitions, and court filings, consult a Nevada probate attorney or legal aid if you qualify.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I find a Nevada probate attorney if I need one?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This page lists public courts, self-help, and legal aid—not private law firms. For a licensed Nevada attorney, use the State Bar of Nevada lawyer referral resources. If you may qualify by income, contact Legal Aid Center of Southern Nevada. For selling estate property, a probate-focused real estate agent handles the listing and sale; that role is separate from legal representation.',
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <SchemaMarkup
        type="breadcrumb"
        breadcrumbs={breadcrumbs}
        webPage={{
          name: 'Las Vegas probate and estate legal resources',
          description:
            'Courts, self-help centers, and legal aid for probate-related matters in Las Vegas and Clark County, Nevada.',
          url: CANONICAL,
          dateModified: new Date().toISOString(),
          author: 'Dr. Jan Duffy',
        }}
        customSchema={faqSchema}
      />

      <PageHero
        title="Las Vegas probate & estate legal resources"
        subtitle="Clark County self-help, courts, and legal aid that families often use alongside probate real estate. Use this list to plan visits and calls—always confirm hours and services with each office."
        imageId="courthouse"
      >
        <p className="max-w-3xl text-sm text-white/90">
          <strong className="text-white">Disclaimer:</strong> This page is for general information
          only and is not legal advice. Dr. Jan Duffy is a licensed real estate professional, not an
          attorney. Listing an office here is not an endorsement.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={SITE_PHONE_TEL_HREF}
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-primary-900 hover:bg-primary-50"
          >
            Probate real estate: {SITE_PHONE_DISPLAY}
          </a>
          <Link
            href="/resources/las-vegas-probate-guide/"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
          >
            Las Vegas probate real estate guide
          </Link>
        </div>
      </PageHero>

      <div className="container-max py-12">
        <nav className="mb-12 rounded-lg border border-secondary-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-medium text-secondary-900">On this page</p>
          <ul className="mt-2 flex flex-wrap gap-3 text-sm">
            {LEGAL_RESOURCE_GROUPS.map((g) => (
              <li key={g.id}>
                <a href={`#${g.id}`} className="text-primary-700 hover:text-primary-900">
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-16">
          <ResourceSection groupId="self-help-and-aid" />
          <ResourceSection groupId="courts-and-government" />
        </div>

        <section className="mt-16 rounded-xl border border-secondary-200 bg-white p-8">
          <h2 className="text-xl font-bold text-secondary-900">Common questions</h2>
          <dl className="mt-6 space-y-6">
            <div>
              <dt className="font-semibold text-secondary-900">
                Where is the Civil Law Self-Help Center in Las Vegas?
              </dt>
              <dd className="mt-2 text-secondary-700">
                The Civil Law Self-Help Center serves the public at the Regional Justice Center
                campus in downtown Las Vegas (200 Lewis Ave). Hours and services can change, so call{' '}
                <a href="tel:+17026714528" className="text-primary-700 hover:underline">
                  (702) 671-4528
                </a>{' '}
                or visit the Clark County Courts website before visiting.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-secondary-900">
                Does Dr. Jan Duffy provide legal advice for probate?
              </dt>
              <dd className="mt-2 text-secondary-700">
                Dr. Jan Duffy provides probate real estate brokerage services in Las Vegas and Clark
                County. She is not a law firm. For legal advice, petitions, and court filings,
                consult a Nevada probate attorney or legal aid if you qualify.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-secondary-900">
                How do I find a Nevada probate attorney if I need one?
              </dt>
              <dd className="mt-2 text-secondary-700">
                This page lists public courts, self-help, and legal aid—not private law firms. For a
                licensed Nevada attorney, see the{' '}
                <a
                  href="https://www.nvbar.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-700 hover:underline"
                >
                  State Bar of Nevada
                </a>{' '}
                lawyer referral resources. If you may qualify by income, contact Legal Aid Center of
                Southern Nevada (listed above). For selling estate property, a probate-focused real
                estate agent handles the listing and sale; that is separate from legal
                representation.
              </dd>
            </div>
          </dl>
        </section>

        <section className="mt-8 rounded-xl border border-secondary-200 bg-white p-8">
          <h2 className="text-xl font-bold text-secondary-900">Related resources</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-secondary-700">
            <li>
              <Link
                href="/resources/las-vegas-probate-guide/"
                className="text-primary-700 hover:underline"
              >
                Las Vegas probate real estate guide
              </Link>{' '}
              — timelines, costs, and selling inherited property in Clark County
            </li>
            <li>
              <Link
                href="/resources/nevada-probate-guide/"
                className="text-primary-700 hover:underline"
              >
                Nevada probate guide
              </Link>{' '}
              — statewide overview and Nevada vs. California comparison
            </li>
            <li>
              <Link href="/contact/" className="text-primary-700 hover:underline">
                Contact Dr. Jan Duffy
              </Link>{' '}
              — probate real estate consultation for Las Vegas and Clark County
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
