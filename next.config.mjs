/** @type {import('next').NextConfig} */

// On GitHub Pages the site is served from /<repo>/, so we need a base path.
// Locally PAGES_BASE_PATH is unset -> base is "" and dev/preview work at root.
const base = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  output: "export", // fully static site (no server) for GitHub Pages
  images: { unoptimized: true },
  basePath: base || undefined,
  assetPrefix: base || undefined,
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: base },
  reactStrictMode: true,
};

export default nextConfig;
