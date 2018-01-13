const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Input = require('./model');

mongoose.Promise = global.Promise;


const mongooseDbURL = "mongodb://random:password1234@ds257485.mlab.com:57485/react_test_db"

const app = express();

app.use(cors());
app.use(bodyParser());

app.get('/test', (req, res) => {

  return res.send('hello');
  
});

app.get('/newcall', (req, res) => {
  return res.json({
    user: "Thomas",
    color: "Green"
  })
})

app.post('/datahere', (req, res) => {
  console.log(req.body);


  
  Input
  .create({input: req.body}, {new:true})
  .then((result) => {
    
    res.json({message: "this was the input", input:result})
    })

});


  // function startServer() {
  //   return new Promise((resolve, reject) => {
  //     resolve(
  //       app.listen(8004, () => {
  //         console.log('hello, server started on port 8004')
  //       })
  //     )

  //   })  
  // }
  

  
  
  
  // startServer()
  // .then(() => {
  //   mongoose.connection(mongooseDbURL, (err) => {
  //     console.log(err);
  //   })

  //   mongoose.connection.once('open', () => {
  //     console.log('mongoose connected');
  //   })
    
  //   });


    function runServer(databaseUrl= mongooseDbURL, port=8004) {
      return new Promise( (resolve,reject) => {
        mongoose.connect(databaseUrl, (err) => {
          if (err) {
            return reject(err);
          }
          server = app.listen(port, () => {
            console.log(`Your app is listening on port ${port}`);
            
            resolve(server);
          })
          .on('error', err => {
            mongoose.disconnect();
            reject(err);
          });
        });
        mongoose.connection.once('open', () => {
    
          
          console.log('mongoose connected');} );
      });
      
    }

    runServer();