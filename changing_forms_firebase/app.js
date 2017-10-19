
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDBBxqm2JxbfTqx8cWZUggr1v6lWqVKL3Y",
    authDomain: "change-form.firebaseapp.com",
    databaseURL: "https://change-form.firebaseio.com",
    projectId: "change-form",
    storageBucket: "",
    messagingSenderId: "164154430970"
  };


  firebase.initializeApp(config);

  console.log(firebase);
  var db = firebase.database();

  var textColor = "Black";
  var backgroundColor = "White";

  db.ref().on('value', (snapshot) => {
    console.log(snapshot.val);
    var string = `My name is ${snapshot.val().name || "N/A"} and my favorite number is ${snapshot.val().number  || "N/A"}`;
    $('.display').text(string);
    $('.display').css('color', snapshot.val().textColor || textColor);
    $('body').css('background-color', snapshot.val().backgroundColor || backgroundColor);


  },
  (err) => {console.log(err);}
);


$('input').on('keyup change',(event) => {
  console.log(event.target.value, 'etv');
  console.log('name', $('#name').val());
  console.log('number', $('#number').val());
  db.ref().set({
    name: $('#name').val(),
    number: $('#number').val(),
    textColor: $('#text_color').val() || textColor,
    backgroundColor: $('#background_color').val() || backgroundColor
  });

});