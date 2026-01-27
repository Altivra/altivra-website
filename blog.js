// Blog System JavaScript
// Works with Netlify CMS - reads from posts.json

const SITE_URL = 'https://altivra.com'; // Update this after deployment

// Sample posts data - This will be replaced by Netlify CMS
let postsData = [
    {
        slug: "why-generic-ai-fails-complex-businesses",
        title: "Why Generic AI Tools Fail Complex Businesses",
        excerpt: "ChatGPT and off-the-shelf AI tools promise the world. But when you're dealing with complex products, internal data, and high-stakes decisions, they fall short. Here's why — and what actually works.",
        content: `
            <p>Every week, a new AI tool promises to revolutionize your business. Just plug it in, they say. It'll handle everything.</p>

            <p>But if you've tried using ChatGPT or similar tools for real business operations, you've probably noticed something: <strong>they hallucinate on your specific data</strong>.</p>

            <h2>The Problem with Generic AI</h2>

            <p>Generic AI tools are trained on the internet. They know a lot about a lot of things. But they don't know:</p>

            <ul>
                <li>Your product catalog and pricing rules</li>
                <li>Your historical transactions and customer patterns</li>
                <li>Your internal processes and compliance requirements</li>
                <li>The nuances of your industry</li>
            </ul>

            <p>When you ask them to generate a quote, process a document, or answer a customer question, they're essentially guessing. Sometimes they're right. Often they're confidently wrong.</p>

            <h2>What Actually Works</h2>

            <p>The businesses seeing real ROI from AI aren't using off-the-shelf tools. They're building custom systems that:</p>

            <ol>
                <li><strong>Connect to their actual data</strong> — PDFs, databases, emails, historical records</li>
                <li><strong>Understand their specific context</strong> — products, processes, terminology</li>
                <li><strong>Integrate into existing workflows</strong> — not a separate tool, but part of how work gets done</li>
                <li><strong>Prioritize accuracy over impressiveness</strong> — because wrong answers are worse than no answers</li>
            </ol>

            <h2>The Bottom Line</h2>

            <p>If your business deals with complexity — complex products, complex data, complex decisions — generic AI won't cut it. You need AI that's built for your specific reality.</p>

            <p>That's what we build at Altivra. Not impressive demos, but production systems your team uses daily.</p>
        `,
        category: "ai-systems",
        author: "Altivra Team",
        date: "2026-01-25",
        readTime: "4 min read",
        image: "",
        keywords: ["AI for business", "custom AI", "ChatGPT limitations", "enterprise AI", "B2B automation"]
    },
    {
        slug: "from-hours-to-minutes-quote-generation",
        title: "From Hours to Minutes: Automating Quote Generation with AI",
        excerpt: "How we helped a professional services firm cut their quoting time from 3 hours to 5 minutes — without sacrificing accuracy or losing the human touch.",
        content: `
            <p>Quote generation is one of those tasks that seems simple until you actually do it. Pull product specs, check pricing rules, account for customer history, factor in current promotions, ensure compliance... suddenly three hours have passed.</p>

            <h2>The Challenge</h2>

            <p>A professional services firm came to us with a problem: their sales team was spending 40% of their time on quote generation. Not selling. Not building relationships. Just pulling together quotes.</p>

            <p>The information existed — in PDFs, spreadsheets, their CRM, and their ERP. But piecing it together was manual, tedious, and error-prone.</p>

            <h2>The Solution</h2>

            <p>We built a custom AI system that:</p>

            <ul>
                <li>Connects to all their data sources (CRM, ERP, product database, pricing rules)</li>
                <li>Understands their specific products and pricing logic</li>
                <li>Generates accurate quotes based on customer requirements</li>
                <li>Flags anything unusual for human review</li>
            </ul>

            <p>The key wasn't replacing human judgment — it was eliminating the manual data gathering and calculation that consumed most of the time.</p>

            <h2>The Results</h2>

            <ul>
                <li><strong>Quote generation time:</strong> 3 hours → 5 minutes</li>
                <li><strong>Error rate:</strong> Down 90%</li>
                <li><strong>Sales team capacity:</strong> Up 35%</li>
            </ul>

            <h2>The Lesson</h2>

            <p>AI isn't about replacing people. It's about eliminating the tedious work so people can focus on what actually requires human intelligence: building relationships, solving complex problems, closing deals.</p>
        `,
        category: "case-studies",
        author: "Altivra Team",
        date: "2026-01-20",
        readTime: "3 min read",
        image: "",
        keywords: ["quote automation", "sales automation", "AI case study", "operational efficiency", "B2B sales"]
    },
    {
        slug: "ai-readiness-checklist-for-operations",
        title: "Is Your Business Ready for AI? A Practical Checklist",
        excerpt: "Not every business is ready for AI. Here's how to assess whether you're in a position to actually benefit from custom AI systems — and what to fix first if you're not.",
        content: `
            <p>AI is not magic. It's a tool. And like any tool, it works best when certain conditions are met.</p>

            <p>Before investing in custom AI systems, ask yourself these questions:</p>

            <h2>1. Do you have a clear, repetitive process that takes significant time?</h2>

            <p>AI excels at automating well-defined, repetitive tasks. If your team spends hours doing the same type of work — processing documents, generating reports, answering similar questions — that's a good candidate.</p>

            <p><strong>Red flag:</strong> "We want AI to figure out what we should do." AI augments clear processes; it doesn't create strategy from scratch.</p>

            <h2>2. Is your data accessible?</h2>

            <p>AI needs data to work with. If your critical information is scattered across paper files, personal email inboxes, and tribal knowledge, you need to digitize and organize first.</p>

            <p><strong>Good signs:</strong> Data in databases, CRMs, structured documents, accessible APIs.</p>

            <h2>3. Do you have volume?</h2>

            <p>If you process 5 documents a month, automation might not be worth it. If you process 500, the math changes dramatically.</p>

            <h2>4. Can you measure success?</h2>

            <p>Before building, you should know: What does "working" look like? Time saved? Errors reduced? Revenue increased? If you can't measure it, you can't prove value.</p>

            <h2>5. Do you have someone who owns this?</h2>

            <p>AI projects need an internal champion — someone who understands the process, can make decisions, and will ensure adoption. Without this, even great systems fail.</p>

            <h2>The Bottom Line</h2>

            <p>If you checked all five boxes, you're ready. If not, that's okay — focus on getting those foundations in place first. The AI will still be here when you're ready.</p>
        `,
        category: "insights",
        author: "Altivra Team",
        date: "2026-01-15",
        readTime: "5 min read",
        image: "",
        keywords: ["AI readiness", "digital transformation", "business automation", "AI implementation", "operational efficiency"]
    }
];

