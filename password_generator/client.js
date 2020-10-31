var passwordLength = 0;
var useUpperCase = true;
var useLowerCase = true;
var useNumeric = true;
var useSpecialCharacters = true;


var upperCaseCharacters = new Array(26)
  .fill(null)
  .map(function(element, index) {
    var character = String.fromCharCode(65 + index);
    return character;
  })


var lowerCaseCharacters = new Array(26)
  .fill(null)
  .map(function(element, index) {
    var character = String.fromCharCode(97 + index);
    return character;
  })

var numericCharacters = new Array(10)
  .fill(null)
  .map(function(element, index) {
    return index;
  })

var specialCharacters = new Array(7)
.fill(null)
.map(function(element, index) {
  var character = String.fromCharCode(58 + index);
  return character;
  })


console.log(upperCaseCharacters, lowerCaseCharacters, numericCharacters, specialCharacters);


function generatePassword() {
  if ((!useLowerCase && !useUpperCase && !useNumeric && !useSpecialCharacters) || !passwordLength) {
    return;
  }

  var characterArray = [];
  var password = '';

  if (useLowerCase) {
    characterArray = [...characterArray, ...lowerCaseCharacters]
  }
  
  if (useUpperCase) {
    characterArray = [...characterArray, ...upperCaseCharacters]
  }

  if (useNumeric) {
    characterArray = [...characterArray, ...numericCharacters];
  }

  if (useSpecialCharacters) {
    characterArray = [...characterArray, ...specialCharacters];
  }

  for (var i = 1; i <= passwordLength; i++) {
    var randomCharacterIndex = Math.floor(Math.random() * characterArray.length);
    var randomCharacter = characterArray[randomCharacterIndex];
    password = password + randomCharacter;
  }

  return password;


}



var numberInput = document.querySelector('input[type="number"]');
var checkBoxes = document.querySelectorAll('input[type="checkbox"]')
var generatePasswordButton = document.querySelector('button#generate-password');


function numberInputChangeHandler (event) {
  const value = parseInt(this.value);
  passwordLength = value;
}


function checkBoxHandler(event) {

  console.log('checkbox checked')
  const id = this.id;

  console.log('check box changed:', id);

  if (id === 'lowerCase') {
    useLowerCase = !useLowerCase;
  } else if (id === 'upperCase') {
    useUpperCase = !useUpperCase;
  } else if (id === 'specialCharacters') {
    useSpecialCharacters = !useSpecialCharacters;
  } else if (id === 'numeric') {
    useNumeric = !useNumeric;
  }
}



function generatePasswordHandler() {
  console.log('Generate Password button clicked');
  var password = generatePassword();

  if (!password) {
    return;
  }

  var passwordContainer = document.querySelector('#password');
  passwordContainer.innerText = password;
}



// document.addEventListener('load', function() {

  numberInput.addEventListener('change', numberInputChangeHandler);


    checkBoxes
      .forEach(function(domElement) {
        console.log(domElement);
        domElement.addEventListener('change', checkBoxHandler);
      })

    generatePasswordButton.addEventListener('click', generatePasswordHandler);

// })







