<template>
  <div id="top-banner-image" class="pa-4" :style="topBarStyle">
    <v-row>
      <v-spacer class="d-none d-md-flex"></v-spacer>
      <v-col class="tint" cols="12" lg="6" xs="12" align-self="center">
        <h1 v-if="title">
          {{ title }}
        </h1>
        <p v-if="description" class="font-weight-bold text-justify mb-0">
          {{ description }}
        </p>
      </v-col>
      <v-spacer class="d-none d-md-flex"></v-spacer>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
  },
  setup(props) {
    const bgImage = require('~/assets/img/' + props.img)
    const topBarStyle = {
      "background": `url(${bgImage})`,
      "background-position": 'center center',
    }

    return {
      topBarStyle,
    }
  },
}
</script>

<style scoped>
.tint {
  background-color: rgba(0, 0, 0, 0.4) !important;
}
</style>
