# Changelog

All notable changes to the 41 Labs website are documented here.

## [Unreleased]

### Pending
- Create og-image.jpg for social sharing
- Add real product screenshots to replace placeholders
- Submit sitemap to Google Search Console
- Request re-indexing of key pages in Search Console

---

## [2.0.0] - 2026-02-06

### Changed (Complete Rebrand)
- Rebranded from "Altivra" to "41 Labs" across all pages and files
- Changed domain from altivra.co to 41labs.ai
- Updated email from alexander@altivra.co to alexander@41labs.ai
- Updated LinkedIn URL from /company/altivra-ai to /company/fortyonelabs
- Updated GitHub repository references to 41Labs/41labs-website
- Replaced logo files with new 41 Labs branding

### Updated Files
- All 14+ HTML pages (brand name, domain, email, LinkedIn)
- sitemap.xml, robots.txt, feed.xml (URLs)
- package.json, admin/config.yml (repository references)
- blog.js, script.js, styles.css (comments and brand references)
- testimonials.json, posts.json (brand mentions)
- CMS-SETUP.md, README.md (documentation)
- Test files (brand assertions)

---

## [1.4.0] - 2026-01-31

### Fixed
- Mobile layout: founder section container padding, process step alignment, footer centering
- Off-brand purple gradient on trust badge hover replaced with green accent (#4ade80)
- Trust badge icon box background changed from purple to green

---

## [1.3.0] - 2026-01-30

### Added
- Meet the Founder section with card layout, photo, credentials, and LinkedIn link
- 4 new detailed industry case studies: Logistics & Freight, Insurance, Real Estate, Education
- Each case study includes TL;DR section for quick scanning
- AI Strategy Guide page (`/guide/ai-strategy-guide.html`) with 5 strategies
- Country flag images from flagcdn.com (replacing broken emoji flags on Windows)
- `serve.json` for local dev with `cleanUrls: false`

### Changed
- Replaced Speaking & Thought Leadership section with Meet the Founder
- Nav CTA changed from "Book a Call" to "Free Strategy Call" across all 14 pages
- Company LinkedIn updated to `/company/altivra-ai/` across all pages
- Blog and case study routing switched from query params (`?slug=`) to hash routing (`#slug`)
- Case study result tags changed from dark pills to light grey badges
- About page: "The Team" renamed to "Leadership" with subtitle
- Removed "10+ years in operations" credential
- "Sound Familiar?" changed from small label to proper h2 heading
- Problem icons increased from 2rem to 3rem

### Fixed
- UTF-8 double-encoding issues (em dashes, arrows, emojis) across all pages
- Blog and case study pages not loading due to serve package stripping query params
- LinkedIn button styling on about page (overrode base circle styles)
- Broken flag emojis on Windows replaced with flag images
- case-study.html testimonial em dash encoding (switched to innerHTML with &mdash;)
- Contact form connected to Formspree backend

### Removed
- Lead magnet exit-intent popup (HTML removed, CSS/JS remnants to clean up)
- Old Speaking & Thought Leadership section

### Deployment
- Deployed to Cloudflare Pages with custom domain altivra.co
- Migrated DNS from Squarespace/GoDaddy nameservers to Cloudflare

---

## [1.2.0] - 2026-01-29

### Changed (UI Overhaul)
- Replaced "Industries We Serve" / "Who We Work With" with animated Past Clients carousel
- Primary CTA buttons now use purple-violet gradient with glowing shadows
- Stat numbers use gradient text for visual emphasis
- Trust badge cards now have gradient border hover effects
- Reduced nav logo from 80px to 40px

### Added
- Infinite-scrolling Past Clients carousel with 7 anonymised client descriptions
- Each client tag has unique gradient color to represent industry diversity
- Pause-on-hover and fade-edge effects on carousel
- Hover lift and brightness effects on client tags

### Design System
- Introduced purple-violet gradient (`#667eea` → `#764ba2`) as primary accent (later replaced with green)
- 7 distinct gradient palettes for client tags (purple, pink, blue, green, coral, deep-purple, orange)
- Consistent gradient shadows and hover states across buttons, stats, and cards

---

## [1.1.0] - 2026-01-28

### Changed (Best Practices Update)
- Rewrote hero section for ICP (decision makers at service-based businesses)
- Added product visual placeholders in hero and use cases sections
- Moved testimonials section immediately after hero for social proof
- Added social proof stats bar with key metrics
- Updated "What We Do" to "What You Get" with You-centric copy
- Updated "Who It's For" with ICP-focused messaging
- Expanded "How It Works" from 3 to 4 steps with timeline
- Added product screenshot placeholders in use cases
- Updated CTA section with qualifying questions form
- Flipped all copy from We-centric to You-centric
- Updated all URLs from altivra.com to altivra.co

### Added
- Contact form with qualifying questions
- Social proof stats bar (85% faster quotes, 4-8 weeks, 0 failed pilots)
- Product visual placeholder components
- Form handler in script.js

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

### 2026-01-31 (v1.4.0)
- Fixed mobile layout: founder section, process steps, footer alignment
- Replaced off-brand purple trust badge hover with green accent

### 2026-01-30 (v1.3.0)
- Added Meet the Founder section replacing Speaking section
- Added 4 new industry case studies (logistics, insurance, real estate, education)
- Created AI strategy guide page
- Fixed all UTF-8 encoding issues (em dashes, arrows, emojis)
- Switched blog/case study routing from query params to hash routing
- Updated nav CTA to "Free Strategy Call" and LinkedIn to /company/altivra-ai/
- Deployed to Cloudflare Pages with custom domain altivra.co
- Connected contact form to Formspree
- Added country flag images replacing broken emoji flags
- Added/removed lead magnet popup

### 2026-01-29 (v1.2.0)
- UI overhaul: added gradient design system across site
- Replaced static industry/client-type tags with animated Past Clients carousel
- Each client shows anonymised description (industry, revenue/team size, results)
- Updated CTA buttons, stat numbers, and trust badges with gradient accents
- Reduced logo size for cleaner navigation

### 2026-01-28 (v1.1.0)
- Major best practices update based on B2B AI Website Best Practices audit
- Rewrote hero with ICP focus and product visual
- Moved social proof above fold
- Added contact form with qualifying questions
- Updated all copy to be You-centric
- Updated all URLs to altivra.co domain

### 2026-01-28 (v1.0.0)
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
| 1.4.0 | 2026-01-31 | Mobile layout fixes, remove off-brand purple |
| 1.3.0 | 2026-01-30 | Founder section, 4 case studies, Cloudflare deploy, encoding fixes |
| 1.2.0 | 2026-01-29 | Gradient UI overhaul and Past Clients carousel |
| 1.1.0 | 2026-01-28 | Best practices update (ICP copy, social proof) |
| 1.0.0 | 2026-01-28 | Initial launch on Cloudflare Pages |

---

## How to Update This Log

When making changes:

1. Add entry under `[Unreleased]` section
2. When deploying major update, move unreleased items to new version
3. Use categories: Added, Changed, Fixed, Removed, Security
4. Include date in Development Log for detailed tracking
