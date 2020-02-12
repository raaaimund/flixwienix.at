<template>
  <component :is="post" />
</template>

<script>
export default {
  layout: "default",
  asyncData({ params }) {
    return {
      tripParam: params.trip,
      cityParam: params.city,
      postParam: params.post,
      attributes: {},
      post: null
    };
  },
  created() {
    const markdown = require(`~/content/${this.tripParam}/${this.cityParam}/${this.postParam}.md`);
    this.attributes = markdown.attributes;
    this.post = markdown.vue.component;
  }
};
</script>