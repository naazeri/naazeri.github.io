import ProjectPage from '@/components/ProjectPage';
import { buildProjectMetadata } from '@/lib/metadata';
import { getProjectBySlug } from '@/lib/i18n/config';
import { getProjectStaticParams } from '@/lib/staticParams';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return getProjectStaticParams();
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(locale, slug);

  if (!project) {
    notFound();
  }

  return buildProjectMetadata(locale, project);
}

export default async function Page({ params }) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(locale, slug);

  if (!project) {
    notFound();
  }

  return <ProjectPage locale={locale} project={project} />;
}
