import {
  getProjectBySlug,
  getSiteData,
  isValidLocale,
  locales,
} from '@/lib/i18n/config';
import {
  getLocaleStaticParams,
  getProjectStaticParams,
} from '@/lib/staticParams';
import { describe, expect, it } from 'vitest';

const requiredSiteDataKeys = [
  'siteConfig',
  'ui',
  'navData',
  'heroData',
  'aboutData',
  'serviceData',
  'portfolioData',
  'footerData',
];

describe('i18n config', () => {
  it('defines supported locales', () => {
    expect(locales).toEqual(['en', 'fa']);
  });

  it('loads valid site data for each locale', () => {
    for (const locale of locales) {
      expect(isValidLocale(locale)).toBe(true);

      const siteData = getSiteData(locale);

      for (const key of requiredSiteDataKeys) {
        expect(siteData).toHaveProperty(key);
      }

      expect(siteData.siteConfig.title).toBeTruthy();
      expect(siteData.siteConfig.description).toBeTruthy();
      expect(siteData.siteConfig.url).toMatch(/^https:\/\//);
      expect(siteData.heroData.title).toBeTruthy();
      expect(Array.isArray(siteData.navData)).toBe(true);
      expect(Array.isArray(siteData.portfolioData.projects)).toBe(true);
    }
  });

  it('uses unique numeric project ids within each locale', () => {
    for (const locale of locales) {
      const ids = getSiteData(locale).portfolioData.projects.map(
        (project) => project.id
      );

      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it('keeps matching project ids across locales', () => {
    const enIds = getSiteData('en').portfolioData.projects
      .map((project) => project.id)
      .sort();
    const faIds = getSiteData('fa').portfolioData.projects
      .map((project) => project.id)
      .sort();

    expect(faIds).toEqual(enIds);
  });

  it('resolves projects by slug', () => {
    const project = getProjectBySlug('en', '1');

    expect(project).not.toBeNull();
    expect(project.title).toBeTruthy();
    expect(getProjectBySlug('en', 'invalid')).toBeNull();
    expect(getProjectBySlug('en', '999')).toBeNull();
  });
});

describe('static params', () => {
  it('generates locale params for every locale', () => {
    expect(getLocaleStaticParams()).toEqual([{ locale: 'en' }, { locale: 'fa' }]);
  });

  it('generates project params for every locale and project', () => {
    const params = getProjectStaticParams();

    expect(params.length).toBeGreaterThan(0);
    expect(params.every(({ locale, slug }) => locale && slug)).toBe(true);

    for (const locale of locales) {
      const localeParams = params.filter((entry) => entry.locale === locale);
      const projectCount = getSiteData(locale).portfolioData.projects.length;

      expect(localeParams).toHaveLength(projectCount);
    }
  });
});
