'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import VideoModal from '@/components/ui/VideoModal';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Play, Headphones, ExternalLink } from 'lucide-react';
import { podcasts, podcastCategories, getPodcastThumbnail } from '@/lib/podcast-data';
import type { PodcastData } from '@/lib/podcast-data';

export default function PodcastsPage() {
  const [selectedPodcast, setSelectedPodcast] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All Episodes');

  const filteredPodcasts = selectedCategory === 'All Episodes'
    ? podcasts
    : podcasts.filter((podcast: PodcastData) => podcast.category === selectedCategory);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-[#0A1628] via-[#1E3A5F] to-[#0A1628]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <Container>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold tracking-wide text-[#C9A227] bg-[#C9A227]/10 rounded-full border border-[#C9A227]/20">
              <Headphones className="w-4 h-4" />
              PODCAST SERIES
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              AngleLock Technology Podcast
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Deep-dive audio discussions about AngleLock technology, engineering insights, industry applications,
              and real-world case studies. Perfect for listening on-the-go or while working.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#podcasts">
                <Button variant="primary">
                  <Headphones className="w-5 h-5" />
                  Listen Now
                </Button>
              </a>
              <a href="/technology">
                <Button variant="secondary">
                  Learn About AngleLock
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section id="podcasts" className="py-8 bg-[#0A1628]/50">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {podcastCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-[#C9A227] text-[#0A1628]'
                    : 'bg-[#1E3A5F] text-gray-300 hover:bg-[#2C4A6E] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Podcast Grid */}
      <section className="py-16">
        <Container>
          {filteredPodcasts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-400 mb-6">No podcast episodes found in this category.</p>
              <a
                href="https://www.youtube.com/@AngleLock"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C9A227] hover:text-[#E0B830] transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Visit AngleLock on YouTube
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPodcasts.map((podcast: PodcastData) => (
                <div
                  key={podcast.id}
                  className="group bg-[#1E3A5F]/30 rounded-lg overflow-hidden border border-[#2C4A6E] hover:border-[#C9A227]/50 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-[#0A1628] overflow-hidden">
                    <img
                      src={getPodcastThumbnail(podcast.youtubeId)}
                      alt={podcast.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 brightness-150 contrast-110"
                      onError={(e) => {
                        // Fallback to default quality if maxres doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.src = `https://img.youtube.com/vi/${podcast.youtubeId}/hqdefault.jpg`;
                      }}
                    />
                    <button
                      onClick={() => setSelectedPodcast(podcast.youtubeId)}
                      className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors"
                    >
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#C9A227] group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-[#0A1628] ml-1" fill="currentColor" />
                      </div>
                    </button>
                    {podcast.duration && (
                      <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                        {podcast.duration}
                      </div>
                    )}
                    <div className="absolute top-2 left-2 px-3 py-1 bg-[#C9A227] text-[#0A1628] text-xs font-bold rounded">
                      Episode {podcast.episode}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-semibold text-[#C9A227] uppercase tracking-wide">
                        {podcast.category}
                      </div>
                      <div className="text-xs text-gray-400">
                        {new Date(podcast.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9A227] transition-colors">
                      {podcast.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {podcast.description}
                    </p>
                    <Button
                      onClick={() => setSelectedPodcast(podcast.youtubeId)}
                      variant="secondary"
                      className="w-full"
                    >
                      <Headphones className="w-4 h-4" />
                      Listen Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Link to YouTube */}
          <div className="mt-12 text-center">
            <a
              href="https://www.youtube.com/@AngleLock"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C4A6E] text-white rounded-full hover:bg-[#1E3A5F] transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              View All Content on YouTube
            </a>
          </div>
        </Container>
      </section>

      {/* Why Podcasts Section */}
      <section className="py-20 bg-[#0A1628]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Listen to Our Podcasts?
              </h2>
              <p className="text-xl text-gray-300">
                Learn about AngleLock technology in an accessible, conversational format
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1E3A5F]/30 rounded-lg border border-[#2C4A6E] p-8">
                <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-[#0A1628]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Learn On-the-Go
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Listen while driving, exercising, or working. Get deep technical insights in an accessible audio format.
                </p>
              </div>

              <div className="bg-[#1E3A5F]/30 rounded-lg border border-[#2C4A6E] p-8">
                <div className="w-12 h-12 bg-[#C9A227] rounded-lg flex items-center justify-center mb-4">
                  <Play className="w-6 h-6 text-[#0A1628]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Comprehensive Coverage
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Longer-form discussions that go deeper than text or short videos, covering the full story of AngleLock technology.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#C9A227]/10 to-[#00A3E0]/10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Experience AngleLock Technology?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Request a consultation with our engineering team to discuss your specific application requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact">
                <Button variant="primary">
                  Request Information
                </Button>
              </a>
              <a href="/technology">
                <Button variant="secondary">
                  Learn More About AngleLock
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Podcast Modal */}
      {selectedPodcast && (
        <VideoModal
          isOpen={!!selectedPodcast}
          onClose={() => setSelectedPodcast(null)}
          videoId={selectedPodcast}
        />
      )}
      </div>
      <Footer />
    </>
  );
}
