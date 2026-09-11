---
name: website-launch-checklist
description: Standard production readiness and launch quality checklist covering branding, responsiveness, SEO, FAQ, legal pages, error handling (404/500), analytics, sitemaps, robots.txt, Cloudflare configuration, and QA. Use before declaring a website or web app complete, shipping to production, or running a pre-flight quality audit.
metadata:
  authors: "CompileFuture / Web Engine"
  version: "1.0.0"
---

# Production Website Launch Checklist

Standard quality contract for web applications and production sites. An application is **never finished merely because the UI looks good**; it is only production-ready when all layers—Design, Mobile, SEO, Content, FAQ, Legal, Analytics, Error Handling, Deployment, and Security—have been validated.

- **Primary Source**: [`e:/vibe/skills/COMPILEFUTURE_WEBSITE_CHECKLIST.md`](file:///e:/vibe/skills/COMPILEFUTURE_WEBSITE_CHECKLIST.md)

---

## 1. Quality Dimensions

### 🎨 Branding & Identity
- [ ] Logo configured in SVG/high-res format
- [ ] Proper `favicon.ico`, SVG favicon, and Apple Touch Icon (`apple-touch-icon.png`)
- [ ] Web App Manifest (`site.webmanifest` / `manifest.json`)
- [ ] Verified appearance in light and dark browser chrome

### 📱 Responsive & Cross-Device QA
- [ ] Fully responsive on Mobile (375px+), Tablet (768px+), Desktop (1024px+), and Ultrawide (1440px+)
- [ ] Zero horizontal overflow or cut-off content
- [ ] Touch targets are at least 44x44px
- [ ] Primary action/tool visible above the fold on mobile viewports
- [ ] Navigation drawer / hamburger toggles cleanly

### 🔎 On-Page SEO & Metadata
- [ ] Unique, search-intent aligned Title tag and Meta Description
- [ ] Canonical URL matching production domain
- [ ] Open Graph (`og:image`, `og:title`, etc.) and Twitter Cards configured
- [ ] Semantic HTML: Exactly one `<h1>`, logical heading order (`<h2>` &rarr; `<h3>`)
- [ ] Descriptive `alt` text on all content images

### 📄 Legal & Trust Infrastructure
- [ ] Privacy Policy page linked in footer
- [ ] Terms of Service page linked in footer
- [ ] About Us / Contact page with legitimate contact channels
- [ ] Footer copyright and disclaimer

### 🚨 Error Pages
- [ ] Custom branded 404 Page (`/404`) with clear route back to homepage
- [ ] Custom 500 / server error fallback where supported

### 🤖 Search Engine Assets
- [ ] `robots.txt` allowing indexing on production; disallowing private paths
- [ ] `sitemap.xml` listing all canonical pages
- [ ] Sitemap referenced within `robots.txt`
- [ ] Preview / staging environments tagged with `noindex, nofollow`

### ☁️ Deployment & Edge Hosting (Cloudflare)
- [ ] Custom `.com` / apex domain configured with SSL/TLS
- [ ] `www` to non-`www` (or vice versa) 301 redirection
- [ ] Security headers configured (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`)
- [ ] Caching headers configured for static assets (`Cache-Control: public, max-age=31536000, immutable`)
- [ ] `workers.dev` disabled when custom domain is active on Cloudflare Workers

### 🧪 QA & Functional Verification
- [ ] Production build passes cleanly (`npm run build`)
- [ ] Zero console errors or unhandled promise rejections
- [ ] All interactive forms and buttons function with feedback states
- [ ] Lighthouse score verification (Performance, Accessibility, Best Practices, SEO)
