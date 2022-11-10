/* eslint-disable no-undef */
/**
 * geoJSON simple
 */

// config map
let config = {
  minZoom: 2,
  maxZoom: 18,
};

const zoom = 11;
// co-ordinates
const lat = 12.97;
const lng = 77.59;

// calling map
const map = L.map("map", config).setView([lat, lng], zoom);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

function onEachFeature(feature, layer) {
  layer.bindPopup(feature.properties.nazwa);
}

// adding geojson by fetch
fetch("bbmp.geojson")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // use geoJSON
    L.geoJSON(data, {
        style: function(feature) {
        switch (feature.properties.id) {
        case '1': return {
          fillColor: "#fdae6b",
          fillOpacity: 0.675,
          color: "#808080",
          weight: 3,
          opacity: 0.8
        }
        };
        }
      onEachFeature: onEachFeature,
    }).addTo(map);
  });


