import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],

  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.svx', '.md'],
      layout: {
        blog: './src/layouts/MarkdownLayout.svelte'
      }
    })
  ],

  kit: {
    adapter: adapter(),
    csp: {
      mode: 'auto',
      directives: {
        'default-src': ["'self'"],
        'script-src': ["'self'"],
        'style-src': ["'self'", "'unsafe-inline'"],
        'img-src': ["'self'", 'data:', 'https://github.com', 'https://avatars.githubusercontent.com'],
        'font-src': ["'self'"],
        'connect-src': ["'self'", 'https://gh-pinned-repos-tsj7ta5xfhep.deno.dev'],
        'frame-src': ["'none'"],
        'object-src': ["'none'"],
        'base-uri': ["'self'"],
        'form-action': ["'self'"]
      }
    },
    prerender: {
      entries: ['*']  // Prerender all routes by default
    }
  }
};

export default config;
