console.log('Inside app.js')

function librarySearchListener() {
  console.log('Inside library search listener');
  $('button[type="submit"]').click(function(event) {
    event.preventDefault();

    var query = $('#search').val();

    console.log('query: ', query);
    searchLOC(query);

  });
}

// http://someDomain.com/someroute/somesubroute?value1=hello&value2=how%20are%20you


function searchLOC(q) {
  var BASE_URL = 'https://chroniclingamerica.loc.gov/search/titles/results/';
  q = encodeURI(q);
  var options = {
    url: `${BASE_URL}?format=json&terms=${q}`,
    method: "GET"
  }

  $.ajax(options)
    .then(function(response) {
      console.log('Response from the api', response);
      throw new Error('There was an error');
      renderResults(response.items);
  })
    .catch(function(error) {
      console.log('There was an error', error);
      $('#results').html('<p style="color:red;">There was an error</p>')
    });
}




function renderResults(items) {
  if(items && items.length) {
    var resultHTML = '';

    items.forEach(function(item) {
        var articleHTML = '';
        var title = item.title;
        var publicationLocation = item.place_of_publication
        var essay = item.essay;

        if (!essay || !essay.length) {
          essay = `<p>Text unavailable.</p>`;
        }

        var titleHtml = `<h2>${title}</h2>`;
        var publicationHtml = `<p>Published in ${publicationLocation}</p>`;
        var essayHTML = `<div>${essay}</div>`;
        articleHTML += titleHtml + publicationHtml + essayHTML;
        resultHTML += articleHTML
    });

    $('#results').html(resultHTML);

  }
}



librarySearchListener();
