<template>
  <div>
    <TopBanner
      img="written-math.jpg"
      :title="page.title"
      :description="page.description"
    />
    <v-container>
      <span>{{ formatDate(page.date) }}</span>
      <nuxt-content :document="page" />
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content('blog', slug)
      .fetch()
      .catch((_) => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('slug', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      page,
      prev,
      next,
    }
  },
  head() {
    return {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.js',
          crossorigin: 'anonymous',
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/contrib/auto-render.min.js',
          onload: `renderMathInElement(document.body, {
            delimiters: [
              {left: '$$', right: '$$', display: true},
              {left: '$', right: '$', display: false},
            ]
          });`,
          crossorigin: 'anonymous',
          defer: true,
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css',
          crossorigin: 'anonymous',
        },
      ],
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en-GB', options)
    },
  },
}
</script>

<style>
img {
  max-width: 100%;
}
</style>
