'use client';

import { motion } from 'framer-motion';
import { Plane, FlaskConical, Cpu, Bot, Factory } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
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

export default function IndustryShowcase() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-[#0A1628] mb-4">
            Markets We Serve
          </h2>
          <p className="text-lg text-[#6B7C93] max-w-3xl mx-auto">
            Solutions for the world's most demanding industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <Card hover className="relative overflow-hidden p-8 h-full group">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={imageMap[industry.id]}
                        alt={industry.name}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/50 to-white/40" />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-14 h-14 bg-[#0A1628] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C9A227] transition-colors duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3 group-hover:text-[#C9A227] transition-colors duration-300">
                        {industry.name}
                      </h3>

                      <p className="text-[#6B7C93] text-sm leading-relaxed flex-grow">
                        {industry.description}
                      </p>

                      <div className="mt-4 text-[#C9A227] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                        Learn More
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
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
  );
}
