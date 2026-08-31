import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://randomchat.online',
  output: 'server',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  devToolbar: {
    enabled: false
  },
  adapter: cloudflare({
    imageService: 'passthrough'
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});

