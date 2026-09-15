import { ArrowRight, Home, Search } from 'lucide-react';
import Link from 'next/link';
import SiteImage from '@/components/SiteImage';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

export default function HomebuyerListingsStrip() {
  return (
    <section
      className="relative overflow-hidden border-b border-primary-100"
      aria-labelledby="homebuyer-listings-heading"
    >
      <div className="absolute inset-0">
        <SiteImage
          imageId="lasVegasSunset"
          fill
          className="object-cover"
          sizes="100vw"
          alt="Las Vegas home exterior at sunset — probate homes for sale"
        />
        <div className="absolute inset-0 bg-slate-950/70" />
      </div>
      <div className="relative container-max px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center text-white">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium">
            <Home className="h-4 w-4" aria-hidden />
            For homebuyers searching Las Vegas probate listings
          </p>
          <h2 id="homebuyer-listings-heading" className="mt-4 text-3xl font-bold md:text-4xl">
            Search probate homes for sale in Las Vegas
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Court-approved Clark County listings, live search, and a free call with Dr. Jan Duffy at{' '}
            {SITE_PHONE_DISPLAY}.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/probate-homes-for-sale/"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-primary-900 hover:bg-primary-50 focus-ring"
            >
              <Search className="mr-2 h-5 w-5" aria-hidden />
              Browse probate homes
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
            </Link>
            <a
              href={SITE_PHONE_TEL_HREF}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 focus-ring"
            >
              Call {SITE_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
