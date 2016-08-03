var mapsKey = require('./../.env').mapsKey;
var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function(){
  $("#city-search").click(function(event){
    event.preventDefault();
    var city = $("#city").val();
    $("#city").val("");
    var newBikeSearch = new Bike();
    newBikeSearch.getBikeList(city);
  });
});
