import Container from '@/components/ui/Container';

export default function TrustBar() {
  const industries = [
    'Aerospace & Defense',
    'Life Sciences',
    'Semiconductor',
    'Robotics & Automation'
  ];

  return (
    <section className="bg-[#F4F6F8] py-8">
      <Container>
        <p className="text-center text-[#6B7C93] text-sm sm:text-base font-medium">
          Trusted by industry leaders in{' '}
          <span className="hidden sm:inline">
            {industries.map((industry, idx) => (
              <span key={industry}>
                <span className="text-[#2C4A6E] font-semibold">{industry}</span>
                {idx < industries.length - 1 && ' | '}
              </span>
            ))}
          </span>
          <span className="sm:hidden">
            <span className="text-[#2C4A6E] font-semibold">Aerospace, Life Sciences, Semiconductor & More</span>
          </span>
        </p>
      </Container>
    </section>
  );
}
