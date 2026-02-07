import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

export const metadata: Metadata = {
 metadataBase: new URL('https://controlleddynamicsinc.com'),
 title: "Controlled Dynamics Inc. | Advanced Industrial Structural Systems",
 description: "Mission-critical aluminum framing systems powered by breakthrough AngleLock technology. Superior mechanical locking system with 10x strength, zero maintenance, and 50% faster assembly for industrial applications.",
 keywords: [
 // Core technology
 "AngleLock technology", "mechanical locking", "aluminum framing", "industrial structures",
 // Applications
 "aerospace", "life sciences", "semiconductor", "robotics", "modular systems",
 "aluminum extrusion", "modular framing system", "industrial framing",
 "structural aluminum", "machine base", "workstation frame", "equipment support",
 "vibration resistant framing", "precision framing system", "heavy duty aluminum frame",
 "cleanroom structural systems", "vibration isolated platforms", "reconfigurable fixtures",
 // Aerospace & Defense
 "Boeing structural framing", "SpaceX equipment frames", "Lockheed Martin fixtures",
 "Northrop Grumman ground support", "General Dynamics assembly fixtures", "Raytheon test stands",
 "Blue Origin equipment bases", "Virgin Galactic structural systems", "NASA contractor framing",
 "satellite assembly fixtures", "aerospace ground support equipment", "avionics test stands",
 "launch vehicle assembly", "spacecraft integration fixtures", "missile assembly frames",
 "aerospace precision framing", "satellite ground support"
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
 description: "Mission-critical aluminum framing systems powered by breakthrough AngleLock technology. 10x stronger with mechanical locking.",
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
 <GoogleAnalytics gaId="G-GVLF70MCN3" />
 {children}
 </body>
 </html>
 );
}
