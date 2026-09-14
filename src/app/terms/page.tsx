import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

export const metadata: Metadata = {
  title: 'Terms of Service | Probate Real Estate Sales',
  description:
    'Terms of Service for Probate Real Estate Sales. Read our terms and conditions for using our probate real estate services.',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/terms/',
  },
  openGraph: {
    title: 'Terms of Service | Probate Real Estate Sales',
    description: 'Terms of Service for Probate Real Estate Sales',
    type: 'website',
    url: 'https://www.probaterealestatesales.com/terms/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Terms of Service', url: '/terms/' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-secondary-900 mb-6">Terms of Service</h1>
          <p className="text-sm text-secondary-500 mb-8" suppressHydrationWarning>
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-secondary-700 mb-4">
                By accessing or using the services provided by Probate Real Estate Sales ("we,"
                "us," or "our"), you agree to be bound by these Terms of Service. If you do not
                agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">2. Services</h2>
              <p className="text-secondary-700 mb-4">
                Probate Real Estate Sales provides probate real estate services in Nevada, including
                but not limited to:
              </p>
              <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                <li>Probate property sales and listings</li>
                <li>Estate liquidation services</li>
                <li>Property valuation and assessment</li>
                <li>Court representation and probate administration support</li>
                <li>Real estate consultation services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                3. Real Estate License
              </h2>
              <p className="text-secondary-700 mb-4">
                Dr. Jan Duffy is a licensed real estate professional in the State of Nevada. License
                number: S.0197614
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                4. Client Responsibilities
              </h2>
              <p className="text-secondary-700 mb-4">As a client, you agree to:</p>
              <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                <li>Provide accurate and complete information about the property and estate</li>
                <li>Cooperate with the probate process and court requirements</li>
                <li>Disclose all relevant information regarding the property and estate</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>
                  Pay all agreed-upon fees and commissions as outlined in our service agreements
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                5. Fees and Commissions
              </h2>
              <p className="text-secondary-700 mb-4">
                All fees and commissions will be clearly outlined in our written service agreements.
                Fees may include but are not limited to:
              </p>
              <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                <li>Real estate commissions as agreed upon in listing agreements</li>
                <li>Court filing fees and administrative costs</li>
                <li>Legal document preparation fees where applicable</li>
                <li>Third-party service fees (appraisals, inspections, etc.)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                6. Disclaimer of Warranties
              </h2>
              <p className="text-secondary-700 mb-4">
                Our services are provided "as is" without warranties of any kind, either express or
                implied. While we strive to provide accurate information and professional services,
                we cannot guarantee specific outcomes or timelines in probate proceedings, as these
                are subject to court schedules and various factors beyond our control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-secondary-700 mb-4">
                To the maximum extent permitted by law, Probate Real Estate Sales shall not be
                liable for any indirect, incidental, special, consequential, or punitive damages
                resulting from the use of our services or inability to use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                8. Probate Process Timeline
              </h2>
              <p className="text-secondary-700 mb-4">
                While Nevada probate typically takes 6-8 months, timelines can vary based on court
                schedules, case complexity, and other factors. We cannot guarantee specific
                completion dates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">9. Confidentiality</h2>
              <p className="text-secondary-700 mb-4">
                We respect the confidentiality of your estate and probate matters. Information
                shared with us will be kept confidential except as required by law or court order,
                or as necessary to perform our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                10. Changes to Terms
              </h2>
              <p className="text-secondary-700 mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes will be
                effective immediately upon posting on this page. Your continued use of our services
                after changes are posted constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">11. Governing Law</h2>
              <p className="text-secondary-700 mb-4">
                These Terms of Service shall be governed by and construed in accordance with the
                laws of the State of Nevada, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                12. Contact Information
              </h2>
              <p className="text-secondary-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-secondary-700 mb-2">
                  <strong>Probate Real Estate Sales</strong>
                </p>
                <p className="text-secondary-700 mb-2">
                  Dr. Jan Duffy, Licensed Real Estate Professional
                </p>
                <p className="text-secondary-700 mb-2">License: S.0197614</p>
                <p className="text-secondary-700 mb-2">
                  Phone:{' '}
                  <a href={SITE_PHONE_TEL_HREF} className="text-primary-700 hover:text-primary-900">
                    {SITE_PHONE_DISPLAY}
                  </a>
                </p>
                <p className="text-secondary-700">
                  Email:{' '}
                  <a
                    href="mailto:DrJanSells@ProbateRealEstateSales.com"
                    className="text-primary-700 hover:text-primary-900"
                  >
                    DrJanSells@ProbateRealEstateSales.com
                  </a>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/" className="text-primary-700 hover:text-primary-900 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
      <SchemaMarkup type="legal" breadcrumbs={breadcrumbs} />
    </main>
  );
}
