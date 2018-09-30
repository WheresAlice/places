var mymap = L.map('mapid').fitWorld();

var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 2, maxZoom: 12, attribution: osmAttrib});
mymap.addLayer(osm);

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.Title) {
        layer.bindPopup(feature.properties.Title);
    }
}

fetch("/places.json")
    .then((resp) => resp.json())
    .then(function (p) {
        L.geoJSON(p, {
            onEachFeature: onEachFeature
        }).addTo(mymap);
    });

mymap.setView([35.5754390657896, 45.388114638626575], 2);