console.log('Welcome to our quiz!')
// console.log($);













/* 
  Arrays
*/


var names = ["Brandon", "Michelle", "Harry", "Krunnal", "Elizabeth"];

console.log(names[0])
console.log(names[3])

// Same as 
// console.log(["Brandon", "Michelle", "Harry", "Krunnal", "Elizabeth"][0])

// var $ = function() {
//   // do jquery
// }
 

var quizData = [
  {
    question: "How old is Arnold Shwarzneggar?",
    a: "sixty nine",
    b: "sixty seven",
    c: "sixty five",
    d: "seventy two",
    correctanswer: "."
  },
  {
    question:"Where was he born?",
    a: "austria",
    b: "australia",
    c: "america",
    d: "africa"
  },
  {
    question: "How old is Sylvester Stallone?",
    a: "sixty nine",
    b: "sixty seven",
    c: "sixty five",
    d: "seventy two"
  },
  {
    question: "Where was he born?",
    a: "austria",
    b: "australia",
    c: "america",
    d: "africa"
  },
  {
    question: "How old is Jean Claude Van Damme?",
    a: "sixty nine",
    b: "sixty seven",
    c: "sixty five",
    d: "seventy two",
  },
  


]

function renderQuiz () {
  // for (/*initialize for loop;  condition to do the next loop ;  something to do after the loop is done      */) {

  // }

  // Loop through the questions
  for (var index = 0; index < quizData.length; index++) {

    // Access each individual question
    console.log(index);
    console.log(quizData[index].question)
    var question = quizData[index].question;
    // console.log(quizData.length)

    // Create an H3 to insert into the html


    // Using string concatentation
    // var questionHTML = "<h3>" + (index + 1) + ". " + question + "</h3>";

    // Using es6 template strings
    
    var questionHtml = `<h3>${index+1}. ${question}</h3>`;

    var answerHTML = ""

    var answerLetters = ["a", "b", "c", "d"]

    for(var i = 0; i < 4; i ++) {
      var letter = answerLetters[i]
      var questionNum = index + 1;
      var answer = quizData[index][letter]
      var radioButtonHTML = `<input type="radio" name="q${questionNum}" value="${letter}" id="q${questionNum}${letter}">${letter}. ${answer}</input>`;
      answerHTML += radioButtonHTML;
    }

    questionHtml += answerHTML;



    console.log(questionHtml)


    // Access the html element of the form and append the html

    $('#quizForm').append(questionHtml);






    
  }

}

renderQuiz();

