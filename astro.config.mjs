// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://me.bguiz.com',
  base: '/',
  integrations: [
    icon({
      include: {
        mdi: ['github', 'linkedin', 'youtube', 'blog', 'twitter', 'stack-overflow', 'web'],
      },
    }),
  ],
});
