<template>
  <Map :zoom="6" :center="[49.553726, 12.106934]">
    <MapCircleMarker
      v-for="city in cities"
      :key="city.attributes.title"
      :title="city.attributes.title"
      :price="city.attributes.price"
      :latlng="city.attributes.latlng"
      :path="city.path"
    />
  </Map>
</template>

<script>
import MapCircleMarker from "~/components/MapCircleMarker.vue";
import Map from "~/components/Map.vue";

export default {
  name: "Index",
  layout: "map",
  components: {
    Map,
    MapCircleMarker
  },
  computed: {
    cities() {
      return this.$store.getters.allCities;
    }
  }
};
</script>
