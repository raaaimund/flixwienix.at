<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" md="3">
        <ArticleMenu
          sub-title="Artikel"
          :selected-trip="trip"
          :selected-city="city"
          :selected-article="article"
        />
      </v-col>
      <v-col cols="12" sm="8" md="9">
        <component :is="content" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ArticleMenu from "~/components/ArticleMenu.vue";
export default {
  layout: "default",
  components: {
    ArticleMenu
  },
  data() {
    return {
      attributes: [],
      content: null,
      trip: this.$route.params.trip,
      city: this.$route.params.city,
      article: this.$route.params.article
    };
  },
  created() {
    const markdown = this.$store.getters.singleArticleAsMarkdownFile(
      this.$route.params.trip,
      this.$route.params.city,
      this.$route.params.article
    );
    this.attributes = markdown.attributes;
    this.content = markdown.vue.component;
  },
  head() {
    return {
      title: this.attributes.title
    };
  }
};
</script>
