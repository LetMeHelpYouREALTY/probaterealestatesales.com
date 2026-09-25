'use client';

import { useEffect, useRef } from 'react';
import { CALENDLY_SCHEDULE_URL } from '@/config/calendly';

type CalendlyInlineEmbedProps = {
  /**
   * Fixed height of the embed container in px. Calendly’s iframe expects a parent with explicit
   * `height` (not only `min-height`), or the widget can collapse to a thin strip with scrollbars.
   */
  height?: number;
  className?: string;
  /** Accessible label for the scheduling region. */
  ariaLabel?: string;
};

/**
 * Inline Calendly widget. Initializes via `initInlineWidget` after `widget.js` loads (avoids race
 * with declarative `.calendly-inline-widget`).
 */
export function CalendlyInlineEmbed({
  height = 700,
  className = '',
  ariaLabel = 'Calendly scheduling',
}: CalendlyInlineEmbedProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const didInitRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const tryInit = (): boolean => {
      if (didInitRef.current || !containerRef.current) return true;
      const Calendly = typeof window !== 'undefined' ? window.Calendly : undefined;
      if (!Calendly?.initInlineWidget) return false;
      containerRef.current.innerHTML = '';
      Calendly.initInlineWidget({
        url: CALENDLY_SCHEDULE_URL,
        parentElement: containerRef.current,
      });
      didInitRef.current = true;
      return true;
    };

    if (tryInit()) return;

    const interval = window.setInterval(() => {
      if (tryInit()) {
        window.clearInterval(interval);
      }
    }, 100);

    const timeout = window.setTimeout(() => {
      window.clearInterval(interval);
    }, 15000);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className={`block w-full ${className}`.trim()}
      style={{ minWidth: 320, height, minHeight: height }}
      aria-label={ariaLabel}
    />
  );
}
