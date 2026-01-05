import { notFound } from 'next/navigation';
import pagesData from '@/data/pages.json';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return pagesData.technologies.map((page) => ({
    slug: page.slug,
  }));
}

export default function TechnologyPage({ params }: PageProps) {
  const page = pagesData.technologies.find((p) => p.slug === params.slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="max-w-[1440px] mx-auto px-24 tablet:px-48 py-64">
      <h1 className="font-heading text-display text-content-heading dark:text-content-heading-dark">
        {page.title}
      </h1>
    </div>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const page = pagesData.technologies.find((p) => p.slug === params.slug);
  
  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: `${page.title} | Kalki Automation`,
    description: `Expert ${page.title.toLowerCase()} services by Kalki Automation.`,
  };
}

