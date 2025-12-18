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

        {/* Company History Timeline */}
        <section className="py-20 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-64 h-64 border-4 border-[#C9A227] rotate-45" />
            <div className="absolute bottom-20 right-10 w-48 h-48 border-4 border-[#C9A227] rotate-12" />
          </div>

          <Container>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto mb-6" />
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
                From identifying a critical problem to pioneering breakthrough solutions
              </p>

              {/* Horizontal Timeline Overview */}
              <div className="relative py-12 px-4 max-w-6xl mx-auto">
                {/* Horizontal line */}
                <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-[#C9A227]/20 via-[#C9A227] to-[#C9A227]/20 transform -translate-y-1/2" />

                {/* Milestone markers */}
                <div className="relative flex justify-between items-center">
                  {[
                    { year: '2010', label: 'Discovery' },
                    { year: '2011', label: 'Research' },
                    { year: '2012', label: 'Concept' },
                    { year: '2013', label: 'Prototype' },
                    { year: '2015', label: 'Validation' },
                    { year: '2017', label: 'Formation' },
                    { year: '2019', label: 'Patents' },
                    { year: '2020', label: 'Partnership' },
                    { year: '2022', label: 'Expansion' },
                    { year: '2025', label: 'Scale' }
                  ].map((milestone, idx) => (
                    <motion.div
                      key={milestone.year}
                      className="flex flex-col items-center group cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {/* Bracket marker */}
                      <div className="relative mb-3">
                        <div className="absolute inset-0 bg-[#C9A227] blur-lg opacity-0 group-hover:opacity-75 transition-opacity" />
                        <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-10 sm:h-10 relative">
                          <rect x="8" y="8" width="4" height="24" fill="#C9A227" className="group-hover:fill-[#E5B730] transition-colors"/>
                          <rect x="8" y="8" width="12" height="4" fill="#C9A227" className="group-hover:fill-[#E5B730] transition-colors"/>
                          <rect x="8" y="28" width="12" height="4" fill="#C9A227" className="group-hover:fill-[#E5B730] transition-colors"/>
                          <rect x="28" y="8" width="4" height="24" fill="#C9A227" className="group-hover:fill-[#E5B730] transition-colors"/>
                          <rect x="20" y="8" width="12" height="4" fill="#C9A227" className="group-hover:fill-[#E5B730] transition-colors"/>
                          <rect x="20" y="28" width="12" height="4" fill="#C9A227" className="group-hover:fill-[#E5B730] transition-colors"/>
                          <circle cx="16" cy="20" r="2" fill="#0A1628"/>
                          <circle cx="24" cy="20" r="2" fill="#0A1628"/>
                        </svg>
                      </div>

                      {/* Year */}
                      <div className="font-['Barlow_Condensed'] text-xl sm:text-2xl font-bold text-[#C9A227] group-hover:text-[#E5B730] transition-colors mb-1">
                        {milestone.year}
                      </div>

                      {/* Label */}
                      <div className="text-xs sm:text-sm text-white/60 group-hover:text-white transition-colors font-['Barlow_Condensed'] whitespace-nowrap">
                        {milestone.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent mt-12 mb-8" />
              <p className="text-sm text-white/50 font-['Barlow_Condensed'] uppercase tracking-wider mb-8">
                Detailed Timeline
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              {[
                {
                  year: '2010',
                  title: 'Problem Discovery',
                  description: 'Identified critical vibration issues affecting new generation 3D printer technology, threatening precision and reliability in advanced manufacturing applications.'
                },
                {
                  year: '2011',
                  title: 'Initial Research & Analysis',
                  description: 'Conducted extensive research into vibration dynamics and structural stability. Analyzed existing solutions and identified fundamental limitations in traditional approaches.'
                },
                {
                  year: '2012',
                  title: 'Concept Development',
                  description: 'Developed initial concept for mechanical locking mechanism. Filed provisional patents for AngleLock technology addressing vibration challenges without friction-based solutions.'
                },
                {
                  year: '2013',
                  title: 'Prototype Testing',
                  description: 'Built and tested first working prototypes. Validated core technology principles through rigorous testing protocols and comparative analysis against traditional solutions.'
                },
                {
                  year: '2015',
                  title: 'Performance Validation',
                  description: 'Achieved breakthrough results in vibration resistance and structural stability. Documented 50x improvement over industry-standard friction-based fasteners.'
                },
                {
                  year: '2017',
                  title: 'Company Formation',
                  description: 'Officially established Controlled Dynamics Inc. to commercialize AngleLock technology. Assembled founding team of structural engineers and manufacturing experts.'
                },
                {
                  year: '2019',
                  title: 'Patent Portfolio Development',
                  description: 'Secured core patents for AngleLock mechanical locking system. Established comprehensive intellectual property protection for technology platform.'
                },
                {
                  year: '2020',
                  title: 'Manufacturing Partnership',
                  description: 'Established strategic partnership with Nippon Pulse America for precision manufacturing. Developed production capabilities for aerospace-grade components.'
                },
                {
                  year: '2022',
                  title: 'Market Expansion',
                  description: 'Extended applications beyond 3D printing to aerospace, defense, and precision manufacturing. Demonstrated technology value across mission-critical industries.'
                },
                {
                  year: '2025',
                  title: 'High-Volume Manufacturing',
                  description: 'Delivering structural solutions to world-leading organizations at scale. Continuing innovation in mechanical locking technology and expanding application portfolio.'
                }
              ].map((milestone, idx) => (
                <motion.div
                  key={idx}
                  className="relative pl-20 pb-16 last:pb-0 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                >
                  {/* Timeline line - gradient gold */}
                  {idx !== 9 && (
                    <div className="absolute left-[39px] top-20 bottom-0 w-1 bg-gradient-to-b from-[#C9A227] to-[#C9A227]/20" />
                  )}

                  {/* AngleLock Bracket Icon */}
                  <div className="absolute left-0 top-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Outer glow */}
                      <div className="absolute inset-0 bg-[#C9A227] blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

                      {/* Bracket icon - inspired by AngleLock */}
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <svg viewBox="0 0 80 80" className="w-full h-full">
                          {/* Left vertical bar */}
                          <rect x="10" y="10" width="12" height="60" fill="#C9A227" className="group-hover:fill-[#E5B730] transition-colors"/>

                          {/* Top horizontal bar */}
                          <rect x="10" y="10" width="35" height="12" fill="#C9A227" className="group-hover:fill-[#E5B730] transition-colors"/>

                          {/* Bottom horizontal bar */}
                          <rect x="10" y="58" width="35" height="12" fill="#C9A227" className="group-hover:fill-[#E5B730] transition-colors"/>

                          {/* Right vertical bar */}
                          <rect x="58" y="10" width="12" height="60" fill="#C9A227" className="group-hover:fill-[#E5B730] transition-colors"/>

                          {/* Top right horizontal */}
                          <rect x="45" y="10" width="25" height="12" fill="#C9A227" className="group-hover:fill-[#E5B730] transition-colors"/>

                          {/* Bottom right horizontal */}
                          <rect x="45" y="58" width="25" height="12" fill="#C9A227" className="group-hover:fill-[#E5B730] transition-colors"/>

                          {/* Center mounting holes */}
                          <circle cx="32" cy="40" r="4" fill="#0A1628"/>
                          <circle cx="48" cy="40" r="4" fill="#0A1628"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white/5 backdrop-blur-sm border border-[#C9A227]/20 rounded-xl p-8 ml-4 hover:bg-white/10 hover:border-[#C9A227]/40 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#C9A227]/20">
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 mb-4">
                      <span className="font-['Barlow_Condensed'] text-6xl font-bold text-[#C9A227] leading-none group-hover:text-[#E5B730] transition-colors">
                        {milestone.year}
                      </span>
                      <div className="h-px sm:h-auto sm:w-px flex-1 sm:flex-none sm:h-12 bg-gradient-to-r sm:bg-gradient-to-b from-[#C9A227]/50 to-transparent" />
                      <h3 className="font-['Barlow_Condensed'] text-3xl font-bold text-white flex-1">
                        {milestone.title}
                      </h3>
                    </div>
                    <p className="text-white/70 leading-relaxed text-lg">
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
