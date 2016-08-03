var apiKey = require('./../.env').apiKey;

function Bike() {}

Bike.prototype.getBikeList = function(color){
  $.get("https://bikeindex.org:443/api/v2/bikes_search?page=1&colors=" + color + "&appid=" + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    $("#error").text(error.responseJSON.message);
  })
};

exports.bikeModule = Bike;
