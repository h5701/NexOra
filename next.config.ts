import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow HMR when tunneling dev server through ngrok.
  allowedDevOrigins: ["miquel-euphoric-henry.ngrok-free.dev"],
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
