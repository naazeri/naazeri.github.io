import HomePage from '@/components/HomePage';
import { getLocaleStaticParams } from '@/lib/staticParams';

export function generateStaticParams() {
  return getLocaleStaticParams();
}

export default async function Page({ params }) {
  const { locale } = await params;
  return <HomePage locale={locale} />;
}
