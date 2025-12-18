'use client';

import { motion } from 'framer-motion';
import { Target, Award, Users, Rocket, Calendar } from 'lucide-react';
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

        {/* Company History Timeline */}
        <section className="py-20 bg-white">
          <Container>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-[#0A1628] mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-[#6B7C93] max-w-3xl mx-auto">
                From identifying a critical problem to pioneering breakthrough solutions
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {[
                {
                  year: '[YEAR]',
                  title: 'Problem Discovery',
                  description: 'Identified critical vibration issues affecting new generation 3D printer technology, threatening precision and reliability in advanced manufacturing applications.'
                },
                {
                  year: '[YEAR]',
                  title: 'Initial Research & Analysis',
                  description: 'Conducted extensive research into vibration dynamics and structural stability. Analyzed existing solutions and identified fundamental limitations in traditional approaches.'
                },
                {
                  year: '[YEAR]',
                  title: 'Concept Development',
                  description: 'Developed initial concept for mechanical locking mechanism. Filed provisional patents for AngleLock technology addressing vibration challenges without friction-based solutions.'
                },
                {
                  year: '[YEAR]',
                  title: 'Prototype Testing',
                  description: 'Built and tested first working prototypes. Validated core technology principles through rigorous testing protocols and comparative analysis against traditional solutions.'
                },
                {
                  year: '[YEAR]',
                  title: 'Performance Validation',
                  description: 'Achieved breakthrough results in vibration resistance and structural stability. Documented 50x improvement over industry-standard friction-based fasteners.'
                },
                {
                  year: '[YEAR]',
                  title: 'Company Formation',
                  description: 'Officially established Controlled Dynamics Inc. to commercialize AngleLock technology. Assembled founding team of structural engineers and manufacturing experts.'
                },
                {
                  year: '[YEAR]',
                  title: 'Patent Portfolio Development',
                  description: 'Secured core patents for AngleLock mechanical locking system. Established comprehensive intellectual property protection for technology platform.'
                },
                {
                  year: '[YEAR]',
                  title: 'Manufacturing Partnership',
                  description: 'Established strategic partnership with Nippon Pulse America for precision manufacturing. Developed production capabilities for aerospace-grade components.'
                },
                {
                  year: '[YEAR]',
                  title: 'Market Expansion',
                  description: 'Extended applications beyond 3D printing to aerospace, defense, and precision manufacturing. Demonstrated technology value across mission-critical industries.'
                },
                {
                  year: '[YEAR]',
                  title: 'Current Operations',
                  description: 'Delivering structural solutions to world-leading organizations. Continuing innovation in mechanical locking technology and expanding application portfolio.'
                }
              ].map((milestone, idx) => (
                <motion.div
                  key={idx}
                  className="relative pl-8 pb-12 last:pb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  {/* Timeline line */}
                  {idx !== 9 && (
                    <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-[#C9A227]/30" />
                  )}

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-8 h-8 bg-[#C9A227] rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-[#0A1628]" />
                  </div>

                  {/* Content */}
                  <div className="bg-[#F4F6F8] rounded-xl p-6 ml-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-['Barlow_Condensed'] text-2xl font-bold text-[#C9A227]">
                        {milestone.year}
                      </span>
                      <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628]">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-[#6B7C93] leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
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
