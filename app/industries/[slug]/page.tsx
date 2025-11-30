'use client';

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { Plane, FlaskConical, Cpu, Bot, Factory, CheckCircle2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { INDUSTRIES } from '@/lib/constants';

const iconMap = {
  Plane,
  FlaskConical,
  Cpu,
  Bot,
  Factory
};

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = INDUSTRIES.find(ind => ind.id === params.slug);

  if (!industry) {
    notFound();
  }

  const Icon = iconMap[industry.icon as keyof typeof iconMap];

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
                  {industry.name}
                </h1>
              </div>
              <p className="text-xl text-white/80 max-w-4xl leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Overview Section */}
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
                  Industry Challenges
                </h2>
                <p className="text-[#6B7C93] leading-relaxed mb-6">
                  The {industry.name.toLowerCase()} sector demands structural systems that can withstand 
                  extreme conditions while maintaining precision and reliability. Traditional framing 
                  solutions often fall short in critical applications.
                </p>
                <p className="text-[#6B7C93] leading-relaxed">
                  Our AngleLock technology provides the mechanical strength and vibration resistance 
                  required for mission-critical applications, with the flexibility to adapt as your 
                  requirements evolve.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-[#F4F6F8] rounded-xl p-8">
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-6">
                    Why AngleLock?
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0A1628]">10x Stronger:</strong>
                        <span className="text-[#6B7C93]"> Mechanically locked joints rival welded steel</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0A1628]">Vibration Resistant:</strong>
                        <span className="text-[#6B7C93]"> Connections tighten under load</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0A1628]">Cleanroom Compatible:</strong>
                        <span className="text-[#6B7C93]"> Non-particle shedding, easy to clean</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#0A1628]">Rapid Assembly:</strong>
                        <span className="text-[#6B7C93]"> 50% faster than traditional methods</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-[#F4F6F8]">
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
                AngleLock structural systems are used across {industry.name.toLowerCase()} for these critical applications:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industry.applications.map((app, idx) => (
                  <motion.div
                    key={app}
                    className="bg-white rounded-lg p-6 border border-gray-200"
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

        {/* CTA Section */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Discuss Your {industry.name} Project?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Our engineering team has extensive experience in {industry.name.toLowerCase()} applications.
                Let's design the perfect solution for your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Request a Quote</Button>
                <Button variant="ghost" size="lg">Download Technical Specs</Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
