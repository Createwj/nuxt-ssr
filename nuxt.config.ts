const alias = {
  '~~': '/<rootDir>',
  '@@': '/<rootDir>',
  '~': '/<rootDir>',
  '@': '/<rootDir>',
  assets: '/<rootDir>/assets',
  public: '/<rootDir>/public',
}

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt 3 Awesome Starter',
      titleTemplate: '%s - Nuxt 3 Awesome Starter',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3 Awesome Starter',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  build: {},
  css: ['assets/common.css'],
})
