console.log('form validation!')

var favoriteColorInput = document.querySelector('#favoriteColor');
var statusDiv = document.querySelector('.status');

var formValid = true;
var formtouched = false;
var validColors = ['red', 'green', 'blue', 'yellow', 'orange', 'brown', 'black', 'white', 'purple', 'violet'];

if (!formtouched) {
  statusDiv.innerText = 'Form not touched';
}

function renderStatus(favoriteColor) {
  statusDiv.innerText = '';

  const firstNotEmpty = document.querySelector('#first').value;
  const lastNotEmpty = document.querySelector('#last').value;

  if (validColors.includes(favoriteColor) && !firstNotEmpty && !lastNotEmpty) {
    formValid = true
  } else {
    formValid = false;
  }

  if (formValid) {
    statusDiv.innerText = 'Correct!'
    statusDiv.setAttribute('class', 'status success')
  } else {
    statusDiv.innerText = 'Incorrect!'
    statusDiv.setAttribute('class', 'status failure')
  }


}

const ENTER_KEY_PRESSED = 13;

favoriteColorInput.addEventListener('keyup', (event) => {

  console.log(event.keyCode);

  if (event.keyCode === ENTER_KEY_PRESSED) {
    if (formValid) {
      statusDiv.innerText = "Submitting!";
      statusDiv.setAttribute('class', 'status success')
    } else {
      statusDiv.innerText = "Cannot submit!";
      statusDiv.setAttribute('class', 'status failure')
    }
    setTimeout(() => {
      statusDiv.setAttribute('class', 'status');
      statusDiv.innerText = '';
    }, 3000)
    return;
  } else {

    var color = event.target.value;
    console.log(event.target.value);
    renderStatus(color);
  }

})

favoriteColorInput.addEventListener('focus', () => {
  formtouched = true;
  if (formtouched) {
    statusDiv.innerText = 'Form has been focused!'
  }
})


