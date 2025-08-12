/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optimisations de performance
  experimental: {
    optimizePackageImports: ['@fortawesome/react-fontawesome', '@fortawesome/fontawesome-svg-core'],
  },
  // Optimisation du build
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimisation des images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
      // Configuration pour Strapi Cloud
      {
        protocol: 'https',
        hostname: '*.strapiapp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.strapi.io',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig; 