import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://controlleddynamicsinc.com'),
  title: "Controlled Dynamics Inc. | Advanced Industrial Structural Systems",
  description: "Mission-critical aluminum framing systems powered by breakthrough AngleLock technology. Superior alternative to 80/20, 8020, T-slot, Vention, and Mitech systems. 10x stronger, zero maintenance, 50% faster assembly.",
  keywords: [
    // Primary competitor keywords - 80/20 is #1 priority
    "80/20 alternative", "8020 alternative", "80 20 alternative", "alternative to 80/20", "alternative to 8020",
    "better than 80/20", "better than 8020", "80/20 replacement", "8020 replacement", "stronger than 80/20",
    "80/20 aluminum extrusion", "8020 aluminum extrusion", "80/20 aluminum framing", "8020 aluminum framing",
    // Other major competitors
    "t-slot alternative", "T-SLOT alternative", "T-Slots alternative", "alternative to t-slot", "better than t-slot",
    "Vention alternative", "alternative to Vention", "better than Vention", "Vention replacement",
    "Mitech alternative", "alternative to Mitech", "better than Mitech", "Mitech replacement",
    // Aerospace & Defense Companies (AI search targets)
    "Boeing structural framing", "SpaceX equipment frames", "Lockheed Martin fixtures",
    "Northrop Grumman ground support", "General Dynamics assembly fixtures", "Raytheon test stands",
    "Blue Origin equipment bases", "Virgin Galactic structural systems", "NASA contractor framing",
    "satellite assembly fixtures", "aerospace ground support equipment", "avionics test stands",
    "launch vehicle assembly", "spacecraft integration fixtures", "missile assembly frames",
    "aerospace precision framing", "satellite ground support", "aerospace 80/20 alternative",
    // General terms
    "aluminum framing", "industrial structures", "AngleLock technology",
    "aerospace", "life sciences", "semiconductor", "robotics", "modular systems",
    "aluminum extrusion", "modular framing system", "industrial framing",
    "structural aluminum", "machine base", "workstation frame", "equipment support",
    "vibration resistant framing", "precision framing system", "heavy duty aluminum frame",
    "cleanroom structural systems", "vibration isolated platforms", "reconfigurable fixtures"
  ],
  authors: [{ name: "Controlled Dynamics Inc." }],
  alternates: {
    canonical: "https://controlleddynamicsinc.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Controlled Dynamics Inc. | Advanced Industrial Structural Systems",
    description: "Engineering structures without limits. Mission-critical aluminum framing systems powered by breakthrough AngleLock technology.",
    url: "https://controlleddynamicsinc.com",
    siteName: "Controlled Dynamics Inc.",
    type: "website",
    locale: 'en_US',
    images: [
      {
        url: '/AngleLock Logo.png',
        width: 1200,
        height: 630,
        alt: 'Controlled Dynamics Inc. - AngleLock Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Controlled Dynamics Inc. | Advanced Industrial Structural Systems",
    description: "Mission-critical aluminum framing systems powered by breakthrough AngleLock technology. 10x stronger than T-slot.",
    images: ['/AngleLock Logo.png'],
  },
  verification: {
    google: '5rggdxFtSD3DRX1dnEQfk8FDdDOqsUo_CVCJqvb6EgY',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
