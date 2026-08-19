import ProjectPage from '@/components/ProjectPage';
import { getSiteData, locales } from '@/lib/i18n/config';

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getSiteData(locale).portfolioData.projects.map((project) => ({
      locale,
      slug: project.id.toString(),
    }))
  );
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const siteData = getSiteData(locale);
  const project = siteData.portfolioData.projects.find(
    (item) => item.id === parseInt(slug)
  );

  return {
    title: `${siteData.ui.projectDetails} — ${project?.title}`,
  };
}

export default async function Page({ params }) {
  const { locale, slug } = await params;
  return <ProjectPage locale={locale} slug={slug} />;
}
