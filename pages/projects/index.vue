<template>
  <WrapperBannerCard
    img="code.jpg"
    description="I have worked on a variety of projects..."
    title="Projects"
    :card-data="cardData"
  />
</template>

<script>
import WrapperBannerCard from '~/components/WrapperBannerCard.vue'

export default {
  name: 'ProjectsPage',
  components: { WrapperBannerCard },
  setup() {
    const cardData = [
      {
        img: 'jill.jpg',
        title: 'Jill',
        description: 'Julia installer',
        url: '/projects/jill',
      },
      {
        img: 'jso.jpg',
        title: 'JuliaSmoothOptimizers',
        description: 'Optimization in Julia',
        url: '/projects/jso',
      },
      {
        img: 'cidamo.jpg',
        title: 'CiDAMO',
        description: 'Data Science, Machine Learning, and Optimization group',
        url: '/projects/cidamo',
      },
      {
        img: 'book.jpg',
        title: 'ThinkJulia',
        description: 'Translation to Portuguese',
        url: '/projects/thinkjulia',
      },
    ]
    return {
      cardData,
    }
  },
}
</script>
