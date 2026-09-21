'use client';

import { ArrowRight, Calculator, CheckCircle, DollarSign, Info } from 'lucide-react';
import { useState } from 'react';
import SectionVisual from '@/components/SectionVisual';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const courtFees = {
  filingFee: {
    under100k: 435,
    over100k: 1195,
    over500k: 1195,
    over1m: 1195,
  },
  publicationFee: 150,
  certifiedCopies: 15,
  additionalCopies: 5,
};

const attorneyFees = {
  simplified: {
    flat: 1500,
    hourly: 250,
  },
  standard: {
    flat: 3500,
    hourly: 300,
  },
  complex: {
    flat: 7500,
    hourly: 350,
  },
};

const realEstateCommissions = {
  standard: 0.06, // 6%
  luxury: 0.05, // 5%
  probate: 0.07, // 7% for probate properties
};

const additionalCosts = {
  appraisal: 500,
  propertyInsurance: 1200, // annual
  utilities: 200, // monthly
  maintenance: 300, // monthly
  cleaning: 500,
  repairs: 1000, // estimated
  titleInsurance: 0.005, // 0.5% of sale price
  escrowFees: 0.002, // 0.2% of sale price
};

type EstateSize = 'under100k' | 'over100k' | 'over500k' | 'over1m';
type ProbateComplexity = 'simple' | 'standard' | 'complex';

const estateSizeCategories = [
  {
    label: 'Under $100,000',
    value: 'under100k' as EstateSize,
    description: 'Simplified probate available',
  },
  {
    label: '$100,000 - $500,000',
    value: 'over100k' as EstateSize,
    description: 'Standard probate process',
  },
  {
    label: '$500,000 - $1,000,000',
    value: 'over500k' as EstateSize,
    description: 'Standard probate process',
  },
  {
    label: 'Over $1,000,000',
    value: 'over1m' as EstateSize,
    description: 'Complex probate process',
  },
];

const probateComplexity = [
  {
    label: 'Simple',
    value: 'simple' as ProbateComplexity,
    description: 'Single heir, no disputes, clear title',
  },
  {
    label: 'Standard',
    value: 'standard' as ProbateComplexity,
    description: 'Multiple heirs, some complexity',
  },
  {
    label: 'Complex',
    value: 'complex' as ProbateComplexity,
    description: 'Multiple heirs, disputes, unclear title',
  },
];

