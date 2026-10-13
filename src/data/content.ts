import type { KeyValue, Machine, MaterialCapacity, NavLink, Service, Spec } from '@/types/content';

export const navLinks: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Capability', href: '#capability' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export const heroSpecs: Spec[] = [
  { value: '6 kW', label: 'Fiber Laser Power' },
  { value: '3100 mm', label: 'CNC Bend Length' },
  { value: '6500×2000', label: 'Cutting Bed (mm)' },
];

export const worksData: KeyValue[] = [
  { label: 'Director', value: 'Shekhar Varun' },
  { label: 'Established', value: '2024' },
  { label: 'Facility', value: '2,500 sq. ft.' },
  { label: 'Laser System', value: 'James Laser · 6kW' },
  { label: 'Press Brake', value: 'EM CNC PBE 2031' },
  { label: 'Team', value: '5 Professionals' },
];

export const aboutStats: Spec[] = [
  { value: '2024', label: 'Established' },
  { value: '2,500 ft²', label: 'Facility' },
  { value: '5', label: 'Skilled Team' },
];

export const services: Service[] = [
  {
    id: '01',
    title: 'Laser Cutting',
    description:
      'MS, SS & Aluminium up to 25mm, Brass up to 10mm, Copper up to 5mm — cut from your DXF/DWG.',
  },
  {
    id: '02',
    title: 'CNC Bending & Punching',
    description:
      '4-axis CNC press brake, 3100mm bend length, plus CNC punching for panels, brackets and enclosures.',
  },
  {
    id: '03',
    title: 'Fabrication & Structural Work',
    description:
      'Structural fabrication, industrial contracting, MIG welding and mechanical assembly, start to finish.',
  },
  {
    id: '04',
    title: 'Cable Tray Manufacturing',
    description:
      'Perforated and ladder-type cable trays, flanges, fittings and brackets — cut and formed in-house.',
  },
  {
    id: '05',
    title: 'OEM & Custom Manufacturing',
    description:
      'Custom manufacturing for OEMs, food-grade stainless steel work, and industrial machinery spares.',
  },
  {
    id: '06',
    title: 'Powder Coating Finish',
    description:
      'Coating arranged through our finishing partner as part of your order — one point of contact.',
  },
];

export const machines: Machine[] = [
  {
    machine: 'Fiber Laser Cutting',
    model: 'James Laser · JH6020',
    keySpec: '6 kW · 6500 × 2050 mm bed',
  },
  { machine: 'CNC Press Brake', model: 'EM CNC PBE 2031', keySpec: '3100 mm · 4-axis (Y1, Y2, X)' },
  { machine: 'MIG Welding', model: 'MACRO', keySpec: '2 units · assembly & fabrication' },
];

export const materialCapacities: MaterialCapacity[] = [
  { material: 'Mild Steel (MS)', thickness: '0.3 – 25 mm', process: 'Laser Cutting' },
  { material: 'Stainless Steel (SS)', thickness: '0.3 – 25 mm', process: 'Laser Cutting' },
  { material: 'Aluminium', thickness: '0.3 – 25 mm', process: 'Laser Cutting' },
  { material: 'Brass', thickness: '0.3 – 10 mm', process: 'Laser Cutting' },
  { material: 'Copper', thickness: '0.3 – 5 mm', process: 'Laser Cutting' },
];

export const trustBadges: string[] = [
  'ISO Certified',
  'CNC Punching & Bending',
  'Food-Grade SS Fabrication',
  'EV & Solar Sector Ready',
];

export const quoteServiceOptions = [
  'Laser Cutting',
  'CNC Bending',
  'Fabrication & Assembly',
  'Cable Tray Manufacturing',
  'Brackets & Supports',
  'Powder Coating',
  'Not sure / multiple',
] as const;

export type QuoteService = (typeof quoteServiceOptions)[number];
