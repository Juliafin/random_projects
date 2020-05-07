const isPalindrome = (str) => {
  let char1 = 0;
  let char2 = str.length - 1;
  let palinDrome = true;

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[char1].toLowerCase() !== str[char2].toLowerCase()) {
      palinDrome = false;
    }
    char1++;
    char2--;
  }

  return palinDrome;
};

console.log(isPalindrome('The worldlrow eht'))