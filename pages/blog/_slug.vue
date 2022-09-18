<template>
  <div>
    <TopBanner
      img="book.jpg"
      :title="page.title"
      :description="page.description"
    />
    <v-container>
      <span>{{ formatDate(page.date) }}</span>
      <nuxt-content :document="page" />

      <v-row>
        <v-col>
          <v-btn
            v-if="prev"
            :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
            class="font-bold text-primary hover:underline primary"
            small
          >
            <v-icon>mdi-arrow-left</v-icon>
            {{ prev.title }}
          </v-btn>
        </v-col>
        <v-spacer>
        </v-spacer>
        <v-col>
          <v-btn
            v-if="next"
            :to="{ name: 'blog-slug', params: { slug: next.slug } }"
            class="font-bold hover:underline primary"
            small
          >
            {{ next.title }}
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
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
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en-GB', options)
    },
  },
}
</script>
