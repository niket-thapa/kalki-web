"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import navigationData from "@/data/navigation.json";

// Icon components for menu items
const IconDocument = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const IconCode = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const IconUsers = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const IconBriefcase = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const IconInfo = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const IconEnvelope = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const IconLightbulb = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const IconCog = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const IconMobile = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

const IconGlobe = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
);

const IconWordPress = () => (
  <svg
    className="w-5 h-5"
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <title>WordPress</title>
    <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0" />
  </svg>
);

const IconShopify = () => (
  <svg
    className="w-5 h-5"
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <title>Shopify</title>
    <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z" />
  </svg>
);

const IconMagento = () => (
  <svg
    className="w-5 h-5"
    role="img"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <title>Magento</title>
    <path d="M28.985 8.502v14.996l-3.71 2.142v-14.997l-9.275-5.352-9.28 5.352v14.997l-3.705-2.142v-14.996l12.985-7.498zM16 30.996l-5.567-3.214v-14.996l3.711-2.143v14.997l1.856 1.127 1.856-1.127v-14.997l3.713 2.143v14.996z" />
  </svg>
);

// Icon mapping function
const getIcon = (label: string) => {
  const iconMap: { [key: string]: JSX.Element } = {
    "Software Development": <IconCode />,
    "Mobile App Development": <IconMobile />,
    "SaaS App Development": <IconGlobe />,
    "WordPress Development": <IconWordPress />,
    "WordPress/WooCommerce Development": <IconWordPress />,
    "Ecommerce Development": <IconBriefcase />,
    "Custom Ecommerce Solution": <IconBriefcase />,
    "Shopify Development": <IconShopify />,
    "Magento Commerce": <IconMagento />,
    "Design to Code": <IconCode />,
    "IT Consulting": <IconLightbulb />,
    "AI Development": <IconCog />,
    "Dedicated Teams": <IconUsers />,
    "QA & Testing": <IconCog />,
    "Technical Support": <IconEnvelope />,
    "Digital Transformation": <IconGlobe />,
    "Internet of Things": <IconCog />,
    "UI/UX Design": <IconDocument />,
    "API Integration": <IconCode />,
    "Java Development": <IconCode />,
    "Python Development": <IconCode />,
    "PHP Development": <IconCode />,
    "JavaScript Development": <IconCode />,
    "Android Development": <IconMobile />,
    "iOS Development": <IconMobile />,
    "About Us": <IconInfo />,
    "How We Work": <IconCog />,
    Careers: <IconBriefcase />,
    Contact: <IconEnvelope />,
  };
  return iconMap[label] || <IconDocument />;
};

