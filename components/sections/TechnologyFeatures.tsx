'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Wrench, Infinity } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { TECHNOLOGY_FEATURES } from '@/lib/constants';

const iconMap = [Shield, Zap, Wrench, Infinity];

export default function TechnologyFeatures() {
  return (
    <section className="relative py-20 bg-[#0A1628] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A227" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Tank Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full rounded-2xl overflow-hidden border-2 border-[#C9A227]/30 bg-gradient-to-br from-[#1E3A5F] to-[#2C4A6E]">
              <Image
                src="/AngleLock Controlled Dynamics Tank.jpg"
                alt="AngleLock Tank Support Structure"
                width={1536}
                height={864}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>

          {/* Right Side - Features */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-4">
                The AngleLock Advantage
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Revolutionary aluminum framing technology that outperforms traditional systems
              </p>
            </motion.div>

            <div className="space-y-6">
              {TECHNOLOGY_FEATURES.map((feature, idx) => {
                const Icon = iconMap[idx];
                
                return (
                  <motion.div
                    key={feature.title}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#C9A227]/50 transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#0A1628]" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-white/70 text-sm">
                          {feature.description}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="font-['Barlow_Condensed'] text-3xl font-bold text-[#C9A227]">
                          {feature.stat}
                        </div>
                        <div className="text-white/50 text-xs uppercase tracking-wide">
                          {feature.label}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button variant="primary" size="lg">
                Discover the Technology
              </Button>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
