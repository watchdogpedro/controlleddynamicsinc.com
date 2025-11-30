'use client';

import { motion } from 'framer-motion';
import { FileText, Video, Download, BookOpen, Wrench } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const resourceCategories = [
  {
    icon: Download,
    title: 'CAD Library',
    description: 'Download 3D CAD models, drawings, and technical specifications for all AngleLock components.',
    link: '/resources/cad-library'
  },
  {
    icon: FileText,
    title: 'Case Studies',
    description: 'Real-world applications and success stories from industries worldwide.',
    link: '/resources/case-studies'
  },
  {
    icon: BookOpen,
    title: 'Technical Documentation',
    description: 'Comprehensive guides, installation manuals, and engineering reference materials.',
    link: '/resources/documentation'
  },
  {
    icon: FileText,
    title: 'White Papers',
    description: 'In-depth technical analysis and research on structural engineering innovations.',
    link: '/resources/white-papers'
  },
  {
    icon: Video,
    title: 'Videos',
    description: 'Product demonstrations, assembly tutorials, and application showcases.',
    link: '/resources/videos'
  },
  {
    icon: Wrench,
    title: 'Design Tools',
    description: 'Online calculators, configurators, and engineering tools for your projects.',
    link: '/resources/design-tools'
  }
];

export default function ResourcesPage() {
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
                Engineering Resources
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Technical documentation, CAD files, case studies, and tools to help you design
                and implement AngleLock structural solutions.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Resources Grid */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.map((resource, idx) => (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Card hover className="p-8 h-full group cursor-pointer">
                    <div className="w-16 h-16 bg-[#0A1628] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#C9A227] transition-colors duration-300">
                      <resource.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3 group-hover:text-[#C9A227] transition-colors duration-300">
                      {resource.title}
                    </h2>
                    <p className="text-[#6B7C93] mb-4">
                      {resource.description}
                    </p>
                    <div className="text-[#C9A227] font-semibold text-sm">
                      Explore →
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#F4F6F8]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-6">
                Need Additional Support?
              </h2>
              <p className="text-lg text-[#6B7C93] mb-8">
                Our engineering team is available to provide technical assistance,
                custom design services, and project consultation.
              </p>
              <Button size="lg">Contact Engineering Support</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
