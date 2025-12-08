import { DollarSign, TrendingDown, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function CostComparison() {
  return (
    <article className="text-[#0A1628]">
      <div className="mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-4">Beyond the Price Tag: Understanding Total Cost</h2>
        <p className="text-lg text-[#6B7C93] leading-relaxed mb-4">
          When comparing aluminum framing systems, many purchasers focus solely on initial material costs.
          This narrow view misses the bigger picture: the true cost of ownership extends far beyond the
          purchase order.
        </p>
        <p className="text-lg text-[#6B7C93] leading-relaxed">
          Over a 5-year period, maintenance, downtime, and performance issues can dwarf initial savings.
          Let's break down the real numbers.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-4">Initial Investment Comparison</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#F4F6F8] rounded-xl p-6">
            <h3 className="font-['Barlow_Condensed'] text-2xl font-bold mb-4">T-Slot System</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[#6B7C93]">Extrusions (100 ft)</span>
                <span className="font-semibold">$850</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7C93]">Brackets & Fasteners</span>
                <span className="font-semibold">$320</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7C93]">Assembly Labor (8 hrs)</span>
                <span className="font-semibold">$600</span>
              </div>
              <div className="border-t border-gray-300 pt-3 flex justify-between">
                <span className="font-bold">Initial Total</span>
                <span className="font-bold text-xl">$1,770</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F4F6F8] rounded-xl p-6 border-2 border-[#C9A227]">
            <h3 className="font-['Barlow_Condensed'] text-2xl font-bold mb-4">AngleLock System</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-[#6B7C93]">Extrusions (100 ft)</span>
                <span className="font-semibold">$900</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7C93]">Brackets & Fasteners</span>
                <span className="font-semibold">$420</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7C93]">Assembly Labor (4 hrs)</span>
                <span className="font-semibold">$300</span>
              </div>
              <div className="border-t border-gray-300 pt-3 flex justify-between">
                <span className="font-bold">Initial Total</span>
                <span className="font-bold text-xl">$1,620</span>
              </div>
            </div>
            <div className="mt-4 bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
              <TrendingDown className="w-4 h-4" />
              $150 less than T-slot (50% faster assembly)
            </div>
          </div>
        </div>

        <p className="text-[#6B7C93] text-sm italic">
          * Based on typical machine base structure. Faster AngleLock assembly due to self-aligning brackets.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-4">5-Year Operating Costs</h2>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
          <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-4 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-red-600" />
            T-Slot: Hidden Costs Add Up
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Maintenance Labor</span>
                <span className="text-red-600 font-bold">$3,600</span>
              </div>
              <p className="text-sm text-[#6B7C93]">
                Quarterly inspection and retightening: 2 hrs/quarter × 20 quarters × $90/hr
              </p>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Downtime Costs</span>
                <span className="text-red-600 font-bold">$8,400</span>
              </div>
              <p className="text-sm text-[#6B7C93]">
                14 hours/year maintenance downtime × 5 years × $120/hr production value
              </p>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Vibration-Related Issues</span>
                <span className="text-red-600 font-bold">$4,200</span>
              </div>
              <p className="text-sm text-[#6B7C93]">
                Part rejection, equipment recalibration, premature wear: average $840/year
              </p>
            </div>
            <div className="border-t-2 border-gray-300 pt-4">
              <div className="flex justify-between">
                <span className="font-bold text-lg">Total 5-Year Operating Cost</span>
                <span className="font-bold text-2xl text-red-600">$16,200</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-[#C9A227] rounded-xl p-6">
          <h3 className="font-['Barlow_Condensed'] text-xl font-bold mb-4 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-[#C9A227]" />
            AngleLock: Zero Operating Costs
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Maintenance Labor</span>
                <span className="text-[#C9A227] font-bold">$0</span>
              </div>
              <p className="text-sm text-[#6B7C93]">
                Self-tightening connections require zero maintenance
              </p>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Downtime Costs</span>
                <span className="text-[#C9A227] font-bold">$0</span>
              </div>
              <p className="text-sm text-[#6B7C93]">
                No maintenance = no downtime
              </p>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Vibration-Related Issues</span>
                <span className="text-[#C9A227] font-bold">$0</span>
              </div>
              <p className="text-sm text-[#6B7C93]">
                Vibration-proof connections eliminate drift and quality issues
              </p>
            </div>
            <div className="border-t-2 border-gray-300 pt-4">
              <div className="flex justify-between">
                <span className="font-bold text-lg">Total 5-Year Operating Cost</span>
                <span className="font-bold text-2xl text-[#C9A227]">$0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-4">Total Cost of Ownership: The Verdict</h2>

        <div className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            <div>
              <h3 className="font-['Barlow_Condensed'] text-2xl font-bold mb-4">T-Slot</h3>
              <div className="space-y-2 text-white/80">
                <div className="flex justify-between">
                  <span>Initial Investment</span>
                  <span>$1,770</span>
                </div>
                <div className="flex justify-between">
                  <span>5-Year Operating</span>
                  <span>$16,200</span>
                </div>
                <div className="border-t border-white/20 pt-2 flex justify-between font-bold text-xl">
                  <span>Total 5-Year Cost</span>
                  <span className="text-red-400">$17,970</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-['Barlow_Condensed'] text-2xl font-bold mb-4">AngleLock</h3>
              <div className="space-y-2 text-white/80">
                <div className="flex justify-between">
                  <span>Initial Investment</span>
                  <span>$1,620</span>
                </div>
                <div className="flex justify-between">
                  <span>5-Year Operating</span>
                  <span>$0</span>
                </div>
                <div className="border-t border-white/20 pt-2 flex justify-between font-bold text-xl">
                  <span>Total 5-Year Cost</span>
                  <span className="text-[#C9A227]">$1,620</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-6 flex items-center justify-center">
            <div className="text-center">
              <div className="flex items-center gap-3 justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-[#C9A227]" />
                <span className="font-['Barlow_Condensed'] text-5xl font-bold text-[#C9A227]">$16,350</span>
              </div>
              <p className="text-white/80">Total 5-year savings with AngleLock</p>
              <p className="text-sm text-white/60 mt-1">(10x return on initial investment)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="font-['Barlow_Condensed'] text-3xl font-bold mb-4">Factors Not Included in This Analysis</h2>
        <p className="text-lg text-[#6B7C93] mb-4">
          The above comparison is conservative. Additional benefits of AngleLock not quantified here include:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-[#F4F6F8] rounded-lg p-4">
            <h4 className="font-bold text-[#0A1628] mb-2">Equipment Longevity</h4>
            <p className="text-sm text-[#6B7C93]">
              Reduced vibration transmission extends life of mounted equipment (motors, sensors, etc.)
            </p>
          </div>
          <div className="bg-[#F4F6F8] rounded-lg p-4">
            <h4 className="font-bold text-[#0A1628] mb-2">Quality Improvements</h4>
            <p className="text-sm text-[#6B7C93]">
              Maintained precision reduces scrap and rework in manufacturing processes
            </p>
          </div>
          <div className="bg-[#F4F6F8] rounded-lg p-4">
            <h4 className="font-bold text-[#0A1628] mb-2">Smaller Profiles</h4>
            <p className="text-sm text-[#6B7C93]">
              10x stronger joints allow use of smaller, lighter, less expensive extrusions
            </p>
          </div>
          <div className="bg-[#F4F6F8] rounded-lg p-4">
            <h4 className="font-bold text-[#0A1628] mb-2">Resale Value</h4>
            <p className="text-sm text-[#6B7C93]">
              AngleLock structures maintain full strength through disassembly and reconfiguration
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#C9A227]/10 border-l-4 border-[#C9A227] rounded-lg p-6">
        <h2 className="font-['Barlow_Condensed'] text-2xl font-bold mb-4">The ROI Decision</h2>
        <p className="text-[#6B7C93] mb-4">
          AngleLock pays for itself through eliminated maintenance costs alone within the first year.
          Over 5 years, you save more than 10x the initial investment difference while gaining superior
          performance, reliability, and peace of mind.
        </p>
        <p className="text-[#6B7C93] mb-6">
          For mission-critical applications where downtime is expensive and reliability is paramount,
          the decision is clear.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-[#C9A227] text-white rounded-full font-semibold hover:bg-[#E0B830] transition-colors text-center"
          >
            Request Custom ROI Analysis
          </Link>
          <Link
            href="/compare/t-slot"
            className="inline-block px-6 py-3 border-2 border-[#C9A227] text-[#C9A227] rounded-full font-semibold hover:bg-[#C9A227]/10 transition-colors text-center"
          >
            Full Technical Comparison
          </Link>
        </div>
      </div>
    </article>
  );
}
