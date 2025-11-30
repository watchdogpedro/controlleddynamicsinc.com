'use client';

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { Box, ShieldCheck, Wind, Layers, Settings, CheckCircle2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { SOLUTIONS } from '@/lib/constants';

const iconMap = {
  Box,
  ShieldCheck,
  Wind,
  Layers,
  Settings
};

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const solution = SOLUTIONS.find(sol => sol.id === params.slug);

  if (!solution) {
    notFound();
  }

  const Icon = iconMap[solution.icon as keyof typeof iconMap];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-20">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#C9A227] rounded-lg flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[#0A1628]" />
                </div>
                <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl font-bold text-white">
                  {solution.name}
                </h1>
              </div>
              <p className="text-xl text-white/80 max-w-4xl leading-relaxed">
                {solution.description}
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-12 text-center">
                Key Features & Benefits
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {solution.features.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    className="bg-[#F4F6F8] rounded-lg p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <CheckCircle2 className="w-8 h-8 text-[#C9A227] mb-4" />
                    <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">
                      {feature}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>

        {/* AngleLock Advantage */}
        <section className="py-20 bg-[#F4F6F8]">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-6">
                  Why AngleLock Technology?
                </h2>
                <p className="text-[#6B7C93] leading-relaxed mb-6">
                  Traditional framing systems rely on friction-based T-slot connections that loosen
                  over time, especially under vibration. AngleLock's patented design creates
                  mechanically locked joints with 5 planes of anchoring.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0A1628]">10x Stronger:</strong>
                      <span className="text-[#6B7C93]"> Mechanically locked joints rival welded steel strength</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0A1628]">Vibration Proof:</strong>
                      <span className="text-[#6B7C93]"> Connections tighten under load, never loosen</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0A1628]">50% Faster:</strong>
                      <span className="text-[#6B7C93]"> Self-aligning brackets reduce assembly time</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0A1628]">Fully Modular:</strong>
                      <span className="text-[#6B7C93]"> Reconfigure without weakening the structure</span>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[#1E3A5F] to-[#2C4A6E] rounded-2xl p-12 border-2 border-[#C9A227]/30"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-6">🔒</div>
                  <h3 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#C9A227] mb-4">
                    AngleLock Technology
                  </h3>
                  <p className="text-white/80 mb-6">
                    Patented 5-plane anchoring system creates the strongest, most reliable
                    aluminum framing connections in the industry.
                  </p>
                  <Button variant="primary">Learn More About AngleLock</Button>
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
                Ready to Build Your {solution.name}?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Our engineering team will work with you to design the perfect solution
                for your specific requirements and application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Request a Quote</Button>
                <Button variant="ghost" size="lg">Download CAD Files</Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
