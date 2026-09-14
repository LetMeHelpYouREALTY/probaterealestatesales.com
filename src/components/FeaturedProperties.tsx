'use client';

/// <reference path="../types/realscout.d.ts" />

import RealScoutScriptLoader from '@/components/RealScoutScriptLoader';

export default function FeaturedProperties() {
  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Featured Probate Homes
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of probate homes available through
            court-approved probate sales. Each probate property offers unique value and potential
            for buyers and investors in Las Vegas.
          </p>
        </div>

        {/* RealScout Widget */}
        <RealScoutScriptLoader>
          <div className="w-full">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
              listing-status="For Sale"
              property-types="MF,SFR,OTHER,LAL"
              price-min="500000"
              price-max="750000"
            />
          </div>
        </RealScoutScriptLoader>

        {/* View All Properties CTA */}
        <div className="text-center mt-12">
          <a
            href="https://drjanduffy.realscout.com/onboarding"
            className="btn-primary inline-block"
          >
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
}
