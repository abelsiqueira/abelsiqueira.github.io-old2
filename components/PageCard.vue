<template>
  <v-hover v-slot="{ hover }">
    <v-card tile>
      <v-responsive :aspect-ratio="16 / 9">
        <NuxtLink v-if="nuxtLinkInsteadOfA" :to="url">
          <PageCardImage
            :hover="hover"
            :src-img="srcImg"
            :title="title"
            :description="description"
            :hide-text="hideText"
          />
        </NuxtLink>
        <a v-if="!nuxtLinkInsteadOfA" :href="url">
          <PageCardImage
            :hover="hover"
            :src-img="srcImg"
            :title="title"
            :description="description"
            :hide-text="hideText"
          />
        </a>
      </v-responsive>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
    url: {
      type: String,
      required: true,
    },
    nuxtLinkInsteadOfA: {
      type: Boolean,
      default: true,
    },
    hideText: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    return {
      srcImg: require('~/assets/img/' + props.img),
    }
  },
}
</script>

<style>
* {
  text-decoration: none;
}
</style>
