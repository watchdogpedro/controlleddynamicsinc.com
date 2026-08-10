import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

export const metadata: Metadata = {
 metadataBase: new URL('https://controlleddynamicsinc.com'),
 title: "Controlled Dynamics Inc. | T-Slot Aluminum Extrusion Framing Systems | AngleLock Technology",
 description: "T-slot aluminum extrusion framing systems compatible with standard aluminum profiles — engineered stronger with AngleLock technology. The superior alternative for aerospace, semiconductor, robotics, and industrial applications. 10x stronger, zero maintenance, 50% faster assembly.",
 keywords: [
 // T-slot & aluminum extrusion core terms (what people search)
 "T-slot aluminum extrusion", "T slot aluminum framing", "aluminum extrusion framing system",
 "modular aluminum extrusion", "aluminum T-slot framing", "T-slot framing system",
 "aluminum profile framing", "aluminum structure framing", "T-slot aluminum structure",
 "aluminum extrusion alternative", "T-slot alternative", "8020 alternative",
 "8020 compatible", "8020 framing alternative", "modular aluminum structures",
 "aluminum extrusion system", "T-slot compatible", "aluminum framing system",
 "structural aluminum extrusion", "industrial aluminum framing", "aluminum framing profiles",
 // Core technology
 "AngleLock technology", "mechanical locking", "aluminum framing", "industrial structures",
 // Applications
 "aerospace", "life sciences", "semiconductor", "robotics", "modular systems",
 "modular framing system", "industrial framing",
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
 title: "AngleLock — The Breakthrough Beyond T-Slot",
 description: "Mechanically locked aluminum framing that goes beyond traditional T-slot — 10× stronger, zero maintenance, 50% faster assembly. Engineered for aerospace, semiconductor, life sciences, and robotics.",
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
 title: "AngleLock — The Breakthrough Beyond T-Slot",
 description: "Mechanically locked aluminum framing that goes beyond traditional T-slot — 10× stronger, zero maintenance, 50% faster assembly.",
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
