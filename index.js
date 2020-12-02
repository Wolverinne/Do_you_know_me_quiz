console.log("Let's see how much do you know about me!!.")
var readlineSync = require("readline-sync");

var score = 0;


var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + " to HOW WELL DO YOU KNOW PARTH QUIZ");





function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("*************")
}

// array of objects
var questions = [{
  question: "Where do i live?",
  answer: "rewari"
}, {
  question: "Where do i study?",
  answer: "sonipat"
},
{
  question: "My Favorite superhero ",
  answer: "Ironman"
}, {
  question: "my favourite food?",
  answer: "rajma chawal"
},
{
  question: "my favourite music artist? ",
  answer: "eminem"
},];


for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);
var highScores = [
  {
    name: "Parth",
    score: 5,
  },
  {
    name: "Sarthak",
    score: 4,
  },

  {
    name: "Palak",
    score: 3,
  },
  {
    name: userName,
    score: score,
  },

]

console.log("Check out the scores",highScores)