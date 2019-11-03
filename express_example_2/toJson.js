const fs = require('fs');

const corrections = fs.readFileSync('./corrections.txt', 'utf-8');
console.log(corrections)

const correctionLines = corrections.split('\n');
const mappedJson = [];
let appointment = {};
const lineRegex = new RegExp(/^(\d\.\s+)(.*:\s)(.*)$/)
for(let i = 0; i < correctionLines.length; i++) {
  const line = correctionLines[i].trim();
  if (!line) {
    continue;
  }
  const lineMatches = line.match(lineRegex);
  // console.log(line, i);
  // console.log(lineMatches);
  switch (line[0]) {
    case '1':
      appointment.date = lineMatches[3].trim();
    break;
    case '2':
      appointment['Time in'] = lineMatches[3].trim();
    break;
    case '3':
      appointment['Time out'] = lineMatches[3].trim();
    break;
    case '4':
      appointment.Classcode = lineMatches[3].trim();
    break;
    case '5':
      appointment['Student Name'] = lineMatches[3].trim();
    break;
    case '6':
      appointment['Back-to-Back'] = lineMatches[3].trim();
    break;
    case '7':
      appointment['Show / No-Show'] = lineMatches[3].trim();
      mappedJson.push(appointment);
      appointment = {};
      
    break;
  }
}
console.log(mappedJson);

fs.writeFileSync('./appointment.json', JSON.stringify(mappedJson, null, 2));
// const mappedJson = corrections.split('\n').reduce((accum, line, index) => {
//   line = line.trim();
//   console.log(line);
//   const lineMatches = line.match(lineRegex);
//   // console.log(lineMatches)
//   // if (line) {
//   //   switch()
//   // } 
//   return lineMatches
// }, []);