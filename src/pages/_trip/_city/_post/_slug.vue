<template>
  <component :is="post" />
</template>

<script>
const post = null;

export default {
  layout: "default",
  asyncData({ params }) {
    return {
      attributes: {},
      post: null
    };
  },
  created() {
    const markdown = require(`~/content/${this.$route.params.trip}/${this.$route.params.city}/${this.$route.params.post}.md`);
    this.attributes = markdown.attributes;
    this.post = markdown.vue.component;
  }
};
</script>