function makeNames(callback) {
  var names = ['Victoria', 'Robert', 'Oscar', 'Samuel', 'Kelly', 'Elizabeth'];
  callback(names);
}


function scramble(arrNames) {
  var scrambledNames = arrNames.map(function(name) {
    var nameCopyArr = name.split("");
    var scrambledName = [];
    while (nameCopyArr.length) {
      var randomIndex = Math.floor(Math.random() * nameCopyArr.length);
      var randomLetter = nameCopyArr.splice(randomIndex, 1);
      scrambledName.push(randomLetter);
    }
    return scrambledName.join("");

  });
  console.log(scrambledNames);
}



makeNames(scramble);



makeNames(function(names) {
  for (let i = 0; i < names.length; i++) {
    var name1 = names[i];
    var name2;
    if (i !== names.length - 1) {
      name2 = names[i + 1];
    } else {
      name2 = names[0];
    }
    console.log(`${name1} likes ${name2}.`);
  }
});


makeNames(function(names) {
  console.log(names.sort());
});
