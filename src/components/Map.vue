<template>
  <div class="map-container">
    <client-only>
      <l-map ref="map" :zoom="zoom" :center="center" draggable="true">
        <l-tile-layer :url="tileLayerUrl" :attribution="tileLayerAttribution" />
        <slot />
      </l-map>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    zoom: {
      type: Number,
      required: true
    },
    center: {
      type: Number[2],
      required: true
    }
  },
  data: function() {
    return {
      tileLayerUrl: "https://tile-server.flixbus.io/tile/{z}/{x}/{y}.png",
      tileLayerAttribution:
        "Map data &copy; <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/' target='_blank'>CC-BY-SA</a>, Imagery &copy; <a href='https://www.mapbox.com/' target='_blank'>Mapbox</a>, Tiles &copy; <a href='https://flixbus.at/' target='_blank'>FLIX BUS</a>"
    };
  }
};
</script>

<style>
.map-container {
  height: calc(100vh - 64px);
  width: 100%;
}
</style>
