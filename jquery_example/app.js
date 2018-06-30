var state = {
  counter: 0,
  colorIndex: 0,
  colors: ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'lightblue', 'black', 'violet', 'indigo', 'pink']
}

console.log('hello')

function resetButton() {

  state.colorIndex = 0
  state.counter = 0
  $('#counter').text(state.counter)
  $('.hello').css('background-color', 'initial')
  $('body').css('background-color', 'initial')
}



function buttonListener () {

  $('.hello').click(function (event) {
    event.preventDefault();
    state.counter += 1;
    $('#counter').text(state.counter)
    if (state.counter % 5 === 0) {
      if (state.colorIndex === state.colors.length) {
        state.colorIndex = 0;
      }
      var color = state.colors[state.colorIndex]
      $('.hello').css('background-color', color )
      $('body').css('background-color', color)
      state.colorIndex += 1;
    }
  
  })
}

function resetButtonListener () {
  $('#reset').click(function(event) {
    event.preventDefault();
    resetButton()
  }) 
}


function initialize() {
  
  buttonListener()
  resetButtonListener()

}


initialize()







