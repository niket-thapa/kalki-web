'use client';

import { useEffect, useState, useRef } from 'react';

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(current));
              }
            }, 16);
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [target]);

  return <>{count}{suffix}</>;
}

export default function StatsSection() {

  return (
    <section id="stats-section" className="py-20 bg-surface-alt dark:bg-surface-dark-bg relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(106,90,224,0.05),transparent_50%),radial-gradient(circle_at_90%_80%,rgba(77,195,255,0.05),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 tablet:px-12 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold text-brand-primary uppercase tracking-wider mb-3 px-4 py-1.5 bg-surface-primary dark:bg-surface-dark-primary border border-border dark:border-border-dark">
            Who We Are
          </span>
          <h2 className="mt-3 text-4xl tablet:text-5xl font-heading font-semibold text-content-heading dark:text-content-heading-dark">
            Proven Track Record of Excellence
          </h2>
        </div>
        
        <div className="grid grid-cols-1 tablet:grid-cols-3 gap-8">
          {/* Projects Delivered */}
          <div className="bg-surface-primary dark:bg-surface-dark-primary border border-border dark:border-border-dark p-9 text-center relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-400">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary via-accent-blue to-accent-pink transform -translate-x-full group-hover:translate-x-0 transition-transform duration-600" />
            
            <div className="relative inline-flex items-center justify-center mb-5">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-primary/20 dark:from-brand-primary/30 dark:to-brand-primary/10 rounded-2xl flex items-center justify-center text-white dark:text-white/90 group-hover:bg-gradient-to-br group-hover:from-brand-primary/40 group-hover:to-brand-primary/30 dark:group-hover:from-brand-primary/50 dark:group-hover:to-brand-primary/30 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <div className="text-5xl font-heading font-bold mb-2 bg-gradient-to-br from-content-heading to-brand-primary bg-clip-text text-transparent group-hover:from-brand-primary group-hover:to-accent-blue">
              <Counter target={150} suffix="+" />
            </div>
            <div className="text-lg font-semibold text-content-heading dark:text-content-heading-dark mb-2">
              Projects Delivered
            </div>
            <p className="text-sm text-content-muted dark:text-content-muted-dark leading-relaxed">
              Successfully completed projects across diverse industries and technologies
            </p>
          </div>

          {/* Client Satisfaction */}
          <div className="bg-surface-primary dark:bg-surface-dark-primary border border-border dark:border-border-dark p-9 text-center relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-400">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary via-accent-blue to-accent-pink transform -translate-x-full group-hover:translate-x-0 transition-transform duration-600" />
            
            <div className="relative inline-flex items-center justify-center mb-5">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-primary/20 dark:from-brand-primary/30 dark:to-brand-primary/10 rounded-2xl flex items-center justify-center text-white dark:text-white/90 group-hover:bg-gradient-to-br group-hover:from-brand-primary/40 group-hover:to-brand-primary/30 dark:group-hover:from-brand-primary/50 dark:group-hover:to-brand-primary/30 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            
            <div className="text-5xl font-heading font-bold mb-2 bg-gradient-to-br from-content-heading to-brand-primary bg-clip-text text-transparent group-hover:from-brand-primary group-hover:to-accent-blue">
              <Counter target={98} suffix="%" />
            </div>
            <div className="text-lg font-semibold text-content-heading dark:text-content-heading-dark mb-2">
              Client Satisfaction
            </div>
            <p className="text-sm text-content-muted dark:text-content-muted-dark leading-relaxed">
              Consistently high ratings from clients who trust our expertise and delivery
            </p>
          </div>

          {/* Support Available */}
          <div className="bg-surface-primary dark:bg-surface-dark-primary border border-border dark:border-border-dark p-9 text-center relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-400">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary via-accent-blue to-accent-pink transform -translate-x-full group-hover:translate-x-0 transition-transform duration-600" />
            
            <div className="relative inline-flex items-center justify-center mb-5">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-brand-primary/20 dark:from-brand-primary/30 dark:to-brand-primary/10 rounded-2xl flex items-center justify-center text-white dark:text-white/90 group-hover:bg-gradient-to-br group-hover:from-brand-primary/40 group-hover:to-brand-primary/30 dark:group-hover:from-brand-primary/50 dark:group-hover:to-brand-primary/30 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-400">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <div className="text-5xl font-heading font-bold mb-2 bg-gradient-to-br from-content-heading to-brand-primary bg-clip-text text-transparent group-hover:from-brand-primary group-hover:to-accent-blue">
              24/7
            </div>
            <div className="text-lg font-semibold text-content-heading dark:text-content-heading-dark mb-2">
              Support Available
            </div>
            <p className="text-sm text-content-muted dark:text-content-muted-dark leading-relaxed">
              Round-the-clock technical support ensuring your systems run smoothly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

