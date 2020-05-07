const {exec} = require('child_process');

exec('ls', (error, stdout, stderr) => {
  console.log(`this is the output!!! ${stdout}`);
})


