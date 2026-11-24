import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Files the OG image routes read from disk; automatic tracing misses them for most routes
  outputFileTracingIncludes: {
    '/**/opengraph-image': [
      './assets/fonts/*.ttf',
      './assets/og/*',
      './public/images/hockey-academy.jpg',
      './public/images/campus-coaches-players.jpg',
      './public/images/campus-group-photo.jpg',
    ],
  },
}

export default withNextIntl(nextConfig);
