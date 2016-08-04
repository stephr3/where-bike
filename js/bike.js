var bikeKey = require('./../.env').bikeKey;

function Bike() {

}
var locations = [];
var lattLong = [];

Bike.prototype.getBikeList = function(city){
  $.get("https://bikeindex.org:443/api/v2/bikes_search/stolen?per_page=100&proximity="+ city +"&proximity_square=2").then(function(response){
    console.log(response);
    response.bikes.forEach(function(bike){
      locations.push(bike.stolen_location);
    });
    console.log(locations);
  }).then(function(response){
    locations.forEach(function(place){
    $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(place), function(val) {
      if(val.results.length) {
        var location = val.results[0].geometry.location;
        var lat = location.lat;
        var lon = location.lng;
        $("#lat-long-array").append("[" + lat + ", " + lon + "], ");
      }
      });
    });
    // console.log(lattLong);
}).fail(function(error){
    $("#error").text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
