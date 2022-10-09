<template>
  <v-app dark>
    <HeaderAndSidebar />

    <v-main fill-height>
      <Nuxt />
    </v-main>

    <v-footer :absolute="false" app class="dark accent--text justify-center">
      <span>Abel Soares Siqueira &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style scoped>
.theme--dark.v-application {
  background-color: var(--v-background-base, #000) !important;
}
</style>
