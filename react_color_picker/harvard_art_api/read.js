console.log('hello')
var fs = require("fs");

var file = fs.readFileSync("./index.html", "utf-8");

console.log(file)

fs.copyFileSync("./app.js", "./copyofapp.js");

