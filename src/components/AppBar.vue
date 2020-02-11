<template>
  <v-app-bar dark class="primary" fixed app flat>
    <v-toolbar-title class="display-1 font-weight-medium">FLIXwienix</v-toolbar-title>
    <v-spacer />
    <v-btn text href="/">nach Paris</v-btn>
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