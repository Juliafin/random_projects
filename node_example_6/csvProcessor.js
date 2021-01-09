const fs  = require('fs');

// Reading a directory
// const directories = fs.readdirSync('./');

// console.log(directories);

// Writing to a file
// fs.writeFileSync('./output.txt', 'This is the output!');


fs.readFile('./sample2.csv', 'utf-8', function(error, fileData) {
  if (error) {
    console.log('There was an error reading the file');
  }

  // console.log(fileData);

  const arrayOfBaseballPlayers = fileData.split("\n");

  // console.log(arrayOfBaseballPlayers);

  const playerList = arrayOfBaseballPlayers.map(function(player) {
    return player.split(",")
  })

  // console.table(playerList);

  let heightTotal = 0;

  playerList.forEach((player, index) => {

    if (index === 0 || index === playerList.length - 1) {
      return;
    }
    const name = player[0].replace('"', "")
    const playerHeight = parseInt(player[3].trim());
    heightTotal += playerHeight;
    // console.log(`Name : ${name} Height: ${playerHeight} inches`);
  })

  const numberOfPlayers = playerList.length - 2;

  const averageHeight = heightTotal / numberOfPlayers;
  console.log(`The average height is: ${averageHeight} `)






// Organize player data into a json and write to file system

/*
{
  catcher: [{
    name: "",
    Team:,
    height:
    weight:,
    age
  }, {}]
}
*/

const playerData = playerList.reduce((accumulator, player, index) => {
  if (index === 0 || index === playerList.length - 1) {
    return accumulator;
  }
  const name = player[0].replace(/"/g, "");
  const team = player[1].trim("").replace(/"/g, "");
  const position = player[2].trim().replace(/\\/g).replace(/"/g, "");
  const height = parseFloat(player[3].trim(""));
  const weight = parseFloat(player[4].trim(""));
  const age = parseFloat(player[5].trim(""));
  
  if (!accumulator[position]) {
    accumulator[position] = [];
  }

  accumulator[position].push({
    name,
    team,
    height,
    weight,
    age
  })

  return accumulator;

}, {})


console.log(playerData);


fs.writeFileSync("./playerData.json", JSON.stringify(playerData, null, 2));


})


