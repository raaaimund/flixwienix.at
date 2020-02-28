<template>
  <v-chip class="ma-2" :color="color" text-color="white">
    <v-avatar left :color="color" class="darken-2">{{ count }}</v-avatar>
    {{ text }}
  </v-chip>
</template>

<script>
export default {
  name: "ChipWithNumber",
  props: {
    text: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: false,
      default: "primary"
    }
  }
};
</script>