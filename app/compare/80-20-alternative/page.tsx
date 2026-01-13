import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, XCircle, ArrowRight, AlertTriangle, Zap, Shield, DollarSign, Clock, Wrench } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: '80/20 Alternative | AngleLock vs 8020 T-Slot Aluminum Framing | 10x Stronger',
  description: 'Looking for an 80/20 alternative? AngleLock technology delivers 10x stronger joints, zero maintenance, and 50% faster assembly than 8020 T-slot systems. Compare features, pricing, and performance.',
  keywords: [
    '80/20 alternative', '8020 alternative', 'T-slot alternative', '80 20 alternative',
    'better than 80/20', '80/20 replacement', '8020 competitor', 'T-slot competitor',
    '80/20 vs AngleLock', '8020 problems', 'T-slot loosening', '80/20 loosening fix',
    'stronger than 80/20', '80/20 upgrade', 'industrial erector set alternative',
    'aluminum extrusion alternative', 'modular framing alternative', '80/20 substitute',
    'Bosch Rexroth alternative', 'Item profile alternative', 'MiniTec alternative',
    'Vention alternative', 'T-slot framing problems', 'vibration resistant framing'
  ],
  openGraph: {
    title: '80/20 Alternative: AngleLock Technology | 10x Stronger Than T-Slot',
    description: 'Discover why engineers are switching from 80/20 T-slot to AngleLock. Mechanically locked joints that never loosen.',
    type: 'website',
  },
};

