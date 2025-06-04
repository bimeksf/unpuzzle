import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'cz', 'fr', 'de', 'nl', 'es', 'it', 'pl', 'hu', 'ru'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
