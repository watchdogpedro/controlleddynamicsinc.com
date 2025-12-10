import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, FlaskConical, Cpu, Bot, Factory, Satellite } from 'lucide-react';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Case Studies | Controlled Dynamics Inc.',
  description: 'Real-world AngleLock success stories across aerospace, life sciences, semiconductor, robotics, and industrial applications. See how our structural systems solve critical engineering challenges.',
  keywords: 'AngleLock case studies, structural framing examples, engineering success stories, machine base case studies, cleanroom systems examples, industrial solutions',
};

const caseStudies = [
  {
    id: 'cartesian-robotics-xy-platform',
    title: 'Cartesian Robotics XY Platform Stabilization Study',
    industry: 'Robotics & Automation',
    icon: Bot,
    description: 'Advanced robotics manufacturer needed a precision XY gantry platform with sub-micron stability for high-speed pick-and-place operations.',
    challenge: 'Sub-micron stability during high-speed robotic movements',
    results: ['< 2 micron positional accuracy at 2m/s speeds', 'Cycle time improved by 35%', 'Zero vibration-related failures in 18 months', 'Payload capacity: 50kg with full precision'],
    image: '/images/case-studies/cartesian-robotics.jpg'
  },
  {
    id: 'linear-shaft-motor-gantry',
    title: 'Linear Shaft Motor Gantry System',
    industry: 'Semiconductor',
    icon: Cpu,
    description: 'Semiconductor equipment manufacturer needed ultra-precision gantry for wafer inspection with linear shaft motors and nanometer-level accuracy.',
    challenge: 'Nanometer positioning with zero cogging and thermal stability',
    results: ['±50 nanometer repeatability achieved', 'Zero cogging torque ripple', '0.1°C thermal stability maintained', 'Throughput increased 45%'],
    image: '/images/case-studies/linear-motor-gantry.jpg'
  },
  {
    id: 'wafer-inspection-system',
    title: 'Wafer Inspection System Base',
    industry: 'Semiconductor',
    icon: Cpu,
    description: 'Leading semiconductor manufacturer needed vibration-isolated base for automated optical inspection system in Class 1 cleanroom.',
    challenge: '< 1 micron vibration spec in Class 1 cleanroom',
    results: ['0.3 micron vibration (70% below spec)', '36-hour installation with qualification', 'Zero particle generation', '24/7 operation for 2+ years'],
    image: '/images/case-studies/wafer-inspection.jpg'
  },
  {
    id: 'collaborative-robot-cell',
    title: 'Collaborative Robot Assembly Cell',
    industry: 'Robotics & Automation',
    icon: Bot,
    description: 'Automotive supplier needed flexible assembly cell with 2 cobots and vision inspection that could be reconfigured weekly.',
    challenge: 'Weekly reconfigurations while maintaining calibration',
    results: ['Reconfiguration: 8 hours → 45 minutes', 'Calibration maintained through 50+ reconfigs', '3x improvement in vision repeatability', '12 product families supported'],
    image: '/images/case-studies/cobot-cell.jpg'
  },
  {
    id: 'high-precision-docking-station',
    title: 'High Precision Docking Station',
    industry: 'Aerospace & Defense',
    icon: Satellite,
    description: 'Aerospace contractor needed automated docking station for satellite component testing with micron-level repeatability across thermal cycles.',
    challenge: 'Micron-level repeatability with automated alignment and thermal cycling',
    results: ['±3 micron docking repeatability achieved', 'Automated alignment in <15 seconds', '200+ thermal cycles with no degradation', '85% reduction in setup time'],
    image: '/images/case-studies/docking-station.jpg'
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628]">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Real-world success stories demonstrating how AngleLock structural systems solve critical engineering challenges across high-performance industries.
              </p>
            </div>
          </Container>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-white">
          <Container>
            <div className="space-y-16">
              {caseStudies.map((study, index) => {
                const Icon = study.icon;
                return (
                  <div
                    key={study.id}
                    className="group bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                  >
                    <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                      {/* Image Side */}
                      <div className={`relative h-80 md:h-full bg-gradient-to-br from-[#0A1628] to-[#2C4A6E] ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className="w-32 h-32 text-[#C9A227] opacity-20" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227] rounded-full text-sm font-bold text-[#0A1628]">
                            <Icon className="w-4 h-4" />
                            {study.industry}
                          </div>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-[#0A1628] mb-4 group-hover:text-[#2C4A6E] transition-colors">
                          {study.title}
                        </h2>

                        <p className="text-lg text-slate-600 mb-6">
                          {study.description}
                        </p>

                        <div className="mb-6">
                          <h3 className="text-sm font-bold text-[#C9A227] uppercase tracking-wide mb-2">
                            The Challenge
                          </h3>
                          <p className="text-slate-700 font-medium">
                            {study.challenge}
                          </p>
                        </div>

                        <div className="mb-8">
                          <h3 className="text-sm font-bold text-[#C9A227] uppercase tracking-wide mb-3">
                            Key Results
                          </h3>
                          <ul className="space-y-2">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <ArrowRight className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Link href={`/contact?caseStudy=${encodeURIComponent(study.title)}`}>
                          <Button variant="primary">
                            Request Case Study
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Your Success Story?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Let our engineering team help you design the perfect structural solution for your application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">Request a Quote</Button>
                </Link>
                <Link href="/technology">
                  <Button size="lg" variant="secondary">
                    Learn About AngleLock
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
