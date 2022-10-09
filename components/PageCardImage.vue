<template>
  <v-img
    :aspect-ratio="16/10"
    :gradient="
      'to bottom right, ' + (hover ? 'rgba(0,0,0,0.8), ' : '') + 'rgba(0,0,0,0.3), rgba(0,0,0,0.1)'
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
