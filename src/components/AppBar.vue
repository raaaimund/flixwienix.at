<template>
  <v-app-bar dark class="primary" fixed app flat>
    <v-app-bar-nav-icon @click.stop="toggleNavigationDrawerVisibility" />
    <v-toolbar-title class="display-1 font-weight-medium">
      <nuxt-link to="/">FLIXwienix</nuxt-link>
    </v-toolbar-title>
    <v-spacer />
    <v-btn icon href="//github.com/raaaimund/flixwienix.at" target="_blank">
      <v-icon>mdi-github-circle</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AppBar",
  methods: {
    ...mapMutations(["toggleNavigationDrawerVisibility"])
  }
};
</script>

<style scoped>
.v-toolbar__title > a {
  color: white;
  text-decoration: none;
}
</style>