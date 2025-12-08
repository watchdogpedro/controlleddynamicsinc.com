import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/compare/8020',
        destination: '/compare/t-slot',
        permanent: true,
      },
      {
        source: '/blog/8020-vs-anglelock-total-cost',
        destination: '/blog/t-slot-vs-anglelock-total-cost',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
