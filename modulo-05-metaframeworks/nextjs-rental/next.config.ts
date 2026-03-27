import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/images/:path*",
        destination: "http://localhost:3001/images/:path*",
      },
    ];
  },
};

export default nextConfig;
