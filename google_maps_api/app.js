// AIzaSyCnn35g6HnGSrjDqsfZQ_uLIWYK1pHTtvk
var map;
function initMap() {
  var options = {
    zoom: 10,
    center: {
      lat: 33.749, lng: -84.388
    }
  };
  map = new google.maps.Map(document.getElementById('map'), options); 
}

