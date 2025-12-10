import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Building2, FlaskConical, Cpu, Bot, Factory, CheckCircle2, Target, Lightbulb, TrendingUp } from 'lucide-react';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { notFound } from 'next/navigation';

const caseStudiesData: Record<string, any> = {
  'cartesian-robotics-xy-platform': {
    title: 'Cartesian Robotics XY Platform Stabilization Study',
    industry: 'Robotics & Automation',
    icon: Bot,
    client: 'Advanced Robotics Manufacturer',
    location: 'Michigan, USA',
    projectDuration: '8 weeks (design to qualification)',
    overview: 'A leading robotics manufacturer developing high-speed pick-and-place systems needed a precision XY gantry platform capable of maintaining sub-micron positional accuracy during rapid acceleration and deceleration cycles. The platform needed to support a 50kg payload while achieving 2m/s movement speeds with zero vibration-induced positioning errors.',
    challenge: {
      title: 'The Challenge',
      description: 'The client\'s existing gantry system used welded steel construction with traditional linear guide rails. While functionally adequate, it suffered from vibration-induced positioning errors that limited throughput and accuracy:',
      points: [
        'Sub-micron positional accuracy required during high-speed movements (2m/s)',
        'Vibration damping to eliminate resonance at operational frequencies',
        'Structural rigidity to prevent deflection under 50kg payload during acceleration',
        'Minimal settling time after rapid stops (< 50ms to ±2 microns)',
        'Integration with existing servo control system and encoders',
        'Thermal stability across 18-24°C manufacturing environment'
      ]
    },
    solution: {
      title: 'The AngleLock Solution',
      description: 'Our engineering team designed a precision gantry platform using AngleLock structural framing optimized for dynamic stiffness:',
      features: [
        {
          title: 'High-Stiffness Gantry Frame',
          description: 'Reinforced AngleLock structure with diagonal bracing and gusset plates at all joints, achieving natural frequency > 80 Hz to avoid servo control resonance'
        },
        {
          title: 'Precision Linear Guide Integration',
          description: 'Custom mounting plates with 0.0005" flatness for linear guide rails, ensuring consistent preload and minimizing rolling resistance'
        },
        {
          title: 'Vibration Damping System',
          description: 'Strategic placement of constrained-layer damping at critical nodes to attenuate high-frequency vibration without adding mass'
        },
        {
          title: 'Thermal Compensation',
          description: 'Aluminum construction with symmetric design minimizes thermal growth and maintains positional accuracy across temperature variations'
        },
        {
          title: 'Modular Servo Mounting',
          description: 'Standardized servo motor and encoder mounts with precision alignment features for rapid installation and maintenance'
        },
        {
          title: 'Cable Management',
          description: 'Integrated cable carriers and routing channels protect wiring while maintaining clean motion profiles'
        }
      ]
    },
    implementation: {
      title: 'Implementation Process',
      timeline: [
        {
          phase: 'Week 1-2: Engineering & Analysis',
          activities: [
            'Motion profile analysis and load case definition',
            '3D CAD modeling with FEA dynamic analysis',
            'Modal analysis to determine natural frequencies',
            'Servo system integration planning with client controls team',
            'Design review and optimization iterations'
          ]
        },
        {
          phase: 'Week 3-5: Fabrication & Pre-Assembly',
          activities: [
            'Precision cutting and machining of structural components',
            'Linear guide rail mounting plate fabrication and grinding',
            'Damping material application at critical locations',
            'Pre-assembly and dimensional verification at our facility',
            'Procurement and integration of linear guides and servo components'
          ]
        },
        {
          phase: 'Week 6-7: Installation & Integration',
          activities: [
            'Frame assembly on-site with precision alignment',
            'Linear guide installation with preload verification',
            'Servo motor and encoder mounting and alignment',
            'Cable carrier installation and wiring routing',
            'Initial motion testing with unloaded gantry'
          ]
        },
        {
          phase: 'Week 8: Qualification & Optimization',
          activities: [
            'Dynamic performance testing at full speed and payload',
            'Vibration spectrum analysis with accelerometers',
            'Positional accuracy verification with laser interferometer',
            'Servo tuning optimization for settling time',
            'Long-duration reliability testing and documentation delivery'
          ]
        }
      ]
    },
    results: {
      title: 'Results & Benefits',
      metrics: [
        {
          metric: '±1.8 microns',
          label: 'Positional accuracy at 2 m/s speed',
          description: 'Exceeds the ±2 micron specification by 10%'
        },
        {
          metric: '35% faster',
          label: 'Cycle time improvement',
          description: 'From 2.8 seconds to 1.8 seconds per pick-place operation'
        },
        {
          metric: '42ms',
          label: 'Settling time to ±2 microns',
          description: 'Faster than 50ms specification requirement'
        },
        {
          metric: '18 months',
          label: 'Zero vibration-related failures',
          description: '24/7 operation with no performance degradation'
        }
      ],
      qualitativeResults: [
        'Throughput increased by 35% enabling additional production capacity',
        'Eliminated 95% of vibration-induced positioning errors',
        'Reduced servo motor power consumption by 18% due to lower friction',
        'System natural frequency (82 Hz) well above servo bandwidth (40 Hz)',
        'Thermal drift reduced to < 3 microns over 6°C temperature swing',
        'Platform design now standardized for three additional product lines'
      ]
    },
    testimonial: {
      quote: 'We were skeptical that an aluminum frame could match the stiffness of our welded steel gantries, but the AngleLock design exceeded our performance targets. The combination of structural rigidity and inherent damping solved vibration issues we\'d been fighting for years. Cycle time improvements paid for the system in under 6 months.',
      author: 'VP of Engineering',
      company: 'Advanced Robotics Manufacturer'
    },
    technicalSpecs: {
      title: 'Technical Specifications',
      specs: [
        { label: 'Work Envelope', value: '1200mm x 800mm (X x Y axis)' },
        { label: 'Payload Capacity', value: '50 kg at full speed and accuracy' },
        { label: 'Maximum Speed', value: '2.0 m/s (X and Y axes)' },
        { label: 'Positional Accuracy', value: '±1.8 microns at 2 m/s' },
        { label: 'Repeatability', value: '±0.5 microns' },
        { label: 'Settling Time', value: '42ms to ±2 micron window' },
        { label: 'Natural Frequency', value: '82 Hz (first mode)' },
        { label: 'Material', value: '6105-T5 Aluminum with damping treatment' }
      ]
    }
  },

  'pharmaceutical-equipment-base': {
    title: 'Pharmaceutical Manufacturing Equipment Base',
    industry: 'Life Sciences',
    icon: FlaskConical,
    client: 'Leading Pharmaceutical Manufacturer',
    location: 'New Jersey, USA',
    projectDuration: '3 weeks (design to installation)',
    overview: 'A pharmaceutical manufacturer needed equipment bases for bioprocessing equipment in an ISO Class 7 cleanroom. The bases needed to support heavy equipment, withstand daily chemical cleaning, and allow for equipment relocation as production needs evolved.',
    challenge: {
      title: 'The Challenge',
      description: 'The client was expanding their biologics production facility with new bioprocessing equipment requiring specialized support structures:',
      points: [
        'ISO Class 7 cleanroom certification requirements',
        'Support for 3,500 lb stainless steel bioprocessing equipment',
        'Daily exposure to aggressive cleaning chemicals and sanitizers',
        'Need to relocate equipment 2-3 times per year as production schedules change',
        'Precision leveling for proper equipment operation',
        'Non-particle shedding materials to prevent product contamination',
        'Installation within a 48-hour facility shutdown window'
      ]
    },
    solution: {
      title: 'The AngleLock Solution',
      description: 'We designed a modular equipment base specifically for cleanroom bioprocessing applications:',
      features: [
        {
          title: 'Cleanroom-Grade Construction',
          description: 'Clear anodized 6105-T5 aluminum with smooth surfaces and minimal crevices to prevent particle accumulation and microbial growth'
        },
        {
          title: 'Chemical-Resistant Finish',
          description: 'Hard anodized coating provides superior resistance to alcohols, peroxides, quaternary ammonium compounds, and other cleaning agents'
        },
        {
          title: 'Stainless Steel Feet',
          description: '316 stainless steel leveling feet with non-marking pads for cleanroom floor protection'
        },
        {
          title: 'Modular Design',
          description: 'Disassembles into manageable sections for movement through cleanroom airlocks and corridors'
        },
        {
          title: 'Integrated Leveling',
          description: 'Precision leveling system with bubble levels and adjustment range to compensate for floor irregularities'
        },
        {
          title: 'Cable Management',
          description: 'Internal channels for routing power, compressed air, and process piping while maintaining cleanroom aesthetics'
        }
      ]
    },
    implementation: {
      title: 'Implementation Process',
      timeline: [
        {
          phase: 'Week 1: Design & Validation',
          activities: [
            'Equipment interface measurements and load analysis',
            'Cleanroom compatibility review with client QA team',
            'Material selection and chemical resistance validation',
            'Design approval and documentation'
          ]
        },
        {
          phase: 'Week 2: Fabrication & Testing',
          activities: [
            'Precision cutting and machining of components',
            'Hard anodizing treatment for chemical resistance',
            'Stainless steel leveling foot integration',
            'Pre-assembly and load testing at our facility'
          ]
        },
        {
          phase: 'Week 3: Installation',
          activities: [
            'Components delivered in cleanroom-compatible packaging',
            'Assembly during scheduled facility shutdown',
            'Equipment mounting and final leveling',
            'Cleaning validation and ISO certification testing'
          ]
        }
      ]
    },
    results: {
      title: 'Results & Benefits',
      metrics: [
        {
          metric: 'ISO 14644-1 Class 7',
          label: 'Cleanroom certification achieved',
          description: 'Passed all particle count and microbial testing'
        },
        {
          metric: '3 relocations',
          label: 'In first 18 months of operation',
          description: 'Each move completed in under 4 hours'
        },
        {
          metric: '700+ days',
          label: 'Daily chemical washdowns',
          description: 'No degradation or corrosion observed'
        },
        {
          metric: '70% time savings',
          label: 'vs. welded steel alternative',
          description: '6 hours installation vs. 2 days for traditional approach'
        }
      ],
      qualitativeResults: [
        'Enabled flexible production scheduling by allowing equipment relocation',
        'Simplified cleaning validation compared to welded steel structures',
        'Eliminated need for specialized equipment rigging for moves',
        'Reduced facility downtime during production layout changes',
        'Structure maintained appearance and performance after 2+ years of daily cleaning'
      ]
    },
    testimonial: {
      quote: 'We\'ve moved this equipment three times already, and each time it\'s a simple process that our team handles internally. The fact that it still looks new after daily cleaning with harsh chemicals is impressive. This solution has given us the production flexibility we need.',
      author: 'Facilities Manager',
      company: 'Leading Pharmaceutical Manufacturer'
    },
    technicalSpecs: {
      title: 'Technical Specifications',
      specs: [
        { label: 'Base Size', value: '6\' x 8\' (1.8m x 2.4m)' },
        { label: 'Load Capacity', value: '4,000 lbs (1,800 kg) total' },
        { label: 'Material', value: '6105-T5 Aluminum, Hard Anodized' },
        { label: 'Feet', value: '316 Stainless Steel leveling feet' },
        { label: 'Environment', value: 'ISO Class 7 Cleanroom Certified' },
        { label: 'Chemical Resistance', value: 'Compatible with all standard cleanroom agents' },
        { label: 'Assembly Time', value: '6 hours including leveling' },
        { label: 'Relocation Time', value: '4 hours disassembly, move, and reassembly' }
      ]
    }
  },

  'wafer-inspection-system': {
    title: 'Wafer Inspection System Base',
    industry: 'Semiconductor',
    icon: Cpu,
    client: 'Leading Semiconductor Manufacturer',
    location: 'Oregon, USA',
    projectDuration: '4 weeks (design to qualification)',
    overview: 'A top-tier semiconductor fab needed a vibration-isolated base for an automated optical inspection (AOI) system in their Class 1 cleanroom. The system inspects 300mm wafers for defects and requires sub-micron vibration isolation to prevent measurement errors.',
    challenge: {
      title: 'The Challenge',
      description: 'Installing high-precision inspection equipment in an active fab environment presented multiple challenges:',
      points: [
        'Sub-micron vibration specification (< 1 micron) for accurate defect detection',
        'ISO Class 1 cleanroom compatibility (strictest cleanroom standard)',
        'Integration with existing fab flooring and utilities',
        '48-hour installation window during scheduled equipment downtime',
        'Precision mounting surface for automated wafer handling system',
        'Thermal stability across 20-23°C temperature range',
        'No particle generation that could contaminate wafer surfaces'
      ]
    },
    solution: {
      title: 'The AngleLock Solution',
      description: 'Our engineering team developed a specialized vibration-isolated base for semiconductor applications:',
      features: [
        {
          title: 'Advanced Vibration Isolation',
          description: 'Pneumatic isolation mounts specifically tuned for the equipment mass and fab floor characteristics, achieving 0.3 micron vibration (70% better than specification)'
        },
        {
          title: 'Precision Mounting Surface',
          description: 'CNC-machined aluminum top plate with ±0.001" flatness for automated wafer handler mounting'
        },
        {
          title: 'Class 1 Cleanroom Grade',
          description: 'Ultra-smooth anodized surfaces with no particle-shedding materials, validated for Class 1 environments'
        },
        {
          title: 'Modular Pre-Assembly',
          description: 'Fully pre-assembled at our facility to minimize on-site installation time in the expensive cleanroom environment'
        },
        {
          title: 'Integrated Utility Routing',
          description: 'Internal channels for power, compressed air (CDA), and vacuum lines with sealed pass-throughs'
        },
        {
          title: 'Thermal Stability',
          description: 'Aluminum construction provides excellent thermal conductivity for temperature uniformity'
        }
      ]
    },
    implementation: {
      title: 'Implementation Process',
      timeline: [
        {
          phase: 'Week 1: Engineering',
          activities: [
            'Equipment specifications review and vibration modeling',
            'Fab floor vibration survey to characterize baseline conditions',
            'Isolation mount selection and tuning calculations',
            'Precision mounting interface design with equipment OEM',
            'FEA structural analysis and design optimization'
          ]
        },
        {
          phase: 'Week 2-3: Fabrication',
          activities: [
            'Precision extrusion cutting to tight tolerances',
            'CNC machining of mounting plate and critical interfaces',
            'Surface finishing and cleanroom-grade anodizing',
            'Pneumatic isolation system integration',
            'Complete pre-assembly and structural testing at our facility'
          ]
        },
        {
          phase: 'Week 4: Installation & Qualification',
          activities: [
            'Cleanroom packaging and delivery',
            'Installation during scheduled 48-hour maintenance window',
            'Leveling and alignment using laser interferometry',
            'Equipment mounting and connection',
            'Vibration testing with accelerometers to validate performance',
            'Particle counting and cleanroom qualification',
            'Operational qualification (OQ) with wafer testing'
          ]
        }
      ]
    },
    results: {
      title: 'Results & Benefits',
      metrics: [
        {
          metric: '0.3 microns',
          label: 'Measured vibration amplitude',
          description: '70% better than the < 1 micron specification'
        },
        {
          metric: '36 hours',
          label: 'Total installation time',
          description: 'Including qualification testing, within 48-hour window'
        },
        {
          metric: 'Zero particles',
          label: 'No measurable particle generation',
          description: 'Certified for ISO Class 1 cleanroom operation'
        },
        {
          metric: '2+ years',
          label: 'Continuous 24/7 operation',
          description: 'No adjustments or maintenance required'
        }
      ],
      qualitativeResults: [
        'AOI system defect detection capability improved by 15% due to superior vibration isolation',
        'Installation completed 12 hours ahead of schedule, reducing fab downtime costs',
        'Zero contamination events attributed to the equipment base',
        'Thermal stability eliminated daily morning warm-up drift issues',
        'Modular design allowed future equipment upgrade without replacing base structure'
      ]
    },
    testimonial: {
      quote: 'The vibration performance exceeded our expectations. We specified less than 1 micron and got 0.3 microns. That extra margin has allowed our inspection system to detect defects that would have been missed otherwise. The installation was smooth and the system has been rock-solid for over two years.',
      author: 'Senior Process Engineer',
      company: 'Leading Semiconductor Manufacturer'
    },
    technicalSpecs: {
      title: 'Technical Specifications',
      specs: [
        { label: 'Base Size', value: '4\' x 6\' (1.2m x 1.8m)' },
        { label: 'Load Capacity', value: '2,500 lbs (1,135 kg)' },
        { label: 'Vibration Performance', value: '0.3 microns (measured), < 1 micron (spec)' },
        { label: 'Isolation System', value: 'Pneumatic mounts, > 95% isolation above 5 Hz' },
        { label: 'Mounting Surface Flatness', value: '±0.001" across entire surface' },
        { label: 'Material', value: '6105-T5 Aluminum, Ultra-smooth anodized finish' },
        { label: 'Environment', value: 'ISO Class 1 Cleanroom Certified' },
        { label: 'Operating Temperature', value: '20-23°C (fab ambient)' }
      ]
    }
  },

  'collaborative-robot-cell': {
    title: 'Collaborative Robot Assembly Cell',
    industry: 'Robotics & Automation',
    icon: Bot,
    client: 'Tier 1 Automotive Supplier',
    location: 'Michigan, USA',
    projectDuration: '5 weeks (design to production)',
    overview: 'An automotive electronics supplier needed a flexible assembly cell with collaborative robots that could be quickly reconfigured for different product families while maintaining precision and safety standards.',
    challenge: {
      title: 'The Challenge',
      description: 'The client manufactures electronic control modules for multiple vehicle platforms, each requiring different assembly processes:',
      points: [
        'Need to reconfigure cell weekly as production schedules change',
        'Two collaborative robots requiring precision mounting to maintain calibration',
        'Integrated vision inspection system with repeatable camera positioning',
        'Safety guarding with good visibility for operators and engineers',
        'Quick-change work surfaces for different product sizes',
        'Previous welded cell took 8 hours to reconfigure and often lost calibration',
        'Cable management for power, Ethernet, compressed air, and sensors'
      ]
    },
    solution: {
      title: 'The AngleLock Solution',
      description: 'We designed a fully modular robot cell that prioritizes reconfigurability without sacrificing performance:',
      features: [
        {
          title: 'Modular Frame Structure',
          description: 'AngleLock base frame with standardized mounting points on 2" grid for infinite positioning options'
        },
        {
          title: 'Quick-Change Robot Mounts',
          description: 'Precision-machined robot base plates with alignment pins for repeatable mounting in multiple positions'
        },
        {
          title: 'Adjustable Vision System Mounts',
          description: 'Articulating camera brackets with fine-adjustment knobs and position indicators for repeatable setups'
        },
        {
          title: 'Integrated Safety Guarding',
          description: 'Polycarbonate panels in aluminum frames with interlock-ready sliding doors for operator access'
        },
        {
          title: 'Modular Work Surface',
          description: 'Quick-change top plates with T-slot mounting for product-specific fixtures'
        },
        {
          title: 'Internal Cable Management',
          description: 'Built-in channels with removable covers for clean routing of all utilities'
        }
      ]
    },
    implementation: {
      title: 'Implementation Process',
      timeline: [
        {
          phase: 'Week 1: Planning & Design',
          activities: [
            'Process analysis for all product families to be run',
            'Robot reach and cycle time studies for optimal placement',
            'Safety assessment and guarding design',
            'Quick-change mechanism design for common reconfigurations',
            'Client review and approval'
          ]
        },
        {
          phase: 'Week 2-3: Fabrication',
          activities: [
            'Frame components cutting and machining',
            'Robot base plate precision machining',
            'Vision system mount fabrication',
            'Safety panel procurement and frame assembly',
            'Cable management hardware preparation'
          ]
        },
        {
          phase: 'Week 4: Installation & Integration',
          activities: [
            'Base frame assembly on production floor',
            'Robot mounting and connection',
            'Vision system installation and calibration',
            'Safety guarding integration and interlock wiring',
            'Pneumatic and electrical connections'
          ]
        },
        {
          phase: 'Week 5: Training & Qualification',
          activities: [
            'Baseline configuration documentation with photos',
            'Reconfiguration training for 3 common setups',
            'Robot re-calibration procedure verification',
            'Safety system validation',
            'First production run and process validation'
          ]
        }
      ]
    },
    results: {
      title: 'Results & Benefits',
      metrics: [
        {
          metric: '45 minutes',
          label: 'Average reconfiguration time',
          description: 'Down from 8 hours with previous welded cell'
        },
        {
          metric: '50+ reconfigs',
          label: 'Robot calibration maintained',
          description: 'Through over 50 product changeovers'
        },
        {
          metric: '3x improvement',
          label: 'Vision system repeatability',
          description: 'Compared to previous mounting method'
        },
        {
          metric: '12 product families',
          label: 'Successfully supported',
          description: 'Single cell handles wide product variety'
        }
      ],
      qualitativeResults: [
        'Cell changeover now done by production team without engineering support',
        'Reduced production scheduling conflicts by enabling faster changeovers',
        'Safety guarding modifications completed in minutes instead of days',
        'Added third robot after 6 months using pre-planned mounting points',
        'Cell configuration documentation reduced from 20 pages to simple photo reference'
      ]
    },
    testimonial: {
      quote: 'This cell has been a game-changer for our production flexibility. We can switch between products in the time it used to take just to remove the safety guarding. The robots stay calibrated, which was our biggest concern. Our operators actually enjoy the changeovers now instead of dreading them.',
      author: 'Manufacturing Engineering Manager',
      company: 'Tier 1 Automotive Supplier'
    },
    technicalSpecs: {
      title: 'Technical Specifications',
      specs: [
        { label: 'Cell Footprint', value: '10\' x 12\' (3m x 3.7m)' },
        { label: 'Robot Count', value: '2x UR10 collaborative robots (expandable to 4)' },
        { label: 'Payload Capacity', value: '1,000 lbs (450 kg) total' },
        { label: 'Reconfiguration Time', value: '45 minutes average' },
        { label: 'Robot Mount Repeatability', value: '±0.005" position accuracy' },
        { label: 'Safety', value: 'ANSI/RIA R15.06 compliant guarding' },
        { label: 'Vision System', value: 'Cognex camera with adjustable mounting' },
        { label: 'Utilities', value: '110V power, Ethernet, compressed air' }
      ]
    }
  },

  'cnc-machine-base': {
    title: 'CNC Machine Tool Base',
    industry: 'General Industrial',
    icon: Factory,
    client: 'Precision Machining Job Shop',
    location: 'Wisconsin, USA',
    projectDuration: '2 weeks (design to installation)',
    overview: 'A precision job shop needed a mobile base for their 8,000 lb CNC vertical machining center that could be relocated as their shop layout evolved while providing excellent vibration isolation for part quality.',
    challenge: {
      title: 'The Challenge',
      description: 'The client runs a high-mix, low-volume job shop that frequently reconfigures their floor layout to accommodate new equipment and optimize workflow:',
      points: [
        'Support 8,000 lb CNC mill with minimal deflection',
        'Provide vibration isolation to improve part surface finishes',
        'Enable relocation without specialized rigging equipment',
        'Previous part rejection rate of 12% due to vibration-induced quality issues',
        'Need for precise leveling after each move',
        'Installation over a single weekend to minimize production downtime',
        'Cost-effective alternative to permanent foundation or welded base'
      ]
    },
    solution: {
      title: 'The AngleLock Solution',
      description: 'We engineered a heavy-duty mobile base designed for large machine tools:',
      features: [
        {
          title: 'Reinforced Construction',
          description: 'Heavy-duty AngleLock extrusions with additional corner gussets and diagonal bracing for maximum rigidity'
        },
        {
          title: 'Industrial Casters',
          description: '8x heavy-duty swivel casters (2,000 lb capacity each) with total locking mechanism'
        },
        {
          title: 'Precision Leveling Feet',
          description: 'Height-adjustable leveling feet at 12 points with jam nuts to lock position after leveling'
        },
        {
          title: 'Vibration Damping',
          description: 'Industrial-grade elastomeric pads between machine feet and base to isolate vibration'
        },
        {
          title: 'Modular Sections',
          description: 'Pre-assembled into 4 sections for easier transportation and installation'
        },
        {
          title: 'Chip Containment',
          description: 'Integrated chip shield around base perimeter to contain coolant and chips during operation'
        }
      ]
    },
    implementation: {
      title: 'Implementation Process',
      timeline: [
        {
          phase: 'Week 1: Engineering & Fabrication',
          activities: [
            'Machine specifications and load distribution analysis',
            'Structural design and FEA verification for 150% load capacity',
            'Component procurement (casters, leveling feet, vibration pads)',
            'Frame fabrication and pre-assembly at our facility',
            'Load testing to validate design'
          ]
        },
        {
          phase: 'Week 2: Delivery & Installation',
          activities: [
            'Friday evening: Machine shutdown and coolant drain',
            'Saturday morning: Base sections delivered and positioned',
            'Saturday afternoon: Base assembly and machine placement',
            'Saturday evening: Precision leveling and vibration pad adjustment',
            'Sunday: Machine startup, test cuts, and quality verification',
            'Monday morning: Production resumed'
          ]
        }
      ]
    },
    results: {
      title: 'Results & Benefits',
      metrics: [
        {
          metric: 'Zero deflection',
          label: '8,000 lbs supported',
          description: 'Measured < 0.001" deflection under full machine weight'
        },
        {
          metric: '40% reduction',
          label: 'Part rejection rate',
          description: 'From 12% to 7% due to improved vibration control'
        },
        {
          metric: '4 relocations',
          label: 'In 2 years of operation',
          description: 'Each move completed in under 3 hours'
        },
        {
          metric: '36 hours',
          label: 'Installation time',
          description: 'Saturday morning to Monday production'
        }
      ],
      qualitativeResults: [
        'Surface finish quality improved on precision parts (aerospace components)',
        'Eliminated need for expensive floor work and permanent foundations',
        'Shop layout optimization now possible with existing equipment',
        'Base paid for itself in 4 months through reduced part rejections',
        'Machine can be easily relocated to accommodate new equipment purchases'
      ]
    },
    testimonial: {
      quote: 'We were skeptical that anything but a concrete foundation would work for our mill, but this base has exceeded all our expectations. The part quality actually improved, and being able to move the machine when we need to has been incredibly valuable. Best ROI on any equipment investment we\'ve made.',
      author: 'Owner',
      company: 'Precision Machining Job Shop'
    },
    technicalSpecs: {
      title: 'Technical Specifications',
      specs: [
        { label: 'Base Size', value: '8\' x 10\' (2.4m x 3m)' },
        { label: 'Load Capacity', value: '10,000 lbs (4,500 kg) rated, tested to 15,000 lbs' },
        { label: 'Machine Weight', value: '8,000 lbs (3,600 kg) CNC vertical machining center' },
        { label: 'Deflection', value: '< 0.001" under rated load' },
        { label: 'Casters', value: '8x 2,000 lb swivel casters with total lock' },
        { label: 'Leveling', value: '12-point precision leveling system' },
        { label: 'Vibration Isolation', value: 'Elastomeric pads, 70% vibration reduction' },
        { label: 'Mobility', value: '< 3 hours for relocation with 2-person crew' }
      ]
    }
  }
};

