if(document.querySelector('#map')){
  let map = L.map("map").setView([51.23009, 4.41616], 17);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
}

if(document.querySelector('#UoBMap')){
  let UoBMap = L.map("UoBMap").setView([51.37792302303219, -2.3275922010228047], 15);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(UoBMap);
}
