'use client';

import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { blogArticles } from '@/lib/blog-data/articles';
import NewsletterSignup from '@/components/newsletter/NewsletterSignup';

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] py-20">
          <Container>
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6">
                <div className="w-24 h-24 bg-[#C9A227] rounded-2xl flex items-center justify-center mx-auto">
                  <BookOpen className="w-12 h-12 text-[#0A1628]" />
                </div>
              </div>
              <h1 className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                Engineering Insights
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Technical guides, industry analysis, and expert insights on aluminum framing systems,
                modular construction, and structural engineering.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Newsletter Signup */}
        <section className="py-12 bg-[#F4F6F8]">
          <Container>
            <NewsletterSignup
              variant="inline"
              title="Never Miss an Engineering Insight"
              description="Get expert articles on aluminum framing systems, T-slot alternatives, and structural engineering delivered to your inbox. Join 500+ engineers and manufacturers."
            />
          </Container>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogArticles.map((article, idx) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Link href={`/blog/${article.slug}`}>
                    <div className="bg-[#F4F6F8] rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                      {article.image && (
                        <div className="h-48 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] relative overflow-hidden group">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:brightness-125 transition-all duration-300"
                          />
                        </div>
                      )}
                      {!article.image && (
                        <div className="h-48 bg-gradient-to-br from-[#0A1628] to-[#1E3A5F] flex items-center justify-center">
                          <BookOpen className="w-16 h-16 text-[#C9A227]" />
                        </div>
                      )}

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold text-[#C9A227] bg-[#C9A227]/10 px-3 py-1 rounded-full">
                            {article.category}
                          </span>
                        </div>

                        <h2 className="font-['Barlow_Condensed'] text-2xl font-bold text-[#0A1628] mb-3 hover:text-[#C9A227] transition-colors">
                          {article.title}
                        </h2>

                        <p className="text-[#6B7C93] text-sm mb-4 flex-1">
                          {article.description}
                        </p>

                        <div className="flex items-center justify-between text-sm text-[#6B7C93] pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(article.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                        </div>

                        <div className="mt-4">
                          <Button variant="ghost" className="w-full group">
                            Read Article
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0A1628]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Experience AngleLock?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Discover how AngleLock technology can revolutionize your structural systems with
                superior strength, zero maintenance, and unmatched reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg">Request a Demo</Button>
                </Link>
                <Link href="/compare/t-slot">
                  <Button variant="ghost" size="lg">Compare vs T-Slot</Button>
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
