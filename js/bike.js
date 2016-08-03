var bikeKey = require('./../.env').bikeKey;

function Bike() {}

Bike.prototype.getBikeList = function(city){
  $.get("https://bikeindex.org:443/api/v2/bikes_search/stolen?per_page=100&proximity="+ city +"&proximity_square=2").then(function(response){
    console.log(response);
  }).fail(function(error){
    $("#error").text(error.responseJSON.message);
  })
};

exports.bikeModule = Bike;
