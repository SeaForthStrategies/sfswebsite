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
        source: '/portfolio',
        destination: '/ventures',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/approach',
        permanent: true,
      },
      {
        source: '/services/:path*',
        destination: '/approach',
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