// Helper function to render menu content
const renderMenuContent = (item: any) => {
  if (item.type === "megamenu") {
    return (
      <div className="grid grid-cols-4 gap-10">
        {item.children.map((category: any, idx: number) => (
          <div key={idx} className="space-y-5">
            <h4 className="text-caption font-semibold text-content-heading dark:text-content-heading-dark uppercase tracking-wider text-xs mb-5">
              {category.category}
            </h4>
            <div className="space-y-2">
              {category.items.map((child: any, itemIdx: number) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="group block hover:bg-surface-alt dark:hover:bg-surface-dark-elevated transition-colors -mx-2 px-2 submenu-item"
                  style={{
                    transitionDelay: `${idx * 0.1 + itemIdx * 0.03}s`,
                    willChange: "opacity, transform",
                  }}
                >
                  <div className="flex items-start gap-3 py-2">
                    <div className="text-content-muted dark:text-content-muted-dark group-hover:text-brand-primary transition-colors mt-0.5 flex-shrink-0 opacity-70 group-hover:opacity-100">
                      {getIcon(child.label)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-body text-content-heading dark:text-content-heading-dark group-hover:text-brand-primary transition-colors font-medium">
                          {child.label}
                        </span>
                        {child.badge && (
                          <span className="px-2 py-2 text-small bg-brand-primary/10 text-brand-primary rounded-full whitespace-nowrap font-medium">
                            {child.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="space-y-4">
        {item.label === "Company" ? (
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="text-caption font-semibold text-content-heading dark:text-content-heading-dark uppercase tracking-wider text-xs mb-4">
                Company
              </h4>
              <div className="space-y-1">
                {item.children.map((child: any, itemIdx: number) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="group flex items-start gap-3 py-2 hover:bg-surface-alt dark:hover:bg-surface-dark-elevated transition-colors -mx-2 px-2 submenu-item"
                    style={{
                      transitionDelay: `${itemIdx * 0.03}s`,
                      willChange: "opacity, transform",
                    }}
                  >
                    <div className="text-content-muted dark:text-content-muted-dark group-hover:text-brand-primary transition-colors mt-0.5 flex-shrink-0 opacity-70 group-hover:opacity-100">
                      {getIcon(child.label)}
                    </div>
                    <div className="flex-1">
                      <div className="text-body text-content-heading dark:text-content-heading-dark group-hover:text-brand-primary transition-colors font-medium">
                        {child.label}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            {item.label === "Technologies" && (
              <h4 className="text-caption font-semibold text-content-heading dark:text-content-heading-dark uppercase tracking-wider text-xs mb-4">
                Technologies We Deliver
              </h4>
            )}
            <div className="space-y-1">
              {item.children.map((child: any, itemIdx: number) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="group flex items-start gap-3 py-2 rounded-lg hover:bg-surface-alt dark:hover:bg-surface-dark-elevated transition-colors -mx-2 px-2 submenu-item"
                  style={{
                    transitionDelay: `${itemIdx * 0.03}s`,
                    willChange: "opacity, transform",
                  }}
                >
                  <div className="text-content-muted dark:text-content-muted-dark group-hover:text-brand-primary transition-colors mt-0.5 flex-shrink-0 opacity-70 group-hover:opacity-100">
                    {getIcon(child.label)}
                  </div>
                  <div className="flex-1">
                    <div className="text-body text-content-heading dark:text-content-heading-dark group-hover:text-brand-primary transition-colors font-medium mb-1">
                      {child.label}
                    </div>
                    {child.description && (
                      <div className="text-caption text-content-muted dark:text-content-muted-dark">
                        {child.description}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [dropdownHeight, setDropdownHeight] = useState<number>(0);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Update dropdown height when content changes
  useEffect(() => {
    if (openDropdown) {
      // Set a temporary height to make dropdown visible while measuring
      setDropdownHeight(400);

      // Then measure and set actual height after content renders
      const measureHeight = () => {
        if (contentRef.current) {
          const height = contentRef.current.scrollHeight;
          if (height > 0) {
            setDropdownHeight(height);
          }
        }
      };

      // Use multiple requestAnimationFrame to ensure DOM is fully updated
      const timeout = setTimeout(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            measureHeight();
          });
        });
      }, 50);

      return () => clearTimeout(timeout);
    } else if (!openDropdown) {
      // Smoothly collapse when closing
      setDropdownHeight(0);
    }
  }, [openDropdown]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-surface-primary/95 dark:bg-surface-dark-primary/95 backdrop-blur-md border-b border-border dark:border-border-dark relative">
        <nav className="max-w-[1440px] mx-auto px-6 tablet:px-12 relative">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-[40px] h-[40px] rounded-lg bg-gradient-hero-light dark:bg-gradient-hero-dark flex items-center justify-center">
                <span className="text-white font-heading font-bold text-h3">
                  K
                </span>
              </div>
              <span className="font-heading font-semibold text-body-lg text-content-heading dark:text-content-heading-dark">
                KALKI
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationData.mainNav.map((item) => (
                <div
                  key={item.label}
                  className="relative h-[72px] flex items-center"
                  onMouseEnter={() => {
                    if (item.children) {
                      // Clear any pending close
                      if (closeTimeoutRef.current) {
                        clearTimeout(closeTimeoutRef.current);
                        closeTimeoutRef.current = null;
                      }
                      // Reset closing state and open menu immediately
                      setIsClosing(false);
                      setOpenDropdown(item.label);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.children) {
                      // Only close if this is the currently open menu
                      if (openDropdown === item.label) {
                        // Start closing animation
                        setIsClosing(true);
                        // Collapse height after items fade out
                        setTimeout(() => {
                          setDropdownHeight(0);
                        }, 300);
                        // After animation, close the menu
                        closeTimeoutRef.current = setTimeout(() => {
                          setOpenDropdown(null);
                          setIsClosing(false);
                          closeTimeoutRef.current = null;
                        }, 400);
                      }
                    }
                  }}
                >
                  {item.type === "link" ? (
                    <Link
                      href={item.href}
                      className="text-body font-medium text-content-body dark:text-content-body-dark hover:text-brand-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button className="text-body font-medium text-content-body dark:text-content-body-dark hover:text-brand-primary transition-colors flex items-center gap-1 uppercase tracking-wide">
                      {item.label}
                      {item.children && (
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </button>
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <Link
                href="/company/contact"
                className="px-6 py-3 bg-brand-primary hover:bg-brand-primary-hover text-white font-medium transition-all shadow-sm hover:shadow"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-3 border border-border dark:border-border-dark">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Full Width Dropdown Container */}
        {openDropdown && (
          <div
            ref={dropdownRef}
            className={`absolute left-0 right-0 top-full bg-white dark:bg-surface-dark-primary border-b border-border dark:border-border-dark shadow-xl overflow-hidden submenu-container ${
              !isClosing ? "submenu-open" : "submenu-closing"
            }`}
            style={{
              zIndex: 40,
              willChange: "opacity, transform, max-height",
              maxHeight:
                dropdownHeight > 0 ? `${dropdownHeight + 100}px` : "600px",
              overflow: "hidden",
            }}
            onMouseEnter={() => {
              // Clear any pending close
              if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current);
                closeTimeoutRef.current = null;
              }
              // Reset closing state
              setIsClosing(false);
            }}
            onMouseLeave={() => {
              // Only close if we have an open dropdown
              if (openDropdown) {
                // Start closing animation
                setIsClosing(true);
                // Collapse height after items fade out
                setTimeout(() => {
                  setDropdownHeight(0);
                }, 300);
                // After animation, close the menu
                closeTimeoutRef.current = setTimeout(() => {
                  setOpenDropdown(null);
                  setIsClosing(false);
                  closeTimeoutRef.current = null;
                }, 400);
              }
            }}
          >
            <div
              ref={contentRef}
              className="max-w-[1440px] mx-auto px-6 tablet:px-12 py-10 relative"
            >
              {/* Current menu - fading in */}
              {openDropdown && (
                <div
                  key={`current-${openDropdown}`}
                  className="w-full"
                  style={{
                    animation:
                      "fadeInSlide 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
                    willChange: "opacity, transform",
                  }}
                >
                  {navigationData.mainNav
                    .filter(
                      (item) => item.label === openDropdown && item.children
                    )
                    .map((item) => (
                      <div key={item.label} className="w-full">
                        {renderMenuContent(item)}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
