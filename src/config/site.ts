import type { Phone } from '@/types/content';

const env = import.meta.env;

const primaryPhone: Phone = { display: '+91 85912 40616', e164: '918591240616' };
const secondaryPhone: Phone = { display: '+91 87796 91754', e164: '918779691754' };

export const site = {
  name: 'Purnima Industries',
  tagline: 'Cutting · Bending · Fabrication',
  director: 'Shekhar Varun',
  established: 2024,
  email: env.VITE_QUOTE_EMAIL || 'purnimaindustries2022@gmail.com',
  gtagId: env.VITE_GTAG_ID ?? 'AW-18504839090',
  phones: { primary: primaryPhone, secondary: secondaryPhone },
  address: {
    lines: [
      'Plot No. A-46, Ambernath MIDC,',
      'Beside Sudama Hotel, MIDC,',
      'Ambernath – 421506, Maharashtra',
    ],
    short: 'Ambernath MIDC, Maharashtra',
    oneLine: 'Plot No. A-46, Ambernath MIDC, Beside Sudama Hotel, Ambernath – 421506, Maharashtra',
    plot: 'PLOT A-46',
  },
  geo: { lat: 19.188686, lng: 73.19136 },
} as const;

export const whatsappUrl = (phone: Phone = site.phones.primary) => `https://wa.me/${phone.e164}`;
export const telUrl = (phone: Phone = site.phones.primary) => `tel:+${phone.e164}`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat},${site.geo.lng}`;
export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${site.geo.lat},${site.geo.lng}`;
