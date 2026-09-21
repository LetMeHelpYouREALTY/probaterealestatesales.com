import {
  AlertTriangle,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Gavel,
  Home,
  MapPin,
  Users,
} from 'lucide-react';
import SectionVisual from '@/components/SectionVisual';

const timelineSteps = [
  {
    phase: 'Phase 1: Initial Filing',
    duration: 'Days 1-30',
    title: 'Petition for Probate',
    description: 'File petition with Clark County Probate Court to open the estate',
    requirements: [
      'Death certificate (certified copy)',
      'Original will (if exists)',
      'Petition for probate',
      'Notice of hearing to interested parties',
      'Filing fee ($435 for estates under $100,000)',
    ],
    drDuffyRole: 'Dr. Duffy assists with document preparation and court filing coordination',
    icon: FileText,
    color: 'blue',
  },
  {
    phase: 'Phase 2: Court Proceedings',
    duration: 'Days 31-60',
    title: 'Court Hearing & Appointment',
    description: 'Attend probate hearing and receive court appointment as executor/administrator',
    requirements: [
      'Attend scheduled court hearing',
      'Provide proof of notice to heirs',
      'Receive Letters of Administration/Executorship',
      'Post bond if required by court',
      'File inventory of estate assets',
    ],
    drDuffyRole:
      'Dr. Duffy prepares property inventory and coordinates with court-appointed appraisers',
    icon: Gavel,
    color: 'purple',
  },
  {
    phase: 'Phase 3: Estate Administration',
    duration: 'Days 61-120',
    title: 'Asset Management & Claims',
    description: 'Manage estate assets, pay debts, and handle creditor claims',
    requirements: [
      'Open estate bank account',
      'Notify creditors (4-month claim period)',
      'Pay valid claims and expenses',
      'Maintain property insurance',
      'File estate tax returns if applicable',
    ],
    drDuffyRole:
      'Dr. Duffy manages property maintenance, coordinates repairs, and prepares for sale',
    icon: Home,
    color: 'green',
  },
  {
    phase: 'Phase 4: Property Sale',
    duration: 'Days 121-180',
    title: 'Court-Approved Property Sale',
    description: 'List and sell probate property with court approval',
    requirements: [
      'Obtain court order to sell property',
      'Complete property appraisal',
      'List property with licensed real estate agent',
      'Accept offers and negotiate terms',
      'Submit sale contract to court for approval',
    ],
    drDuffyRole:
      'Dr. Duffy handles entire sales process, from listing to closing, ensuring maximum value',
    icon: DollarSign,
    color: 'yellow',
  },
  {
    phase: 'Phase 5: Final Distribution',
    duration: 'Days 181-210',
    title: 'Estate Closing & Distribution',
    description: 'Close estate, distribute remaining assets to heirs, and file final accounting',
    requirements: [
      'File final accounting with court',
      'Pay remaining expenses and taxes',
      'Distribute net proceeds to heirs',
      'File petition for final discharge',
      'Close estate bank account',
    ],
    drDuffyRole: 'Dr. Duffy ensures smooth closing process and coordinates with title company',
    icon: CheckCircle,
    color: 'green',
  },
];

const nevadaSpecificNotes = [
  {
    title: 'Clark County Probate Court',
    details:
      'Located at 200 Lewis Ave, Las Vegas, NV 89101. All probate matters must be filed here.',
    icon: MapPin,
  },
  {
    title: 'Nevada Probate Timeline',
    details:
      'Nevada allows for simplified probate for estates under $100,000. Standard probate typically takes 6-8 months.',
    icon: Clock,
  },
  {
    title: 'Property Appraisal Requirements',
    details:
      'Nevada requires court-appointed appraisers for probate properties. Dr. Duffy coordinates with approved appraisers.',
    icon: Home,
  },
  {
    title: 'Creditor Claim Period',
    details: 'Creditors have 4 months from first publication to file claims against the estate.',
    icon: AlertTriangle,
  },
];

export default function ProbateTimeline() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="h-4 w-4" />
            Nevada Probate Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Complete Nevada Probate Timeline
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Dr. Jan Duffy guides you through every step of the Nevada probate process, from initial
            filing to final distribution. Understand what to expect and when.
          </p>
          <div className="mt-8 max-w-4xl mx-auto">
            <SectionVisual imageId="probateTimeline" className="h-48 md:h-64" />
          </div>
        </div>

        {/* Timeline Steps */}
        <div className="mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600 hidden md:block" />

            <div className="space-y-12">
              {timelineSteps.map((step) => (
                <div key={step.phase} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg hidden md:block" />

                  <div className="md:ml-16">
                    <div className="bg-white rounded-xl shadow-soft p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                      {/* Phase Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={`w-16 h-16 bg-${step.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}
                        >
                          <step.icon className={`h-8 w-8 text-${step.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                              {step.phase}
                            </span>
                            <span className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-lg text-secondary-600">{step.description}</p>
                        </div>
                      </div>

                      {/* Requirements */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-primary-700" />
                            Court Requirements
                          </h4>
                          <ul className="space-y-2">
                            {step.requirements.map((requirement) => (
                              <li
                                key={`${step.phase}-${requirement.substring(0, 20).replace(/\s+/g, '-').toLowerCase()}`}
                                className="text-sm text-secondary-600 flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                                {requirement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-secondary-900 mb-4 flex items-center gap-2">
                            <Users className="h-5 w-5 text-accent-600" />
                            Dr. Duffy's Role
                          </h4>
                          <div className="bg-accent-50 rounded-lg p-4 border border-accent-200">
                            <p className="text-sm text-accent-800 leading-relaxed">
                              {step.drDuffyRole}
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
        </div>

        {/* Nevada-Specific Information */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Nevada Probate Court Requirements
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {nevadaSpecificNotes.map((note) => (
              <div
                key={note.title}
                className="bg-white rounded-xl shadow-soft p-6 border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <note.icon className="h-6 w-6 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">{note.title}</h4>
                    <p className="text-sm text-secondary-600 leading-relaxed">{note.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Summary */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Total Timeline: 6-8 Months</h3>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Dr. Jan Duffy's expertise can reduce this timeline by 30-40% through efficient court
              coordination and professional property management.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">30 days</div>
              <div className="text-white">Initial Filing</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">60 days</div>
              <div className="text-white">Court Proceedings</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">120 days</div>
              <div className="text-white">Property Sale</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">210 days</div>
              <div className="text-white">Final Distribution</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl p-8 md:p-12 border border-accent-100">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Ready to Start Your Probate Process?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Dr. Jan Duffy will guide you through every step, ensuring compliance with Nevada
              probate laws and maximizing your property's value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://drjanduffy.realscout.com/onboarding"
                className="btn-primary inline-block"
              >
                Schedule Free Consultation
              </a>
              <a href="/resources/nevada-probate-guide/" className="btn-outline inline-block">
                Download Complete Guide
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-secondary-600">
              <span className="flex items-center gap-2">
                <Gavel className="h-4 w-4 text-primary-700" />
                Court-Approved Process
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent-600" />
                Faster Timeline
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                Expert Guidance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
