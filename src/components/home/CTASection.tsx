import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-surface-alt dark:bg-surface-dark-bg">
      <div className="max-w-[1440px] mx-auto px-6 tablet:px-12">
        <div className="text-center">
          <h2 className="text-4xl tablet:text-5xl font-heading font-semibold text-content-heading dark:text-content-heading-dark mb-4">
            Ready to Build Something That Scales?
          </h2>
          <p className="text-lg text-content-muted dark:text-content-muted-dark mb-10">
            Let&apos;s turn your idea into a reliable, high-impact digital solution.
          </p>
          <div className="flex flex-col tablet:flex-row gap-5 justify-center items-center">
            <Link
              href="/company/contact"
              className="px-8 py-4 bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-base transition-all shadow-sm hover:shadow dark:hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
            >
              Start a Project
            </Link>
            <Link
              href="/company/contact"
              className="px-8 py-4 bg-white dark:bg-surface-dark-primary border border-brand-primary dark:border-brand-primary-dark text-brand-primary dark:text-brand-primary-dark font-semibold text-base transition-all hover:bg-brand-primary/5 dark:hover:bg-brand-primary/10 hover:border-brand-primary/50 hover:shadow-sm dark:hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
            >
              Talk to Experts →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