// Load posts from JSON file (for Netlify CMS)
async function loadPostsData() {
    try {
        const response = await fetch('posts.json');
        if (response.ok) {
            const data = await response.json();
            if (data.posts && data.posts.length > 0) {
                postsData = data.posts;
            }
        }
    } catch (e) {
        // Use default sample posts if JSON doesn't exist yet
        console.log('Using sample posts data');
    }
}

// Render blog posts grid
function renderPosts(posts, container) {
    if (!container) return;

    if (posts.length === 0) {
        document.getElementById('empty-state').style.display = 'block';
        container.innerHTML = '';
        return;
    }

    document.getElementById('empty-state').style.display = 'none';

    container.innerHTML = posts.map(post => `
        <article class="post-card" data-category="${post.category}">
            <a href="post.html?slug=${post.slug}">
                ${post.image ? `<div class="post-card-image"><img src="${post.image}" alt="${post.title}" loading="lazy"></div>` : ''}
                <div class="post-card-content">
                    <div class="post-card-meta">
                        <span class="post-card-category">${formatCategory(post.category)}</span>
                        <span class="post-card-date">${formatDate(post.date)}</span>
                    </div>
                    <h2 class="post-card-title">${post.title}</h2>
                    <p class="post-card-excerpt">${post.excerpt}</p>
                    <div class="post-card-footer">
                        <span class="post-card-read-time">${post.readTime}</span>
                        <span class="post-card-link">Read more →</span>
                    </div>
                </div>
            </a>
        </article>
    `).join('');
}

