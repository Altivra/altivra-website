// GitHub OAuth handler for Decap CMS on Cloudflare Pages
// Based on https://github.com/SubhenduX/decap-cms-cloudflare-pages

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // Handle the initial auth request - redirect to GitHub
  if (!url.searchParams.has('code')) {
    const authUrl = new URL('https://github.com/login/oauth/authorize');
    authUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
    authUrl.searchParams.set('redirect_uri', url.origin + '/api/auth');
    authUrl.searchParams.set('scope', 'repo user');
    authUrl.searchParams.set('state', crypto.randomUUID());

    return Response.redirect(authUrl.toString(), 302);
  }

  // Handle the callback from GitHub
  const code = url.searchParams.get('code');

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: env.GITHUB_CLIENT_ID,
        client_secret: env.GITHUB_CLIENT_SECRET,
        code: code,
      }),
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return new Response(`Error: ${tokenData.error_description}`, { status: 400 });
    }

    // Return the token to Decap CMS via postMessage
    const script = `
      <script>
        (function() {
          function receiveMessage(e) {
            console.log("receiveMessage %o", e);
            window.opener.postMessage(
              'authorization:github:success:${JSON.stringify({ token: tokenData.access_token, provider: 'github' })}',
              e.origin
            );
            window.removeEventListener("message", receiveMessage, false);
          }
          window.addEventListener("message", receiveMessage, false);
          window.opener.postMessage("authorizing:github", "*");
        })();
      </script>
    `;

    return new Response(script, {
      headers: { 'Content-Type': 'text/html' },
    });
  } catch (error) {
    return new Response(`OAuth Error: ${error.message}`, { status: 500 });
  }
}
