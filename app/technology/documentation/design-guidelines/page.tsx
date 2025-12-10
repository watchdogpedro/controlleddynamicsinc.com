import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Lightbulb, CheckCircle2, AlertCircle, Zap, Target, TrendingUp } from 'lucide-react';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Design Guidelines | Technical Documentation | Controlled Dynamics Inc.',
  description: 'Best practices and recommendations for designing optimal structural solutions using AngleLock technology.',
  keywords: 'AngleLock design guide, structural design, best practices, design recommendations, optimization',
};

export default function DesignGuidelinesPage() {
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
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <Lightbulb className="w-8 h-8 text-orange-400" />
                </div>
                <h1 className="text-5xl font-bold">Design Guidelines</h1>
              </div>
              <p className="text-xl text-white/80">
                Best practices and recommendations for designing optimal structural solutions using AngleLock technology.
              </p>
            </div>
          </Container>
        </section>

        {/* Design Philosophy */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8">Design Philosophy</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-200">
                  <Target className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-bold text-blue-900 mb-2">Purpose-Driven</h3>
                  <p className="text-blue-800 text-sm">
                    Design for your actual requirements, not hypothetical future needs. Start simple and expand as needed.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg border border-green-200">
                  <Zap className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="font-bold text-green-900 mb-2">Modular Thinking</h3>
                  <p className="text-green-800 text-sm">
                    Leverage modularity. Design in subassemblies that can be built, tested, and modified independently.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-200">
                  <TrendingUp className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="font-bold text-purple-900 mb-2">Performance First</h3>
                  <p className="text-purple-800 text-sm">
                    Prioritize structural performance. Rigidity and precision are easier to maintain than to add later.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Structural Design Principles */}
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8">Structural Design Principles</h2>

              <div className="space-y-8">
                {/* Principle 1 */}
                <div className="bg-white p-8 rounded-lg border-l-4 border-[#C9A227] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Minimize Unsupported Spans</h3>
                      <p className="text-slate-700 mb-4">
                        Deflection increases exponentially with span length. Adding intermediate supports dramatically improves stiffness with minimal material.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <span className="font-semibold text-green-900">Good Practice</span>
                          </div>
                          <p className="text-sm text-green-800">
                            48" shelf with center support: 4x stiffer than single 48" span
                          </p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertCircle className="w-5 h-5 text-red-600" />
                            <span className="font-semibold text-red-900">Avoid</span>
                          </div>
                          <p className="text-sm text-red-800">
                            Using larger extrusions to span gaps that could be supported
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Principle 2 */}
                <div className="bg-white p-8 rounded-lg border-l-4 border-[#C9A227] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Optimize Extrusion Orientation</h3>
                      <p className="text-slate-700 mb-4">
                        Position extrusions with the strong axis perpendicular to the primary load. Rectangular profiles have different stiffness in each direction.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <span className="font-semibold text-green-900">Good Practice</span>
                          </div>
                          <p className="text-sm text-green-800">
                            40x80mm extrusion with 80mm dimension vertical for shelving
                          </p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertCircle className="w-5 h-5 text-red-600" />
                            <span className="font-semibold text-red-900">Avoid</span>
                          </div>
                          <p className="text-sm text-red-800">
                            Using the weak axis for primary loading direction
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Principle 3 */}
                <div className="bg-white p-8 rounded-lg border-l-4 border-[#C9A227] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Create Triangulated Structures</h3>
                      <p className="text-slate-700 mb-4">
                        Triangulation prevents racking and distributes loads efficiently. Add diagonal bracing for tall or wide structures.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <span className="font-semibold text-green-900">Good Practice</span>
                          </div>
                          <p className="text-sm text-green-800">
                            Add diagonal braces to tall structures {'>'} 6 feet in any dimension
                          </p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertCircle className="w-5 h-5 text-red-600" />
                            <span className="font-semibold text-red-900">Avoid</span>
                          </div>
                          <p className="text-sm text-red-800">
                            Relying only on corner connections for lateral stability
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Principle 4 */}
                <div className="bg-white p-8 rounded-lg border-l-4 border-[#C9A227] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Distribute Loads Evenly</h3>
                      <p className="text-slate-700 mb-4">
                        Design load paths to distribute forces across multiple structural members. Avoid concentrating loads at single points.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <span className="font-semibold text-green-900">Good Practice</span>
                          </div>
                          <p className="text-sm text-green-800">
                            Use spreader plates under heavy equipment to distribute loads
                          </p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertCircle className="w-5 h-5 text-red-600" />
                            <span className="font-semibold text-red-900">Avoid</span>
                          </div>
                          <p className="text-sm text-red-800">
                            Mounting heavy equipment at a single extrusion location
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Principle 5 */}
                <div className="bg-white p-8 rounded-lg border-l-4 border-[#C9A227] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Plan for Leveling and Alignment</h3>
                      <p className="text-slate-700 mb-4">
                        Include leveling feet or adjustment mechanisms from the start. It's much easier than shimming later.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                            <span className="font-semibold text-green-900">Good Practice</span>
                          </div>
                          <p className="text-sm text-green-800">
                            Use adjustable leveling feet at all base corners (minimum 4 points)
                          </p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertCircle className="w-5 h-5 text-red-600" />
                            <span className="font-semibold text-red-900">Avoid</span>
                          </div>
                          <p className="text-sm text-red-800">
                            Assuming floor is perfectly level (it never is)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Application-Specific Guidelines */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8">Application-Specific Guidelines</h2>

              <div className="space-y-6">
                {/* Machine Bases */}
                <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-4">Machine Bases & Equipment Supports</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900">Size for 150% of equipment weight</span>
                        <p className="text-slate-600 text-sm">Account for dynamic loads and future additions</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900">Consider vibration isolation</span>
                        <p className="text-slate-600 text-sm">Add vibration pads or isolation mounts for rotating equipment</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900">Provide access for maintenance</span>
                        <p className="text-slate-600 text-sm">Leave clearance around equipment for service and inspection</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900">Include cable/hose routing</span>
                        <p className="text-slate-600 text-sm">Plan internal channels for power, air, and coolant lines</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Workstations */}
                <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-4">Workstations & Work Platforms</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900">Design for ergonomics</span>
                        <p className="text-slate-600 text-sm">Work surface height: 28-42" adjustable or 36" fixed for standing work</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900">Size work surface appropriately</span>
                        <p className="text-slate-600 text-sm">Minimum 24" depth x 48" width for general assembly work</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900">Plan for accessories</span>
                        <p className="text-slate-600 text-sm">Include provisions for lighting, monitors, tool storage, power strips</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900">Allow for future expansion</span>
                        <p className="text-slate-600 text-sm">Design base structure larger than immediate needs for adding shelves, overhead structures</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Enclosures */}
                <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-4">Safety Enclosures & Guarding</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900">Meet safety standards</span>
                        <p className="text-slate-600 text-sm">Consult OSHA 1910.212 and ANSI B11 standards for guard height and mesh size</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900">Maximize visibility</span>
                        <p className="text-slate-600 text-sm">Use polycarbonate or wire mesh panels to allow process monitoring</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900">Design for access</span>
                        <p className="text-slate-600 text-sm">Include doors or removable panels large enough for equipment service</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A227] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900">Consider sound attenuation</span>
                        <p className="text-slate-600 text-sm">Add sound-dampening panels for noisy equipment</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Optimization Tips */}
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8">Design Optimization Tips</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <h3 className="font-bold text-[#0A1628] mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[#C9A227]" />
                    Material Efficiency
                  </h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Use standard extrusion lengths (8', 10', 12', 16', 20') to minimize waste</li>
                    <li>• Design dimensions in multiples of extrusion lengths when possible</li>
                    <li>• Consider using smaller profiles with closer spacing vs. larger profiles with longer spans</li>
                    <li>• Reuse cut-offs from longer pieces for shorter structural elements</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <h3 className="font-bold text-[#0A1628] mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#C9A227]" />
                    Assembly Efficiency
                  </h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Design structures that can be assembled horizontally then stood up</li>
                    <li>• Use symmetry to reduce the number of unique components</li>
                    <li>• Minimize bracket types - standardize connections where possible</li>
                    <li>• Plan assembly sequence - avoid creating inaccessible connections</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <h3 className="font-bold text-[#0A1628] mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-[#C9A227]" />
                    Performance Optimization
                  </h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Add cross-bracing before increasing extrusion sizes</li>
                    <li>• Use gussets at corners for heavy-load applications</li>
                    <li>• Consider composite beam sections (multiple extrusions joined)</li>
                    <li>• Verify deflection limits for precision applications (L/360 typical)</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border border-slate-200">
                  <h3 className="font-bold text-[#0A1628] mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-[#C9A227]" />
                    Future-Proofing
                  </h3>
                  <ul className="space-y-2 text-slate-700 text-sm">
                    <li>• Design base structure oversized to allow for additions</li>
                    <li>• Include mounting slots for future accessories</li>
                    <li>• Document as-built dimensions for future modifications</li>
                    <li>• Keep spare brackets and fasteners for field changes</li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Common Mistakes */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8">Common Design Mistakes</h2>

              <div className="space-y-4">
                {[
                  {
                    mistake: 'Under-sizing for deflection',
                    consequence: 'Structure may be strong enough but deflects excessively under load',
                    solution: 'Check deflection calculations, not just load capacity. Add supports or use larger extrusions.'
                  },
                  {
                    mistake: 'Ignoring lateral loads',
                    consequence: 'Structure racks or tips under side loads or impacts',
                    solution: 'Add diagonal bracing or design base wider than top to lower center of gravity.'
                  },
                  {
                    mistake: 'Poor weight distribution',
                    consequence: 'Uneven loading causes twisting and premature failure',
                    solution: 'Position heavy equipment over load-bearing members, not spanning between them.'
                  },
                  {
                    mistake: 'Inadequate leveling provisions',
                    consequence: 'Structure rocks or requires extensive shimming during installation',
                    solution: 'Include adjustable feet at minimum 4 corners, more for larger structures.'
                  },
                  {
                    mistake: 'No access for maintenance',
                    consequence: 'Equipment servicing requires partial disassembly of structure',
                    solution: 'Plan removable panels or doors in high-access areas during design phase.'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-slate-50 p-6 rounded-lg border-l-4 border-red-500">
                    <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      {item.mistake}
                    </h3>
                    <p className="text-slate-700 text-sm mb-2">
                      <span className="font-semibold">Consequence:</span> {item.consequence}
                    </p>
                    <p className="text-green-800 text-sm">
                      <span className="font-semibold">Solution:</span> {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Design Assistance?</h2>
              <p className="text-lg text-white/80 mb-8">
                Our engineering team can review your designs, provide recommendations, and help optimize your structure for performance and cost.
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-[#C9A227] hover:bg-[#E5B83C] text-[#0A1628] font-bold rounded-lg transition-colors">
                  Request Design Review
                </button>
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
