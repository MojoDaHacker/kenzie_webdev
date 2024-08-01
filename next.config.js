const { withNextVideo } = require('next-video/process')

const withMakeswift = require("@makeswift/runtime/next/plugin")();
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'picsum.photos'
    }]
  },
  reactStrictMode: true
};
module.exports = withMakeswift(nextConfig);
