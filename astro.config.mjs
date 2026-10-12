import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gdjahoui.com',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  vite: { plugins: [tailwindcss()] },
});
