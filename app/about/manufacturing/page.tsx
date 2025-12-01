'use client';

import { motion } from 'framer-motion';
import { Factory, Award, Cog, Cpu, Shield, CheckCircle2, Zap, Target } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const capabilities = [
  {
    icon: Cpu,
    title: 'Advanced CAD Engineering',
    description: 'State-of-the-art SolidWorks and CAD platforms enable us to handle projects from simple machine bases to complex multi-axis systems for aerospace, semiconductor, and life sciences applications.',
    details: [
      'SolidWorks Premium with FEA and simulation capabilities',
      'Full parametric modeling and design automation',
      'Native file compatibility with all major CAD formats (STEP, IGES, Parasolid)',
      'Advanced surfacing and complex geometry handling',
      'Complete drawing packages with GD&T to ASME Y14.5'
    ]
  },
  {
    icon: Shield,
    title: 'Quality Management Systems',
    description: 'Our commitment to quality is formalized through rigorous quality management systems aligned with international standards, ensuring consistency and traceability across all projects.',
    details: [
      'ISO 9001:2015 Quality Management System principles',
      'Document control and configuration management',
      'Supplier quality requirements and material traceability',
      'First article inspection (FAI) and in-process verification',
      'Non-conformance tracking and corrective action processes'
    ]
  },
  {
    icon: Target,
    title: 'Precision Manufacturing',
    description: 'CNC machining centers and precision cutting equipment deliver tight tolerances required for mission-critical applications in regulated industries.',
    details: [
      'CNC milling and turning with ±0.005" (0.127mm) tolerances',
      'Precision saw cutting with automated length control',
      'CMM inspection and verification for critical dimensions',
      'Surface finish control to customer specifications',
      'Clean manufacturing environment for sensitive applications'
    ]
  },
  {
    icon: Cog,
    title: 'Process Excellence',
    description: 'Lean manufacturing principles and continuous improvement methodologies ensure efficient production while maintaining the highest quality standards.',
    details: [
      'Standardized work instructions and visual management',
      'Process capability studies (Cpk) for critical operations',
      '5S workplace organization and material flow optimization',
      'Mistake-proofing (poka-yoke) in assembly processes',
      'Real-time production tracking and scheduling'
    ]
  }
];

const industryStandards = [
  {
    industry: 'Aerospace & Defense',
    icon: '✈️',
    standards: [
      'AS9100 aerospace quality principles',
      'DFARS compliance for defense applications',
      'Material certifications and traceability',
      'FOD (Foreign Object Debris) control procedures',
      'Cleanroom assembly capabilities for satellite systems'
    ]
  },
  {
    industry: 'Semiconductor',
    icon: '💾',
    standards: [
      'ISO 14644 cleanroom compatibility (Class 1-8)',
      'Particle-free material handling and packaging',
      'ESD control and electrostatic discharge prevention',
      'Sub-micron precision for critical alignment features',
      'Vacuum-compatible materials and design practices'
    ]
  },
  {
    industry: 'Life Sciences',
    icon: '🧬',
    standards: [
      'FDA 21 CFR Part 11 documentation principles',
      'ISO 13485 medical device quality practices',
      'USP Class VI material compliance when required',
      'Chemical resistance validation for cleaning protocols',
      'Bioburden control and cleanroom manufacturing'
    ]
  },
  {
    industry: 'Robotics & Automation',
    icon: '🤖',
    standards: [
      'ANSI/RIA R15.06 robot safety integration',
      'CE marking compliance for European markets',
      'Precision mounting for ±0.05mm repeatability',
      'Vibration isolation for vision system accuracy',
      'Cable management and electromagnetic compatibility'
    ]
  }
];

