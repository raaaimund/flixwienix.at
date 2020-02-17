<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" md="3">
        <SideMenu :items="sideMenuItems" />
      </v-col>
      <v-col cols="12" sm="8" md="9">
        <component :is="post" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SideMenu from "~/components/SideMenu.vue";
export default {
  layout: "default",
  components: {
    SideMenu
  },
  asyncData({ params }) {
    const markdownFileContextx = require.context(`~/content/`, true, /\.md$/);
    const markdownFiles = markdownFileContextx
      .keys()
      .map(key => {
        if (key.startsWith(`./${params.trip}/${params.city}`)) {
          return {
            title: markdownFileContextx(key).attributes.title,
            path: `/${key.replace(".md", "").replace("./", "")}`
          };
        }
      })
      .filter(val => !!val);
    return {
      attributes: {},
      post: null,
      sideMenuItems: markdownFiles
    };
  },
  created() {
    const markdown = require(`~/content/${this.$route.params.trip}/${this.$route.params.city}/${this.$route.params.post}.md`);
    this.attributes = markdown.attributes;
    this.post = markdown.vue.component;
  }
};
</script>
