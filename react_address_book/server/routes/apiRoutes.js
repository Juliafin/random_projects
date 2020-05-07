const AddressBook = require('./../models/addressbook');
const {Router} = require('express');
const bodyParser = require('body-parser');

const apiRouter = Router();

apiRouter.use(bodyParser.json());
apiRouter.use(bodyParser.urlencoded({extended: false}));
apiRouter.get('/addressEntries', (req, res) => {

  AddressBook
    .find()
    .then((entries) => {
      res.json({addresses: entries});
    });
});


apiRouter.post('/addressEntries', (req, res) => {

  AddressBook
    .create(req.body)
    .then((result) => {
      res.json({message: "Address entry has been added", result});
    });
});

apiRouter.get('/test', (req, res) => {
  res.json({message: "successful"})
});


module.exports = apiRouter;