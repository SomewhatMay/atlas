import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // Allow images from all domains
      },
    ],
  },
  reactStrictMode: true,
  assetPrefix: isProd ? '/atlas/' : '',
  basePath: isProd ? '/atlas' : '',
  output: 'export'
};

export default nextConfig;