// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: https://n333k0.github.io/queued/
  site: 'https://n333k0.github.io',
  base: '/queued',
  vite: {
    plugins: [tailwindcss()]
  }
});