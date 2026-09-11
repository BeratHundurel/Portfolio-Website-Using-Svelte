import type { RequestHandler } from '@sveltejs/kit';

const siteUrl = 'https://berathundurel.com';

export const GET: RequestHandler = () => {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
	<loc>${siteUrl}/</loc>
	<lastmod>2026-09-11</lastmod>
	<changefreq>monthly</changefreq>
	<priority>1.0</priority>
  </url>
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
