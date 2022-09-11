<template>
  <div>
    <TopBanner
      img="code.jpg"
      :title="page.title"
      :description="page.description"
    />
    <v-container>
      <nuxt-content :document="page"/>
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || "index"
    const page = await $content('projects', slug)
      .fetch()
      .catch(_ => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      page
    };
  }
};
</script>
