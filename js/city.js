function City(name) {
  this.name = name;
  this.latt = 0;
  this.lon = 0;
}

City.prototype.getLattLon = function() {
  var that = this;
  $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(that.name), function(val) {
    if(val.results.length) {
      var locale = val.results[0].geometry.location;
      that.latt = locale.lat;
      that.lon = locale.lng;
      console.log(that.latt, that.lon);
      initMap(that.latt, that.lon);
    }
  });
};

exports.cityModule = City;
