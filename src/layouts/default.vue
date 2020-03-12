<template>
  <v-app>
    <NavigationDrawer />
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
import NavigationDrawer from "~/components/NavigationDrawer.vue";
export default {
  components: { AppBar, NavigationDrawer }
};
</script>
