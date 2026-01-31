# Altivra Website

Custom AI systems for revenue and operations.

## Live URLs

- **Production:** https://altivra.co
- **Staging:** https://altivra-website.pages.dev

## Tech Stack

- **Hosting:** Cloudflare Pages
- **Frontend:** Static HTML, CSS, JavaScript
- **Blog:** Markdown files with client-side rendering (marked.js)
- **Forms:** Formspree
- **Testing:** Playwright

## Project Structure

```
├── index.html              # Homepage
├── about.html              # About page
├── blog.html               # Blog listing
├── post.html               # Individual blog post template
├── case-studies.html       # Case studies listing
├── case-study.html         # Individual case study template
├── process.html            # Our process page
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
├── 404.html                # Error page
│
├── guide/                  # Lead magnet content
│   └── ai-strategy-guide.html
│
├── services/               # Service landing pages
│   ├── quote-automation.html
│   └── document-processing.html
│
├── locations/              # Geo-targeted pages
│   ├── singapore.html
│   ├── thailand.html
│   └── indonesia.html
│
├── posts/                  # Blog posts (Markdown)
│   ├── ai-automation-southeast-asia-2026-trends.md
│   ├── how-to-choose-ai-vendor-guide.md
│   └── ...
│
├── posts-index.json        # Blog post metadata for listing
├── case-studies.json       # Case study data
├── testimonials.json       # Testimonials data
│
├── styles.css              # All styles
├── script.js               # Main JavaScript
├── blog.js                 # Blog system JavaScript
│
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine directives
├── feed.xml                # RSS feed
├── _redirects              # Cloudflare/Netlify redirects
└── serve.json              # Local dev server config
```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start local server:
   ```bash
   npm run serve
   ```

3. Open http://localhost:3000

4. Make changes and refresh browser to preview

### Testing

```bash
npm test                # Run Playwright tests
npm run test:headed     # Run with browser visible
npm run test:ui         # Interactive UI mode
```

## Deployment

Automatic deployment on push to `main` branch:

```bash
git add .
git commit -m "Description of changes"
git push
```

Cloudflare Pages will automatically deploy within ~1 minute.

## Adding a Blog Post

1. Create new file in `/posts/` folder:
   ```
   posts/my-new-post.md
   ```

2. Add frontmatter and content:
   ```markdown
   ---
   title: "Post Title"
   slug: my-new-post
   date: 2026-01-29
   author: Alexander Lee
   category: insights
   excerpt: "Short description for listing page."
   readTime: "5 min read"
   image: ""
   ---

   Your markdown content here...
   ```

3. Add entry to `posts-index.json`

4. Commit and push

## SEO Files

- `sitemap.xml` - Update when adding new pages
- `feed.xml` - Update when adding blog posts
- `robots.txt` - Search engine rules

## Contact

- Email: alexander@altivra.co
- Website: https://altivra.co
