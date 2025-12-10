import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Wrench, AlertTriangle, CheckCircle2, Hammer, Settings, Book } from 'lucide-react';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Installation Guide | Technical Documentation | Controlled Dynamics Inc.',
  description: 'Complete installation guide for AngleLock structural systems including assembly procedures, torque specifications, and best practices.',
  keywords: 'AngleLock installation, assembly guide, installation procedures, torque specifications, structural framing assembly',
};

export default function InstallationGuidePage() {
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
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Wrench className="w-8 h-8 text-blue-400" />
                </div>
                <h1 className="text-5xl font-bold">Installation Guide</h1>
              </div>
              <p className="text-xl text-white/80">
                Complete assembly procedures, best practices, and troubleshooting for AngleLock structural systems.
              </p>
            </div>
          </Container>
        </section>

        {/* Required Tools */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Hammer className="w-6 h-6 text-[#C9A227]" />
                <h2 className="text-3xl font-bold text-[#0A1628]">Required Tools & Equipment</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="font-bold text-[#0A1628] mb-4">Essential Tools</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Torque wrench (5-50 ft-lbs range)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Allen key set (metric)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Spirit level (24" or longer)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Tape measure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Rubber mallet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Square (for alignment verification)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="font-bold text-[#0A1628] mb-4">Recommended Tools</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Digital level/inclinometer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Electric drill with hex bit adapter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Assembly stand or workbench</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Dial indicator (for precision applications)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">Lifting equipment (for large structures)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Assembly Procedures */}
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Settings className="w-6 h-6 text-[#C9A227]" />
                <h2 className="text-3xl font-bold text-[#0A1628]">Assembly Procedures</h2>
              </div>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="bg-white p-8 rounded-lg border-l-4 border-[#C9A227] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Preparation & Layout</h3>
                      <p className="text-slate-700 mb-4">
                        Begin by organizing all components and verifying the parts list. Lay out extrusions according to your assembly drawing.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Check all components against the bill of materials</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Ensure work area is clean and level</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Remove any protective film or packaging from extrusions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Review assembly drawings and identify critical dimensions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-8 rounded-lg border-l-4 border-[#C9A227] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Insert AngleLock Connectors</h3>
                      <p className="text-slate-700 mb-4">
                        Insert AngleLock brackets into extrusion slots at connection points. Ensure brackets are fully seated before assembly.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Slide bracket into extrusion slot at the designated position</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Verify bracket orientation matches assembly drawing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Leave fasteners loose for adjustment during assembly</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Do NOT fully tighten until structure is squared</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-8 rounded-lg border-l-4 border-[#C9A227] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Join Extrusions</h3>
                      <p className="text-slate-700 mb-4">
                        Connect extrusions using the AngleLock brackets. The mechanical lock engages as fasteners are tightened.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Align extrusions at the correct angle (typically 90°)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Insert bracket tabs into receiving extrusion slots</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Hand-tighten all fasteners first (finger-tight plus 1 turn)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Check alignment before proceeding to next connection</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-white p-8 rounded-lg border-l-4 border-[#C9A227] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Square & Align Structure</h3>
                      <p className="text-slate-700 mb-4">
                        With all connections hand-tight, verify the structure is square and dimensions are correct.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Measure diagonals - they should be equal for square frames</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Use a square to verify 90° corners</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Check overall dimensions against drawings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Make adjustments by loosening connections as needed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-white p-8 rounded-lg border-l-4 border-[#C9A227] shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#C9A227] rounded-full flex items-center justify-center text-white font-bold text-xl">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0A1628] mb-3">Final Torque Application</h3>
                      <p className="text-slate-700 mb-4">
                        Once alignment is verified, torque all fasteners to specification following the proper sequence.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Apply final torque in a star pattern (tighten opposite corners)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Standard torque: 25-30 ft-lbs for most applications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Heavy-duty applications: 35-40 ft-lbs (consult engineering)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C9A227]">•</span>
                          <span className="text-slate-700">Re-check alignment after initial torquing of first few joints</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Common Mistakes */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h2 className="text-3xl font-bold text-[#0A1628]">Common Mistakes to Avoid</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                    <span className="text-2xl">❌</span> Over-tightening Before Alignment
                  </h3>
                  <p className="text-red-800 text-sm mb-2">
                    Fully tightening connections before squaring the structure makes adjustments difficult.
                  </p>
                  <p className="text-red-700 text-sm font-semibold">
                    ✓ Solution: Hand-tighten all joints, verify alignment, then apply final torque.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                    <span className="text-2xl">❌</span> Incorrect Bracket Orientation
                  </h3>
                  <p className="text-red-800 text-sm mb-2">
                    Installing brackets upside-down or reversed prevents proper mechanical locking.
                  </p>
                  <p className="text-red-700 text-sm font-semibold">
                    ✓ Solution: Match bracket orientation to assembly drawing before insertion.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                    <span className="text-2xl">❌</span> Insufficient Torque
                  </h3>
                  <p className="text-red-800 text-sm mb-2">
                    Under-torquing fasteners prevents the AngleLock mechanism from engaging fully.
                  </p>
                  <p className="text-red-700 text-sm font-semibold">
                    ✓ Solution: Always use a calibrated torque wrench set to specification.
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                    <span className="text-2xl">❌</span> Skipping Alignment Verification
                  </h3>
                  <p className="text-red-800 text-sm mb-2">
                    Failing to check squareness results in twisted structures and poor performance.
                  </p>
                  <p className="text-red-700 text-sm font-semibold">
                    ✓ Solution: Always measure diagonals and verify 90° corners before final torque.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Torque Specifications */}
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8">Torque Specifications</h2>

              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-[#0A1628] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Application</th>
                      <th className="px-6 py-4 text-left">Fastener Size</th>
                      <th className="px-6 py-4 text-left">Torque Spec</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 text-slate-700">Standard Connections</td>
                      <td className="px-6 py-4 text-slate-700">M8 Socket Head Cap Screw</td>
                      <td className="px-6 py-4 font-semibold text-[#0A1628]">25-30 ft-lbs</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 text-slate-700">Heavy-Duty Connections</td>
                      <td className="px-6 py-4 text-slate-700">M10 Socket Head Cap Screw</td>
                      <td className="px-6 py-4 font-semibold text-[#0A1628]">35-40 ft-lbs</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-700">Panel Mounting</td>
                      <td className="px-6 py-4 text-slate-700">M6 Socket Head Cap Screw</td>
                      <td className="px-6 py-4 font-semibold text-[#0A1628]">15-18 ft-lbs</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 text-slate-700">Leveling Feet</td>
                      <td className="px-6 py-4 text-slate-700">M12 Threaded Foot</td>
                      <td className="px-6 py-4 font-semibold text-[#0A1628]">Hand-tight + lock nut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex gap-3">
                  <Book className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">Important Notes</h3>
                    <ul className="space-y-1 text-blue-800 text-sm">
                      <li>• Always use a calibrated torque wrench</li>
                      <li>• Apply thread-locking compound for vibration-prone applications</li>
                      <li>• Re-torque after 24 hours for critical structures</li>
                      <li>• Consult engineering for applications outside standard specifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8">Need More Help?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/resources/videos" className="block p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#C9A227] hover:shadow-md transition-all">
                  <h3 className="font-bold text-[#0A1628] mb-2">Video Tutorials</h3>
                  <p className="text-slate-600 text-sm">Watch step-by-step installation demonstrations</p>
                </Link>

                <Link href="/technology/documentation" className="block p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#C9A227] hover:shadow-md transition-all">
                  <h3 className="font-bold text-[#0A1628] mb-2">All Documentation</h3>
                  <p className="text-slate-600 text-sm">Browse complete technical documentation</p>
                </Link>

                <Link href="/contact" className="block p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#C9A227] hover:shadow-md transition-all">
                  <h3 className="font-bold text-[#0A1628] mb-2">Contact Support</h3>
                  <p className="text-slate-600 text-sm">Get help from our engineering team</p>
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
