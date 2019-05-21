# Places

A website to present a map of places and take submissions.

Technology used:

* [Umap](https://umap.openstreetmap.fr) for editing the GeoJSON
* [Leaflet.js](https://leafletjs.com) for rendering the maps
* [Leaflet-SVGIcon](https://github.com/iatkin/leaflet-svgicon/) for the marker icon
* [Netlify](https://netlify.com) for hosting and accepting submissions

## Editing Places

The file places.json is a GeoJSON file with all of the places in it.  You can edit this however you like, but it works best with [Umap](https://umap.openstreetmap.fr).  You can import and export the GeoJSON file between Umap and here, and you can set colors of markers.

Alternatively you can use a Google Takeout of your saved places.  However you'll need to edit js/site.js to change properties.name to properties.Title.  It's harder to get the data out of Google, and you can't import the data back into Google, but if you're already using Google Maps then this may be a preferred option.

## Customisation

The main thing you are likely to want to customise is the legend.  Search for legend in js/site.js for this.

## Hosting

The map can be hosted anywhere you like - it's a static HTML page with no special requirements.

The submit.html form has been written to work with Netlify's forms.  But you can add your own endpoint for the form to submit to.

## Examples

* [places.wheresalice.info](https://places.wheresalice.info)
