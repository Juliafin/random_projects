console.log('Hello');

$(document).ready(function() {
  findName();
  submitName();



});


function submitName() {

  $('#submit_name').click(function() {
    var name = $('#name').val();
    console.log('this is the name entered: ' +  name);
  
    localStorage.setItem("name", name);
    $('#message')
      .text(`The name ${name} has been submitted!`)
      .css("color", "green");
  
  });
}


function findName() {
  var name = localStorage.getItem("name");
  if (name) {
    $('.greeting').text(`Welcome ${name}!`);
    $('#submit_name').text('Feel free to change your name');
  }
}


