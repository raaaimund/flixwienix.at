<template>
  <v-list>
    <v-subheader>{{ subTitle }}</v-subheader>
    <v-list-item-group :value="indexOfSelectedArticle" color="primary">
      <v-list-item v-for="(item, i) in articles" :key="i" :href="item.path">
        <v-list-item-content>
          <v-list-item-title v-text="item.attributes.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
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
    articles() {
      return this.$store.getters.allArticlesFromCity(
        this.$props.selectedTrip,
        this.$props.selectedCity
      );
    },
    indexOfSelectedArticle() {
      return this.$store.getters
        .allArticlesFromCity(this.$props.selectedTrip, this.$props.selectedCity)
        .findIndex(file => file.path.endsWith(this.selectedArticle));
    }
  }
};
</script>