'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function LocaleHtmlAttributes() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/fa') ? 'fa' : 'en';

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'fa' ? 'rtl' : 'ltr';
  }, [locale]);

  return null;
}
