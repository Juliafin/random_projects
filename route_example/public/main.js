console.log('hello')

function addNoteListener() {
  $('#submit_note').click((event) => {
    event.preventDefault();
    const note = $('#add_note').val().trim();
    if (note) {
      addNote(note)
    } else {
      $('.error').empty()
      $('.error').text('Text cannot be left blank.')

    }



  });
}


function addNote(note) {
  $.ajax({
      url: '/createNote',
      method: 'POST',
      data: {
        note
      }
    })
    .then((response) => {
      console.log(response)
      getNotes();
    })
}


function getNotes() {
  $.ajax({
      url: '/notes',
      method: "GET"
    })
    .then((response) => {
      console.log(response);
      $('#notes').empty();
      if (response.notes.length === 0) {
        $('#notes').text('There are currently no notes.');
      } else {
        response.notes.forEach((note, index) => {
          $('#notes').append(`<p>${index + 1}. ${note}</p>`);
        });

      }


    })
}


$(document).ready(function () {
  getNotes();
  addNoteListener();
});