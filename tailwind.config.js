/**
 * ═══════════════════════════════════════════════════════════════════════════
 * KALKI AUTOMATION - TAILWIND CSS DESIGN SYSTEM CONFIGURATION
 * Enterprise-Grade Design System for Global IT Services & AI Development
 * Version: 1.0.0
 * ═══════════════════════════════════════════════════════════════════════════
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ═══════════════════════════════════════════════════════════════════
      // COLOR TOKENS
      // Complete color system with light and dark mode support
      // ═══════════════════════════════════════════════════════════════════
      colors: {
        // ─────────────────────────────────────────────────────────────────
        // BRAND COLORS
        // Primary brand identity colors
        // ─────────────────────────────────────────────────────────────────
        brand: {
          primary: {
            DEFAULT: "#5A4AD0",
            hover: "#4B3BC1",
            active: "#3D2DB2",
            dark: "#8B7FFF",
          },
          secondary: {
            DEFAULT: "#2F2A6B",
            soft: "#E5E7FF",
          },
        },

        // ─────────────────────────────────────────────────────────────────
        // ACCENT COLORS
        // Supporting brand colors for highlights and emphasis
        // ─────────────────────────────────────────────────────────────────
        accent: {
          blue: {
            DEFAULT: "#4DC3FF",
            dark: "#63D2FF",
          },
          pink: {
            DEFAULT: "#E07CFF",
            dark: "#F08CFF",
          },
        },

        // ─────────────────────────────────────────────────────────────────
        // FEEDBACK COLORS
        // System feedback states for success, warning, error
        // ─────────────────────────────────────────────────────────────────
        feedback: {
          success: "#2ECC71",
          warning: "#F4B740",
          error: "#E5533D",
        },

        // ─────────────────────────────────────────────────────────────────
        // SURFACE COLORS
        // Background and surface colors for light and dark themes
        // ─────────────────────────────────────────────────────────────────
        surface: {
          background: "#F7F8FF",
          primary: "#FFFFFF",
          alt: "#F1F3FF",
          "dark-bg": "#0E1028",
          "dark-primary": "#15183D",
          "dark-elevated": "#1C2052",
        },

        // ─────────────────────────────────────────────────────────────────
        // BORDER COLORS
        // Dividers and border colors
        // ─────────────────────────────────────────────────────────────────
        border: {
          DEFAULT: "#E2E5F5",
          divider: "#D7DAF0",
          dark: "#2D327A",
        },

        // ─────────────────────────────────────────────────────────────────
        // TEXT COLORS
        // Typography colors for both themes
        // Usage: text-content-heading, text-content-body, etc.
        // ─────────────────────────────────────────────────────────────────
        content: {
          heading: {
            DEFAULT: "#16163F",
            dark: "#FFFFFF",
          },
          body: {
            DEFAULT: "#2A2A4A",
            dark: "#E0E3FF",
          },
          muted: {
            DEFAULT: "#4A4A6B",
            dark: "#B8BCF0",
          },
          link: "#5A4AD0",
        },
      },

      // ═══════════════════════════════════════════════════════════════════
      // TYPOGRAPHY
      // Font families and text styles
      // ═══════════════════════════════════════════════════════════════════
      fontFamily: {
        heading: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },

      fontSize: {
        display: [
          "64px",
          { lineHeight: "1.1", fontWeight: "700", letterSpacing: "-0.02em" },
        ],
        h1: [
          "48px",
          { lineHeight: "1.2", fontWeight: "600", letterSpacing: "-0.01em" },
        ],
        h2: ["32px", { lineHeight: "1.25", fontWeight: "600" }],
        h3: ["24px", { lineHeight: "1.3", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        caption: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
        small: ["12px", { lineHeight: "1.4", fontWeight: "400" }],
      },

      // ═══════════════════════════════════════════════════════════════════
      // SPACING SCALE
      // Consistent spacing tokens (use: p-16, m-32, gap-24, etc.)
      // ═══════════════════════════════════════════════════════════════════
      spacing: {
        // 4: '4px',
        // 8: '8px',
        // 12: '12px',
        // 16: '16px',
        // 20: '20px',
        // 24: '24px',
        // 32: '32px',
        // 40: '40px',
        // 48: '48px',
        // 56: '56px',
        // 64: '64px',
        // 80: '80px',
        // 96: '96px',
        // 120: '120px',
      },

      // ═══════════════════════════════════════════════════════════════════
      // BORDER RADIUS
      // Rounded corner tokens
      // ═══════════════════════════════════════════════════════════════════
      borderRadius: {
        sm: "6px",
        DEFAULT: "8px",
        md: "10px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        full: "9999px",
      },

      // ═══════════════════════════════════════════════════════════════════
      // BOX SHADOW
      // Subtle enterprise-appropriate shadows
      // ═══════════════════════════════════════════════════════════════════
      boxShadow: {
        sm: "0 1px 2px 0 rgba(22, 22, 63, 0.04)",
        DEFAULT: "0 2px 8px 0 rgba(22, 22, 63, 0.06)",
        md: "0 4px 16px 0 rgba(22, 22, 63, 0.08)",
        lg: "0 8px 32px 0 rgba(22, 22, 63, 0.10)",
        xl: "0 16px 48px 0 rgba(22, 22, 63, 0.12)",
        inner: "inset 0 2px 4px 0 rgba(22, 22, 63, 0.04)",
        focus: "0 0 0 3px rgba(106, 90, 224, 0.25)",
        "focus-error": "0 0 0 3px rgba(229, 83, 61, 0.25)",
        "dark-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.2)",
        dark: "0 2px 8px 0 rgba(0, 0, 0, 0.3)",
        "dark-md": "0 4px 16px 0 rgba(0, 0, 0, 0.35)",
        "dark-lg": "0 8px 32px 0 rgba(0, 0, 0, 0.4)",
      },

      // ═══════════════════════════════════════════════════════════════════
      // BREAKPOINTS
      // Responsive design breakpoints
      // ═══════════════════════════════════════════════════════════════════
      screens: {
        mobile: "375px",
        sm: "640px",
        tablet: "768px",
        md: "768px",
        lg: "1024px",
        desktop: "1440px",
        xl: "1440px",
        widescreen: "1920px",
        "2xl": "1920px",
      },

      // ═══════════════════════════════════════════════════════════════════
      // GRADIENTS
      // Brand gradient backgrounds
      // ═══════════════════════════════════════════════════════════════════
      backgroundImage: {
        "gradient-hero-light":
          "linear-gradient(135deg, #6A5AE0 0%, #8F84FF 50%, #4DC3FF 100%)",
        "gradient-hero-dark":
          "linear-gradient(135deg, #7A6FF0 0%, #4E5BFF 100%)",
        "gradient-subtle": "linear-gradient(180deg, #F7F8FF 0%, #FFFFFF 100%)",
        "gradient-card":
          "linear-gradient(135deg, rgba(106, 90, 224, 0.05) 0%, rgba(77, 195, 255, 0.05) 100%)",
        "gradient-text": "linear-gradient(135deg, #6A5AE0 0%, #4DC3FF 100%)",
        "gradient-text-dark":
          "linear-gradient(135deg, #7A6FF0 0%, #63D2FF 100%)",
      },

      // ═══════════════════════════════════════════════════════════════════
      // TRANSITIONS
      // Animation timing functions
      // ═══════════════════════════════════════════════════════════════════
      transitionDuration: {
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
      },
      transitionTimingFunction: {
        "ease-out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "ease-out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },

      // ═══════════════════════════════════════════════════════════════════
      // ANIMATIONS
      // Keyframe animations
      // ═══════════════════════════════════════════════════════════════════
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in-down": "fadeInDown 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        "slide-in-right": "slideInRight 0.4s ease-out forwards",
        "slide-in-left": "slideInLeft 0.4s ease-out forwards",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
