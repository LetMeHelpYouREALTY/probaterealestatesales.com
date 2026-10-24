'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';
import { calendlyUrlFor } from '@/config/calendly';

/**
 * Loads Calendly once; initializes the floating badge. Inline embeds in the footer use the same script.
 */
const BADGE_OPTIONS = {
  text: 'Schedule time with me',
  color: '#0069ff',
  textColor: '#ffffff',
  branding: false,
};

function initBadge(pathname: string | null) {
  if (typeof window === 'undefined' || !window.Calendly) return;
  // The badge is created once per page load; remove it so client-side navigation picks up the new page's event and tags.
  document.querySelector('.calendly-badge-widget')?.remove();
  window.Calendly.initBadgeWidget({ url: calendlyUrlFor(pathname, 'badge'), ...BADGE_OPTIONS });
}

export function CalendlyBadgeScript() {
  const pathname = usePathname();

  useEffect(() => {
    initBadge(pathname);
  }, [pathname]);

  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="afterInteractive"
      onLoad={() => initBadge(pathname)}
    />
  );
}
