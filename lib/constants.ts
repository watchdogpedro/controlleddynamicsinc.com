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
    ],
    challenges: [
      'Extreme vibration from testing and handling equipment',
      'Precision alignment requirements for satellite assembly',
      'Need for reconfigurable fixtures as programs evolve',
      'Strict cleanliness standards for cleanroom environments',
      'Heavy loads requiring structural rigidity'
    ],
    benefits: [
      'Vibration-proof connections eliminate test fixture drift',
      'Modular design allows rapid reconfiguration for new programs',
      'Non-particle shedding aluminum suitable for cleanrooms',
      '10x strength advantage handles heavy aerospace equipment',
      'Fast assembly reduces facility downtime during installations'
    ],
    projectExample: {
      title: 'Satellite Assembly Fixture Platform',
      challenge: 'Major aerospace contractor needed a 12\'x20\' vibration-isolated platform for satellite integration with micron-level precision requirements and ability to reconfigure for different satellite sizes.',
      solution: 'Custom AngleLock structure with integrated vibration isolation, precision leveling system, and modular upper framework allowing 6 different satellite configurations.',
      results: [
        '< 5 micron deflection under 2,000 lb load',
        'Reconfiguration time reduced from 2 days to 4 hours',
        'Structure has been reconfigured 8 times over 3 years',
        'Zero maintenance required since installation'
      ]
    }
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
    ],
    challenges: [
      'ISO Class 5 cleanroom compatibility requirements',
      'Chemical resistance for harsh cleaning protocols',
      'Non-particle shedding critical for contamination control',
      'Frequent equipment moves and reconfigurations',
      'Precision leveling for sensitive analytical equipment'
    ],
    benefits: [
      'Clear anodized finish prevents particle generation',
      'Easy to clean surfaces support strict hygiene protocols',
      'Corrosion resistant for repeated chemical exposure',
      'Tool-less reconfiguration supports process changes',
      'Precision machining enables micron-level equipment alignment'
    ],
    projectExample: {
      title: 'Pharmaceutical Manufacturing Equipment Base',
      challenge: 'Pharmaceutical manufacturer required equipment base for ISO Class 7 cleanroom supporting 3,500 lb bioprocessing equipment with frequent cleaning and ability to relocate as production needs change.',
      solution: 'AngleLock base structure with stainless steel feet, integrated leveling system, and modular design allowing disassembly and relocation without contamination risk.',
      results: [
        'Passed ISO 14644-1 Class 7 certification',
        'Successfully relocated 3 times in 18 months',
        'Withstands daily chemical washdowns',
        'Installation completed in 6 hours vs 2 days for welded alternative'
      ]
    }
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
    ],
    challenges: [
      'Sub-micron vibration isolation for lithography equipment',
      'Class 1 cleanroom compatibility requirements',
      'Extreme precision for wafer handling automation',
      'Thermal stability across temperature variations',
      'Rapid fab reconfigurations during process changes'
    ],
    benefits: [
      'Superior vibration damping protects sensitive processes',
      'Cleanroom-certified materials prevent wafer contamination',
      'Precision tolerances support automated wafer handling',
      'Aluminum thermal properties provide dimensional stability',
      'Modular design enables fast fab layout changes'
    ],
    projectExample: {
      title: 'Wafer Inspection System Base',
      challenge: 'Leading semiconductor manufacturer needed vibration-isolated base for automated optical inspection system in Class 1 cleanroom with < 1 micron vibration specification and 48-hour installation window.',
      solution: 'Custom AngleLock base with integrated air isolation mounts, precision-machined mounting surface, and pre-assembled modular design for rapid installation.',
      results: [
        'Vibration levels measured at 0.3 microns (70% below spec)',
        'Installation completed in 36 hours including qualification',
        'Zero particle generation in Class 1 environment',
        'System operating 24/7 for 2+ years with no adjustments'
      ]
    }
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
    ],
    challenges: [
      'High-frequency vibration from robotic operations',
      'Need for safety guarding with vision access',
      'Precision mounting for vision and sensing systems',
      'Frequent cell reconfigurations for product changes',
      'Integration of power, air, and data distribution'
    ],
    benefits: [
      'Vibration-proof design maintains robot calibration',
      'Modular panels support quick access and reconfiguration',
      'Precision mounting points for cameras and sensors',
      'Internal cable management channels keep cells organized',
      'Lightweight aluminum enables easy relocation'
    ],
    projectExample: {
      title: 'Collaborative Robot Assembly Cell',
      challenge: 'Automotive supplier needed flexible assembly cell with 2 cobots, vision inspection, and safety guarding that could be reconfigured weekly for different product runs while maintaining calibration.',
      solution: 'AngleLock cell structure with integrated safety guarding, modular work surface, adjustable cobot mounting plates, and quick-change vision system mounts.',
      results: [
        'Reconfiguration time reduced from 8 hours to 45 minutes',
        'Robot calibration maintained through 50+ reconfigurations',
        'Vision system repeatability improved 3x vs. previous setup',
        'Cell has been adapted for 12 different product families'
      ]
    }
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
    ],
    challenges: [
      'Heavy machinery requiring rigid support',
      'Vibration from cutting, grinding, and forming operations',
      'Need for equipment mobility and reconfiguration',
      'OSHA compliance for machine guarding',
      'Cost-effective alternatives to custom fabrication'
    ],
    benefits: [
      'Load capacity rivals welded steel at lower cost',
      'Vibration resistance reduces maintenance and downtime',
      'Casters and modular design enable easy relocation',
      'Quick integration of guarding, lighting, and accessories',
      'No welding or specialized labor required for installation'
    ],
    projectExample: {
      title: 'CNC Machine Tool Base',
      challenge: 'Job shop needed mobile base for 8,000 lb CNC mill that could be relocated as floor layout changed, with vibration isolation to prevent part quality issues and installation over a weekend.',
      solution: 'Heavy-duty AngleLock base with reinforced corner brackets, industrial casters with leveling feet, and vibration-damping isolation pads. Pre-assembled in sections for rapid installation.',
      results: [
        'Successfully supports 8,000 lb machine with zero deflection',
        'Reduced part rejection rate by 40% due to improved vibration control',
        'Relocated 4 times in 2 years in under 3 hours each time',
        'Saturday morning installation, machine running Monday'
      ]
    }
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
    features: ['Vibration dampening', 'High load capacity', 'Precision alignment', 'Easy reconfiguration'],
    detailedFeatures: [
      {
        title: 'Superior Vibration Control',
        description: 'Mechanically locked joints eliminate the vibration transmission that plagues friction-based systems, protecting precision processes and extending equipment life.'
      },
      {
        title: 'Heavy-Duty Load Capacity',
        description: 'AngleLock connections rival welded steel strength, supporting machinery loads from hundreds to tens of thousands of pounds with minimal deflection.'
      },
      {
        title: 'Precision Leveling & Alignment',
        description: 'Integrated leveling systems and precision-machined mounting surfaces ensure micron-level accuracy for sensitive equipment installation.'
      },
      {
        title: 'Modular Reconfigurability',
        description: 'Disassemble and reconfigure without weakening the structure. Add equipment, change layouts, or relocate entire systems as needs evolve.'
      }
    ],
    applications: [
      'CNC machine tools and milling centers',
      'Coordinate measuring machines (CMM)',
      'Precision grinding and lapping equipment',
      'Injection molding presses',
      'Assembly and test equipment',
      'Vibration-sensitive metrology instruments'
    ],
    projectExample: {
      title: 'Precision Grinding Machine Base',
      challenge: 'Optical component manufacturer needed vibration-isolated base for precision grinder producing sub-micron surface finishes, with ability to relocate machine quarterly as production mix changed.',
      solution: 'Custom AngleLock base with integrated pneumatic isolation, precision leveling feet, heavy-duty casters, and reinforced construction supporting 12,000 lb machine.',
      results: [
        'Surface finish improved 25% due to superior vibration isolation',
        'Machine relocated 6 times in 18 months in under 4 hours each',
        'Load capacity verified at 15,000 lbs with < 0.010" deflection',
        'Zero maintenance required on base structure for 3+ years'
      ]
    }
  },
  {
    id: 'enclosures-guarding',
    name: 'Enclosures & Guarding',
    icon: 'ShieldCheck',
    description: 'Safety enclosures and machine guarding systems that meet industrial standards.',
    features: ['OSHA compliant', 'Modular panels', 'Quick access doors', 'Transparent options'],
    detailedFeatures: [
      {
        title: 'OSHA & ANSI Compliant',
        description: 'Engineered to meet or exceed machine guarding requirements including OSHA 1910.212 and ANSI B11 standards for industrial safety.'
      },
      {
        title: 'Modular Panel Systems',
        description: 'Interchangeable panels allow mix-and-match configurations with solid, perforated, polycarbonate, and wire mesh options for optimal visibility and protection.'
      },
      {
        title: 'Quick-Access Solutions',
        description: 'Integrated doors, sliding panels, and lift-away sections provide rapid access for maintenance while maintaining safety when closed.'
      },
      {
        title: 'Easy Reconfiguration',
        description: 'Adapt guarding as processes change without rebuilding. Add access points, extend enclosures, or modify layouts in minutes.'
      }
    ],
    applications: [
      'CNC machine guarding and enclosures',
      'Robotic cell safety barriers',
      'Conveyor system guarding',
      'Parts washing station enclosures',
      'Automated assembly equipment protection',
      'Welding cell containment systems'
    ],
    projectExample: {
      title: 'Robotic Welding Cell Enclosure',
      challenge: 'Fabrication shop needed OSHA-compliant enclosure for 3-robot welding cell with full visibility for monitoring, quick access for part loading, and ability to expand cell for future robots.',
      solution: 'Modular AngleLock enclosure with polycarbonate safety panels, two sliding access doors with interlocks, integrated fume extraction mounting, and pre-planned expansion points.',
      results: [
        'Passed OSHA safety inspection on first review',
        'Loading cycle time reduced 40% vs. previous hinged door design',
        'Cell expanded to 4 robots in 8 hours using pre-planned structure',
        'Zero safety incidents in 4+ years of operation'
      ]
    }
  },
  {
    id: 'cleanroom-systems',
    name: 'Cleanroom Systems',
    icon: 'Wind',
    description: 'Contamination-free structural systems for controlled environments.',
    features: ['ISO certified materials', 'Non-particle shedding', 'Easy to clean', 'Chemical resistant'],
    detailedFeatures: [
      {
        title: 'ISO Cleanroom Compatible',
        description: 'Clear anodized 6105-T5 aluminum with non-particle-shedding properties suitable for ISO Class 1-8 cleanrooms across semiconductor, pharmaceutical, and medical device manufacturing.'
      },
      {
        title: 'Superior Cleanliness',
        description: 'Smooth surfaces with minimal crevices prevent particle accumulation. No fabric covers, rubber seals, or other contamination sources found in traditional systems.'
      },
      {
        title: 'Chemical Resistance',
        description: 'Anodized finish withstands repeated exposure to cleaning agents, solvents, and process chemicals common in cleanroom environments without degradation.'
      },
      {
        title: 'Tool-less Reconfiguration',
        description: 'Modify layouts without generating particles from cutting, grinding, or welding. Disassemble and reconfigure outside the cleanroom if needed.'
      }
    ],
    applications: [
      'Semiconductor fab equipment frames',
      'Pharmaceutical manufacturing bases',
      'Medical device assembly stations',
      'Bioprocessing equipment support',
      'Cleanroom storage and shelving',
      'Controlled environment workstations'
    ],
    projectExample: {
      title: 'ISO Class 5 Equipment Framework',
      challenge: 'Medical device manufacturer needed structural framework for automated assembly equipment in ISO Class 5 cleanroom, supporting 4,500 lbs with frequent equipment changes and strict particle generation limits.',
      solution: 'AngleLock structure with all-aluminum construction, precision leveling, integrated power/data distribution, and modular upper framework for equipment mounting flexibility.',
      results: [
        'Certified for ISO Class 5 environment (< 3,520 particles per m³)',
        'Equipment reconfigured 8 times in 2 years with zero contamination events',
        'Particle testing shows no measurable contribution from structure',
        'Survives daily cleanroom cleaning protocols without degradation'
      ]
    }
  },
  {
    id: 'work-platforms',
    name: 'Work Platforms & Stations',
    icon: 'Layers',
    description: 'Ergonomic workstations and elevated platforms for assembly and maintenance.',
    features: ['Adjustable heights', 'Ergonomic design', 'Integrated lighting', 'Tool storage'],
    detailedFeatures: [
      {
        title: 'Height Adjustability',
        description: 'Telescoping legs, adjustable work surfaces, and modular platform levels accommodate different operator heights and equipment access requirements.'
      },
      {
        title: 'Ergonomic Optimization',
        description: 'Work surfaces positioned for optimal reach and posture, reducing operator fatigue and injury risk while improving productivity and quality.'
      },
      {
        title: 'Integrated Accessories',
        description: 'Built-in channels for power, compressed air, and data. Mounting points for task lighting, tool balancers, monitors, and process equipment.'
      },
      {
        title: 'Scalable Configurations',
        description: 'Start with basic workstation and add shelving, drawers, overhead structures, or additional work zones as needs evolve without replacing base structure.'
      }
    ],
    applications: [
      'Assembly and testing workstations',
      'Elevated maintenance platforms',
      'Packing and inspection stations',
      'Electronics assembly benches',
      'Quality control inspection areas',
      'Multi-level work platforms'
    ],
    projectExample: {
      title: 'Ergonomic Assembly Workstation',
      challenge: 'Electronics manufacturer needed flexible workstations for product assembly with different height requirements, integrated ESD protection, task lighting, and ability to reconfigure for new products weekly.',
      solution: 'Modular AngleLock workstations with adjustable-height work surfaces, integrated ESD-safe tops, articulating task lights, power distribution, and tool storage with quick-change product fixtures.',
      results: [
        'Operator comfort scores improved 65% vs. previous fixed-height benches',
        'Assembly time reduced 18% due to optimized ergonomics and tool placement',
        'Stations reconfigured for 40+ different products over 2 years',
        'Zero worker injury reports related to workstation ergonomics'
      ]
    }
  },
  {
    id: 'custom-engineering',
    name: 'Custom Engineering',
    icon: 'Settings',
    description: 'Tailored structural solutions designed to your exact specifications.',
    features: ['CAD design services', 'FEA analysis', 'Rapid prototyping', 'Turnkey installation'],
    detailedFeatures: [
      {
        title: 'Full Design Services',
        description: 'Our engineering team handles everything from concept through detailed design, producing complete 3D CAD models, engineering drawings, and assembly documentation.'
      },
      {
        title: 'FEA & Structural Analysis',
        description: 'Finite Element Analysis validates structural performance under your specific loading conditions, ensuring designs meet deflection, stress, and vibration requirements.'
      },
      {
        title: 'Rapid Prototyping',
        description: 'Quick-turn prototype builds allow design validation before full production. Test fit, function, and performance before committing to final configuration.'
      },
      {
        title: 'Turnkey Solutions',
        description: 'From design through delivery and installation support, we handle the complete project. Structures arrive ready for assembly with comprehensive documentation.'
      }
    ],
    applications: [
      'One-of-a-kind research equipment bases',
      'Multi-axis positioning systems',
      'Custom test fixtures and rigs',
      'Specialized material handling systems',
      'Prototype machine frames',
      'Unique application structural solutions'
    ],
    projectExample: {
      title: 'Custom Multi-Axis Test Fixture',
      challenge: 'Aerospace testing facility needed custom fixture for multi-axis vibration testing of satellite components, supporting 3,000 lbs with precision alignment, integration with existing shaker table, and 6-week delivery.',
      solution: 'Fully custom AngleLock structure designed with FEA validation, precision-machined mounting interface, integrated alignment system, and modular construction for rapid assembly and future modifications.',
      results: [
        'FEA-predicted deflection within 5% of measured performance',
        'Design-to-delivery completed in 5 weeks including engineering approval',
        'Alignment accuracy achieved ±0.002" across all axes',
        'Structure adapted for 3 different test configurations in first year'
      ]
    }
  }
];

