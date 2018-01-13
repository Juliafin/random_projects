console.log('hello modal!!')

console.log('we have access to jquery:', $)

function modalButtonListener() {
  $('.modal_button').on('click', function() {
    
        console.log('button clicked')
    
        $('.modal_container').css('display', 'flex');
    
        $('.modal_button').css('pointer-events', 'none')
    
      });

}

  $('.close_modal').on('click', function() {

    console.log('close modal button clicked');

    $('.modal_container').css('display', 'none');
    
    $('.modal_button').css('pointer-events', 'initial')

  });

modalButtonListener();
  