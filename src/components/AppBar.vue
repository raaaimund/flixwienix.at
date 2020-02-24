<template>
  <v-app-bar dark class="primary" fixed app flat>
    <v-toolbar-title class="display-1 font-weight-medium">
      <nuxt-link to="/">FLIXwienix</nuxt-link>
    </v-toolbar-title>
    <v-btn text href="/" class="ml-4">nach Paris</v-btn>
    <v-spacer />
    <v-btn icon href="//github.com/raaaimund/flixwienix.at" target="_blank">
      <v-icon>{{ svgPath }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mdiGithubCircle } from "@mdi/js";

export default {
  data: () => ({
    svgPath: mdiGithubCircle
  })
};
</script>

<style scoped>
.v-toolbar__title > a {
  color: white;
  text-decoration: none;
}
</style>