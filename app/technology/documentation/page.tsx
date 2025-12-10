import type { Metadata } from 'next';
import Link from 'next/link';
import { Book, Download, BarChart3, Lightbulb, ArrowRight, FileText, Wrench, Database, PenTool } from 'lucide-react';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Technical Documentation | Controlled Dynamics Inc.',
  description: 'Comprehensive technical documentation for AngleLock structural systems including installation guides, CAD resources, engineering data, and design guidelines.',
  keywords: 'AngleLock documentation, installation guide, CAD files, engineering data, design guidelines, structural framing technical specs',
};

const documentationSections = [
  {
    id: 'installation-guide',
    title: 'Installation Guide',
    icon: Wrench,
    description: 'Step-by-step assembly instructions, best practices, and troubleshooting tips for installing AngleLock structures.',
    features: [
      'Assembly procedures and techniques',
      'Torque specifications and guidelines',
      'Common installation mistakes to avoid',
      'Tools and equipment requirements'
    ],
    color: 'blue'
  },
  {
    id: 'cad-resources',
    title: 'CAD Resources',
    icon: PenTool,
    description: 'Downloadable 3D models, technical drawings, and design files for integrating AngleLock into your projects.',
    features: [
      '3D CAD models (STEP, IGES, Solidworks)',
      'Technical drawings and specifications',
      'Component library for design software',
      'Assembly examples and templates'
    ],
    color: 'green'
  },
  {
    id: 'engineering-data',
    title: 'Engineering Data',
    icon: Database,
    description: 'Load tables, deflection charts, material properties, and performance data for structural analysis and design.',
    features: [
      'Load capacity tables and charts',
      'Deflection calculations and formulas',
      'Material properties and certifications',
      'FEA modeling guidelines'
    ],
    color: 'purple'
  },
  {
    id: 'design-guidelines',
    title: 'Design Guidelines',
    icon: Lightbulb,
    description: 'Best practices and recommendations for designing optimal structural solutions using AngleLock technology.',
    features: [
      'Design principles and methodology',
      'Configuration recommendations',
      'Application-specific guidelines',
      'Performance optimization tips'
    ],
    color: 'orange'
  }
];

const colorClasses: Record<string, { bg: string; text: string; border: string; hover: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', hover: 'hover:border-blue-400' },
  green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', hover: 'hover:border-green-400' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', hover: 'hover:border-purple-400' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', hover: 'hover:border-orange-400' }
};

export default function TechnicalDocumentationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628]">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227]/20 border border-[#C9A227] rounded-full text-[#C9A227] font-semibold text-sm mb-6">
                <FileText className="w-4 h-4" />
                Technical Resources
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Technical Documentation
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Everything you need to design, specify, and install AngleLock structural systems. Comprehensive guides, engineering data, and CAD resources for engineers and designers.
              </p>
            </div>
          </Container>
        </section>

        {/* Documentation Sections Grid */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-8">
              {documentationSections.map((section) => {
                const Icon = section.icon;
                const colors = colorClasses[section.color];

                return (
                  <div
                    key={section.id}
                    className={`group border-2 ${colors.border} ${colors.hover} rounded-2xl p-8 transition-all duration-300 hover:shadow-xl`}
                  >
                    <div className={`inline-flex p-4 ${colors.bg} rounded-xl mb-6`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>

                    <h2 className="text-2xl font-bold text-[#0A1628] mb-4">
                      {section.title}
                    </h2>

                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {section.description}
                    </p>

                    <ul className="space-y-2 mb-8">
                      {section.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ArrowRight className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link href={`/technology/documentation/${section.id}`}>
                      <Button variant="secondary" className="w-full group-hover:bg-[#0A1628] group-hover:text-white group-hover:border-[#0A1628]">
                        View Documentation
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Quick Reference Section */}
        <section className="py-20 bg-slate-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8 text-center">
                Quick Reference
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <Book className="w-8 h-8 text-[#C9A227] mb-4" />
                  <h3 className="font-bold text-[#0A1628] mb-2">Getting Started</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    New to AngleLock? Start with our installation guide and design guidelines.
                  </p>
                  <Link href="/technology/documentation/installation-guide" className="text-[#C9A227] hover:text-[#E5B83C] text-sm font-semibold flex items-center gap-1">
                    Installation Guide
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <Download className="w-8 h-8 text-[#C9A227] mb-4" />
                  <h3 className="font-bold text-[#0A1628] mb-2">CAD Models</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Download 3D models and drawings for your design software.
                  </p>
                  <Link href="/technology/documentation/cad-resources" className="text-[#C9A227] hover:text-[#E5B83C] text-sm font-semibold flex items-center gap-1">
                    CAD Resources
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <BarChart3 className="w-8 h-8 text-[#C9A227] mb-4" />
                  <h3 className="font-bold text-[#0A1628] mb-2">Engineering Data</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Load tables, material specs, and performance data for analysis.
                  </p>
                  <Link href="/technology/documentation/engineering-data" className="text-[#C9A227] hover:text-[#E5B83C] text-sm font-semibold flex items-center gap-1">
                    Engineering Data
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Additional Resources */}
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8 text-center">
                Additional Technical Resources
              </h2>

              <div className="space-y-4">
                <Link href="/technology/specifications" className="block p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#C9A227] hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-[#0A1628] mb-1">Technical Specifications</h3>
                      <p className="text-slate-600 text-sm">Detailed specifications and performance characteristics</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#C9A227]" />
                  </div>
                </Link>

                <Link href="/compare/t-slot" className="block p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#C9A227] hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-[#0A1628] mb-1">AngleLock vs. T-Slot Comparison</h3>
                      <p className="text-slate-600 text-sm">Technical comparison with traditional T-slot systems</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#C9A227]" />
                  </div>
                </Link>

                <Link href="/resources/case-studies" className="block p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#C9A227] hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-[#0A1628] mb-1">Case Studies</h3>
                      <p className="text-slate-600 text-sm">Real-world examples and application stories</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#C9A227]" />
                  </div>
                </Link>

                <Link href="/resources/videos" className="block p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#C9A227] hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-[#0A1628] mb-1">Video Library</h3>
                      <p className="text-slate-600 text-sm">Installation tutorials and product demonstrations</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#C9A227]" />
                  </div>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Need Custom Engineering Support?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Our engineering team is available to help with design reviews, FEA analysis, and custom solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">Contact Engineering</Button>
                </Link>
                <Link href="/solutions/custom-engineering">
                  <Button size="lg" variant="secondary">
                    Learn About Custom Solutions
                  </Button>
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
