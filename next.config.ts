import type { NextConfig } from 'next';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = withBundleAnalyzer({
  /* config options here */
  experimental: {
    optimizePackageImports: ['@a-peak-works/untitledui-icons'],
    // turbo: {
    //   treeShaking: true,
    // },
  },
});

export default nextConfig;
