const withMakeswift = require("@makeswift/runtime/next/plugin")();
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [{
      loader: '@next/font/google',
      options: {
        subsets: ['latin']
      }
    }]
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'picsum.photos'
    }]
  },
  reactStrictMode: true
};
module.exports = withMakeswift(nextConfig);