<template>
  <v-list>
    <v-subheader>{{ subTitle }}</v-subheader>
    <v-list-item-group :value="indexOfSelectedArticle" color="primary">
      <nuxt-link v-for="(item, i) in articles" :key="i" :to="item.path">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title v-text="item.attributes.title" />
          </v-list-item-content>
        </v-list-item>
      </nuxt-link>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("articles");
export default {
  name: "ArticleMenu",
  props: {
    subTitle: {
      type: String,
      required: true
    },
    selectedTrip: {
      type: String,
      required: true
    },
    selectedCity: {
      type: String,
      required: true
    },
    selectedArticle: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(["allArticlesFromCity"]),
    articles() {
      return this.allArticlesFromCity(
        this.$props.selectedTrip,
        this.$props.selectedCity
      );
    },
    indexOfSelectedArticle() {
      return this.articles.findIndex(file =>
        file.path.endsWith(this.selectedArticle)
      );
    }
  }
};
</script>

<style scoped>
.v-application a {
  color: none;
  text-decoration: none;
}
</style>
