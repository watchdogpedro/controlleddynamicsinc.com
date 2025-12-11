'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  icon: string;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    category: 'AngleLock Technology',
    icon: '⚙️',
    faqs: [
      {
        question: 'What makes AngleLock different from traditional T-slot aluminum framing?',
        answer: 'AngleLock uses a patented 5-plane anchoring system that creates mechanically locked joints, not friction-based connections. Traditional T-slot systems rely on bolt tension against slot walls, which loosens over time—especially under vibration. AngleLock connections actually tighten under load and provide 10x the strength of standard T-slot systems, rivaling welded steel while maintaining full modularity.'
      },
      {
        question: 'How does AngleLock handle vibration?',
        answer: 'This is where AngleLock truly excels. The mechanical locking mechanism creates joints that tighten under vibration rather than loosening. Traditional T-slot fasteners work loose in high-vibration environments, requiring constant maintenance and re-tightening. AngleLock structures have operated in high-vibration applications for years with zero maintenance and no loss of rigidity—critical for precision equipment, robotics, and machine tools.'
      },
      {
        question: 'Can I reconfigure an AngleLock structure after it\'s built?',
        answer: 'Absolutely. That\'s one of the key advantages. You can fully disassemble and reconfigure AngleLock structures without weakening the connections. Unlike welded steel (permanent) or traditional T-slot (weakens with repeated assembly), AngleLock maintains full strength through multiple reconfigurations. We have customers who have modified their structures 8-10 times over several years with no degradation in performance.'
      },
      {
        question: 'What load capacities can AngleLock structures handle?',
        answer: 'AngleLock structures routinely support loads from hundreds to tens of thousands of pounds depending on design and extrusion size. We\'ve built machine bases supporting 15,000+ lbs with minimal deflection, and cleanroom equipment frames handling 4,500 lbs. Every custom structure is engineered with FEA (Finite Element Analysis) to verify it meets your specific load, deflection, and safety requirements.'
      }
    ]
  },
  {
    category: 'Custom Engineering Process',
    icon: '📐',
    faqs: [
      {
        question: 'How does your custom engineering process work?',
        answer: 'We follow a 6-step process: (1) Discovery & Consultation - understanding your requirements, (2) Concept Design - preliminary CAD models and configurations, (3) Engineering & Analysis - detailed FEA and structural validation, (4) Review & Approval - you review and approve the design, (5) Fabrication - precision manufacturing of your structure, and (6) Delivery & Support - installation documentation and support. The entire process typically takes 4-8 weeks depending on complexity.'
      },
      {
        question: 'Do you provide CAD files and engineering drawings?',
        answer: 'Yes, absolutely. Every custom structure includes complete 3D CAD files (STEP, IGES, or your preferred format), detailed assembly drawings, FEA analysis results, engineering calculations, and a full bill of materials. These are provided during the approval phase and again with final delivery. You own all the documentation for your structure.'
      },
      {
        question: 'Can you help with installation, or do we install it ourselves?',
        answer: 'We provide comprehensive assembly instructions and documentation that make installation straightforward—most structures can be assembled by your maintenance team in hours, not days. We also offer remote installation support via video call and can provide on-site installation assistance for complex or large-scale projects. Many customers appreciate the fast assembly time compared to welded alternatives.'
      },
      {
        question: 'What if we need to modify the structure later?',
        answer: 'We plan for this. All our structures are designed with future modification in mind. We provide the CAD files, so you can design changes yourself, or we can handle modifications for you. Because AngleLock is modular, you can add extensions, change configurations, or relocate structures without starting over. We\'ve helped customers adapt structures for new equipment, different processes, and facility moves—all using the original structure.'
      }
    ]
  },
  {
    category: 'Pricing & Timelines',
    icon: '💰',
    faqs: [
      {
        question: 'What is the typical lead time for a custom structure?',
        answer: 'Standard projects run 4-8 weeks from approved design to delivery. This includes engineering (1-2 weeks), your review and approval (2-3 days), and fabrication (2-6 weeks). For urgent projects, we can expedite to 2-3 weeks. Complex systems requiring extensive FEA or integration with existing equipment may take 8-12 weeks. We\'ll provide a specific timeline during the concept phase.'
      },
      {
        question: 'How much does a custom AngleLock structure cost?',
        answer: 'Pricing varies significantly based on size, complexity, load requirements, and features. Simple machine bases might start around $2,000-5,000, while complex multi-axis cartesian systems or large-scale robot cells can range from $15,000-50,000+. However, AngleLock often costs less than custom welded steel when you factor in engineering time, installation speed, and future reconfigurability. Request a quote and we\'ll provide detailed pricing based on your specific requirements.'
      },
      {
        question: 'Do you charge for design and engineering separately?',
        answer: 'For projects that proceed to fabrication, design and engineering services are typically included in the total project cost. For design-only projects (you fabricate elsewhere) or prototypes, we charge separately for engineering services. During initial consultation, we\'ll discuss your needs and provide a clear proposal showing all costs—no surprises.'
      },
      {
        question: 'What is your payment schedule?',
        answer: 'Typical payment terms are: 50% deposit upon design approval (before fabrication begins), and 50% due upon delivery. For larger projects or established customers, we can discuss alternative arrangements. We accept checks, wire transfers, ACH, and purchase orders from qualified companies.'
      }
    ]
  },
  {
    category: 'Aerospace & Defense Applications',
    icon: '✈️',
    faqs: [
      {
        question: 'Can AngleLock meet precision requirements for satellite assembly and aerospace applications?',
        answer: 'Yes, AngleLock is ideal for aerospace precision applications. We achieve ±5 micron tolerances under load for satellite assembly fixtures, avionics test stands, and spacecraft integration platforms. Major aerospace contractors use our structures for applications requiring micron-level precision, including 12\'×20\' satellite integration platforms supporting 2,000+ lbs with <5 micron deflection. Our mechanically locked joints maintain alignment far better than friction-based systems like 80/20 or T-slot, which is why leading aerospace companies including Boeing, Lockheed Martin, and satellite manufacturers trust AngleLock for mission-critical fixtures.'
      },
      {
        question: 'Is AngleLock suitable for aerospace cleanroom environments and satellite manufacturing?',
        answer: 'Absolutely. AngleLock is ideal for aerospace cleanrooms. Our clear anodized 6105-T5 aluminum is non-particle-shedding and certified for ISO Class 1-8 cleanrooms, critical for satellite integration, spacecraft assembly, and precision aerospace manufacturing. Unlike T-slot systems requiring fabric covers (which shed particles), AngleLock provides inherent cleanroom compatibility. We have structures operating in satellite manufacturing facilities, aerospace research labs, and defense contractors\' cleanrooms with zero contamination issues.'
      },
      {
        question: 'How does AngleLock compare to 80/20 or T-slot for aerospace ground support equipment (GSE)?',
        answer: 'AngleLock provides 10x greater strength than T-slot systems and eliminates the loosening problems that plague 80/20 connections under vibration - critical for aerospace GSE applications. For avionics testing, engine maintenance stands, and flight simulator platforms, the self-tightening mechanical lock maintains precision over years of operation with zero maintenance. Boeing, SpaceX, and other aerospace manufacturers choose AngleLock over T-slot for applications where vibration resistance and long-term reliability are essential.'
      },
      {
        question: 'Can aerospace fixtures be reconfigured for different satellite platforms or launch vehicle programs?',
        answer: 'Yes, this is a major advantage for aerospace programs. AngleLock structures can be fully disassembled and reconfigured without compromising structural integrity or precision. We have aerospace customers who have reconfigured the same satellite assembly fixture 8+ times over 3 years for different satellite platforms while maintaining micron-level accuracy. This saves millions compared to building new dedicated fixtures for each program. Reconfiguration takes hours instead of weeks required for welded steel fixtures.'
      },
      {
        question: 'What load capacities can AngleLock support for launch vehicle and heavy aerospace equipment?',
        answer: 'AngleLock supports aerospace loads from hundreds to tens of thousands of pounds. We have delivered structures supporting 20,000+ lb launch vehicle components, satellite integration platforms for multi-ton payloads, and rocket motor assembly fixtures with verified deflection under 0.010". Our engineering team provides FEA analysis validated to aerospace standards to ensure structural performance meets your specific loading requirements, safety factors, and vibration specifications.'
      },
      {
        question: 'Do you provide ITAR compliance and documentation for defense aerospace programs?',
        answer: 'Yes, Controlled Dynamics manufactures in the United States (Wisconsin) and provides full documentation and material traceability for defense programs requiring ITAR compliance. We work with defense contractors including Northrop Grumman, General Dynamics, Raytheon, and other DoD suppliers on ITAR-controlled aerospace projects. We can provide stamped engineering drawings from Professional Engineers, material certifications, and full compliance documentation required for aerospace and defense applications.'
      },
      {
        question: 'Can you design and fabricate large satellite integration platforms (12 feet x 20 feet or larger)?',
        answer: 'Yes, we specialize in large aerospace structures. We have designed and delivered satellite integration platforms up to 12\'×20\' and larger for major aerospace contractors. Our modular design allows shipping in sections and field assembly, making it practical to install very large structures in your facility. All structures include FEA validation ensuring structural performance across the entire platform. We can integrate vibration isolation, precision leveling systems, and cleanroom compatibility as required for satellite and spacecraft assembly applications.'
      },
      {
        question: 'What is typical lead time for aerospace fixtures and can you meet tight program schedules?',
        answer: 'Standard aerospace projects run 4-8 weeks from design approval to delivery. For urgent aerospace programs, we have delivered in 3 weeks. Complex satellite integration platforms or multi-axis systems may require 8-12 weeks. We understand aerospace program timelines and can expedite when needed. We work with Boeing, SpaceX, Lockheed Martin, and other aerospace companies to meet critical launch schedules and satellite integration timelines.'
      }
    ]
  },
  {
    category: 'Applications & Industries',
    icon: '🏭',
    faqs: [
      {
        question: 'What industries do you serve?',
        answer: 'We specialize in mission-critical applications across Aerospace & Defense, Semiconductor, Life Sciences (pharmaceutical/biotech), Robotics & Automation, and General Industrial manufacturing. Any application requiring precision, vibration resistance, cleanroom compatibility, or reconfigurability is a great fit for AngleLock technology. We\'ve built structures for Fortune 500 companies, research institutions, and job shops alike.'
      },
      {
        question: 'Can AngleLock be used in cleanroom environments?',
        answer: 'Yes, AngleLock is ideal for cleanrooms. The clear anodized 6105-T5 aluminum has non-particle-shedding properties suitable for ISO Class 1-8 cleanrooms. Unlike traditional systems with fabric covers or rubber seals, AngleLock structures have smooth surfaces with minimal crevices that are easy to clean and resist particle accumulation. We\'ve successfully deployed structures in semiconductor fabs, pharmaceutical manufacturing, and medical device assembly cleanrooms.'
      },
      {
        question: 'Do you build structures for outdoor or harsh environment use?',
        answer: 'AngleLock\'s anodized aluminum finish provides excellent corrosion resistance for many environments. For outdoor or chemically aggressive applications, we can specify protective coatings, stainless steel hardware, or sealed enclosures. We\'ve built structures for environments ranging from arctic research facilities to humid tropical manufacturing plants. Tell us about your environment and we\'ll engineer an appropriate solution.'
      },
      {
        question: 'Can you integrate with our existing equipment or automation?',
        answer: 'Absolutely. Most of our projects involve integrating with existing robots, CNC machines, conveyors, or custom equipment. We work from your equipment specifications, mounting patterns, and clearance requirements. Our engineers are experienced with interfacing to major robot brands (ABB, Fanuc, KUKA, Universal Robots, etc.), precision machinery, and custom automation. We can even design around your existing facility constraints and floor layouts.'
      }
    ]
  },
  {
    category: 'Technical Specifications',
    icon: '🔧',
    faqs: [
      {
        question: 'What materials are AngleLock structures made from?',
        answer: 'We use 6105-T5 aluminum extrusions with clear anodized finish as standard. Hardware includes high-strength steel brackets with zinc plating or black oxide finish, and Grade 8 or better fasteners. For specific applications, we can provide stainless steel hardware, special coatings, or material certifications. All materials are sourced from qualified suppliers with full traceability.'
      },
      {
        question: 'What kind of precision can you achieve?',
        answer: 'Machining tolerances are typically ±0.005" (0.127mm) for critical mounting surfaces and alignment features. Structural dimensions hold ±0.010" across the assembly. For ultra-precision applications, we can achieve ±0.002" on machined surfaces. We verify critical dimensions with CMM inspection and provide inspection reports when required. This level of precision is why AngleLock excels in robotics and precision equipment applications.'
      },
      {
        question: 'Do you provide engineering analysis and certification?',
        answer: 'Yes. Every custom structure includes FEA (Finite Element Analysis) validating stress, deflection, and safety factors under your specified loads. We provide detailed engineering calculations and can prepare stamped drawings from a PE (Professional Engineer) when required for permitting or compliance. We can also perform vibration analysis, modal analysis, and seismic calculations for specialized applications.'
      },
      {
        question: 'What kind of documentation do we receive?',
        answer: 'You receive: (1) Complete 3D CAD files in your preferred format, (2) Detailed assembly drawings with part numbers, (3) Bill of materials with all components listed, (4) FEA analysis results and engineering calculations, (5) Assembly instructions with torque specifications, and (6) Maintenance guidelines (though AngleLock requires essentially zero maintenance). All documentation is provided in digital format and we maintain archives for future reference.'
      }
    ]
  },
  {
    category: 'Getting Started',
    icon: '🚀',
    faqs: [
      {
        question: 'How do I request a quote for a custom structure?',
        answer: 'The easiest way is to contact us with a brief description of what you need: application, approximate size, load requirements, and any special constraints (cleanroom, vibration, etc.). Include sketches, photos of existing setups, or CAD files if you have them—but these aren\'t required. We\'ll schedule a consultation call to discuss your requirements and typically provide a preliminary quote within 3-5 business days.'
      },
      {
        question: 'What information do you need to provide a quote?',
        answer: 'Basic requirements include: (1) Application/purpose of the structure, (2) Approximate dimensions or work envelope, (3) Load capacity needed (weight of equipment, payload, etc.), (4) Any environmental considerations (cleanroom, vibration, chemicals, etc.), (5) Timeline requirements, and (6) Any integration requirements with existing equipment. Even rough information is enough to start—we\'ll help refine the details during the consultation.'
      },
      {
        question: 'Do you work with customers outside the United States?',
        answer: 'Yes, we ship internationally and have completed projects for customers in Canada, Mexico, Europe, and Asia. We can work with your freight forwarder or arrange international shipping. Engineering collaboration is handled via video calls and email. Export compliance documentation is provided when required. Lead times may be slightly longer for international projects due to shipping and customs.'
      },
      {
        question: 'Can I visit your facility or see examples of your work?',
        answer: 'We welcome facility visits by appointment. Seeing AngleLock connections in person and understanding the assembly process helps many customers appreciate the technology. We can show examples of completed structures and demonstrate the superior rigidity versus traditional T-slot systems. We also have case studies, photos, and technical documentation we can share during the consultation process. Contact us to schedule a visit.'
      }
    ]
  }
];

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border border-gray-200 rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-[#F4F6F8] transition-colors text-left"
      >
        <span className="font-['Barlow_Condensed'] text-lg font-semibold text-[#0A1628] pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#C9A227] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
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
        <div className="px-6 py-4 bg-[#F4F6F8] border-t border-gray-200">
          <p className="text-[#6B7C93] leading-relaxed">{faq.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQPage() {
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
                  <HelpCircle className="w-12 h-12 text-[#0A1628]" />
                </div>
              </div>
              <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Everything you need to know about AngleLock technology, our custom engineering
                process, pricing, and how we can help with your structural requirements.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* FAQ Categories */}
        {faqCategories.map((category, categoryIndex) => (
          <section
            key={category.category}
            className={categoryIndex % 2 === 0 ? 'py-20 bg-white' : 'py-20 bg-[#F4F6F8]'}
          >
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628]">
                    {category.category}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.faqs.map((faq, index) => (
                    <FAQItem key={index} faq={faq} index={index} />
                  ))}
                </div>
              </motion.div>
            </Container>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
                Still Have Questions?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Can't find the answer you're looking for? Our engineering team is here to help.
                Schedule a consultation to discuss your specific requirements and how AngleLock
                technology can solve your structural challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <Button size="lg">Schedule a Consultation</Button>
                </a>
                <a href="/contact">
                  <Button variant="ghost" size="lg">Contact Us</Button>
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
