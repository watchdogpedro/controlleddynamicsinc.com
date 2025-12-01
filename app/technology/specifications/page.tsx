'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Radio } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';

interface PodcastSegment {
  number: number;
  title: string;
  overview: string;
  fullContent: string;
}

const podcastSegments: PodcastSegment[] = [
  {
    number: 1,
    title: 'The Control Dynamics Mission',
    overview: 'Our core mission is to provide a superior alternative to traditional T-slot structural aluminum systems, expanding the potential of aluminum as the preferred material for structural applications.',
    fullContent: 'Welcome to "Structural Solutions Spotlight." When seeking structural aluminum, many companies offer options, but only one provides a truly superior product focused on structural integrity, reliability, and holding tight tolerances. That one-stop shop is Control Dynamics Incorporated. Their core mission is to provide a superior alternative to traditional T-slot structural aluminum systems. By doing this, they are further expanding the potential of aluminum as the preferred material for structural applications across the industry. Control Dynamics profiles and components are specifically engineered for maximum strength and performance thanks to their AngleLock design.'
  },
  {
    number: 2,
    title: 'AngleLock: The Patented Advantage',
    overview: 'The AngleLock patented fastening system creates a bonded connection in all planes, unlike T-slot systems which rely on friction and create pivot points.',
    fullContent: 'T-slot systems rely on friction, but AngleLock relies on something much stronger: a bonded connection. The AngleLock patented connectors and structural aluminum designs offered by Control Dynamics are unmatched in the industry. This patented fastening system ensures assemblies stay together by creating a bonded connection in all planes. Unlike a T-slot system, which is comprised of pivots, the AngleLock system is truly a bonded connection. This unique structural system provides unmatched strength, durability, and long-term predictability.'
  },
  {
    number: 3,
    title: 'Precision Manufacturing Power',
    overview: 'Our Grafton, Wisconsin facility features 21 dedicated Ultra Precision CNC machining centers with high-density custom fixtures for efficient multi-part manufacturing.',
    fullContent: 'Precision is paramount at Control Dynamics. Located in Grafton, Wisconsin, the facility currently boasts 21 dedicated Ultra Precision computer numeric controlled Machining centers. These centers are outfitted with high-density custom fixtures. This setup allows their operators to quickly and efficiently manufacture multiple parts at once. This commitment to advanced manufacturing ensures the components are built to the necessary standards required for a superior solution to diverse requirements.'
  },
  {
    number: 4,
    title: 'T-Slot Limitations: Static vs. Dynamic',
    overview: 'Traditional T-slot systems work in static applications but have fundamental weaknesses: all contact points are parallel, providing frictional force in only a single plane.',
    fullContent: 'Let\'s look at traditional systems. Numerous companies manufacture modular aluminum framing systems, and they nearly all employ the basic T-slot fastening system. This system relies on using an oversized fastener tightened to a high torque. They do this in an effort to keep assembled components from moving when external forces are applied. In static situations, this assembly might never experience an issue. However, this system\'s points of contact are all parallel, meaning the frictional force is only in a single direction or plane.'
  },
  {
    number: 5,
    title: 'T-Slot Failure in Motion',
    overview: 'In dynamic situations with movement or vibration, T-slot fastening creates pivot points that allow slippage, causing misalignment and loosening fasteners.',
    fullContent: 'The weakness of the T-slot system becomes evident in dynamic situations. When exposed to movement, the fastening system creates pivot points. These pivots allow for movement or slippage between the components. This movement causes misalignment and ultimately loosens the fastener, compromising the assembly. The T-slot system creates significant headaches and heartache when subject to anything that\'s vibrating or creating resistance to being stagnant.'
  },
  {
    number: 6,
    title: 'Distortion and Compounding Misalignment',
    overview: 'Oversized T-slot fasteners torqued to specification measurably distort the profile outward, compounding misalignment issues caused by dynamic forces.',
    fullContent: 'Another critical issue with the existing T-slot technology is distortion. The use of an oversized fastener, torqued to specification, can measurably distort the profile. This distortion pushes the profile outward well beyond the extrusion tolerances. This outward pressure actually compounds the misalignment caused by dynamic forces. This demonstrates why relying solely on high torque and friction in a single plane is insufficient for modern structural needs.'
  },
  {
    number: 7,
    title: 'The Solution: Eliminating Pivot Points',
    overview: 'Control Dynamics eliminates all pivot points by creating a mechanical lock, ensuring bolts never loosen and assemblies maintain perfect alignment.',
    fullContent: 'The key to correcting the issues inherent in existing T-slot fastening systems lies in eliminating all pivot points. Control Dynamics achieves this by creating a mechanical lock. The AngleLock system ensures you don\'t have to worry about bolts coming loose or things coming out of alignment. It is a totally different type of structure built for reliability.'
  },
  {
    number: 8,
    title: 'AngleLock\'s Mechanical Lock: Planes 1, 2, and 3',
    overview: 'The AngleLock nut anchors in two planes into the V-shaped profile area, then rotates and locks into a third plane as the fastener tightens.',
    fullContent: 'How does AngleLock create this mechanical lock? It\'s a precise, multi-stage process. First, the AngleLock nut is anchored in two planes into the V-shaped area of the extruded profile. Next, as the fastener is tightened, the nut rotates up. This action locks it into the opposite side, successfully anchoring itself into a third plane. This early anchoring step ensures that the foundation of the connection is secure across multiple directions, stabilizing the nut immediately.'
  },
  {
    number: 9,
    title: 'AngleLock\'s Mechanical Lock: Planes 4 and 5',
    overview: 'The upper bracket slides into position creating a fourth plane, then the stretched bolt creates friction in a fifth plane, completing the mechanical lock.',
    fullContent: 'Continuing the AngleLock process, after the nut is secured, the upper bracket slides into position. This bracket is precision-aligned to the extruded profile, creating a fourth locking plane. Finally, as the fastener is brought up to its required torque, the appropriately sized bolt stretches slightly. This stretching action creates friction in a fifth plane between the bracket and the profile. This five-plane engagement pulls the entire assembly together to form the complete mechanical lock.'
  },
  {
    number: 10,
    title: 'The Spring Action Advantage',
    overview: 'The stretched bolt acts like a spring, keeping the assembly in precise alignment even when subjected to large external forces attempting to separate components.',
    fullContent: 'One of the most unique aspects of the AngleLock system is the bolt\'s action. The stretched bolt acts like a spring. This spring-like effect keeps the assembly in precise alignment. Even when subjected to a large, direct external force that attempts to separate the two attached components, the assembly remains secure. You can try subjecting other aluminum framing systems to that kind of force, but only AngleLock maintains precise alignment.'
  },
  {
    number: 11,
    title: 'Real-World Applications',
    overview: 'AngleLock serves aerospace, automation, work platforms, material handling, video production, and custom applications where vibration and precise alignment are critical.',
    fullContent: 'Where is this superior structural system being used today? Control Dynamics is ready to work with you for a solution whether your requirements are in Aerospace, automation, Work Platforms, Material Handling, video production rooms, or custom applications. This system is vital wherever machinery is vibrating all day, such as with compressors, or in advanced automation solutions. If you have automation solutions that demand longevity and predictable alignment, Control Dynamics offers the structural foundation you need.'
  },
  {
    number: 12,
    title: 'High-Precision Demonstration: Robot Mount',
    overview: 'Demonstration with docking cart and robot dock shows plus or minus five micron repeatability, proving extreme rigidity and precision even in mobile applications.',
    fullContent: 'The precision of AngleLock is best demonstrated in real-world engineering projects. Control Dynamics demonstrated their system using a docking cart and robot dock. The team highlighted how easily the robot can be removed from and reattached to its docking position. The repeatability of the robot mount itself is highly accurate, achieving plus or minus five microns. Even accounting for movement due to the wheels on the cart, the system remains extremely rigid and extremely precise.'
  },
  {
    number: 13,
    title: 'Accuracy in Mobile Applications',
    overview: 'Even battery-powered mobile carts with wheels achieve high accuracy in docking and repositioning, demonstrating the system\'s rigidity in challenging applications.',
    fullContent: 'Let\'s delve deeper into the robot mount demonstration. When detaching and reattaching the cart to rerun the robot, engineers observed high accuracy. While the accuracy in the vertical plane is somewhat influenced by the cart\'s wheels, the overall setup is still very accurate. Notably, the docking cart utilized a battery pack, meaning there was no electrical connection required for the demonstration. The ease of removal and reattachment, coupled with precision measurements (such as plus or minus five microns repeatability), speaks to the system\'s rigidity.'
  },
  {
    number: 14,
    title: 'Inherited Values: Integrity and Quality',
    overview: 'Control Dynamics is built on core values of integrity, ingenuity, social responsibility, and relentless drive for quality and precision inherited from our founders.',
    fullContent: 'Control Dynamics is more than just technology; it\'s built on strong corporate values. The core values of the company are inherited directly from their founders. These values include approaching professional and personal lives with a great sense of Integrity, Ingenuity, deep social responsibility, and a relentless drive for quality and precision. The Control Dynamics product line stands as the latest testament to these important, guiding principles. To learn more, visit controlleddynamics.com.'
  }
];

