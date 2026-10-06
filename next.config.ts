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
  // Renamed and moved pages (October handoff). statusCode, not `permanent`,
  // so these answer with a true 301 rather than Next's default 308.
  async redirects() {
    return [
      { source: "/the-movement", destination: "/why-wild-wanderers", statusCode: 301 },
      { source: "/fitness/offers", destination: "/fitness/training-options", statusCode: 301 },
      { source: "/saturday", destination: "/fitness/saturday", statusCode: 301 },
    ];
  },
};

export default nextConfig;
