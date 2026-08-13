import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/pricing',
        destination: '/approach',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/studio',
        permanent: true,
      },
      {
        source: '/services/:path*',
        destination: '/studio',
        permanent: true,
      },
      {
        source: '/how-we-build',
        destination: '/approach',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
