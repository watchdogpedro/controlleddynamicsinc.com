'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Plane, FlaskConical, Cpu, Bot, Factory, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { INDUSTRIES } from '@/lib/constants';

const iconMap = {
  Plane,
  FlaskConical,
  Cpu,
  Bot,
  Factory
};

export default function IndustriesPage() {
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
                Industries We Serve
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Delivering mission-critical structural solutions to the world's most demanding industries.
                Our AngleLock technology provides the strength, precision, and reliability required
                where failure is not an option.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {INDUSTRIES.map((industry, idx) => {
                const Icon = iconMap[industry.icon as keyof typeof iconMap];
                
                return (
                  <motion.div
                    key={industry.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <Link href={`/industries/${industry.id}`}>
                      <Card hover className="p-8 h-full group">
                        <div className="flex items-start gap-6">
                          <div className="w-16 h-16 bg-[#0A1628] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A227] transition-colors duration-300">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          
                          <div className="flex-grow">
                            <h2 className="font-['Barlow_Condensed'] text-3xl font-bold text-[#0A1628] mb-3 group-hover:text-[#C9A227] transition-colors duration-300">
                              {industry.name}
                            </h2>
                            
                            <p className="text-[#6B7C93] mb-4 leading-relaxed">
                              {industry.description}
                            </p>

                            <div className="mb-4">
                              <h3 className="font-semibold text-[#0A1628] mb-2 text-sm">Key Applications:</h3>
                              <ul className="space-y-1">
                                {industry.applications.slice(0, 3).map((app) => (
                                  <li key={app} className="text-sm text-[#6B7C93] flex items-start">
                                    <span className="text-[#C9A227] mr-2">•</span>
                                    {app}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="flex items-center gap-2 text-[#C9A227] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                              Learn More
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
                Don't See Your Industry?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Our custom engineering team can design structural solutions for any application.
                Let's discuss your specific requirements.
              </p>
              <Button size="lg">Contact Our Team</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
