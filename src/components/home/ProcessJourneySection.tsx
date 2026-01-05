"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const steps = [
  {
    step: "01",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Discovery & Research",
    description:
      "We dive deep into understanding your business goals, target users, and technical requirements through comprehensive research.",
    details: [
      "Stakeholder interviews & workshops",
      "User research & persona development",
      "Technical feasibility analysis",
    ],
  },
  {
    step: "02",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
      </svg>
    ),
    title: "Design & Architecture",
    description:
      "We transform insights into intuitive interfaces and robust system architecture with pixel-perfect designs.",
    details: [
      "Wireframing & user flow mapping",
      "UI/UX design & prototyping",
      "System architecture planning",
    ],
  },
  {
    step: "03",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M16 18l2-2 4 4-4 4-2-2m-4-8l-2 2-4-4 4-4 2 2" />
        <path d="M8 12h8" />
      </svg>
    ),
    title: "Development & Integration",
    description:
      "Our engineers build your solution using best practices, clean code, and modern frameworks with seamless integrations.",
    details: [
      "Agile sprint-based development",
      "Code reviews & pair programming",
      "API & system integrations",
    ],
  },
  {
    step: "04",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing ensures every feature works flawlessly with comprehensive quality checks and user validation.",
    details: [
      "Automated unit & integration tests",
      "Manual QA & user acceptance testing",
      "A/B testing & analytics setup",
    ],
  },
  {
    step: "05",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Launch & Scale",
    description:
      "We deploy to production, monitor performance, and provide ongoing support as your business grows.",
    details: [
      "Production deployment & monitoring",
      "Performance optimization & scaling",
      "24/7 technical support & maintenance",
    ],
  },
];

