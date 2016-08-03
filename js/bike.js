var bikeKey = require('./../.env').bikeKey;

function Bike() {}

Bike.prototype.getBikeList = function(color){
  $.get("https://bikeindex.org:443/api/v2/bikes_search/stolen?per_page=200&proximity=45.5207086%2C-122.6795858&proximity_square=1").then(function(response){
    console.log(response);
  }).fail(function(error){
    $("#error").text(error.responseJSON.message);
  })
};

exports.bikeModule = Bike;
