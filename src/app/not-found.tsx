import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-[1440px] mx-auto px-24 tablet:px-48 py-64">
      <div className="text-center">
        <h1 className="font-heading text-display text-content-heading dark:text-content-heading-dark mb-24">
          404
        </h1>
        <p className="text-body-lg text-content-body dark:text-content-body-dark mb-32">
          Page not found
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-8 px-24 py-12 bg-brand-primary hover:bg-brand-primary-hover text-white font-medium rounded-lg transition-all"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

