// const mapLeaflet = document.querySelector(".contacts__map-leaflet");
// const mapGoogle = document.querySelector(".contacts__map-google");

// const initMap = () => {
//   mapLeaflet.style.display = "block";
//   mapGoogle.style.display = "none";
// };

// initMap();

var mapOptions = {
  center: [59.938823961800495, 30.3230581269971],
  zoom: 20,
};

var map = new L.map("map", mapOptions);
var layer = new L.TileLayer(
  "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
);

map.addLayer(layer);

var marker;

var pinIcon = L.icon({
  iconUrl: "./img/svg/geo.svg",
  iconSize: [18, 22], // size of the icon
  iconAnchor: [22, 10], // point of the icon which will correspond to marker's location
});

L.marker([59.938823961800495, 30.3230581269971], { icon: pinIcon }).addTo(map);