export async function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const study = caseStudiesData[slug];

  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${study.title} | Case Study | Controlled Dynamics Inc.`,
    description: study.overview.substring(0, 160),
    keywords: `${study.industry}, AngleLock, case study, ${study.title}, structural framing, manufacturing`,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const study = caseStudiesData[slug];

  if (!study) {
    notFound();
  }

  const Icon = study.icon;

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628]">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/resources/case-studies"
                className="inline-flex items-center gap-2 text-[#C9A227] hover:text-[#E5B83C] transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Case Studies
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#C9A227] rounded-lg">
                  <Icon className="w-8 h-8 text-[#0A1628]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#C9A227] uppercase tracking-wide">
                    {study.industry}
                  </div>
                  <div className="text-white/60">Case Study</div>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {study.title}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="text-white/60 mb-1">Client</div>
                  <div className="text-white font-medium">{study.client}</div>
                </div>
                <div>
                  <div className="text-white/60 mb-1">Location</div>
                  <div className="text-white font-medium">{study.location}</div>
                </div>
                <div>
                  <div className="text-white/60 mb-1">Timeline</div>
                  <div className="text-white font-medium">{study.projectDuration}</div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Overview */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-6">Project Overview</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {study.overview}
              </p>
            </div>
          </Container>
        </section>

        {/* Challenge */}
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A1628]">{study.challenge.title}</h2>
                  <p className="text-lg text-slate-700 mt-2">{study.challenge.description}</p>
                </div>
              </div>

              <ul className="space-y-3 mt-6">
                {study.challenge.points.map((point: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-red-600 flex-shrink-0"></div>
                    <span className="text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        {/* Solution */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#0A1628]">{study.solution.title}</h2>
                  <p className="text-lg text-slate-700 mt-2">{study.solution.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {study.solution.features.map((feature: any, index: number) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                    <h3 className="font-bold text-[#0A1628] mb-2">{feature.title}</h3>
                    <p className="text-slate-700 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Implementation */}
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8">{study.implementation.title}</h2>

              <div className="space-y-8">
                {study.implementation.timeline.map((phase: any, index: number) => (
                  <div key={index} className="relative pl-8 border-l-2 border-[#C9A227]">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#C9A227]"></div>
                    <h3 className="text-xl font-bold text-[#0A1628] mb-3">{phase.phase}</h3>
                    <ul className="space-y-2">
                      {phase.activities.map((activity: string, actIndex: number) => (
                        <li key={actIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Results */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-green-100 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-[#0A1628]">{study.results.title}</h2>
              </div>

              {/* Metrics Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {study.results.metrics.map((item: any, index: number) => (
                  <div key={index} className="bg-gradient-to-br from-[#0A1628] to-[#2C4A6E] p-6 rounded-lg text-white">
                    <div className="text-4xl font-bold text-[#C9A227] mb-2">{item.metric}</div>
                    <div className="text-lg font-semibold mb-1">{item.label}</div>
                    <div className="text-white/70 text-sm">{item.description}</div>
                  </div>
                ))}
              </div>

              {/* Qualitative Results */}
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#0A1628] mb-4">Additional Benefits</h3>
                <ul className="space-y-3">
                  {study.results.qualitativeResults.map((result: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Testimonial */}
        {study.testimonial && (
          <section className="py-16 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628]">
            <Container>
              <div className="max-w-3xl mx-auto text-center">
                <div className="text-6xl text-[#C9A227] mb-6">"</div>
                <p className="text-2xl text-white/90 leading-relaxed mb-8 italic">
                  {study.testimonial.quote}
                </p>
                <div className="text-[#C9A227] font-semibold">{study.testimonial.author}</div>
                <div className="text-white/60">{study.testimonial.company}</div>
              </div>
            </Container>
          </section>
        )}

        {/* Technical Specs */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8">{study.technicalSpecs.title}</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {study.technicalSpecs.specs.map((spec: any, index: number) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="font-semibold text-slate-700">{spec.label}</span>
                    <span className="text-[#0A1628]">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-4">
                Want the Full Case Study Details?
              </h2>
              <p className="text-lg text-slate-700 mb-8">
                Request the complete case study with detailed technical information, photos, and specifications. Or let our engineering team design a custom solution for your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`/contact?caseStudy=${encodeURIComponent(study.title)}`}>
                  <Button size="lg">Request Full Case Study</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="secondary">
                    Request Custom Solution
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
