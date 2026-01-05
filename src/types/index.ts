/**
 * ═══════════════════════════════════════════════════════════════════════════
 * KALKI AUTOMATION - TYPESCRIPT TYPE DEFINITIONS
 * Type definitions for pages, navigation, and data structures
 * ═══════════════════════════════════════════════════════════════════════════
 */

export interface PageMetadata {
  title: string;
  description?: string;
  slug: string;
  path: string;
  priority?: 'High' | 'Medium' | 'Low' | 'Very High';
  badge?: 'Popular' | 'Hot' | 'Premium' | 'Growth' | 'Flexible';
}

export interface NavigationItem {
  label: string;
  href: string;
  type?: 'link' | 'dropdown' | 'megamenu' | 'cta';
  children?: NavigationItem[];
  description?: string;
  badge?: string;
}

export interface ServicePage extends PageMetadata {
  category: 'Core Development' | 'Web Solutions' | 'Strategic Services' | 'Team & Support';
  icon?: string;
}

export interface ExpertisePage extends PageMetadata {
  focusArea: string;
}

export interface TechnologyPage extends PageMetadata {
  category: 'Backend' | 'Frontend' | 'Mobile';
  useCase?: string;
}

export interface CompanyPage extends PageMetadata {
  purpose: string;
}

