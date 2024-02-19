import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './components/global/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './components/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './layouts/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './pages/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './plugins/**/*.{js,ts,mjs}',
    './composables/**/*.{js,ts,mjs}',
    './utils/**/*.{js,ts,mjs}',
    './{A,a}pp.{vue,js,jsx,mjs,ts,tsx}',
    './{E,e}rror.{vue,js,jsx,mjs,ts,tsx}',
    './app.config.{js,ts,mjs}',
  ],
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
    screens: { mobile: { max: '1400px' } },
  },
  plugins: [],
};
