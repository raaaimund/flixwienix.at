<template>
  <Map>
    <CircleMarker
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
import CircleMarker from "~/components/CircleMarker.vue";
import Map from "~/components/Map.vue";

export default {
  name: "Index",
  layout: "map",
  components: {
    Map,
    CircleMarker
  },

  async asyncData(context) {
    const cityContexts = await require.context("~/content/", true, /index.md$/);
    const cities = await cityContexts.keys().map(key => ({
      attributes: cityContexts(key).attributes,
      path: `/${key.replace(".md", "").replace("./", "")}`
    }));
    return {
      cities
    };
  }
};
</script>
