var bikeKey = require('./../.env').bikeKey;

function Bike(city) {
  this.city = city;
  this.lattLongs = [];
  this.locations = [];
}

Bike.prototype.getBikeList = function(){
  var that = this;
  $.get("https://bikeindex.org:443/api/v2/bikes_search/stolen?per_page=100&proximity="+ that.city +"&proximity_square=2").then(function(response){
    console.log(response);
    response.bikes.forEach(function(bike){
      that.getLattLons(bike.stolen_location);
    });
  }).then(function(){
    $("#loading-img").hide();
    $("#show-map").show();
  }).fail(function(error){
    $("#error").text(error.responseJSON.message);
  });
};

Bike.prototype.getLattLons = function(bikeLocation) {
  var that = this;
  $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(bikeLocation), function(val) {
    if(val.results.length) {
      var locale = val.results[0].geometry.location;
      var latt = locale.lat;
      var lon = locale.lng;
      that.lattLongs.push([latt, lon]);
      getPoints(latt, lon);
    }
  });
}
exports.bikeModule = Bike;
