/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { FastMailService } from './email/fastmail';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

function validateContactForm(data: ContactFormData): string | null {
  if (!data.name || !data.email || !data.message) {
    return 'Missing required fields';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return 'Invalid email format';
  }

  return null;
}

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    console.log('🔍 Request URL:', url.pathname);

    // Handle contact form API
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const data: ContactFormData = await request.json();

        // Validate form data
        const validationError = validateContactForm(data);
        if (validationError) {
          return new Response(JSON.stringify({ error: validationError }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }

        // Send email using FastMail service
        if (env.FASTMAIL_API_TOKEN) {
          try {
            const fastMail = new FastMailService({
              apiToken: env.FASTMAIL_API_TOKEN,
              accountId: env.FASTMAIL_ACCOUNT_ID,
            });

            await fastMail.sendContactEmail(data);
          } catch (emailError) {
            console.error('Failed to send email:', emailError);
            return new Response(JSON.stringify({ error: 'Failed to send email' }), {
              status: 500,
              headers: { 'Content-Type': 'application/json' },
            });
          }
        } else {
          console.log('⚠️ No FASTMAIL_API_TOKEN found - Contact form submitted:', data);
        }

        return new Response(JSON.stringify({ success: true }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } catch (error) {
        console.error('Contact form error:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // Try to serve static asset first
    const assetResponse = await env.ASSETS.fetch(request);
    if (assetResponse.status < 400) {
      // Add optimized caching headers based on file type
      const response = new Response(assetResponse.body, assetResponse);

      if (url.pathname.match(/vendor-[a-z]+-[A-Za-z0-9_-]+\.(js|css)$/)) {
        // Vendor chunks - cache for 1 year (they have content hashes)
        response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      } else if (url.pathname.match(/\.(js|css)$/)) {
        // App chunks - cache for 1 day with revalidation
        response.headers.set('Cache-Control', 'public, max-age=86400, must-revalidate');
      } else if (url.pathname.match(/\.(woff2?|png|jpg|jpeg|gif|svg|ico)$/)) {
        // Static assets - cache for 1 week
        response.headers.set('Cache-Control', 'public, max-age=604800');
      } else if (url.pathname.endsWith('.html') || url.pathname === '/') {
        // HTML - cache for 1 hour with revalidation
        response.headers.set('Cache-Control', 'public, max-age=3600, must-revalidate');
      }

      return response;
    }

    // SPA fallback to index.html
    if (request.method === 'GET' && !url.pathname.includes('.')) {
      const indexReq = new Request(new URL('/', url.origin), request);
      return env.ASSETS.fetch(indexReq);
    }

    return new Response('Not Found', { status: 404 });
  },
} satisfies ExportedHandler<Env>;
