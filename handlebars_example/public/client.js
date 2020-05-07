console.log('hello world!')


$('#noteSubmit').click(function(event) {
  event.preventDefault();

  var author = $('#author').val();
  var note = $('#note').val();

  var sendOptions = {
    method: 'POST',
    url: '/notes',
    data: {
      author: author,
      note: note
    }
  }

  $.ajax(sendOptions)
    .then(function(result) {
      console.log(result);
      window.location = "/";
    })
    .catch(function(error) {
      console.log(error);
    })

})