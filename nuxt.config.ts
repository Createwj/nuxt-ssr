const alias = {
  '~~': '/<rootDir>',
  '@@': '/<rootDir>',
  '~': '/<rootDir>',
  '@': '/<rootDir>',
  assets: '/<rootDir>/assets',
  public: '/<rootDir>/public',
}

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
  ],
  experimental: {
    reactivityTransform: true,
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' },
      ],
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in', // default
    },
    layoutTransition: {
      name: 'slide',
      mode: 'out-in', // default
    },
  },
  content: {
    // documentDriven: true
    // https://content.nuxtjs.org/api/configuration
  },
})
