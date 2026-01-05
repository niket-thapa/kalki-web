const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
    title: 'IT Strategy & Consulting',
    description: 'Align your technology roadmap with business goals through expert guidance and long-term planning.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Custom Software Development',
    description: 'Enterprise-grade software solutions architected for scalability, security, and long-term success.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" />
        <line x1="16" y1="16" x2="16" y2="16" />
      </svg>
    ),
    title: 'AI & Intelligent Systems',
    description: 'Transform operations with machine learning, automation, and data-driven intelligence.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: 'Mobile & Web Applications',
    description: 'Native and cross-platform solutions engineered for exceptional user experiences.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    title: 'Premium Ecommerce Stores',
    description: 'Fast-launch WooCommerce, Shopify, or custom platforms with conversion optimization, seamless checkout, and growth-ready features.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="13.5" cy="6.5" r=".5" />
        <circle cx="17.5" cy="10.5" r=".5" />
        <circle cx="8.5" cy="7.5" r=".5" />
        <circle cx="6.5" cy="12.5" r=".5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    title: 'UI/UX Design Services',
    description: 'User-centered design that combines aesthetics with data-driven conversion optimization.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Dedicated Development Teams',
    description: 'Hand-picked engineers who integrate seamlessly into your workflow and culture.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Quality Assurance & Support',
    description: 'Continuous testing, monitoring, and optimization to ensure flawless performance.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-surface-alt dark:bg-surface-dark-bg">
      <div className="max-w-[1440px] mx-auto px-6 tablet:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl tablet:text-5xl font-heading font-semibold text-content-heading dark:text-content-heading-dark mb-4">
            End-to-End Technology Solutions
          </h2>
          <p className="text-lg text-content-muted dark:text-content-muted-dark max-w-[600px] mx-auto">
            From strategic consulting to full-scale product development, we help businesses turn complex ideas into reliable, scalable technology.
          </p>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-surface-primary dark:bg-surface-dark-primary border border-border dark:border-border-dark p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-brand-primary group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-primary/20 dark:from-brand-primary/30 dark:to-brand-primary/10 rounded-lg flex items-center justify-center text-white dark:text-white/90 group-hover:bg-gradient-to-br group-hover:from-brand-primary/40 group-hover:to-brand-primary/30 dark:group-hover:from-brand-primary/50 dark:group-hover:to-brand-primary/30 transition-all duration-400 mb-5">
                {service.icon}
              </div>
              <h4 className="text-xl font-heading font-semibold text-content-heading dark:text-content-heading-dark mb-3">
                {service.title}
              </h4>
              <p className="text-base text-content-muted dark:text-content-muted-dark leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

