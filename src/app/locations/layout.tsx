/**
 * Locations layout - static neighborhood info + RealScout widgets (streaming via Suspense).
 * PPR requires Next.js canary; Suspense boundaries still stream dynamic content.
 */
export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
