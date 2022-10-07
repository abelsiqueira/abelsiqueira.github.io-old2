<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      class="primary"
      :clipped="true"
      fixed
      app
      temporary
    >
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

    <v-app-bar class="primary" :clipped-left="true" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-hover v-slot="{ hover }">
        <nuxt-link to="/">
          <v-toolbar-title
            :class="
              'white--text font-weight-bold ' +
              (hover ? 'text-decoration-underline' : '')
            "
            v-text="title"
          />
        </nuxt-link>
      </v-hover>
      <v-breadcrumbs divider="/" :items="currentRouteName" large>
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item>
            <v-hover v-slot="{ hover }">
              <nuxt-link
                v-if="!item.disabled"
                :class="
                  'white--text font-weight-bold + ' +
                  (hover ? 'text-decoration-underline' : '')
                "
                :to="item.href"
              >
                {{ item.text }}
              </nuxt-link>
              <span v-else>
                {{ item.text }}
              </span>
            </v-hover>
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <v-spacer />
      <!-- For debugging screen sizes -->
      <!-- <div v-for="x in ['xs', 'sm', 'md', 'lg', 'xl']" :key="x">
        <v-btn :class="'d-none d-' + x + '-flex'">
          {{ x }}
        </v-btn>
      </div> -->
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'HeaderAndSidebar',
  props: {},
  data() {
    return {
      drawer: false,
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
      if (output.length > 2 && output[1].text === 'blog') {
        output[2].text = 'post'
      }
      return output
    },
  },
}
</script>
