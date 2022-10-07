<template>
  <v-container id="top-banner-image" class="pa-5" fluid :style="topBarStyle">
    <v-row>
      <v-spacer class="d-none d-md-flex"></v-spacer>
      <v-col cols="12" lg="6" xs="12" align-self="center">
        <div class="tint pa-5">
          <h1 v-if="title">
            {{ title }}
          </h1>
          <p v-if="description" class="font-weight-bold text-justify mb-0">
            {{ description }}
          </p>
        </div>
      </v-col>
      <v-spacer class="d-none d-md-flex"></v-spacer>
    </v-row>
  </v-container>
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
      background: `url(${bgImage})`,
      'background-position': 'center center',
      'background-size': 'cover',
    }

    return {
      topBarStyle,
    }
  },
}
</script>

<style scoped>
.tint {
  background-color: rgba(0, 0, 0, 0.8) !important;
  border-radius: 10px;
}
</style>
