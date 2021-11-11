mapboxgl.accessToken = 'pk.eyJ1IjoibXBlc2VrZSIsImEiOiJja3ZzZTVjZW81ajlpMm5zMTIzbGN5ZXNvIn0.xhUyzjS_k-q7FCBod1wZHw';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/outdoors-v11',
  center: [-106.6055534, 35.0853336],
zoom: 6
});

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
.setLngLat([-106.6055534, 35.0853336])
.addTo(map);
 
// Create a default Marker, colored black, rotated 45 degrees.
const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
.setLngLat([-106.311607, 35.767288])
.addTo(map);