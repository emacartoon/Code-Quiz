var $start = document.querySelector("#start-prompt");
var $startBtn = document.querySelector("#start-prompt button");
var $questionPrompt = document.querySelector("#question-container");
var $questionText = document.querySelector("#question-text");
var $answers = document.querySelector("#answers");
var $timer = document.querySelector("#timer");
var time = 100;
var highscores = [hs1, hs2, hs3, hs4, hs5];
var $scores = document.querySelector("#highscores");
var $hscore = document.querySelector("#hscore");
var $explanation = document.querySelector("#explanation");
var $gamestatus = document.querySelector("#game-status");
var $luck = document.querySelector("#luck");

// Set 5 questions and 5 answer arrays. each with 1 correct answer
var questions = [
  {
    text: "Which company created JavaScript?",
    answers: ["IBM", "Macintosh", "Netscape", "Google"],
    correctAnswer: ["Netscape"]
  },
  {
    text: "Are Java and JavaScript the same language?",
    answers: ["Yes", "No"],
    correctAnswer: ["No"]
  },
  {
    text: "What does a concatenate function do?",
    answers: [
      "Adds multiple strings together",
      "Display one string after another",
      "Convince cats to go eat",
    ],
    correctAnswer: ["Display one string after another"]
  },
  {
    text: "Where does JavaScript go in best practices?",
    answers: [
      "In the <head>",
      "In <meta> tags",
      "In the middle of <body>",
      "Before </body>",
      "After </html>",
    ],
    correctAnswer: ["In the <head>"]
  },
  {
    text: "Where do you call down an external JavaScript file?",
    answers: [
      "In the <head>",
      "In <meta> tags",
      "In the middle of <body>",
      "Before </body>",
      "After </html>",
    ],
    correctAnswer: ["Before </body>"]
  },
];

// I click start btn
// a timer starts & I get q + a

//Listen for start btn click
$startBtn.addEventListener("click", function (e) {
  //start a timer
  $timer.textContent = time;
  setInterval(function () {
    time--;
    $timer.textContent = time;
  }, 1000);
  // hide start prompt
  $start.style.display = "none";
  $explanation.style.display = "none";
  $gamestatus.style.display = "none";
  $scores.style.display = "none";
  $questionPrompt.style.display = "all";
  
  //display question
  $questionText.textContent = questions[0].text;
  // render answers
  questions[0].answers.forEach(function (item) {
    // create button
    var $btn = document.createElement("button");
    // set btn text
    $btn.textContent = item;
    // append to options div
    $answers.append($btn);

});

// // if answer correct, q[i+1] and a[i+1]
// if (questions[0].correctAnswer.textContent === onclick.answersbtn){
//     find parent replace [n+1]
// } 
var $answersbtn = 
$answersbtn.addEventListener("click", handleAnswersClick);
function handleAnswersClick() {
    var answord = document.getElementById($answersbtn).value;

    console.log(answord);
}

  // if answer incorrect, subtract time

  if (time === 0) {
    //     // Stops execution of action at set interval
    clearInterval(timeInterval);
    //     // Calls function to display text in #winlose
    displayMessage();
}

//      Calculate score
// Check ig highscore - if yes, get initals
// Save score + initials to localStorage

// If score > hs1, hs2, hs3, hs4, hs5, replace value in localstorage array
// Move hs_ to next rank based on which is replaced.
// localStorage.setItem("hs1", JSON.stringify(hs1));
// renderLastRegistered();
// toggle #highscores
});
// Button $hscore displays #highscores
