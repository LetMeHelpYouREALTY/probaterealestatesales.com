'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'nevada-law' | 'process' | 'legal' | 'financial' | 'timeline' | 'trusts';
}

const faqData: FAQItem[] = [
  // Nevada-Specific Questions
  {
    question: 'How long does probate take in Nevada?',
    answer:
      "Nevada probate typically takes 6-8 months, which is significantly faster than California's 9-18 month process. Clark County has two probate commissioners: James Fontana (Fridays) and Russell Geis (Wednesdays at 9:30 AM). Court orders take about 3 weeks to release. This faster timeline makes Nevada an attractive option for probate property sales. Learn more in our <a href='/blog/nevada-probate-timeline/' class='text-primary-700 hover:text-primary-900 underline'>Nevada Probate Timeline Guide</a> or <a href='/resources/nevada-probate-guide/' class='text-primary-700 hover:text-primary-900 underline'>Complete Nevada Probate Guide</a>.",
    category: 'nevada-law',
  },
  {
    question: 'What is a certificate of incumbency in Nevada?',
    answer:
      "A certificate of incumbency in Nevada is a 5-7 page document (also known as affidavit of successor trustee) that's required after trustors die. It costs $750 from attorneys and must be recorded with Clark County. This document proves your authority as successor trustee and is essential for trust administration and property transfers. Title companies cannot create these documents - only attorneys can. Read our complete guide on <a href='/blog/certificate-of-incumbency/' class='text-primary-700 hover:text-primary-900 underline'>Certificate of Incumbency</a> for detailed information.",
    category: 'nevada-law',
  },
  {
    question: 'How much does probate cost in Las Vegas?',
    answer:
      'Nevada probate costs average $8,000-9,000 in attorney fees. Court costs vary by county: Clark County $1,000, Washoe County $1,300, and rural counties like Esmeralda $850. Trust administration is more affordable at $2,500 and takes only 3 months vs 6-8 months for probate. Certificate of incumbency costs $750.',
    category: 'nevada-law',
  },
  {
    question: "What is Nevada's small estate limit?",
    answer:
      "Nevada's small estate limit is $100,000 (vs California's $184,500). For estates under $25,000, Nevada offers a simplified 'set-aside' procedure that avoids formal probate entirely. This makes Nevada an attractive option for smaller estates and can save significant time and money.",
    category: 'nevada-law',
  },
  {
    question: 'What are the two methods of selling property in Nevada probate?',
    answer:
      'Nevada offers two methods: 1) Court Confirmation - requires court approval for each step, and 2) Independent Administration - gives the personal representative more authority to act without court supervision. Independent administration is faster and more cost-effective but requires family cooperation. The choice depends on your specific situation and family dynamics.',
    category: 'nevada-law',
  },
  {
    question: 'Do I need a certificate of incumbency?',
    answer:
      "Yes, if you're dealing with a trust after the trustors have passed away. The certificate of incumbency proves your authority as successor trustee and is required for property transfers, bank accounts, and other trust assets. Without it, you cannot legally act on behalf of the trust or transfer trust property.",
    category: 'nevada-law',
  },

  // General Questions
  {
    question: 'What is a probate sale?',
    answer:
      "A probate sale is the sale of real estate that occurs when someone passes away and their property needs to be sold as part of the estate settlement process. This typically happens when the deceased person's will requires the property to be sold or when the beneficiaries decide to sell rather than keep the inherited property. Probate sales are court-supervised transactions that ensure fair market value and proper distribution of proceeds.",
    category: 'general',
  },
  {
    question: 'How is a probate sale different from a traditional home sale?',
    answer:
      'Probate sales differ from traditional sales in several key ways: they require court approval before listing, have specific disclosure requirements, often involve multiple beneficiaries who must agree on terms, and may have longer timelines due to court oversight. Additionally, probate sales typically require a licensed real estate agent with probate experience and may have different marketing strategies to attract qualified buyers.',
    category: 'general',
  },
  {
    question: 'Who can sell a probate property?',
    answer:
      'Only the court-appointed executor or administrator of the estate can sell a probate property. This person must be authorized by the probate court and may need to obtain additional court orders depending on the specific circumstances. Beneficiaries cannot sell the property directly unless they are also the executor or administrator.',
    category: 'general',
  },

  // Process Questions
  {
    question: 'What is the step-by-step process for a Nevada probate sale?',
    answer:
      "The Nevada probate sale process involves: 1) Court appointment of executor/administrator, 2) Property appraisal and market analysis, 3) Court petition for sale authorization, 4) Court approval and order (3 weeks to release), 5) Property listing and marketing, 6) Offer acceptance and contract execution, 7) Court confirmation of sale (if required), 8) Closing and distribution of proceeds. Nevada requires approximately 30 documents throughout the process. Learn more about <a href='/blog/clark-county-probate/' class='text-primary-700 hover:text-primary-900 underline'>Clark County Probate Court Procedures</a> or view our <a href='/services/' class='text-primary-700 hover:text-primary-900 underline'>Probate Services</a>.",
    category: 'process',
  },
  {
    question: 'What documents are needed for a Nevada probate sale?',
    answer:
      "Required documents include: death certificate, will (if applicable), letters testamentary or administration, property deed, property appraisal, court order authorizing sale, listing agreement, purchase contract, and court confirmation documents. Nevada's process requires about 30 documents total, which is more than many other states but ensures thorough legal compliance.",
    category: 'process',
  },
  {
    question: 'When can I sign a binding listing agreement?',
    answer:
      'You can only sign a binding listing agreement after obtaining letters testamentary or letters of administration with the court stamp and signature. This cannot be done before obtaining proper court authority. The court order typically takes 3 weeks to release after approval.',
    category: 'process',
  },

  // Trust Administration
  {
    question: 'How does trust administration compare to probate in Nevada?',
    answer:
      'Trust administration in Nevada is significantly faster and more affordable than probate. Trust administration costs $2,500 and takes only 3 months, while probate costs $8,000-9,000 and takes 6-8 months. Trust setup costs $3,500 for a married couple including deed transfer. The key is having proper trust documentation and a certificate of incumbency.',
    category: 'trusts',
  },
  {
    question:
      'What is the difference between a certificate of incumbency and letters testamentary?',
    answer:
      "A certificate of incumbency is used for trust administration and proves you're the successor trustee. Letters testamentary are used for probate and prove you're the executor of the estate. Both documents give you legal authority, but they're used in different contexts. The certificate of incumbency is typically faster to obtain and less expensive.",
    category: 'trusts',
  },
  {
    question: 'Can title companies create certificates of incumbency?',
    answer:
      'No, title companies cannot create valid certificates of incumbency. Only attorneys can create these documents. Title companies can help with the recording process once the document is created, but the legal document itself must come from a qualified attorney familiar with Nevada trust law.',
    category: 'trusts',
  },

  // Legal Questions
  {
    question: 'Do I need an attorney for a Nevada probate sale?',
    answer:
      "While you can represent yourself in probate court, it's highly recommended to work with an experienced Nevada probate attorney, especially for real estate transactions. An attorney can help navigate Nevada's 30-document requirement, ensure compliance with Nevada Revised Statutes, protect your interests, and help avoid costly mistakes that could delay the process.",
    category: 'legal',
  },
  {
    question: 'What happens if there are multiple beneficiaries with different opinions?',
    answer:
      'When multiple beneficiaries disagree on selling a probate property, the court will typically require majority agreement or may appoint a neutral party to make decisions. In Nevada, family dynamics are a key factor that attorneys assess early in the process. Clear communication and professional mediation can often resolve conflicts before they reach court.',
    category: 'legal',
  },
  {
    question: "Can the court force a sale if beneficiaries don't agree?",
    answer:
      "Yes, the court can order a probate sale even if beneficiaries disagree, particularly if the property is deteriorating, generating expenses, or if selling is necessary to pay estate debts or taxes. The court's primary responsibility is to protect the estate's interests and ensure proper administration, which may require overriding beneficiary objections.",
    category: 'legal',
  },

  // Financial Questions
  {
    question: 'What are the total costs involved in a Nevada probate sale?',
    answer:
      "Nevada probate sale costs include: court filing fees ($1,000 in Clark County, $1,300 in Washoe County, $850 in rural counties), attorney fees ($8,000-9,000), real estate agent commissions (5-6%), title insurance ($1,000-3,000), escrow fees ($500-1,500), property taxes and insurance, and potential capital gains taxes. Total costs usually range from 8-12% of the property's sale price.",
    category: 'financial',
  },
  {
    question: 'How is the sale price determined for a probate property?',
    answer:
      'The sale price is determined through professional appraisal and market analysis. The court requires at least one professional appraisal, and often two, to establish fair market value. The property must be listed at or above the appraised value, and any offers below that amount require court approval. The goal is to maximize proceeds for the estate while ensuring a fair market transaction.',
    category: 'financial',
  },
  {
    question: 'What happens to the proceeds from a probate sale?',
    answer:
      "Sale proceeds are distributed according to the deceased person's will or Nevada intestacy laws if no will exists. The proceeds first pay estate debts, taxes, and administrative costs, then are distributed to beneficiaries. The executor is responsible for proper accounting and distribution, with court oversight to ensure compliance with Nevada legal requirements.",
    category: 'financial',
  },

  // Timeline Questions
  {
    question: 'Can I speed up the Nevada probate sale process?',
    answer:
      "Yes, several strategies can expedite the process: hire experienced Nevada professionals early, prepare all 30 required documents in advance, respond promptly to court requests, consider summary probate for estates under $100,000, and maintain open communication with all parties involved. However, court schedules and Nevada's legal requirements set minimum timelines that cannot be bypassed.",
    category: 'timeline',
  },
  {
    question: 'What are the most common delays in Nevada probate sales?',
    answer:
      'Common delays include: court scheduling conflicts (Clark County has only 2 probate commissioners), incomplete documentation (Nevada requires 30 documents), beneficiary disputes, property condition issues, market timing, and creditor claim resolution. Professional Nevada probate real estate agents can help minimize delays by ensuring proper preparation and maintaining court relationships.',
    category: 'timeline',
  },
  {
    question: 'Why does Nevada probate take longer than Colorado?',
    answer:
      "Nevada requires approximately 30 documents throughout the probate process, while Colorado only requires 7 documents. This additional documentation requirement adds time but ensures thorough legal compliance. Nevada's 6-8 month timeline is still significantly faster than California's 9-18 month process, making it a middle ground between efficiency and legal thoroughness.",
    category: 'timeline',
  },
];