export default function EightyTwentyAlternativePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-20">
          <Container>
            <div className="max-w-5xl">
              <div className="inline-block bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                FRUSTRATED WITH 80/20?
              </div>

              <h1 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                The 80/20 Alternative That Actually Solves T-Slot Problems
              </h1>

              <p className="text-2xl text-white/90 mb-6 leading-relaxed">
                Tired of joints loosening? Constant retightening? Frames that can't handle vibration?
                <span className="text-[#C9A227]"> There's a better way.</span>
              </p>

              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                AngleLock is the aluminum framing system that was designed to fix everything
                engineers hate about 80/20 and T-slot systems - while keeping everything you love.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/contact">
                  <Button size="lg">
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/technology">
                  <Button size="lg" variant="ghost">
                    How AngleLock Works
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#C9A227]">10x</div>
                  <div className="text-white/70 text-sm">Stronger Joints</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#C9A227]">0</div>
                  <div className="text-white/70 text-sm">Maintenance Required</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#C9A227]">50%</div>
                  <div className="text-white/70 text-sm">Faster Assembly</div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* The 80/20 Problem */}
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 justify-center mb-6">
                <AlertTriangle className="w-10 h-10 text-red-500" />
                <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628]">
                  The Problem with 80/20 & T-Slot Systems
                </h2>
              </div>

              <p className="text-xl text-[#6B7C93] text-center mb-12">
                If you've used 80/20, 8020, Bosch Rexroth, Item, MiniTec, or any T-slot system,
                you've probably experienced these issues:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    problem: 'Joints Loosen Under Vibration',
                    detail: 'T-slot connections rely on friction. Any vibration - from motors, conveyors, robots, or even foot traffic - causes joints to work loose over time. You\'re stuck with constant retightening or accept a wobbly frame.',
                    impact: 'Monthly maintenance, production stops, safety risks'
                  },
                  {
                    problem: 'Precision Degrades Over Time',
                    detail: 'That perfectly aligned frame you built? Give it a few months in a production environment. Micro-movements at each joint accumulate into visible misalignment. Equipment goes out of spec.',
                    impact: 'Calibration drift, quality issues, rework costs'
                  },
                  {
                    problem: 'Limited Load Capacity',
                    detail: '80/20 is great for light-duty applications. But try to build a machine base for heavy equipment, and you\'re either oversizing everything or watching deflection eat into your tolerances.',
                    impact: 'Oversized profiles, higher costs, still limited'
                  },
                  {
                    problem: 'Slow, Fussy Assembly',
                    detail: 'Sliding T-nuts into channels, manually aligning brackets, checking squareness with a square, tightening, checking again... T-slot assembly is tedious and error-prone.',
                    impact: 'Labor costs, assembly errors, frustrated techs'
                  }
                ].map((item) => (
                  <Card key={item.problem} className="p-6 border-l-4 border-red-500">
                    <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      {item.problem}
                    </h3>
                    <p className="text-[#6B7C93] mb-3 text-sm">
                      {item.detail}
                    </p>
                    <div className="text-xs text-red-600 font-semibold bg-red-50 px-3 py-1 rounded inline-block">
                      Impact: {item.impact}
                    </div>
                  </Card>
                ))}
              </div>

              <div className="bg-slate-100 rounded-xl p-6 text-center">
                <p className="text-lg text-[#6B7C93]">
                  <strong className="text-[#0A1628]">Sound familiar?</strong> These aren't edge cases -
                  they're fundamental limitations of friction-based T-slot technology.
                  No amount of Loctite or overtightening fixes the underlying problem.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* The AngleLock Solution */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-white mb-4">
                  AngleLock: Engineered to Fix T-Slot Problems
                </h2>
                <p className="text-xl text-white/80">
                  Same modularity you love. None of the problems you hate.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Shield,
                    title: 'Mechanical Lock, Not Friction',
                    description: 'AngleLock brackets use angled fasteners that create a true mechanical interlock. The joint physically cannot loosen - in fact, vibration makes it tighter.',
                    result: 'Zero maintenance, forever'
                  },
                  {
                    icon: Zap,
                    title: '10x Stronger Joints',
                    description: 'Friction connections are inherently weak. Mechanical locking multiplies joint strength by 10x, letting you build with smaller profiles or handle heavier loads.',
                    result: 'Less material, more capability'
                  },
                  {
                    icon: Clock,
                    title: '50% Faster Assembly',
                    description: 'Self-aligning brackets eliminate manual alignment. No sliding T-nuts into channels. No checking squareness after every joint. Just connect and tighten.',
                    result: 'Half the labor, perfect every time'
                  },
                  {
                    icon: DollarSign,
                    title: 'Lower Total Cost',
                    description: 'Similar material costs as 80/20, but you save on assembly time, eliminate maintenance labor, reduce callbacks, and avoid oversizing. Real savings add up fast.',
                    result: 'Better ROI than T-slot'
                  }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.title} className="p-6 bg-white/5 border-white/10">
                      <Icon className="w-10 h-10 text-[#C9A227] mb-4" />
                      <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-3">
                        {item.description}
                      </p>
                      <div className="text-xs text-[#C9A227] font-semibold">
                        Result: {item.result}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Head-to-Head Comparison */}
        <section className="py-20 bg-white">
          <Container>
            <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4 text-center">
              AngleLock vs. 80/20: Direct Comparison
            </h2>
            <p className="text-xl text-[#6B7C93] text-center mb-12">
              Feature-by-feature, see why engineers are making the switch
            </p>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#0A1628]">
                    <th className="text-left p-4 font-['Barlow_Condensed'] text-lg">Feature</th>
                    <th className="text-center p-4 font-['Barlow_Condensed'] text-lg bg-[#C9A227]/10">AngleLock</th>
                    <th className="text-center p-4 font-['Barlow_Condensed'] text-lg">80/20 & T-Slot</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: 'Connection Type',
                      anglelock: 'Mechanical interlock',
                      tslot: 'Friction only',
                      winner: 'anglelock'
                    },
                    {
                      feature: 'Joint Strength',
                      anglelock: '10x stronger',
                      tslot: 'Baseline',
                      winner: 'anglelock'
                    },
                    {
                      feature: 'Vibration Response',
                      anglelock: 'Self-tightening',
                      tslot: 'Loosens over time',
                      winner: 'anglelock'
                    },
                    {
                      feature: 'Maintenance',
                      anglelock: 'Zero required',
                      tslot: 'Regular retightening',
                      winner: 'anglelock'
                    },
                    {
                      feature: 'Assembly Time',
                      anglelock: '50% faster',
                      tslot: 'Baseline',
                      winner: 'anglelock'
                    },
                    {
                      feature: 'Alignment Method',
                      anglelock: 'Self-aligning brackets',
                      tslot: 'Manual with square',
                      winner: 'anglelock'
                    },
                    {
                      feature: 'Precision Stability',
                      anglelock: 'Micron-level, permanent',
                      tslot: 'Degrades over time',
                      winner: 'anglelock'
                    },
                    {
                      feature: 'Load Capacity',
                      anglelock: 'Rivals welded steel',
                      tslot: 'Light-medium duty',
                      winner: 'anglelock'
                    },
                    {
                      feature: 'Modularity',
                      anglelock: 'Full reconfigurability',
                      tslot: 'Full reconfigurability',
                      winner: 'tie'
                    },
                    {
                      feature: 'Material Cost',
                      anglelock: 'Similar',
                      tslot: 'Similar',
                      winner: 'tie'
                    },
                    {
                      feature: 'Total Cost of Ownership',
                      anglelock: 'Lower (no maintenance)',
                      tslot: 'Higher (ongoing labor)',
                      winner: 'anglelock'
                    }
                  ].map((row, idx) => (
                    <tr key={row.feature} className={idx % 2 === 0 ? 'bg-slate-50' : ''}>
                      <td className="p-4 font-semibold text-[#0A1628]">{row.feature}</td>
                      <td className="p-4 text-center bg-[#C9A227]/10">
                        <div className="flex items-center justify-center gap-2">
                          {row.winner === 'anglelock' && (
                            <CheckCircle2 className="w-5 h-5 text-[#C9A227]" />
                          )}
                          <span className={row.winner === 'anglelock' ? 'font-semibold text-[#0A1628]' : 'text-[#6B7C93]'}>
                            {row.anglelock}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-center text-[#6B7C93]">{row.tslot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-slate-50">
          <Container>
            <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4 text-center">
              When to Switch from 80/20 to AngleLock
            </h2>
            <p className="text-xl text-[#6B7C93] text-center mb-12">
              AngleLock is the right choice when T-slot limitations become unacceptable
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: 'Vibrating Equipment',
                  description: 'Motors, conveyors, robots, vibratory feeders - any application where vibration would loosen T-slot joints',
                  examples: 'CNC machines, packaging lines, robotic cells'
                },
                {
                  title: 'Heavy Loads',
                  description: 'Machine bases and frames that need to support thousands of pounds without deflection',
                  examples: 'Presses, assembly machines, test equipment'
                },
                {
                  title: 'Precision Applications',
                  description: 'Equipment where micron-level accuracy must be maintained over years, not weeks',
                  examples: 'Metrology fixtures, optical systems, semiconductor'
                },
                {
                  title: 'Low-Maintenance Environments',
                  description: 'Installations where ongoing maintenance access is difficult or impossible',
                  examples: 'Cleanrooms, remote sites, 24/7 operations'
                },
                {
                  title: 'Safety-Critical Systems',
                  description: 'Guarding, fencing, and enclosures where loose joints create safety risks',
                  examples: 'Robot cells, machine guarding, automation'
                },
                {
                  title: 'Premium Applications',
                  description: 'Customer-facing equipment where quality and reliability reflect on your brand',
                  examples: 'Medical devices, lab equipment, displays'
                }
              ].map((useCase) => (
                <Card key={useCase.title} className="p-6">
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-[#6B7C93] text-sm mb-3">
                    {useCase.description}
                  </p>
                  <div className="text-xs text-[#0A1628] font-semibold">
                    Examples: {useCase.examples}
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <Container>
            <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-12 text-center">
              Common Questions About Switching from 80/20
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: 'Is AngleLock compatible with my existing 80/20 profiles?',
                  a: 'AngleLock uses its own extrusion profiles optimized for mechanical locking. While dimensions are similar, the connection system is fundamentally different. For best results, we recommend complete AngleLock structures rather than hybrid systems. Our engineering team can help you transition existing designs.'
                },
                {
                  q: 'How does the pricing compare to 80/20?',
                  a: 'Material costs are comparable to 80/20. However, total project cost is often lower with AngleLock because assembly is 50% faster, and you eliminate ongoing maintenance costs. Many customers find they can use smaller profiles due to the stronger joints, further reducing material costs.'
                },
                {
                  q: 'What if my customer specifically wants 80/20?',
                  a: 'Most customers say "80/20" the way they say "Kleenex" - they mean modular aluminum framing. When you show them a system that\'s 10x stronger, never loosens, and assembles faster, they choose performance. We can help you present the comparison to your customers.'
                },
                {
                  q: 'Can I still reconfigure AngleLock structures like T-slot?',
                  a: 'Absolutely. AngleLock maintains full modularity - you can disassemble and reconfigure structures as needed. The key difference is that the joints maintain their strength through multiple reconfigurations, unlike T-slot connections that weaken over time.'
                },
                {
                  q: 'What about accessories and add-ons?',
                  a: 'We offer a complete range of panels, doors, hinges, leveling feet, casters, and accessories. The T-slot channel on AngleLock profiles also accepts standard T-nuts for mounting sensors, cable management, and other accessories.'
                },
                {
                  q: 'Do you offer design support?',
                  a: 'Yes. We provide free CAD design assistance, complete 3D models, and engineering support for complex projects. Our team can help you design from scratch or convert existing 80/20 designs to AngleLock.'
                }
              ].map((faq) => (
                <Card key={faq.q} className="p-6">
                  <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-[#6B7C93] leading-relaxed">
                    {faq.a}
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Upgrade from 80/20?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Get a free quote and see how AngleLock compares for your specific application.
                We'll show you the strength difference, cost comparison, and timeline.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">
                    Get Your Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/technology/documentation/engineering-data">
                  <Button size="lg" variant="ghost">
                    Download Specs
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-white/60 mt-6">
                Free engineering consultation included • Sample kits available
              </p>
            </div>
          </Container>
        </section>

        {/* Related Comparisons */}
        <section className="py-12 bg-slate-100">
          <Container>
            <div className="text-center">
              <p className="text-[#6B7C93] mb-4">Also comparing AngleLock to:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/compare/t-slot" className="text-[#0A1628] hover:text-[#C9A227] font-semibold">
                  T-Slot Systems
                </Link>
                <span className="text-[#6B7C93]">•</span>
                <Link href="/compare/t-slot" className="text-[#0A1628] hover:text-[#C9A227] font-semibold">
                  Bosch Rexroth
                </Link>
                <span className="text-[#6B7C93]">•</span>
                <Link href="/compare/t-slot" className="text-[#0A1628] hover:text-[#C9A227] font-semibold">
                  Item Profiles
                </Link>
                <span className="text-[#6B7C93]">•</span>
                <Link href="/compare/t-slot" className="text-[#0A1628] hover:text-[#C9A227] font-semibold">
                  MiniTec
                </Link>
                <span className="text-[#6B7C93]">•</span>
                <Link href="/compare/t-slot" className="text-[#0A1628] hover:text-[#C9A227] font-semibold">
                  Welded Steel
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
