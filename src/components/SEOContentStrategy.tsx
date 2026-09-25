import { Award, MapPin, Search, Target, TrendingUp } from 'lucide-react';

const targetKeywords = {
  primary: [
    'Las Vegas probate real estate expert',
    'Probate realtor Las Vegas',
    'Sell inherited property Las Vegas',
    'Dr. Jan Duffy probate specialist',
  ],
  longTail: [
    'How to sell a house in probate Las Vegas',
    'Nevada probate property sale process',
    'Best probate real estate agent Henderson',
    'Summerlin probate home sales expert',
    'Court approved realtor Las Vegas probate',
  ],
  localProbate: [
    'North Las Vegas probate realtor',
    'Henderson estate property sales',
    'Summerlin inherited home expert',
    'Spring Valley probate specialist',
    'Boulder City probate real estate',
  ],
};

const contentIdeas = [
  {
    title: 'Neighborhood-Specific Probate Guides',
    description: 'Targeted content for each Las Vegas area with local market insights',
    examples: [
      'Summerlin Probate Property Market Report 2025',
      'Henderson Probate Real Estate: What You Need to Know',
      'North Las Vegas Probate Sales: Local Expert Guide',
    ],
    targetKeywords: ['Summerlin probate', 'Henderson probate', 'North Las Vegas probate'],
  },
  {
    title: 'Monthly Probate Market Reports',
    description: 'Regular updates on probate property trends and market conditions',
    examples: [
      'Las Vegas Probate Market Update: January 2025',
      'Clark County Probate Property Trends',
      'Nevada vs California Probate Timeline Comparison',
    ],
    targetKeywords: ['Las Vegas probate market', 'Clark County probate', 'Nevada probate timeline'],
  },
  {
    title: 'Case Studies of Successful Probate Sales',
    description: "Real examples showcasing Dr. Duffy's expertise and results",
    examples: [
      'How Dr. Duffy Sold a $750K Summerlin Estate in 30 Days',
      'Multi-Property Estate: $1.2M in Sales Across 3 Counties',
      'Henderson Family Home: 15% Above Initial Valuation',
    ],
    targetKeywords: ['probate case study', 'probate success story', 'Dr. Duffy results'],
  },
  {
    title: 'Nevada Probate Law Updates',
    description: 'Keep content current with legal changes and court procedures',
    examples: [
      '2025 Nevada Probate Law Changes: What Executors Need to Know',
      'Clark County Probate Court Updates',
      'New Nevada Probate Forms and Requirements',
    ],
    targetKeywords: ['Nevada probate law', 'Clark County probate court', 'probate forms'],
  },
];

const seoOptimizationTips = [
  {
    category: 'Title Tags',
    tips: [
      'Include "Dr. Jan Duffy" and "Las Vegas probate real estate"',
      'Keep under 60 characters for optimal display',
      'Use location-specific terms (Summerlin, Henderson, North Las Vegas)',
      'Include action words: "expert", "specialist", "guide"',
    ],
  },
  {
    category: 'Meta Descriptions',
    tips: [
      'Target 150-160 characters for optimal snippet display',
      'Include primary keyword and location',
      'Add compelling call-to-action',
      'Highlight unique value proposition (CPRES, 20+ years, court-approved)',
    ],
  },
  {
    category: 'Header Structure',
    tips: [
      "H1: Main keyword with Dr. Jan Duffy's name",
      'H2: Service-specific keywords and location targeting',
      'H3: Long-tail keywords and specific questions',
      'Use question-based headings for featured snippets',
    ],
  },
  {
    category: 'Content Optimization',
    tips: [
      'Include target keywords naturally in first 100 words',
      'Use semantic variations of primary keywords',
      'Add location-specific content for each service area',
      'Include internal links to related probate resources',
    ],
  },
];

const keywordDensity = [
  {
    keyword: 'Las Vegas probate real estate',
    targetDensity: '2-3%',
    variations: [
      'Las Vegas probate real estate expert',
      'probate real estate in Las Vegas',
      'Las Vegas probate property sales',
    ],
  },
  {
    keyword: 'Dr. Jan Duffy',
    targetDensity: '1-2%',
    variations: ['Dr. Duffy', 'Dr. Jan Duffy', 'Dr. Jan Duffy probate specialist'],
  },
  {
    keyword: 'probate realtor',
    targetDensity: '1-2%',
    variations: ['probate real estate agent', 'probate specialist', 'probate real estate expert'],
  },
  {
    keyword: 'inherited property',
    targetDensity: '1-2%',
    variations: ['inherited home', 'inherited real estate', 'inherited property sales'],
  },
];

