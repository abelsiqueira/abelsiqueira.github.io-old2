<template>
  <div>
    <TopBanner
      img="code.jpg"
      description="I have worked on a variety of projects..."
      title="Projects"
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
          :url="'/projects' + card.url"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'ProjectsPage',
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
        img: 'cidamo.jpg',
        title: 'CiDAMO',
        description: 'Data Science, Machine Learning, and Optimization group',
        url: '/cidamo',
      },
      {
        img: 'book.jpg',
        title: 'ThinkJulia',
        description: 'Translation to Portuguese',
        url: '/thinkjulia',
      },
    ]
    return {
      pageCardData,
    }
  },
}
</script>
