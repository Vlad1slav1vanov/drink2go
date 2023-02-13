const position = [59.968266, 30.3174089];
const map = L.map('map').setView(position, 17);
L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=HMfyPUotkQhoWYIXN1mz',{
  crossOrigin: true
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/icons/stack.svg#map-dot',
  iconSize: [38, 50],
  iconAnchor: [18, 50],
});

const mainPin = L.marker(
  {
    lat: position[0],
    lng: position[1],
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPin.addTo(map);