var mapsKey = require('./../.env').mapsKey;
var Bike = require('./../js/bike.js').bikeModule;
var City = require('./../js/city.js').cityModule;

$(document).ready(function(){
  $("#city-search").submit(function(event){
    event.preventDefault();
    var city = $("#city").val();
    $("#city").val("");
    var newBikeSearch = new Bike(city);
    newBikeSearch.getBikeList();
    $("#city-name").text(city);
    $("#show-map").click(function(event){
      event.preventDefault;
      var searchCity = new City(city);
      console.log(searchCity)
      searchCity.getLattLon();
      $("#map").show();
    });
  });
});
