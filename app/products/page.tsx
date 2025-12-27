'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Briefcase, Calendar, Tag, Cpu, Activity, Bot, Zap, Layers } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { PORTFOLIO } from '@/lib/constants';
import StructuredData, { generatePortfolioSchema, generateBreadcrumbSchema } from '@/components/seo/StructuredData';

export default function ProductsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All');

  // Get unique industries for filter
  const industries = ['All', ...Array.from(new Set(PORTFOLIO.map(p => p.industry)))];

  // Filter projects
  const filteredProjects = selectedIndustry === 'All'
    ? PORTFOLIO
    : PORTFOLIO.filter(p => p.industry === selectedIndustry);

  // Industry-specific gradients
  const getGradient = (industry: string) => {
    const gradients: { [key: string]: string } = {
      'Semiconductor': 'from-blue-600 via-cyan-500 to-blue-700',
      'Life Sciences': 'from-emerald-600 via-teal-500 to-green-700',
      'Robotics & Automation': 'from-purple-600 via-fuchsia-500 to-purple-700',
      'General Industrial': 'from-orange-600 via-amber-500 to-orange-700'
    };
    return gradients[industry] || 'from-[#0A1628] to-[#1E3A5F]';
  };

  // Project-specific icons (matching technology/market)
  const getIcon = (projectId: string) => {
    const icons: { [key: string]: any } = {
      'wafer-inspection-platform': Cpu,           // Semiconductor chip
      'cartesian-xyz-stage': Activity,            // Motion/precision for medical
      'mobile-robotics-platform': Bot,            // Robot
      'linear-motor-gantry': Zap,                 // High-speed motion
      '8-axis-inspection-platform': Layers        // Multi-axis layers
    };
    return icons[projectId] || Briefcase;
  };

  // Generate schemas
  const portfolioSchema = generatePortfolioSchema(
    PORTFOLIO.map(p => ({
      id: p.id,
      title: p.title,
      industry: p.industry,
      description: p.description,
      year: p.year
    }))
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://controlleddynamicsinc.com' },
    { name: 'Projects', url: 'https://controlleddynamicsinc.com/products' }
  ]);

  return (
    <>
      <StructuredData data={portfolioSchema} />
      <StructuredData data={breadcrumbSchema} />
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
                  <Briefcase className="w-12 h-12 text-[#0A1628]" />
                </div>
              </div>
              <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                Project Portfolio
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Custom-engineered precision motion platforms for mission-critical applications.
                Each project represents a unique solution built with AngleLock technology.
              </p>
              <p className="text-sm text-white/60 italic">
                Client names and sensitive details omitted to respect confidentiality
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Industry Filter */}
        <section className="py-8 bg-[#F4F6F8] border-b border-gray-200">
          <Container>
            <div className="flex flex-wrap gap-3 justify-center">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedIndustry === industry
                      ? 'bg-[#C9A227] text-[#0A1628]'
                      : 'bg-white text-[#6B7C93] hover:bg-gray-100'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Card hover className="h-full flex flex-col">
                    {/* Image Placeholder with Custom Gradient */}
                    <div className={`aspect-video bg-gradient-to-br ${getGradient(project.industry)} rounded-t-xl flex items-center justify-center relative overflow-hidden group`}>
                      {/* Grid Pattern Overlay */}
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `
                            linear-gradient(to right, white 1px, transparent 1px),
                            linear-gradient(to bottom, white 1px, transparent 1px)
                          `,
                          backgroundSize: '30px 30px'
                        }}
                      />
                      {/* Diagonal Accent Lines */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent" />
                      </div>
                      {/* Icon */}
                      {(() => {
                        const IconComponent = getIcon(project.id);
                        return <IconComponent className="w-20 h-20 text-white opacity-80 relative z-10 group-hover:scale-110 transition-transform duration-300" />;
                      })()}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Industry & Year Tags */}
                      <div className="flex gap-2 mb-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#C9A227]/10 text-[#C9A227] rounded-full text-xs font-semibold">
                          <Tag className="w-3 h-3" />
                          {project.industry}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#0A1628]/10 text-[#0A1628] rounded-full text-xs font-semibold">
                          <Calendar className="w-3 h-3" />
                          {project.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#6B7C93] text-sm mb-4 flex-grow">
                        {project.description}
                      </p>

                      {/* Key Specs */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-[#0A1628] text-sm mb-2">Key Specifications:</h4>
                        <ul className="space-y-1">
                          {project.keySpecs.slice(0, 3).map((spec, i) => (
                            <li key={i} className="text-xs text-[#6B7C93] flex items-start">
                              <span className="text-[#C9A227] mr-2">•</span>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* View Details Link */}
                      <button className="text-[#C9A227] font-semibold text-sm hover:underline text-left">
                        View Full Details →
                      </button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* No Results Message */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#6B7C93] text-lg">
                  No projects found for this industry filter.
                </p>
              </div>
            )}
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Start Your Custom Project?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Our engineering team specializes in designing custom high-precision motion platforms
                tailored to your exact requirements. Every structure is 100% custom-engineered using AngleLock technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Schedule a Consultation</Button>
                <Button variant="ghost" size="lg">View Our Process</Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
