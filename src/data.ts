import {
  Cable,
  Plug,
  Lightbulb,
  Grid3x3,
  Layers,
  AirVent,
  Building2,
  type LucideIcon,
} from 'lucide-react';

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  tags: string[];
};

export const services: Service[] = [
  {
    id: 'conduit',
    icon: Cable,
    title: 'Conduit & Electrical Wiring',
    description:
      'Professional conduit and wiring installation for residential and commercial projects, fully compliant with all California electrical codes.',
    details: [
      'EMT, PVC, and flexible conduit runs',
      'THHN/THWN copper and aluminum conductors',
      'Circuit routing, labeling, and load balancing',
    ],
    tags: ['Residential', 'Commercial', 'Code-compliant'],
  },
  {
    id: 'outlets',
    icon: Plug,
    title: 'Outlets & Receptacles',
    description:
      'Installation of outlets and receptacles at 120V, 208V, and 220V for any load type, from everyday residential use to heavy-duty equipment.',
    details: [
      'Standard, GFCI, and AFCI receptacles',
      'Dedicated circuits for appliances and machinery',
      'Surface-mount and flush installations',
    ],
    tags: ['120V', '208V', '220V'],
  },
  {
    id: 'lighting',
    icon: Lightbulb,
    title: 'Lighting & Dimmers',
    description:
      'Installation of directional, linear, LED, pendant lights and dimmers. Lighting design that combines aesthetics, efficiency, and safety.',
    details: [
      'Recessed, track, and pendant fixtures',
      'LED retrofits and energy-efficient upgrades',
      'Smart dimmers and occupancy sensors',
    ],
    tags: ['LED', 'Linear', 'Dimmers'],
  },
  {
    id: 'panels',
    icon: Grid3x3,
    title: 'Breakers & Electrical Panels',
    description:
      'Installation of new breakers and electrical panels with the right capacity for your home or business, ensuring safe and reliable distribution.',
    details: [
      'Main and distribution panel upgrades',
      'Standard and AFCI/GFCI breakers',
      'Service upgrades to 100A, 150A, and 200A',
    ],
    tags: ['New panels', 'Breakers', 'Upgrades'],
  },
  {
    id: 'subpanels',
    icon: Layers,
    title: 'Electrical Sub-Panels',
    description:
      'Installation of electrical sub-panels up to 200 amp to expand your system capacity and power new areas or equipment.',
    details: [
      'Sub-panels up to 200 amp',
      'Garage, ADU, and workshop feeders',
      'Load calculation and proper grounding',
    ],
    tags: ['Up to 200 amp', 'Expansion', 'Distribution'],
  },
  {
    id: 'hvac',
    icon: AirVent,
    title: 'Air Conditioning & Mini Splits',
    description:
      'Complete electrical installation for air conditioning systems and mini splits, with dedicated circuits and proper protection.',
    details: [
      'Dedicated HVAC circuits and disconnects',
      'Mini split electrical rough-in and final',
      'Condenser and air handler power feeds',
    ],
    tags: ['Mini splits', 'HVAC', 'Dedicated circuit'],
  },
  {
    id: 'commercial',
    icon: Building2,
    title: 'Commercial & Residential Projects',
    description:
      'Electrical work in offices, equipment rooms, mechanical areas, and more. Comprehensive solutions for any type of property.',
    details: [
      'Office build-outs and tenant improvements',
      'Mechanical rooms and equipment areas',
      'New construction and remodel wiring',
    ],
    tags: ['Offices', 'Mechanical areas', 'Equipment rooms'],
  },
];

export const companyInfo = {
  name: "PHE Tista's Electric, Inc.",
  slogan: 'Commercial & Residential Electrical Services',
  phone: '(818) 439-8767',
  phoneRaw: '+18184398767',
  address: '7240 Woodman Ave., #11, Van Nuys, CA 91405',
  email: 'phe.tistas.electric.inc@gmail.com',
  license: '#1051941',
  serviceArea: 'Los Angeles and surrounding areas, California',
  hours: 'Mon–Sat: 7:00 AM – 6:00 PM',
};

export const serviceAreaCities = [
  'Van Nuys',
  'Los Angeles',
  'Burbank',
  'Glendale',
  'North Hollywood',
  'Sherman Oaks',
  'Pasadena',
  'Encino',
  'Reseda',
  'Tarzana',
  'Woodland Hills',
  'Northridge',
];
