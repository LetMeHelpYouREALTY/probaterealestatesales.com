'use client';

import { CalendlyScheduleButton } from '@/components/calendly/CalendlyScheduleButton';
import { CALENDLY_SHOWING_URL } from '@/config/calendly';

/** Booking strip placed right after a RealScout listings block. */
export function CalendlyAfterListings({ className = '' }: { className?: string }) {
  return (
    <section
      aria-label="Book a showing with Dr. Jan Duffy"
      className={`mx-auto my-8 flex max-w-4xl flex-col items-center gap-4 rounded-lg border border-gray-200 bg-white px-6 py-6 text-center shadow-sm sm:flex-row sm:justify-between sm:text-left ${className}`.trim()}
    >
      <p className="text-base font-medium text-secondary-900">
        See a property you like? Pick a showing time with Dr. Jan Duffy.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <CalendlyScheduleButton
          eventUrl={CALENDLY_SHOWING_URL}
          medium="after_listings"
          label="Book a showing"
        />
        <CalendlyScheduleButton
          variant="outline"
          medium="after_listings"
          label="Private 15-min call"
        />
      </div>
    </section>
  );
}
