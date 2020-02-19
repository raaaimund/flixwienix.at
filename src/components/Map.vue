<template>
  <div class="map-container">
    <client-only>
      <l-map ref="map" :zoom="zoom" :center="center" draggable="true">
        <l-tile-layer url="https://tile-server.flixbus.io/tile/{z}/{x}/{y}.png" />
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
  }
};
</script>

<style>
.map-container {
  height: calc(100vh - 64px);
  width: 100%;
}
</style>
