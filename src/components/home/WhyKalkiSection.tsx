const reasons = [
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'Strategy Before Code',
    description: 'We focus on solving business problems, not just writing software.',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
      </svg>
    ),
    title: 'AI-First Thinking',
    description: 'Intelligence and automation are built into our solutions from day one.',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Dedicated Expert Teams',
    description: 'Work with engineers who act as an extension of your in-house team.',
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: 'Security & Ownership',
    description: 'Your intellectual property and data are always protected.',
  },
];

export default function WhyKalkiSection() {
  return (
    <section className="py-24 bg-surface-alt dark:bg-surface-dark-bg">
      <div className="max-w-[1440px] mx-auto px-6 tablet:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl tablet:text-5xl font-heading font-semibold text-content-heading dark:text-content-heading-dark">
            Why Businesses Choose Kalki
          </h2>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-surface-primary dark:bg-surface-dark-primary border border-border dark:border-border-dark p-8 text-center transition-all hover:-translate-y-1 hover:shadow-xl hover:border-brand-primary group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-primary/20 dark:from-brand-primary/30 dark:to-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5 text-white dark:text-white/90 group-hover:bg-gradient-to-br group-hover:from-brand-primary/40 group-hover:to-brand-primary/30 dark:group-hover:from-brand-primary/50 dark:group-hover:to-brand-primary/30 transition-all duration-400">
                {reason.icon}
              </div>
              <h4 className="text-lg font-heading font-semibold text-content-heading dark:text-content-heading-dark mb-3">
                {reason.title}
              </h4>
              <p className="text-base text-content-muted dark:text-content-muted-dark leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

