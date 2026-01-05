const { withNextVideo } = require("next-video/process");

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects:  () => [
    {
      source: "/landing",
      destination: "/headshots",
      permanent: true
    },
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  reactStrictMode: true,
};
module.exports = nextConfig;
