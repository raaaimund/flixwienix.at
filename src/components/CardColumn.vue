<template>
  <v-col :cols="12" :sm="sm" :md="md">
    <slot />
  </v-col>
</template>

<script>
export default {
  props: {
    sm: {
      type: Number,
      required: false,
      default: 6
    },
    md: {
      type: Number,
      required: false,
      default: 4
    }
  }
};
</script>