import Container from '@/components/ui/Container';

const specs = [
  { label: 'T-Slot Compatible', detail: 'Works with standard aluminum profiles' },
  { label: 'Stronger Connection', detail: 'AngleLock locks 10× harder than friction' },
  { label: 'Zero Slip. Zero Rework.', detail: 'Mechanically locked — not clamped' },
  { label: 'Faster Assembly', detail: '50% less time than standard T-slot builds' },
];

export default function CompatibilityBand() {
  return (
    <section className="bg-[#0F1E35] border-y border-white/10 py-10">
      <Container>
        {/* Headline */}
        <p className="text-center text-white/40 text-xs uppercase tracking-[0.25em] mb-8">
          Standard T-Slot Aluminum Extrusion Systems — Done Better
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-4 py-2 border-l border-white/10 first:border-l-0 lg:first:border-l-0"
            >
              <span className="text-[#C9A227] font-semibold text-sm tracking-wide mb-1">
                {spec.label}
              </span>
              <span className="text-white/50 text-xs leading-relaxed">
                {spec.detail}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
