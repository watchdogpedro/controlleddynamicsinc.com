'use client';

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { Box, ShieldCheck, Wind, Layers, Settings, CheckCircle2, Award, Zap } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { SOLUTIONS } from '@/lib/constants';

const iconMap = {
  Box,
  ShieldCheck,
  Wind,
  Layers,
  Settings
};

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = SOLUTIONS.find(sol => sol.id === slug);

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

        {/* Detailed Features Section */}
        {solution.detailedFeatures && (
          <section className="py-20 bg-white">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-12 justify-center">
                  <Zap className="w-8 h-8 text-[#C9A227]" />
                  <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] text-center">
                    Key Capabilities
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {solution.detailedFeatures.map((feature, idx) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                      <Card className="p-6 h-full">
                        <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-[#6B7C93] leading-relaxed">
                          {feature.description}
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Container>
          </section>
        )}

        {/* Project Example */}
        {solution.projectExample && (
          <section className="py-20 bg-[#F4F6F8]">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-12 justify-center">
                  <Award className="w-8 h-8 text-[#C9A227]" />
                  <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] text-center">
                    Project Example
                  </h2>
                </div>

                <Card className="p-8 md:p-12 max-w-5xl mx-auto">
                  <h3 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-6">
                    {solution.projectExample.title}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="text-sm font-semibold text-[#C9A227] mb-2 uppercase">The Challenge</div>
                      <p className="text-[#6B7C93] leading-relaxed">
                        {solution.projectExample.challenge}
                      </p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#C9A227] mb-2 uppercase">Our Solution</div>
                      <p className="text-[#6B7C93] leading-relaxed">
                        {solution.projectExample.solution}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-xl p-8">
                    <div className="text-sm font-semibold text-[#C9A227] mb-4 uppercase">Results</div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {solution.projectExample.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                          <span className="text-white/90">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </Container>
          </section>
        )}

        {/* Common Applications */}
        {solution.applications && (
          <section className="py-20 bg-white">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4 text-center">
                  Common Applications
                </h2>
                <p className="text-[#6B7C93] text-center max-w-3xl mx-auto mb-12">
                  Typical uses for {solution.name.toLowerCase()} across various industries:
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {solution.applications.map((app, idx) => (
                    <motion.div
                      key={app}
                      className="bg-[#F4F6F8] rounded-lg p-6 border border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#C9A227] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-[#0A1628] font-medium">{app}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Container>
          </section>
        )}

        {/* AngleLock Advantage */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-white mb-6">
                  Why AngleLock Technology?
                </h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  Traditional framing systems rely on friction-based T-slot connections that loosen
                  over time, especially under vibration. AngleLock's patented design creates
                  mechanically locked joints with 5 planes of anchoring.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">10x Stronger:</strong>
                      <span className="text-white/80"> Mechanically locked joints rival welded steel strength</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Vibration Proof:</strong>
                      <span className="text-white/80"> Connections tighten under load, never loosen</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">50% Faster:</strong>
                      <span className="text-white/80"> Self-aligning brackets reduce assembly time</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Fully Modular:</strong>
                      <span className="text-white/80"> Reconfigure without weakening the structure</span>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-5xl font-bold text-[#C9A227] font-['Barlow_Condensed'] mb-2">
                    10x
                  </div>
                  <p className="text-white/90 text-sm font-semibold">Stronger than T-slot</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-5xl font-bold text-[#C9A227] font-['Barlow_Condensed'] mb-2">
                    0
                  </div>
                  <p className="text-white/90 text-sm font-semibold">Maintenance Required</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-5xl font-bold text-[#C9A227] font-['Barlow_Condensed'] mb-2">
                    50%
                  </div>
                  <p className="text-white/90 text-sm font-semibold">Faster Assembly</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-5xl font-bold text-[#C9A227] font-['Barlow_Condensed'] mb-2">
                    ∞
                  </div>
                  <p className="text-white/90 text-sm font-semibold">Reconfigurations</p>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-[#0A1628] mb-6">
                Ready to Build Your {solution.name}?
              </h2>
              <p className="text-lg text-[#6B7C93] mb-8">
                Our engineering team will work with you to design the perfect solution
                for your specific requirements and application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Request a Quote</Button>
                <Button variant="ghost" size="lg">View Our Process</Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
