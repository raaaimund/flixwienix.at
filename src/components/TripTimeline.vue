<template>
  <v-timeline>
    <v-timeline-item v-for="(item, i) in allItems" :key="i" :color="item.color" small>
      <template v-slot:opposite>
        <span :class="`headline font-weight-bold ${item.color}--text`" v-text="item.arrivalDate" />
      </template>
      <div class="py-4">
        <h2 :class="`headline font-weight-light mb-4 ${item.color}--text`">{{ item.city }}</h2>
        <div>{{ item.description }}</div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters } = createNamespacedHelpers("timeline");
export default {
  computed: {
    ...mapGetters(["allItems"])
  }
};
</script>