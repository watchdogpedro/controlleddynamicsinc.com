import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Insights & Technical Guides | Controlled Dynamics Blog",
  description: "Expert insights on aluminum extrusion systems, T-slot framing, modular construction, and industrial structural engineering. Compare T-slot alternatives and learn best practices.",
  keywords: [
    "aluminum extrusion guide",
    "t-slot framing",
    "T-SLOT alternative",
    "modular framing systems",
    "industrial engineering",
    "structural systems",
    "mechanical locking",
    "vibration resistance",
    "manufacturing best practices"
  ],
  alternates: {
    canonical: "https://controlleddynamicsinc.com/blog",
  },
  openGraph: {
    title: "Engineering Insights & Technical Guides",
    description: "Expert insights on aluminum framing systems, modular construction, and structural engineering.",
    url: "https://controlleddynamicsinc.com/blog",
    siteName: "Controlled Dynamics Inc.",
    type: "website",
    locale: 'en_US',
    images: [
      {
        url: '/AngleLock Logo.png',
        width: 1200,
        height: 630,
        alt: 'Controlled Dynamics Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Engineering Insights & Technical Guides",
    description: "Expert articles on aluminum framing, T-slot alternatives, and structural engineering.",
    images: ['/AngleLock Logo.png'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
