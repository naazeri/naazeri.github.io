import { getSiteData, locales } from '@/lib/i18n/config';

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = getSiteData('en').siteConfig.url;

  const homePages = locales.map((locale) => ({
    url: `${baseUrl}/${locale}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: locale === 'en' ? 1 : 0.9,
    alternates: {
      languages: Object.fromEntries(
        locales.map((targetLocale) => [
          targetLocale,
          `${baseUrl}/${targetLocale}/`,
        ])
      ),
    },
  }));

  const projectPages = locales.flatMap((locale) =>
    getSiteData(locale).portfolioData.projects.map((project) => ({
      url: `${baseUrl}/${locale}/project/${project.id}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((targetLocale) => [
            targetLocale,
            `${baseUrl}/${targetLocale}/project/${project.id}/`,
          ])
        ),
      },
    }))
  );

  return [...homePages, ...projectPages];
}
