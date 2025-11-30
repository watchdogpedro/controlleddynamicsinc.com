export const INDUSTRIES = [
  {
    id: 'aerospace-defense',
    name: 'Aerospace & Defense',
    icon: 'Plane',
    description: 'Ground support equipment, satellite assembly fixtures, avionics test stands, and flight simulator platforms.',
    applications: [
      'Aircraft ground support equipment (GSE)',
      'Satellite assembly fixtures',
      'Avionics test stands',
      'Missile component assembly frames',
      'Clean room structural systems',
      'Flight simulator platforms'
    ]
  },
  {
    id: 'life-sciences',
    name: 'Life Sciences',
    icon: 'FlaskConical',
    description: 'Cleanroom infrastructure, lab equipment frames, bioprocessing equipment, and pharmaceutical manufacturing.',
    applications: [
      'Cleanroom infrastructure',
      'Lab equipment frames and enclosures',
      'Bioprocessing equipment bases',
      'Pharmaceutical manufacturing fixtures',
      'Medical device assembly stations',
      'Containment system frameworks'
    ]
  },
  {
    id: 'semiconductor',
    name: 'Semiconductor',
    icon: 'Cpu',
    description: 'Fab equipment frames, wafer handling systems, vibration-isolated platforms, and EUV support structures.',
    applications: [
      'Wafer handling systems',
      'Equipment frames for fab environments',
      'Vibration-isolated platforms',
      'EUV lithography support structures',
      'Automated material handling systems',
      'Cleanroom-compatible enclosures'
    ]
  },
  {
    id: 'robotics-automation',
    name: 'Robotics & Automation',
    icon: 'Bot',
    description: 'Robot cell enclosures, cobot mounting systems, AGV frames, and high-speed assembly platforms.',
    applications: [
      'Robot cell enclosures',
      'Collaborative robot (cobot) mounting systems',
      'Automated guided vehicle (AGV) frames',
      'Vision system mounting structures',
      'End-of-line packaging systems',
      'High-speed assembly platforms'
    ]
  },
  {
    id: 'general-industrial',
    name: 'General Industrial',
    icon: 'Factory',
    description: 'Machine bases, work platforms, industrial carts, custom equipment guarding, and material handling.',
    applications: [
      'Machine bases and enclosures',
      'Work platforms and ergonomic stations',
      'Industrial carts and material handling',
      'Custom equipment guarding',
      'Vibratory feeder platforms'
    ]
  }
];

export const TECHNOLOGY_FEATURES = [
  {
    title: '10x Stronger',
    description: 'Mechanically locked joints rival welded steel strength while outperforming traditional T-slot systems by 10x.',
    stat: '10x',
    label: 'Stronger'
  },
  {
    title: '50% Faster Assembly',
    description: 'Self-aligning brackets and pre-assembled kits reduce assembly time by half compared to traditional methods.',
    stat: '50%',
    label: 'Faster'
  },
  {
    title: 'Zero Maintenance',
    description: 'Connections actually tighten over time under vibration. No loosening, no adjustments, no downtime.',
    stat: '0',
    label: 'Maintenance'
  },
  {
    title: 'Infinite Flexibility',
    description: 'Fully modular and reconfigurable without weakening. Disassemble and rebuild as needs evolve.',
    stat: '∞',
    label: 'Configurations'
  }
];

export const STATISTICS = [
  { value: 2500, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Industries Served' },
  { value: 15, suffix: '+', label: 'Years of Innovation' },
  { value: 100000, suffix: '+', label: 'Engineering Hours' }
];

export const SOLUTIONS = [
  {
    id: 'machine-bases',
    name: 'Machine Bases & Frames',
    icon: 'Box',
    description: 'Ultra-rigid structural frames for precision equipment and heavy machinery.',
    features: ['Vibration dampening', 'High load capacity', 'Precision alignment', 'Easy reconfiguration']
  },
  {
    id: 'enclosures-guarding',
    name: 'Enclosures & Guarding',
    icon: 'ShieldCheck',
    description: 'Safety enclosures and machine guarding systems that meet industrial standards.',
    features: ['OSHA compliant', 'Modular panels', 'Quick access doors', 'Transparent options']
  },
  {
    id: 'cleanroom-systems',
    name: 'Cleanroom Systems',
    icon: 'Wind',
    description: 'Contamination-free structural systems for controlled environments.',
    features: ['ISO certified materials', 'Non-particle shedding', 'Easy to clean', 'Chemical resistant']
  },
  {
    id: 'work-platforms',
    name: 'Work Platforms & Stations',
    icon: 'Layers',
    description: 'Ergonomic workstations and elevated platforms for assembly and maintenance.',
    features: ['Adjustable heights', 'Ergonomic design', 'Integrated lighting', 'Tool storage']
  },
  {
    id: 'custom-engineering',
    name: 'Custom Engineering',
    icon: 'Settings',
    description: 'Tailored structural solutions designed to your exact specifications.',
    features: ['CAD design services', 'FEA analysis', 'Rapid prototyping', 'Turnkey installation']
  }
];

export const TECHNOLOGY_MENU = [
  { name: 'AngleLock Overview', href: '/technology' },
  { name: 'Technical Specifications', href: '/technology/specifications' },
  { name: 'Strength Comparison', href: '/technology/comparison' },
  { name: 'Design Guidelines', href: '/technology/guidelines' }
];

export const RESOURCES_MENU = [
  { name: 'CAD Library', href: '/resources/cad-library' },
  { name: 'Case Studies', href: '/resources/case-studies' },
  { name: 'Technical Documentation', href: '/resources/documentation' },
  { name: 'White Papers', href: '/resources/white-papers' },
  { name: 'Videos', href: '/resources/videos' }
];

export const ABOUT_MENU = [
  { name: 'Company', href: '/about' },
  { name: 'Team', href: '/about/team' },
  { name: 'Certifications', href: '/about/certifications' },
  { name: 'Manufacturing', href: '/about/manufacturing' },
  { name: 'Careers', href: '/about/careers' }
];

export const COMPANY_INFO = {
  name: 'Controlled Dynamics Inc.',
  tagline: 'Engineering Tomorrow\'s Foundations Today',
  vision: 'Engineering Tomorrow\'s Foundations Today',
  mission: 'To be the premier provider of advanced modular structural systems for industries where precision, reliability, and performance are non-negotiable.',
  email: 'info@controlleddynamicsinc.com',
  phone: '+1 (555) 123-4567',
  address: {
    street: '123 Industrial Way',
    city: 'Tech City',
    state: 'CA',
    zip: '12345'
  }
};
