import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Controlled Dynamics Inc. | Precision Engineering & Motion Control",
  description: "Advanced motion control solutions and precision engineering services for industrial applications. Expert engineering excellence and innovative technology.",
  keywords: ["motion control", "precision engineering", "industrial automation", "control systems"],
  authors: [{ name: "Controlled Dynamics Inc." }],
  openGraph: {
    title: "Controlled Dynamics Inc.",
    description: "Precision Engineering & Advanced Motion Control Solutions",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
