import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://adocode.com',
  integrations: [
    // Permite usar componentes React
    react(),
    // Integración con Tailwind CSS
    tailwind(),
    // Optimización de imágenes
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    // Generación automática de sitemap
    sitemap(),
    // Prefetch de enlaces para navegación más rápida
    prefetch(),
    // Compresión de assets
    compress()
  ],
  vite: {
    ssr: {
      noExternal: ['framer-motion']
    }
  }
});
