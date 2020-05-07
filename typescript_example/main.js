function sum(num, num2) {
    if (num === void 0) { num = 5; }
    if (num2 === void 0) { num2 = 10; }
    return num + num2;
}
sum(2, 2);
sum();
function returnArr(arr) {
    if (arr === void 0) { arr = ["hey", "how are you"]; }
    console.log(arr);
    return arr;
}
returnArr();
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));

console.log(process.env.HELLO)
console.log('how are you')
var arr = []
var y = 0
for(var i = 1 ; i <= 10; i++) {
  console.log({[i]:i})
  arr.push({[i]:i})
  if (i ===10 && y === 10) {
    break
  } else if(i === 10) {
    y++
    i = 0
  }
}
console.log(arr)