const engineeringCapabilities = [
  {
    level: 'Simple Applications',
    description: 'Straightforward machine bases, workstations, and platforms',
    examples: [
      'Standard equipment mounting platforms',
      'Fixed-height work benches and assembly stations',
      'Basic machine guarding and enclosures',
      'Material handling carts and racks'
    ],
    turnaround: '2-3 weeks typical'
  },
  {
    level: 'Intermediate Complexity',
    description: 'Custom automation structures requiring integration and precision',
    examples: [
      'Multi-level platforms with integrated utilities',
      'Robot mounting systems with vibration isolation',
      'Modular cleanroom structural systems',
      'Precision equipment bases with leveling systems'
    ],
    turnaround: '4-6 weeks typical'
  },
  {
    level: 'Advanced Engineering',
    description: 'Mission-critical systems for demanding applications',
    examples: [
      'Multi-axis cartesian robot systems with FEA validation',
      'Vibration-isolated platforms for semiconductor inspection',
      'Custom satellite assembly fixtures with precision alignment',
      'Pharmaceutical manufacturing bases with full compliance documentation'
    ],
    turnaround: '6-10 weeks typical'
  }
];

const qualityProcesses = [
  {
    phase: 'Design Validation',
    icon: '📐',
    activities: [
      'Design review against customer requirements',
      'Finite Element Analysis (FEA) for structural validation',
      'Tolerance stack-up analysis for critical dimensions',
      'Design FMEA (Failure Mode and Effects Analysis)',
      'Material selection and compliance verification'
    ]
  },
  {
    phase: 'Manufacturing Control',
    icon: '⚙️',
    activities: [
      'First article inspection with dimensional verification',
      'In-process inspection at critical control points',
      'Statistical Process Control (SPC) for key operations',
      'Tool calibration and maintenance schedules',
      'Work instruction adherence and operator training'
    ]
  },
  {
    phase: 'Final Verification',
    icon: '✓',
    activities: [
      'Final dimensional inspection per drawing requirements',
      'Surface finish and cosmetic quality verification',
      'Assembly function testing and fit verification',
      'Documentation package review and completion',
      'Packaging inspection and shipping preparation'
    ]
  }
];