export default function ProcessJourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isFullyCollapsed, setIsFullyCollapsed] = useState(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const triggerStartRef = useRef<number>(0);
  const scrollDistanceRef = useRef<number>(0);

  // Constants
  const HEADER_HEIGHT = 72;
  const STACK_OFFSET = 60;
  const GAP = 32;

  const getCardWidth = useCallback(() => {
    return cardRefs.current[0]?.offsetWidth || 500;
  }, []);

  const getViewportWidth = useCallback(() => {
    return typeof window !== "undefined" ? window.innerWidth : 1200;
  }, []);

  const getInitialX = useCallback(
    (index: number): number => {
      const vw = getViewportWidth();
      const cardWidth = getCardWidth();
      const firstCardX = (vw - cardWidth) / 2;
      return firstCardX + index * (cardWidth + GAP);
    },
    [getCardWidth, getViewportWidth]
  );

  const getFinalX = useCallback((index: number): number => {
    return (index + 1) * STACK_OFFSET;
  }, []);

  // Calculate which scroll position corresponds to a card being centered/visible
  const getScrollPositionForCard = useCallback(
    (cardIndex: number): number => {
      const totalCards = steps.length;
      const scrollDistance = scrollDistanceRef.current;
      const triggerStart = triggerStartRef.current;

      // Card 0 should be visible at progress ~0 (start)
      // Last card should be at its final position at progress 1 (end)
      // Each card settles at a proportional progress point

      // Progress at which this card reaches its final position
      // We want the card to be centered/expanded, so we calculate
      // the scroll position where this card would be at center

      const cardWidth = getCardWidth();
      const vw = getViewportWidth();

      // Initial position of this card
      const initialX = getInitialX(cardIndex);
      // We want the card at center of viewport
      const targetX = (vw - cardWidth) / 2;
      // How far this card needs to travel to reach center from initial
      const travelToCenter = initialX - targetX;

      // The scroll progress needed to move cards by travelToCenter
      // Total travel of last card = scrollDistance (at progress 1)
      const lastCardInitialX = getInitialX(totalCards - 1);
      const lastCardFinalX = getFinalX(totalCards - 1);
      const lastCardTotalTravel = lastCardInitialX - lastCardFinalX;

      // Progress = travelToCenter / lastCardTotalTravel
      const progress = Math.max(
        0,
        Math.min(1, travelToCenter / lastCardTotalTravel)
      );

      // Convert progress to actual scroll position
      const scrollY = triggerStart + progress * scrollDistance;

      return scrollY;
    },
    [getCardWidth, getViewportWidth, getInitialX, getFinalX]
  );

  // Set up scroll animation
  useEffect(() => {
    if (typeof window === "undefined") return;

    const section = sectionRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!section || cards.length === 0) return;

    const ctx = gsap.context(() => {
      const totalCards = cards.length;

      // Set z-index
      cards.forEach((card, index) => {
        gsap.set(card, { zIndex: index + 1 });
      });

      const getScrollDistance = (): number => {
        const lastIndex = totalCards - 1;
        return getInitialX(lastIndex) - getFinalX(lastIndex);
      };

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: section,
        start: `top top+=${HEADER_HEIGHT}`,
        end: () => `+=${getScrollDistance()}`,
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
        onRefresh: (self) => {
          // Store trigger start position and scroll distance
          triggerStartRef.current = self.start;
          scrollDistanceRef.current = getScrollDistance();
        },
        onUpdate: (self) => {
          const currentProgress = self.progress;
          const fullyCollapsed = currentProgress >= 0.99;
          setIsFullyCollapsed(fullyCollapsed);

          // Update card positions during scroll
          const lastCardTravel =
            currentProgress *
            (getInitialX(totalCards - 1) - getFinalX(totalCards - 1));

          cards.forEach((card, index) => {
            const initialX = getInitialX(index);
            const finalX = getFinalX(index);
            let currentX = initialX - lastCardTravel;
            if (currentX < finalX) {
              currentX = finalX;
            }
            gsap.set(card, { x: currentX });
          });
        },
      });

      // Store initial values
      triggerStartRef.current = scrollTriggerRef.current.start;
      scrollDistanceRef.current = getScrollDistance();
    }, section);

    return () => ctx.revert();
  }, [getInitialX, getFinalX]);

  // Handle card hover - scroll to position where card is visible
  const handleCardMouseEnter = useCallback(
    (index: number) => {
      if (!isFullyCollapsed) return;

      const targetScrollY = getScrollPositionForCard(index);

      // Smoothly scroll to the target position
      gsap.to(window, {
        scrollTo: { y: targetScrollY, autoKill: false },
        duration: 0.6,
        ease: "power2.out",
      });
    },
    [isFullyCollapsed, getScrollPositionForCard]
  );

  return (
    <section
      ref={sectionRef}
      id="process"
      className="w-full py-24 bg-gradient-to-b from-surface-primary to-surface-alt dark:from-surface-dark-primary dark:to-surface-dark-alt"
    >
      <div className="max-w-[1440px] mx-auto px-6 tablet:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl tablet:text-5xl font-heading font-semibold text-content-heading dark:text-content-heading-dark mb-4">
            Our Development Journey
          </h2>
          <p className="text-lg text-content-muted dark:text-content-muted-dark">
            Follow the step-by-step path from vision to reality
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden relative">
        <div
          ref={cardsContainerRef}
          className="relative h-[480px] tablet:h-[500px]"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onMouseEnter={() => handleCardMouseEnter(index)}
              className={`step-item absolute top-0 left-0 w-[85vw] tablet:w-[500px] desktop:w-[600px] h-full flex flex-col bg-surface-primary dark:bg-surface-dark-primary border border-border dark:border-border-dark rounded-2xl p-8 tablet:p-10 shadow-xl ${
                isFullyCollapsed ? "cursor-pointer" : "cursor-default"
              }`}
              style={{ zIndex: index + 1 }}
            >
              <div className="text-xs font-extrabold text-brand-primary mb-5 tracking-wider uppercase">
                STEP {step.step}
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-accent-blue rounded-2xl flex items-center justify-center text-white mb-6 flex-shrink-0">
                {step.icon}
              </div>
              <h3 className="text-2xl tablet:text-3xl font-heading font-semibold text-content-heading dark:text-content-heading-dark mb-4 leading-tight">
                {step.title}
              </h3>
              <p className="text-base tablet:text-lg text-content-muted dark:text-content-muted-dark mb-6 leading-relaxed flex-grow">
                {step.description}
              </p>
              <ul className="flex flex-col gap-3 mt-auto">
                {step.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className="text-sm tablet:text-base text-content-body dark:text-content-body-dark pl-7 relative leading-relaxed"
                  >
                    <span className="absolute left-0 top-1.5 w-4 h-4 bg-gradient-to-br from-brand-primary to-accent-blue rounded-full opacity-80" />
                    <span className="absolute left-[5px] top-[10px] w-1.5 h-1.5 bg-white rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
