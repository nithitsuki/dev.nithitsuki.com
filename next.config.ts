import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // assetPrefix: '/dev.nithitsuki.com',
  // basePath:    '/dev.nithitsuki.com',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;