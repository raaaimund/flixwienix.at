<template>
  <v-img :src="require(`~/assets/images/${src}`)" :alt="alt" />
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>