import Container from '@/components/ui/Container';

export default function TrustBar() {
  const industriesLine1 = ['Aerospace & Defense', 'Life Sciences'];
  const industriesLine2 = ['Semiconductor', 'Robotics & Automation'];

  return (
    <section className="bg-[#F4F6F8] py-10">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-[#6B7C93] text-lg sm:text-xl lg:text-2xl font-medium mb-2">
            Trusted by industry leaders in
          </p>
          <div className="text-[#2C4A6E] text-xl sm:text-2xl lg:text-3xl font-bold">
            <div className="hidden sm:block">
              <div className="mb-1">
                {industriesLine1.map((industry, idx) => (
                  <span key={industry}>
                    {industry}
                    {idx < industriesLine1.length - 1 && ' | '}
                  </span>
                ))}
              </div>
              <div>
                {industriesLine2.map((industry, idx) => (
                  <span key={industry}>
                    {industry}
                    {idx < industriesLine2.length - 1 && ' | '}
                  </span>
                ))}
              </div>
            </div>
            <div className="sm:hidden">
              Aerospace, Life Sciences, Semiconductor & More
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
