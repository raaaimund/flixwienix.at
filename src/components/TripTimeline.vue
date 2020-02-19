<template>
  <v-timeline>
    <v-timeline-item
      v-for="(stops, i) in stops"
      :key="i"
      :color="stops.color"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${stops.color}--text`"
          v-text="stops.arrivalDate"
        />
      </template>
      <div class="py-4">
        <h2
          :class="`headline font-weight-light mb-4 ${stops.color}--text`"
        >{{ stops.city }}</h2>
        <div>{{ stops.description }}</div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  computed: {
    stops() {
      return this.$store.getters.allTimelineItems;
    }
  }
};
</script>