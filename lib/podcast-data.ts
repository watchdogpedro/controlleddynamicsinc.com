/**
 * AngleLock Podcast Library
 *
 * To add a new podcast:
 * 1. Upload your podcast to YouTube
 * 2. Copy the video ID from the URL (e.g., https://youtube.com/watch?v=ABC123 -> ABC123)
 * 3. Add a new entry to the podcasts array below
 */

export interface PodcastData {
  id: string;
  title: string;
  description: string;
  youtubeId: string;  // The ID from YouTube URL
  category: string;
  duration?: string;  // Optional: e.g., "14:38"
  episode: number;
  date: string;  // Publication date
}

export const podcastCategories = [
  'All Episodes',
  'Technology Overview',
  'Industry Applications',
  'Technical Deep Dive',
  'Customer Stories'
];

/**
 * INSTRUCTIONS TO UPDATE PODCASTS:
 *
 * 1. Upload your podcast audio/video to YouTube
 * 2. Copy the ID from URL (the part after "watch?v=" or "youtu.be/")
 * 3. Add entries below in this format:
 *
 * {
 *   id: '1',
 *   title: 'Your Podcast Title',
 *   description: 'Your podcast description text',
 *   youtubeId: 'ABC123XYZ',  // From YouTube URL
 *   category: 'Technology Overview',
 *   duration: '14:38',
 *   episode: 1,
 *   date: '2025-12-01'
 * }
 */

export const podcasts: PodcastData[] = [
  {
    id: '1',
    title: 'AngleLock Technology Overview - Complete Guide',
    description: 'Learn about AngleLock technology - the revolutionary 5-plane mechanical locking system that\'s 10x stronger than traditional T-slot framing. This comprehensive overview covers how the AngleLock system works, key advantages over traditional framing systems, real-world applications across industries, and technical specifications and capabilities.',
    youtubeId: 'e7SCxG8Kn4k',
    category: 'Technology Overview',
    duration: '14:38',
    episode: 1,
    date: '2025-12-01'
  },
  {
    id: '2',
    title: 'Why Mechanical Locks Beat Friction',
    description: 'Discover why mechanical locks outperform friction-based connections in demanding industrial applications. Explore the fundamental problems with friction-based T-slot systems, how vibration destroys friction connections but strengthens mechanical locks, the physics behind AngleLock\'s 5-plane mechanical anchoring system, and real-world applications in precision equipment, robotics, and cleanrooms.',
    youtubeId: 'vd_YqTbLYlc',
    category: 'Technical Deep Dive',
    duration: '13:32',
    episode: 2,
    date: '2025-12-05'
  },
  {
    id: '3',
    title: '10x Stronger Than Traditional T-Slot Systems',
    description: 'How does AngleLock achieve 10x the strength of traditional aluminum framing systems? Learn about the strength advantage of mechanical locks vs. friction, how AngleLock handles heavy loads with lighter profiles, applications in aerospace, semiconductor, and heavy equipment, and why engineers can design with confidence using structural performance that rivals welded steel.',
    youtubeId: 'U2TxI7mL_Uc',
    category: 'Technology Overview',
    duration: '13:41',
    episode: 3,
    date: '2025-12-05'
  }
];

/**
 * Helper function to get podcast thumbnail URL from YouTube
 */
export function getPodcastThumbnail(youtubeId: string, quality: 'default' | 'hq' | 'mq' | 'sd' | 'maxres' = 'sd'): string {
  const qualityMap = {
    'default': 'default',
    'mq': 'mqdefault',
    'hq': 'hqdefault',
    'sd': 'sddefault',
    'maxres': 'maxresdefault'
  };

  return `https://img.youtube.com/vi/${youtubeId}/${qualityMap[quality]}.jpg`;
}

/**
 * Helper function to get YouTube embed URL
 */
export function getYouTubeEmbedUrl(youtubeId: string): string {
  return `https://www.youtube.com/embed/${youtubeId}`;
}

/**
 * Helper function to get YouTube watch URL
 */
export function getYouTubeWatchUrl(youtubeId: string): string {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}
