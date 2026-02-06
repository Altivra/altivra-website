# Decap CMS Setup Guide

This guide will help you complete the Decap CMS setup for editing content on your 41 Labs website.

## Overview

Decap CMS (formerly Netlify CMS) provides a visual editor for:
- **Blog Posts** - Create and edit markdown blog posts
- **Testimonials** - Manage client testimonials
- **Case Studies** - Add and update case studies
- **Posts Index** - Manage the blog listing metadata

## Setup Steps

### Step 1: Create GitHub OAuth App

1. Go to GitHub: **Settings → Developer settings → OAuth Apps**
2. Click **"New OAuth App"**
3. Fill in the details:
   - **Application name**: `41 Labs CMS`
   - **Homepage URL**: `https://41labs-website.pages.dev` (or your custom domain)
   - **Authorization callback URL**: `https://41labs-website.pages.dev/api/auth`
4. Click **"Register application"**
5. Copy the **Client ID**
6. Click **"Generate a new client secret"** and copy the **Client Secret**

### Step 2: Add Environment Variables to Cloudflare

1. Go to **Cloudflare Dashboard → Pages → 41labs-website**
2. Click **Settings → Environment variables**
3. Add these variables (for both Production and Preview):

| Variable Name | Value |
|--------------|-------|
| `GITHUB_CLIENT_ID` | Your GitHub Client ID |
| `GITHUB_CLIENT_SECRET` | Your GitHub Client Secret |

4. Click **Save**

### Step 3: Update CMS Config

Edit `admin/config.yml` and update the repo line:

```yaml
backend:
  name: github
  repo: YOUR_GITHUB_USERNAME/YOUR_REPO_NAME  # e.g., alexanderlee/41labs-website
  branch: main
```

### Step 4: Deploy

Push your changes to GitHub:

```bash
git add .
git commit -m "Add Decap CMS with GitHub OAuth"
git push
```

Cloudflare Pages will automatically deploy.

### Step 5: Access the CMS

1. Go to `https://41labs-website.pages.dev/admin/`
2. Click **"Login with GitHub"**
3. Authorize the app
4. Start editing!

## Using the CMS

### Adding a Blog Post

1. Go to **Blog Posts** in the sidebar
2. Click **"New Blog Posts"**
3. Fill in the fields:
   - Title, Slug, Date, Author
   - Category (select from dropdown)
   - Excerpt (for SEO)
   - Body (markdown editor)
4. Click **"Publish"**

**Important**: After adding a blog post, you also need to add an entry to **Posts Index** for it to appear on the blog listing page.

### Adding a Testimonial

1. Go to **Testimonials → All Testimonials**
2. Click the **"+"** button to add a new testimonial
3. Fill in: Quote, Name, Role, Company, Initials
4. Click **"Publish"**

### Adding a Case Study

1. Go to **Case Studies → All Case Studies**
2. Click the **"+"** button
3. Fill in all fields including results
4. Click **"Publish"**

## Troubleshooting

### "Unable to authenticate" error
- Check that GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET are set in Cloudflare
- Verify the callback URL in GitHub OAuth app matches your site

### Changes not appearing
- Wait 1-2 minutes for Cloudflare Pages to rebuild
- Hard refresh the page (Ctrl+Shift+R)

### "Repo not found" error
- Update the `repo` field in `admin/config.yml`
- Make sure your GitHub account has access to the repo

## Support

For issues with Decap CMS: https://decapcms.org/docs/
For Cloudflare Pages: https://developers.cloudflare.com/pages/