export default function ProbateCostCalculator() {
  const [estateValue, setEstateValue] = useState(500000);
  const [estateSize, setEstateSize] = useState<EstateSize>('over100k');
  const [complexity, setComplexity] = useState<ProbateComplexity>('standard');
  const [propertyValue, setPropertyValue] = useState(400000);
  const [timeline, setTimeline] = useState(8);
  const [hasRealEstate, setHasRealEstate] = useState(true);
  const [multipleHeirs, setMultipleHeirs] = useState(true);
  const [hasDisputes, setHasDisputes] = useState(false);

  // Calculate costs based on inputs
  const calculateCosts = () => {
    const costs = {
      court: 0,
      attorney: 0,
      realEstate: 0,
      additional: 0,
      total: 0,
    };

    // Court fees
    costs.court =
      courtFees.filingFee[estateSize] + courtFees.publicationFee + courtFees.certifiedCopies * 5;

    // Attorney fees
    if (estateSize === 'under100k') {
      costs.attorney = attorneyFees.simplified.flat;
    } else if (complexity === 'simple') {
      costs.attorney = attorneyFees.standard.flat;
    } else if (complexity === 'complex') {
      costs.attorney = attorneyFees.complex.flat + attorneyFees.complex.hourly * 20; // Additional hours
    } else {
      costs.attorney = attorneyFees.standard.flat + attorneyFees.standard.hourly * 10; // Additional hours
    }

    // Real estate commissions
    if (hasRealEstate) {
      const commissionRate =
        propertyValue > 1000000 ? realEstateCommissions.luxury : realEstateCommissions.probate;
      costs.realEstate = propertyValue * commissionRate;
    }

    // Additional costs
    costs.additional =
      additionalCosts.appraisal +
      (additionalCosts.propertyInsurance / 12) * timeline +
      additionalCosts.utilities * timeline +
      additionalCosts.maintenance * timeline +
      additionalCosts.cleaning +
      additionalCosts.repairs;

    if (hasRealEstate) {
      costs.additional +=
        propertyValue * additionalCosts.titleInsurance + propertyValue * additionalCosts.escrowFees;
    }

    costs.total = costs.court + costs.attorney + costs.realEstate + costs.additional;

    return costs;
  };

  const costs = calculateCosts();
  const percentageOfEstate = (costs.total / estateValue) * 100;

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calculator className="h-4 w-4" />
            Cost Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Nevada Probate Cost Calculator
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Estimate the total costs of probate in Nevada with Dr. Jan Duffy's comprehensive cost
            calculator. Understand all fees and expenses upfront.
          </p>
          <div className="mt-8 max-w-4xl mx-auto">
            <SectionVisual imageId="probateCostCalculator" className="h-48 md:h-64" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-secondary-900 mb-6">Estate Information</h3>

              {/* Estate Value */}
              <div className="mb-6">
                <label
                  htmlFor="estateValue"
                  className="block text-sm font-medium text-secondary-700 mb-2"
                >
                  Total Estate Value
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    id="estateValue"
                    type="number"
                    value={estateValue}
                    onChange={(e) => setEstateValue(Number(e.target.value))}
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="500000"
                  />
                </div>
                <p className="text-xs text-secondary-500 mt-1">
                  Include all assets: real estate, bank accounts, investments, personal property
                </p>
              </div>

              {/* Estate Size Category */}
              <div className="mb-6">
                <label
                  htmlFor="estateSize"
                  className="block text-sm font-medium text-secondary-700 mb-2"
                >
                  Estate Size Category
                </label>
                <select
                  id="estateSize"
                  name="estateSize"
                  value={estateSize}
                  onChange={(e) => setEstateSize(e.target.value as EstateSize)}
                  aria-label="Estate size category"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {estateSizeCategories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label} - {category.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* Probate Complexity */}
              <div className="mb-6">
                <label
                  htmlFor="complexity"
                  className="block text-sm font-medium text-secondary-700 mb-2"
                >
                  Probate Complexity
                </label>
                <select
                  id="complexity"
                  name="complexity"
                  value={complexity}
                  onChange={(e) => setComplexity(e.target.value as ProbateComplexity)}
                  aria-label="Probate complexity level"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {probateComplexity.map((level) => (
                    <option key={level.value} value={level.value}>
                      {level.label} - {level.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* Property Information */}
              {hasRealEstate && (
                <>
                  <div className="mb-6">
                    <label
                      htmlFor="propertyValue"
                      className="block text-sm font-medium text-secondary-700 mb-2"
                    >
                      Real Estate Value
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500">$</span>
                      <input
                        id="propertyValue"
                        type="number"
                        value={propertyValue}
                        onChange={(e) => setPropertyValue(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="400000"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium text-secondary-700 mb-2"
                    >
                      Expected Timeline (months)
                    </label>
                    <input
                      id="timeline"
                      type="number"
                      value={timeline}
                      onChange={(e) => setTimeline(Number(e.target.value))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="8"
                    />
                  </div>
                </>
              )}

              {/* Additional Factors */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="hasRealEstate"
                    checked={hasRealEstate}
                    onChange={(e) => setHasRealEstate(e.target.checked)}
                    className="w-4 h-4 text-primary-700 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="hasRealEstate" className="text-sm text-secondary-700">
                    Includes real estate
                  </label>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="multipleHeirs"
                    checked={multipleHeirs}
                    onChange={(e) => setMultipleHeirs(e.target.checked)}
                    className="w-4 h-4 text-primary-700 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="multipleHeirs" className="text-sm text-secondary-700">
                    Multiple heirs involved
                  </label>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="hasDisputes"
                    checked={hasDisputes}
                    onChange={(e) => setHasDisputes(e.target.checked)}
                    className="w-4 h-4 text-primary-700 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="hasDisputes" className="text-sm text-secondary-700">
                    Potential disputes or challenges
                  </label>
                </div>
              </div>
            </div>

            {/* Dr. Duffy's Cost-Saving Tips */}
            <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl p-6 border border-accent-200">
              <h4 className="font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                <Info className="h-5 w-5 text-accent-600" />
                Dr. Duffy's Cost-Saving Tips
              </h4>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Simplified Probate:</strong> Estates under $100,000 qualify for faster,
                    cheaper process
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Efficient Process:</strong> Dr. Duffy's expertise can reduce timeline by
                    30-40%
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Property Value:</strong> Professional management maximizes sale price,
                    offsetting costs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Court Compliance:</strong> Avoid costly mistakes and delays
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cost Breakdown */}
          <div className="space-y-6">
            {/* Total Cost Summary */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Total Estimated Cost</h3>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  ${costs.total.toLocaleString()}
                </div>
                <p className="text-white">{percentageOfEstate.toFixed(1)}% of total estate value</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1">${costs.court.toLocaleString()}</div>
                  <div className="text-white text-sm">Court Fees</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">${costs.attorney.toLocaleString()}</div>
                  <div className="text-white text-sm">Legal Fees</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">
                    ${costs.realEstate.toLocaleString()}
                  </div>
                  <div className="text-white text-sm">Real Estate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">
                    ${costs.additional.toLocaleString()}
                  </div>
                  <div className="text-white text-sm">Additional</div>
                </div>
              </div>
            </div>

            {/* Detailed Cost Breakdown */}
            <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
              <h4 className="font-semibold text-secondary-900 mb-4">Detailed Cost Breakdown</h4>

              <div className="space-y-4">
                {/* Court Fees */}
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-secondary-700">Court Fees</span>
                    <span className="font-semibold text-secondary-900">
                      ${costs.court.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm text-secondary-500">
                    Filing: ${courtFees.filingFee[estateSize]}, Publication: $
                    {courtFees.publicationFee}, Copies: ${courtFees.certifiedCopies * 5}
                  </div>
                </div>

                {/* Attorney Fees */}
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-secondary-700">Legal Fees</span>
                    <span className="font-semibold text-secondary-900">
                      ${costs.attorney.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm text-secondary-500">
                    {complexity === 'simple'
                      ? 'Standard probate process'
                      : complexity === 'complex'
                        ? 'Complex probate with additional hours'
                        : 'Standard probate with additional hours'}
                  </div>
                </div>

                {/* Real Estate */}
                {hasRealEstate && (
                  <div className="border-b border-gray-200 pb-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-secondary-700">Real Estate Commission</span>
                      <span className="font-semibold text-secondary-900">
                        ${costs.realEstate.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-sm text-secondary-500">
                      {propertyValue > 1000000 ? '5% luxury rate' : '7% probate rate'} on $
                      {propertyValue.toLocaleString()}
                    </div>
                  </div>
                )}

                {/* Additional Costs */}
                <div className="border-b border-gray-200 pb-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-secondary-700">Additional Costs</span>
                    <span className="font-semibold text-secondary-900">
                      ${costs.additional.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm text-secondary-500">
                    Appraisal, insurance, utilities, maintenance, repairs, title insurance
                  </div>
                </div>

                {/* Total */}
                <div className="pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg text-secondary-900">
                      Total Estimated Cost
                    </span>
                    <span className="font-bold text-2xl text-primary-700">
                      ${costs.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Comparison */}
            <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
              <h4 className="font-semibold text-secondary-900 mb-4">Cost Comparison</h4>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary-600">Without Dr. Duffy's expertise:</span>
                  <span className="font-semibold text-red-600">
                    ${(costs.total * 1.4).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-secondary-600">With Dr. Duffy's expertise:</span>
                  <span className="font-semibold text-green-600">
                    ${costs.total.toLocaleString()}
                  </span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Potential savings:</span>
                    <span className="font-semibold text-green-600">
                      ${(costs.total * 0.4).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl p-8 md:p-12 border border-accent-100">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Ready to Get an Accurate Cost Estimate?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Dr. Jan Duffy provides personalized cost estimates and helps you minimize probate
              expenses while maximizing your property's value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://drjanduffy.realscout.com/onboarding"
                className="btn-primary inline-flex items-center gap-2"
              >
                Get Free Cost Estimate
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href={SITE_PHONE_TEL_HREF} className="btn-outline inline-block">
                Call {SITE_PHONE_DISPLAY}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-secondary-600">
              <span className="flex items-center gap-2">
                <Calculator className="h-4 w-4 text-primary-700" />
                Accurate Estimates
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent-600" />
                Cost-Saving Strategies
              </span>
              <span className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-green-600" />
                Value Maximization
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
