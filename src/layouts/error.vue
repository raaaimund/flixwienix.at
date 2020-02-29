<template>
  <div class="container">
    <h1 v-if="statusCode === 404">Diese Seite wurde leider nicht gefunden</h1>
    <h1 v-else>Ein Fehler ist aufgetreten</h1>
    <p>{{ message }}</p>
    <nuxt-link to="/">Startseite</nuxt-link>
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
