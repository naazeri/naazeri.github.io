'use client';

import Link from 'next/link';

export default function Breadcrumbs({
  homeHref = '/',
  homeLabel = 'Home',
  items = [],
}) {
  const breadcrumbs =
    items.length > 0
      ? [
          { href: homeHref, label: homeLabel },
          ...items.map((item, index) => ({
            href: '#',
            label: item,
            isCurrent: index === items.length - 1,
          })),
        ]
      : [];

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {breadcrumbs.map((item, index) => (
          <li key={index} className={item.isCurrent ? 'current' : ''}>
            {item.isCurrent ? (
              <span className="mx-2">{item.label}</span>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
