function Bike(city) {
  this.city = city;
}

Bike.prototype.getBikeList = function(){
  var that = this;
  $.get("https://bikeindex.org:443/api/v2/bikes_search/stolen?per_page=100&proximity="+ that.city +"&proximity_square=2").then(function(response){
    console.log(response);
    response.bikes.forEach(function(bike){
      that.getLattLons(bike.stolen_location);
      if (response.bikes.length > 10){
        for(var i=0; i<10; i++) {
          $('#' + i).next().text(response.bikes[i].title)
          if(response.bikes[i].large_img){
            $('#' + i).attr("src", response.bikes[i].large_img);
          }else{
            $('#' + i).attr("src", "img/stock.jpg");
          }
        }
      } else {
        for(var i=0; i<response.bikes.length; i++) {
          $('#' + i).next().text(response.bikes[i].title)
          if(response.bikes[i].large_img){
            $('#' + i).attr("src", response.bikes[i].large_img);
          }else{
            $('#' + i).attr("src", "img/stock.jpg");
          }
        }
        for(var i=response.bikes.length; i < 10; i++) {
          $('#' + i).attr("src", "img/nobike.png");
          $('#' + i).next().text("No more bikes found")
        }
      }

    });
  }).then(function(){
    $("#loading-img").hide();
    $("#city-result").show();
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
      getPoints(latt, lon);
    }
  });
}
exports.bikeModule = Bike;
