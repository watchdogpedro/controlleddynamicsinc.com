import type { Metadata } from 'next';
import Link from 'next/link';
import { Plane, CheckCircle2, ArrowRight, Building2, Rocket, Satellite } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Structural Framing Systems for Boeing, SpaceX, Lockheed Martin & Aerospace Companies | Controlled Dynamics',
  description: 'Precision structural framing systems for aerospace and defense companies including Boeing, SpaceX, Tesla, Lockheed Martin, Northrop Grumman, General Dynamics, and Raytheon. Superior alternative to 80/20 for satellite assembly fixtures, GSE, avionics test stands, and cleanroom applications. 10x stronger with micron-level precision.',
  keywords: [
    'Boeing structural framing', 'SpaceX equipment frames', 'Lockheed Martin test fixtures',
    'Northrop Grumman ground support', 'General Dynamics assembly fixtures',
    'Raytheon test stands', 'Blue Origin equipment bases', 'Virgin Galactic fixtures',
    'aerospace structural framing', 'satellite assembly fixtures', 'aerospace ground support equipment',
    'avionics test stands', 'aerospace cleanroom systems', 'missile assembly frames',
    'spacecraft integration fixtures', 'aerospace precision framing',
    'vibration-isolated aerospace fixtures', 'reconfigurable satellite fixtures',
    'aerospace 80/20 alternative', 'aerospace T-slot alternative',
    'precision aerospace framing', 'aerospace equipment bases',
    'flight simulator platforms', 'aerospace testing equipment',
    'satellite ground support equipment', 'launch vehicle assembly fixtures'
  ],
  openGraph: {
    title: 'Precision Structural Framing for Aerospace & Defense Companies',
    description: 'Serving Boeing, SpaceX, Lockheed Martin, and leading aerospace companies with mission-critical structural solutions.',
    type: 'website',
  },
};

