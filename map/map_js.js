var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);
var drawControl = new L.Control.Draw({
  edit: {
    featureGroup: drawnItems
  }
});
map.addControl(drawControl);
map.on('draw:created', function (e) {
    var type = e.layerType;
    var layer = e.layer;
  
    if (type === 'marker') {
      // Xử lý khi vẽ điểm
    } else if (type === 'polygon') {
      // Xử lý khi vẽ vùng
      var polygon = layer.toGeoJSON();
      console.log(polygon);
    }
  
    drawnItems.addLayer(layer);
  });
  