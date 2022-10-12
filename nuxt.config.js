import colors from 'vuetify/es5/util/colors'
import blogTags from './blogtags.json'

function createTagFeed(tag) {
  return async (feed) => {
    feed.options = {
      title: 'Abel Soares Siqueira',
      link:
        'https://abelsiqueira.github.io' +
        (tag === '' ? '' : `/tag/${tag}`) +
        '/feed.xml',
      description: 'RSS feed for abelsiqueira.github.io',
    }
    const { $content } = require('@nuxt/content')
    const articles = await $content('blog', { deep: true, text: true })
      .where(
        tag === ''
          ? { draft: { $ne: true } }
          : { draft: { $ne: true }, tags: { $containsAny: [tag] } },
      )
      .sortBy('date', 'desc')
      .fetch()
    articles.forEach((article) => {
      feed.addItem({
        title: article.title,
        date: new Date(article.date),
        id: article.url,
        link: `https://abelsiqueira.github.io${article.path}`,
        description: article.description ? article.description : '',
        content: article.bodyPlainText,
        tags: article.tags ? article.tags : [],
        image: article.img ? article.img : '',
      })
    })

    feed.addCategory('Nuxt.js')

    feed.addContributor({
      name: 'Abel Soares Siqueira',
      email: 'abelsiqueira@gmail.com',
      link: 'https://abelsiqueira.github.io',
    })
  }
}

export default {
  // server: {
  //   host: '0'
  // },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - abelsiqueira',
    title: 'abelsiqueira',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/feed',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      options: {
        customProperties: true,
      },
      dark: true,
      themes: {
        dark: {
          background: '#1f1f1f',
          primary: '#154e72',
          anchor: '#53ACC5',
          accent: '#FCBA04',
          secondary: '#53ACC5',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        document.bodyPlainText = document.text
        // const { text } = require('reading-time')(document.text)
        // document.readingTime = text
      }
    },
  },

  feed: blogTags.map((tag) => {
    return {
      path: tag === '' ? '/feed.xml' : `/tag/${tag}/feed.xml`,
      create: createTagFeed(tag),
      cacheTime: 1, // 1000 * 60 * 15,
      type: 'rss2',
      data: [''],
    }
  }),
}