// Load individual post
function loadPost(slug) {
    const post = postsData.find(p => p.slug === slug);

    if (!post) {
        window.location.href = 'blog.html';
        return;
    }

    // Update page content
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-excerpt').textContent = post.excerpt;
    document.getElementById('post-category').textContent = formatCategory(post.category);
    document.getElementById('post-date').textContent = formatDate(post.date);
    document.getElementById('post-read-time').textContent = post.readTime;
    document.getElementById('post-author').textContent = post.author;
    document.getElementById('post-content').innerHTML = post.content;
    document.getElementById('breadcrumb-title').textContent = post.title;

    // Handle featured image
    const imageContainer = document.getElementById('post-image-container');
    if (post.image) {
        document.getElementById('post-image').src = post.image;
        document.getElementById('post-image').alt = post.title;
    } else {
        imageContainer.style.display = 'none';
    }

    // Update SEO meta tags
    const pageUrl = `${SITE_URL}/post.html?slug=${slug}`;
    document.getElementById('page-title').textContent = `${post.title} | Altivra Blog`;
    document.getElementById('meta-description').content = post.excerpt;
    document.getElementById('meta-keywords').content = post.keywords ? post.keywords.join(', ') : '';
    document.getElementById('canonical-url').href = pageUrl;

    // Open Graph
    document.getElementById('og-url').content = pageUrl;
    document.getElementById('og-title').content = post.title;
    document.getElementById('og-description').content = post.excerpt;
    document.getElementById('og-image').content = post.image || `${SITE_URL}/og-default.jpg`;
    document.getElementById('og-published').content = post.date;

    // Twitter
    document.getElementById('twitter-url').content = pageUrl;
    document.getElementById('twitter-title').content = post.title;
    document.getElementById('twitter-description').content = post.excerpt;
    document.getElementById('twitter-image').content = post.image || `${SITE_URL}/og-default.jpg`;

    // Structured Data
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image || `${SITE_URL}/og-default.jpg`,
        "author": {
            "@type": "Organization",
            "name": post.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "Altivra",
            "logo": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/logo-full.png`
            }
        },
        "datePublished": post.date,
        "dateModified": post.date,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": pageUrl
        },
        "keywords": post.keywords ? post.keywords.join(', ') : ''
    };
    document.getElementById('article-schema').textContent = JSON.stringify(schema);

    // Share buttons
    const shareTitle = encodeURIComponent(post.title);
    const shareUrl = encodeURIComponent(pageUrl);

    document.getElementById('share-linkedin').href = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
    document.getElementById('share-twitter').href = `https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`;

    document.getElementById('share-copy').addEventListener('click', () => {
        navigator.clipboard.writeText(pageUrl).then(() => {
            alert('Link copied to clipboard!');
        });
    });

    // Load related posts
    loadRelatedPosts(post);
}

// Load related posts
function loadRelatedPosts(currentPost) {
    const relatedContainer = document.getElementById('related-posts');
    if (!relatedContainer) return;

    const related = postsData
        .filter(p => p.slug !== currentPost.slug)
        .filter(p => p.category === currentPost.category ||
                     (currentPost.keywords && p.keywords &&
                      p.keywords.some(k => currentPost.keywords.includes(k))))
        .slice(0, 3);

    if (related.length === 0) {
        relatedContainer.parentElement.style.display = 'none';
        return;
    }

    relatedContainer.innerHTML = related.map(post => `
        <a href="post.html?slug=${post.slug}" class="related-post-card">
            <span class="related-post-category">${formatCategory(post.category)}</span>
            <h3>${post.title}</h3>
            <span class="related-post-read-time">${post.readTime}</span>
        </a>
    `).join('');
}

// Filter posts by category
function filterPosts(category) {
    const filtered = category === 'all'
        ? postsData
        : postsData.filter(p => p.category === category);

    renderPosts(filtered, document.getElementById('posts-grid'));
}

// Format category for display
function formatCategory(category) {
    const categories = {
        'ai-systems': 'AI Systems',
        'automation': 'Automation',
        'case-studies': 'Case Studies',
        'insights': 'Insights'
    };
    return categories[category] || category;
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Initialize blog page
document.addEventListener('DOMContentLoaded', async function() {
    await loadPostsData();

    const postsGrid = document.getElementById('posts-grid');
    if (postsGrid) {
        renderPosts(postsData, postsGrid);

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                filterPosts(this.dataset.category);
            });
        });
    }

    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            // Replace with actual newsletter signup
            alert('Thanks for subscribing! (Connect this to your email service)');
            this.reset();
        });
    }
});
