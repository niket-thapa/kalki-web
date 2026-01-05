# KALKI Automation Website

> Engineering Tomorrow's Digital Solutions

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with Header/Footer
│   │   ├── page.tsx            # Home page
│   │   ├── style-guide/        # Design system documentation
│   │   ├── services/[slug]/    # Dynamic service pages (12 pages)
│   │   ├── expertise/[slug]/   # Dynamic expertise pages (4 pages)
│   │   ├── technologies/[slug]/ # Dynamic technology pages (6 pages)
│   │   ├── company/[slug]/     # Dynamic company pages (4 pages)
│   │   ├── case-studies/       # Case studies listing
│   │   ├── blog/               # Blog listing
│   │   ├── privacy-policy/     # Privacy policy
│   │   └── terms-of-service/   # Terms of service
│   ├── components/
│   │   ├── Header.tsx          # Navigation component
│   │   └── Footer.tsx          # Footer component
│   ├── data/
│   │   ├── navigation.json     # Navigation structure
│   │   └── pages.json          # Page metadata
│   ├── styles/
│   │   └── globals.css         # Global styles & CSS variables
│   └── types/
│       └── index.ts            # TypeScript type definitions
├── public/                      # Static assets
├── tailwind.config.js          # Tailwind configuration
└── ...
```

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS with custom design system
- ✅ Dark mode support
- ✅ Production-ready structure
- ✅ Ready for headless CMS integration (WordPress/Strapi)
- ✅ All 28+ pages from sitemap implemented
- ✅ Complete style guide at `/style-guide`

## Pages Overview

### Services (12 pages)
- `/services/software-development`
- `/services/mobile-app-development`
- `/services/saas-development`
- `/services/wordpress-development`
- `/services/ecommerce-development`
- `/services/shopify-development`
- `/services/design-to-code`
- `/services/it-consulting`
- `/services/ai-development`
- `/services/dedicated-teams`
- `/services/qa-testing`
- `/services/technical-support`

### Expertise (4 pages)
- `/expertise/digital-transformation`
- `/expertise/internet-of-things`
- `/expertise/ui-ux-design`
- `/expertise/api-integration`

### Technologies (6 pages)
- `/technologies/java-development`
- `/technologies/python-development`
- `/technologies/php-development`
- `/technologies/javascript-development`
- `/technologies/android-development`
- `/technologies/ios-development`

### Company (4 pages)
- `/company/about`
- `/company/how-we-work`
- `/company/careers`
- `/company/contact`

### Other Pages
- `/case-studies`
- `/blog`
- `/privacy-policy`
- `/terms-of-service`
- `/style-guide`

## Adding Content to Pages

All pages are currently set up with just H1 headings. To add content:

1. **Dynamic Pages (Services, Expertise, Technologies, Company)**
   - Edit the page file in `src/app/[category]/[slug]/page.tsx`
   - Page data comes from `src/data/pages.json`

2. **Static Pages**
   - Edit the page file directly (e.g., `src/app/case-studies/page.tsx`)

3. **Future CMS Integration**
   - The data structure is ready for headless CMS
   - Pages can fetch data from WordPress/Strapi APIs
   - Update `generateStaticParams` and data fetching as needed

## Design System

Visit `/style-guide` to see:
- Color tokens
- Typography scale
- Button components
- Card components
- Form elements
- Badges & alerts
- All design system documentation

## Future CMS Integration

The project structure supports headless CMS integration:

1. **Data Layer**: `src/data/` can be replaced with API calls
2. **Type Definitions**: `src/types/` are ready for CMS schemas
3. **Page Generation**: Static generation can be replaced with ISR (Incremental Static Regeneration)

Example for WordPress integration:
```typescript
// In page.tsx
export async function generateStaticParams() {
  const posts = await fetch('https://your-cms.com/api/pages').then(res => res.json());
  return posts.map((post) => ({ slug: post.slug }));
}
```

## Customization

### Colors
Edit `tailwind.config.js` to modify the color palette.

### Typography
Fonts are loaded in `src/app/layout.tsx`. Modify the `fontFamily` in Tailwind config.

### Navigation
Edit `src/data/navigation.json` to update navigation structure.

## Deployment

The project is ready for deployment on:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

Make sure to run `npm run build` before deployment.

