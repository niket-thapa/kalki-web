import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-primary via-[#8F84FF] to-accent-blue dark:from-[#7A6FF0] dark:via-[#4E5BFF] dark:to-[#63D2FF] py-24 overflow-hidden transition-all duration-300">
      {/* Background overlay - different for light and dark mode */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(77,195,255,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.05),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(99,210,255,0.1),transparent_50%)] pointer-events-none transition-opacity duration-300" />
      
      <div className="max-w-[1440px] mx-auto px-6 tablet:px-12 relative z-10">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="text-5xl tablet:text-6xl desktop:text-7xl font-heading font-semibold text-white mb-6 leading-tight">
            Engineering the Future with Intelligent Technology
          </h1>
          <p className="text-xl text-white mb-10 leading-relaxed max-w-[720px] mx-auto">
            Kalki Automation helps startups and enterprises design, build, and scale high-performance software through AI, automation, and expert engineering teams.
          </p>
          
          {/* Value Points Grid */}
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 tablet:gap-8 justify-center mb-12">
            <div className="flex items-center gap-2.5 text-white text-base font-medium">
              <div className="w-6 h-6 bg-white/20 dark:bg-white/15 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span>Strategy-driven development</span>
            </div>
            <div className="flex items-center gap-2.5 text-white text-base font-medium">
              <div className="w-6 h-6 bg-white/20 dark:bg-white/15 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span>AI-powered solutions</span>
            </div>
            <div className="flex items-center gap-2.5 text-white text-base font-medium">
              <div className="w-6 h-6 bg-white/20 dark:bg-white/15 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span>Premium ecommerce expertise</span>
            </div>
            <div className="flex items-center gap-2.5 text-white text-base font-medium">
              <div className="w-6 h-6 bg-white/20 dark:bg-white/15 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span>Secure, scalable systems</span>
            </div>
          </div>
          
          <div className="flex flex-col tablet:flex-row gap-5 justify-center items-center">
            <Link
              href="/company/contact"
              className="px-8 py-4 bg-white dark:bg-surface-dark-primary text-brand-primary dark:text-white font-semibold text-base transition-all shadow-sm hover:shadow dark:hover:bg-surface-dark-elevated dark:hover:text-white dark:hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
            >
              Start a Project
            </Link>
            <Link
              href="/company/contact"
              className="px-8 py-4 bg-white/15 dark:bg-white/10 backdrop-blur-md text-white border border-white/30 dark:border-white/20 font-semibold text-base transition-all hover:bg-white hover:border-white hover:text-brand-primary hover:shadow-sm dark:hover:bg-white dark:hover:border-white dark:hover:text-brand-primary dark:hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
            >
              Talk to Experts →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

