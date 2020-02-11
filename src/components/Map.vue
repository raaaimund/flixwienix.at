<template>
  <div class="map-container">
    <client-only>
      <l-map ref="map" :zoom="6" :center="[48.208176, 16.373819]" draggable="true">
        <l-tile-layer url="https://tile-server.flixbus.io/tile/{z}/{x}/{y}.png" />
        <slot />
      </l-map>
    </client-only>
  </div>
</template>

<style>
.map-container {
  height: calc(100vh - 64px);
  width: 100%;
}
</style>
