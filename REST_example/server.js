const express = require('express');

const app = express();
const PORT = process.env.PORT || 9002;

// express middleware structure: function (req, res, next) {}

app.use(express.json());

// Middleware example
// app.use(function(req, res, next) {
//   req.body.message = `${req.body.message} Victor!`
//   next();
// })

const phoneBook = [];



// GET - Exposes resources (images, files, text, html, css, javascript, binary data...) to the client

app.get('/getDirectory', (request, response) => {
  console.log(request.body);

  response.json({
    message: 'Here is the phonebook!',
    phoneBook: phoneBook
  })
});



// POST - Results in the creation of a resource

app.post('/createEntry', (req, res) => {
  const name = req.body.name;
  const phoneNumber = req.body.phoneNumber;

  const entryExists = phoneBook.find(function(entry) {
    return entry.name === name;
  })

  if (entryExists) {
    return res.status(400).json({
      message: "The entry already exists"
    })
  }

  phoneBook.push({
    name, phoneNumber
  })

  return res.json({
    message: "Entry added"
  })

})


// PUT - Changes/modifies an existing resources
app.put('/modifyEntry', (req, res) => {

  const { existingName, newName, newPhoneNumber } = req.body;

  const entryIndex = phoneBook.findIndex(function(entry) {
    return entry.name === existingName;
  })

  if (entryIndex === -1) {
    return res.status(400).json({
      message: 'Entry does not exist'
    })
  }

  phoneBook[entryIndex] = {
    name: newName,
    phoneNumber: newPhoneNumber
  }

  res.json({
    message: "Entry has been modifed"
  })

});



// DELETE - Delete a resource

app.delete('/deleteEntry', (req, res) => {

  const { name } = req.body;

  const entryIndex = phoneBook.findIndex(function(entry) {
    return entry.name === name;
  })

  if (entryIndex === -1) {
    return res.status(400).json({
      message: 'Entry does not exist'
    })
  }

  phoneBook.splice(entryIndex, 1);

  return res.json({
    message: 'Entry has been deleted'
  })

})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
