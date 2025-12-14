'use client';

import { motion } from 'framer-motion';
import { Download, TrendingUp, BarChart3 } from 'lucide-react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface MarketReportCTAProps {
  variant?: 'robotics' | 'semiconductor' | 'aerospace' | 'default';
}

const variantContent = {
  robotics: {
    headline: 'The $12.8B Robotics Opportunity',
    subtext: 'Discover how the industrial automation revolution is creating unprecedented demand for vibration-proof structural systems.',
    highlights: ['Industry 4.0 Growth', '$60.1B Market by 2030', '13-15% CAGR']
  },
  semiconductor: {
    headline: 'CHIPS Act: The $8.4B Infrastructure Opportunity',
    subtext: 'Learn how $52.7B in semiconductor manufacturing investments are driving demand for cleanroom-compatible structural systems.',
    highlights: ['CHIPS Act Impact', '203% US Capacity Increase', '$697B Sales 2025']
  },
  aerospace: {
    headline: 'Commercial Space: $9.8B Market Transformation',
    subtext: 'Explore the satellite manufacturing boom and how precision modular systems are enabling the next generation of space infrastructure.',
    highlights: ['16.2% CAGR', '58,000 Satellites by 2030', '$101.4B Market 2034']
  },
  default: {
    headline: 'The $47B Structural Aluminum Revolution',
    subtext: 'Download our comprehensive 2025 market analysis revealing how next-generation mechanical locking technology is disrupting the modular construction industry.',
    highlights: ['$47.4B TAM by 2030', '5 Growth Drivers', 'Executive Insights']
  }
};

export default function MarketReportCTA({ variant = 'default' }: MarketReportCTAProps) {
  const content = variantContent[variant];

  return (
    <section className="py-20 bg-gradient-to-br from-[#F4F6F8] to-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#C9A227]/10 text-[#C9A227] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" />
              FREE MARKET REPORT
            </div>

            <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-[#0A1628] mb-6 leading-tight">
              {content.headline}
            </h2>

            <p className="text-lg text-[#6B7C93] leading-relaxed mb-8">
              {content.subtext}
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {content.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white border border-[#E5E7EB] rounded-lg p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <BarChart3 className="w-5 h-5 text-[#C9A227] mx-auto mb-2" />
                  <p className="text-xs font-semibold text-[#0A1628] leading-tight">
                    {highlight}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="/downloads/Market_Opportunity_Report_2025.pdf"
              download
              className="inline-block"
            >
              <Button size="lg" className="group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Full Report (PDF)
              </Button>
            </a>

            <p className="text-sm text-[#6B7C93] mt-4">
              9 pages | Executive summary, market analysis, financial projections | Updated January 2025
            </p>
          </motion.div>

          {/* Right Side - 3D Book Graphic */}
          <motion.div
            className="relative perspective-[2000px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* 3D Book Container */}
              <div className="relative transform-gpu" style={{ transformStyle: 'preserve-3d' }}>
                {/* Book Shadow */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/10 blur-xl rounded-full" />

                {/* Book Spine (Left Edge) */}
                <div
                  className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-[#0A1628] to-[#1E3A5F] rounded-l-lg"
                  style={{
                    transform: 'rotateY(-15deg) translateX(-6px)',
                    transformOrigin: 'right center',
                    boxShadow: 'inset -2px 0 8px rgba(0,0,0,0.3)'
                  }}
                >
                  {/* Spine Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-[#C9A227] font-['Barlow_Condensed'] font-bold text-xs -rotate-90 whitespace-nowrap">
                      MARKET REPORT 2025
                    </p>
                  </div>
                </div>

                {/* Main Book Cover */}
                <motion.div
                  className="relative bg-[#0A1628] rounded-r-lg shadow-2xl overflow-hidden"
                  style={{
                    width: '100%',
                    aspectRatio: '8.5 / 11',
                    transform: 'rotateY(-5deg) translateX(12px)',
                    transformOrigin: 'left center',
                    boxShadow: '20px 20px 60px rgba(10, 22, 40, 0.3), -5px 0 20px rgba(0,0,0,0.2)'
                  }}
                  whileHover={{
                    transform: 'rotateY(-8deg) translateX(12px) translateY(-10px)',
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Full Report Cover Page */}
                  <Image
                    src="/report-cover-full.png"
                    alt="Market Opportunity Report 2025 Cover"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Page Edges Effect */}
                  <div className="absolute right-0 top-2 bottom-2 w-1 bg-white/10" />
                  <div className="absolute right-1 top-2.5 bottom-2.5 w-0.5 bg-white/5" />
                  <div className="absolute right-2 top-3 bottom-3 w-0.5 bg-white/5" />
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-[#C9A227] text-[#0A1628] rounded-full w-20 h-20 flex items-center justify-center shadow-xl z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
                >
                  <div className="text-center">
                    <div className="text-xs font-bold">FREE</div>
                    <div className="text-[10px]">PDF</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
