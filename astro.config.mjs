import { defineConfig } from 'astro/config';
import liciousI18n from '@astrolicious/i18n';


// https://astro.build/config
export default defineConfig({
  integrations: [liciousI18n({
    defaultLocale: 'en',
    locales: ['en', 'es'],
    client: {
      data: true,
      paths: true,
      translations: true
    }
  })]
});