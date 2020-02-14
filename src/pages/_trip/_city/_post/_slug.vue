<template>
  <component :is="post" />
</template>

<script>
export default {
  layout: "default",
  asyncData() {
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