import { AlertTriangle, ArrowRight, CheckCircle, Clock, Gavel, Shield } from 'lucide-react';
import SectionVisual from '@/components/SectionVisual';

const nevadaStatutes = [
  {
    statute: 'NRS 136.010',
    title: 'Probate Jurisdiction',
    description: 'Establishes probate court jurisdiction over estate administration',
    keyPoints: [
      'Clark County District Court has exclusive probate jurisdiction',
      'All probate matters must be filed in the county where decedent resided',
      'Court appoints executors and administrators',
      'Court supervises estate administration process',
    ],
    drDuffyGuidance: 'Dr. Duffy ensures all filings are made in the correct jurisdiction and court',
  },
  {
    statute: 'NRS 136.020',
    title: 'Letters of Administration',
    description: 'Defines requirements for obtaining letters of administration',
    keyPoints: [
      'Executor must be 18+ years old and mentally competent',
      'Non-resident executors must appoint local agent',
      'Court may require bond for non-resident executors',
      'Letters issued after court hearing and approval',
    ],
    drDuffyGuidance: 'Dr. Duffy assists with executor qualification and bond requirements',
  },
  {
    statute: 'NRS 136.050',
    title: 'Inventory Requirements',
    description: 'Specifies what must be included in estate inventory',
    keyPoints: [
      'Must be filed within 90 days of appointment',
      'Include all real and personal property',
      'List property values and locations',
      'Submit to court with supporting documentation',
    ],
    drDuffyGuidance: 'Dr. Duffy prepares comprehensive property inventory for court submission',
  },
  {
    statute: 'NRS 136.060',
    title: 'Creditor Claims',
    description: 'Establishes creditor claim period and procedures',
    keyPoints: [
      '4-month claim period from first publication',
      'Creditors must file claims in writing',
      'Executor must review and pay valid claims',
      'Claims barred after statutory period expires',
    ],
    drDuffyGuidance: 'Dr. Duffy coordinates creditor notification and claim processing',
  },
  {
    statute: 'NRS 136.070',
    title: 'Property Sales',
    description: 'Governs sale of estate property during probate',
    keyPoints: [
      'Court order required before property sale',
      'Property must be appraised by court-appointed appraiser',
      'Sale proceeds become estate assets',
      'Court approval required for sale contract',
    ],
    drDuffyGuidance: 'Dr. Duffy handles entire sales process with court compliance',
  },
  {
    statute: 'NRS 136.080',
    title: 'Final Accounting',
    description: 'Requires final accounting before estate closing',
    keyPoints: [
      'Must account for all income and expenses',
      'Include property sales and distributions',
      'File with court for approval',
      'Required before final distribution to heirs',
    ],
    drDuffyGuidance: 'Dr. Duffy ensures accurate accounting and court approval',
  },
];

const simplifiedProbate = {
  title: 'Simplified Probate (Estates Under $100,000)',
  description: 'Nevada offers simplified probate for smaller estates',
  requirements: [
    'Total estate value under $100,000',
    'No real estate involved',
    'Filing fee: $435 (vs. $1,195 for standard probate)',
    'Timeline: 30-60 days (vs. 6-8 months)',
    'No court hearing required',
    'Affidavit-based process',
  ],
  drDuffyGuidance:
    'Dr. Duffy determines if your estate qualifies for simplified probate and guides you through the process',
};

const probateTimeline = [
  {
    phase: 'Filing Phase',
    duration: 'Days 1-30',
    requirements: [
      'File petition for probate',
      'Pay filing fees',
      'Publish notice to creditors',
      'Serve notice to heirs',
    ],
    nevadaSpecific: 'Clark County filing fee: $1,195 for estates over $100,000',
  },
  {
    phase: 'Court Proceedings',
    duration: 'Days 31-60',
    requirements: [
      'Attend probate hearing',
      'Receive letters of administration',
      'File inventory with court',
      'Post bond if required',
    ],
    nevadaSpecific: 'Court hearings typically scheduled 4-6 weeks after filing',
  },
  {
    phase: 'Administration',
    duration: 'Days 61-180',
    requirements: [
      'Manage estate assets',
      'Handle creditor claims',
      'Prepare property for sale',
      'Obtain court order to sell',
    ],
    nevadaSpecific: 'Creditor claim period: 4 months from first publication',
  },
  {
    phase: 'Property Sale',
    duration: 'Days 181-240',
    requirements: [
      'List and market property',
      'Accept and negotiate offers',
      'Submit sale contract to court',
      'Close property sale',
    ],
    nevadaSpecific: 'Property must be appraised by court-appointed appraiser',
  },
  {
    phase: 'Final Distribution',
    duration: 'Days 241-270',
    requirements: [
      'File final accounting',
      'Pay remaining expenses',
      'Distribute to heirs',
      'Close estate',
    ],
    nevadaSpecific: 'Final accounting must be approved by court before distribution',
  },
];

