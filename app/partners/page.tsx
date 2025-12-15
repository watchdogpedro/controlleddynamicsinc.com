'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Shield, Award, Zap, Lock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';

export default function PartnersPage() {
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
                Technology Partners
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Building world-class structural systems with industry-leading component technology
              </p>
            </motion.div>
          </Container>
        </section>

        {/* AngleLock Partnership */}
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-[#C9A227]" />
                  <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-[#0A1628]">
                    Featured Partner
                  </h2>
                </div>
                <p className="text-lg text-[#6B7C93] max-w-3xl mx-auto">
                  Our structural systems are built on the foundation of breakthrough component technology
                </p>
              </motion.div>

              {/* AngleLock Card */}
              <motion.div
                className="bg-gradient-to-br from-[#F4F6F8] to-white rounded-2xl p-8 lg:p-12 shadow-xl border border-[#C9A227]/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Logo & Description */}
                  <div>
                    <div className="mb-6">
                      <Image
                        src="/AngleLock Logo.png"
                        alt="AngleLock"
                        width={300}
                        height={100}
                        className="h-16 w-auto"
                      />
                    </div>
                    <h3 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-4">
                      AngleLock Aluminum Framing
                    </h3>
                    <p className="text-lg text-[#6B7C93] mb-6 leading-relaxed">
                      AngleLock manufactures revolutionary aluminum framing components that form the core of our
                      structural systems. Their patented technology replaces traditional friction-based T-slot
                      connections with mechanically locked joints, delivering 10x the strength and zero maintenance
                      requirements.
                    </p>
                    <p className="text-[#6B7C93] mb-8 leading-relaxed">
                      Controlled Dynamics builds large-scale, custom-engineered structural systems using AngleLock's
                      components, combining their breakthrough component technology with our system integration expertise
                      to deliver mission-critical solutions for aerospace, life sciences, semiconductor, and industrial applications.
                    </p>
                    <a
                      href="https://anglelock.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#C9A227] hover:text-[#0A1628] transition-colors font-semibold"
                    >
                      Visit AngleLock.com
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#0A1628] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Lock className="w-6 h-6 text-[#C9A227]" />
                        </div>
                        <div>
                          <h4 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">
                            Mechanical Lock Technology
                          </h4>
                          <p className="text-[#6B7C93] text-sm">
                            Patented 5-plane anchoring system creates mechanically locked joints that tighten
                            under vibration instead of loosening
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#0A1628] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Zap className="w-6 h-6 text-[#C9A227]" />
                        </div>
                        <div>
                          <h4 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">
                            10x Stronger Than T-Slot
                          </h4>
                          <p className="text-[#6B7C93] text-sm">
                            Superior strength-to-weight ratio enables lighter, more rigid structures that
                            rival welded steel performance
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#0A1628] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award className="w-6 h-6 text-[#C9A227]" />
                        </div>
                        <div>
                          <h4 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">
                            Zero Maintenance Required
                          </h4>
                          <p className="text-[#6B7C93] text-sm">
                            Self-aligning brackets and mechanical locks eliminate the constant re-tightening
                            required by friction-based systems
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Partnership Benefits */}
        <section className="py-20 bg-[#F4F6F8]">
          <Container>
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-[#0A1628] mb-4">
                  Why This Partnership Matters
                </h2>
                <p className="text-lg text-[#6B7C93] max-w-3xl mx-auto">
                  Combining breakthrough component technology with system engineering expertise
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Best-in-Class Components',
                    description: 'AngleLock\'s patented technology provides the strongest, most reliable aluminum framing components available, forming the foundation of our structural systems.'
                  },
                  {
                    title: 'Custom System Integration',
                    description: 'Controlled Dynamics leverages AngleLock components to design and build complete structural systems tailored to exact customer specifications.'
                  },
                  {
                    title: 'Superior Performance',
                    description: 'The combination delivers unmatched strength, vibration resistance, and zero maintenance for mission-critical applications across demanding industries.'
                  }
                ].map((benefit, idx) => (
                  <motion.div
                    key={benefit.title}
                    className="bg-white rounded-xl p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-[#6B7C93]">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Build with the Best?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Discover how our partnership with AngleLock delivers superior structural systems
                for your most demanding applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 bg-[#C9A227] text-[#0A1628] hover:bg-[#E0B830] shadow-lg hover:shadow-xl px-8 py-4 text-lg"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/technology"
                  className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 bg-white/10 text-white hover:bg-white/20 border border-white/30 backdrop-blur-sm px-8 py-4 text-lg"
                >
                  Learn About Our Technology
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
