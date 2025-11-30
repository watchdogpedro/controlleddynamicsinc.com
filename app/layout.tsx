import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Controlled Dynamics Inc. | Advanced Industrial Structural Systems",
  description: "Mission-critical aluminum framing systems powered by breakthrough AngleLock technology. 10x stronger than T-slot, 50% faster assembly. Engineering tomorrow's foundations today.",
  keywords: ["aluminum framing", "industrial structures", "AngleLock technology", "aerospace", "life sciences", "semiconductor", "robotics", "modular systems"],
  authors: [{ name: "Controlled Dynamics Inc." }],
  openGraph: {
    title: "Controlled Dynamics Inc. | Advanced Industrial Structural Systems",
    description: "Engineering structures without limits. Mission-critical aluminum framing systems powered by breakthrough AngleLock technology.",
    url: "https://controlleddynamicsinc.com",
    siteName: "Controlled Dynamics Inc.",
    type: "website",
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