const commonMistakes = [
  {
    mistake: 'Missing filing deadlines',
    consequence: 'Court may dismiss case or impose penalties',
    prevention: 'Dr. Duffy tracks all deadlines and ensures timely compliance',
    statute: 'NRS 136.050',
  },
  {
    mistake: 'Incomplete inventory',
    consequence: 'Court may require additional filings or hearings',
    prevention: 'Dr. Duffy conducts thorough property assessment and documentation',
    statute: 'NRS 136.050',
  },
  {
    mistake: 'Selling property without court order',
    consequence: 'Sale may be voided and executor held liable',
    prevention: 'Dr. Duffy secures court approval before any property transactions',
    statute: 'NRS 136.070',
  },
  {
    mistake: 'Ignoring creditor claims',
    consequence: 'Executor may be personally liable for valid claims',
    prevention: 'Dr. Duffy properly notifies creditors and processes all claims',
    statute: 'NRS 136.060',
  },
  {
    mistake: 'Inadequate record keeping',
    consequence: 'Court may require additional accounting or delay closing',
    prevention: 'Dr. Duffy maintains comprehensive records throughout the process',
    statute: 'NRS 136.080',
  },
];

export default function NevadaProbateLaws() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Gavel className="h-4 w-4" />
            Nevada Probate Law
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Understanding Nevada Probate Laws
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Dr. Jan Duffy explains the key Nevada Revised Statutes (NRS) that govern probate
            proceedings and how they affect your estate administration.
          </p>
          <div className="mt-8 max-w-4xl mx-auto">
            <SectionVisual imageId="courtGavel" className="h-48 md:h-64" />
          </div>
        </div>

        {/* Key Statutes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Key Nevada Probate Statutes
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {nevadaStatutes.map((statute) => (
              <div
                key={statute.statute}
                className="bg-white rounded-xl shadow-soft p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Statute Header */}
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {statute.statute}
                    </span>
                    <span className="text-sm text-secondary-500">Nevada Revised Statute</span>
                  </div>
                  <h4 className="text-lg font-semibold text-secondary-900 mb-2">{statute.title}</h4>
                  <p className="text-sm text-secondary-600">{statute.description}</p>
                </div>

                {/* Key Points */}
                <div className="mb-4">
                  <h5 className="font-medium text-secondary-800 mb-2">Key Points:</h5>
                  <ul className="space-y-1">
                    {statute.keyPoints.map((point) => (
                      <li key={point} className="text-sm text-secondary-600 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dr. Duffy's Guidance */}
                <div className="bg-accent-50 rounded-lg p-3 border border-accent-200">
                  <p className="text-xs text-accent-800 leading-relaxed">
                    <strong>Dr. Duffy's Guidance:</strong> {statute.drDuffyGuidance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simplified Probate */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                {simplifiedProbate.title}
              </h3>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                {simplifiedProbate.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-secondary-900 mb-4">Requirements:</h4>
                <ul className="space-y-2">
                  {simplifiedProbate.requirements.map((requirement) => (
                    <li
                      key={requirement}
                      className="text-sm text-secondary-600 flex items-start gap-2"
                    >
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold text-secondary-900 mb-3">Dr. Duffy's Assessment:</h4>
                <p className="text-sm text-secondary-600 leading-relaxed">
                  {simplifiedProbate.drDuffyGuidance}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Probate Timeline with Nevada Requirements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Nevada Probate Timeline & Requirements
          </h3>

          <div className="space-y-6">
            {probateTimeline.map((phase) => (
              <div
                key={phase.phase}
                className="bg-white rounded-xl shadow-soft p-6 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-8 w-8 text-primary-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-secondary-900">{phase.phase}</h4>
                      <span className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                        {phase.duration}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-medium text-secondary-800 mb-2">
                          General Requirements:
                        </h5>
                        <ul className="space-y-1">
                          {phase.requirements.map((requirement) => (
                            <li
                              key={requirement}
                              className="text-sm text-secondary-600 flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                              {requirement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-medium text-secondary-800 mb-2">Nevada-Specific:</h5>
                        <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                          <p className="text-sm text-yellow-800 leading-relaxed">
                            {phase.nevadaSpecific}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Common Probate Mistakes & How to Avoid Them
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {commonMistakes.map((mistake) => (
              <div
                key={mistake.mistake}
                className="bg-white rounded-xl shadow-soft p-6 border border-gray-100"
              >
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                    {mistake.mistake}
                  </h4>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">
                      Statute: {mistake.statute}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                    <h5 className="font-medium text-red-800 mb-1">Consequence:</h5>
                    <p className="text-sm text-red-700">{mistake.consequence}</p>
                  </div>

                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <h5 className="font-medium text-green-800 mb-1">Prevention:</h5>
                    <p className="text-sm text-green-700">{mistake.prevention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mb-16">
          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Legal Disclaimer</h4>
                <p className="text-sm text-yellow-700 leading-relaxed">
                  This information is for educational purposes only and does not constitute legal
                  advice. Probate laws can be complex and may change. Dr. Jan Duffy works with
                  qualified estate attorneys to ensure compliance with all Nevada probate
                  requirements. Always consult with a qualified attorney for specific legal advice
                  regarding your situation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Help Understanding Nevada Probate Laws?
            </h3>
            <p className="text-xl text-white max-w-2xl mx-auto mb-6">
              Dr. Jan Duffy explains complex legal requirements in simple terms and ensures your
              probate process complies with all Nevada statutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://drjanduffy.realscout.com/onboarding"
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2 group"
              >
                Schedule Free Consultation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resources/nevada-probate-guide/"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-colors inline-block"
              >
                Download Complete Guide
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-white">
              <span className="flex items-center gap-2">
                <Gavel className="h-4 w-4" />
                Legal Compliance
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Court-Approved Process
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Expert Guidance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
