<template>
  <v-navigation-drawer v-model="navigationDrawerVisibility" app absolute>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">FLIXwienix</v-list-item-title>
        <v-list-item-subtitle>nach Paris</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :href="item.path" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Nach Paris", icon: "mdi-map", path: "/" },
        {
          title: "Impressum",
          icon: "mdi-map-marker-question-outline",
          path: "/impressum"
        }
      ]
    };
  },
  computed: {
    navigationDrawerVisibility: {
      get() {
        return this.$store.state.isNavigationDrawerVisible;
      },
      set(visibility) {
        this.$store.commit("setNavigationDrawerVisibility", visibility)
      }
    }
  }
};
</script>

<style scoped>
.v-navigation-drawer {
  z-index: 2000;
}
</style>