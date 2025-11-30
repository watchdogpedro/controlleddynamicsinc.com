import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import IndustryShowcase from '@/components/sections/IndustryShowcase';
import TechnologyFeatures from '@/components/sections/TechnologyFeatures';
import Statistics from '@/components/sections/Statistics';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <IndustryShowcase />
        <TechnologyFeatures />
        <Statistics />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
