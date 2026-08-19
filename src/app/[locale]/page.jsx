import HomePage from '@/components/HomePage';
import { locales } from '@/lib/i18n/config';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Page({ params }) {
  const { locale } = await params;
  return <HomePage locale={locale} />;
}
