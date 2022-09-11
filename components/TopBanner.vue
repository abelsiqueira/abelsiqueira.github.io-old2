<template>
  <v-parallax class="mb-3" :src="bgImage" height="200">
    <v-row>
      <v-spacer class="d-none d-md-flex"></v-spacer>
      <v-col class="tint" cols="12" lg="6" xs="12" align-self="center">
        <h1 v-if="title">
          {{ title }}
        </h1>
        <p v-if="description" class="font-weight-bold text-justify">
          {{ description }}
        </p>
      </v-col>
      <v-spacer class="d-none d-md-flex"></v-spacer>
    </v-row>
  </v-parallax>
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
    }
  },
  setup(props) {
    return {
      bgImage: require('~/assets/img/' + props.img),
    }
  },
}
</script>

<style>
.tint {
  background-color: rgba(0, 0, 0, 0.8) !important;
}
</style>
