---
name: on-page-seo
description: Comprehensive On-Page SEO, keyword clustering, structured data (JSON-LD), Open Graph, and search-intent aligned content optimization. Use when asked to optimize on-page SEO, generate meta titles and descriptions, implement Schema/JSON-LD (FAQPage, WebSite), add Open Graph / Twitter cards, or structure SEO-friendly page copy.
metadata:
  authors: "CompileFuture / Web Engine"
  version: "1.0.0"
---

# On-Page SEO & Structured Data Optimization

A systematic, anti-slop guide to technical and on-page SEO. Grounded in actual site content and real user search intent without keyword stuffing, fake statistics, or misleading claims.

- **Primary Source**: [`e:/vibe/skills/GENERAL_ON_PAGE_SEO_ISSUE_FAQ_PROMPT.md`](file:///e:/vibe/skills/GENERAL_ON_PAGE_SEO_ISSUE_FAQ_PROMPT.md)

---

## 1. Core Principles

1. **Inspect & Ground First**: Always inspect the existing application/page to determine the actual product, service, primary intent, and target audience. Never assume the topic or insert example keywords.
2. **Zero Inventions**: Never invent customer numbers, fake statistics, fabricated awards, certifications, or unsupported authority claims ("#1", "100% guaranteed").
3. **Accessibility First**: Never bury the primary tool or primary call-to-action underneath a massive wall of SEO text. The primary tool/action must remain immediately visible and functional.
4. **Natural Integration**: Integrate primary and secondary keywords naturally into copy and headings. Avoid awkward, robotic phrasing.

---

## 2. On-Page Elements Checklist

### Meta Tags & Headings
- **Title Tag**: Clear, concise (<60 characters), containing the primary keyword and brand name (`Keyword | Brand`).
- **Meta Description**: Compelling summary (<155 characters) explaining value proposition and encouraging click-through.
- **Canonical URL**: Absolute canonical tag referencing the production URL (`<link rel="canonical" href="https://example.com/path">`).
- **Robots Directives**: `<meta name="robots" content="index, follow">` for production; `noindex, nofollow` for staging/preview.
- **H1 Optimization**: Exactly one `<h1>` per page reflecting the primary user search intent.
- **Heading Hierarchy**: Logical `<h2>` and `<h3>` tags that group concepts hierarchically.

### Rich Metadata
- **Open Graph**:
  ```html
  <meta property="og:type" content="website">
  <meta property="og:title" content="...">
  <meta property="og:description" content="...">
  <meta property="og:url" content="...">
  <meta property="og:site_name" content="...">
  <meta property="og:image" content="...">
  <meta property="og:image:alt" content="...">
  <meta property="og:locale" content="en_US">
  ```
- **Twitter / X Cards**:
  ```html
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="...">
  <meta name="twitter:description" content="...">
  <meta name="twitter:image" content="...">
  <meta name="twitter:image:alt" content="...">
  ```

---

## 3. SEO-Friendly FAQ & Schema (JSON-LD)

When adding an FAQ section:
1. Identify genuine questions users search for (pricing, formats, privacy, device support, troubleshooting).
2. Write concise, accurate answers supported by the actual product capabilities.
3. Add matching `FAQPage` JSON-LD schema:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is this tool completely free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all core features are available for free without requiring account registration."
      }
    }
  ]
}
</script>
```

> [!CRITICAL]
> Every question and answer in JSON-LD must be visibly present on the rendered page. Hidden structured data solely for crawler manipulation is penalized.

---

## 4. Verification & Final Audit

Before finalizing:
- [ ] Primary & supporting keywords accurately reflect site functionality
- [ ] No keyword stuffing in headings or body text
- [ ] Title tag and meta description are within length boundaries
- [ ] Canonical URL matches production protocol and hostname
- [ ] Valid Open Graph and Twitter Card tags
- [ ] Valid JSON-LD with correct escaping and schema types
- [ ] All images have descriptive, non-empty `alt` attributes
