<template>
  <div class="container">
    <h1 v-if="statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <p>{{ message }}</p>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "Error",
  layout: "default",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500;
    },
    message() {
      return this.error.message || "<%= messages.client_error %>";
    }
  }
};
</script>
