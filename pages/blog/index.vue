<template>
  <div>
    <TopBanner img="code.jpg" title="Blog posts" />

    <v-container>
      <v-list>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item
            v-for="article of articles"
            :key="article.slug"
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          >
            <v-list-content>
              <v-list-item-title v-html="article.title" />
              <v-list-item-subtitle>
                {{ formatDate(article.date) }}
              </v-list-item-subtitle>
            </v-list-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
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
