var map, heatmap;
var heatmapData = [];
// Heatmap data

function getPoints(latt, lon) {
  heatmapData.push(new google.maps.LatLng(latt, lon));
}

function initMap(latt, lon) {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: latt, lng: lon},
    mapTypeId: 'satellite'
  });

  var heatmap = new google.maps.visualization.HeatmapLayer({
    data: heatmapData
  });
  heatmap.setMap(map);
  heatmap.set('radius', heatmap.get('radius') ? null : 40);
}
