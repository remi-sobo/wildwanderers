import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project. A stray lockfile higher up the
  // tree otherwise makes Next infer the wrong root.
  turbopack: {
    root: __dirname,
  },
  // Serve the hero (and every optimized image) as AVIF first, WebP fallback.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
