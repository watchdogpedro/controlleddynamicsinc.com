'use client';

import { motion } from 'framer-motion';
import { Target, Award, Users, Rocket } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { COMPANY_INFO } from '@/lib/constants';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-20">
          <Container>
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                About Controlled Dynamics
              </h1>
              <p className="text-2xl text-[#C9A227] font-['Barlow_Condensed'] mb-8">
                {COMPANY_INFO.tagline}
              </p>
              <p className="text-xl text-white/80 leading-relaxed">
                We deliver mission-critical structural solutions to the world's most demanding industries,
                powered by breakthrough AngleLock technology.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#C9A227] rounded-lg flex items-center justify-center">
                    <Target className="w-8 h-8 text-[#0A1628]" />
                  </div>
                  <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628]">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-[#6B7C93] leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#C9A227] rounded-lg flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-[#0A1628]" />
                  </div>
                  <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628]">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-[#6B7C93] leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-[#F4F6F8]">
          <Container>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-[#0A1628] mb-4">
                Core Values
              </h2>
              <p className="text-lg text-[#6B7C93] max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Award, title: 'Excellence', description: 'Uncompromising quality in every structural solution we deliver' },
                { icon: Users, title: 'Partnership', description: 'Collaborative relationships built on trust and transparency' },
                { icon: Rocket, title: 'Innovation', description: 'Continuously advancing structural engineering technology' },
                { icon: Target, title: 'Precision', description: 'Engineered solutions that meet exact specifications' }
              ].map((value, idx) => (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-xl p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="w-16 h-16 bg-[#0A1628] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-[#C9A227]" />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#6B7C93] text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
                Join Us in Engineering Tomorrow
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Interested in joining our team? We're always looking for talented engineers
                and professionals passionate about structural innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">View Career Opportunities</Button>
                <Button variant="ghost" size="lg">Contact Us</Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
