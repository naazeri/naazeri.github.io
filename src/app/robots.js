import { getSiteData } from '@/lib/i18n/config';

export const dynamic = 'force-static';

export default function robots() {
  const baseUrl = getSiteData('en').siteConfig.url;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
