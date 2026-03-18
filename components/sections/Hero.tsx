'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import VideoModal from '@/components/ui/VideoModal';

const industries = [
  {
    name: 'Aerospace & Defense',
    image: '/Aerospace CDI.png',
    href: '/industries',
  },
  {
    name: 'Life Sciences',
    image: '/Life Sciences CDI.png',
    href: '/industries',
  },
  {
    name: 'Semiconductor',
    image: '/Semiconductor CDI.png',
    href: '/industries',
  },
  {
    name: 'Robotics & Automation',
    image: '/Robotics Automation CDI.png',
    href: '/industries',
  },
  {
    name: 'General Industrial',
    image: '/General Industrial CDI.png',
    href: '/industries',
  },
];

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#0A1628]">

      {/* Nebula Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-nebula.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A1628]/55" />
      </div>

      {/* Main Hero Content */}
      <Container className="relative z-10 flex-1 flex flex-col justify-center pt-32 pb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-[#C9A227] text-sm uppercase tracking-[0.3em] font-semibold mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Mission-Critical Structural Engineering
          </motion.p>

          <motion.h1
            className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Structures Engineered for
            <br />
            <span className="text-[#C9A227]">What Matters Most</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-white/65 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Precision aluminum framing systems powered by breakthrough{' '}
            <span className="font-bold text-[#C9A227]">AngleLock</span> technology —
            trusted across aerospace, life sciences, semiconductor, robotics, and industrial markets.
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
      </Container>

      {/* Industry Cards — anchored to bottom */}
      <div className="relative z-10">
        <motion.p
          className="text-center text-white/40 text-xs uppercase tracking-[0.25em] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Industries We Serve
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry, i) => (
            <motion.a
              key={industry.name}
              href={industry.href}
              className="relative h-52 overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 + i * 0.1 }}
            >
              {/* Industry Photo */}
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay — dark at bottom for text, slight tint overall */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-all duration-300 group-hover:from-black/80 group-hover:via-black/40" />

              {/* Top border accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#C9A227] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

              {/* Vertical divider */}
              <div className="absolute inset-y-0 right-0 w-px bg-white/10" />

              {/* Industry Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm leading-tight">{industry.name}</p>
                <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#C9A227] text-xs font-medium">Explore</span>
                  <span className="text-[#C9A227] text-xs">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="xk0k2WJvEdo"
      />
    </section>
  );
}
