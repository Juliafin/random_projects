console.log('Modal!');

$('.modal_button').click(function() {
  var modalContainer = $('.modal_container');

  modalContainer.removeClass("closed");
  modalContainer.addClass("open");
  $('body').css("overflow", "hidden");
});


$('#modal_container_button').click(function() {
  var modalContainer = $('.modal_container');
  modalContainer.removeClass("open");
  modalContainer.addClass("closed");
  $('body').css("overflow", "initial");

})