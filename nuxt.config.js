export default {
  target: 'static',
  router: {
    base: 'https://caveaio.github.io/network-landing-page' // Remove when domain is CNAMEd
  },
  head: {
    title: 'netwrk',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  
  eslint: {
    fix: true,
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ['@nuxt/typescript-build'],

  modules: [],

  build: {},
}