export default function SEOContentStrategy() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Search className="h-4 w-4" />
            SEO Content Strategy
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            SEO Strategy for Dr. Jan Duffy's Probate Expertise
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Comprehensive keyword targeting and content optimization to position Dr. Duffy as Las
            Vegas's premier probate real estate expert in search results.
          </p>
        </div>

        {/* Target Keywords */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Target Keywords for Maximum Visibility
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Primary Keywords */}
            <div className="bg-white rounded-xl shadow-soft p-6 border border-primary-200">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-primary-700" />
                <h4 className="text-lg font-semibold text-secondary-900">Primary Keywords</h4>
              </div>
              <p className="text-secondary-600 text-sm mb-4">
                High-volume, competitive keywords that establish authority
              </p>
              <ul className="space-y-2">
                {targetKeywords.primary.map((keyword) => (
                  <li
                    key={`primary-${keyword.substring(0, 20).replace(/\s+/g, '-').toLowerCase()}`}
                    className="text-sm text-secondary-700 flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-primary-400 rounded-full" />
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>

            {/* Long-tail Keywords */}
            <div className="bg-white rounded-xl shadow-soft p-6 border border-accent-200">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-accent-600" />
                <h4 className="text-lg font-semibold text-secondary-900">Long-tail Keywords</h4>
              </div>
              <p className="text-secondary-600 text-sm mb-4">
                Specific phrases with lower competition and higher conversion
              </p>
              <ul className="space-y-2">
                {targetKeywords.longTail.map((keyword) => (
                  <li
                    key={`longtail-${keyword.substring(0, 20).replace(/\s+/g, '-').toLowerCase()}`}
                    className="text-sm text-secondary-700 flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-accent-400 rounded-full" />
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>

            {/* Local + Probate Keywords */}
            <div className="bg-white rounded-xl shadow-soft p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-green-600" />
                <h4 className="text-lg font-semibold text-secondary-900">Local + Probate</h4>
              </div>
              <p className="text-secondary-600 text-sm mb-4">
                Geographic targeting for specific Las Vegas neighborhoods
              </p>
              <ul className="space-y-2">
                {targetKeywords.localProbate.map((keyword) => (
                  <li
                    key={`local-${keyword.substring(0, 20).replace(/\s+/g, '-').toLowerCase()}`}
                    className="text-sm text-secondary-700 flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Content Ideas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Content Ideas for Authority Building
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {contentIdeas.map((content) => (
              <div
                key={content.title}
                className="bg-white rounded-xl shadow-soft p-6 border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-secondary-900 mb-3">{content.title}</h4>
                <p className="text-secondary-600 text-sm mb-4">{content.description}</p>

                <div className="mb-4">
                  <h5 className="font-medium text-secondary-800 mb-2">Examples:</h5>
                  <ul className="space-y-1">
                    {content.examples.map((example) => (
                      <li
                        key={example}
                        className="text-sm text-secondary-600 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium text-secondary-800 mb-2">Target Keywords:</h5>
                  <div className="flex flex-wrap gap-2">
                    {content.targetKeywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Optimization Tips */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            SEO Optimization Best Practices
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {seoOptimizationTips.map((category) => (
              <div
                key={category.category}
                className="bg-white rounded-xl shadow-soft p-6 border border-gray-100"
              >
                <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                  {category.category}
                </h4>
                <ul className="space-y-2">
                  {category.tips.map((tip) => (
                    <li key={tip} className="text-sm text-secondary-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-accent-400 rounded-full mt-2 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Keyword Density Guidelines */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Keyword Density Guidelines
          </h3>

          <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              {keywordDensity.map((keyword) => (
                <div key={keyword.keyword} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-secondary-900 mb-2">{keyword.keyword}</h4>
                  <p className="text-sm text-secondary-600 mb-2">
                    Target Density:{' '}
                    <span className="font-medium text-primary-700">{keyword.targetDensity}</span>
                  </p>
                  <div>
                    <p className="text-xs text-secondary-500 mb-2">Variations:</p>
                    <div className="flex flex-wrap gap-1">
                      {keyword.variations.map((variation) => (
                        <span
                          key={variation}
                          className="text-xs bg-gray-100 text-secondary-600 px-2 py-1 rounded"
                        >
                          {variation}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Implementation CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border border-primary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Ready to Optimize Your Content for Maximum Search Visibility?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Implement these SEO strategies to position Dr. Jan Duffy as the go-to probate real
              estate expert in Las Vegas search results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/resources/nevada-probate-guide/" className="btn-primary inline-block">
                Read Optimized Probate Guide
              </a>
              <a
                href="https://drjanduffy.realscout.com/onboarding"
                className="btn-outline inline-block"
              >
                Schedule SEO Consultation
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-secondary-600">
              <span className="flex items-center gap-2">
                <Search className="h-4 w-4 text-primary-700" />
                Keyword Optimized
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent-600" />
                Local SEO Focused
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-green-600" />
                Authority Building
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
