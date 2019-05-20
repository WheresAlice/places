var mymap = L.map('submitmap').fitWorld();

var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib = 'Map data � <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 2, maxZoom: 18, attribution: osmAttrib});
mymap.addLayer(osm);

var marker;
mymap.on('click', onMapClick);
function onMapClick(e) {
    if (Object.keys(mymap._layers).length === 1) {
        marker = new L.marker(e.latlng, {draggable: false});
        mymap.addLayer(marker);
        marker.on("click", onMarkerClick);
        document.getElementById('pointlocation').value = JSON.stringify(marker.toGeoJSON());
    }
}

function onMarkerClick() {
    mymap.removeLayer(marker);
    document.getElementById('pointlocation').value = '';
}



mymap.setView([35.5754390657896, 45.388114638626575], 2);
