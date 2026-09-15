import { MapPin } from 'lucide-react';
import {
  OFFICE_ADDRESS_LINE,
  OFFICE_GOOGLE_MAPS_DIRECTIONS_URL,
  OFFICE_GOOGLE_MAPS_EMBED_SRC,
} from '@/config/site-google';
import { GBP_BUSINESS_NAME } from '@/lib/site-contact';

type GbpOfficeMapProps = {
  heading?: string;
};

export default function GbpOfficeMap({ heading = 'Find us on Google Maps' }: GbpOfficeMapProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-secondary-900 mb-4 text-center">{heading}</h2>
      <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
        <iframe
          src={OFFICE_GOOGLE_MAPS_EMBED_SRC}
          width="100%"
          height="360"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${GBP_BUSINESS_NAME} office map — ${OFFICE_ADDRESS_LINE}`}
          className="w-full"
        />
      </div>
      <p className="mt-3 text-center text-sm text-secondary-600">
        <MapPin className="inline h-4 w-4 mr-1" aria-hidden />
        {OFFICE_ADDRESS_LINE}
      </p>
      <p className="mt-2 text-center">
        <a
          href={OFFICE_GOOGLE_MAPS_DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-700 font-medium hover:text-primary-900"
        >
          Get directions
        </a>
      </p>
    </div>
  );
}
