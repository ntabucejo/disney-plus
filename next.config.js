/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  images: {
    domains: [
      "image.tmdb.org",
      "img1.hotstarext.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