export default function ManufacturingPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-20">
          <Container>
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6">
                <div className="w-24 h-24 bg-[#C9A227] rounded-2xl flex items-center justify-center mx-auto">
                  <Factory className="w-12 h-12 text-[#0A1628]" />
                </div>
              </div>
              <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                Manufacturing Excellence
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                State-of-the-art engineering and manufacturing capabilities supporting mission-critical
                applications across aerospace, semiconductor, life sciences, and advanced manufacturing
                industries.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Core Capabilities */}
        <section className="py-20 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4 text-center">
                Core Capabilities
              </h2>
              <p className="text-center text-[#6B7C93] max-w-3xl mx-auto mb-12">
                Combining advanced engineering software, precision manufacturing equipment, and
                rigorous quality systems to deliver exceptional structural solutions.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {capabilities.map((capability, idx) => (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <Card className="p-8 h-full">
                      <div className="w-16 h-16 bg-[#C9A227] rounded-lg flex items-center justify-center mb-6">
                        <capability.icon className="w-8 h-8 text-[#0A1628]" />
                      </div>
                      <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">
                        {capability.title}
                      </h3>
                      <p className="text-[#6B7C93] leading-relaxed mb-6">
                        {capability.description}
                      </p>
                      <ul className="space-y-2">
                        {capability.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-1" />
                            <span className="text-sm text-[#6B7C93]">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Industry Standards */}
        <section className="py-20 bg-[#F4F6F8]">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4 text-center">
                Industry Standards & Compliance
              </h2>
              <p className="text-center text-[#6B7C93] max-w-3xl mx-auto mb-12">
                We understand and adhere to the stringent requirements of regulated industries,
                ensuring our structures meet or exceed applicable standards.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {industryStandards.map((industry, idx) => (
                  <motion.div
                    key={industry.industry}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <Card className="p-8 h-full">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-4xl">{industry.icon}</span>
                        <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628]">
                          {industry.industry}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {industry.standards.map((standard) => (
                          <li key={standard} className="flex items-start gap-3">
                            <Award className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                            <span className="text-[#6B7C93]">{standard}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Engineering Complexity Levels */}
        <section className="py-20 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4 text-center">
                Engineering Across All Complexity Levels
              </h2>
              <p className="text-center text-[#6B7C93] max-w-3xl mx-auto mb-12">
                From straightforward solutions to highly complex mission-critical systems, our engineering
                team has the expertise and tools to deliver exceptional results.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {engineeringCapabilities.map((level, idx) => (
                  <motion.div
                    key={level.level}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <Card className="p-8 h-full">
                      <div className="text-center mb-6">
                        <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-2">
                          {level.level}
                        </h3>
                        <p className="text-[#6B7C93] text-sm leading-relaxed">
                          {level.description}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-[#0A1628] mb-3 text-sm">Examples:</h4>
                        <ul className="space-y-2">
                          {level.examples.map((example) => (
                            <li key={example} className="flex items-start gap-2">
                              <span className="text-[#C9A227] mt-1">•</span>
                              <span className="text-sm text-[#6B7C93]">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-[#C9A227]" />
                          <span className="text-sm font-semibold text-[#0A1628]">
                            {level.turnaround}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Quality Processes */}
        <section className="py-20 bg-[#F4F6F8]">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4 text-center">
                Quality at Every Phase
              </h2>
              <p className="text-center text-[#6B7C93] max-w-3xl mx-auto mb-12">
                Our quality management approach ensures excellence from initial design through
                final delivery, with verification at every critical step.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {qualityProcesses.map((process, idx) => (
                  <motion.div
                    key={process.phase}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4">{process.icon}</div>
                      <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628]">
                        {process.phase}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {process.activities.map((activity) => (
                        <li key={activity} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-1" />
                          <span className="text-sm text-[#6B7C93]">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Materials & Processes */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-6">
                  Materials & Specifications
                </h2>
                <p className="text-[#6B7C93] leading-relaxed mb-6">
                  We work exclusively with premium materials from qualified suppliers, ensuring
                  consistency, traceability, and compliance with industry requirements.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0A1628]">Aluminum Extrusions:</strong>
                      <span className="text-[#6B7C93]"> 6105-T5 with clear anodized finish, non-particle shedding for cleanroom use</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0A1628]">Hardware & Fasteners:</strong>
                      <span className="text-[#6B7C93]"> Grade 8 or better, zinc-plated or stainless steel options</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0A1628]">Material Certifications:</strong>
                      <span className="text-[#6B7C93]"> Full traceability with mill test reports when required</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0A1628]">Special Materials:</strong>
                      <span className="text-[#6B7C93]"> Stainless steel, chemical-resistant coatings, ESD-safe options available</span>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-6">
                  Manufacturing Processes
                </h2>
                <p className="text-[#6B7C93] leading-relaxed mb-6">
                  Precision equipment and rigorous process controls deliver consistent quality
                  across all production volumes.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0A1628]">CNC Machining:</strong>
                      <span className="text-[#6B7C93]"> 3 and 4-axis milling, precision turning, ±0.005" tolerances</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0A1628]">Precision Cutting:</strong>
                      <span className="text-[#6B7C93]"> Automated saw systems with digital length control</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0A1628]">Assembly:</strong>
                      <span className="text-[#6B7C93]"> Clean assembly environment with calibrated torque tools</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0A1628]">Inspection:</strong>
                      <span className="text-[#6B7C93]"> CMM verification, calibrated measuring equipment, visual inspection</span>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
                Experience Manufacturing Excellence
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Whether your project is straightforward or highly complex, our engineering and
                manufacturing capabilities ensure exceptional results. Let's discuss how we can
                support your structural requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Request a Quote</Button>
                <Button variant="ghost" size="lg">Schedule Facility Tour</Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