export default function AerospaceCompaniesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-20">
          <Container>
            <div className="max-w-5xl">
              <div className="flex items-center gap-3 mb-6">
                <Plane className="w-12 h-12 text-[#C9A227]" />
                <div className="h-12 w-1 bg-[#C9A227]"></div>
                <h1 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  Structural Framing Systems for Aerospace & Defense
                </h1>
              </div>

              <p className="text-2xl text-white/90 mb-6 leading-relaxed">
                Precision structural solutions for Boeing, SpaceX, Lockheed Martin, Northrop Grumman,
                General Dynamics, Raytheon, Blue Origin, and aerospace manufacturers worldwide.
              </p>

              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                When micron-level precision, vibration isolation, and mission-critical reliability are non-negotiable,
                aerospace companies trust AngleLock structural framing systems for satellite assembly fixtures,
                ground support equipment, avionics test stands, and cleanroom applications.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" href="/contact">
                  Request Engineering Consultation
                </Button>
                <Button size="lg" variant="secondary" href="/resources/case-studies">
                  View Aerospace Case Studies
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Why Aerospace Companies Choose AngleLock */}
        <section className="py-20 bg-white">
          <Container>
            <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-[#0A1628] mb-12 text-center">
              Why Aerospace & Defense Companies Choose AngleLock
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: 'Micron-Level Precision',
                  description: 'Satellite assembly fixtures require ±5 micron tolerances. Our precision-machined aluminum framing with mechanically locked joints maintains alignment under load.',
                  stat: '< 5μm',
                  label: 'Deflection'
                },
                {
                  title: 'Vibration Isolation',
                  description: 'Unlike 80/20 and T-slot systems where friction connections loosen over time, AngleLock joints actually tighten under vibration - critical for avionics testing.',
                  stat: '0',
                  label: 'Loosening'
                },
                {
                  title: 'Rapid Reconfiguration',
                  description: 'Satellite programs evolve. Reconfigure fixtures in hours instead of days without compromising structural integrity or precision alignment.',
                  stat: '4 hrs',
                  label: 'Reconfig Time'
                },
                {
                  title: 'Cleanroom Compatible',
                  description: 'Non-particle-shedding aluminum suitable for Class 1-8 cleanrooms. Essential for satellite integration and precision aerospace manufacturing.',
                  stat: 'ISO 1-8',
                  label: 'Cleanroom'
                },
                {
                  title: 'Heavy Load Capacity',
                  description: 'Support multi-ton satellites, launch vehicle components, and heavy ground support equipment with structural rigidity rivaling welded steel.',
                  stat: '10x',
                  label: 'Stronger'
                },
                {
                  title: 'ITAR Compliance Ready',
                  description: 'US-based manufacturing in Wisconsin. Full documentation and traceability for defense and aerospace programs requiring ITAR compliance.',
                  stat: 'US',
                  label: 'Made'
                }
              ].map((feature) => (
                <Card key={feature.title} className="p-6">
                  <div className="text-5xl font-bold text-[#C9A227] mb-4">
                    {feature.stat}
                    <span className="text-2xl ml-1">{feature.label}</span>
                  </div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#6B7C93] leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Aerospace Applications */}
        <section className="py-20 bg-slate-50">
          <Container>
            <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-[#0A1628] mb-12 text-center">
              Aerospace & Defense Applications
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Satellite,
                  title: 'Satellite Assembly & Integration Fixtures',
                  applications: [
                    'Large satellite integration platforms (12\'×20\' and larger)',
                    'Precision alignment fixtures for optical payloads',
                    'Vibration-isolated assembly workstations',
                    'Reconfigurable fixtures for multiple satellite platforms',
                    'Cleanroom-compatible structural systems',
                    'Thermal test support structures'
                  ],
                  companies: 'Used by: Major satellite manufacturers, NASA contractors, defense aerospace primes'
                },
                {
                  icon: Building2,
                  title: 'Aircraft Ground Support Equipment (GSE)',
                  applications: [
                    'Engine maintenance stands and fixtures',
                    'Avionics testing and integration platforms',
                    'Wing assembly support structures',
                    'Fuselage work platforms and access systems',
                    'Component inspection and testing stands',
                    'Mobile tool and equipment carts'
                  ],
                  companies: 'Used by: Commercial aircraft OEMs, MRO facilities, defense contractors'
                },
                {
                  icon: Rocket,
                  title: 'Launch Vehicle & Spacecraft Systems',
                  applications: [
                    'Rocket motor assembly fixtures',
                    'Payload integration stands',
                    'Propulsion system test fixtures',
                    'Launch vehicle component handling frames',
                    'Spacecraft structural test platforms',
                    'Mission control equipment racks'
                  ],
                  companies: 'Used by: Space launch providers, propulsion manufacturers, spacecraft builders'
                },
                {
                  icon: Plane,
                  title: 'Missile & Defense Systems',
                  applications: [
                    'Missile component assembly fixtures',
                    'Precision alignment systems for guidance components',
                    'Test and calibration stands',
                    'Secure storage and transport racks',
                    'Integration workstations for electronics',
                    'Quality inspection platforms'
                  ],
                  companies: 'Used by: Defense contractors, missile manufacturers, DoD suppliers'
                }
              ].map((application) => {
                const Icon = application.icon;
                return (
                  <Card key={application.title} className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-[#0A1628] rounded-lg flex items-center justify-center">
                        <Icon className="w-8 h-8 text-[#C9A227]" />
                      </div>
                      <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628]">
                        {application.title}
                      </h3>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {application.applications.map((app) => (
                        <li key={app} className="flex items-start gap-3 text-[#6B7C93]">
                          <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-sm text-[#0A1628] font-semibold bg-[#C9A227]/10 p-3 rounded">
                      {application.companies}
                    </p>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Comparison vs Current Solutions */}
        <section className="py-20 bg-white">
          <Container>
            <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-[#0A1628] mb-12 text-center">
              How AngleLock Compares to Current Aerospace Framing Solutions
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#0A1628]">
                    <th className="text-left p-4 font-['Barlow_Condensed'] text-xl">Requirement</th>
                    <th className="text-center p-4 font-['Barlow_Condensed'] text-xl bg-[#C9A227]/10">AngleLock</th>
                    <th className="text-center p-4 font-['Barlow_Condensed'] text-xl">80/20 / T-Slot</th>
                    <th className="text-center p-4 font-['Barlow_Condensed'] text-xl">Welded Steel</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { requirement: 'Precision (micron-level)', anglelock: '±5μm', tslot: '±50μm', welded: '±25μm' },
                    { requirement: 'Vibration Resistance', anglelock: 'Excellent (self-tightening)', tslot: 'Poor (loosens over time)', welded: 'Good (but permanent)' },
                    { requirement: 'Reconfiguration Time', anglelock: '4 hours', tslot: '8 hours', welded: 'Not possible' },
                    { requirement: 'Load Capacity (strength)', anglelock: '10x vs T-slot', tslot: 'Baseline', welded: 'Excellent' },
                    { requirement: 'Cleanroom Compatible', anglelock: 'Yes (non-shedding)', tslot: 'Limited (fabric covers)', welded: 'Yes (but rust risk)' },
                    { requirement: 'Assembly Time', anglelock: '50% faster', tslot: 'Baseline', welded: 'Very slow' },
                    { requirement: 'Maintenance Required', anglelock: 'Zero', tslot: 'Frequent re-tightening', welded: 'Corrosion prevention' },
                    { requirement: 'Future Modifications', anglelock: 'Unlimited', tslot: 'Yes', welded: 'Not possible' }
                  ].map((row, idx) => (
                    <tr key={row.requirement} className={idx % 2 === 0 ? 'bg-slate-50' : ''}>
                      <td className="p-4 font-semibold text-[#0A1628]">{row.requirement}</td>
                      <td className="p-4 text-center bg-[#C9A227]/10 font-semibold text-[#0A1628]">{row.anglelock}</td>
                      <td className="p-4 text-center text-[#6B7C93]">{row.tslot}</td>
                      <td className="p-4 text-center text-[#6B7C93]">{row.welded}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        {/* Real Aerospace Projects */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
              Real Aerospace Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: 'Satellite Assembly Platform',
                  detail: '12\'×20\' precision fixture',
                  results: ['< 5μm deflection', '8 reconfigurations', '3 years, zero maintenance']
                },
                {
                  title: 'Avionics Test Stand',
                  detail: 'Multi-bay testing system',
                  results: ['Vibration isolated', 'Modular bays', 'Quick changeover']
                },
                {
                  title: 'Launch Vehicle Fixture',
                  detail: 'Propulsion assembly stand',
                  results: ['20,000 lb capacity', 'Precision alignment', 'Cleanroom compatible']
                }
              ].map((project) => (
                <Card key={project.title} className="p-6 bg-white/5 border-white/10">
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#C9A227] mb-4">{project.detail}</p>
                  <ul className="space-y-2">
                    {project.results.map((result) => (
                      <li key={result} className="flex items-start gap-2 text-white/80 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/resources/case-studies">
                <Button size="lg" variant="secondary">
                  View Detailed Aerospace Case Studies
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* Engineering Support */}
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-[#0A1628] mb-8 text-center">
                Full Engineering Support for Aerospace Programs
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  'Custom CAD design and 3D modeling',
                  'Finite Element Analysis (FEA) validation',
                  'Load calculations and structural verification',
                  'Cleanroom certification documentation',
                  'ITAR compliance and documentation',
                  'Technical drawings and assembly instructions',
                  'On-site installation support available',
                  'Prototype builds for design validation'
                ].map((service) => (
                  <div key={service} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-[#6B7C93]">{service}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#C9A227]/10 p-8 rounded-lg text-center">
                <h3 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-4">
                  Ready to Discuss Your Aerospace Project?
                </h3>
                <p className="text-lg text-[#6B7C93] mb-6">
                  Our aerospace engineering team is ready to help you design the perfect structural solution
                  for your satellite, aircraft, launch vehicle, or defense application.
                </p>
                <Button size="lg" href="/contact">
                  Request Engineering Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ for Aerospace */}
        <section className="py-20 bg-slate-50">
          <Container>
            <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-[#0A1628] mb-12 text-center">
              Frequently Asked Questions - Aerospace Applications
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: 'Can AngleLock framing meet aerospace-grade precision requirements for satellite assembly?',
                  a: 'Yes. Our precision-machined aluminum extrusions combined with mechanically locked joints achieve ±5 micron tolerances under load. We have successfully delivered satellite assembly fixtures for major aerospace contractors with deflection specifications below 5 microns across 12\'×20\' platforms supporting 2,000+ lbs.'
                },
                {
                  q: 'Is AngleLock suitable for cleanroom environments required in satellite manufacturing?',
                  a: 'Absolutely. Our clear anodized 6105-T5 aluminum is non-particle-shedding and suitable for ISO Class 1-8 cleanrooms. Unlike T-slot systems that require fabric covers or boots (which can shed particles), AngleLock\'s all-aluminum construction inherently meets cleanroom requirements for aerospace and semiconductor applications.'
                },
                {
                  q: 'How does AngleLock compare to 80/20 or T-slot for aerospace ground support equipment?',
                  a: 'AngleLock provides 10x greater strength than friction-based T-slot systems and eliminates the loosening issues that plague 80/20 connections under vibration. For aerospace GSE applications involving avionics testing, engine maintenance, or flight simulator platforms, the self-tightening mechanical lock is essential for maintaining precision over time.'
                },
                {
                  q: 'Can fixtures be reconfigured for different satellite platforms without losing precision?',
                  a: 'Yes. Unlike welded fixtures that are permanent, AngleLock structures can be fully disassembled and reconfigured without compromising structural integrity or precision. We have aerospace customers who have reconfigured the same fixture 8+ times over 3 years for different satellite programs while maintaining micron-level accuracy.'
                },
                {
                  q: 'What load capacities can AngleLock support for launch vehicle or heavy aerospace equipment?',
                  a: 'AngleLock can support loads from hundreds to tens of thousands of pounds depending on configuration. We have delivered structures supporting 20,000+ lb launch vehicle components with verified deflection under 0.010". Our engineering team provides FEA analysis to validate structural performance for your specific loading requirements.'
                },
                {
                  q: 'Do you provide ITAR compliance and documentation for defense aerospace programs?',
                  a: 'Yes. Controlled Dynamics manufactures in the United States (Wisconsin) and can provide full documentation and traceability for programs requiring ITAR compliance. We work with numerous defense contractors and aerospace primes on ITAR-controlled projects.'
                },
                {
                  q: 'What is the typical lead time for custom aerospace fixtures?',
                  a: 'Standard lead time is 4-8 weeks from engineering approval through delivery, depending on complexity and customization level. We have successfully delivered rush projects in as little as 3 weeks when required. Contact us to discuss your specific timeline requirements.'
                },
                {
                  q: 'Can you handle large-scale satellite integration platforms (12\'×20\' or larger)?',
                  a: 'Yes. We have designed and delivered satellite integration platforms up to 12\'×20\' and larger. Our modular design allows for shipping in sections and field assembly, making it practical to install very large structures in your facility. FEA validation ensures structural performance across the entire platform.'
                }
              ].map((faq) => (
                <Card key={faq.q} className="p-6">
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-[#6B7C93] leading-relaxed">
                    {faq.a}
                  </p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/faq">
                <Button variant="secondary">
                  View All Frequently Asked Questions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
                Join Boeing, Lockheed Martin, and Leading Aerospace Companies
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Discover why aerospace and defense contractors trust AngleLock for mission-critical structural solutions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" href="/contact">
                  Contact Aerospace Team
                </Button>
                <Button size="lg" variant="secondary" href="/resources/case-studies">
                  Download Case Studies
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
