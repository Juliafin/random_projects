const { Note } = require('../models');

module.exports = {
  getNotes: (req, res) => {
    Note.find()
    .then((noteResponse) => {
      res.json({
        notes: noteResponse
      })
    })
    .catch((error) => {
      res.status(500).json({message: 'could not get notes'})
    })
  },

  createNote:  (req, res) => {
    Note.create(req.body)
      .then((noteResponse) => {
  
        res.json({message: 'Note was created'})
  
      })
      .catch((error) => {
        res.status(500).json({
          message: 'There was an error creating the note'
        })
      })
  
  }
}