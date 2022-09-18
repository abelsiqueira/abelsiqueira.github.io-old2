<template>
  <div>
    <TopBanner img="youtube.jpg" title="YouTube" />

    <v-container>
      <p>
        I have an active YouTube channel since 2019. Most of the current videos
        are in Brazilian Portuguese, but not all.
      </p>
      <p>
        Desde 2019 eu tenha um canal do YouTube ativo. A maior parte dos vídeos
        atuais são em Português, mas não todos.
      </p>
    </v-container>
    <v-row>
      <v-col
        v-for="(card, index) in pageCardData"
        :key="index"
        cols="12"
        lg="4"
        md="6"
        sm="12"
      >
        <PageCard
          :img="card.img"
          :title="card.title"
          :description="card.description"
          :url="card.url"
          :nuxt-link-instead-of-a="false"
          :hide-text="true"
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
        img: 'youtube-main.jpg',
        title: 'YouTube.com/AbelSiqueira',
        description: '',
        url: 'https://youtube.com/AbelSiqueira',
      },
      {
        img: 'youtube-intro-a-ml.jpg',
        title: 'Introdução à Machine Learning',
        description: 'Playlist',
        url: 'https://www.youtube.com/watch?v=0R-kbXgv2H4&list=PLOOY0eChA1ux4hJ_aIA2IiUYkLOSYDQDY',
      },
      {
        img: 'youtube-jso.jpg',
        title: 'JuliaSmoothOptimizers tutorials',
        description: 'Playlist',
        url: 'https://www.youtube.com/watch?v=DYf-k51_XcQ&list=PLOOY0eChA1uxmm8G2caFpdX7X9NjgpDUY',
      },
      {
        img: 'youtube-tutoriais-de-julia.jpg',
        title: 'Tutoriais de Julia',
        description: 'Playlist',
        url: 'https://www.youtube.com/watch?v=x3x9kVdeYfQ&list=PLOOY0eChA1uzzIEEYu8-DrXc98Zgkv644',
      },
      {
        img: 'youtube-ml-em-julia.jpg',
        title: 'Machine Learning em Julia',
        description: 'Playlist',
        url: 'https://www.youtube.com/watch?v=HWQ2uQ89MhI&list=PLOOY0eChA1uyB67GJMGdpy0HVze7R4f7c',
      },
      {
        img: 'youtube-calculo-numerico.jpg',
        title: 'Cálculo Numérico em Julia',
        description: 'Playlist',
        url: 'https://www.youtube.com/watch?v=ZvOhVP7nZNM&list=PLOOY0eChA1uyO7qjoupZ3979741csLLTE',
      },
      {
        img: 'youtube-curso-otim-nao-linear.jpg',
        title: 'Curso de Otimização Não-Linear',
        description: 'Playlist',
        url: 'https://www.youtube.com/watch?v=VhAxV9I1xHs&list=PLOOY0eChA1ux1LAmJZNBySGeqR0kwNZmQ',
      },
      {
        img: 'youtube-otimizacao-em-julia.jpg',
        title: 'Otimização em Julia',
        description: 'Playlist',
        url: 'https://www.youtube.com/watch?v=VhAxV9I1xHs&list=PLOOY0eChA1uyk_01nGJVmcQGvcJq9h6_6',
      },
      {
        img: 'youtube-modelagem.jpg',
        title: 'Modelagem em Otimização',
        description: 'Playlist',
        url: 'https://www.youtube.com/watch?v=xp-tyHCreU8&list=PLOOY0eChA1uwcqU0Z69_XgXniczzqzsQT',
      },
    ]
    return {
      pageCardData,
    }
  },
}
</script>
