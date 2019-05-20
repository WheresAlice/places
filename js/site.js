var mymap = L.map('mapid').fitWorld();

var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 2, maxZoom: 12, attribution: osmAttrib});
mymap.addLayer(osm);

var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML += '<i style="background: #00008B"></i> Visited<br>';
    div.innerHTML += '<i style="background: DeepSkyBlue"></i> Not Visited<br>';
    div.innerHTML += '<i style="background: PaleGreen"></i> Your Suggestions<br>';
    return div;
};

legend.addTo(mymap);

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.name) {
        layer.bindPopup(feature.properties.name);
    }
    if (feature.properties && feature.properties._umap_options && feature.properties._umap_options.color) {
        layer.setIcon(new L.DivIcon.SVGIcon({fillColor: feature.properties._umap_options.color, fillOpacity: 1, iconSize:  	[24,32]}));
    } else {
        layer.setIcon(new L.DivIcon.SVGIcon({fillColor: '#00008B', fillOpacity: 1, iconSize:  	[24,32]}))
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
