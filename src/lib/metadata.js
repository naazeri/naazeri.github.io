import { getSiteData, locales } from '@/lib/i18n/config';

function absoluteUrl(baseUrl, path) {
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

function stripHtml(html) {
  if (!html) {
    return '';
  }

  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function resolveImageUrl(baseUrl, image) {
  if (!image) {
    return absoluteUrl(baseUrl, '/android-chrome-512x512.png');
  }

  return image.startsWith('http') ? image : absoluteUrl(baseUrl, image);
}

export function buildAlternateLanguages(baseUrl, pathsByLocale) {
  return Object.fromEntries(
    locales.map((locale) => [locale, absoluteUrl(baseUrl, pathsByLocale[locale])])
  );
}

export function buildPageMetadata({
  locale,
  title,
  description,
  canonicalPath,
  alternatePaths,
  image,
  type = 'website',
}) {
  const siteData = getSiteData(locale);
  const baseUrl = siteData.siteConfig.url;
  const canonical = absoluteUrl(baseUrl, canonicalPath);
  const languages = buildAlternateLanguages(baseUrl, alternatePaths);
  const ogImage = resolveImageUrl(baseUrl, image);
  const plainDescription =
    stripHtml(description) || siteData.siteConfig.description;

  return {
    title,
    description: plainDescription,
    authors: [{ name: siteData.siteConfig.author, url: baseUrl }],
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description: plainDescription,
      url: canonical,
      siteName: 'Nazeriland',
      locale: locale === 'fa' ? 'fa_IR' : 'en_US',
      alternateLocale: locale === 'fa' ? ['en_US'] : ['fa_IR'],
      type,
      images: [
        {
          url: ogImage,
          width: 512,
          height: 512,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: plainDescription,
      images: [ogImage],
    },
  };
}

export function buildLocaleHomeMetadata(locale) {
  const siteData = getSiteData(locale);

  return buildPageMetadata({
    locale,
    title: siteData.siteConfig.title,
    description: siteData.siteConfig.description,
    canonicalPath: `/${locale}/`,
    alternatePaths: {
      en: '/en/',
      fa: '/fa/',
    },
  });
}

export function buildProjectMetadata(locale, project) {
  const siteData = getSiteData(locale);
  const slug = project.id.toString();
  const projectPath = (targetLocale) => `/${targetLocale}/project/${slug}/`;

  return buildPageMetadata({
    locale,
    title: `${siteData.ui.projectDetails} — ${project.title}`,
    description: project.description || siteData.siteConfig.description,
    canonicalPath: projectPath(locale),
    alternatePaths: {
      en: projectPath('en'),
      fa: projectPath('fa'),
    },
    image: project.image,
    type: 'article',
  });
}
