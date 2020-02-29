<template>
  <Map :zoom="5" :center="[49.553726, 12.106934]">
    <MapCircleMarker
      v-for="city in allCities"
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
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("articles");
export default {
  name: "Index",
  layout: "map",
  components: {
    Map,
    MapCircleMarker
  },
  computed: {
    ...mapGetters(["allCities"])
  }
};
</script>
