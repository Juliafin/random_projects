var mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/restaurants-app")

var db = mongoose.connection

db.once('open', function() {
  console.log('connected to database!')
})


var userSchema = new mongoose.Schema({
  first_name: String,
  last_name: {
    type: String,
    maxlength: 50
  },
  favoriteFood: String
})


var User = mongoose.model('users', userSchema)




User.findOneAndUpdate({
  first_name: "Violet"
},
{$set: {favoriteFood: "Pizza"}}
)
  .then(function(createdUser) {

    User.find()
      .then(function(users) {
        console.log('Here are the users: ')
        console.log(users)
      })
  })







