<template>
  <v-hover v-slot="{ hover }">
    <v-card tile>
      <v-responsive :aspect-ratio="16 / 9">
        <NuxtLink :to="url">
          <v-img
            :aspect-ratio="16 / 9"
            :gradient="
              'to top right, rgba(0,0,0,0.6), rgba(0,0,0,' +
              (hover ? '0.3' : '0.6') +
              ')'
            "
            :src="srcImg"
          >
            <v-card-title class="white--text mt-8">
              {{ title }}
            </v-card-title>
            <p class="ml-3">{{ description }}</p>
          </v-img>
        </NuxtLink>
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
