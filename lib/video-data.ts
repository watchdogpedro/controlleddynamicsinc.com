/**
 * AngleLock YouTube Video Library
 *
 * To add a new video:
 * 1. Go to https://www.youtube.com/@AngleLock
 * 2. Click on a video
 * 3. Copy the video ID from the URL (e.g., https://youtube.com/watch?v=ABC123 -> ABC123)
 * 4. Add a new entry to the videos array below
 *
 * Video thumbnail will automatically be fetched from:
 * https://img.youtube.com/vi/{videoId}/maxresdefault.jpg
 */

export interface VideoData {
  id: string;
  title: string;
  description: string;
  youtubeId: string;  // The ID from YouTube URL
  category: string;
  duration?: string;  // Optional: e.g., "5:30"
}

export const videoCategories = [
  'All Videos',
  'Product Overview',
  'Technical Deep Dive',
  'Assembly & Installation',
  'Applications & Case Studies',
  'Comparison Videos',
  'Customer Testimonials'
];

/**
 * INSTRUCTIONS TO UPDATE VIDEOS:
 *
 * 1. Visit: https://www.youtube.com/@AngleLock/videos
 * 2. For each video you want to add:
 *    - Click the video
 *    - Copy the ID from URL (the part after "watch?v=")
 *    - Copy the title from the video
 *    - Copy the description
 *    - Choose appropriate category
 *
 * 3. Add entries below in this format:
 *
 * {
 *   id: '1',
 *   title: 'Your Video Title',
 *   description: 'Your video description text',
 *   youtubeId: 'ABC123XYZ',  // From YouTube URL
 *   category: 'Product Overview',
 *   duration: '5:30'  // Optional
 * }
 */

export const videos: VideoData[] = [
  {
    id: '1',
    title: 'AngleLock Technology Overview',
    description: 'Comprehensive introduction to AngleLock\'s revolutionary multi-plane mechanical locking system and how it outperforms traditional T-slot connections.',
    youtubeId: 'XC9lc3I06sM',
    category: 'Product Overview'
  },
  {
    id: '2',
    title: 'AngleLock Assembly Demonstration',
    description: 'Step-by-step demonstration of how AngleLock\'s patented fastening system creates superior connections that rival welded steel strength.',
    youtubeId: '8tKS1pYyuBU',
    category: 'Assembly & Installation'
  },
  {
    id: '3',
    title: 'AngleLock vs T-Slot Comparison',
    description: 'Watch real-world testing demonstrating the superior strength, vibration resistance, and long-term reliability of AngleLock connections compared to traditional T-slot systems.',
    youtubeId: 'xnIh8EnWrZY',
    category: 'Comparison Videos'
  },
  {
    id: '4',
    title: 'Five-Plane Locking Mechanism',
    description: 'Detailed technical walkthrough of the five-plane locking process that eliminates pivot points and creates mechanically bonded connections.',
    youtubeId: 'ceh46FNmN9k',
    category: 'Technical Deep Dive'
  },
  {
    id: '5',
    title: 'AngleLock Application Examples',
    description: 'See how AngleLock technology is used in demanding industrial applications including aerospace, robotics, semiconductor, and life sciences.',
    youtubeId: 'VKzNnZ9x91s',
    category: 'Applications & Case Studies'
  },
  {
    id: '6',
    title: 'AngleLock Structural Testing',
    description: 'Watch load testing and vibration analysis demonstrating AngleLock\'s 10x strength advantage and zero-maintenance performance.',
    youtubeId: 'bVsa7KVHFjE',
    category: 'Technical Deep Dive'
  },
  {
    id: '7',
    title: 'AngleLock Installation Guide',
    description: 'Learn how to assemble AngleLock structures 50% faster than traditional methods with our comprehensive installation guide.',
    youtubeId: 'EdSrMLpjiXE',
    category: 'Assembly & Installation'
  },
  {
    id: '8',
    title: 'AngleLock Product Features',
    description: 'Explore the key features and benefits of AngleLock aluminum framing systems for precision engineering applications.',
    youtubeId: 'xk0k2WJvEdo',
    category: 'Product Overview'
  }
];

/**
 * Helper function to get video thumbnail URL
 */
export function getVideoThumbnail(youtubeId: string, quality: 'default' | 'hq' | 'mq' | 'sd' | 'maxres' = 'maxres'): string {
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
