console.log('Hello!');

// Api key: XRDqYpSlEgEDNZ54TVurqj0pA4jKaecTdiwGb9fF

// var API_KEY = 'XRDqYpSlEgEDNZ54TVurqj0pA4jKaecTdiwGb9fF';
var SPACE_BASE_URL = 'https://images-api.nasa.gov/search?';



// https://images-api.nasa.gov/search?q=earth

function renderImages(response) {
  // for (let i = 0; i < response.items.length; i++) {
  //   var item = response.items[i];
  // }
  
  $('#searchResults').empty();

  response.collection.items.forEach(function(item) {
    var description = item.data[0].description;
    var link = item.links[0].href;
    console.log('Description: ', description);
    console.log('Link: ', link);

    // var name = "John";
    // var food = "sushi";

    // console.log(name + ' likes ' + food);
    // console.log(`${name} likes ${food}`);



    var spaceHtml = `
      <div>
        <p>${description}</p>
        <img src="${link}"/>
      </div>
    `;

    $('#searchResults').append(spaceHtml);

  });
}



function makeApiCall(search) {
  var options = {
    url: `${SPACE_BASE_URL}q=${search}`,
    method: 'GET'
  };

  $.ajax(options)
    .then(function(response) {
      console.log(response);
      $('#spaceAPISearch').val("");
      renderImages(response);
    });

}



$('#submitSearch').click(function(event) {
  event.preventDefault();
  var searchTerm = $('#spaceAPISearch').val();
  console.log(searchTerm);
  makeApiCall(searchTerm);
});

