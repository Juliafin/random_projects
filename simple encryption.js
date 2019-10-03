// alternating split encryption
function encrypt(text, n) {
  if (!text) {
    return text;
  }
  let encryptedText = text;
  for (let i = 1; i <= n; i++) {
    
    let str1 = '';
    let str2 = '';
    for (let j = 0; j < text.length; j++) {
      if (j % 2 === 0) {
        str2 += encryptedText[j];
      } else {
        str1 += encryptedText[j]
      }
    }
    console.log('encrypted text', encryptedText);
    encryptedText = str1 + str2;
    
    
  } 
  return encryptedText;
  
}

function decrypt(text, n) {
  if (!text) {
    return text;
  }
  let decryptedText = text;
  for (let i = 1; i <= n; i++) {
    const midpoint = decryptedText.length / 2;

    let section1 = decryptedText.slice(0, midpoint).split("");
    let section2 = decryptedText.slice(midpoint).split("");
    let temp = '';
    while (section1.length || section2.length) {
      if (section2.length) {
        temp += section2.shift();
      }

      if (section1.length) {
        temp += section1.shift();
      }
    }
    decryptedText = temp;
    
  } 
  return decryptedText;
  
}

console.log(encrypt("hi how are you", 2));
console.log(encrypt("This is a test", 1));
console.log(encrypt("This is a test", 2));

"hsi  etTi sats!";
console.log(decrypt("hsi  etTi sats", 1))
console.log(decrypt("s eT ashi tist", 2))