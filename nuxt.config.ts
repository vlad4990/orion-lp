import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
export default defineNuxtConfig({
  app: {
    baseURL: '/orion-lp/',
  },
  devtools: { enabled: true },
  css: ['~/assets/scss/style.scss', 'animate.css'],
  modules: [
    'vuetify-nuxt-module',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/motion/nuxt',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/scss/_variables.scss" as *;@use "@/assets/scss/_typography.scss" as *;',
        },
      },
    },
  },
  routeRules: {
    '/': { prerender: true },
  },
  i18n: {
    vueI18n: './i18n/i18n.config.ts',
  },
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'dark',
      },
      ssr: true,
      icons: {
        defaultSet: 'mdi',
        aliases,

        // sets: [mdi],
      },
    },
  },
});
