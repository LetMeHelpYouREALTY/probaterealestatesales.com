import {
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Download,
  FileText,
  Home,
  MapPin,
  Shield,
} from 'lucide-react';
import SectionVisual from '@/components/SectionVisual';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

const checklistCategories = [
  {
    category: 'Immediate Actions (First 30 Days)',
    icon: Clock,
    color: 'red',
    items: [
      {
        task: 'Secure the property immediately',
        description: 'Change locks, secure valuables, and ensure property is safe',
        priority: 'Critical',
        deadline: 'Within 24 hours',
        drDuffyGuidance: 'Dr. Duffy coordinates with locksmiths and security services',
        completed: false,
      },
      {
        task: 'Notify insurance company of death',
        description: "Contact homeowner's insurance to maintain coverage",
        priority: 'Critical',
        deadline: 'Within 48 hours',
        drDuffyGuidance: 'Dr. Duffy ensures continuous coverage during probate',
        completed: false,
      },
      {
        task: 'File petition for probate',
        description: 'Submit required documents to Clark County Probate Court',
        priority: 'Critical',
        deadline: 'Within 30 days',
        drDuffyGuidance: 'Dr. Duffy assists with document preparation and filing',
        completed: false,
      },
      {
        task: 'Obtain death certificates',
        description: 'Order multiple certified copies (minimum 5)',
        priority: 'High',
        deadline: 'Within 7 days',
        drDuffyGuidance: 'Dr. Duffy coordinates with vital records office',
        completed: false,
      },
    ],
  },
  {
    category: 'Property Assessment & Documentation',
    icon: Home,
    color: 'blue',
    items: [
      {
        task: 'Complete property inventory',
        description: 'Document all personal property and real estate assets',
        priority: 'High',
        deadline: 'Within 60 days',
        drDuffyGuidance: 'Dr. Duffy conducts professional property assessment',
        completed: false,
      },
      {
        task: 'Obtain property appraisal',
        description: 'Secure court-appointed appraiser for probate valuation',
        priority: 'High',
        deadline: 'Within 90 days',
        drDuffyGuidance: 'Dr. Duffy coordinates with approved Nevada appraisers',
        completed: false,
      },
      {
        task: 'Document property condition',
        description: 'Photograph and document current property state',
        priority: 'Medium',
        deadline: 'Within 45 days',
        drDuffyGuidance: 'Dr. Duffy creates comprehensive property documentation',
        completed: false,
      },
      {
        task: 'Assess property repairs needed',
        description: 'Identify necessary repairs for maximum sale value',
        priority: 'Medium',
        deadline: 'Within 60 days',
        drDuffyGuidance: 'Dr. Duffy coordinates repair estimates and contractors',
        completed: false,
      },
    ],
  },
  {
    category: 'Legal & Court Requirements',
    icon: FileText,
    color: 'purple',
    items: [
      {
        task: 'Attend probate hearing',
        description: 'Appear in Clark County Probate Court for appointment',
        priority: 'Critical',
        deadline: 'As scheduled by court',
        drDuffyGuidance: 'Dr. Duffy prepares you for court appearance',
        completed: false,
      },
      {
        task: 'Obtain Letters of Administration',
        description: 'Receive official court appointment as executor',
        priority: 'Critical',
        deadline: 'After court hearing',
        drDuffyGuidance: 'Dr. Duffy ensures all court requirements are met',
        completed: false,
      },
      {
        task: 'File inventory with court',
        description: 'Submit detailed asset inventory to probate court',
        priority: 'High',
        deadline: 'Within 90 days of appointment',
        drDuffyGuidance: 'Dr. Duffy prepares court-compliant inventory',
        completed: false,
      },
      {
        task: 'Publish notice to creditors',
        description: 'Publish legal notice in approved newspaper',
        priority: 'High',
        deadline: 'Within 30 days of appointment',
        drDuffyGuidance: 'Dr. Duffy coordinates with legal publication services',
        completed: false,
      },
    ],
  },
  {
    category: 'Property Preparation & Sale',
    icon: DollarSign,
    color: 'green',
    items: [
      {
        task: 'Obtain court order to sell',
        description: 'Secure court permission to list and sell property',
        priority: 'High',
        deadline: 'Before listing property',
        drDuffyGuidance: 'Dr. Duffy prepares and files sale petition',
        completed: false,
      },
      {
        task: 'Coordinate property clean-out',
        description: 'Remove personal belongings and prepare for sale',
        priority: 'Medium',
        deadline: 'Before listing',
        drDuffyGuidance: 'Dr. Duffy coordinates estate sale and clean-out services',
        completed: false,
      },
      {
        task: 'Complete necessary repairs',
        description: 'Address repairs identified in property assessment',
        priority: 'Medium',
        deadline: 'Before listing',
        drDuffyGuidance: 'Dr. Duffy manages repair process and quality control',
        completed: false,
      },
      {
        task: 'List property for sale',
        description: 'Begin marketing with Dr. Jan Duffy as listing agent',
        priority: 'High',
        deadline: 'After court approval',
        drDuffyGuidance: 'Dr. Duffy handles entire sales process professionally',
        completed: false,
      },
    ],
  },
  {
    category: 'Financial Management',
    icon: DollarSign,
    color: 'yellow',
    items: [
      {
        task: 'Open estate bank account',
        description: 'Establish separate account for estate funds',
        priority: 'High',
        deadline: 'Within 30 days of appointment',
        drDuffyGuidance: 'Dr. Duffy coordinates with estate attorneys',
        completed: false,
      },
      {
        task: 'Pay estate expenses',
        description: 'Cover ongoing property costs and maintenance',
        priority: 'High',
        deadline: 'Ongoing',
        drDuffyGuidance: 'Dr. Duffy tracks and documents all expenses',
        completed: false,
      },
      {
        task: 'Handle creditor claims',
        description: 'Review and pay valid creditor claims',
        priority: 'High',
        deadline: 'Within 4 months of publication',
        drDuffyGuidance: 'Dr. Duffy coordinates with estate attorneys',
        completed: false,
      },
      {
        task: 'File estate tax returns',
        description: 'Submit required tax documentation if applicable',
        priority: 'Medium',
        deadline: 'As required by IRS',
        drDuffyGuidance: 'Dr. Duffy coordinates with tax professionals',
        completed: false,
      },
    ],
  },
];

