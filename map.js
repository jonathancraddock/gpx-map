// MAP.JS
// Jonathan Craddock, v0.1

// Define map (default coordinates use 'Cross Fell' trig point)
var mymap = L.map('mapid').setView([54.7030399,-2.4955354], 14);

// Supply a GPX file for the route
var gpx = '/gpx/bowleesdufton.gpx';

// Add the specified GPX file
new L.GPX(gpx, {
  async: true,
  marker_options: {
    // Rename pin icons to avoid ad-blocking issues
    // 'pin-icon-start.png', etc, were being blocked by AdBlock-Plus
    startIconUrl: '/embed/pin-start.png',
    endIconUrl: '/embed/pin-end.png',
    shadowUrl: '/embed/pin-shadow.png'
  },
  // Style the polyline to show up better on 'OpenTopoMap'
  polyline_options: {color: 'red', opacity: 0.7, weight: 4}
}).on('loaded', function(e) {
  // Scale map to route
  mymap.fitBounds(e.target.getBounds());
}).addTo(mymap);

// Load the map tiles
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(mymap);
