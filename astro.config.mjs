// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    icon({
      include: {
        mdi: ['github', 'linkedin', 'youtube', 'blog', 'twitter', 'stack-overflow', 'web'],
      },
    }),
  ],
});
