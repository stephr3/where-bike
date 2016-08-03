var mapsKey = require('./../.env').mapsKey;
var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function(){
  $("#city-search").click(function(event){
    event.preventDefault();
    var city = $("#city").val();
    $("#city").val("");
    $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address="+encodeURIComponent(city), function(val) {
      if(val.results.length) {
        var location = val.results[0].geometry.location
        var lat = location.lat;
        var lon = location.lng;
        console.log(city + ":" + lat + ", " + lon)
      }
    })
    var newBikeSearch = new Bike();
    newBikeSearch.getBikeList(city);
  });
});
