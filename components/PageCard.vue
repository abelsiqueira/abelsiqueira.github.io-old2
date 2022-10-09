<template>
  <v-card tile>
    <v-responsive>
      <component
        :is="nuxtLinkInsteadOfA ? 'NuxtLink' : 'a'"
        v-bind="{ href: url, to: url }"
      >
        <v-img
          :aspect-ratio="16 / 10"
          gradient="to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.1)"
          :src="srcImg"
          class="pa-0 page-card"
          :alt="title + ' - ' + description"
        >
          <v-card-title
            v-if="!hideText"
            class="white--text ma-0 pa-0 pl-1 page-card-text"
          >
            {{ title }}
          </v-card-title>
          <p v-if="!hideText" class="ma-0 pa-0 pl-1 page-card-text">
            {{ description }}
          </p>
        </v-img>
      </component>
    </v-responsive>
  </v-card>
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

.page-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0;
  z-index: 1;
  transition: 200ms;
}

.page-card:hover::before {
  opacity: 0.1;
}

.page-card-text {
  background-color: rgba(30, 30, 30, 0.7);
}
</style>
