/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: [
      "github.com",
      "avatars.githubusercontent.com",
      "user-images.githubusercontent.com",
      "cdn.nhcarrigan.com",
    ],
  },
};

module.exports = nextConfig;
