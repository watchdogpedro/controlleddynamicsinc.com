'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import VideoModal from '@/components/ui/VideoModal';
import { Play, FileText, Download, ExternalLink } from 'lucide-react';
import { videos, videoCategories, getVideoThumbnail } from '@/lib/video-data';
import type { VideoData } from '@/lib/video-data';

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All Videos');

  const filteredVideos = selectedCategory === 'All Videos'
    ? videos
    : videos.filter((video: VideoData) => video.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A1628] via-[#1E3A5F] to-[#0A1628]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <Container>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold tracking-wide text-[#C9A227] bg-[#C9A227]/10 rounded-full border border-[#C9A227]/20">
              <Play className="w-4 h-4" />
              VIDEO LIBRARY
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              AngleLock Product Videos
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Explore our comprehensive video collection showcasing the revolutionary AngleLock technology,
              technical demonstrations, assembly guides, and real-world applications across demanding industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#videos">
                <Button variant="primary">
                  Watch Videos
                </Button>
              </a>
              <a href="#whitepaper">
                <Button variant="secondary">
                  <FileText className="w-5 h-5" />
                  Read Technical Whitepaper
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section id="videos" className="py-8 bg-[#0A1628]/50">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {videoCategories.map((category) => (
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

      {/* Video Grid */}
      <section className="py-16">
        <Container>
          {filteredVideos.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-400 mb-6">No videos found in this category.</p>
              <a
                href="https://www.youtube.com/@AngleLock/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C9A227] hover:text-[#E0B830] transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Visit AngleLock YouTube Channel
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video: VideoData) => (
                <div
                  key={video.id}
                  className="group bg-[#1E3A5F]/30 rounded-lg overflow-hidden border border-[#2C4A6E] hover:border-[#C9A227]/50 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-[#0A1628] overflow-hidden">
                    <img
                      src={getVideoThumbnail(video.youtubeId)}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 brightness-110"
                      onError={(e) => {
                        // Fallback to default quality if maxres doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                      }}
                    />
                    <button
                      onClick={() => setSelectedVideo(video.youtubeId)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors"
                    >
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#C9A227] group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-[#0A1628] ml-1" fill="currentColor" />
                      </div>
                    </button>
                    {video.duration && (
                      <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 text-white text-xs rounded">
                        {video.duration}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-xs font-semibold text-[#C9A227] mb-2 uppercase tracking-wide">
                      {video.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#C9A227] transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {video.description}
                    </p>
                    <Button
                      onClick={() => setSelectedVideo(video.youtubeId)}
                      variant="secondary"
                      className="w-full"
                    >
                      <Play className="w-4 h-4" />
                      Watch Video
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Link to YouTube Channel */}
          <div className="mt-12 text-center">
            <a
              href="https://www.youtube.com/@AngleLock/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C4A6E] text-white rounded-full hover:bg-[#1E3A5F] transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              View All Videos on YouTube
            </a>
          </div>
        </Container>
      </section>

      {/* Technical Whitepaper Section */}
      <section id="whitepaper" className="py-20 bg-[#0A1628]">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold tracking-wide text-[#C9A227] bg-[#C9A227]/10 rounded-full border border-[#C9A227]/20">
                <FileText className="w-4 h-4" />
                TECHNICAL WHITEPAPER
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Technical Analysis of Connection Technologies
              </h2>
              <p className="text-xl text-gray-300">
                AngleLock vs. Traditional T-Slot Systems
              </p>
            </div>

            {/* Whitepaper Content */}
            <div className="bg-[#1E3A5F]/30 rounded-lg border border-[#2C4A6E] p-8 md:p-12 space-y-8">

              {/* Section 1 */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  1.0 Introduction: The Critical Role of Connection Integrity
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Modular aluminum framing systems are foundational components in a vast array of modern industrial settings,
                  from automated manufacturing lines to aerospace assemblies. In these demanding environments, the strategic
                  importance of structural integrity, precision, and long-term reliability cannot be overstated. The performance
                  of a multi-million-dollar robotic cell or a critical work platform is ultimately dependent on the integrity
                  of its smallest connections.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  2.0 Traditional T-Slot Fastening System
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The core mechanism of a T-slot system is fundamentally reliant on friction. It employs a high-torque,
                  oversized fastener to generate a clamping force between components, creating frictional resistance to movement.
                  This single-plane friction model creates "pivot points" between connected profiles—a central design flaw
                  that compromises stability under non-static conditions.
                </p>
                <div className="bg-[#0A1628] rounded-lg p-6 border-l-4 border-red-500">
                  <h4 className="text-lg font-bold text-white mb-3">Consequences of Pivot Points:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Movement and Slippage:</strong> Dynamic forces overcome static friction, causing component movement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Misalignment and Loosening:</strong> Microscopic movement causes fasteners to loosen over time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span><strong>Profile Distortion:</strong> High torque measurably distorts profiles beyond extrusion tolerances</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  3.0 The AngleLock System: Multi-Plane Mechanical Locking
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The AngleLock system was conceived as a direct engineering response to T-slot weaknesses. Instead of
                  overwhelming dynamic forces with friction, it employs a patented mechanism that eliminates pivot points entirely
                  through a sequential, multi-stage engagement across five distinct planes.
                </p>
                <div className="bg-[#0A1628] rounded-lg p-6 border-l-4 border-[#C9A227]">
                  <h4 className="text-lg font-bold text-white mb-3">Five-Plane Locking Process:</h4>
                  <ol className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#C9A227] font-bold mr-3">1-2.</span>
                      <span><strong>Planes 1 & 2:</strong> Specialized nut anchors in V-shaped profile area, preventing rotation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C9A227] font-bold mr-3">3.</span>
                      <span><strong>Plane 3:</strong> Nut rotates up and locks into opposite profile side</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C9A227] font-bold mr-3">4.</span>
                      <span><strong>Plane 4:</strong> Upper bracket slides into precision-aligned position with profile</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C9A227] font-bold mr-3">5.</span>
                      <span><strong>Plane 5:</strong> Appropriately-sized bolt stretches, creating spring tension that completes the mechanical lock</span>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Comparison Table */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  4.0 Comparative Performance Analysis
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#0A1628]">
                        <th className="p-4 text-[#C9A227] font-bold border border-[#2C4A6E]">Performance Metric</th>
                        <th className="p-4 text-[#C9A227] font-bold border border-[#2C4A6E]">Traditional T-Slot</th>
                        <th className="p-4 text-[#C9A227] font-bold border border-[#2C4A6E]">AngleLock System</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="hover:bg-[#1E3A5F]/20">
                        <td className="p-4 border border-[#2C4A6E] font-semibold">Core Connection Principle</td>
                        <td className="p-4 border border-[#2C4A6E]">Single-plane frictional force via high-torque, oversized fastener</td>
                        <td className="p-4 border border-[#2C4A6E]">Multi-plane mechanical lock creating bonded connection</td>
                      </tr>
                      <tr className="hover:bg-[#1E3A5F]/20">
                        <td className="p-4 border border-[#2C4A6E] font-semibold">Structural Feature</td>
                        <td className="p-4 border border-[#2C4A6E]">Creates pivot points between components</td>
                        <td className="p-4 border border-[#2C4A6E]">Eliminates all pivot points via multi-plane anchoring</td>
                      </tr>
                      <tr className="hover:bg-[#1E3A5F]/20">
                        <td className="p-4 border border-[#2C4A6E] font-semibold">Dynamic Load Performance</td>
                        <td className="p-4 border border-[#2C4A6E]">Prone to movement, slippage, misalignment, and loosening</td>
                        <td className="p-4 border border-[#2C4A6E]">Stretched bolt acts as spring to maintain alignment and resist separation</td>
                      </tr>
                      <tr className="hover:bg-[#1E3A5F]/20">
                        <td className="p-4 border border-[#2C4A6E] font-semibold">Long-Term Reliability</td>
                        <td className="p-4 border border-[#2C4A6E]">Susceptible to alignment loss over time, especially with vibration</td>
                        <td className="p-4 border border-[#2C4A6E]">Long-term predictability—assemblies don't loosen or misalign</td>
                      </tr>
                      <tr className="hover:bg-[#1E3A5F]/20">
                        <td className="p-4 border border-[#2C4A6E] font-semibold">Profile Distortion Risk</td>
                        <td className="p-4 border border-[#2C4A6E]">High torque measurably distorts profiles beyond tolerances</td>
                        <td className="p-4 border border-[#2C4A6E]">Appropriately-sized bolt mitigates distortion risk</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Empirical Evidence */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  5.0 Empirical Evidence: Precision in Demanding Environments
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#0A1628] rounded-lg p-6 border border-[#2C4A6E]">
                    <h4 className="text-lg font-bold text-[#C9A227] mb-3">Robotic Mounting</h4>
                    <p className="text-4xl font-bold text-white mb-2">±5 microns</p>
                    <p className="text-gray-300">Repeatable positioning accuracy in robot mount applications</p>
                  </div>
                  <div className="bg-[#0A1628] rounded-lg p-6 border border-[#2C4A6E]">
                    <h4 className="text-lg font-bold text-[#C9A227] mb-3">Docking Cart Accuracy</h4>
                    <p className="text-4xl font-bold text-white mb-2">±0.003"</p>
                    <p className="text-gray-300">Repeatable accuracy with variance only from cart wheels, not locking mechanism</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mt-6">
                  These precision levels are mission-critical in aerospace, automation, material handling, and custom applications.
                  The system's vibration resistance makes it ideal for environments with constant vibration—such as industrial compressor
                  mounting—where traditional friction-based fasteners inevitably fail.
                </p>
              </div>

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-[#C9A227]/10 to-[#C9A227]/5 rounded-lg p-8 border border-[#C9A227]/30">
                <h3 className="text-2xl font-bold text-white mb-4">
                  6.0 Conclusion: Superior Structural Integrity
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The T-slot system's reliance on single-plane friction introduces inherent, predictable failure modes under
                  dynamic conditions. Pivot points guarantee susceptibility to slippage and loosening—an unacceptable risk
                  in high-consequence applications where precision and structural integrity are paramount.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  In stark contrast, the AngleLock system represents advanced engineering. Its multi-plane mechanical lock
                  systematically eliminates pivot points by creating a "bonded connection" where tensioned bolts act as springs,
                  actively maintaining alignment and resisting separation.
                </p>
                <p className="text-white font-semibold text-lg">
                  For demanding industrial applications where unwavering precision and absolute structural integrity are
                  non-negotiable, AngleLock technology is not merely an alternative, but a fundamental upgrade—providing
                  engineering certainty required to mitigate operational risk and guarantee long-term asset performance.
                </p>
              </div>

              {/* Download CTA */}
              <div className="text-center pt-8">
                <Button variant="primary" className="inline-flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Full Whitepaper (PDF)
                </Button>
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

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoId={selectedVideo}
        />
      )}
    </div>
  );
}
