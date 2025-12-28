# Folse Tech - Next.js Web Design & SEO Platform

Premium responsive web design, ecommerce development, and SEO services for businesses in Gonzales, Baton Rouge, and Prairieville, Louisiana.

## Tech Stack

- **Framework**: Next.js 14.0.0
- **UI**: React 18.2.0 + TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.0 + shadcn/ui
- **Deployment**: AWS Amplify

## Project Structure

```
app/
├── page.tsx                               # Homepage
├── layout.tsx                             # Root layout
├── [city]/page.tsx                        # City pages (dynamic)
├── blog/[slug]/page.tsx                   # Blog posts
├── services/                              # Service detail pages
│   ├── responsive-web-design/page.tsx
│   ├── ecommerce-website-development/page.tsx
│   └── seo-services/page.tsx
├── gonzales-web-design/page.tsx           # Location-specific landing
├── baton-rouge-web-design/page.tsx        # Location-specific landing
├── api/                                   # API routes
│   ├── ai/generate/route.ts               # AI content generation
│   └── contact/route.ts                   # Contact form
├── components/                            # React components
├── lib/                                   # Utilities & helpers
│   ├── seo.ts                             # SEO metadata
│   ├── ai.ts                              # AI APIs
│   ├── posts.ts                           # Blog data
│   ├── social.ts                          # Social APIs
│   └── utils.ts                           # CSS utilities
└── globals.css                            # Global styles
```

## Quick Start

```bash
cd folse-tech-nextjs
npm install
npm run dev        # Development: http://localhost:3000
npm run build      # Production build
npm start          # Production server
```

## Key Features

✅ **Responsive Web Design** - Mobile-first, fully responsive  
✅ **Local SEO Optimization** - City-specific pages with schema markup  
✅ **E-Commerce Ready** - Product showcase & conversion forms  
✅ **Performance Optimized** - SWC minification, image optimization  
✅ **TypeScript** - Full type safety with strict mode  
✅ **Tailwind CSS** - Utility-first styling with shadcn/ui  
✅ **AWS Amplify Ready** - Static export for serverless deployment  

## Content Pages

- `/` - Homepage with service overview
- `/[city]` - City landing pages (Gonzales, Baton Rouge, Prairieville, Denham Springs)
- `/gonzales-web-design` - Optimized landing for "Web Design Gonzales LA"
- `/baton-rouge-web-design` - Optimized landing for "Web Design Baton Rouge LA"
- `/services/*` - Detailed service pages (responsive design, ecommerce, SEO)
- `/blog` - Blog listing and articles

## Configuration

**Environment Variables** (`.env.local`):
```
NEXT_PUBLIC_GA_ID=your-analytics-id
ANTHROPIC_API_KEY=optional
```

**Next.js** - Static export, image optimization, security headers  
**Tailwind** - Dynamic content support, clean configuration  
**TypeScript** - Strict mode, path aliases (@/*)  

## Documentation

Comprehensive guides in `/docs/`:
- `README.md` - Documentation index
- `CONTENT_LIBRARY.md` - Content reference
- `CONTENT_IMPLEMENTATION_GUIDE.md` - How-to guides
- `CONTENT_QUICK_REFERENCE.md` - Quick lookup
- `SEO_OPTIMIZATION.md` - SEO best practices

## SEO & Content

**Target Keywords:**
- Web Design Gonzales LA
- Web Design Baton Rouge LA
- Responsive Web Design Louisiana
- Ecommerce Web Design

**E-E-A-T Principles:** Expertise, Experience, Authoritativeness, Trustworthiness  
**Update Schedule:** Monthly blog, quarterly keyword review, annual SEO audit

## Deployment

Automatic via AWS Amplify (`amplify.yml`):
1. Code push triggers build
2. Runs `npm run build`
3. Outputs to `out/` directory
4. Global CDN distribution

## Support

**Contact:** jon@folsetech.net | 225-313-1914  
**Questions?** See `/docs/README.md` for detailed guides
