import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
export default defineNuxtConfig({
  app: {
    baseURL: '/orion-lp/',
    head: {
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-E7E4KY6JJ5',
        },
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WMFZV82P');`,
        },
      ],
    },
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
    '/policy': { prerender: true },
    '/terms': { prerender: true },
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
