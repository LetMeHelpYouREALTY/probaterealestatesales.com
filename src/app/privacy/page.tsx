import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import SchemaMarkup from '@/components/SchemaMarkup';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

export const metadata: Metadata = {
  title: 'Privacy Policy | Probate Real Estate Sales',
  description:
    'Privacy Policy for Probate Real Estate Sales. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/privacy/',
  },
  openGraph: {
    title: 'Privacy Policy | Probate Real Estate Sales',
    description: 'Privacy Policy for Probate Real Estate Sales',
    type: 'website',
    url: 'https://www.probaterealestatesales.com/privacy/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy/' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-secondary-900 mb-6">Privacy Policy</h1>
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
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">1. Introduction</h2>
              <p className="text-secondary-700 mb-4">
                Probate Real Estate Sales ("we," "us," or "our") is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-secondary-800 mb-3">
                2.1 Personal Information
              </h3>
              <p className="text-secondary-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                <li>Request information about our services</li>
                <li>Schedule a consultation</li>
                <li>Contact us via phone, email, or contact forms</li>
                <li>Engage our probate real estate services</li>
              </ul>
              <p className="text-secondary-700 mb-4">This information may include:</p>
              <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                <li>Name and contact information (phone, email, address)</li>
                <li>Property information and estate details</li>
                <li>Legal documents and court filings related to probate</li>
                <li>Financial information relevant to the probate process</li>
              </ul>

              <h3 className="text-xl font-semibold text-secondary-800 mb-3 mt-6">
                2.2 Automatically Collected Information
              </h3>
              <p className="text-secondary-700 mb-4">
                When you visit our website, we may automatically collect certain information,
                including:
              </p>
              <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-secondary-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                <li>Provide, maintain, and improve our probate real estate services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Process probate transactions and court filings</li>
                <li>Communicate with you about services, updates, and relevant information</li>
                <li>Comply with legal obligations and court requirements</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-secondary-700 mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                <li>
                  <strong>Service Providers:</strong> With third-party service providers who assist
                  us in operating our business (e.g., title companies, appraisers, attorneys)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or
                  government regulation, particularly in probate proceedings
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with any merger, sale of
                  assets, or acquisition
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you have given us explicit permission to
                  share your information
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                5. Google Analytics
              </h2>
              <p className="text-secondary-700 mb-4">
                We use Google Analytics to analyze website traffic and user behavior. Google
                Analytics uses cookies and similar technologies to collect information about your
                use of our website. This information is used to compile reports and help us improve
                our website.
              </p>
              <p className="text-secondary-700 mb-4">
                You can opt out of Google Analytics by installing the Google Analytics Opt-out
                Browser Add-on, available at:{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-700 hover:text-primary-900"
                >
                  https://tools.google.com/dlpage/gaoptout
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">6. Data Security</h2>
              <p className="text-secondary-700 mb-4">
                We implement reasonable security measures to protect your personal information.
                However, no method of transmission over the Internet or electronic storage is 100%
                secure. While we strive to protect your information, we cannot guarantee absolute
                security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                7. Your Rights and Choices
              </h2>
              <p className="text-secondary-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-secondary-700 mb-4 space-y-2">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>
                  Request deletion of your personal information (subject to legal and business
                  requirements)
                </li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p className="text-secondary-700 mb-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                8. Retention of Information
              </h2>
              <p className="text-secondary-700 mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes
                outlined in this Privacy Policy, comply with legal obligations, resolve disputes,
                and enforce our agreements. In probate matters, we may be required to retain certain
                records for extended periods as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-secondary-700 mb-4">
                Our services are not directed to individuals under the age of 18. We do not
                knowingly collect personal information from children. If you believe we have
                collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="text-secondary-700 mb-4">
                We may update this Privacy Policy from time to time. Changes will be posted on this
                page with an updated "Last updated" date. Your continued use of our services after
                changes are posted constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">11. Contact Us</h2>
              <p className="text-secondary-700 mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please
                contact us:
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
                <p className="text-secondary-700 mt-4">
                  Address: 400 S 4th St suite 250 b, Las Vegas, NV 89101
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