function PodcastCard({ segment, index }: { segment: PodcastSegment; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-start gap-4 hover:bg-[#F4F6F8] transition-colors text-left"
      >
        <div className="flex-shrink-0 w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center">
          <Radio className="w-6 h-6 text-[#0A1628]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-[#C9A227] mb-1">
                SEGMENT {segment.number}
              </div>
              <h3 className="font-['Barlow_Condensed'] text-xl font-bold text-[#0A1628] mb-2">
                {segment.title}
              </h3>
              <p className="text-[#6B7C93] text-sm leading-relaxed">
                {segment.overview}
              </p>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-[#C9A227] flex-shrink-0 transition-transform duration-300 mt-1 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 py-5 bg-[#F4F6F8] border-t border-gray-200">
          <div className="ml-16">
            <h4 className="font-['Barlow_Condensed'] text-sm font-bold text-[#0A1628] mb-3 uppercase tracking-wide">
              Full Transcript
            </h4>
            <p className="text-[#6B7C93] leading-relaxed italic">
              {segment.fullContent}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TechnicalSpecificationsPage() {
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
              <div className="inline-block mb-6">
                <div className="w-24 h-24 bg-[#C9A227] rounded-2xl flex items-center justify-center mx-auto">
                  <Radio className="w-12 h-12 text-[#0A1628]" />
                </div>
              </div>
              <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                Technical Specifications
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Explore the technical details and engineering principles behind AngleLock technology
                through our comprehensive podcast series. Each segment covers a specific aspect of
                how our patented system delivers superior structural performance.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Podcast Segments Grid */}
        <section className="py-20 bg-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4 text-center">
                14 Technical Deep Dives
              </h2>
              <p className="text-center text-[#6B7C93] max-w-3xl mx-auto">
                Click any segment to expand and read the full content. Each segment is approximately
                60 seconds and covers a specific technical aspect of the AngleLock system.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {podcastSegments.map((segment, index) => (
                <PodcastCard key={segment.number} segment={segment} index={index} />
              ))}
            </div>
          </Container>
        </section>

        {/* Key Analogy Section */}
        <section className="py-20 bg-[#F4F6F8]">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-2xl p-8 sm:p-12 text-white">
                <h2 className="font-['Barlow_Condensed'] text-3xl sm:text-4xl font-bold mb-6">
                  Understanding the <span className="text-[#C9A227]">Mechanical Lock</span>
                </h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-white/90 leading-relaxed mb-4">
                    Think of the AngleLock system versus the T-slot system as the difference between
                    using <strong className="text-[#C9A227]">glue tape versus interlocking bricks</strong>.
                  </p>
                  <p className="text-white/90 leading-relaxed mb-4">
                    T-slot systems rely on friction—like glue tape—which holds well statically, but
                    when twisted or pulled (dynamic forces), the surface bond (friction) can break,
                    causing movement and slippage.
                  </p>
                  <p className="text-white/90 leading-relaxed">
                    AngleLock, however, uses five locking planes, much like interlocking bricks.
                    The components anchor into each other mechanically, and the stretched bolt acts
                    like a powerful rubber band wrapped around the entire structure, ensuring that
                    even if external force is applied, the structure is pulled back into its precise
                    alignment, not relying on mere surface friction.
                  </p>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
                Experience the Difference
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Ready to see how AngleLock technology can solve your structural challenges?
                Contact our engineering team to discuss your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 bg-[#C9A227] text-[#0A1628] hover:bg-[#E0B830] shadow-lg hover:shadow-xl px-8 py-3 text-base"
                >
                  Contact Engineering
                </a>
                <a
                  href="/technology"
                  className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 border-2 border-white/20 text-white hover:bg-white/10 px-8 py-3 text-base"
                >
                  Learn More About AngleLock
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
