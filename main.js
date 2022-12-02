let map = L.map('map').setView([51.23009, 4.41616], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
   maxZoom: 19,
   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// var marker = L.marker([51.23009, 4.41616]).addTo(map);
// var bounds = [[51.23041, 4.4155], [51.22991, 4.41675]]
// L.rectangle(bounds, { color: "#ff7800", weight: 1 }).addTo(map);
// marker.bindPopup('AP-Hogeschool<br>Ellermanstraat 33').openPopup()