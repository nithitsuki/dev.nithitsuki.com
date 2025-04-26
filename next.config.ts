import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  assetPrefix: '/dev.nithitsuki.com', // <-- important for GitHub Pages
  basePath:    '/dev.nithitsuki.com',    // <-- important for GitHub Pages
};

export default nextConfig;