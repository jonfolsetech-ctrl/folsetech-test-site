# Folse Tech - Quick Reference Guide

## 📌 Key Files for SEO & Maintenance

### SEO Configuration Files
| File | Purpose | Notes |
|------|---------|-------|
| `/app/layout.tsx` | Root metadata | SEO title, description, OpenGraph, Twitter Cards |
| `/app/components/SEOJsonLd.tsx` | Structured data | Schema.org JSON-LD for Google |
| `/app/sitemap.ts` | Main sitemap | Generates sitemap.xml for homepage, blog, cities |
| `/app/cities/sitemap.ts` | Location sitemap | Separate sitemap for city pages |
| `/public/robots.txt` | Crawler directives | Tell Google what to crawl/avoid |

### Documentation
| File | Purpose |
|------|---------|
| `/docs/SEO_OPTIMIZATION.md` | Comprehensive SEO guide |
| `/PROJECT_STATUS.md` | Project overview & status |
| `/ORGANIZATION_SUMMARY.txt` | Cleanup completion summary |

## 🔧 Common Tasks

### Update SEO Title & Description
**File:** `/app/layout.tsx`
```tsx
export const metadata: Metadata = {
  title: "Your New Title Here",
  description: "Your new description here",
  // ... rest of metadata
};
```

### Add New Service (with expandable modal)
**File:** `/app/page.tsx`

1. Add to features array:
```tsx
{ 
  title: "Service Name", 
  description: "Short description",
  id: "service-id",
  fullContent: {
    tagline: "Tagline here",
    description: "Full description",
    features: [
      { title: "Feature 1", description: "Details..." },
      // ... 3 more features
    ],
    perfectFor: ["Audience 1", "Audience 2", ...],
    cta: "Call to action"
  }
},
```

### Update Service Areas
**File:** `/app/components/SEOJsonLd.tsx`
```tsx
const serviceAreas = [
  "Gonzales, LA",
  "Your New Area",
  // ...
];
```

### Change Domain (www vs non-www)
Update in these files:
1. `/app/layout.tsx` - `metadataBase`
2. `/app/sitemap.ts` - `baseUrl`
3. `/app/components/SEOJsonLd.tsx` - `baseUrl`
4. `/public/robots.txt` - Sitemap URLs

### Add Blog Post
**File:** `/app/lib/posts.ts`
```tsx
const posts = [
  {
    slug: "my-new-post",
    title: "My New Post",
    date: "2025-01-01",
    // ... other fields
  },
];
```
Then create `/app/blog/my-new-post/page.tsx`

## 🚀 Deployment Checklist

Before going live:
- [ ] Submit sitemap to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Verify Google Analytics 4 tracking
- [ ] Run Lighthouse audit (aim for 90+)
- [ ] Test on mobile devices
- [ ] Check Core Web Vitals
- [ ] Verify all internal links work
- [ ] Test contact form

After launch:
- [ ] Monitor Search Console daily for first week
- [ ] Check for crawl errors
- [ ] Monitor Core Web Vitals
- [ ] Track organic traffic
- [ ] Monitor keyword rankings

## 📊 Monitoring

### Key Metrics to Track
- **Organic Traffic** - Google Analytics 4
- **Keyword Rankings** - Rank tracker tool
- **Core Web Vitals** - Google Search Console
- **Crawl Errors** - Google Search Console
- **Click-Through Rate** - Google Search Console
- **Bounce Rate** - Google Analytics 4

### Tools Setup
- ✅ Google Analytics 4 (configured)
- ✅ Google Search Console (ready to submit)
- ✅ Structured Data (ready to validate)
- 📝 Bing Webmaster Tools (pending)
- 📝 Rank tracking tool (use Semrush, Ahrefs, etc)

## 🎯 SEO Priorities

### Immediate (Week 1)
1. Submit sitemap to GSC
2. Verify structured data
3. Setup Lighthouse monitoring
4. Check mobile usability

### Short-term (Month 1)
1. Publish 4-8 blog posts
2. Build 5-10 backlinks
3. Monitor keyword rankings
4. Optimize for top keywords

### Long-term (Ongoing)
1. Weekly blog posts
2. Monthly content updates
3. Quarterly deep-dives
4. Continuous optimization

## 💡 Best Practices

### On-Page SEO
- ✅ Use target keywords in title (first 60 chars)
- ✅ Write compelling meta description (155-160 chars)
- ✅ Use header hierarchy (H1, H2, H3)
- ✅ Include internal links
- ✅ Keep images optimized
- ✅ Use semantic HTML

### Content Strategy
- ✅ Target long-tail keywords
- ✅ Write for user intent
- ✅ Answer user questions
- ✅ Use clear structure
- ✅ Include CTAs
- ✅ Update outdated content

### Technical SEO
- ✅ Fast page load times
- ✅ Mobile responsive
- ✅ Secure HTTPS
- ✅ Clean URLs
- ✅ Proper redirects
- ✅ XML sitemap

### Local SEO (Louisiana Focus)
- ✅ Include location in keywords
- ✅ Build local citations
- ✅ Get local reviews
- ✅ Create location pages
- ✅ Use local schema markup
- ✅ Local link building

## 🔐 Important Notes

### Domain Configuration
- Current: `https://folsetech.net` (no www)
- All SEO files configured for this domain
- If changing, update all files listed above

### Sensitive Files
- Don't modify: `/app/lib/`, `/app/api/`
- Safe to modify: `/app/page.tsx`, `/app/layout.tsx`
- Deploy-safe: Everything (static export ready)

### Version Control
- All changes automatically tracked in Git
- Create branches for new features
- Use pull requests for review before merge

## 📞 Support Resources

### Documentation
- SEO Guide: `/docs/SEO_OPTIMIZATION.md`
- Analytics Setup: `/docs/GOOGLE_ANALYTICS_SETUP.md`
- AI Features: `/docs/AI_CONTENT_GENERATION.md`

### External Resources
- Google Search Central: https://search.google.com/search-console
- Schema.org Validation: https://validator.schema.org/
- Lighthouse: https://developers.google.com/web/tools/lighthouse
- PageSpeed Insights: https://pagespeed.web.dev/

---

**Last Updated:** December 27, 2025  
**Status:** ✅ Production Ready  
**SEO Grade:** A (Technical SEO Complete)
