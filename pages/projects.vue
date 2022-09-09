<template>
  <div>
    <TopBanner
      backdrop="code.jpg"
      description="My name is Abel Soares Siqueira, I'm a Brazilian, working as a Research
    Software Engineer at the Netherlands eScience Center since 2021, I have
    a YouTube channel, and I maintain a few projects. Read more following
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
  name: 'ProjectsPage',
  components: { PageCard },
  setup() {
    const pageCardData = [
      {
        img: 'jill.jpg',
        title: 'Jill',
        description: 'Julia installer',
        url: '/jill',
      },
      {
        img: 'jso.jpg',
        title: 'JuliaSmoothOptimizers',
        description: 'Optimization in Julia',
        url: '/jso',
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
        img: 'cidamo.jpg',
        title: 'CiDAMO',
        description: '',
        url: '/cidamo',
      },
      {
        img: 'code.jpg',
        title: 'Projects',
        url: '/projects',
      },
      {
        img: 'calculo-numerico.jpg',
        title: 'Cálculo Numérico',
        description: 'Notas de aula',
        url: '/calculo-numerico',
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
