import type { NextConfig } from "next";


const NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos', // ডামি ইমেজের জন্য
        port: '',
        pathname: '/**',
      },
    ],
  },
  // অন্যান্য কনফিগারেশন
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = NextConfig;