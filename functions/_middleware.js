// Cloudflare Pages Middleware
// Redirects old domain (altivra.co) to new domain (41labs.ai)

export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Check if request is from old domain
  if (url.hostname === 'altivra.co' || url.hostname === 'www.altivra.co') {
    // Build new URL with 41labs.ai domain
    const newUrl = new URL(url.pathname + url.search, 'https://41labs.ai');

    // 301 Permanent Redirect
    return Response.redirect(newUrl.toString(), 301);
  }

  // Continue with normal request
  return context.next();
}
