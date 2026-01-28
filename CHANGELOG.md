# Changelog

All notable changes to the Altivra website are documented here.

## [Unreleased]

### Pending
- Connect custom domain (altivra.co)
- Update all URLs from altivra.com to altivra.co
- Create og-image.jpg for social sharing
- Add client logos to trusted-by section
- Set up CMS (Tina.io or similar)

---

## [1.0.0] - 2026-01-28

### Added
- Initial website launch on Cloudflare Pages
- Markdown-based blog system with 7 posts
- Homepage with hero, services, testimonials, FAQ sections
- About page with founder profile and company info
- Blog listing and individual post pages
- Case studies section with 2 case studies
- Process page explaining 6-step engagement
- Service pages: Quote Automation, Document Processing
- Location pages: Singapore, Thailand, Indonesia (geo SEO)
- Privacy policy and Terms of service
- 404 error page
- Mobile responsive design
- SEO optimizations:
  - Sitemap.xml
  - Robots.txt
  - RSS feed
  - Schema.org markup (Organization, FAQPage, LocalBusiness, Article)
  - Open Graph and Twitter cards
  - Canonical URLs

### Technical
- Static HTML/CSS/JS (no build step)
- Markdown blog posts with marked.js parser
- Cloudflare Pages hosting
- Git-based deployment from GitHub

---

## Development Log

### 2026-01-28
- Migrated from Netlify to Cloudflare Pages (bandwidth limits issue)
- Converted blog from JSON to Markdown files
- Added 404 page and _redirects
- Updated feed.xml with all blog posts
- Added FAQPage schema for rich results
- Created README.md and CHANGELOG.md

### 2026-01-27
- Added Speaking & Thought Leadership section
- Created service landing pages (quote-automation, document-processing)
- Created location pages (Singapore, Thailand, Indonesia)
- Created process.html with 6-step engagement flow
- Added 7 SEO-targeted blog posts
- Updated sitemap with all new pages
- Enhanced about page with founder credentials
- Added trust badges and client logos section

### 2026-01-26
- Initial site creation with Playex-inspired design
- Homepage, About, Blog, Case Studies pages
- Set up Netlify CMS (later replaced)
- Added testimonials and case studies JSON
- Basic SEO setup (meta tags, sitemap, robots.txt)

---

## Version History

| Version | Date | Description |
|---------|------|-------------|
| 1.0.0 | 2026-01-28 | Initial launch on Cloudflare Pages |

---

## How to Update This Log

When making changes:

1. Add entry under `[Unreleased]` section
2. When deploying major update, move unreleased items to new version
3. Use categories: Added, Changed, Fixed, Removed, Security
4. Include date in Development Log for detailed tracking
