const express = require('express');
const { getNotes, createNote } = require('../controllers/noteController');


const apiRouter = express.Router();

// Same as below 
// apiRouter.get('/notes', getNotes);
// apiRouter.post('/notes', createNote);

apiRouter
  .route('/notes')
  .get(getNotes)
  .post(createNote)


apiRouter.get('/test', (req, res) => {
  res.json({
    message: "hello world!"
  })
});



module.exports = apiRouter;