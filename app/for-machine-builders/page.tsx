import type { Metadata } from 'next';
import Link from 'next/link';
import { Wrench, CheckCircle2, ArrowRight, Factory, Cog, Building2, Clock, Shield, DollarSign, Users } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'AngleLock for Machine Builders & Custom Fabricators | Superior to 80/20 T-Slot',
  description: 'Machine builders and custom fabricators: upgrade from 80/20 T-slot to AngleLock technology. 10x stronger joints, zero maintenance, 50% faster assembly. Partner with us for premium structural framing solutions your customers will love.',
  keywords: [
    'machine builder aluminum framing', 'custom frame fabricator', 'industrial frame builder',
    '80/20 distributor alternative', 'T-slot fabrication services', 'automation frame builder',
    'custom aluminum extrusion frames', 'machine frame fabrication', 'industrial framing services',
    'robot cell builder', 'enclosure fabricator', 'workstation builder',
    'Motion AI alternative', 'NEFF alternative', 'aluminum frame assembly services',
    'custom machine bases', 'equipment frame fabrication', 'modular framing builder',
    'OEM frame supplier', 'contract frame manufacturing'
  ],
  openGraph: {
    title: 'AngleLock for Machine Builders & Custom Fabricators',
    description: 'Upgrade your framing business from 80/20 to AngleLock. Offer customers 10x stronger, zero-maintenance solutions.',
    type: 'website',
  },
};

