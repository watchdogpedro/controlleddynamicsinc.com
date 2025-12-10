import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, PenTool, Download, FileText, Box, Layers } from 'lucide-react';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'CAD Resources | Technical Documentation | Controlled Dynamics Inc.',
  description: 'Download 3D CAD models, technical drawings, and design files for AngleLock structural systems in STEP, IGES, and Solidworks formats.',
  keywords: 'AngleLock CAD, 3D models, STEP files, IGES, Solidworks, technical drawings, CAD library',
};

export default function CADResourcesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        {/* Hero */}
        <section className="relative py-16 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628]">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <Container className="relative z-10">
            <Link
              href="/technology/documentation"
              className="inline-flex items-center gap-2 text-[#C9A227] hover:text-[#E5B83C] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Documentation
            </Link>

            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <PenTool className="w-8 h-8 text-green-400" />
                </div>
                <h1 className="text-5xl font-bold">CAD Resources</h1>
              </div>
              <p className="text-xl text-white/80">
                Downloadable 3D models, technical drawings, and design files for integrating AngleLock into your projects.
              </p>
            </div>
          </Container>
        </section>

        {/* File Formats */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8">Available File Formats</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <Box className="w-8 h-8 text-[#C9A227] mb-4" />
                  <h3 className="font-bold text-[#0A1628] mb-2">STEP (.stp)</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Universal 3D format compatible with all major CAD systems
                  </p>
                  <div className="text-xs text-slate-500">
                    AutoCAD, Fusion 360, Inventor, CATIA, NX, Creo
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <Layers className="w-8 h-8 text-[#C9A227] mb-4" />
                  <h3 className="font-bold text-[#0A1628] mb-2">IGES (.igs)</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Legacy format for older CAD software versions
                  </p>
                  <div className="text-xs text-slate-500">
                    Pro/E, older versions of Solidworks, CADKEY
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <FileText className="w-8 h-8 text-[#C9A227] mb-4" />
                  <h3 className="font-bold text-[#0A1628] mb-2">Solidworks (.sldprt)</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Native Solidworks parts and assemblies
                  </p>
                  <div className="text-xs text-slate-500">
                    Solidworks 2020 and newer
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Need a Different Format?
                </h3>
                <p className="text-blue-800 text-sm">
                  We can provide CAD models in additional formats including Parasolid, SAT, DWG, and more.
                  <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold ml-1 underline">
                    Contact our engineering team
                  </Link> with your specific requirements.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Extrusion Profiles */}
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-4">Extrusion Profiles</h2>
              <p className="text-slate-600 mb-8">
                Complete library of AngleLock extrusion profiles in all available sizes.
              </p>

              <div className="space-y-4">
                {[
                  { name: '40mm x 40mm AngleLock Profile', size: '1.2 MB', formats: 'STEP, IGES, SLDPRT' },
                  { name: '40mm x 80mm AngleLock Profile', size: '1.4 MB', formats: 'STEP, IGES, SLDPRT' },
                  { name: '80mm x 80mm AngleLock Profile', size: '1.8 MB', formats: 'STEP, IGES, SLDPRT' },
                  { name: '40mm x 120mm AngleLock Profile', size: '1.6 MB', formats: 'STEP, IGES, SLDPRT' },
                  { name: '80mm x 120mm AngleLock Profile', size: '2.1 MB', formats: 'STEP, IGES, SLDPRT' },
                  { name: '120mm x 120mm AngleLock Profile', size: '2.4 MB', formats: 'STEP, IGES, SLDPRT' }
                ].map((file, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-slate-200 flex items-center justify-between hover:border-[#C9A227] transition-all">
                    <div>
                      <h3 className="font-semibold text-[#0A1628] mb-1">{file.name}</h3>
                      <div className="text-sm text-slate-600">
                        {file.formats} • {file.size}
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button variant="secondary" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Request Download
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Brackets & Connectors */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-4">Brackets & Connectors</h2>
              <p className="text-slate-600 mb-8">
                AngleLock corner brackets and connection hardware in all configurations.
              </p>

              <div className="space-y-4">
                {[
                  { name: '90° Inside Corner Bracket', size: '0.8 MB', formats: 'STEP, IGES, SLDPRT' },
                  { name: '90° Outside Corner Bracket', size: '0.8 MB', formats: 'STEP, IGES, SLDPRT' },
                  { name: '45° Angle Bracket', size: '0.7 MB', formats: 'STEP, IGES, SLDPRT' },
                  { name: 'T-Bracket (3-way connector)', size: '0.9 MB', formats: 'STEP, IGES, SLDPRT' },
                  { name: 'Cross Bracket (4-way connector)', size: '1.1 MB', formats: 'STEP, IGES, SLDPRT' },
                  { name: 'Heavy-Duty Reinforced Bracket', size: '1.3 MB', formats: 'STEP, IGES, SLDPRT' }
                ].map((file, index) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-lg border border-slate-200 flex items-center justify-between hover:border-[#C9A227] transition-all">
                    <div>
                      <h3 className="font-semibold text-[#0A1628] mb-1">{file.name}</h3>
                      <div className="text-sm text-slate-600">
                        {file.formats} • {file.size}
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button variant="secondary" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Request Download
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Assembly Examples */}
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-4">Assembly Examples</h2>
              <p className="text-slate-600 mb-8">
                Complete assembly models demonstrating common configurations and applications.
              </p>

              <div className="space-y-4">
                {[
                  { name: 'Basic Workbench Frame', desc: 'Simple workstation structure', size: '3.2 MB' },
                  { name: 'Machine Base with Leveling Feet', desc: 'Equipment support base', size: '4.1 MB' },
                  { name: 'Robot Cell Enclosure', desc: 'Safety guarding structure', size: '5.8 MB' },
                  { name: 'Multi-Level Platform', desc: 'Elevated work platform', size: '6.4 MB' },
                  { name: 'Precision Equipment Frame', desc: 'Vibration-isolated structure', size: '4.6 MB' }
                ].map((file, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-slate-200 hover:border-[#C9A227] transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-[#0A1628]">{file.name}</h3>
                      <Link href="/contact">
                        <Button variant="secondary" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Request Download
                        </Button>
                      </Link>
                    </div>
                    <div className="text-sm text-slate-600">
                      {file.desc} • STEP, IGES, SLDPRT • {file.size}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* 2D Drawings */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-4">2D Technical Drawings</h2>
              <p className="text-slate-600 mb-8">
                Detailed dimensioned drawings in PDF and DXF formats.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { name: 'Extrusion Profile Drawings', format: 'PDF, DXF' },
                  { name: 'Bracket Detail Drawings', format: 'PDF, DXF' },
                  { name: 'Connection Details', format: 'PDF' },
                  { name: 'Fastener Specifications', format: 'PDF' }
                ].map((file, index) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-[#C9A227] transition-all">
                    <h3 className="font-semibold text-[#0A1628] mb-2">{file.name}</h3>
                    <div className="text-sm text-slate-600 mb-4">{file.format}</div>
                    <Link href="/contact">
                      <Button variant="secondary" size="sm" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Request Download
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Usage Guidelines */}
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8">CAD Library Usage Guidelines</h2>

              <div className="bg-white p-8 rounded-lg border border-slate-200 space-y-6">
                <div>
                  <h3 className="font-bold text-[#0A1628] mb-3">Model Accuracy</h3>
                  <p className="text-slate-700">
                    All CAD models are dimensionally accurate and represent the actual manufactured components.
                    Models include critical features needed for assembly design and interference checking.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A1628] mb-3">Simplified vs. Detailed Models</h3>
                  <p className="text-slate-700">
                    Standard downloads include simplified models optimized for performance in large assemblies.
                    Detailed models with all features (threads, small radii, etc.) are available upon request for
                    manufacturing or detailed analysis.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A1628] mb-3">Material Properties</h3>
                  <p className="text-slate-700">
                    CAD files include material assignments (6105-T5 Aluminum) and density for accurate mass properties.
                    Consult our Engineering Data section for complete material specifications.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#0A1628] mb-3">License & Usage Rights</h3>
                  <p className="text-slate-700">
                    CAD models are provided for design and integration purposes. You may use these files in your projects
                    and share them with your manufacturing partners. Models may not be redistributed publicly or used to
                    manufacture competing products.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Custom CAD Models?</h2>
              <p className="text-lg text-white/80 mb-8">
                Our engineering team can create custom CAD models for your specific application or provide models
                in additional formats not listed here.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Contact Engineering Team
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
