<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col
        v-for="(card, index) in cardData"
        :key="index"
        cols="12"
        xl="3"
        lg="4"
        md="6"
        sm="6"
      >
        <PageCard
          :img="card.img"
          :title="card.title"
          :description="card.description"
          :url="card.url"
          :nuxt-link-instead-of-a="card.nuxtLinkInsteadOfA"
          :hide-text="card.hideText"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Array,
      required: true,
    },
  },
}
</script>
