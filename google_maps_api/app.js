// AIzaSyCnn35g6HnGSrjDqsfZQ_uLIWYK1pHTtvk
var map, markers = [];

var mapOptions = {
  zoom: 10,
  center: {
    lat: 33.749, lng: -84.388
  }
}

function initMap() {
  
  map = new google.maps.Map(document.getElementById('map'), mapOptions); 

  var marker = new google.maps.Marker( {
    position: mapOptions.center,
    map:map,
    title: "Helloooooo!"
  })
  
};


// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

function closeMarkers(arr) {
  arr.forEach( (marker) => {
    marker.infoWindow.close();
  })
}


function createMarkers (position, title, infoWindow) {

  var marker = new google.maps.Marker( {
    position: position,
    map:map,
    title: title,
    infoWindow:infoWindow
  })

  markers.push(marker);

  
}

// function createInfoWindow(name, address) {
  
//   infoWindow = new google.maps.InfoWindow({
//     content: `
//     <h1>${name}</h1>
//     <p>${address}</p>
//     `
//   })
// }

function searchListener() {

  $('input#search').keydown((event) => {
    var searchValue = event.target.value;
    console.log(searchValue);
    console.log(event.keyCode);
    if (event.keyCode === 13 ) {
      console.log('enter key pressed');
      console.log(event)
      mapSearch(searchValue);
    }

  });
}



function mapSearch (value) {
  var service = new google.maps.places.PlacesService(map);
  clearMarkers();
  markers.length = 0;
  service.textSearch(queryObject('500', value), (places, status) => {
    console.log(places, 'results');

    places.forEach(function(place, i) {
      if (place.geometry) {
          
      var position = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      }
      var name = place.name || place.formatted_address;
      
      var infoWindow = new google.maps.InfoWindow({
        content: `
        <h1 class="info_window_header">${place.name}</h1>
        <p>${place.formatted_address}</p>
        `
      });
      createMarkers(position, name, infoWindow);
      
      infoWindow.addListener('click', (event) => {
        console.log('event');
      })

      markers[i].addListener('click', (event) => {
        closeMarkers(markers);        
        console.log(event.latLng.lat(), 'inside marker listener');
        infoWindow.open(map, markers[i]);
      })

      }
      
    });

  });

}

function infoWindowEventListener() {
  $("body").on('click', '.info_window_header', (event) => {
    console.log('event inside info window listener');
  });
}


function queryObject(radius, query, type) {
  return ({
    location:{
      lat: map.getCenter().lat(), 
      lng: map.getCenter().lng() 
    }, 
    query, 
    radius, 
    type: type ? type : "" })
}


searchListener();
infoWindowEventListener()