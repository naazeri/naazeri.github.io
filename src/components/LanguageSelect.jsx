'use client';

import { localeOptions, switchLocalePath } from '@/lib/i18n/config';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSelect({ locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (event) => {
    const nextLocale = event.target.value;
    if (nextLocale === locale) {
      return;
    }
    router.push(switchLocalePath(pathname, nextLocale));
  };

  return (
    <select
      className="lang-select"
      value={locale}
      onChange={handleChange}
      aria-label="Language"
    >
      {localeOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
