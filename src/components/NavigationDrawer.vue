<template>
  <v-navigation-drawer v-model="navigationDrawerVisibility" app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">FLIXwienix</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list dense nav>
      <nuxt-link v-for="(item, i) in menuItems" :key="i" :to="item.path">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </nuxt-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("articles");
export default {
  name: "NavigationDrawer",
  computed: {
    ...mapGetters(["allCities"]),
    menuItems: function() {
      var items = this.allCities.map((city) => ({
        title: `${city.attributes.trip}/${city.attributes.title}`,
        path: city.path,
        icon: "mdi-map",
      }));
      items.push({
        title: "Impressum",
        icon: "mdi-map-marker-question-outline",
        path: "/impressum",
      });
      return items;
    },
    navigationDrawerVisibility: {
      get() {
        return this.$store.state.isNavigationDrawerVisible;
      },
      set(visibility) {
        this.$store.commit("setNavigationDrawerVisibility", visibility);
      },
    },
  },
};
</script>

<style scoped>
.v-navigation-drawer {
  z-index: 2000;
}
.v-application a {
  color: none;
  text-decoration: none;
}
</style>
