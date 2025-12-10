import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Database, BarChart3, Zap, Shield } from 'lucide-react';
import Container from '@/components/ui/Container';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Engineering Data | Technical Documentation | Controlled Dynamics Inc.',
  description: 'Load capacity tables, deflection calculations, material properties, and performance data for AngleLock structural systems.',
  keywords: 'AngleLock engineering data, load tables, material properties, deflection calculations, structural analysis',
};

export default function EngineeringDataPage() {
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
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Database className="w-8 h-8 text-purple-400" />
                </div>
                <h1 className="text-5xl font-bold">Engineering Data</h1>
              </div>
              <p className="text-xl text-white/80">
                Comprehensive performance data, load tables, material properties, and technical specifications for structural analysis and design validation.
              </p>
            </div>
          </Container>
        </section>

        {/* Material Properties */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8">Material Properties</h2>

              <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 mb-8">
                <h3 className="text-xl font-bold text-[#0A1628] mb-6">6105-T5 Aluminum Alloy</h3>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="flex justify-between border-b border-slate-300 pb-2">
                    <span className="font-semibold text-slate-700">Tensile Strength</span>
                    <span className="text-[#0A1628]">35,000 psi (241 MPa)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-300 pb-2">
                    <span className="font-semibold text-slate-700">Yield Strength</span>
                    <span className="text-[#0A1628]">28,000 psi (193 MPa)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-300 pb-2">
                    <span className="font-semibold text-slate-700">Elastic Modulus</span>
                    <span className="text-[#0A1628]">10.0 x 10⁶ psi (69 GPa)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-300 pb-2">
                    <span className="font-semibold text-slate-700">Shear Modulus</span>
                    <span className="text-[#0A1628]">3.8 x 10⁶ psi (26 GPa)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-300 pb-2">
                    <span className="font-semibold text-slate-700">Density</span>
                    <span className="text-[#0A1628]">0.098 lb/in³ (2,710 kg/m³)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-300 pb-2">
                    <span className="font-semibold text-slate-700">Poisson's Ratio</span>
                    <span className="text-[#0A1628]">0.33</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-300 pb-2">
                    <span className="font-semibold text-slate-700">Thermal Expansion</span>
                    <span className="text-[#0A1628]">13.1 x 10⁻⁶ /°F (23.6 x 10⁻⁶ /°C)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-300 pb-2">
                    <span className="font-semibold text-slate-700">Thermal Conductivity</span>
                    <span className="text-[#0A1628]">1,200 BTU·in/(hr·ft²·°F)</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <Shield className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-bold text-blue-900 mb-2">Corrosion Resistance</h3>
                  <p className="text-blue-800 text-sm">
                    Excellent resistance to atmospheric corrosion. Clear anodized finish provides additional protection.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <Zap className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-bold text-green-900 mb-2">Conductivity</h3>
                  <p className="text-green-800 text-sm">
                    High thermal and electrical conductivity. Ideal for applications requiring heat dissipation.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <BarChart3 className="w-8 h-8 text-orange-600 mb-3" />
                  <h3 className="font-bold text-orange-900 mb-2">Machinability</h3>
                  <p className="text-orange-800 text-sm">
                    Excellent machinability rating. Easy to drill, tap, and machine for custom modifications.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Load Capacity Tables */}
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-4">Load Capacity Tables</h2>
              <p className="text-slate-600 mb-8">
                Maximum recommended loads for common extrusion sizes under various support conditions.
              </p>

              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden mb-8">
                <div className="bg-[#0A1628] text-white px-6 py-4">
                  <h3 className="text-xl font-bold">Uniformly Distributed Load (UDL) - Simply Supported</h3>
                  <p className="text-sm text-white/70 mt-1">Safety factor of 4:1 applied</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-slate-700 font-semibold">Profile Size</th>
                        <th className="px-6 py-3 text-center text-slate-700 font-semibold">24" Span</th>
                        <th className="px-6 py-3 text-center text-slate-700 font-semibold">36" Span</th>
                        <th className="px-6 py-3 text-center text-slate-700 font-semibold">48" Span</th>
                        <th className="px-6 py-3 text-center text-slate-700 font-semibold">60" Span</th>
                        <th className="px-6 py-3 text-center text-slate-700 font-semibold">72" Span</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="px-6 py-4 font-semibold text-[#0A1628]">40mm x 40mm</td>
                        <td className="px-6 py-4 text-center">850 lbs</td>
                        <td className="px-6 py-4 text-center">375 lbs</td>
                        <td className="px-6 py-4 text-center">215 lbs</td>
                        <td className="px-6 py-4 text-center">140 lbs</td>
                        <td className="px-6 py-4 text-center">95 lbs</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-6 py-4 font-semibold text-[#0A1628]">40mm x 80mm</td>
                        <td className="px-6 py-4 text-center">1,600 lbs</td>
                        <td className="px-6 py-4 text-center">710 lbs</td>
                        <td className="px-6 py-4 text-center">400 lbs</td>
                        <td className="px-6 py-4 text-center">255 lbs</td>
                        <td className="px-6 py-4 text-center">180 lbs</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-[#0A1628]">80mm x 80mm</td>
                        <td className="px-6 py-4 text-center">3,200 lbs</td>
                        <td className="px-6 py-4 text-center">1,420 lbs</td>
                        <td className="px-6 py-4 text-center">800 lbs</td>
                        <td className="px-6 py-4 text-center">510 lbs</td>
                        <td className="px-6 py-4 text-center">355 lbs</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-6 py-4 font-semibold text-[#0A1628]">40mm x 120mm</td>
                        <td className="px-6 py-4 text-center">2,100 lbs</td>
                        <td className="px-6 py-4 text-center">935 lbs</td>
                        <td className="px-6 py-4 text-center">525 lbs</td>
                        <td className="px-6 py-4 text-center">335 lbs</td>
                        <td className="px-6 py-4 text-center">235 lbs</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-[#0A1628]">80mm x 120mm</td>
                        <td className="px-6 py-4 text-center">4,200 lbs</td>
                        <td className="px-6 py-4 text-center">1,870 lbs</td>
                        <td className="px-6 py-4 text-center">1,050 lbs</td>
                        <td className="px-6 py-4 text-center">670 lbs</td>
                        <td className="px-6 py-4 text-center">465 lbs</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-6 py-4 font-semibold text-[#0A1628]">120mm x 120mm</td>
                        <td className="px-6 py-4 text-center">6,300 lbs</td>
                        <td className="px-6 py-4 text-center">2,800 lbs</td>
                        <td className="px-6 py-4 text-center">1,575 lbs</td>
                        <td className="px-6 py-4 text-center">1,010 lbs</td>
                        <td className="px-6 py-4 text-center">700 lbs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <div className="bg-[#0A1628] text-white px-6 py-4">
                  <h3 className="text-xl font-bold">Point Load at Center - Simply Supported</h3>
                  <p className="text-sm text-white/70 mt-1">Safety factor of 4:1 applied</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-slate-700 font-semibold">Profile Size</th>
                        <th className="px-6 py-3 text-center text-slate-700 font-semibold">24" Span</th>
                        <th className="px-6 py-3 text-center text-slate-700 font-semibold">36" Span</th>
                        <th className="px-6 py-3 text-center text-slate-700 font-semibold">48" Span</th>
                        <th className="px-6 py-3 text-center text-slate-700 font-semibold">60" Span</th>
                        <th className="px-6 py-3 text-center text-slate-700 font-semibold">72" Span</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="px-6 py-4 font-semibold text-[#0A1628]">40mm x 40mm</td>
                        <td className="px-6 py-4 text-center">425 lbs</td>
                        <td className="px-6 py-4 text-center">285 lbs</td>
                        <td className="px-6 py-4 text-center">215 lbs</td>
                        <td className="px-6 py-4 text-center">170 lbs</td>
                        <td className="px-6 py-4 text-center">145 lbs</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-6 py-4 font-semibold text-[#0A1628]">40mm x 80mm</td>
                        <td className="px-6 py-4 text-center">800 lbs</td>
                        <td className="px-6 py-4 text-center">535 lbs</td>
                        <td className="px-6 py-4 text-center">400 lbs</td>
                        <td className="px-6 py-4 text-center">320 lbs</td>
                        <td className="px-6 py-4 text-center">270 lbs</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-[#0A1628]">80mm x 80mm</td>
                        <td className="px-6 py-4 text-center">1,600 lbs</td>
                        <td className="px-6 py-4 text-center">1,070 lbs</td>
                        <td className="px-6 py-4 text-center">800 lbs</td>
                        <td className="px-6 py-4 text-center">640 lbs</td>
                        <td className="px-6 py-4 text-center">535 lbs</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-6 py-4 font-semibold text-[#0A1628]">40mm x 120mm</td>
                        <td className="px-6 py-4 text-center">1,050 lbs</td>
                        <td className="px-6 py-4 text-center">700 lbs</td>
                        <td className="px-6 py-4 text-center">525 lbs</td>
                        <td className="px-6 py-4 text-center">420 lbs</td>
                        <td className="px-6 py-4 text-center">350 lbs</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-[#0A1628]">80mm x 120mm</td>
                        <td className="px-6 py-4 text-center">2,100 lbs</td>
                        <td className="px-6 py-4 text-center">1,400 lbs</td>
                        <td className="px-6 py-4 text-center">1,050 lbs</td>
                        <td className="px-6 py-4 text-center">840 lbs</td>
                        <td className="px-6 py-4 text-center">700 lbs</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-6 py-4 font-semibold text-[#0A1628]">120mm x 120mm</td>
                        <td className="px-6 py-4 text-center">3,150 lbs</td>
                        <td className="px-6 py-4 text-center">2,100 lbs</td>
                        <td className="px-6 py-4 text-center">1,575 lbs</td>
                        <td className="px-6 py-4 text-center">1,260 lbs</td>
                        <td className="px-6 py-4 text-center">1,050 lbs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-bold text-blue-900 mb-2">Notes on Load Tables</h4>
                <ul className="space-y-1 text-blue-800 text-sm">
                  <li>• All values include a 4:1 safety factor based on yield strength</li>
                  <li>• Loads assume AngleLock connections at supports</li>
                  <li>• Values based on bending stress only (does not include deflection limits)</li>
                  <li>• For cantilever or continuous beam configurations, contact engineering</li>
                  <li>• Higher loads possible with additional supports or reinforcement</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Deflection Calculations */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8">Deflection Calculations</h2>

              <div className="space-y-8">
                <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                  <h3 className="text-xl font-bold text-[#0A1628] mb-4">Simply Supported Beam - Uniformly Distributed Load</h3>

                  <div className="bg-white p-6 rounded-lg border border-slate-300 mb-4 font-mono text-center">
                    <div className="text-2xl mb-2">δ = (5 × w × L⁴) / (384 × E × I)</div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span className="font-semibold text-slate-700 w-20">δ =</span>
                      <span className="text-slate-600">Maximum deflection at center (inches)</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold text-slate-700 w-20">w =</span>
                      <span className="text-slate-600">Uniform load per unit length (lbs/in)</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold text-slate-700 w-20">L =</span>
                      <span className="text-slate-600">Span length (inches)</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold text-slate-700 w-20">E =</span>
                      <span className="text-slate-600">Elastic modulus = 10.0 x 10⁶ psi</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold text-slate-700 w-20">I =</span>
                      <span className="text-slate-600">Moment of inertia (in⁴) - see section properties</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                  <h3 className="text-xl font-bold text-[#0A1628] mb-4">Simply Supported Beam - Point Load at Center</h3>

                  <div className="bg-white p-6 rounded-lg border border-slate-300 mb-4 font-mono text-center">
                    <div className="text-2xl mb-2">δ = (P × L³) / (48 × E × I)</div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span className="font-semibold text-slate-700 w-20">δ =</span>
                      <span className="text-slate-600">Maximum deflection at center (inches)</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold text-slate-700 w-20">P =</span>
                      <span className="text-slate-600">Point load at center (lbs)</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold text-slate-700 w-20">L =</span>
                      <span className="text-slate-600">Span length (inches)</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold text-slate-700 w-20">E =</span>
                      <span className="text-slate-600">Elastic modulus = 10.0 x 10⁶ psi</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-semibold text-slate-700 w-20">I =</span>
                      <span className="text-slate-600">Moment of inertia (in⁴) - see section properties</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h4 className="font-bold text-orange-900 mb-2">Deflection Guidelines</h4>
                  <ul className="space-y-1 text-orange-800 text-sm">
                    <li>• General applications: Limit deflection to L/180 (span/180)</li>
                    <li>• Precision equipment: Limit deflection to L/360 or better</li>
                    <li>• Vibration-sensitive: Consult engineering for stiffness requirements</li>
                    <li>• Example: 48" span general use → maximum deflection = 0.267"</li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Section Properties */}
        <section className="py-16 bg-slate-50">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-4">Section Properties</h2>
              <p className="text-slate-600 mb-8">
                Geometric properties for common extrusion profiles.
              </p>

              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-[#0A1628] text-white">
                    <tr>
                      <th className="px-6 py-3 text-left">Profile Size</th>
                      <th className="px-6 py-3 text-center">Area (in²)</th>
                      <th className="px-6 py-3 text-center">Ixx (in⁴)</th>
                      <th className="px-6 py-3 text-center">Iyy (in⁴)</th>
                      <th className="px-6 py-3 text-center">Weight (lb/ft)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 font-semibold text-[#0A1628]">40mm x 40mm</td>
                      <td className="px-6 py-4 text-center">0.98</td>
                      <td className="px-6 py-4 text-center">0.42</td>
                      <td className="px-6 py-4 text-center">0.42</td>
                      <td className="px-6 py-4 text-center">1.15</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-[#0A1628]">40mm x 80mm</td>
                      <td className="px-6 py-4 text-center">1.96</td>
                      <td className="px-6 py-4 text-center">1.68</td>
                      <td className="px-6 py-4 text-center">0.84</td>
                      <td className="px-6 py-4 text-center">2.30</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-[#0A1628]">80mm x 80mm</td>
                      <td className="px-6 py-4 text-center">3.92</td>
                      <td className="px-6 py-4 text-center">3.36</td>
                      <td className="px-6 py-4 text-center">3.36</td>
                      <td className="px-6 py-4 text-center">4.60</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-[#0A1628]">40mm x 120mm</td>
                      <td className="px-6 py-4 text-center">2.45</td>
                      <td className="px-6 py-4 text-center">3.15</td>
                      <td className="px-6 py-4 text-center">1.05</td>
                      <td className="px-6 py-4 text-center">2.88</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-[#0A1628]">80mm x 120mm</td>
                      <td className="px-6 py-4 text-center">4.90</td>
                      <td className="px-6 py-4 text-center">6.30</td>
                      <td className="px-6 py-4 text-center">4.20</td>
                      <td className="px-6 py-4 text-center">5.75</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-[#0A1628]">120mm x 120mm</td>
                      <td className="px-6 py-4 text-center">7.35</td>
                      <td className="px-6 py-4 text-center">9.45</td>
                      <td className="px-6 py-4 text-center">9.45</td>
                      <td className="px-6 py-4 text-center">8.63</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Container>
        </section>

        {/* FEA Guidelines */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8">FEA Modeling Guidelines</h2>

              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="font-bold text-[#0A1628] mb-3">Connection Modeling</h3>
                  <p className="text-slate-700 mb-3">
                    AngleLock connections provide rigid joint behavior when properly torqued. For FEA analysis:
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A227] mt-1">•</span>
                      <span>Model as fixed/rigid joints for preliminary analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A227] mt-1">•</span>
                      <span>For critical applications, model full bracket geometry with contact elements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A227] mt-1">•</span>
                      <span>Typical joint stiffness: 90-95% of continuous beam</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="font-bold text-[#0A1628] mb-3">Mesh Recommendations</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A227] mt-1">•</span>
                      <span>Element type: Beam elements for global analysis, solid elements for detailed stress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A227] mt-1">•</span>
                      <span>Mesh size: 10-20mm for global, 2-5mm for local stress concentrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C9A227] mt-1">•</span>
                      <span>Use mesh refinement at connections and load application points</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h3 className="font-bold text-[#0A1628] mb-3">Validation</h3>
                  <p className="text-slate-700">
                    Compare FEA results against hand calculations for simple load cases to validate model.
                    Our engineering team can provide FEA validation services for critical applications.
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
              <h2 className="text-3xl font-bold mb-4">Need Additional Engineering Support?</h2>
              <p className="text-lg text-white/80 mb-8">
                Our engineering team can provide custom calculations, FEA analysis, and design validation for your specific application.
              </p>
              <Link href="/contact">
                <button className="px-8 py-4 bg-[#C9A227] hover:bg-[#E5B83C] text-[#0A1628] font-bold rounded-lg transition-colors">
                  Contact Engineering Team
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