const categoryLabels = {
  all: 'All Questions',
  'nevada-law': 'Nevada Law & Process',
  general: 'General Questions',
  process: 'Process & Procedures',
  trusts: 'Trust Administration',
  legal: 'Legal Requirements',
  financial: 'Costs & Finances',
  timeline: 'Timelines & Delays',
};

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQs =
    activeCategory === 'all' ? faqData : faqData.filter((faq) => faq.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 id="faq-heading" className="text-3xl font-bold text-secondary-900 sm:text-4xl mb-4">
            Nevada Probate Real Estate FAQ
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Get answers to the most common questions about probate real estate sales in Nevada. Our
            comprehensive FAQ covers Nevada-specific laws, timelines, and processes.
          </p>
        </div>

        {/* Category Filter */}
        <nav className="flex flex-wrap justify-center gap-2 mb-8" aria-label="FAQ Categories">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === key
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-secondary-700 hover:bg-secondary-100 border border-secondary-300'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => {
            const isOpen = openItems.has(index);
            return (
              <article
                key={`faq-${faq.category}-${index}`}
                className="bg-white rounded-lg shadow-sm border border-secondary-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                  aria-expanded={isOpen ? 'true' : 'false'}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-medium text-secondary-900 pr-4">{faq.question}</h3>
                  <span className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-secondary-500" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-secondary-500" aria-hidden="true" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div id={`faq-answer-${index}`} className="px-6 pb-4">
                    <p
                      className="text-secondary-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 text-center">
          <div className="bg-primary-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-secondary-900 mb-3">
              Need Nevada-Specific Help?
            </h3>
            <p className="text-secondary-600 mb-4">
              Our Nevada probate real estate experts are here to help. Get personalized answers
              about Clark County probate court procedures and Nevada probate law.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SITE_PHONE_TEL_HREF}
                className="text-primary-700 hover:text-primary-900 font-semibold"
              >
                Call Now: {SITE_PHONE_DISPLAY}
              </a>
              <a
                href="https://drjanduffy.realscout.com/onboarding"
                className="inline-flex items-center justify-center px-6 py-3 border border-secondary-300 text-base font-medium rounded-md text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
              >
                Free Consultation
              </a>
            </div>
            <div className="mt-6 pt-6 border-t border-primary-200">
              <p className="text-sm text-secondary-600 mb-3">Looking for more detailed answers?</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="/faq/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary-300 text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  View Complete FAQ Page →
                </a>
                <a
                  href="/resources/nevada-probate-guide/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary-300 text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  Nevada Probate Guide →
                </a>
                <a
                  href="/blog/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary-300 text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  Educational Blog →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
