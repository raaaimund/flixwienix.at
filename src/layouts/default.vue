<template>
  <v-app>
    <NavigationDrawer />
    <AppBar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "~/components/AppBar.vue";
import NavigationDrawer from "~/components/NavigationDrawer.vue";
export default {
  components: { AppBar, NavigationDrawer }
};
</script>
