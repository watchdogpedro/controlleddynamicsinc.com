'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1E3A5F] to-[#0A1628]">
      <Container>
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Build Something
            <br />
            <span className="text-[#C9A227]">Extraordinary?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Let our engineering team help you design the perfect structural solution for your mission-critical application.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact">
              <Button size="lg" className="group">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/contact">
              <Button variant="ghost" size="lg">
                Contact Us
              </Button>
            </a>
          </div>

          <p className="mt-8 text-white/50 text-sm">
            Join 2,500+ projects powered by AngleLock technology
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
