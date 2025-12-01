import Container from '@/components/ui/Container';

export default function TrustBar() {
  const industries = [
    'Aerospace & Defense',
    'Life Sciences',
    'Semiconductor',
    'Robotics & Automation'
  ];

  return (
    <section className="bg-[#F4F6F8] py-10">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[#6B7C93] text-lg sm:text-xl lg:text-2xl font-medium mb-2">
            Trusted by industry leaders in
          </p>
          <p className="text-[#2C4A6E] text-xl sm:text-2xl lg:text-3xl font-bold">
            <span className="hidden sm:inline">
              {industries.map((industry, idx) => (
                <span key={industry}>
                  {industry}
                  {idx < industries.length - 1 && ' | '}
                </span>
              ))}
            </span>
            <span className="sm:hidden">
              Aerospace, Life Sciences, Semiconductor & More
            </span>
          </p>
        </div>
      </Container>
    </section>
  );
}
