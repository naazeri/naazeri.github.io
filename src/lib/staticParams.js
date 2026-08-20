import { getSiteData, locales } from './i18n/config';

export function getLocaleStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function getProjectStaticParams() {
  return locales.flatMap((locale) =>
    getSiteData(locale).portfolioData.projects.map((project) => ({
      locale,
      slug: project.id.toString(),
    }))
  );
}
