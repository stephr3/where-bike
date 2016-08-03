var Bike = require('./../js/bike.js').bikeModule;

$(document).ready(function(){
  var currentBikeObject = new Bike ();
  $("#color-search").click(function(event){
    alert('clicked');
    event.preventDefault();
    var color = $("#color").val();
    $("#color").val("");
    currentBikeObject.getBikeList(color);
  });
});
