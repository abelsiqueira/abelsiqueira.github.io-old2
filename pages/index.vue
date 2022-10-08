<template>
  <WrapperBannerCard
    img="fractal.png"
    title='Abel Soares Siqueira'
    description="My name is Abel Soares Siqueira, I'm Brazilian, working as a Research Software Engineer at the Netherlands eScience Center since 2021, I have a YouTube channel, and I am involved in a few open source projects. Read more following the links below."
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
        img: 'resume.jpg',
        title: 'Resume/Curriculum',
        description: '',
        url: '/resume',
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
