<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="true" fixed app temporary>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
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
      <v-toolbar-title v-text="title" />
      <v-breadcrumbs divider="/" />
      <v-spacer />
      <div v-for="x in ['xs', 'sm', 'md', 'lg', 'xl']" :key="x">
        <v-btn :class="'d-none d-' + x + '-flex'">
          {{ x }}
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="true" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  setup() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Main',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Projects',
          to: '/projects',
        },
      ],
      title: 'Abel Soares Siqueira',
    }
  },
}
</script>
