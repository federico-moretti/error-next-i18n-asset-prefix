/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: '/custom',
  async rewrites() {
    return [
      { source: '/custom/_next/:path*', destination: '/_next/:path*' },
      { source: '/custom/api/:path*', destination: '/api/:path*' },
    ];
  },
  i18n: { locales: ['en', 'it'], defaultLocale: 'en' },
};

module.exports = nextConfig;
