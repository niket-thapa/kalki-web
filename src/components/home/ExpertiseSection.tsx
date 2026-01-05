const expertise = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <line x1="12" y1="11" x2="12" y2="17" />
        <line x1="8" y1="11" x2="8" y2="17" />
        <line x1="16" y1="11" x2="16" y2="17" />
      </svg>
    ),
    title: 'Business Process Automation',
    description: 'Eliminate manual workflows and reduce operational costs by 40-60% through intelligent automation and digital transformation.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Revenue-Driving Ecommerce',
    description: 'Build conversion-optimized online stores that scale from startup to enterprise with advanced analytics and omnichannel capabilities.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <polyline points="12 2 15 5 12 8" />
      </svg>
    ),
    title: 'Customer Experience Optimization',
    description: 'Design user journeys that increase engagement by 3x through data-driven UX, accessibility, and conversion rate optimization.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6m0 6v6" />
        <path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24" />
        <path d="M1 12h6m6 0h6" />
        <path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24" />
      </svg>
    ),
    title: 'Enterprise System Unification',
    description: 'Connect disparate platforms into a unified ecosystem with seamless API integration, real-time data sync, and centralized control.',
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="py-24 bg-surface-primary dark:bg-surface-dark-primary">
      <div className="max-w-[1440px] mx-auto px-6 tablet:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl tablet:text-5xl font-heading font-semibold text-content-heading dark:text-content-heading-dark mb-4">
            Transforming Businesses Through Technology
          </h2>
          <p className="text-lg text-content-muted dark:text-content-muted-dark max-w-[600px] mx-auto">
            Strategic capabilities that drive measurable business outcomes and competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-12">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="flex gap-6 p-10 bg-surface-alt dark:bg-surface-dark-primary rounded-2xl transition-all hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-primary/20 dark:from-brand-primary/30 dark:to-brand-primary/10 rounded-xl flex items-center justify-center text-white dark:text-white/90 group-hover:bg-gradient-to-br group-hover:from-brand-primary/40 group-hover:to-brand-primary/30 dark:group-hover:from-brand-primary/50 dark:group-hover:to-brand-primary/30 transition-all duration-400">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-heading font-semibold text-content-heading dark:text-content-heading-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-content-muted dark:text-content-muted-dark leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