const nevadaSpecificRequirements = [
  {
    title: 'Clark County Probate Court',
    requirement: 'All probate matters must be filed at 200 Lewis Ave, Las Vegas, NV 89101',
    icon: MapPin,
  },
  {
    title: 'Property Appraisal',
    requirement: 'Nevada requires court-appointed appraisers for probate properties',
    icon: Home,
  },
  {
    title: 'Creditor Claims',
    requirement: '4-month claim period from first publication date',
    icon: Clock,
  },
  {
    title: 'Court Approval',
    requirement: 'Property sales require court order before listing',
    icon: Shield,
  },
];

export default function ProbatePropertyChecklist() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FileText className="h-4 w-4" />
            Executor's Checklist
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Complete Probate Property Checklist
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Dr. Jan Duffy's comprehensive checklist ensures you complete every required step of the
            Nevada probate process on time and in compliance with court requirements.
          </p>
          <div className="mt-8 max-w-4xl mx-auto">
            <SectionVisual imageId="propertyChecklist" className="h-48 md:h-64" />
          </div>
        </div>

        {/* Checklist Categories */}
        <div className="mb-16">
          <div className="space-y-8">
            {checklistCategories.map((category) => (
              <div
                key={category.category}
                className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 bg-${category.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <category.icon className={`h-8 w-8 text-${category.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900">{category.category}</h3>
                    <p className="text-secondary-600">
                      Complete these tasks within the specified timeframe
                    </p>
                  </div>
                </div>

                {/* Checklist Items */}
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item) => (
                    <div
                      key={`${category.category}-${item.task.substring(0, 20).replace(/\s+/g, '-').toLowerCase()}`}
                      className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200"
                    >
                      {/* Task Header */}
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex-shrink-0 mt-1">
                          {/* Checkbox would go here in interactive version */}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-secondary-900 mb-2">{item.task}</h4>
                          <p className="text-sm text-secondary-600 mb-3">{item.description}</p>
                        </div>
                      </div>

                      {/* Task Details */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                              item.priority === 'Critical'
                                ? 'bg-red-100 text-red-700'
                                : item.priority === 'High'
                                  ? 'bg-orange-100 text-orange-700'
                                  : 'bg-blue-100 text-blue-700'
                            }`}
                          >
                            {item.priority} Priority
                          </span>
                          <span className="text-xs text-secondary-500">Due: {item.deadline}</span>
                        </div>

                        <div className="bg-accent-50 rounded-lg p-3 border border-accent-200">
                          <p className="text-xs text-accent-800 leading-relaxed">
                            <strong>Dr. Duffy's Guidance:</strong> {item.drDuffyGuidance}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nevada-Specific Requirements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Nevada Probate Court Requirements
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {nevadaSpecificRequirements.map((requirement) => (
              <div
                key={requirement.title}
                className="bg-white rounded-xl shadow-soft p-6 border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <requirement.icon className="h-6 w-6 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900 mb-2">{requirement.title}</h4>
                    <p className="text-sm text-secondary-600 leading-relaxed">
                      {requirement.requirement}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Downloadable Checklist */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border border-primary-100 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Download Your Complete Checklist
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Get a printable version of this checklist to track your progress and ensure nothing is
              missed during the probate process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button type="button" className="btn-primary inline-flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download PDF Checklist
              </button>
              <a href="/resources/nevada-probate-guide/" className="btn-outline inline-block">
                View Complete Guide
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-secondary-600">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary-700" />
                Court-Compliant
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent-600" />
                Timeline-Based
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-600" />
                Nevada-Specific
              </span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-accent-600 to-primary-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Don't Navigate Probate Alone</h3>
            <p className="text-xl text-accent-100 max-w-2xl mx-auto mb-6">
              Dr. Jan Duffy guides you through every step, ensuring compliance with Nevada probate
              laws and protecting your family's interests.
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
                href={SITE_PHONE_TEL_HREF}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                Call {SITE_PHONE_DISPLAY}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-accent-100">
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Court-Approved Process
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Faster Timeline
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
