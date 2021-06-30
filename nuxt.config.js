export default {
  target: 'static',
  router: {
    base: 'https://caveaio.github.io/network-landing-page', // Remove when domain is CNAMEd
  },
  head: {
    title: 'NETWRK',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }, // TODO: Add meta description
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }], // TODO: Add favicon
  },

  eslint: {
    fix: true,
  },

  googleAnalytics: {
    id: 'G-8B08SCCW90',
  },

  sitemap: {
    hostname: 'https://netwrk.gg',
    gzip: true,
    exclude: ['/policy', '/terms'],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ['@nuxt/typescript-build', '@nuxtjs/google-analytics'],

  modules: ['@nuxtjs/sitemap'],

  build: {},
}
