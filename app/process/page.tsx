'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Ruler, Cpu, Wrench, Truck, CheckCircle2, ArrowRight, Clock, Shield, Users } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const processSteps = [
  {
    step: 1,
    icon: MessageSquare,
    title: 'Discovery & Consultation',
    duration: '1-2 days',
    description: 'We start by understanding your unique requirements, challenges, and application environment.',
    details: [
      'Initial conversation about your structural needs',
      'Review of environmental conditions (vibration, cleanroom, loads)',
      'Discussion of timeline and budget parameters',
      'Site assessment if needed'
    ]
  },
  {
    step: 2,
    icon: Ruler,
    title: 'Concept Design',
    duration: '3-5 days',
    description: 'Our engineering team develops preliminary designs and configuration options tailored to your specifications.',
    details: [
      '3D CAD modeling of proposed structure',
      'Multiple configuration options if applicable',
      'Preliminary load calculations',
      'Initial cost estimate and timeline'
    ]
  },
  {
    step: 3,
    icon: Cpu,
    title: 'Engineering & Analysis',
    duration: '1-2 weeks',
    description: 'Detailed engineering with FEA analysis ensures your structure meets all performance requirements.',
    details: [
      'Finite Element Analysis (FEA) for stress and deflection',
      'Vibration analysis for dynamic applications',
      'Detailed engineering drawings',
      'Final specifications and bill of materials'
    ]
  },
  {
    step: 4,
    icon: CheckCircle2,
    title: 'Review & Approval',
    duration: '2-3 days',
    description: 'You review the complete design package and we refine based on your feedback.',
    details: [
      'Design review meeting (virtual or in-person)',
      'CAD files and engineering analysis results',
      'Any necessary design iterations',
      'Final approval and purchase order'
    ]
  },
  {
    step: 5,
    icon: Wrench,
    title: 'Fabrication',
    duration: '2-6 weeks',
    description: 'We manufacture your custom structure using precision-cut AngleLock components and hardware.',
    details: [
      'Precision cutting and machining of extrusions',
      'Quality control and inspection',
      'Pre-assembly testing when required',
      'Professional packaging for shipment'
    ]
  },
  {
    step: 6,
    icon: Truck,
    title: 'Delivery & Support',
    duration: '1-2 weeks',
    description: 'Your structure arrives ready for rapid assembly with complete documentation and support.',
    details: [
      'Freight delivery to your facility',
      'Complete assembly instructions and CAD files',
      'Installation support (remote or on-site)',
      'Post-installation follow-up'
    ]
  }
];

const projectTypes = [
  {
    icon: Clock,
    title: 'Fast-Track Projects',
    description: 'Need it quickly? We can expedite design and fabrication for urgent requirements.',
    timeline: '2-3 weeks possible'
  },
  {
    icon: Shield,
    title: 'Mission-Critical Systems',
    description: 'Complex structures requiring extensive FEA, compliance documentation, and validation.',
    timeline: '8-12 weeks typical'
  },
  {
    icon: Users,
    title: 'Multi-Phase Programs',
    description: 'Large projects delivered in phases, with ongoing design collaboration.',
    timeline: 'Flexible scheduling'
  }
];

export default function ProcessPage() {
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
              <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                From Concept to Delivery
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                A streamlined engineering process that transforms your structural requirements
                into precision-built AngleLock solutions.
              </p>
              <div className="flex items-center justify-center gap-8 text-white/70">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#C9A227] font-['Barlow_Condensed']">4-8 weeks</div>
                  <div className="text-sm">Typical Timeline</div>
                </div>
                <div className="w-px h-12 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#C9A227] font-['Barlow_Condensed']">100%</div>
                  <div className="text-sm">Custom Engineered</div>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-white">
          <Container>
            <div className="space-y-12">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Step Number & Icon */}
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                        <div className="w-20 h-20 bg-[#0A1628] rounded-xl flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-10 h-10 text-[#C9A227]" />
                        </div>
                        <div>
                          <div className="font-['Barlow_Condensed'] text-sm text-[#6B7C93] font-semibold">
                            STEP {step.step}
                          </div>
                          <div className="text-sm text-[#C9A227] font-semibold mt-1">
                            {step.duration}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-9">
                      <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-3">
                        {step.title}
                      </h2>
                      <p className="text-lg text-[#6B7C93] mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                            <span className="text-[#6B7C93]">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connector */}
                  {idx < processSteps.length - 1 && (
                    <div className="flex justify-center my-8">
                      <ArrowRight className="w-8 h-8 text-[#C9A227] rotate-90 lg:rotate-90" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Project Types */}
        <section className="py-20 bg-[#F4F6F8]">
          <Container>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-[#0A1628] mb-4">
                Flexible Timelines for Every Need
              </h2>
              <p className="text-lg text-[#6B7C93] max-w-3xl mx-auto">
                We adapt our process to match your project complexity and timeline requirements.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {projectTypes.map((type, idx) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Card className="p-8 h-full">
                    <div className="w-16 h-16 bg-[#C9A227] rounded-lg flex items-center justify-center mb-6">
                      <type.icon className="w-8 h-8 text-[#0A1628]" />
                    </div>
                    <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">
                      {type.title}
                    </h3>
                    <p className="text-[#6B7C93] mb-4">
                      {type.description}
                    </p>
                    <div className="text-sm text-[#C9A227] font-semibold">
                      {type.timeline}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* What You Get */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-6">
                  What You Receive
                </h2>
                <p className="text-lg text-[#6B7C93] mb-6 leading-relaxed">
                  Every Controlled Dynamics structural system comes complete with comprehensive
                  documentation and support to ensure successful implementation.
                </p>
                <ul className="space-y-4">
                  {[
                    'Complete 3D CAD files (STEP, IGES, or your preferred format)',
                    'Detailed assembly drawings and instructions',
                    'FEA analysis results and engineering calculations',
                    'Bill of materials with all components labeled',
                    'Assembly hardware and fasteners included',
                    'Professional packaging with component organization',
                    'Installation support (remote or on-site available)',
                    'Lifetime technical support for modifications'
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B7C93]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-2xl p-12"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-['Barlow_Condensed'] text-3xl font-bold text-white mb-6">
                  Why Our Process Works
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-[#C9A227] font-semibold mb-2">Experienced Engineers</div>
                    <p className="text-white/80 text-sm">
                      15+ years designing mission-critical structures for aerospace, semiconductor, and life sciences.
                    </p>
                  </div>
                  <div>
                    <div className="text-[#C9A227] font-semibold mb-2">Proven Technology</div>
                    <p className="text-white/80 text-sm">
                      AngleLock's 10x strength advantage and vibration resistance have been validated in thousands of installations.
                    </p>
                  </div>
                  <div>
                    <div className="text-[#C9A227] font-semibold mb-2">Collaborative Approach</div>
                    <p className="text-white/80 text-sm">
                      We work closely with your team throughout the process to ensure the final structure exceeds expectations.
                    </p>
                  </div>
                  <div>
                    <div className="text-[#C9A227] font-semibold mb-2">Built for Change</div>
                    <p className="text-white/80 text-sm">
                      Every structure is fully modular and reconfigurable, protecting your investment as requirements evolve.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Let's discuss your structural requirements and how AngleLock technology can solve your challenges.
                Most projects begin with a simple conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Schedule a Consultation</Button>
                <Button variant="ghost" size="lg">View Case Studies</Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
