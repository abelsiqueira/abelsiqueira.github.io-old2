<template>
  <v-row class="bg">
    <v-spacer class="d-none d-md-flex"></v-spacer>
    <v-col cols="12" lg="6" xs="12" align-self="center">
      <p class="font-weight-bold text-justify black pa-2">
        {{ description }}
      </p>
    </v-col>
    <v-spacer class="d-none d-md-flex"></v-spacer>
  </v-row>
</template>

<script>
export default {
  props: {
    backdrop: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.bg {
  background: url('~/assets/img/code.jpg');
}
</style>
