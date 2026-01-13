import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Remove output: "export" for Vercel deployment
  // output: "export" is only for static site generation
  // Remove assetPrefix for Vercel
};

export default nextConfig;
