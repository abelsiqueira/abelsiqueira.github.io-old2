<template>
  <v-card class="mx-auto mb-3 elevation-5 border-primary">
    <v-card-title class="primary pt-2 pb-0 white--text">
      <span class="text-h6">{{ sectionTitle }}</span>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{
          show ? 'mdi-chevron-up' : 'mdi-chevron-down'
        }}</v-icon>
      </v-btn>
    </v-card-title>
    <v-expand-transition>
      <v-card-text
        v-show="show"
        class="ma-0 pa-0 pb-1 background"
      >
        <slot></slot>
      </v-card-text>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: {
    sectionTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style>
.border-primary {
  border-color: var(--v-primary-base) !important;
  border-style: solid !important;
  border-width: 1px !important;
}
</style>
