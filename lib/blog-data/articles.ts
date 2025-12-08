export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate?: string;
  category: string;
  tags: string[];
  readTime: string;
  featured: boolean;
  image?: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'aluminum-extrusion-systems-guide',
    title: 'The Complete Guide to Aluminum Extrusion Systems in 2025',
    description: 'Everything you need to know about aluminum extrusion systems, T-slot framing, and next-generation mechanical locking technology for industrial applications.',
    author: 'Controlled Dynamics Engineering Team',
    publishedDate: '2025-12-06',
    modifiedDate: '2025-12-06',
    category: 'Technical Guide',
    tags: ['aluminum extrusion', 'T-SLOT', 't-slot', 't-slot aluminum', 'modular framing', 'industrial equipment', 'mechanical locking', 'aluminum framing systems', '6061 aluminum', '6105 aluminum'],
    readTime: '18 min read',
    featured: true,
    image: '/AngleLock Controlled Dynamics Tank.jpg'
  },
  {
    slug: 'why-t-slot-connections-fail',
    title: 'Why T-Slot Connections Fail Under Vibration (And What to Do About It)',
    description: 'Understanding the physics behind T-slot connection failure and exploring superior alternatives for vibration-prone applications.',
    author: 'Controlled Dynamics Engineering Team',
    publishedDate: '2025-12-06',
    modifiedDate: '2025-12-06',
    category: 'Technical Analysis',
    tags: ['t-slot', 't-slot aluminum', 'vibration', 'mechanical engineering', 'connection failure', 'maintenance', 'T-SLOT', 'aluminum framing', 'mechanical locking', 'self-tightening'],
    readTime: '16 min read',
    featured: true,
    image: '/Vibration table.png'
  },
  {
    slug: 't-slot-vs-anglelock-total-cost',
    title: 'T-Slot vs AngleLock: True Total Cost of Ownership Analysis',
    description: 'A detailed breakdown comparing initial costs, maintenance expenses, downtime, and long-term value between T-slot and mechanical locking systems.',
    author: 'Controlled Dynamics Engineering Team',
    publishedDate: '2025-12-06',
    modifiedDate: '2025-12-06',
    category: 'Cost Analysis',
    tags: ['T-SLOT', 'cost comparison', 'ROI', 'total cost of ownership', 'aluminum framing', 't-slot', 'mechanical locking', 'TCO analysis', 'aluminum extrusion'],
    readTime: '15 min read',
    featured: true,
    image: '/cost savings.png'
  }
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find(article => article.slug === slug);
}

export function getFeaturedArticles(): BlogArticle[] {
  return blogArticles.filter(article => article.featured);
}

export function getArticlesByCategory(category: string): BlogArticle[] {
  return blogArticles.filter(article => article.category === category);
}

export function getArticlesByTag(tag: string): BlogArticle[] {
  return blogArticles.filter(article => article.tags.includes(tag));
}
