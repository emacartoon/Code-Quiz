var $start = document.querySelector("#start-prompt");
var $startBtn = document.querySelector("#start-prompt button");
var $questionPrompt = document.querySelector("#question-container");
var $questionText = document.querySelector("#question-text");
var $answers = document.querySelector("#answers");
var $timer = document.querySelector("#timer");
var time = 100;
var recentscores = [hs5, hs4, hs3, hs2, hs1];
var $hs1 = document.querySelector("#hs1");
var $hs2 = document.querySelector("#hs2");
var $hs3 = document.querySelector("#hs3");
var $hs4 = document.querySelector("#hs4");
var $hs5 = document.querySelector("#hs5");
var $scores = document.querySelector("#recentscores");
var $hscore = document.querySelector("#hscore");
var $explanation = document.querySelector("#explanation");
var $gamestatus = document.querySelector("#game-status");
var $winLose = document.querySelector("#winlose");
var $luck = document.querySelector("#luck");
var questionIndex = 0;
var timeInterval
var score = 0;

// Set 5 questions and 5 answer arrays. each with 1 correct answer
var questions = [
  {
    text: "Which company created JavaScript?",
    answers: ["IBM", "Macintosh", "Netscape", "Google"],
    correctAnswer: "Netscape",
  },
  {
    text: "Are Java and JavaScript the same language?",
    answers: ["Yes", "No"],
    correctAnswer: "No",
  },
  {
    text: "What does a concatenate function do?",
    answers: [
      "Adds multiple strings together",
      "Display one string after another",
      "Convince cats to go eat",
    ],
    correctAnswer: "Display one string after another",
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
    correctAnswer: "In the <head>",
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
    correctAnswer: "Before </body>",
},
];

$scores.style.display = "none";
$gamestatus.style.display = "none";

// I click start btn
// a timer starts & I get q + a
//Listen for start btn click
$startBtn.addEventListener("click", function startGame() {
    //start a timer
    $timer.textContent = time;
    timeInterval = setInterval(function () {
        time--;
        $timer.textContent = time;
    }, 1000);
    // hide start prompt
    $startBtn.style.display = "none";
    $explanation.style.display = "none";
    $questionPrompt.style.display = "";

    function renderQuestion() {
        $answers.innerHTML = "";
        //display question
        $questionText.textContent = questions[questionIndex].text;
    // render answers
    questions[questionIndex].answers.forEach(function (item) {
        // create button
      var btn = document.createElement("button", "answer");
      // set btn text
      btn.textContent = item;
      // set style to btns
      btn.setAttribute("id", "answer")
      // append to options div
      $answers.append(btn);
    });
}


// Shows the Question
renderQuestion();

$answers.addEventListener("click", function (e) {
    // if target is not a button stop early;
    if (!e.target.matches("button")) return;
    
    // check correctness
    var answ = e.target.textContent;
    if (answ === questions[questionIndex].correctAnswer) {
      console.log("Correct");
    } else {
        // if answer incorrect, subtract time
      console.log("Incorrect");
      time = time - 10;
    }
    questionIndex++;

    if (questionIndex === questions.length) {
      // End Game
      endGame();

    } else {
      renderQuestion();
    }
    console.log(answ);
  });


  if (time === 0) {
    // Stops execution of action at set interval
    endGame();
}
});


function endGame() {
    // Hide quiz
    $questionText.innerHTML = "";
    $answers.innerHTML = "";
    // Display results
    $gamestatus.style.display = "";
    $scores.style.display = "";
    
    if (time === 0) {
        // Calls function to display text in #winlose
        $winLose.innerHTML = "You Lost! :("; 
        $luck.style.display = "";
        
    } else {
        $winLose.innerHTML = "You Won!";
        $luck.style.display = "none";
    };
    // Play again button shows
    $startBtn.innerHTML = "Play Again";
    $startBtn.style.display = "";
    $startBtn.addEventListener("click", function(e) {
        document.location.href = "";
    });
    // Generated input line for Initials
    var userInput = document.createElement("input");
    userInput.setAttribute("type", "text");
    var initialBtn = document.createElement("input");
    initialBtn.setAttribute("id", "initialSteal");
    userInput.setAttribute("id", "input");
    // Generated the submit button
    initialBtn.setAttribute("type", "button");
    initialBtn.value = "Submit";
    // Hide timer
    $timer.style.display = "none";
    // Calculate score
    score = time;
    clearInterval(timeInterval);
    localStorage.setItem("lastScore", score);
    // Display form
    $questionText.innerHTML = `Your score: ${score}`;
    $answers.innerHTML = `Please enter your initials: `;
    // Input for Initials
    $answers.append(userInput);
    // Generate Submit button
    $answers.append(initialBtn);
    
}

document.addEventListener("click", function (e) {
    if (e.target && e.target.id == "initialSteal"){
        var scorer = document.getElementById("input");
        // Storing the score and Initials
        localStorage.setItem("scoreName", scorer.value);
        // Save score + initials to localStorage
    }
    
    for (let i = 0; i < recentscores.length; i++) {
        const element = recentscores[i++];
        
    };

});








// Pulling score name from localStorage
var scoreName = window.localStorage.getItem("scoreName");
var lastScore = window.localStorage.getItem("lastScore");
console.log(scoreName);
console.log(lastScore);
var tempting = scoreName.concat(" " + lastScore);
// scorelist[i] -> scorelist[i++]
recentscores.splice(4, 1, tempting);
tempting = "";

// toggle #recentscores


// Button $hscore displays #recentscores
$hscore.addEventListener("click", function(e) {
    if ($scores.style.display = "none"){
        $scores.style.display = "";
    } else {
        $scores.style.display = "none";
    };
});

$hs1.innerHTML = recentscores[4];
$hs2.innerHTML = recentscores[3];
$hs3.innerHTML = recentscores[2];
$hs4.innerHTML = recentscores[1];
$hs5.innerHTML = recentscores[0];

// localStorage.setItem("hs1", JSON.stringify(hs1)); ??
// renderLastRegistered();