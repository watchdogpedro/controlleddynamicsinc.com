'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import VideoModal from '@/components/ui/VideoModal';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle Gold Gradient Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#C9A227]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#C9A227]/5 to-transparent rounded-full blur-3xl"></div>

      <Container className="relative z-10 pt-24 pb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#0A1628] mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Structures Engineered for
            <br />
            <span className="text-[#C9A227]">What Matters Most</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-[#0A1628]/70 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Mission-critical aluminum framing systems
            <br />
            powered by breakthrough <span className="font-bold text-[#C9A227]">AngleLock</span> technology.
            <br className="hidden sm:block" />
            <span className="text-[#C9A227] font-semibold">Better than steel. Lighter than steel. Infinitely configurable.</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="/contact">
              <Button size="lg">Request Quote</Button>
            </a>
            <Button variant="ghost" size="lg" onClick={() => setIsVideoOpen(true)}>
              Watch Overview
            </Button>
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

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="xk0k2WJvEdo"
      />
    </section>
  );
}
