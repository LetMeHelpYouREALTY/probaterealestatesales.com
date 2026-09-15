'use client';

/// <reference path="../types/realscout.d.ts" */

import { useRealScoutScript } from '@/hooks/useRealScoutScript';

export interface RealScoutOfficeListingsProps {
  /** RealScout agent encoded ID */
  agentEncodedId?: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  /** Section title */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
  /** Theme color for section styling */
  themeColor?: 'green' | 'blue' | 'slate' | 'amber';
}

/**
 * RealScout Office Listings. Loads the RealScout script only when this component mounts (widget pages only).
 */
export default function RealScoutOfficeListings({
  agentEncodedId = 'QWdlbnQtMjI1MDUw',
  sortOrder = 'PRICE_LOW',
  listingStatus = 'For Sale,For Rent',
  propertyTypes = 'MF,SFR,OTHER,LAL',
  priceMin = '500000',
  priceMax = '750000',
  title = 'Current Las Vegas Properties Available',
  subtitle = 'Browse our current inventory of properties in the Las Vegas area. These properties are available for immediate purchase with our expert guidance.',
  themeColor = 'blue',
}: RealScoutOfficeListingsProps) {
  const scriptLoaded = useRealScoutScript();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {!scriptLoaded ? (
          <div className="bg-gray-100 rounded-xl p-12 border border-gray-200 animate-pulse">
            <div className="h-64 flex items-center justify-center text-gray-500">
              Loading property listings...
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <realscout-office-listings
              agent-encoded-id={agentEncodedId}
              sort-order={sortOrder}
              listing-status={listingStatus}
              property-types={propertyTypes}
              price-min={priceMin}
              price-max={priceMax}
            />
          </div>
        )}
      </div>
    </section>
  );
}
