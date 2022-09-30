<template>
  <div>
    <v-navigation-drawer v-model="drawer" :clipped="true" fixed app temporary>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="true" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-hover v-slot="{ hover }">
        <nuxt-link to="/">
          <v-toolbar-title
            :class="'white--text ' + (hover ? 'text-decoration-underline' : '')"
            v-text="title"
          />
        </nuxt-link>
      </v-hover>
      <v-breadcrumbs divider="/" :items="currentRouteName" large />
      <v-spacer />
      <div v-for="x in ['xs', 'sm', 'md', 'lg', 'xl']" :key="x">
        <v-btn :class="'d-none d-' + x + '-flex'">
          {{ x }}
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'HeaderAndSidebar',
  props: {},
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Main',
          to: '/',
        },
        {
          icon: 'mdi-graph',
          title: 'Projects',
          to: '/projects',
        },
        {
          icon: 'mdi-laptop',
          title: 'Blog',
          to: '/blog',
        },
        {
          icon: 'mdi-youtube',
          title: 'YouTube',
          to: '/youtube',
        },
        {
          icon: 'mdi-tie',
          title: 'Resume/Curriculum',
          to: '/cv',
        },
      ],
      title: 'Abel Soares Siqueira',
    }
  },
  computed: {
    currentRouteName() {
      const output = this.$route.path.split('/').map((step, index, array) => {
        return {
          text: step,
          href: array.slice(0, index + 1).join('/'),
          disabled: index === array.length - 1,
        }
      })
      return output
    },
  },
}
</script>
