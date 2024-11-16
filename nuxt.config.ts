// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  builder: 'vite',
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/css/main.css',
  ],
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  tailwindcss: { exposeConfig: true },
  colorMode: {
    storage: 'cookie',
  },
  components: [
    { path: './components' },
  ],
})