export const TECHNOLOGY_MENU = [
  { name: 'AngleLock Overview', href: '/technology' },
  { name: 'Technical Specifications', href: '/technology/specifications' },
  { name: 'Technical Documentation', href: '/technology/documentation' },
  { name: 'Compare vs. T-Slot', href: '/compare/t-slot' }
];

export const RESOURCES_MENU = [
  { name: 'Blog & Articles', href: '/blog' },
  { name: 'Case Studies', href: '/resources/case-studies' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Videos', href: '/resources/videos' },
  { name: 'Podcasts', href: '/resources/podcasts' }
];

export const ABOUT_MENU = [
  { name: 'Company', href: '/about' },
  { name: 'Manufacturing', href: '/about/manufacturing' },
  { name: 'Careers', href: '/about/careers' },
  { name: 'Partners', href: '/about/partners' }
];

export const COMPANY_INFO = {
  name: 'Controlled Dynamics Inc.',
  tagline: 'Engineering Tomorrow\'s Foundations Today',
  vision: 'Engineering Tomorrow\'s Foundations Today',
  mission: 'We redefine industries. We proved it with Blanking Systems, and we\'re proving it again with AngleLock—a structural system so advanced it eliminates every limitation of conventional technology.',
  email: 'info@controlleddynamicsinc.com',
  phone: '(262) 421-8840',
  address: {
    street: '1058 Overland Court',
    city: 'Grafton',
    state: 'WI',
    zip: '53024'
  }
};

// Portfolio Projects - Real CDI Projects
export const PORTFOLIO = [
  {
    id: 'wafer-inspection-platform',
    title: 'Large-Scale Ultrasonic Wafer Inspection Platform',
    industry: 'Semiconductor',
    year: '2024',
    image: '/portfolio/wafer-inspection.jpg',
    description: 'High-precision platform for ultrasonic inspection of solar cells and semiconductor wafers, engineered for large-scale production environments with exceptional stability.',
    challenge: 'Required ultra-stable platform supporting large-format wafer inspection equipment with vibration isolation critical for ultrasonic measurement accuracy across extended work envelope.',
    solution: 'Custom-engineered AngleLock platform with integrated vibration isolation, precision leveling system, and rigid structural design to maintain measurement accuracy during high-throughput inspection operations.',
    keySpecs: [
      'Large-scale work envelope for production throughput',
      'Vibration-isolated for ultrasonic measurement accuracy',
      'Supports solar cell and semiconductor wafer inspection',
      'Designed for 24/7 production environment'
    ],
    results: [
      'Maintains sub-micron stability during ultrasonic inspection cycles',
      'Zero downtime for structural adjustments since installation',
      'Enables high-throughput inspection across multiple wafer formats',
      'Platform stability exceeds ultrasonic equipment specifications'
    ],
    featured: true
  },
  {
    id: 'cartesian-xyz-stage',
    title: 'High-Speed Linear Shaft Motor XYZ Stage',
    industry: 'Life Sciences',
    year: '2024',
    image: '/portfolio/xyz-stage.jpg',
    description: 'Ultra-high-speed cartesian robotics stage utilizing linear shaft motors for semiconductor and medical device manufacturing with precision positioning and rapid cycle times.',
    challenge: 'Medical device manufacturer required high-speed, high-precision XYZ stage for automated assembly processes demanding exceptional repeatability and cycle time performance.',
    solution: 'Engineered custom AngleLock frame integrating linear shaft motor technology with precision linear guides, creating an ultra-rigid structure that maintains accuracy at high acceleration rates.',
    keySpecs: [
      'Linear shaft motor drive for high-speed operation',
      'XYZ cartesian configuration with precision motion control',
      'Optimized for semiconductor and medical device processes',
      'High acceleration with maintained positioning accuracy'
    ],
    results: [
      'Achieved cycle time targets with positioning repeatability < 10 microns',
      'Supports high-speed technology processes in production environment',
      'AngleLock rigidity eliminates structural compliance issues',
      'Enables advanced manufacturing processes previously not achievable'
    ],
    featured: true
  },
  {
    id: 'mobile-robotics-platform',
    title: '6-Axis Mobile Robotics Docking Platform',
    industry: 'Robotics & Automation',
    year: '2023',
    image: '/portfolio/mobile-platform.jpg',
    description: 'Precision 6-axis platform designed for mobile docking of automation machining centers, enabling flexible manufacturing cell configurations with repeatable robot positioning.',
    challenge: 'Automation integrator needed mobile platform supporting 6-axis industrial robot with precision docking capability to multiple machining centers while maintaining calibration accuracy.',
    solution: 'Custom AngleLock mobile base with integrated precision docking system, vibration isolation, and rigid structure ensuring robot maintains calibration through repeated docking cycles.',
    keySpecs: [
      '6-axis industrial robot support with mobile capability',
      'Precision docking system for multiple machining centers',
      'Maintains robot calibration through dock/undock cycles',
      'Flexible manufacturing cell reconfiguration'
    ],
    results: [
      'Robot maintains calibration accuracy through 1000+ docking cycles',
      'Enables single robot to service multiple machining centers',
      'Docking repeatability achieves ±0.05mm across all positions',
      'Manufacturing flexibility increased while reducing robot investment'
    ],
    featured: true
  },
  {
    id: 'linear-motor-gantry',
    title: 'High-Precision Linear Motor 7th Axis Gantry',
    industry: 'General Industrial',
    year: '2024',
    image: '/portfolio/7th-axis-gantry.jpg',
    description: 'High-speed linear motor gantry system providing 7th axis motion for industrial robots in pick-and-place applications across all manufacturing sectors with silent, maintenance-free operation.',
    challenge: 'Multi-market manufacturer required high-precision 7th axis extending robot reach for pick-and-place operations with zero maintenance requirements and quiet operation for production environment.',
    solution: 'Engineered linear motor gantry utilizing AngleLock structural system for exceptional rigidity and vibration damping, creating silent high-speed motion with maintenance-free linear motor technology.',
    keySpecs: [
      'Linear motor drive eliminates mechanical wear components',
      'High-speed travel with silent operation',
      'Zero scheduled maintenance requirements',
      'Applicable across all manufacturing markets'
    ],
    results: [
      'Zero maintenance required over 2+ years of continuous operation',
      'Silent operation ideal for production environments',
      'High-speed motion increases robot productivity 40%+',
      'Stable, vibration-free platform maintains robot accuracy'
    ],
    featured: true
  },
  {
    id: '8-axis-inspection-platform',
    title: '8-Axis Semiconductor Inspection Platform',
    industry: 'Semiconductor',
    year: '2024',
    image: '/portfolio/8-axis-platform.jpg',
    description: 'Ultra-high-precision 8-axis inspection platform with sub-micron accuracy, linear shaft motor Z-axis, magnetic counterbalance control, and 0.5-meter parallel motion for semiconductor metrology.',
    challenge: 'Semiconductor manufacturer required advanced multi-axis inspection platform with sub-micron positioning accuracy, large parallel motion coplanarity, and balanced structure for precise measurement across extended work envelope.',
    solution: 'Custom-engineered AngleLock platform integrating 8-axis motion control with linear shaft motor Z-axis and magnetic counterbalance system, achieving exceptional coplanarity and structural balance across 0.5-meter parallel motion range.',
    keySpecs: [
      '8-axis precision motion with sub-micron accuracy',
      'Linear shaft motor Z-axis with magnetic counterbalance',
      '0.5-meter parallel motion with high coplanarity',
      'Balanced structure for vibration-free inspection'
    ],
    results: [
      'Achieved sub-micron positioning repeatability across all 8 axes',
      'Magnetic counterbalance maintains Z-axis stability throughout travel',
      'Coplanarity specifications met across full 0.5m parallel motion',
      'Platform rigidity enables advanced semiconductor metrology processes'
    ],
    featured: true
  }
];
