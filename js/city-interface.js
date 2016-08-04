var Bike = require('./../js/bike.js').bikeModule;
var City = require('./../js/city.js').cityModule;

$(document).ready(function(){
  $("#city-search").submit(function(event){
    event.preventDefault();
    var city = capitalize($("#city").val());
    $("#city").val("");
    var newBikeSearch = new Bike(city);
    newBikeSearch.getBikeList();
    $("#city-result").hide();
    $("#show-map").hide();
    $("#map").hide();
    $("#loading-img").show();
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

var capitalize = function(word) {
  var splitArray = word.split("");
  splitArray[0] = splitArray[0].toUpperCase();
  return splitArray.join("");
}
