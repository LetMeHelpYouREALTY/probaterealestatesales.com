'use client';

import { Calculator, DollarSign, Home, Phone, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import SectionVisual from '@/components/SectionVisual';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

interface ValuationForm {
  propertyType: 'SFR' | 'MF' | 'CONDO' | 'TOWNHOUSE' | 'OTHER';
  squareFootage: number;
  bedrooms: number;
  bathrooms: number;
  yearBuilt: number;
  condition: 'EXCELLENT' | 'GOOD' | 'FAIR' | 'POOR';
  location: 'PREMIUM' | 'GOOD' | 'AVERAGE' | 'BELOW_AVERAGE';
  lotSize: number;
  hasPool: boolean;
  hasGarage: boolean;
  recentSales: number;
}

interface ValuationResult {
  estimatedValue: number;
  marketRange: {
    low: number;
    high: number;
  };
  factors: {
    positive: string[];
    negative: string[];
  };
  recommendations: string[];
}

export default function PropertyValuationCalculator() {
  const [form, setForm] = useState<ValuationForm>({
    propertyType: 'SFR',
    squareFootage: 2000,
    bedrooms: 3,
    bathrooms: 2,
    yearBuilt: 2000,
    condition: 'GOOD',
    location: 'GOOD',
    lotSize: 6000,
    hasPool: false,
    hasGarage: true,
    recentSales: 450000,
  });

  const [result, setResult] = useState<ValuationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateValuation = () => {
    setIsCalculating(true);

    // Simulate calculation delay
    setTimeout(() => {
      const baseValue = form.recentSales;
      let multiplier = 1.0;

      // Property type adjustments
      const typeMultipliers = {
        SFR: 1.0,
        MF: 0.85,
        CONDO: 0.9,
        TOWNHOUSE: 0.95,
        OTHER: 0.8,
      };
      multiplier *= typeMultipliers[form.propertyType];

      // Size adjustments
      const sizeMultiplier = (form.squareFootage / 2000) ** 0.8;
      multiplier *= sizeMultiplier;

      // Bedroom/bathroom adjustments
      const bedBathMultiplier = 1 + (form.bedrooms - 3) * 0.05 + (form.bathrooms - 2) * 0.03;
      multiplier *= bedBathMultiplier;

      // Age adjustments
      const ageMultiplier = 1 - (2025 - form.yearBuilt) * 0.005;
      multiplier *= Math.max(ageMultiplier, 0.7);

      // Condition adjustments
      const conditionMultipliers = {
        EXCELLENT: 1.15,
        GOOD: 1.0,
        FAIR: 0.9,
        POOR: 0.75,
      };
      multiplier *= conditionMultipliers[form.condition];

      // Location adjustments
      const locationMultipliers = {
        PREMIUM: 1.2,
        GOOD: 1.0,
        AVERAGE: 0.9,
        BELOW_AVERAGE: 0.8,
      };
      multiplier *= locationMultipliers[form.location];

      // Lot size adjustments
      const lotMultiplier = 1 + ((form.lotSize - 6000) / 6000) * 0.1;
      multiplier *= lotMultiplier;

      // Amenity adjustments
      if (form.hasPool) multiplier *= 1.05;
      if (form.hasGarage) multiplier *= 1.03;

      const estimatedValue = Math.round(baseValue * multiplier);
      const marketRange = {
        low: Math.round(estimatedValue * 0.9),
        high: Math.round(estimatedValue * 1.1),
      };

      const factors: {
        positive: string[];
        negative: string[];
      } = {
        positive: [],
        negative: [],
      };

      if (form.condition === 'EXCELLENT') factors.positive.push('Excellent property condition');
      if (form.location === 'PREMIUM') factors.positive.push('Premium location');
      if (form.hasPool) factors.positive.push('Swimming pool');
      if (form.hasGarage) factors.positive.push('Garage included');
      if (form.yearBuilt > 2010) factors.positive.push('Recent construction');

      if (form.condition === 'POOR') factors.negative.push('Property needs significant repairs');
      if (form.location === 'BELOW_AVERAGE') factors.negative.push('Less desirable location');
      if (form.yearBuilt < 1980) factors.negative.push('Older property');
      if (form.squareFootage < 1500) factors.negative.push('Smaller than average size');

      const recommendations = [
        'Consider professional appraisal for accurate valuation',
        'Review recent comparable sales in the area',
        'Factor in any needed repairs or improvements',
        'Consult with local real estate professionals',
      ];

      setResult({
        estimatedValue,
        marketRange,
        factors,
        recommendations,
      });
      setIsCalculating(false);
    }, 1500);
  };

  const handleInputChange = (field: keyof ValuationForm, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
              <Calculator className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Much Is My Inherited Property Worth?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get an instant estimate of your inherited property's value. Our advanced algorithm
              considers location, condition, and market factors.
            </p>
            <div className="mt-8 max-w-4xl mx-auto">
              <SectionVisual imageId="propertyValuation" className="h-48 md:h-64" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <Home className="mr-2 h-6 w-6 text-blue-600" />
                Property Details
              </h3>

              <div className="space-y-6">
                {/* Property Type */}
                <div>
                  <label
                    htmlFor="propertyType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Property Type
                  </label>
                  <select
                    id="propertyType"
                    value={form.propertyType}
                    onChange={(e) => handleInputChange('propertyType', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label="Select property type"
                  >
                    <option value="SFR">Single Family Home</option>
                    <option value="MF">Multi-Family</option>
                    <option value="CONDO">Condominium</option>
                    <option value="TOWNHOUSE">Townhouse</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>

                {/* Basic Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="squareFootage"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Square Footage
                    </label>
                    <input
                      type="number"
                      id="squareFootage"
                      value={form.squareFootage}
                      onChange={(e) =>
                        handleInputChange('squareFootage', parseInt(e.target.value, 10))
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="2000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lotSize"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Lot Size (sq ft)
                    </label>
                    <input
                      type="number"
                      id="lotSize"
                      value={form.lotSize}
                      onChange={(e) => handleInputChange('lotSize', parseInt(e.target.value, 10))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="6000"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="bedrooms"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Bedrooms
                    </label>
                    <input
                      type="number"
                      id="bedrooms"
                      value={form.bedrooms}
                      onChange={(e) => handleInputChange('bedrooms', parseInt(e.target.value, 10))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min="1"
                      max="10"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="bathrooms"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Bathrooms
                    </label>
                    <input
                      type="number"
                      id="bathrooms"
                      value={form.bathrooms}
                      onChange={(e) => handleInputChange('bathrooms', parseInt(e.target.value, 10))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min="1"
                      max="10"
                      step="0.5"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="yearBuilt"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Year Built
                    </label>
                    <input
                      type="number"
                      id="yearBuilt"
                      value={form.yearBuilt}
                      onChange={(e) => handleInputChange('yearBuilt', parseInt(e.target.value, 10))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      min="1900"
                      max="2025"
                    />
                  </div>
                </div>

                {/* Property Condition & Location */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="condition"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Property Condition
                    </label>
                    <select
                      id="condition"
                      value={form.condition}
                      onChange={(e) => handleInputChange('condition', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="EXCELLENT">Excellent</option>
                      <option value="GOOD">Good</option>
                      <option value="FAIR">Fair</option>
                      <option value="POOR">Poor</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Location Quality
                    </label>
                    <select
                      id="location"
                      value={form.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="PREMIUM">Premium</option>
                      <option value="GOOD">Good</option>
                      <option value="AVERAGE">Average</option>
                      <option value="BELOW_AVERAGE">Below Average</option>
                    </select>
                  </div>
                </div>

                {/* Amenities */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="hasPool"
                      checked={form.hasPool}
                      onChange={(e) => handleInputChange('hasPool', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="hasPool" className="ml-2 text-sm text-gray-700">
                      Swimming Pool
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="hasGarage"
                      checked={form.hasGarage}
                      onChange={(e) => handleInputChange('hasGarage', e.target.checked)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="hasGarage" className="ml-2 text-sm text-gray-700">
                      Garage
                    </label>
                  </div>
                </div>

                {/* Recent Sales */}
                <div>
                  <label
                    htmlFor="recentSales"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Recent Comparable Sales in Area
                  </label>
                  <input
                    type="number"
                    id="recentSales"
                    value={form.recentSales}
                    onChange={(e) => handleInputChange('recentSales', parseInt(e.target.value, 10))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="450000"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Enter the sale price of a similar property recently sold in your area
                  </p>
                </div>

                {/* Calculate Button */}
                <button
                  type="button"
                  onClick={calculateValuation}
                  disabled={isCalculating}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  {isCalculating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Calculating...
                    </>
                  ) : (
                    <>
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Calculate Property Value
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Results Display */}
            <div className="space-y-6">
              {!result ? (
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                  <div className="text-gray-400 mb-4">
                    <Calculator className="h-16 w-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Get Your Property Valuation
                  </h3>
                  <p className="text-gray-600">
                    Enter your property details and click calculate to get an instant estimate of
                    your inherited property&apos;s market value.
                  </p>
                </div>
              ) : (
                <>
                  {/* Estimated Value */}
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                      <DollarSign className="mr-2 h-6 w-6 text-green-600" />
                      Estimated Property Value
                    </h3>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        {formatCurrency(result.estimatedValue)}
                      </div>
                      <div className="text-gray-600">
                        Market Range: {formatCurrency(result.marketRange.low)} -{' '}
                        {formatCurrency(result.marketRange.high)}
                      </div>
                    </div>
                  </div>

                  {/* Factors */}
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Value Factors</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {result.factors.positive.length > 0 && (
                        <div>
                          <h4 className="font-medium text-green-700 mb-2">Positive Factors</h4>
                          <ul className="space-y-1">
                            {result.factors.positive.map((factor) => (
                              <li key={factor} className="text-sm text-green-600 flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                {factor}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {result.factors.negative.length > 0 && (
                        <div>
                          <h4 className="font-medium text-red-700 mb-2">Areas for Improvement</h4>
                          <ul className="space-y-1">
                            {result.factors.negative.map((factor) => (
                              <li key={factor} className="text-sm text-red-600 flex items-center">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                                {factor}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommendations</h3>
                    <ul className="space-y-2">
                      {result.recommendations.map((rec) => (
                        <li key={rec} className="text-sm text-gray-600 flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">Need Professional Valuation?</h3>
                    <p className="text-blue-100 mb-4">
                      Get a detailed appraisal and market analysis from our experts
                    </p>
                    <a
                      href={SITE_PHONE_TEL_HREF}
                      className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call {SITE_PHONE_DISPLAY}
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
