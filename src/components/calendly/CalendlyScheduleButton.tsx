'use client';

import { Calendar } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { calendlyUrlFor, tagCalendlyUrl } from '@/config/calendly';

type CalendlyScheduleButtonProps = {
  className?: string;
  variant?: 'primary' | 'outline' | 'footerLink';
  /** e.g. close mobile nav after opening Calendly */
  onScheduleClick?: () => void;
  /** Event to book instead of the page default. */
  eventUrl?: string;
  /** utm_medium for this placement. */
  medium?: string;
  label?: string;
};

export function CalendlyScheduleButton({
  className = '',
  variant = 'primary',
  onScheduleClick,
  eventUrl,
  medium = 'button',
  label = 'Schedule time with me',
}: CalendlyScheduleButtonProps) {
  const pathname = usePathname();
  const open = () => {
    onScheduleClick?.();
    const url = eventUrl
      ? tagCalendlyUrl(eventUrl, medium, pathname)
      : calendlyUrlFor(pathname, medium);
    if (typeof window !== 'undefined' && window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url });
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const variantClasses = {
    primary:
      'bg-[#0069ff] text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity shadow-sm focus-visible:ring-offset-white',
    outline:
      'border-2 border-[#0069ff] text-[#0069ff] bg-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors focus-visible:ring-offset-white',
    footerLink:
      'text-primary-300 hover:text-white underline underline-offset-2 text-sm font-medium focus-visible:ring-offset-secondary-900',
  }[variant];

  return (
    <button
      type="button"
      onClick={open}
      className={`inline-flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 rounded-md ${variantClasses} ${className}`}
      aria-label={`${label} with Dr. Jan Duffy using Calendly`}
    >
      <Calendar className="h-4 w-4 shrink-0" aria-hidden />
      {label}
    </button>
  );
}
