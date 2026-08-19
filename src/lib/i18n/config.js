import { enSiteData } from './en';
import { faSiteData } from './fa';

export const locales = ['en', 'fa'];
export const defaultLocale = 'en';

export const localeOptions = [
  { value: 'en', label: 'EN' },
  { value: 'fa', label: 'FA' },
];

const siteDataByLocale = {
  en: enSiteData,
  fa: faSiteData,
};

export function isValidLocale(locale) {
  return locales.includes(locale);
}

export function getSiteData(locale) {
  return siteDataByLocale[isValidLocale(locale) ? locale : defaultLocale];
}

export function switchLocalePath(pathname, targetLocale) {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) {
    return `/${targetLocale}/`;
  }
  segments[0] = targetLocale;
  return `/${segments.join('/')}`;
}

export function getAlternateLocale(locale) {
  return locale === 'en' ? 'fa' : 'en';
}
