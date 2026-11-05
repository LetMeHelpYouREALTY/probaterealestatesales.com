'use client';

import { usePathname } from 'next/navigation';
import { CalendlyInlineEmbed } from '@/components/calendly/CalendlyInlineEmbed';
import { CalendlyScheduleButton } from '@/components/calendly/CalendlyScheduleButton';
import { CALENDLY_LISTING_CONSULTATION_URL, calendlyEventForPath } from '@/config/calendly';

/** Site-wide footer: full Calendly inline embed + popup link. */
export function CalendlyFooterInline() {
  const isListingConsultation =
    calendlyEventForPath(usePathname()) === CALENDLY_LISTING_CONSULTATION_URL;
  return (
    <div className="col-span-full mt-10 pt-10 border-t border-secondary-800">
      <h3 className="text-center text-lg font-semibold text-primary-400 mb-1">
        {isListingConsultation
          ? 'Schedule a listing consultation'
          : 'Schedule a 15-minute conversation'}
      </h3>
      <p className="text-center text-secondary-400 text-sm mb-6 max-w-2xl mx-auto">
        Choose a time below, or use the floating button. You can also open the same calendar in a
        popup.
      </p>
      <CalendlyInlineEmbed
        height={700}
        className="mx-auto max-w-4xl rounded-lg border border-secondary-700 bg-secondary-950 shadow-lg"
      />
      <p className="text-center mt-6">
        <CalendlyScheduleButton variant="footerLink" />
      </p>
    </div>
  );
}
