console.log('hi!');

const button = document.querySelector('button');

let timesFlashed = 3;
let buttonFlashing = false;
let buttonFlashInterval;

function randomColor () {
  const colors = ['red', 'green', 'blue', 'yellow', 'white', 'orange', 'purple', 'violet', 'brown', 'black'
  ];

  const colorIndex = Math.floor(Math.random() * colors.length);

  const color = colors[colorIndex];

  return color;

}

function randomPositiveNegativeInt() {
  const randomNumber = Math.ceil(Math.random() * 100);
  const randomSign = Math.floor(Math.random() * 2) ? 1 : -1;
  return randomNumber * randomSign; 
}


button.addEventListener('mouseover', function(event) {
  // console.log('Moused over:', event);
   
  if (buttonFlashing) {
    return;
  }

    buttonFlashInterval = setInterval(function() {
      console.log('times flashed!', timesFlashed);
      button.style.backgroundColor = randomColor();
      

      buttonFlashing = true;
      if (timesFlashed === 0) {
        button.style.top = `${randomPositiveNegativeInt()}px`;
        button.style.left = `${randomPositiveNegativeInt()}px`;
        clearInterval(buttonFlashInterval);
        timesFlashed = 3;
        buttonFlashing = false;
        return;
      }
      
      timesFlashed--;
    }, 1000)

 



})