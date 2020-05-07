const { spawn } = require('child_process');
const fs = require('fs');
const now = require('./currentTime');
const args = process.argv.slice(2);

console.log('arguments', args);


const mkDir = spawn('mkdir', ['-v', ...args]);

const logFolderCreation = (folders, date) => {
  folders.forEach((folder) => {
    fs.writeFile('folders.log', `${folder} - ${date}\n`, {flag : 'a'}, (err, data) => {
      console.log('folder logged', folder);
    })
  });
}


mkDir.stdout.on('data', (data) => {
  console.log('Making folders');
  logFolderCreation(args, now)
})

mkDir.stderr.on('data', (errr) => {
  console.log('err', errr)
  // console.log('Making folders');
  // logFolderCreation(args, now)
})

mkDir.on('close', (code) => {
  console.log('Process ended with code: ', code);
})

