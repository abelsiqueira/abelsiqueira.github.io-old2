<template>
  <v-card class="mx-auto mb-3 elevation-5 border-primary">
    <v-card-title
      v-ripple="{ class: 'secondary--text' }"
      class="primary pt-2 pb-0 white--text section-title"
      icon
      @click="show = !show"
    >
      <span class="text-h6">{{ sectionTitle }}</span>
      <v-spacer></v-spacer>
      <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
    </v-card-title>
    <v-expand-transition>
      <v-card-text
        v-show="show"
        class="ma-0 pa-0 pb-1 background section-content"
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

.section-title::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px; /* Using 100% included the v-card-text, for some reason */
  background-color: var(--v-secondary-base);
  opacity: 0;
  z-index: 1;
  transition: 200ms;
}

.section-title:hover::before {
  opacity: 0.1;
}

.section-title > * {
  z-index: 100;
}
</style>
