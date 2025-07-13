// mapa-concursos.js

// Inicializar mapa
const map = L.map('map').setView([-25.3, -57.6], 8);

// Cargar capa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Iconos personalizados por nivel educativo
const icons = {
  inicial: L.icon({ iconUrl: 'icons/inicial.png', iconSize: [32, 32] }),
  primaria: L.icon({ iconUrl: 'icons/primaria.png', iconSize: [32, 32] }),
  media: L.icon({ iconUrl: 'icons/media.png', iconSize: [32, 32] })
};

// Agrupador de marcadores
const clusterGroup = L.markerClusterGroup();

// Ejemplo de datos (reemplazar con fetch a backend o archivo JSON)
const instituciones = [
  { nombre: "Escuela Básica Nº 123", nivel: "primaria", lat: -25.29, lng: -57.58, vacancias: 4 },
  { nombre: "Colegio Nacional Asunción", nivel: "media", lat: -25.31, lng: -57.63, vacancias: 0 },
  { nombre: "Jardín San Miguel", nivel: "inicial", lat: -25.34, lng: -57.59, vacancias: 2 }
];

// Función para crear marcador
function crearMarcador(inst) {
  const icono = icons[inst.nivel] || icons.primaria;
  const marcador = L.marker([inst.lat, inst.lng], { icon: icono });

  const popup = `
    <strong>${inst.nombre}</strong><br>
    Nivel: ${inst.nivel}<br>
    Vacancias: ${inst.vacancias}
  `;
  marcador.bindPopup(popup).bindTooltip(inst.nombre);

  return marcador;
}

// Añadir marcadores al mapa
instituciones.forEach(inst => {
  const marker = crearMarcador(inst);
  clusterGroup.addLayer(marker);
});
map.addLayer(clusterGroup);

// Mostrar ubicación del usuario
map.locate({ setView: false, maxZoom: 13 });
map.on('locationfound', function (e) {
  const radius = e.accuracy;
  const userMarker = L.circleMarker(e.latlng, {
    radius: 8,
    fillColor: '#3498db',
    color: '#2980b9',
    weight: 2,
    fillOpacity: 0.9
  }).addTo(map).bindPopup("Estás aquí").openPopup();

  // Dibujar radio de búsqueda (ej. 5 km)
  L.circle(e.latlng, { radius: 5000, color: '#3498db', fillOpacity: 0.1 }).addTo(map);
});

// Filtros por nivel educativo (simulado)
document.querySelectorAll('input[name="nivel"]')?.forEach(input => {
  input.addEventListener('change', () => {
    const nivelSeleccionado = input.value;
    clusterGroup.clearLayers();
    instituciones.filter(i => nivelSeleccionado === 'todos' || i.nivel === nivelSeleccionado)
      .forEach(i => clusterGroup.addLayer(crearMarcador(i)));
  });
});

// Control de leyenda
const legend = L.control({ position: 'bottomright' });
legend.onAdd = function () {
  const div = L.DomUtil.create('div', 'info legend');
  div.innerHTML = `
    <h4>Niveles Educativos</h4>
    <img src="icons/inicial.png" height="24"> Inicial<br>
    <img src="icons/primaria.png" height="24"> Primaria<br>
    <img src="icons/media.png" height="24"> Media<br>
    <hr><span style="color:green;">●</span> Vacancias disponibles
  `;
  return div;
};
legend.addTo(map);

// Geocodificador (búsqueda por localidad)
const geocoder = L.Control.geocoder({
  defaultMarkGeocode: false
}).on('markgeocode', function (e) {
  const bbox = e.geocode.bbox;
  const poly = L.polygon([
    bbox.getSouthEast(),
    bbox.getNorthEast(),
    bbox.getNorthWest(),
    bbox.getSouthWest()
  ]).addTo(map);
  map.fitBounds(poly.getBounds());
}).addTo(map);

// Ruta entre usuario y una institución (la primera como ejemplo)
function trazarRuta(destLat, destLng) {
  map.locate();
  map.once('locationfound', function (e) {
    L.Routing.control({
      waypoints: [L.latLng(e.latitude, e.longitude), L.latLng(destLat, destLng)],
      routeWhileDragging: false
    }).addTo(map);
  });
}

// Llamada de prueba: trazar ruta a la primera institución
// trazarRuta(instituciones[0].lat, instituciones[0].lng);
