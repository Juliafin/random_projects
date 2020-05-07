var fs = require("fs");

var csvPath = "./SampleCSVFile_119kb.csv";


fs.exists(csvPath, function(fileExists) {
  console.log("Does the file exist? ")
  console.log(fileExists);

  if (fileExists) {
    var file = fs.readFileSync(csvPath, 'utf-8');
    var lines = file.split("\n");
    // console.log(lines);
    for (var line of lines) {
      line = line.split(",");
      var lineNumber = line[0];
      var product = line[1];
      var productInfo = `${lineNumber}: ${product} \n`;
      console.log(productInfo);
      // console.log(lineNumber + ": " + product)
      fs.writeFileSync("./products.txt", productInfo, {flag: "a"});
      
    }

  }

});
