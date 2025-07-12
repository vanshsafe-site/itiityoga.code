/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ico|png|svg|jpg|jpeg|gif)$/,
      type: 'asset/resource',
    });
    return config;
  },
  // Add proper asset handling
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
}

module.exports = nextConfig 