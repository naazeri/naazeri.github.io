import LayoutComponent from '@/app/LayoutComponent';
import { getSiteData, isValidLocale, locales } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const siteData = getSiteData(locale);
  const baseUrl = siteData.siteConfig.url;

  return {
    title: siteData.siteConfig.title,
    description: siteData.siteConfig.description,
    authors: [
      { name: siteData.siteConfig.author, url: siteData.siteConfig.url },
    ],
    alternates: {
      canonical: `${baseUrl}/${locale}/`,
      languages: {
        en: `${baseUrl}/en/`,
        fa: `${baseUrl}/fa/`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <LayoutComponent locale={locale}>{children}</LayoutComponent>
  );
}
