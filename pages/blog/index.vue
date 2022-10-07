<template>
  <div>
    <TopBanner img="written-math.jpg" title="Blog posts" />

    <v-container>
      <v-list class="pa-0 elevation-5 grey darken-4">
        <v-list-item
          v-for="article of articles"
          :key="article.slug"
          class="post-link elevation-1"
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
        >
          <v-list-item-content>
            <v-list-item-title
            class="secondary--text"
              v-text="article.title"
            />
            <v-list-item-subtitle>
              {{ formatDate(article.date) }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('blog').sortBy('slug', 'desc').fetch()

    return {
      articles,
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

<style scoped>
.post-link::before {
  background-color: var(--v-accent-base) !important;
}
.post-link:hover::before {
  opacity: 0.1;
}
</style>
