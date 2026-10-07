// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://www.ashleighmagloire.com",
  trailingSlash: "never",
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        new URL(page).pathname.replace(/\/+$/, "") !== "/work",
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});