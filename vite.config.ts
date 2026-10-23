import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'path';
import {defineConfig} from 'vite';

const configuredSiteUrl = process.env.SITE_URL?.trim();
const siteUrl = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined;

if (siteUrl && (siteUrl.protocol !== 'https:' || siteUrl.pathname !== '/' || siteUrl.search || siteUrl.hash)) {
  throw new Error('SITE_URL must be the official HTTPS origin, for example https://www.example.com');
}

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'site-seo',
        transformIndexHtml(html) {
          if (!siteUrl) return html;

          const canonicalUrl = `${siteUrl.origin}/`;
          const imageUrl = `${siteUrl.origin}/assets/danieli-social-optimized.jpg`;

          return {
            html,
            tags: [
              { tag: 'link', attrs: { rel: 'canonical', href: canonicalUrl }, injectTo: 'head' },
              { tag: 'meta', attrs: { property: 'og:url', content: canonicalUrl }, injectTo: 'head' },
              { tag: 'meta', attrs: { property: 'og:image', content: imageUrl }, injectTo: 'head' },
              { tag: 'meta', attrs: { property: 'og:image:alt', content: 'Danieli Tulio, videomaker e storymaker em Curitiba' }, injectTo: 'head' },
              { tag: 'meta', attrs: { property: 'og:image:type', content: 'image/jpeg' }, injectTo: 'head' },
              { tag: 'meta', attrs: { name: 'twitter:image', content: imageUrl }, injectTo: 'head' },
              { tag: 'meta', attrs: { name: 'twitter:image:alt', content: 'Danieli Tulio, videomaker e storymaker em Curitiba' }, injectTo: 'head' },
            ],
          };
        },
        async writeBundle(options) {
          const outputDirectory = path.resolve(options.dir ?? 'dist');
          const sitemapPath = path.join(outputDirectory, 'sitemap.xml');
          const robotsPath = path.join(outputDirectory, 'robots.txt');

          if (!siteUrl) {
            const robots = await readFile(robotsPath, 'utf8');
            const robotsWithoutSitemap = robots
              .split(/\r?\n/)
              .filter((line) => !line.trimStart().startsWith('Sitemap:'))
              .join('\n')
              .trimEnd();

            await Promise.all([
              rm(sitemapPath, { force: true }),
              writeFile(robotsPath, `${robotsWithoutSitemap}\n`),
            ]);
            console.warn('[site-seo] SITE_URL is not configured; canonical URLs and sitemap.xml are omitted until the official domain is set.');
            return;
          }

          const sitemap = [
            '<?xml version="1.0" encoding="UTF-8"?>',
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
            `  <url><loc>${siteUrl.origin}/</loc></url>`,
            '</urlset>',
            '',
          ].join('\n');
          const robots = await readFile(robotsPath, 'utf8');
          const robotsWithoutSitemap = robots
            .split(/\r?\n/)
            .filter((line) => !line.trimStart().startsWith('Sitemap:'))
            .join('\n')
            .trimEnd();

          await Promise.all([
            writeFile(path.join(outputDirectory, 'sitemap.xml'), sitemap),
            writeFile(robotsPath, `${robotsWithoutSitemap}\nSitemap: ${siteUrl.origin}/sitemap.xml\n`),
          ]);
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
