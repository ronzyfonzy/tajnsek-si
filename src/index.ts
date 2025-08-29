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

export default {
	async fetch(request, env): Promise<Response> {
		const url = new URL(request.url);
		// Try to serve static asset first
		const assetResponse = await env.ASSETS.fetch(request);
		if (assetResponse.status < 400) return assetResponse;
		// SPA fallback to index.html
		if (request.method === 'GET' && !url.pathname.includes('.')) {
			const indexReq = new Request(new URL('/', url.origin), request);
			return env.ASSETS.fetch(indexReq);
		}
		return new Response('Not Found', { status: 404 });
	},
} satisfies ExportedHandler<Env>;
