// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import Sonda from 'sonda/astro';

import partytown from '@astrojs/partytown';

import playformCompress from '@playform/compress';

import { brotli } from '@zokki/astro-brotli';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    Sonda(),
    partytown(),
    playformCompress(),
    brotli()
  ],

  vite: {
    plugins: [tailwindcss()]
  },
});