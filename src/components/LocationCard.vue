<template>
  <v-card max-width="344" outlined>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
    <v-card-text class="text--primary">{{ description}}</v-card-text>
    <v-card-actions>
      <v-chip color="primary">{{ tag }}</v-chip>
      <v-row align="center" justify="end">
        <v-btn :href="link" target="_blank" class="mr-1" icon>
          <v-icon>mdi-map</v-icon>
        </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: true
    }
  }
};
</script>