function City(name) {
  this.name = name;
}

City.prototype.getLattLon = function() {
  var that = this;
  $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(that.name), function(val) {
    if(val.results.length) {
      var locale = val.results[0].geometry.location;
      var latt = locale.lat;
      var lon = locale.lng;
      initMap(latt, lon);
    }
  });
};

exports.cityModule = City;
