import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    sveltekit(),
     //compression({ algorithm: 'gzip' }),
    //compression({ algorithm: 'brotliCompress', ext: '.br' })
  ],
  build: {
    sourcemap: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      output: {
        comments: false
      }
    }
  }
});
