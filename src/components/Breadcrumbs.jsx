'use client';

import Link from 'next/link';

export default function Breadcrumbs({ items = [] }) {
  // Add home as first item if items array is not empty
  const breadcrumbs =
    items.length > 0
      ? [
          { href: '/', label: 'خانه' },
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
