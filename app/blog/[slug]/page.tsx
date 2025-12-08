'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getArticleBySlug } from '@/lib/blog-data/articles';
import AluminumExtrusionGuide from '@/components/blog/articles/AluminumExtrusionGuide';
import TSlotFailureAnalysis from '@/components/blog/articles/TSlotFailureAnalysis';
import CostComparison from '@/components/blog/articles/CostComparison';
import StructuredData, { generateArticleSchema, generateBreadcrumbSchema } from '@/components/seo/StructuredData';
import NewsletterSignup from '@/components/newsletter/NewsletterSignup';

const articleComponents: { [key: string]: React.ComponentType } = {
  'aluminum-extrusion-systems-guide': AluminumExtrusionGuide,
  'why-t-slot-connections-fail': TSlotFailureAnalysis,
  't-slot-vs-anglelock-total-cost': CostComparison,
};

export default function BlogArticlePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen">
          <Container>
            <div className="max-w-4xl mx-auto py-20 text-center">
              <h1 className="font-['Barlow_Condensed'] text-4xl font-bold text-[#0A1628] mb-4">
                Article Not Found
              </h1>
              <p className="text-[#6B7C93] mb-8">The article you're looking for doesn't exist.</p>
              <Link href="/blog">
                <Button>Back to Blog</Button>
              </Link>
            </div>
          </Container>
        </main>
        <Footer />
      </>
    );
  }

  const ArticleContent = articleComponents[slug];

  const breadcrumbs = [
    { name: "Home", url: "https://controlleddynamicsinc.com" },
    { name: "Blog", url: "https://controlleddynamicsinc.com/blog" },
    { name: article.title, url: `https://controlleddynamicsinc.com/blog/${slug}` }
  ];

  const articleSchema = generateArticleSchema({
    headline: article.title,
    description: article.description,
    author: article.author,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate,
    image: article.image,
    url: `https://controlleddynamicsinc.com/blog/${slug}`
  });

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbs)} />
      <Header />
      <main className="pt-20">
        {/* Article Header */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-12">
          <Container>
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-[#C9A227] mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              <div className="mb-6">
                <span className="text-sm font-semibold text-[#C9A227] bg-[#C9A227]/10 px-4 py-2 rounded-full">
                  {article.category}
                </span>
              </div>

              <h1 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                {article.title}
              </h1>

              <p className="text-xl text-white/80 mb-8">
                {article.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-white/70">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{new Date(article.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{article.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </div>
              </div>

              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mt-6">
                  <Tag className="w-4 h-4 text-white/60" />
                  {article.tags.map(tag => (
                    <span key={tag} className="text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </Container>
        </section>

        {/* Article Content */}
        <section className="py-20 bg-white">
          <Container>
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="prose prose-lg max-w-none">
                {ArticleContent ? <ArticleContent /> : (
                  <div className="text-[#6B7C93]">
                    <p>Article content coming soon...</p>
                  </div>
                )}
              </div>

              {/* Inline Newsletter in Article */}
              <div className="mt-12">
                <NewsletterSignup
                  variant="card"
                  title="Get More Engineering Insights"
                  description="Join our newsletter for expert articles on aluminum framing, T-slot alternatives, and structural engineering best practices."
                />
              </div>
            </motion.div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Learn More About AngleLock?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Discover how AngleLock technology delivers 10x stronger connections, zero maintenance,
                and superior performance for mission-critical applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/compare/t-slot">
                  <Button size="lg">Compare vs T-Slot</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="ghost" size="lg">Request a Demo</Button>
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
