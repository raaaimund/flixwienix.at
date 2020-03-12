<template>
  <l-circle-marker
    :lat-lng="latlng"
    :interactive="true"
    :radius="radius"
    :stroke="true"
    :weight="strokeWeight"
    :fill="true"
    :fill-opacity="1"
    :fill-color="fillColor"
    :color="strokeColor"
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
    @click="onClick"
  >
    <l-tooltip :options="tooltipOptions">
      <div>{{ title }}</div>
      <span class="text--secondary">um {{ price }} €</span>
    </l-tooltip>
  </l-circle-marker>
</template>

<script>
const markerColors = {
  fill: "#89e321",
  stroke: "#ffffff",
  fillOnMouseOver: "orange"
};
export default {
  name: "MapCircleMarker",
  props: {
    latlng: {
      type: Number[2],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      radius: 8,
      fillColor: markerColors.fill,
      strokeColor: markerColors.stroke,
      strokeWeight: 1,
      tooltipOptions: {
        permanent: true,
        opacity: 1,
        direction: "bottom",
        offset: [0, 12],
        interactive: true
      }
    };
  },
  methods: {
    onMouseOver(event) {
      this.radius = this.radius * 1.4;
      this.strokeWeight = this.strokeWeight * 1.4;
      this.fillColor = markerColors.fillOnMouseOver;
    },
    onMouseOut(event) {
      this.radius = 8;
      this.strokeWeight = 1;
      this.fillColor = markerColors.fill;
    },
    onClick(event) {
      this.$router.push({
        path: this.path
      });
    }
  }
};
</script>
