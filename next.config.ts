import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "ac.goit.global" }],
  },
  async headers() {
    return [
      {
        source: "/cars",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=300, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
