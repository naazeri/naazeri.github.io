import LayoutComponent from '@/app/LayoutComponent';
import { buildLocaleHomeMetadata } from '@/lib/metadata';
import { isValidLocale } from '@/lib/i18n/config';
import { getLocaleStaticParams } from '@/lib/staticParams';
import { notFound } from 'next/navigation';
import '@/styles/global.css';

export function generateStaticParams() {
  return getLocaleStaticParams();
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildLocaleHomeMetadata(locale);
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === 'fa' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body>
        <LayoutComponent locale={locale}>{children}</LayoutComponent>
      </body>
    </html>
  );
}
