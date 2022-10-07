<template>
  <div>
    <TopBanner :img="img" :title="title" :description="description" />

    <CardDisplay :card-data="cardData" />
  </div>
</template>

<script>
import CardDisplay from './CardDisplay.vue'
export default {
  components: { CardDisplay },
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    cardData: {
      type: Array,
      required: true,
    },
  },
}
</script>
