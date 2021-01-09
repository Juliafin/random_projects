const MORSE_CODE = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H' ,
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z'
}


const decodeMorse = (morseStr)  => {
  const str = '.... . -.--   .--- ..- -.. .';
  const words = str.split(/\s{2,}/);

  let message = ''
  console.log(words);
  words.forEach((word) => {
    console.log(word)
    const letters = word.split(' ');
    console.log(letters)
    letters.forEach((letter, index) => {
      message += MORSE_CODE[letter]
      if (index === letters.length - 1) {
        message += ' '
      }
    });
  });
  console.log(message)
}
  decodeMorse()