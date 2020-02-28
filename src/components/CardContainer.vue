<template>
  <v-container fluid>
    <v-row dense>
      <slot />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CardContainer"
};
</script>