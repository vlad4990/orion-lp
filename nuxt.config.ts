import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/style.scss'],
  modules: [
    'vuetify-nuxt-module',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
  routeRules: {
    '/': { prerender: true },
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            white: '#EDDDE6',
            dark: '#000000',
            pink: '#FF008F',
            blue: '#0D15AB',
            yellow: '#CBE510',
            orange: '#EE5325',
            'color-bg': '#000000',
          },
        },
        screens: {
          mobile: { max: '1280px' },
        },
      },
    },
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
