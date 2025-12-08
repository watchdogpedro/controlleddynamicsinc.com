'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, XCircle, Shield, Zap, TrendingUp, DollarSign, Wrench, Lock } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import StructuredData, { generateFAQSchema, generateBreadcrumbSchema } from '@/components/seo/StructuredData';

export default function CompareTSlotPage() {
  const faqData = [
    {
      question: "Can I mix AngleLock with my existing T-slot system?",
      answer: "While both use similar aluminum extrusion profiles, the connection methods are fundamentally different. AngleLock uses specialized brackets with angled fasteners for mechanical locking. For best results, we recommend using AngleLock for complete structures, especially in critical applications."
    },
    {
      question: "Is AngleLock more expensive than T-slot?",
      answer: "Initial material costs are similar, but AngleLock delivers significantly lower total cost of ownership. You'll save on maintenance, reduce downtime, avoid oversizing components, and eliminate the costs associated with vibration-related failures and recalibration."
    },
    {
      question: "How difficult is it to assemble compared to T-slot?",
      answer: "AngleLock is actually faster and easier. Self-aligning brackets eliminate the manual alignment required with T-slot systems, reducing assembly time by 50%. Standard hand tools are all you need - no specialized equipment required."
    },
    {
      question: "Can I still reconfigure my structure like with T-slot?",
      answer: "Absolutely. AngleLock maintains the same modularity advantage as T-slot systems. The key difference is that when you disassemble and rebuild, the joints don't weaken - they maintain full strength through multiple reconfigurations."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "https://controlleddynamicsinc.com" },
    { name: "Compare", url: "https://controlleddynamicsinc.com/compare/t-slot" },
    { name: "AngleLock vs T-Slot", url: "https://controlleddynamicsinc.com/compare/t-slot" }
  ];

  const comparisonData = [
    {
      category: 'Joint Strength',
      anglelock: '10x stronger - mechanically locked joints',
      tslot: 'Friction-based connections only',
      advantage: 'anglelock'
    },
    {
      category: 'Vibration Resistance',
      anglelock: 'Self-tightening under vibration',
      tslot: 'Loosens over time, requires retightening',
      advantage: 'anglelock'
    },
    {
      category: 'Assembly Time',
      anglelock: '50% faster with self-aligning brackets',
      tslot: 'Manual alignment required',
      advantage: 'anglelock'
    },
    {
      category: 'Maintenance',
      anglelock: 'Zero maintenance required',
      tslot: 'Regular inspection and retightening',
      advantage: 'anglelock'
    },
    {
      category: 'Load Capacity',
      anglelock: 'Rivals welded steel frames',
      tslot: 'Limited to light-medium duty',
      advantage: 'anglelock'
    },
    {
      category: 'Precision Applications',
      anglelock: 'Suitable for micron-level accuracy',
      tslot: 'Connection movement affects precision',
      advantage: 'anglelock'
    },
    {
      category: 'Modularity',
      anglelock: 'Full reconfigurability without weakening',
      tslot: 'Modular design',
      advantage: 'both'
    },
    {
      category: 'Material',
      anglelock: '6105-T5 architectural grade aluminum',
      tslot: '6105-T5 aluminum',
      advantage: 'both'
    }
  ];

  const useCases = [
    {
      title: 'Heavy Machinery Bases',
      problem: 'T-slot systems deflect under heavy loads and vibration causes loosening',
      solution: 'AngleLock handles 8,000+ lb machines with zero deflection and no maintenance'
    },
    {
      title: 'Precision Equipment',
      problem: 'T-slot connection movement degrades precision over time',
      solution: 'AngleLock maintains micron-level accuracy indefinitely'
    },
    {
      title: 'Robotic Cells',
      problem: 'Vibration from robots loosens T-slot joints, requiring frequent recalibration',
      solution: 'Self-tightening joints maintain robot calibration through thousands of cycles'
    },
    {
      title: 'Cleanroom Systems',
      problem: 'Regular retightening disrupts cleanroom operations',
      solution: 'Install once and never maintain - no particle generation from loose connections'
    }
  ];

  const migrationReasons = [
    {
      icon: Shield,
      title: 'Superior Strength',
      description: '10x stronger joints mean you can use smaller profiles, reducing cost and weight while increasing performance.'
    },
    {
      icon: Zap,
      title: 'Eliminate Downtime',
      description: 'Zero maintenance requirement means no production interruptions for retightening or adjusting structures.'
    },
    {
      icon: TrendingUp,
      title: 'Better Performance',
      description: 'Vibration-proof connections protect precision processes and extend equipment life by eliminating drift.'
    },
    {
      icon: DollarSign,
      title: 'Lower Total Cost',
      description: 'Higher upfront quality pays off through reduced maintenance, less downtime, and longer service life.'
    }
  ];

  return (
    <>
      <StructuredData data={generateFAQSchema(faqData)} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbs)} />
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
              <div className="inline-block mb-6">
                <div className="w-24 h-24 bg-[#C9A227] rounded-2xl flex items-center justify-center mx-auto">
                  <Lock className="w-12 h-12 text-[#0A1628]" />
                </div>
              </div>
              <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                AngleLock vs. T-Slot
              </h1>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Discover why leading manufacturers are switching from traditional T-slot aluminum
                extrusion systems to AngleLock technology for mission-critical applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">Request Comparison Demo</Button>
                </Link>
                <Link href="/technology">
                  <Button variant="ghost" size="lg">Learn About AngleLock</Button>
                </Link>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* The Problem with T-Slot */}
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-6">
                  Why Engineers Are Moving Beyond T-Slot
                </h2>
                <p className="text-lg text-[#6B7C93] leading-relaxed">
                  While traditional T-slot aluminum extrusion systems revolutionized modular
                  construction, they have fundamental limitations that restrict their use in demanding applications.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  className="bg-red-50 border-2 border-red-200 rounded-xl p-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4 flex items-center gap-2">
                    <XCircle className="w-6 h-6 text-red-600" />
                    T-Slot Limitations
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">×</span>
                      <span className="text-[#6B7C93]">Friction-only connections loosen under vibration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">×</span>
                      <span className="text-[#6B7C93]">Requires constant maintenance and retightening</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">×</span>
                      <span className="text-[#6B7C93]">Limited load capacity for heavy equipment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">×</span>
                      <span className="text-[#6B7C93]">Connection movement degrades precision over time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 text-xl">×</span>
                      <span className="text-[#6B7C93]">Manual alignment slows assembly</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-green-50 border-2 border-[#C9A227] rounded-xl p-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-[#C9A227]" />
                    AngleLock Advantages
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B7C93]">Mechanically locked joints - 10x stronger</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B7C93]">Self-tightens under vibration - zero maintenance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B7C93]">Handles heavy machinery loads like welded steel</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B7C93]">Maintains micron-level accuracy indefinitely</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <span className="text-[#6B7C93]">Self-aligning brackets - 50% faster assembly</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* Detailed Comparison Table */}
        <section className="py-20 bg-[#F4F6F8]">
          <Container>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4">
                Head-to-Head Comparison
              </h2>
              <p className="text-lg text-[#6B7C93]">
                See how AngleLock stacks up against traditional T-slot systems
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#0A1628]">
                      <th className="py-4 px-6 text-left font-['Barlow_Condensed'] text-lg font-bold text-white">
                        Feature
                      </th>
                      <th className="py-4 px-6 text-left font-['Barlow_Condensed'] text-lg font-bold text-[#C9A227]">
                        AngleLock
                      </th>
                      <th className="py-4 px-6 text-left font-['Barlow_Condensed'] text-lg font-bold text-white/70">
                        T-Slot
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, idx) => (
                      <tr key={row.category} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="py-4 px-6 font-semibold text-[#0A1628]">
                          {row.category}
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-start gap-2">
                            {row.advantage === 'anglelock' && (
                              <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                            )}
                            <span className={row.advantage === 'anglelock' ? 'text-[#0A1628] font-medium' : 'text-[#6B7C93]'}>
                              {row.anglelock}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-[#6B7C93]">
                          {row.tslot}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* When to Choose AngleLock */}
        <section className="py-20 bg-white">
          <Container>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4">
                When to Upgrade from T-Slot to AngleLock
              </h2>
              <p className="text-lg text-[#6B7C93] max-w-3xl mx-auto">
                If you're experiencing these challenges with your T-slot system, AngleLock is the solution
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {useCases.map((useCase, idx) => (
                <motion.div
                  key={useCase.title}
                  className="bg-[#F4F6F8] rounded-xl p-6 border-l-4 border-[#C9A227]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-3">
                    {useCase.title}
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-semibold text-red-600">Problem:</span>
                      <p className="text-[#6B7C93] text-sm">{useCase.problem}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#C9A227]">AngleLock Solution:</span>
                      <p className="text-[#6B7C93] text-sm">{useCase.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Why Migrate */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-white mb-4">
                Top Reasons to Switch
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Engineers choose AngleLock when T-slot systems can't meet their performance requirements
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {migrationReasons.map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <Icon className="w-12 h-12 text-[#C9A227] mb-4" />
                    <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-white mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {reason.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4">
                  Common Questions About Switching
                </h2>
              </motion.div>

              <div className="space-y-6">
                <motion.div
                  className="bg-[#F4F6F8] rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-3">
                    Can I mix AngleLock with my existing T-slot system?
                  </h3>
                  <p className="text-[#6B7C93]">
                    While both use similar aluminum extrusion profiles, the connection methods are fundamentally
                    different. AngleLock uses specialized brackets with angled fasteners for mechanical locking.
                    For best results, we recommend using AngleLock for complete structures, especially in critical applications.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-[#F4F6F8] rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-3">
                    Is AngleLock more expensive than T-slot?
                  </h3>
                  <p className="text-[#6B7C93]">
                    Initial material costs are similar, but AngleLock delivers significantly lower total cost of ownership.
                    You'll save on maintenance, reduce downtime, avoid oversizing components, and eliminate the costs
                    associated with vibration-related failures and recalibration.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-[#F4F6F8] rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-3">
                    How difficult is it to assemble compared to T-slot?
                  </h3>
                  <p className="text-[#6B7C93]">
                    AngleLock is actually faster and easier. Self-aligning brackets eliminate the manual alignment
                    required with T-slot systems, reducing assembly time by 50%. Standard hand tools are all you need -
                    no specialized equipment required.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-[#F4F6F8] rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-3">
                    Can I still reconfigure my structure like with T-slot?
                  </h3>
                  <p className="text-[#6B7C93]">
                    Absolutely. AngleLock maintains the same modularity advantage as T-slot systems. The key difference
                    is that when you disassemble and rebuild, the joints don't weaken - they maintain full strength
                    through multiple reconfigurations.
                  </p>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Upgrade Your Aluminum Framing System?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Join the manufacturers who have switched from T-slot to AngleLock for superior
                strength, zero maintenance, and better performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">
                    Request a Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="ghost" size="lg">View Product Gallery</Button>
                </Link>
              </div>
              <p className="text-sm text-white/60 mt-6">
                Free engineering consultation • Custom quotes available • Sample kits for testing
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
