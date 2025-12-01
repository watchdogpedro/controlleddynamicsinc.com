'use client';

import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Plane, FlaskConical, Cpu, Bot, Factory, CheckCircle2, AlertCircle, TrendingUp, Award } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { INDUSTRIES } from '@/lib/constants';

const iconMap = {
  Plane,
  FlaskConical,
  Cpu,
  Bot,
  Factory
};

const imageMap: { [key: string]: string } = {
  'aerospace-defense': '/Aerospace CDI.png',
  'life-sciences': '/Life Sciences CDI.png',
  'semiconductor': '/Semiconductor CDI.png',
  'robotics-automation': '/Robotics Automation CDI.png',
  'general-industrial': '/General Industrial CDI.png'
};

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = INDUSTRIES.find(ind => ind.id === slug);

  if (!industry) {
    notFound();
  }

  const Icon = iconMap[industry.icon as keyof typeof iconMap];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-20">
          {/* Background Image with Gradient Blend */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 flex items-center justify-end">
              <div className="relative w-full md:w-2/3 lg:w-1/2 h-full">
                <Image
                  src={imageMap[industry.id]}
                  alt={industry.name}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
            {/* Gradient overlay - blends from dark blue on left to transparent on right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/95 to-[#0A1628]/30" />
          </div>

          <Container className="relative z-10">
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

        {/* Industry Challenges */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-8 h-8 text-[#EF4444]" />
                  <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628]">
                    Industry Challenges
                  </h2>
                </div>
                <p className="text-[#6B7C93] leading-relaxed mb-6">
                  The {industry.name.toLowerCase()} sector faces unique structural challenges that
                  traditional framing systems struggle to address effectively.
                </p>
                <ul className="space-y-3">
                  {industry.challenges?.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-3">
                      <span className="text-[#EF4444] text-xl mt-1">×</span>
                      <span className="text-[#6B7C93]">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-8 h-8 text-[#C9A227]" />
                  <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628]">
                    AngleLock Benefits
                  </h2>
                </div>
                <p className="text-[#6B7C93] leading-relaxed mb-6">
                  Our AngleLock technology directly addresses these challenges with proven
                  performance in demanding {industry.name.toLowerCase()} applications.
                </p>
                <ul className="space-y-3">
                  {industry.benefits?.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B7C93]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Project Example */}
        {industry.projectExample && (
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
                    {industry.projectExample.title}
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="text-sm font-semibold text-[#C9A227] mb-2 uppercase">The Challenge</div>
                      <p className="text-[#6B7C93] leading-relaxed">
                        {industry.projectExample.challenge}
                      </p>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#C9A227] mb-2 uppercase">Our Solution</div>
                      <p className="text-[#6B7C93] leading-relaxed">
                        {industry.projectExample.solution}
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-xl p-8">
                    <div className="text-sm font-semibold text-[#C9A227] mb-4 uppercase">Results</div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {industry.projectExample.results.map((result, idx) => (
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

        {/* Applications Section */}
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
                AngleLock structural systems are used across {industry.name.toLowerCase()} for these critical applications:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industry.applications.map((app, idx) => (
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

        {/* Why AngleLock Section */}
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
                  Why {industry.name} Companies Choose AngleLock
                </h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  Leading {industry.name.toLowerCase()} organizations depend on AngleLock technology
                  because traditional aluminum framing and welded steel structures can't deliver
                  the combination of strength, precision, and flexibility their applications demand.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Our patented 5-plane anchoring system creates mechanically locked joints that
                  actually tighten under vibration while maintaining the modularity needed for
                  evolving production requirements.
                </p>
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
                Ready to Discuss Your {industry.name} Project?
              </h2>
              <p className="text-lg text-[#6B7C93] mb-8">
                Our engineering team has extensive experience designing structural solutions for
                {industry.name.toLowerCase()} applications. Let's discuss how AngleLock technology
                can solve your specific challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Schedule a Consultation</Button>
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
