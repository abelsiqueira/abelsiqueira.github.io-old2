<template>
  <WrapperBannerCard
    img="fractal.png"
    title='Abel Soares Siqueira'
    description="My name is Abel Soares Siqueira, I'm a Brazilian, working as a Research Software Engineer at the Netherlands eScience Center since 2021, I have a YouTube channel, and I am or was involved in a few projects. Read more following the links below."
    :card-data="cardData"
  />
</template>

<script>
import WrapperBannerCard from '~/components/WrapperBannerCard.vue'
export default {
  name: 'InspirePage',
  components: { WrapperBannerCard },
  setup() {
    const cardData = [
      {
        img: 'code.jpg',
        title: 'Projects',
        url: '/projects',
      },
      {
        img: 'youtube.jpg',
        title: 'YouTube channel',
        url: '/youtube',
      },
      {
        img: 'cv.jpg',
        title: 'Resume/Curriculum',
        description: '',
        url: '/cv',
      },
      {
        img: 'written-math.jpg',
        title: 'Blog',
        description: 'Random thoughts',
        url: '/blog',
      },
    ]
    return {
      cardData,
    }
  },
}
</script>
