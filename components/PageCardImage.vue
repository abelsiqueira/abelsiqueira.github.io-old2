<template>
  <v-img
    :aspect-ratio="16 / 9"
    :gradient="
      'to top right, rgba(0,0,0,0.6), rgba(0,0,0,' +
      (hover ? '0.3' : '0.6') +
      ')'
    "
    :src="srcImg"
    class="pa-1"
    :alt="title + ' - ' + description"
  >
    <v-card-title v-if="!hideText" class="white--text ma-0 pa-0">
      {{ title }}
    </v-card-title>
    <p v-if="!hideText" class="ma-0 pa-0">{{ description }}</p>
  </v-img>
</template>

<script>
export default {
  props: {
    hover: {
      type: Boolean,
      required: true,
    },
    srcImg: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    hideText: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
