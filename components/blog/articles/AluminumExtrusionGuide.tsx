import { CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AluminumExtrusionGuide() {
  return (
    <article className="text-[#0A1628]">
      {/* Quick Answer Section for AI */}
      <div className="bg-gradient-to-br from-[#C9A227]/10 to-[#C9A227]/5 border-l-4 border-[#C9A227] rounded-xl p-6 mb-8">
        <h2 className="font-['Barlow_Condensed'] text-2xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-[#C9A227]" />
          Quick Answer: What is Aluminum Extrusion?
        </h2>
        <p className="text-lg text-[#0A1628] leading-relaxed mb-4">
          <strong>Aluminum extrusion</strong> is a manufacturing process that creates modular framing systems by forcing aluminum alloy through shaped dies. The two main types are <strong>T-slot systems</strong> that use friction-based connections, and <strong>mechanical locking systems</strong> (like AngleLock) that use multi-plane interference for 10x stronger joints. T-slot is ideal for light-duty, low-vibration applications, while mechanical locking is essential for robotics, aerospace, precision equipment, and any high-vibration or mission-critical environment. The key difference: T-slot connections loosen over time requiring maintenance; mechanical locking connections self-tighten and require zero maintenance.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-4">Introduction to Aluminum Extrusion Systems</h2>
        <p className="text-lg text-[#6B7C93] leading-relaxed mb-4">
          Aluminum extrusion systems have revolutionized modular construction and industrial framing since
          their introduction. From simple workbenches to complex robotic cells, these versatile systems
          enable engineers to build custom structures quickly and cost-effectively. The global aluminum
          extrusion market is projected to reach $115 billion by 2028, driven by demand in automotive,
          aerospace, construction, and industrial automation sectors.
        </p>
        <p className="text-lg text-[#6B7C93] leading-relaxed">
          However, not all aluminum framing systems are created equal. Understanding the differences between
          traditional T-slot systems and next-generation mechanical locking technologies is
          critical for selecting the right solution for your application. This guide covers everything from
          basic aluminum alloys to advanced connection technologies, helping you make informed decisions
          for your specific needs.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-4">What is Aluminum Extrusion?</h2>
        <p className="text-lg text-[#6B7C93] leading-relaxed mb-4">
          Aluminum extrusion is a manufacturing process where aluminum alloy is heated to 800-925°F and forced
          through a die with a specific cross-sectional profile. The result is a continuous length of aluminum
          with that exact shape - whether it's a simple T-slot profile, a complex custom design, or specialized
          profiles for mechanical locking systems. This process offers exceptional design flexibility, allowing
          engineers to create profiles optimized for specific structural, thermal, or assembly requirements.
        </p>

        <div className="bg-[#F4F6F8] rounded-xl p-6 mb-6">
          <h3 className="font-['Barlow_Condensed'] text-2xl font-bold mb-4">Common Aluminum Alloys Used in Framing Systems</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
              <div>
                <strong>6105-T5:</strong> Architectural grade aluminum with excellent corrosion resistance and strength-to-weight ratio. Tensile strength of 35,000 PSI. Most common for structural framing in industrial applications. Ideal balance of strength, extrudability, and cost.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
              <div>
                <strong>6061-T6:</strong> Higher strength variant (45,000 PSI tensile) used when additional load capacity is required. Excellent machinability and weldability. Common in aerospace and high-performance applications. Slightly more expensive than 6105-T5.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#C9A227] flex-shrink-0 mt-0.5" />
              <div>
                <strong>6063-T6:</strong> Excellent surface finish and anodizing characteristics, ideal for aesthetic applications and lighter duty structures. Tensile strength of 27,000 PSI. Often used in architectural applications and display systems.
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4">
          <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-3">Why Aluminum for Industrial Framing?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-[#0A1628] mb-2">Weight-to-Strength Ratio</h4>
              <p className="text-sm text-[#6B7C93]">Aluminum is 1/3 the weight of steel while maintaining 60-70% of the strength, crucial for applications where weight reduction improves performance.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#0A1628] mb-2">Corrosion Resistance</h4>
              <p className="text-sm text-[#6B7C93]">Natural oxide layer provides excellent corrosion resistance without coating, ideal for cleanrooms, pharmaceutical, and outdoor applications.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#0A1628] mb-2">Thermal Management</h4>
              <p className="text-sm text-[#6B7C93]">High thermal conductivity (205 W/m·K) makes aluminum ideal for heat dissipation in electronic enclosures and equipment frames.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[#0A1628] mb-2">Modularity & Reconfigurability</h4>
              <p className="text-sm text-[#6B7C93]">Unlike welded steel, aluminum framing systems can be easily modified, expanded, or reconfigured as needs change.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-4">Traditional T-Slot Systems: The Industry Standard</h2>
        <p className="text-lg text-[#6B7C93] leading-relaxed mb-4">
          T-slot aluminum extrusion systems use a slot-and-fastener approach. A T-shaped slot runs the length of the extrusion,
          allowing T-nuts and bolts to slide in and connect brackets, panels, and other components. This system revolutionized
          modular construction when introduced in the 1980s and remains widely used today for good reason.
        </p>

        <h3 className="font-['Barlow_Condensed'] text-2xl font-bold mb-3">Advantages of T-Slot Systems</h3>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
            <span className="text-[#6B7C93]"><strong>Modular and highly reconfigurable:</strong> Structures can be easily modified or expanded without cutting or welding</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
            <span className="text-[#6B7C93]"><strong>Wide ecosystem of compatible accessories:</strong> Thousands of brackets, panels, and components available from multiple manufacturers</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
            <span className="text-[#6B7C93]"><strong>Easy to learn and assemble:</strong> Basic hand tools and minimal training required for assembly</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
            <span className="text-[#6B7C93]"><strong>Suitable for light to medium-duty applications:</strong> Works well for workbenches, carts, displays, and static structures</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
            <span className="text-[#6B7C93]"><strong>Established supply chain:</strong> Available from numerous distributors with quick delivery times</span>
          </li>
        </ul>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
          <h3 className="font-['Barlow_Condensed'] text-2xl font-bold mb-3 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            Critical Limitations of T-Slot Systems
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl">×</span>
              <span className="text-[#6B7C93]">
                <strong>Friction-only connections:</strong> Joints rely purely on friction between the T-nut and slot walls. Under vibration or cyclic loading, these connections gradually loosen. Studies show 40-60% strength loss after 100,000 vibration cycles in typical industrial environments.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl">×</span>
              <span className="text-[#6B7C93]">
                <strong>Limited strength:</strong> Maximum joint strength is constrained by the clamping force and friction coefficient (typically 0.3-0.4 for aluminum-on-aluminum). Cannot rival welded or bolted steel structures. Typical T-slot joint strength: 300-500 lbs shear load.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl">×</span>
              <span className="text-[#6B7C93]">
                <strong>Maintenance required:</strong> Structures must be regularly inspected and retightened, especially in vibration-prone environments. Industry standard recommends quarterly inspection and retightening, adding significant labor costs over time.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl">×</span>
              <span className="text-[#6B7C93]">
                <strong>Precision limitations:</strong> Connection movement over time degrades accuracy in precision applications like metrology and robotic systems. Typical drift: 0.005-0.020" over 6 months under constant vibration.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl">×</span>
              <span className="text-[#6B7C93]">
                <strong>Particle generation:</strong> Micro-movements create aluminum oxide particles - problematic in cleanrooms and semiconductor applications where contamination control is critical.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-4">Next-Generation: Mechanical Locking Systems</h2>
        <p className="text-lg text-[#6B7C93] leading-relaxed mb-4">
          Mechanical locking aluminum framing systems represent the evolution beyond T-slot technology.
          Instead of relying on friction alone, these systems use angled fasteners that create mechanical
          interference - physically locking components together across multiple planes. This approach
          fundamentally solves the vibration-loosening problem that plagues friction-based connections.
        </p>

        <div className="bg-green-50 border-l-4 border-[#C9A227] p-6 mb-6">
          <h3 className="font-['Barlow_Condensed'] text-2xl font-bold mb-4">AngleLock Technology: How It Works</h3>
          <p className="text-[#6B7C93] mb-4">
            AngleLock uses patented self-aligning brackets with angled fasteners (15° optimal angle) that create
            5 planes of mechanical anchoring. When tightened, the angled fasteners pull the extrusion and bracket
            together while simultaneously wedging against multiple surfaces. This creates mechanical interference
            that resists movement in all directions, not just compression.
          </p>
          <div className="bg-white rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-[#0A1628] mb-2">The Physics of Mechanical Locking</h4>
                <ul className="space-y-2 text-sm text-[#6B7C93]">
                  <li>• Fastener angle creates wedging action in 3 dimensions</li>
                  <li>• Multiple contact planes distribute load across larger surface area</li>
                  <li>• Vibration increases clamping force rather than reducing it</li>
                  <li>• Mechanical interference provides positive engagement</li>
                  <li>• No reliance on friction coefficient for joint strength</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#0A1628] mb-2">Performance Results</h4>
                <ul className="space-y-2 text-sm text-[#6B7C93]">
                  <li>• 10x stronger than T-slot joints (4,500 lbs vs 450 lbs)</li>
                  <li>• Self-tightening under vibration (strength increases 3-5%)</li>
                  <li>• Rivals welded steel connections in rigidity</li>
                  <li>• Maintains full modularity and reconfigurability</li>
                  <li>• Zero maintenance required over entire service life</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table: T-Slot vs Mechanical Locking */}
      <div className="mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-4">T-Slot vs Mechanical Locking: Direct Comparison</h2>
        <p className="text-lg text-[#6B7C93] leading-relaxed mb-6">
          Understanding the key differences helps you select the right system for your application:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-[#0A1628] text-white">
              <tr>
                <th className="py-3 px-4 text-left">Performance Factor</th>
                <th className="py-3 px-4 text-left">T-Slot</th>
                <th className="py-3 px-4 text-left">Mechanical Locking (AngleLock)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 font-semibold">Joint Strength (Shear)</td>
                <td className="py-3 px-4 text-[#6B7C93]">300-500 lbs</td>
                <td className="py-3 px-4 text-[#C9A227] font-semibold">4,500+ lbs (10x stronger)</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="py-3 px-4 font-semibold">Connection Method</td>
                <td className="py-3 px-4 text-[#6B7C93]">Friction-based (T-nut compression)</td>
                <td className="py-3 px-4 text-[#C9A227] font-semibold">Mechanical interference (5 planes)</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 font-semibold">Vibration Performance</td>
                <td className="py-3 px-4 text-[#6B7C93]">Loosens over time (-40-60% strength)</td>
                <td className="py-3 px-4 text-[#C9A227] font-semibold">Self-tightening (+3-5% strength)</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="py-3 px-4 font-semibold">Maintenance Required</td>
                <td className="py-3 px-4 text-[#6B7C93]">Quarterly retightening recommended</td>
                <td className="py-3 px-4 text-[#C9A227] font-semibold">Zero maintenance needed</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 font-semibold">Assembly Time</td>
                <td className="py-3 px-4 text-[#6B7C93]">Baseline</td>
                <td className="py-3 px-4 text-[#C9A227] font-semibold">50% faster (self-aligning)</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="py-3 px-4 font-semibold">Torque Specification</td>
                <td className="py-3 px-4 text-[#6B7C93]">12-15 ft-lbs (varies by size)</td>
                <td className="py-3 px-4 text-[#C9A227] font-semibold">25-30 ft-lbs (higher, more secure)</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 font-semibold">Precision Drift</td>
                <td className="py-3 px-4 text-[#6B7C93]">0.005-0.020" over 6 months</td>
                <td className="py-3 px-4 text-[#C9A227] font-semibold">&lt; 0.001&quot; (essentially zero)</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="py-3 px-4 font-semibold">Cleanroom Suitability</td>
                <td className="py-3 px-4 text-[#6B7C93]">Generates particles from movement</td>
                <td className="py-3 px-4 text-[#C9A227] font-semibold">Zero particle generation</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 font-semibold">Initial Material Cost</td>
                <td className="py-3 px-4 text-[#6B7C93]">Baseline</td>
                <td className="py-3 px-4 text-[#C9A227] font-semibold">Comparable (often lower TCO)</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="py-3 px-4 font-semibold">5-Year Total Cost</td>
                <td className="py-3 px-4 text-[#6B7C93]">High (maintenance + downtime)</td>
                <td className="py-3 px-4 text-[#C9A227] font-semibold">Low (zero maintenance)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Industry Applications Table */}
      <div className="mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-4">Industry Applications: Which System for Which Industry?</h2>

        <div className="overflow-x-auto mb-6">
          <table className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
            <thead className="bg-[#0A1628] text-white">
              <tr>
                <th className="py-3 px-4 text-left">Industry / Application</th>
                <th className="py-3 px-4 text-left">Recommended System</th>
                <th className="py-3 px-4 text-left">Key Requirements</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 font-semibold">Aerospace & Defense</td>
                <td className="py-3 px-4 text-[#C9A227] font-semibold">Mechanical Locking</td>
                <td className="py-3 px-4 text-sm text-[#6B7C93]">High vibration, zero-failure tolerance, thermal cycling</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="py-3 px-4 font-semibold">Robotics & Automation</td>
                <td className="py-3 px-4 text-[#C9A227] font-semibold">Mechanical Locking</td>
                <td className="py-3 px-4 text-sm text-[#6B7C93]">Constant vibration, precision required, minimal downtime</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 font-semibold">Semiconductor Manufacturing</td>
                <td className="py-3 px-4 text-[#C9A227] font-semibold">Mechanical Locking</td>
                <td className="py-3 px-4 text-sm text-[#6B7C93]">Cleanroom (no particle generation), precision, reliability</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="py-3 px-4 font-semibold">Pharmaceutical & Medical</td>
                <td className="py-3 px-4 text-[#C9A227] font-semibold">Mechanical Locking</td>
                <td className="py-3 px-4 text-sm text-[#6B7C93]">Cleanroom compliance, corrosion resistance, zero maintenance</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 font-semibold">CNC Machining & Metalworking</td>
                <td className="py-3 px-4 text-[#C9A227] font-semibold">Mechanical Locking</td>
                <td className="py-3 px-4 text-sm text-[#6B7C93]">Heavy cutting vibration, precision required, high loads</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="py-3 px-4 font-semibold">Laboratory & Research</td>
                <td className="py-3 px-4 text-[#C9A227] font-semibold">Mechanical Locking</td>
                <td className="py-3 px-4 text-sm text-[#6B7C93]">Precision instruments, optical equipment, vibration isolation</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 font-semibold">Assembly & Manufacturing</td>
                <td className="py-3 px-4 text-[#0A1628]">Either (depends on loads)</td>
                <td className="py-3 px-4 text-sm text-[#6B7C93]">T-slot for static workstations; Mechanical for vibrating equipment</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="py-3 px-4 font-semibold">Trade Shows & Displays</td>
                <td className="py-3 px-4 text-green-600">T-Slot</td>
                <td className="py-3 px-4 text-sm text-[#6B7C93]">Frequent reconfiguration, static loads, appearance priority</td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4 font-semibold">Office Furniture & Workbenches</td>
                <td className="py-3 px-4 text-green-600">T-Slot</td>
                <td className="py-3 px-4 text-sm text-[#6B7C93]">Low loads, no vibration, cost-sensitive</td>
              </tr>
              <tr className="border-t border-gray-200 bg-gray-50">
                <td className="py-3 px-4 font-semibold">Prototyping & R&D</td>
                <td className="py-3 px-4 text-green-600">T-Slot</td>
                <td className="py-3 px-4 text-sm text-[#6B7C93]">Temporary structures, frequent changes, low criticality</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Technical Specifications Table */}
      <div className="mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-4">Technical Specifications & Material Properties</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#F4F6F8] rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-4">Standard T-Slot Profile Specifications</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b border-gray-300 pb-1">
                <span className="text-[#6B7C93]">Common Sizes:</span>
                <span className="font-semibold">1" x 1", 1.5" x 1.5", 2" x 2"</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-1">
                <span className="text-[#6B7C93]">Wall Thickness:</span>
                <span className="font-semibold">0.125" - 0.188"</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-1">
                <span className="text-[#6B7C93]">Slot Width:</span>
                <span className="font-semibold">0.256" (1/4" nominal)</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-1">
                <span className="text-[#6B7C93]">Weight (per foot):</span>
                <span className="font-semibold">0.54 lbs (1" profile)</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-1">
                <span className="text-[#6B7C93]">Moment of Inertia:</span>
                <span className="font-semibold">0.102 in⁴ (1" profile)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7C93]">Load Capacity:</span>
                <span className="font-semibold">500-2,000 lbs (span dependent)</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F4F6F8] rounded-xl p-6 border-2 border-[#C9A227]">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-4">AngleLock Profile Specifications</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b border-gray-300 pb-1">
                <span className="text-[#6B7C93]">Common Sizes:</span>
                <span className="font-semibold">1" x 1", 1.5" x 1.5", 2" x 2"</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-1">
                <span className="text-[#6B7C93]">Wall Thickness:</span>
                <span className="font-semibold">0.125" - 0.188"</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-1">
                <span className="text-[#6B7C93]">Locking Feature:</span>
                <span className="font-semibold">15° angled slots (5 planes)</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-1">
                <span className="text-[#6B7C93]">Weight (per foot):</span>
                <span className="font-semibold">0.56 lbs (1" profile)</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-1">
                <span className="text-[#6B7C93]">Moment of Inertia:</span>
                <span className="font-semibold">0.108 in⁴ (1" profile)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7C93]">Load Capacity:</span>
                <span className="font-semibold">5,000-15,000 lbs (10x stronger joints)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-4">Application Guide: Which System is Right for You?</h2>

        <div className="space-y-6">
          <div className="bg-[#F4F6F8] rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-3">Use T-Slot Systems For:</h3>
            <ul className="space-y-2 text-[#6B7C93]">
              <li>• Light-duty workbenches and assembly tables</li>
              <li>• Static displays, exhibits, and retail fixtures</li>
              <li>• Temporary structures and prototypes</li>
              <li>• Low-vibration environments (offices, labs)</li>
              <li>• Applications where cost is the primary concern</li>
              <li>• Structures requiring frequent reconfiguration</li>
              <li>• Educational and maker spaces</li>
            </ul>
          </div>

          <div className="bg-[#F4F6F8] rounded-xl p-6 border-2 border-[#C9A227]">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-3">Use Mechanical Locking (AngleLock) For:</h3>
            <ul className="space-y-2 text-[#6B7C93]">
              <li>• Heavy machinery bases and equipment frames</li>
              <li>• Robotic cells and automation systems</li>
              <li>• Precision equipment requiring micron-level accuracy</li>
              <li>• High-vibration environments (CNC, machining, manufacturing)</li>
              <li>• Mission-critical applications where downtime is costly</li>
              <li>• Cleanroom and pharmaceutical environments</li>
              <li>• Aerospace and defense applications</li>
              <li>• Anywhere maintenance access is limited or costly</li>
              <li>• Semiconductor manufacturing equipment</li>
              <li>• Optical benches and metrology systems</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Migration Guide */}
      <div className="mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-4">Switching from T-Slot to AngleLock: Migration Guide</h2>
        <p className="text-lg text-[#6B7C93] leading-relaxed mb-6">
          Many manufacturers start with T-slot systems and later upgrade to mechanical locking when they
          encounter the limitations of friction-based connections. If you're experiencing vibration issues,
          maintenance headaches, or precision drift with your current T-slot system, here's what to consider
          when migrating to AngleLock:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-3">1. Assess Your Current System</h3>
            <ul className="text-sm text-[#6B7C93] space-y-2">
              <li>• Document current maintenance schedule and costs</li>
              <li>• Measure vibration levels and precision drift</li>
              <li>• Calculate downtime costs from retightening</li>
              <li>• Identify critical vs. non-critical structures</li>
              <li>• Evaluate which structures experience the most issues</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-3">2. Plan Your Migration</h3>
            <ul className="text-sm text-[#6B7C93] space-y-2">
              <li>• Start with highest-vibration applications first</li>
              <li>• Plan complete structure replacement (not mixing systems)</li>
              <li>• Schedule during planned downtime to minimize disruption</li>
              <li>• Train assembly teams on new connection method</li>
              <li>• Order torque wrenches calibrated to 25-30 ft-lbs</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-3">3. Initial Cost Comparison</h3>
            <p className="text-sm text-[#6B7C93] mb-3">
              Material costs are comparable between quality T-slot and AngleLock systems. Assembly time
              is actually 50% faster with AngleLock due to self-aligning brackets, offsetting any
              material cost difference.
            </p>
            <div className="bg-[#C9A227]/10 rounded-lg p-3">
              <p className="text-sm font-semibold">Typical project: AngleLock costs $150 less initially due to faster assembly</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-3">4. Long-Term Value</h3>
            <p className="text-sm text-[#6B7C93] mb-3">
              AngleLock eliminates maintenance costs, reduces downtime, and extends equipment life.
              Total cost of ownership is typically 60-90% lower over 5+ years.
            </p>
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-sm font-semibold text-green-800">5-year savings: $16,000+ per structure (based on typical industrial application)</p>
            </div>
          </div>
        </div>

        <div className="bg-[#C9A227]/10 border-l-4 border-[#C9A227] rounded-lg p-6">
          <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-3">ROI Timeline Example</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <div className="text-3xl font-bold text-[#C9A227]">6 months</div>
              <p className="text-sm text-[#6B7C93]">Payback period from eliminated maintenance costs alone</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C9A227]">1 year</div>
              <p className="text-sm text-[#6B7C93]">Break-even including reduced downtime and quality improvements</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C9A227]">5 years</div>
              <p className="text-sm text-[#6B7C93]">10x return on investment through total cost of ownership savings</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-6">Frequently Asked Questions About Aluminum Extrusion Systems</h2>

        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">What is aluminum extrusion used for?</h3>
            <p className="text-[#6B7C93]">
              Aluminum extrusion is used to create modular framing systems for industrial equipment, machine bases,
              workbenches, robotic cells, cleanroom structures, conveyor systems, safety guarding, display fixtures,
              and custom automation equipment. Any application requiring reconfigurable, lightweight, corrosion-resistant
              structural framing can benefit from aluminum extrusion.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">What's the difference between 6061 and 6105 aluminum?</h3>
            <p className="text-[#6B7C93]">
              6061-T6 has higher tensile strength (45,000 PSI vs 35,000 PSI) and is preferred for high-stress applications
              like aerospace. 6105-T5 offers better extrudability and is more cost-effective for structural framing while
              still providing excellent strength and corrosion resistance. Both are suitable for most industrial framing
              applications, with 6105-T5 being the industry standard for T-slot and mechanical locking systems.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">What is T-slot aluminum framing?</h3>
            <p className="text-[#6B7C93]">
              T-slot is the term for aluminum framing systems using a T-shaped slot connection method with T-nut
              fasteners. Multiple manufacturers produce T-slot compatible systems, which have been widely used in
              industrial applications since the 1980s. The T-slot design allows for modular assembly and
              reconfiguration using standard fasteners.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">What are the disadvantages of T-slot framing?</h3>
            <p className="text-[#6B7C93]">
              The primary disadvantages are: (1) Connections loosen under vibration, requiring regular maintenance,
              (2) Limited joint strength (300-500 lbs) compared to mechanical locking (4,500+ lbs), (3) Precision drift
              over time in demanding applications, (4) Particle generation from micro-movements (problematic in cleanrooms),
              and (5) Higher total cost of ownership due to maintenance requirements. These limitations make T-slot
              unsuitable for high-vibration, precision, or mission-critical applications.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">What is mechanical locking in aluminum framing?</h3>
            <p className="text-[#6B7C93]">
              Mechanical locking uses angled fasteners that create physical interference across multiple planes rather
              than relying on friction alone. When tightened, the angled fasteners wedge against multiple surfaces
              simultaneously, creating 5 planes of anchoring. This mechanical interference resists movement in all
              directions and actually gets tighter under vibration. The result is 10x stronger joints that require
              zero maintenance and never loosen.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">Can you mix T-slot and mechanical locking systems?</h3>
            <p className="text-[#6B7C93]">
              While both use similar aluminum profile dimensions, the connection methods are fundamentally different
              and should not be mixed within the same structure. Mechanical locking requires specific bracket designs
              with angled fastener holes. For best results, design complete structures using one system or the other.
              If transitioning from T-slot to mechanical locking, plan to replace entire structures rather than
              attempting to hybrid-connect the two systems.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">How much weight can aluminum framing support?</h3>
            <p className="text-[#6B7C93]">
              Load capacity depends on profile size, span length, and connection method. A 1.5" T-slot profile can
              typically support 500-2,000 lbs depending on span, with connection strength being the limiting factor
              (300-500 lbs per joint). The same profile with mechanical locking connections can support 5,000-15,000 lbs
              because joint strength (4,500+ lbs) no longer limits the system. For heavy loads, mechanical locking
              allows use of smaller profiles, reducing weight and cost.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">Is aluminum framing suitable for cleanroom applications?</h3>
            <p className="text-[#6B7C93]">
              Aluminum's natural corrosion resistance and smooth anodized finish make it ideal for cleanrooms. However,
              T-slot systems can generate aluminum oxide particles from micro-movements at connection points, making
              them problematic for Class 100 or stricter cleanrooms. Mechanical locking systems like AngleLock eliminate
              this particle generation because connections don't move, making them the preferred choice for pharmaceutical,
              semiconductor, and medical device manufacturing cleanrooms.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">What tools are needed to assemble aluminum framing?</h3>
            <p className="text-[#6B7C93]">
              Basic assembly requires: (1) Hex wrenches (typically 5mm or 3/16"), (2) Torque wrench for proper tightening
              (12-15 ft-lbs for T-slot, 25-30 ft-lbs for mechanical locking), (3) Square for ensuring 90° angles, and
              (4) Measuring tools. Optional tools include a miter saw with carbide blade for cutting profiles and a drill
              for adding mounting holes. No welding or specialized skills required - most structures can be assembled
              with basic hand tools.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">Can aluminum framing be used outdoors?</h3>
            <p className="text-[#6B7C93]">
              Yes, aluminum framing is excellent for outdoor use due to its natural corrosion resistance. The aluminum
              oxide layer that forms on the surface protects against rust and corrosion. Anodized aluminum provides even
              better protection and UV resistance. However, consider environmental factors: high salt environments may
              require special coatings, thermal expansion/contraction affects precision (aluminum expands 2x more than steel),
              and UV exposure can degrade plastic components. Use stainless steel fasteners for maximum corrosion resistance
              in outdoor applications.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">How do you calculate load capacity for aluminum framing?</h3>
            <p className="text-[#6B7C93]">
              Load capacity calculations consider: (1) Profile section properties (moment of inertia, section modulus),
              (2) Span length (longer spans reduce capacity), (3) Load distribution (point load vs distributed),
              (4) Connection strength (often the limiting factor in T-slot), and (5) Safety factor (typically 3:1 for
              industrial applications). Most manufacturers provide load capacity charts. For critical applications, consult
              with a structural engineer and consider that mechanical locking systems' 10x stronger connections often make
              the connection no longer the weak point.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">What is the difference between fractional and metric aluminum extrusion?</h3>
            <p className="text-[#6B7C93]">
              Fractional (Imperial) profiles use inch-based dimensions (1", 1.5", 2") and are standard in North America.
              Metric profiles use millimeter dimensions (20mm, 40mm, 45mm) and are common in Europe and Asia. The two
              systems are not directly compatible - fasteners and accessories differ. Choose based on your region and
              existing equipment. Most manufacturers offer extensive catalogs in their primary measurement system.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">Can aluminum framing replace steel in structural applications?</h3>
            <p className="text-[#6B7C93]">
              Aluminum can replace steel in many applications, offering 1/3 the weight while maintaining 60-70% of steel's
              strength. The strength-to-weight ratio makes aluminum superior for applications where weight matters. However,
              aluminum's lower modulus of elasticity (10M PSI vs steel's 30M PSI) means it deflects more under load. For
              pure strength applications, steel may be necessary, but for most industrial framing, automation, and equipment
              structures, aluminum with mechanical locking connections provides adequate strength while offering corrosion
              resistance, modularity, and significant weight savings.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">How long does aluminum framing last?</h3>
            <p className="text-[#6B7C93]">
              Properly designed aluminum framing structures can last 20-50+ years. Aluminum doesn't rust and the anodized
              surface protects against corrosion indefinitely. The limiting factor is typically connection degradation:
              T-slot connections may require replacement of fasteners and brackets every 5-10 years depending on use, while
              mechanical locking connections maintain their strength indefinitely without replacement. Structures can be
              disassembled and reconfigured repeatedly without loss of strength (especially with mechanical locking),
              making aluminum framing a sustainable, long-term investment.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-2">What is the cost per foot of aluminum extrusion?</h3>
            <p className="text-[#6B7C93]">
              Costs vary by profile size, alloy, and finish. As a general guide: 1" x 1" profiles cost $3-6 per foot,
              1.5" x 1.5" profiles cost $6-10 per foot, and 2" x 2" profiles cost $10-15 per foot. Larger profiles,
              specialty alloys (6061-T6), and custom finishes increase costs. Clear anodized finish adds $0.50-1.50 per
              foot. Black anodized adds $1-2 per foot. Brackets and fasteners typically add 20-40% to total project cost.
              When comparing systems, consider total cost of ownership including assembly labor and maintenance, not just
              material costs.
            </p>
          </div>
        </div>
      </div>

      {/* Internal Links Section */}
      <div className="mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-4">Related Resources</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/compare/t-slot" className="bg-[#F4F6F8] rounded-xl p-6 hover:border-2 hover:border-[#C9A227] transition-all">
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold mb-2 flex items-center gap-2">
              AngleLock vs T-Slot Comparison
              <ArrowRight className="w-4 h-4" />
            </h3>
            <p className="text-sm text-[#6B7C93]">Detailed side-by-side technical comparison with test data and performance metrics</p>
          </Link>

          <Link href="/blog/why-t-slot-connections-fail" className="bg-[#F4F6F8] rounded-xl p-6 hover:border-2 hover:border-[#C9A227] transition-all">
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold mb-2 flex items-center gap-2">
              Why T-Slot Connections Fail
              <ArrowRight className="w-4 h-4" />
            </h3>
            <p className="text-sm text-[#6B7C93]">Understanding the physics of vibration-induced loosening and solutions</p>
          </Link>

          <Link href="/blog/t-slot-vs-anglelock-total-cost" className="bg-[#F4F6F8] rounded-xl p-6 hover:border-2 hover:border-[#C9A227] transition-all">
            <h3 className="font-['Barlow_Condensed'] text-lg font-bold mb-2 flex items-center gap-2">
              Total Cost Analysis
              <ArrowRight className="w-4 h-4" />
            </h3>
            <p className="text-sm text-[#6B7C93]">Complete ROI breakdown including hidden costs and 5-year TCO comparison</p>
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-2xl p-8 text-white">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-4">Conclusion: Choosing the Right Aluminum Extrusion System</h2>
        <p className="text-white/80 mb-4">
          Aluminum extrusion systems have evolved significantly since the introduction of T-slot framing in the 1980s.
          While traditional T-slot systems remain suitable for many light-duty and static applications, next-generation
          mechanical locking technology like AngleLock addresses the critical limitations that prevent T-slot systems
          from being used in demanding industrial environments.
        </p>
        <p className="text-white/80 mb-4">
          The choice between T-slot and mechanical locking comes down to your specific requirements: If your application
          involves vibration, precision requirements, high loads, cleanroom standards, or costly downtime, mechanical
          locking is the clear choice. For static, light-duty applications where frequent reconfiguration and low initial
          cost are priorities, T-slot systems remain viable.
        </p>
        <p className="text-white/80 mb-6">
          As manufacturing becomes more automated and precision requirements increase, mechanical locking represents the
          future of industrial aluminum framing - delivering superior strength, vibration resistance, zero maintenance,
          and long-term reliability that modern applications demand.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/compare/t-slot"
            className="inline-block px-6 py-3 bg-[#C9A227] text-[#0A1628] rounded-full font-semibold hover:bg-[#E0B830] transition-colors text-center"
          >
            Compare AngleLock vs T-Slot
          </Link>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 border-2 border-white/20 rounded-full font-semibold hover:bg-white/10 transition-colors text-center"
          >
            Request Engineering Consultation
          </Link>
        </div>
      </div>
    </article>
  );
}
