'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Box, ShieldCheck, Wind, Layers, Settings, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { SOLUTIONS } from '@/lib/constants';

const iconMap = {
  Box,
  ShieldCheck,
  Wind,
  Layers,
  Settings
};

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-20">
          <Container>
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                Structural Solutions
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                From machine bases to cleanroom systems, our AngleLock technology delivers
                ultra-rigid, modular structural solutions that outperform traditional framing
                in strength, speed, and flexibility.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {SOLUTIONS.map((solution, idx) => {
                const Icon = iconMap[solution.icon as keyof typeof iconMap];
                
                return (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <Link href={`/solutions/${solution.id}`}>
                      <Card hover className="p-8 h-full group">
                        <div className="flex items-start gap-6">
                          <div className="w-16 h-16 bg-[#0A1628] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227] transition-colors duration-300">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          
                          <div className="flex-grow">
                            <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-3 group-hover:text-[#C9A227] transition-colors duration-300">
                              {solution.name}
                            </h2>
                            
                            <p className="text-[#6B7C93] mb-4 leading-relaxed">
                              {solution.description}
                            </p>

                            <div className="mb-4">
                              <h3 className="font-semibold text-[#0A1628] mb-2 text-sm">Key Features:</h3>
                              <ul className="grid grid-cols-2 gap-2">
                                {solution.features.map((feature) => (
                                  <li key={feature} className="text-sm text-[#6B7C93] flex items-start">
                                    <span className="text-[#C9A227] mr-2">✓</span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="flex items-center gap-2 text-[#C9A227] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                              Explore Solution
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Our engineering team specializes in designing bespoke structural systems
                tailored to your exact specifications and requirements.
              </p>
              <Button size="lg">Start Your Custom Project</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
