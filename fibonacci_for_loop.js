var sum= 0, lastTerm = 1; secondLast = 0
for(let i = 0; i < 15; i++) {
  sum = lastTerm + secondLast;
  lastTerm = sum;
  secondLast = lastTerm;
}

console.log(sum)