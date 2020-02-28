<template>
  <div class="map-container">
    <client-only>
      <l-map ref="map" :zoom="zoom" :center="center" draggable="true">
        <MapFlixbusTileLayer />
        <slot />
      </l-map>
    </client-only>
  </div>
</template>

<script>
import MapFlixbusTileLayer from "~/components/MapFlixbusTileLayer.vue";
export default {
  name: "Map",
  components: {
    MapFlixbusTileLayer
  },
  props: {
    zoom: {
      type: Number,
      required: true
    },
    center: {
      type: Number[2],
      required: true
    }
  }
};
</script>

<style scoped>
.map-container {
  height: calc(100vh - 64px);
  width: 100%;
}
</style>
