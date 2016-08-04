var mapsKey = require('./../.env').mapsKey;
var Bike = require('./../js/bike.js').bikeModule;
var City = require('./../js/city.js').cityModule;

$(document).ready(function(){
  $("#city-search").click(function(event){
    event.preventDefault();
    var city = $("#city").val();
    $("#city").val("");
    var newBikeSearch = new Bike();
    newBikeSearch.getBikeList(city);
    var searchCity = new City(city);
    searchCity.getLattLon();
    $("#map").show();
    $("#city-name").text(city);
  });
});
