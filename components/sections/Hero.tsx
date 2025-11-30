'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A1628]">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/robotics-hero.png"
          alt="Advanced Robotics Manufacturing"
          fill
          className="object-cover opacity-70"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/30 via-[#0A1628]/40 to-[#0A1628]/60" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#C9A227" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          const randomX = (i * 17) % 100;
          const randomY = (i * 23) % 100;
          const randomDuration = 3 + (i % 3);
          const randomDelay = (i % 5) * 0.4;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#C9A227] rounded-full"
              style={{
                left: `${randomX}%`,
                top: `${randomY}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
              }}
            />
          );
        })}
      </div>

      <Container className="relative z-10 pt-24 pb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Engineering Structures
            <br />
            <span className="text-[#C9A227]">Without Limits</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Mission-critical aluminum framing systems powered by breakthrough AngleLock technology.
            <br className="hidden sm:block" />
            <span className="text-[#C9A227]">Stronger than steel. Lighter than aluminum. Infinitely configurable.</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg">Explore Solutions</Button>
            <Button variant="ghost" size="lg">Watch Overview</Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </Container>
    </section>
  );
}
