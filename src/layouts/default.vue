<template>
  <v-app>
    <AppBar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from "~/components/AppBar.vue";
export default {
  components: { AppBar }
};
</script>

<style>
h1 {
  margin-bottom: 25px;
}

h2 {
  margin-bottom: 18px;
}
</style>