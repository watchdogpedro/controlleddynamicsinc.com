'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Zap, Cog, Building2, Award, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';

export default function PartnersPage() {
  const partners = [
    {
      name: 'AngleLock',
      logo: '/AngleLock_white.png',
      url: 'https://anglelock.com',
      category: 'Structural Components',
      tagline: 'Revolutionary Aluminum Framing Technology',
      description: 'AngleLock manufactures breakthrough aluminum framing components that form the foundation of our structural systems. Their patented mechanical locking technology replaces friction-based T-slot connections with mechanically locked joints that are 10x stronger and require zero maintenance.',
      technologies: [
        'Patented 5-plane mechanical locking system',
        'Self-aligning bracket technology',
        '6105-T5 architectural grade aluminum extrusions',
        'Vibration-resistant connections'
      ],
      advantages: [
        {
          icon: Zap,
          title: 'Superior Strength',
          description: '10x stronger than traditional T-slot systems with mechanical locks that rival welded steel joints'
        },
        {
          icon: Cog,
          title: 'Zero Maintenance',
          description: 'Connections actually tighten under vibration instead of loosening—eliminating constant re-tightening'
        },
        {
          icon: Award,
          title: 'Proven Reliability',
          description: 'Field-tested in demanding aerospace, semiconductor, and industrial applications'
        }
      ],
      integration: 'Controlled Dynamics builds large-scale, custom-engineered structural systems using AngleLock components as the core building blocks—combining their breakthrough component technology with our system integration expertise.'
    },
    {
      name: 'Nippon Pulse',
      logo: null, // Will add if they provide logo
      url: 'https://nipponpulse.com',
      category: 'Motion Control Systems',
      tagline: 'Precision Motion Control Technology',
      description: 'Nippon Pulse provides industry-leading stepper motors, servo motors, linear shaft motors, and motion controllers. With over 60 years of engineering excellence, they deliver custom OEM motion solutions that integrate seamlessly with our structural platforms.',
      technologies: [
        'Custom linear & rotary servo motors',
        'Stepper motors & linear shaft motors',
        'Advanced motion controllers (1-4 axis)',
        'Precision positioning stages'
      ],
      advantages: [
        {
          icon: Zap,
          title: 'Precision Motion Control',
          description: 'Industry-leading accuracy for robotics, automation, and precision positioning applications'
        },
        {
          icon: Cog,
          title: 'Custom Solutions',
          description: '60+ years of engineering expertise in developing tailored motion control systems for OEM applications'
        },
        {
          icon: Award,
          title: 'Complete Integration',
          description: 'Motors, controllers, drivers, and stages designed to work together seamlessly'
        }
      ],
      integration: 'When motion control is required, Nippon Pulse motors and controllers mount directly to our AngleLock-based structures, creating complete automation systems with superior vibration isolation and precision.'
    }
  ];

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
                Technology Partners
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-4">
                Building world-class structural systems through strategic partnerships with industry-leading technology providers
              </p>
              <p className="text-lg text-[#C9A227] font-semibold">
                Best-in-Class Components × Expert Integration = Superior Solutions
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Why Partnerships Matter */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-5xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4">
                  The Power of Partnership
                </h2>
                <p className="text-lg text-[#6B7C93] max-w-3xl mx-auto">
                  We partner with the world's leading technology providers to deliver integrated solutions that exceed what any single company can achieve alone
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Building2,
                    title: 'Specialized Expertise',
                    description: 'Each partner is a leader in their domain—structural components, motion control, precision systems—bringing decades of focused innovation'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Proven Technologies',
                    description: 'We integrate field-tested, industry-leading technologies rather than developing competing solutions in-house'
                  },
                  {
                    icon: Award,
                    title: 'Superior Integration',
                    description: 'Our expertise lies in combining best-in-class components into complete systems that deliver breakthrough performance'
                  }
                ].map((benefit, idx) => (
                  <motion.div
                    key={benefit.title}
                    className="bg-[#F4F6F8] rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-[#0A1628]" />
                    </div>
                    <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-[#6B7C93]">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Technology Partners */}
        <section className="py-20 bg-[#F4F6F8]">
          <Container>
            <div className="max-w-6xl mx-auto space-y-16">
              {partners.map((partner, idx) => (
                <motion.div
                  key={partner.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  {/* Partner Header */}
                  <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        {partner.logo ? (
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={250}
                            height={100}
                            className="h-16 w-auto mb-4"
                          />
                        ) : (
                          <h3 className="font-['Barlow_Condensed'] text-4xl font-bold text-white mb-2">
                            {partner.name}
                          </h3>
                        )}
                        <p className="text-[#C9A227] font-semibold text-lg mb-2">{partner.tagline}</p>
                        <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-white/80 text-sm">
                          {partner.category}
                        </span>
                      </div>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A227] text-[#0A1628] rounded-full font-semibold hover:bg-[#E0B830] transition-colors"
                      >
                        Visit Website
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Partner Content */}
                  <div className="p-8">
                    {/* Description */}
                    <p className="text-lg text-[#6B7C93] mb-8 leading-relaxed">
                      {partner.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h4 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">
                        Core Technologies
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {partner.technologies.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-start gap-3 p-3 bg-[#F4F6F8] rounded-lg"
                          >
                            <div className="w-1.5 h-1.5 bg-[#C9A227] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-[#6B7C93]">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Advantages */}
                    <div className="mb-8">
                      <h4 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-6">
                        Why This Partnership Matters
                      </h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        {partner.advantages.map((advantage) => (
                          <div key={advantage.title} className="flex flex-col">
                            <div className="w-12 h-12 bg-[#0A1628] rounded-lg flex items-center justify-center mb-3">
                              <advantage.icon className="w-6 h-6 text-[#C9A227]" />
                            </div>
                            <h5 className="font-['Barlow_Condensed'] text-lg font-bold text-[#0A1628] mb-2">
                              {advantage.title}
                            </h5>
                            <p className="text-sm text-[#6B7C93]">
                              {advantage.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Integration */}
                    <div className="bg-gradient-to-br from-[#C9A227]/10 to-[#E0B830]/10 rounded-xl p-6 border-l-4 border-[#C9A227]">
                      <h4 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-3">
                        How We Integrate
                      </h4>
                      <p className="text-[#6B7C93] leading-relaxed">
                        {partner.integration}
                      </p>
                    </div>
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
                Ready to Experience the Difference?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Discover how our strategic technology partnerships deliver integrated solutions that exceed industry standards
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 bg-[#C9A227] text-[#0A1628] hover:bg-[#E0B830] shadow-lg hover:shadow-xl px-8 py-4 text-lg"
                >
                  Request a Consultation
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 bg-white/10 text-white hover:bg-white/20 border border-white/30 backdrop-blur-sm px-8 py-4 text-lg"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
