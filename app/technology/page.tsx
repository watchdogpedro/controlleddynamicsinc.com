'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Wrench, Infinity, CheckCircle2, Lock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { TECHNOLOGY_FEATURES } from '@/lib/constants';

const iconMap = [Shield, Zap, Wrench, Infinity];

export default function TechnologyPage() {
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
                  <Lock className="w-12 h-12 text-[#0A1628]" />
                </div>
              </div>
              <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                AngleLock Technology
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                A revolutionary aluminum framing system featuring patented self-aligning brackets
                with angled fasteners that create mechanically locked joints—10x stronger than
                traditional T-slot systems.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* The Problem */}
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
                  The Problem with Traditional T-Slot Systems
                </h2>
                <p className="text-[#6B7C93] leading-relaxed mb-4">
                  Traditional aluminum framing relies on friction-based T-slot connections.
                  While adequate for light-duty applications, these systems have critical
                  weaknesses in demanding industrial environments:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#EF4444] text-xl">×</span>
                    <span className="text-[#6B7C93]">Connections loosen over time, especially under vibration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#EF4444] text-xl">×</span>
                    <span className="text-[#6B7C93]">Limited strength requires oversized components</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#EF4444] text-xl">×</span>
                    <span className="text-[#6B7C93]">Frequent maintenance and re-tightening required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#EF4444] text-xl">×</span>
                    <span className="text-[#6B7C93]">Cannot achieve the rigidity needed for precision equipment</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-[#F4F6F8] rounded-2xl p-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">
                  The AngleLock Solution
                </h3>
                <p className="text-[#6B7C93] mb-6">
                  AngleLock technology uses angled fasteners that create 5 planes of
                  anchoring, resulting in a mechanically locked connection that actually
                  tightens under load and vibration.
                </p>
                <div className="bg-white rounded-lg p-6 border-2 border-[#C9A227]">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#C9A227] font-['Barlow_Condensed'] mb-2">
                      5 Planes
                    </div>
                    <p className="text-sm text-[#6B7C93]">of Mechanical Anchoring</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Key Advantages */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-4">
                The AngleLock Advantage
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Revolutionary performance that outperforms both traditional aluminum and welded steel
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TECHNOLOGY_FEATURES.map((feature, idx) => {
                const Icon = iconMap[idx];
                
                return (
                  <motion.div
                    key={feature.title}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <Icon className="w-12 h-12 text-[#C9A227] mb-4" />
                    <div className="font-['Barlow_Condensed'] text-4xl font-bold text-[#C9A227] mb-2">
                      {feature.stat}
                    </div>
                    <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-[#F4F6F8]">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-12 text-center">
                Technical Specifications
              </h2>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-white rounded-xl p-8 border border-gray-200">
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-6">
                    Materials & Construction
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0A1628]">Extrusions:</strong>
                        <span className="text-[#6B7C93]"> 6105-T5 architectural grade aluminum</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0A1628]">Fasteners:</strong>
                        <span className="text-[#6B7C93]"> M6 bolts, 180 in-lb torque standard</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0A1628]">Finish:</strong>
                        <span className="text-[#6B7C93]"> Clear anodized, Class I (corrosion resistant)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0A1628]">Weight:</strong>
                        <span className="text-[#6B7C93]"> 1/3 the weight of steel with 2x strength-to-weight ratio</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-8 border border-gray-200">
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-6">
                    Performance Characteristics
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0A1628]">Joint Strength:</strong>
                        <span className="text-[#6B7C93]"> 10x traditional T-slot connections</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0A1628]">Vibration:</strong>
                        <span className="text-[#6B7C93]"> Self-tightening under dynamic loads</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0A1628]">FEA Compatible:</strong>
                        <span className="text-[#6B7C93]"> Predictable, bonded joints enable accurate analysis</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0A1628]">Maintenance:</strong>
                        <span className="text-[#6B7C93]"> Zero maintenance required over lifetime</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
                Experience the AngleLock Difference
              </h2>
              <p className="text-lg text-white/80 mb-8">
                See how AngleLock technology can revolutionize your structural systems.
                Request technical documentation or speak with our engineering team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Download Technical Specs</Button>
                <Button variant="ghost" size="lg">Contact Engineering</Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
