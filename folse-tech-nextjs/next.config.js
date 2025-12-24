const nextConfig = {
  // Optimize for production
  compress: true,
  productionBrowserSourceMaps: false,
  swcMinify: true,
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  // Performance
  poweredByHeader: false,
  onDemandEntries: {
    maxInactiveAge: 15 * 1000,
    pagesBufferLength: 2
  },
  // Amplify compatibility
  output: 'standalone',
};

module.exports = nextConfig;