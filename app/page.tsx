import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import IndustryShowcase from '@/components/sections/IndustryShowcase';
import TechnologyFeatures from '@/components/sections/TechnologyFeatures';
import Statistics from '@/components/sections/Statistics';
import MarketReportCTA from '@/components/sections/MarketReportCTA';
import CTASection from '@/components/sections/CTASection';
import StructuredData, { organizationSchema, productSchema } from '@/components/seo/StructuredData';
import NewsletterSignup from '@/components/newsletter/NewsletterSignup';
import Container from '@/components/ui/Container';

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={productSchema} />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <IndustryShowcase />
        <TechnologyFeatures />
        <Statistics />

        {/* Market Report Download */}
        <MarketReportCTA variant="default" />

        {/* Newsletter Section */}
        <section className="py-20 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <NewsletterSignup
                variant="card"
                title="Engineering Insights Delivered to Your Inbox"
                description="Join 500+ engineers and manufacturers getting expert articles on aluminum framing systems, T-slot alternatives, and structural engineering best practices."
              />
            </div>
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
