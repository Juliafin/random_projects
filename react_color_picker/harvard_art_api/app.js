console.log('Welcome to the harvard art api')
const API_KEY = "03874c10-e3be-11e8-ba1b-359900563d53";

const API_KEY = "get your own api key!"
const API_BASE_URL = "https://api.harvardartmuseums.org";



function queryHarvardAPIImages(q) {
  if (q) {
    q = q.replace(/ /g, "%20");
    var query = `q=${q}`;
  } else {
    var query = ""
  }
  var options = {
    method: "GET",
    url: `${API_BASE_URL}/image?apikey=${API_KEY}&height=150&width=150&${query}`,
  }
  
  $.ajax(options)
    .then(function(data) {
      console.log('Here is the data from the api call');
      console.log(data);
      processImages(data);
    })
    .catch(function(error) {
      console.log(error);
    });
}


function searchListener() {
  $('#hello').click(function(event) {
    event.preventDefault();
    var query = $('#search').val();
    print(`Query: ${query}`);
    queryHarvardAPIImages(query);
    
  });
}

searchListener();

function processImages(data) {
  $('#art').empty();
  data.records.forEach(function (element) {
    var url = element.baseimageurl
    var image = `<img src="${url}"></img>`;
    $('#art').append(image);
  });
}