'use client';

import { useState, useEffect } from 'react';

export default function StyleGuide() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    const isDarkMode = html.classList.contains('dark');
    setIsDark(isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-surface-primary/95 dark:bg-surface-dark-primary/95 backdrop-blur-md border-b border-border dark:border-border-dark">
        <div className="max-w-[1440px] mx-auto px-6 tablet:px-12">
          <div className="flex items-center justify-between h-[72px]">
            <a href="/" className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-lg bg-gradient-hero-light dark:bg-gradient-hero-dark flex items-center justify-center">
                <span className="text-white font-heading font-bold text-h3">K</span>
              </div>
              <span className="font-heading font-semibold text-body-lg text-content-heading dark:text-content-heading-dark">
                Kalki Design System
              </span>
            </a>
            <div className="hidden tablet:flex items-center gap-8">
              <a href="#tokens" className="text-body text-content-body dark:text-content-body-dark hover:text-brand-primary transition-colors">Tokens</a>
              <a href="#typography" className="text-body text-content-body dark:text-content-body-dark hover:text-brand-primary transition-colors">Typography</a>
              <a href="#buttons" className="text-body text-content-body dark:text-content-body-dark hover:text-brand-primary transition-colors">Buttons</a>
              <a href="#cards" className="text-body text-content-body dark:text-content-body-dark hover:text-brand-primary transition-colors">Cards</a>
              <a href="#forms" className="text-body text-content-body dark:text-content-body-dark hover:text-brand-primary transition-colors">Forms</a>
            </div>
            <button
              onClick={toggleTheme}
              className="p-3 border border-border dark:border-border-dark hover:bg-surface-alt dark:hover:bg-surface-dark-elevated transition-colors"
            >
              {isDark ? (
                <svg className="w-[20px] h-[20px] text-content-heading-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-[20px] h-[20px] text-content-heading" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-[1440px] mx-auto px-6 tablet:px-12 py-16">
        {/* Hero */}
        <section className="mb-24">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-hero-light dark:bg-gradient-hero-dark p-12 tablet:p-16">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="relative z-10">
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-caption font-medium mb-6">v1.0.0 Design System</span>
              <h1 className="font-heading text-display text-white mb-4">Kalki Automation</h1>
              <p className="text-body-lg text-white/90 max-w-[600px] mb-8">
                Enterprise-grade design system for global IT services, AI development, and software consulting.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#tokens" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-primary font-medium hover:bg-white/90 transition-colors">
                  Explore Tokens
                  <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#sections" className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white/30 text-white font-medium hover:bg-white/10 transition-colors">
                  View Components
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Color Tokens Section */}
        <section id="tokens" className="mb-24 scroll-mt-24">
          <div className="mb-12">
            <span className="text-caption text-brand-primary dark:text-brand-primary-dark font-medium uppercase tracking-wider">Foundation</span>
            <h2 className="font-heading text-h1 text-content-heading dark:text-content-heading-dark mt-2">Color Tokens</h2>
          </div>
          <div className="mb-12">
            <h3 className="font-heading text-h3 text-content-heading dark:text-content-heading-dark mb-6">Brand Colors</h3>
            <div className="grid grid-cols-2 tablet:grid-cols-5 gap-4">
              <div>
                <div className="h-[80px] rounded-lg bg-brand-primary mb-3"></div>
                <p className="text-caption font-medium text-content-heading dark:text-content-heading-dark">Primary</p>
                <p className="text-small text-content-muted dark:text-content-muted-dark font-mono">#6A5AE0</p>
              </div>
              <div>
                <div className="h-[80px] rounded-lg bg-brand-primary-hover mb-3"></div>
                <p className="text-caption font-medium text-content-heading dark:text-content-heading-dark">Hover</p>
                <p className="text-small text-content-muted dark:text-content-muted-dark font-mono">#5B4AE6</p>
              </div>
              <div>
                <div className="h-[80px] rounded-lg bg-brand-primary-active mb-3"></div>
                <p className="text-caption font-medium text-content-heading dark:text-content-heading-dark">Active</p>
                <p className="text-small text-content-muted dark:text-content-muted-dark font-mono">#4E3CD1</p>
              </div>
              <div>
                <div className="h-[80px] rounded-lg bg-brand-secondary mb-3"></div>
                <p className="text-caption font-medium text-content-heading dark:text-content-heading-dark">Secondary</p>
                <p className="text-small text-content-muted dark:text-content-muted-dark font-mono">#2F2A6B</p>
              </div>
              <div>
                <div className="h-[80px] rounded-lg bg-brand-secondary-soft border border-border dark:border-border-dark mb-3"></div>
                <p className="text-caption font-medium text-content-heading dark:text-content-heading-dark">Secondary Soft</p>
                <p className="text-small text-content-muted dark:text-content-muted-dark font-mono">#E5E7FF</p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="font-heading text-h3 text-content-heading dark:text-content-heading-dark mb-6">Accent & Feedback</h3>
            <div className="grid grid-cols-2 tablet:grid-cols-5 gap-4">
              <div>
                <div className="h-[80px] rounded-lg bg-accent-blue mb-3"></div>
                <p className="text-caption font-medium text-content-heading dark:text-content-heading-dark">Blue</p>
                <p className="text-small text-content-muted dark:text-content-muted-dark font-mono">#4DC3FF</p>
              </div>
              <div>
                <div className="h-[80px] rounded-lg bg-accent-pink mb-3"></div>
                <p className="text-caption font-medium text-content-heading dark:text-content-heading-dark">Pink</p>
                <p className="text-small text-content-muted dark:text-content-muted-dark font-mono">#E07CFF</p>
              </div>
              <div>
                <div className="h-[80px] rounded-lg bg-feedback-success mb-3"></div>
                <p className="text-caption font-medium text-content-heading dark:text-content-heading-dark">Success</p>
                <p className="text-small text-content-muted dark:text-content-muted-dark font-mono">#2ECC71</p>
              </div>
              <div>
                <div className="h-[80px] rounded-lg bg-feedback-warning mb-3"></div>
                <p className="text-caption font-medium text-content-heading dark:text-content-heading-dark">Warning</p>
                <p className="text-small text-content-muted dark:text-content-muted-dark font-mono">#F4B740</p>
              </div>
              <div>
                <div className="h-[80px] rounded-lg bg-feedback-error mb-3"></div>
                <p className="text-caption font-medium text-content-heading dark:text-content-heading-dark">Error</p>
                <p className="text-small text-content-muted dark:text-content-muted-dark font-mono">#E5533D</p>
              </div>
            </div>
          </div>
          <div className="mb-12">
            <h3 className="font-heading text-h3 text-content-heading dark:text-content-heading-dark mb-6">Gradients</h3>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6">
              <div>
                <div className="h-[120px] rounded-xl bg-gradient-hero-light dark:bg-gradient-hero-dark mb-3 shadow-md"></div>
                <p className="text-caption font-medium text-content-heading dark:text-content-heading-dark">Hero Light</p>
                <p className="text-small text-content-muted dark:text-content-muted-dark font-mono">135deg: #6A5AE0 → #8F84FF → #4DC3FF</p>
              </div>
              <div>
                <div className="h-[120px] rounded-xl bg-gradient-hero-dark mb-3 shadow-md"></div>
                <p className="text-caption font-medium text-content-heading dark:text-content-heading-dark">Hero Dark</p>
                <p className="text-small text-content-muted dark:text-content-muted-dark font-mono">135deg: #7A6FF0 → #4E5BFF</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section id="typography" className="mb-24 scroll-mt-24">
          <div className="mb-12">
            <span className="text-caption text-brand-primary dark:text-brand-primary-dark font-medium uppercase tracking-wider">Foundation</span>
            <h2 className="font-heading text-h1 text-content-heading dark:text-content-heading-dark mt-2">Typography</h2>
          </div>
          <div className="bg-surface-primary dark:bg-surface-dark-primary rounded-xl border border-border dark:border-border-dark p-8 tablet:p-12 space-y-8">
            <div className="pb-8 border-b border-border dark:border-border-dark">
              <span className="text-caption text-content-muted dark:text-content-muted-dark font-mono block mb-2">text-display / 64px / Bold / Space Grotesk</span>
              <h1 className="font-heading text-display text-content-heading dark:text-content-heading-dark">Display Heading</h1>
            </div>
            <div className="pb-8 border-b border-border dark:border-border-dark">
              <span className="text-caption text-content-muted dark:text-content-muted-dark font-mono block mb-2">text-h1 / 48px / Semibold / Space Grotesk</span>
              <h2 className="font-heading text-h1 text-content-heading dark:text-content-heading-dark">Heading One</h2>
            </div>
            <div className="pb-8 border-b border-border dark:border-border-dark">
              <span className="text-caption text-content-muted dark:text-content-muted-dark font-mono block mb-2">text-h2 / 32px / Semibold / Space Grotesk</span>
              <h3 className="font-heading text-h2 text-content-heading dark:text-content-heading-dark">Heading Two</h3>
            </div>
            <div className="pb-8 border-b border-border dark:border-border-dark">
              <span className="text-caption text-content-muted dark:text-content-muted-dark font-mono block mb-2">text-h3 / 24px / Medium / Space Grotesk</span>
              <h4 className="font-heading text-h3 text-content-heading dark:text-content-heading-dark">Heading Three</h4>
            </div>
            <div className="pb-8 border-b border-border dark:border-border-dark">
              <span className="text-caption text-content-muted dark:text-content-muted-dark font-mono block mb-2">text-body-lg / 18px / Regular / Inter</span>
              <p className="text-body-lg text-content-body dark:text-content-body-dark">Body large for introductory paragraphs and key messaging.</p>
            </div>
            <div className="pb-8 border-b border-border dark:border-border-dark">
              <span className="text-caption text-content-muted dark:text-content-muted-dark font-mono block mb-2">text-body / 16px / Regular / Inter</span>
              <p className="text-body text-content-body dark:text-content-body-dark">Body default for standard paragraphs and general content.</p>
            </div>
            <div>
              <span className="text-caption text-content-muted dark:text-content-muted-dark font-mono block mb-2">text-caption / 14px / Regular / Inter</span>
              <p className="text-caption text-content-muted dark:text-content-muted-dark">Caption for labels, hints, and secondary information.</p>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section id="buttons" className="mb-24 scroll-mt-24">
          <div className="mb-12">
            <span className="text-caption text-brand-primary dark:text-brand-primary-dark font-medium uppercase tracking-wider">Components</span>
            <h2 className="font-heading text-h1 text-content-heading dark:text-content-heading-dark mt-2">Buttons</h2>
          </div>
          <div className="bg-surface-primary dark:bg-surface-dark-primary rounded-xl border border-border dark:border-border-dark p-8 tablet:p-12 space-y-12">
            <div>
              <h3 className="font-heading text-h3 text-content-heading dark:text-content-heading-dark mb-6">Primary</h3>
              <div className="flex flex-wrap items-center gap-4">
                <button className="px-6 py-3 bg-brand-primary hover:bg-brand-primary-hover active:bg-brand-primary-active text-white font-medium transition-all shadow-sm hover:shadow">Default</button>
                <button className="px-6 py-3 bg-brand-primary-hover text-white font-medium shadow">Hover</button>
                <button className="px-6 py-3 bg-brand-primary-active text-white font-medium">Active</button>
                <button className="px-6 py-3 bg-brand-primary/50 text-white/70 font-medium cursor-not-allowed" disabled>Disabled</button>
              </div>
              <pre className="mt-4 p-4 bg-surface-alt dark:bg-surface-dark-elevated rounded-lg text-caption font-mono text-content-muted dark:text-content-muted-dark overflow-x-auto">
                <code>bg-brand-primary hover:bg-brand-primary-hover active:bg-brand-primary-active text-white</code>
              </pre>
            </div>
            <div>
              <h3 className="font-heading text-h3 text-content-heading dark:text-content-heading-dark mb-6">Secondary (Outline)</h3>
              <div className="flex flex-wrap items-center gap-4">
                <button className="px-6 py-3 border-2 border-brand-primary text-brand-primary dark:text-brand-primary-dark hover:bg-brand-primary hover:text-white font-medium transition-all">Default</button>
                <button className="px-6 py-3 bg-brand-primary border-2 border-brand-primary text-white font-medium">Hover</button>
                <button className="px-6 py-3 border-2 border-brand-primary/50 text-brand-primary/50 font-medium cursor-not-allowed" disabled>Disabled</button>
              </div>
              <pre className="mt-4 p-4 bg-surface-alt dark:bg-surface-dark-elevated rounded-lg text-caption font-mono text-content-muted dark:text-content-muted-dark overflow-x-auto">
                <code>border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white</code>
              </pre>
            </div>
            <div>
              <h3 className="font-heading text-h3 text-content-heading dark:text-content-heading-dark mb-6">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <button className="px-4 py-2 bg-brand-primary hover:bg-brand-primary-hover text-white text-caption font-medium transition-all">Small</button>
                <button className="px-6 py-3 bg-brand-primary hover:bg-brand-primary-hover text-white text-body font-medium transition-all">Medium</button>
                <button className="px-8 py-4 bg-brand-primary hover:bg-brand-primary-hover text-white text-body-lg font-medium transition-all">Large</button>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-h3 text-content-heading dark:text-content-heading-dark mb-6">With Icons</h3>
              <div className="flex flex-wrap items-center gap-4">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-primary-hover text-white font-medium transition-all">
                  <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Add Item
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary hover:bg-brand-primary-hover text-white font-medium transition-all">
                  Continue
                  <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section id="cards" className="mb-24 scroll-mt-24">
          <div className="mb-12">
            <span className="text-caption text-brand-primary dark:text-brand-primary-dark font-medium uppercase tracking-wider">Components</span>
            <h2 className="font-heading text-h1 text-content-heading dark:text-content-heading-dark mt-2">Cards</h2>
          </div>
          <div className="grid grid-cols-1 tablet:grid-cols-3 gap-6">
            <div className="group bg-surface-primary dark:bg-surface-dark-primary rounded-xl border border-border dark:border-border-dark p-8 hover:shadow-lg hover:border-brand-primary/30 transition-all">
              <div className="w-[56px] h-[56px] rounded-xl bg-gradient-hero-light dark:bg-gradient-hero-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-[28px] h-[28px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-heading text-h3 text-content-heading dark:text-content-heading-dark mb-3">AI Development</h4>
              <p className="text-body text-content-muted dark:text-content-muted-dark mb-6">Custom ML solutions, NLP systems, and computer vision applications.</p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-primary dark:text-brand-primary-dark font-medium hover:gap-3 transition-all">
                Learn More
                <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="group bg-surface-primary dark:bg-surface-dark-primary rounded-xl border border-border dark:border-border-dark p-8 hover:shadow-lg hover:border-brand-primary/30 transition-all">
              <div className="w-[56px] h-[56px] rounded-xl bg-gradient-hero-light dark:bg-gradient-hero-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-[28px] h-[28px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="font-heading text-h3 text-content-heading dark:text-content-heading-dark mb-3">Software Engineering</h4>
              <p className="text-body text-content-muted dark:text-content-muted-dark mb-6">Full-stack development and cloud-native enterprise solutions.</p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-primary dark:text-brand-primary-dark font-medium hover:gap-3 transition-all">
                Learn More
                <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="group bg-surface-primary dark:bg-surface-dark-primary rounded-xl border border-border dark:border-border-dark p-8 hover:shadow-lg hover:border-brand-primary/30 transition-all">
              <div className="w-[56px] h-[56px] rounded-xl bg-gradient-hero-light dark:bg-gradient-hero-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-[28px] h-[28px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-heading text-h3 text-content-heading dark:text-content-heading-dark mb-3">IT Consulting</h4>
              <p className="text-body text-content-muted dark:text-content-muted-dark mb-6">Strategic technology advisory and digital transformation.</p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-primary dark:text-brand-primary-dark font-medium hover:gap-3 transition-all">
                Learn More
                <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Forms Section */}
        <section id="forms" className="mb-24 scroll-mt-24">
          <div className="mb-12">
            <span className="text-caption text-brand-primary dark:text-brand-primary-dark font-medium uppercase tracking-wider">Components</span>
            <h2 className="font-heading text-h1 text-content-heading dark:text-content-heading-dark mt-2">Form Elements</h2>
          </div>
          <div className="bg-surface-primary dark:bg-surface-dark-primary rounded-xl border border-border dark:border-border-dark p-8 tablet:p-12">
            <div className="max-w-[500px] space-y-6">
              <div>
                <label className="block text-caption font-medium text-content-heading dark:text-content-heading-dark mb-2">Email</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 bg-surface-primary dark:bg-surface-dark-elevated border border-border dark:border-border-dark text-content-heading dark:text-content-heading-dark placeholder:text-content-muted focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-caption font-medium text-content-heading dark:text-content-heading-dark mb-2">Password (Error)</label>
                <input
                  type="password"
                  defaultValue="short"
                  className="w-full px-4 py-3 bg-surface-primary dark:bg-surface-dark-elevated border border-feedback-error text-content-heading dark:text-content-heading-dark focus:ring-2 focus:ring-feedback-error/20 transition-all"
                />
                <p className="mt-2 text-caption text-feedback-error flex items-center gap-1">
                  <svg className="w-[14px] h-[14px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Password must be at least 8 characters.
                </p>
              </div>
              <div>
                <label className="block text-caption font-medium text-content-heading dark:text-content-heading-dark mb-2">Username (Success)</label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="kalki_user"
                    className="w-full px-4 py-3 pr-10 bg-surface-primary dark:bg-surface-dark-elevated border border-feedback-success text-content-heading dark:text-content-heading-dark"
                  />
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-[20px] h-[20px] text-feedback-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <label className="block text-caption font-medium text-content-heading dark:text-content-heading-dark mb-2">Service</label>
                <select className="w-full px-4 py-3 bg-surface-primary dark:bg-surface-dark-elevated border border-border dark:border-border-dark text-content-heading dark:text-content-heading-dark appearance-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all cursor-pointer">
                  <option>Select a service...</option>
                  <option>AI Development</option>
                  <option>Software Engineering</option>
                  <option>IT Consulting</option>
                </select>
              </div>
              <button className="w-full px-6 py-4 bg-brand-primary hover:bg-brand-primary-hover text-white font-medium transition-all shadow-sm hover:shadow">
                Submit Inquiry
              </button>
            </div>
          </div>
        </section>

        {/* Badges & Alerts */}
        <section id="feedback" className="mb-24 scroll-mt-24">
          <div className="mb-12">
            <span className="text-caption text-brand-primary dark:text-brand-primary-dark font-medium uppercase tracking-wider">Components</span>
            <h2 className="font-heading text-h1 text-content-heading dark:text-content-heading-dark mt-2">Badges & Alerts</h2>
          </div>
          <div className="bg-surface-primary dark:bg-surface-dark-primary rounded-xl border border-border dark:border-border-dark p-8 tablet:p-12 space-y-8">
            <div>
              <h3 className="font-heading text-h3 text-content-heading dark:text-content-heading-dark mb-6">Badges</h3>
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-3 py-1 bg-brand-primary text-white text-small font-medium rounded-full">Primary</span>
                <span className="px-3 py-1 bg-brand-secondary-soft text-brand-primary text-small font-medium rounded-full">Secondary</span>
                <span className="px-3 py-1 bg-feedback-success/10 text-feedback-success text-small font-medium rounded-full">Success</span>
                <span className="px-3 py-1 bg-feedback-warning/10 text-feedback-warning text-small font-medium rounded-full">Warning</span>
                <span className="px-3 py-1 bg-feedback-error/10 text-feedback-error text-small font-medium rounded-full">Error</span>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-h3 text-content-heading dark:text-content-heading-dark mb-6">Alerts</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-feedback-success/10 border border-feedback-success/20 rounded-lg">
                  <svg className="w-[20px] h-[20px] text-feedback-success flex-shrink-0 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-body font-medium text-feedback-success">Success!</p>
                    <p className="text-caption text-content-body dark:text-content-body-dark mt-1">Your changes have been saved.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-feedback-warning/10 border border-feedback-warning/20 rounded-lg">
                  <svg className="w-[20px] h-[20px] text-feedback-warning flex-shrink-0 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="text-body font-medium text-feedback-warning">Warning</p>
                    <p className="text-caption text-content-body dark:text-content-body-dark mt-1">Session expires in 5 minutes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-feedback-error/10 border border-feedback-error/20 rounded-lg">
                  <svg className="w-[20px] h-[20px] text-feedback-error flex-shrink-0 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-body font-medium text-feedback-error">Error</p>
                    <p className="text-caption text-content-body dark:text-content-body-dark mt-1">Something went wrong. Please try again.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="sections" className="mb-24 scroll-mt-24">
          <div className="mb-12">
            <span className="text-caption text-brand-primary dark:text-brand-primary-dark font-medium uppercase tracking-wider">Sections</span>
            <h2 className="font-heading text-h1 text-content-heading dark:text-content-heading-dark mt-2">CTA Banner</h2>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-hero-light dark:bg-gradient-hero-dark p-8 tablet:p-12">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="relative z-10 flex flex-col tablet:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="font-heading text-h1 text-white mb-3">Ready to Transform Your Business?</h3>
                <p className="text-body-lg text-white/80">Let&apos;s discuss how we can help you achieve your technology goals.</p>
              </div>
              <div className="flex flex-col tablet:flex-row gap-4 w-full tablet:w-auto">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary font-semibold hover:bg-white/90 transition-all shadow-sm hover:shadow whitespace-nowrap">
                  Get Started
                  <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all hover:shadow-sm whitespace-nowrap">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border dark:border-border-dark bg-surface-primary dark:bg-surface-dark-primary">
        <div className="max-w-[1440px] mx-auto px-6 tablet:px-12 py-3">
          <div className="flex flex-col tablet:flex-row items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-hero-light dark:bg-gradient-hero-dark flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xs">K</span>
              </div>
              <span className="font-heading font-semibold text-sm text-content-heading dark:text-content-heading-dark">Kalki Automation</span>
            </div>
            <p className="text-xs text-content-muted dark:text-content-muted-dark">© 2024 Kalki Automation Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

