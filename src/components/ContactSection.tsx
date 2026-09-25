import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { CalendlyBookingPanel } from '@/components/calendly/CalendlyBookingPanel';
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL_HREF } from '@/lib/site-contact';

export default function ContactSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Ready to discuss your probate real estate needs? Contact us for a free, no-obligation
            consultation.
          </p>
        </div>

        {/* Dr. Jan Duffy Photo & Personal Touch */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border border-primary-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
                  Personal Attention to Every Client
                </h3>
                <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                  Dr. Jan Duffy personally handles every probate case, ensuring you receive the
                  expert guidance and compassionate support you deserve during this challenging
                  time. Her direct involvement means faster results and better outcomes for your
                  family.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href={SITE_PHONE_TEL_HREF}
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    Call Dr. Duffy Directly
                  </a>
                  <a
                    href="https://drjanduffy.realscout.com/onboarding"
                    className="btn-outline inline-flex items-center justify-center"
                  >
                    Schedule Free Consultation
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-60 h-60 overflow-hidden rounded-2xl border-4 border-primary-200 shadow-2xl">
                    <Image
                      src="/images/dr-jan-duffy.jpg"
                      alt="Dr. Jan Duffy - Personal Probate Real Estate Expert"
                      width={240}
                      height={240}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-2 shadow-lg border-2 border-primary-200">
                    <Phone className="h-6 w-6 text-primary-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Schedule (Calendly replaces legacy contact form) */}
          <div className="bg-secondary-50 rounded-2xl p-8">
            <CalendlyBookingPanel
              title="Schedule a call"
              description="Pick a time for a private 15-minute conversation, or open the calendar in a new window with the button below."
              embedHeight={700}
              embedClassName="mx-auto max-w-4xl rounded-xl border border-primary-200 bg-white shadow-md"
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <Phone className="h-6 w-6 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Phone</h4>
                    <p className="text-secondary-600">{SITE_PHONE_DISPLAY}</p>
                    <p className="text-sm text-secondary-500">Available 24/7 for urgent matters</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-100 rounded-full">
                    <Mail className="h-6 w-6 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Email</h4>
                    <p className="text-secondary-600">DrJanSells@ProbateRealEstateSales.com</p>
                    <p className="text-sm text-secondary-500">We respond within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary-100 rounded-full">
                    <MapPin className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Office</h4>
                    <p className="text-secondary-600">400 S 4th St suite 250 b</p>
                    <p className="text-secondary-600">Las Vegas, NV 89101</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <Clock className="h-6 w-6 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Business Hours</h4>
                    <p className="text-secondary-600">Monday - Sunday: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                Emergency After Hours
              </h4>
              <p className="text-secondary-600 mb-4">
                For urgent probate matters outside business hours, call our emergency line:
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-700 mb-2">{SITE_PHONE_DISPLAY}</div>
                <p className="text-sm text-secondary-500">Available 24/7 for urgent matters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
