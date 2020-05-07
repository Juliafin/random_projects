
/*
 * **Letter**: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.
*/

function Letter (char) {

  this.letter = char;
  this.letterChosen = false;
  
  this.set_letter = function (char) {
    

    if (!char) {
      this.letter = "_";
    } else if (char === this.letter) {
      this.letterChosen = true;
    } else if (/^[a-z]$/.test(char)) { 
      this.letter = char;
    } else {
      this.letter = null;
    }
    
}

}


var letter1 = new Letter();
letter1.display_letter();
console.log(letter1.letter);