export default function ForMachineBuildersPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-20">
          <Container>
            <div className="max-w-5xl">
              <div className="inline-block bg-[#C9A227]/20 text-[#C9A227] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                FOR MACHINE BUILDERS & FABRICATORS
              </div>

              <h1 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Give Your Customers Something Better Than 80/20
              </h1>

              <p className="text-2xl text-white/90 mb-6 leading-relaxed">
                You build custom frames, enclosures, and machine bases. Your customers trust you to deliver quality.
                <span className="text-[#C9A227]"> Why limit yourself to T-slot technology from the 1980s?</span>
              </p>

              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                AngleLock technology gives you a competitive edge: frames that are 10x stronger,
                require zero maintenance, and assemble 50% faster. Stand out from every other 80/20 shop.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg">
                    Become a Partner
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/partners/program">
                  <Button size="lg" variant="ghost">
                    View Partner Program
                  </Button>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* The Problem You Face */}
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-6 text-center">
                The Challenge Every Machine Builder Faces
              </h2>

              <p className="text-xl text-[#6B7C93] text-center mb-12">
                You're competing against dozens of other 80/20 distributors and fabricators.
                Everyone offers the same product, the same services, the same limitations.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 border-2 border-red-200 bg-red-50">
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">
                    The 80/20 Problem
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Customers call back for retightening - eating your profits',
                      'Frames loosen under vibration - warranty headaches',
                      'Limited to light-duty applications - losing big projects',
                      'Competing on price with every other T-slot shop',
                      'Customers blame YOU when joints fail'
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#6B7C93]">
                        <span className="text-red-600 text-xl">×</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6 border-2 border-[#C9A227] bg-[#C9A227]/5">
                  <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-4">
                    The AngleLock Advantage
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Zero callbacks - joints self-tighten under vibration',
                      'Premium positioning - charge more, deliver more',
                      'Win heavy-duty projects others can\'t handle',
                      'Differentiate on technology, not just price',
                      'Customers become advocates - referral machine'
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#6B7C93]">
                        <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        {/* What You Can Build */}
        <section className="py-20 bg-slate-50">
          <Container>
            <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4 text-center">
              What Machine Builders Create with AngleLock
            </h2>
            <p className="text-xl text-[#6B7C93] text-center mb-12 max-w-3xl mx-auto">
              Everything you build with 80/20 today - but stronger, faster to assemble, and maintenance-free
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Factory,
                  title: 'Machine Bases & Frames',
                  description: 'Heavy-duty bases for CNC machines, automation equipment, and industrial machinery. Support 8,000+ lbs with zero deflection.',
                  applications: ['CNC machine bases', 'Press frames', 'Assembly machines', 'Packaging equipment']
                },
                {
                  icon: Cog,
                  title: 'Robot Cells & Enclosures',
                  description: 'Vibration-proof robot mounting that maintains calibration. No more monthly re-squaring from robot movement.',
                  applications: ['Cobot workstations', 'Welding cells', 'Pick-and-place systems', 'Palletizing stations']
                },
                {
                  icon: Shield,
                  title: 'Safety Guarding & Fencing',
                  description: 'Machine guarding that stays tight and aligned. Meet safety requirements without constant maintenance.',
                  applications: ['Perimeter fencing', 'Light curtain frames', 'Interlock enclosures', 'Access gates']
                },
                {
                  icon: Building2,
                  title: 'Workstations & Benches',
                  description: 'Ergonomic workstations that don\'t wobble or loosen. Perfect for lean manufacturing environments.',
                  applications: ['Assembly benches', 'Inspection stations', 'Packing tables', 'Test fixtures']
                },
                {
                  icon: Wrench,
                  title: 'Custom Equipment Frames',
                  description: 'One-off and low-volume custom frames for OEM equipment. Prototype to production.',
                  applications: ['Test equipment', 'Medical devices', 'Lab instruments', 'Specialty machines']
                },
                {
                  icon: Users,
                  title: 'Material Handling Systems',
                  description: 'Carts, racks, and handling systems that survive daily abuse without loosening.',
                  applications: ['Tool carts', 'Storage racks', 'Transfer systems', 'AGV frames']
                }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="p-6">
                    <div className="w-12 h-12 bg-[#0A1628] rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#C9A227]" />
                    </div>
                    <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#6B7C93] mb-4 text-sm">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.applications.map((app) => (
                        <span key={app} className="text-xs bg-slate-100 text-[#6B7C93] px-2 py-1 rounded">
                          {app}
                        </span>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Comparison with 80/20 Shops */}
        <section className="py-20 bg-white">
          <Container>
            <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4 text-center">
              You vs. Every Other 80/20 Shop
            </h2>
            <p className="text-xl text-[#6B7C93] text-center mb-12">
              When you offer AngleLock, you're no longer competing on price alone
            </p>

            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#0A1628]">
                    <th className="text-left p-4 font-['Barlow_Condensed'] text-lg">Capability</th>
                    <th className="text-center p-4 font-['Barlow_Condensed'] text-lg bg-[#C9A227]/10">
                      You + AngleLock
                    </th>
                    <th className="text-center p-4 font-['Barlow_Condensed'] text-lg">
                      Typical 80/20 Shop
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { capability: 'Joint Strength', you: '10x stronger (mechanical lock)', them: 'Friction-based only' },
                    { capability: 'Vibration Environments', you: 'Self-tightening joints', them: 'Loosens over time' },
                    { capability: 'Maintenance Required', you: 'Zero - install and forget', them: 'Regular retightening' },
                    { capability: 'Heavy Load Applications', you: 'Up to 20,000+ lbs', them: 'Light-medium duty' },
                    { capability: 'Assembly Speed', you: '50% faster (self-aligning)', them: 'Manual alignment' },
                    { capability: 'Precision Applications', you: 'Micron-level accuracy', them: 'Limited precision' },
                    { capability: 'Customer Callbacks', you: 'Near zero', them: 'Frequent retightening' },
                    { capability: 'Warranty Confidence', you: 'High - product performs', them: 'Risk of joint failure' },
                    { capability: 'Competitive Position', you: 'Premium differentiation', them: 'Commodity pricing' }
                  ].map((row, idx) => (
                    <tr key={row.capability} className={idx % 2 === 0 ? 'bg-slate-50' : ''}>
                      <td className="p-4 font-semibold text-[#0A1628]">{row.capability}</td>
                      <td className="p-4 text-center bg-[#C9A227]/10 text-[#0A1628] font-medium">{row.you}</td>
                      <td className="p-4 text-center text-[#6B7C93]">{row.them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        {/* Partner Benefits */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-white mb-4 text-center">
              Why Partner with Controlled Dynamics?
            </h2>
            <p className="text-xl text-white/80 text-center mb-12 max-w-3xl mx-auto">
              We support machine builders with everything you need to win more projects
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: DollarSign,
                  title: 'Better Margins',
                  description: 'Premium product = premium pricing. Stop racing to the bottom on 80/20 quotes.'
                },
                {
                  icon: Clock,
                  title: 'Faster Assembly',
                  description: 'Self-aligning brackets cut your build time by 50%. More projects, same crew.'
                },
                {
                  icon: Shield,
                  title: 'Zero Callbacks',
                  description: 'No more warranty visits for loose joints. Your reputation stays solid.'
                },
                {
                  icon: Users,
                  title: 'Engineering Support',
                  description: 'Free CAD design assistance and technical support for complex projects.'
                }
              ].map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <Card key={benefit.title} className="p-6 bg-white/5 border-white/10">
                    <Icon className="w-12 h-12 text-[#C9A227] mb-4" />
                    <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {benefit.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <Container>
            <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-12 text-center">
              How to Get Started
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: '1',
                    title: 'Request Partner Info',
                    description: 'Tell us about your business and the types of projects you typically handle.'
                  },
                  {
                    step: '2',
                    title: 'Get Trained & Equipped',
                    description: 'We\'ll provide product training, CAD resources, and sample kits for your shop.'
                  },
                  {
                    step: '3',
                    title: 'Win More Projects',
                    description: 'Start offering AngleLock solutions and differentiate from every other shop.'
                  }
                ].map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-[#0A1628]">{step.step}</span>
                    </div>
                    <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#6B7C93]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Testimonial/Social Proof */}
        <section className="py-20 bg-slate-50">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-8">
                Machine Builders Trust AngleLock
              </h2>

              <Card className="p-8 bg-white">
                <blockquote className="text-xl text-[#6B7C93] italic mb-6">
                  "We switched from 80/20 two years ago. The difference is night and day.
                  Our builds are faster, our customers are happier, and we haven't had a single
                  callback for loose joints. AngleLock lets us compete on quality, not just price."
                </blockquote>
                <div className="font-semibold text-[#0A1628]">
                  — Custom Machine Builder, California
                </div>
              </Card>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <Container>
            <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-12 text-center">
              Questions from Machine Builders
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: 'Can I still use my existing 80/20 CAD designs?',
                  a: 'AngleLock uses similar profile dimensions, so your design expertise transfers. We provide complete CAD libraries and can help convert existing designs. The main difference is the connection hardware - our self-aligning brackets replace T-nuts and corner connectors.'
                },
                {
                  q: 'What about customers who specifically ask for 80/20?',
                  a: 'Most customers ask for "80/20" generically, the way people say "Kleenex" for tissues. When you show them a solution that\'s 10x stronger, requires zero maintenance, and assembles faster - at competitive pricing - they choose performance over brand name.'
                },
                {
                  q: 'Is the pricing competitive with 80/20?',
                  a: 'Material costs are similar. Your total project cost is often lower because assembly is 50% faster. And you can charge premium pricing for a premium product. Most partners see better margins with AngleLock than with commodity T-slot.'
                },
                {
                  q: 'Do you offer volume discounts for fabricators?',
                  a: 'Yes. Our partner program includes tiered pricing based on volume. We also offer marketing support, co-branded materials, and priority engineering assistance for qualified partners.'
                },
                {
                  q: 'What if I need custom profiles or special lengths?',
                  a: 'We offer cut-to-length service, custom machining, and can work with you on special requirements. Our engineering team supports complex projects from design through delivery.'
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
                Ready to Differentiate Your Shop?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Join the machine builders who've upgraded from 80/20 to AngleLock.
                Better product. Better margins. Happier customers.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">
                    Request Partner Information
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/compare/t-slot">
                  <Button size="lg" variant="ghost">
                    See Technical Comparison
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-white/60 mt-6">
                Free sample kit available for qualified machine builders
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
