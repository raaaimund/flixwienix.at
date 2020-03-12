<template>
  <l-tile-layer :url="tileLayerUrl" :attribution="tileLayerAttribution" />
</template>

<script>
export default {
  name: "MapFlixbusTileLayer",
  data: function() {
    return {
      tileLayerUrl: "https://tile-server.flixbus.io/tile/{z}/{x}/{y}.png",
      tileLayerAttribution:
        "Map data &copy; <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/' target='_blank'>CC-BY-SA</a>, Imagery &copy; <a href='https://www.mapbox.com/' target='_blank'>Mapbox</a>, Tiles &copy; <a href='https://flixbus.at/' target='_blank'>FlixBus</a>"
    };
  }
};
</script>
