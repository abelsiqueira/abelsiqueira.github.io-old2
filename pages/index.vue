<template>
  <div>
    <TopBanner
      img="ufpr.jpg"
      description="My name is Abel Soares Siqueira, I'm a Brazilian, working as a Research
        Software Engineer at the Netherlands eScience Center since 2021, I have
        a YouTube channel, and I am or was involved in a few projects. Read more following
        the links below."
    />

    <v-row>
      <v-col
        v-for="(card, index) in pageCardData"
        :key="index"
        cols="12"
        lg="3"
        md="4"
        sm="6"
      >
        <PageCard
          :img="card.img"
          :title="card.title"
          :description="card.description"
          :url="card.url"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageCard from '~/components/PageCard.vue'
import TopBanner from '~/components/TopBanner.vue'
export default {
  name: 'InspirePage',
  components: { PageCard, TopBanner },
  setup() {
    const pageCardData = [
      {
        img: 'abel.png',
        title: 'Personal life',
        description: '',
        url: '/personal',
      },
      {
        img: 'youtube.jpg',
        title: 'YouTube channel',
        description: 'Since 2020 with (almost) weekly videos',
        url: '/youtube',
      },
      {
        img: 'abel.jpg',
        title: 'CV',
        description: '',
        url: '/cv',
      },
      {
        img: 'code.jpg',
        title: 'Projects',
        url: '/projects',
      },
      {
        img: 'research.jpg',
        title: 'Blog',
        description: 'Random thoughts',
        url: '/blog',
      },
    ]
    return {
      pageCardData,
    }
  },
}
</script>
