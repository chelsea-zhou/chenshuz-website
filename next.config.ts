import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  optimizePackageImports: [
    '@mantine/core'
  ],
};

export default nextConfig;
