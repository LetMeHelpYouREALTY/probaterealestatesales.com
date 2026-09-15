import { Clock, MapPin, MessageSquare, Navigation, Phone, Star } from 'lucide-react';
import {
  GOOGLE_BUSINESS_REVIEW_URL,
  OFFICE_ADDRESS_LINE,
  OFFICE_GOOGLE_MAPS_DIRECTIONS_URL,
  OFFICE_GOOGLE_MAPS_LISTING_URL,
} from '@/config/site-google';
import {
  GBP_BUSINESS_NAME,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL_HREF,
  SITE_SMS_HREF,
} from '@/lib/site-contact';

type GbpLocalActionsProps = {
  variant?: 'bar' | 'stack';
  className?: string;
};

export default function GbpLocalActions({ variant = 'bar', className = '' }: GbpLocalActionsProps) {
  const actions = [
    {
      href: SITE_PHONE_TEL_HREF,
      label: `Call ${SITE_PHONE_DISPLAY}`,
      short: 'Call',
      icon: Phone,
      external: false,
    },
    {
      href: OFFICE_GOOGLE_MAPS_DIRECTIONS_URL,
      label: 'Directions',
      short: 'Directions',
      icon: Navigation,
      external: true,
    },
    {
      href: GOOGLE_BUSINESS_REVIEW_URL,
      label: 'View Google Reviews',
      short: 'Reviews',
      icon: Star,
      external: true,
    },
    {
      href: OFFICE_GOOGLE_MAPS_LISTING_URL,
      label: 'Google Maps',
      short: 'Maps',
      icon: MapPin,
      external: true,
    },
  ] as const;

  if (variant === 'stack') {
    return (
      <div className={`flex flex-col gap-3 ${className}`}>
        <p className="text-sm font-semibold text-secondary-900">{GBP_BUSINESS_NAME}</p>
        <p className="text-sm text-secondary-600">{OFFICE_ADDRESS_LINE}</p>
        <p className="text-sm text-secondary-600 inline-flex items-center gap-2">
          <Clock className="h-4 w-4" aria-hidden />
          Mon–Fri 8:00 AM–6:00 PM · Sat 9:00 AM–2:00 PM · Sun closed
        </p>
        <div className="flex flex-wrap gap-2">
          {actions.map((action) => (
            <a
              key={action.short}
              href={action.href}
              className="inline-flex items-center gap-2 rounded-md bg-primary-700 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-800 focus-ring"
              {...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={action.label}
            >
              <action.icon className="h-4 w-4" aria-hidden />
              {action.label}
            </a>
          ))}
          <a
            href={SITE_SMS_HREF}
            className="inline-flex items-center gap-2 rounded-md border border-primary-700 px-4 py-2 text-sm font-semibold text-primary-800 hover:bg-primary-50 focus-ring"
            aria-label={`Text ${GBP_BUSINESS_NAME} at ${SITE_PHONE_DISPLAY}`}
          >
            <MessageSquare className="h-4 w-4" aria-hidden />
            Text
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`border-b border-primary-100 bg-primary-50 ${className}`}
      data-gbp-actions="true"
    >
      <div className="container-max flex flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm">
        <p className="text-secondary-800">
          <span className="font-semibold">{GBP_BUSINESS_NAME}</span>
          <span className="hidden sm:inline text-secondary-600"> · {OFFICE_ADDRESS_LINE}</span>
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {actions.map((action) => (
            <a
              key={action.short}
              href={action.href}
              className="inline-flex items-center gap-1 rounded-md bg-white px-3 py-1.5 font-medium text-primary-800 shadow-sm hover:bg-primary-100 focus-ring"
              {...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={action.label}
            >
              <action.icon className="h-3.5 w-3.5" aria-hidden />
              {action.short}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
