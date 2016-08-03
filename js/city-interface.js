var mapsKey = require('./../.env').mapsKey;

$(document).ready(function(){
  $("#city-search").click(function(event){
    alert('clicked');
    event.preventDefault();
    var city = $("#city").val();
    $("#city").val("");
    $("iframe").attr("src", "https://www.google.com/maps/embed/v1/place?q=" + city + "&key=" + mapsKey)
  });
});
