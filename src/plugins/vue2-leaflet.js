import Vue from 'vue'
import { LMap, LTileLayer, LMarker, LCircleMarker, LTooltip } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-circle-marker', LCircleMarker);
Vue.component('l-tooltip', LTooltip);
