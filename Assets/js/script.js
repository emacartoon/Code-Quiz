var $startBtn = document.querySelector("#start");
var $start = document.querySelector("#start-prompt");
var $timer = document.querySelector("#timer");
var time = 100;
// I click start btn
// a timer starts & I get a q

var questions = [
    {
        text: "Is the sky blue?",
        answers: ["True", "False", "No way to tell, it's just the middle-most light frequency"],
        correctAnswer: ["No way to tell, it's just the middle-most light frequency"],
    }
];

//Listen for start btn click
$startBtn.addEventListener("click", function (e){
    //start a timer
    $timer.textContent = time;
    setInterval(function () {
        time--;
        $timer.textContent = time;
    }, 1000);
    // hide start prompt
    $start.style.display = "none";
    //display question
    $questionText.textContent = questions[0].text;
    // render answers

    questions[0].answers.forEach(function (item) {
        var $answerBtn = document.createElement("button");
        $answerBtn.textContent = item;
        $answerBtn.addEventListener("click", handleAnswerClick);
        $answers.append($answerBtn);
    });
});
