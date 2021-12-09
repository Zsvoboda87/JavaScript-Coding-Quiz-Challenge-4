var startButton = document.querySelector("#start-button");
var questionDisplayEl = document.querySelector("#question-display");
var displayScore = document.querySelector("#HighScore");
var displayTimer = document.querySelector("#countdown");
var score = 0;
var currentHighScore = 0;

// Countdown Logic
var timer = 60;
var countdown = function(){
   // console.log(timer);
    timer--; 
    displayTimer.innerHTML = timer;
    if (timer === -1) {
        clearInterval(startCountdown)
    };
};



    
var createQuestion1 = function() {
    questionDisplayEl.removeChild(startButton);
    setInterval(countdown, 1000);

    var question1El = document.createElement("div");
    question1El.className = "questions";
    question1El.textContent = "What does HTML stand for?";
    questionDisplayEl.appendChild(question1El);

    var q1a1El = document.createElement("button");
    q1a1El.className = "questions-button";
    q1a1El.textContent = "HyperText Markup Language";
    questionDisplayEl.appendChild(q1a1El);
    
    var q1a2El = document.createElement("button");
    q1a2El.className = "questions-button";
    q1a2El.textContent = "HyperText Mechanical Language";
    questionDisplayEl.appendChild(q1a2El);

    var q1a3El = document.createElement("button");
    q1a3El.className = "questions-button";
    q1a3El.textContent = "HyperText Monkey Language";
    questionDisplayEl.appendChild(q1a3El);

    var q1a4El = document.createElement("button");
    q1a4El.className = "questions-button";
    q1a4El.textContent = "HeroText Mechanical Language";
    questionDisplayEl.appendChild(q1a4El);

    var nextQuestionCorrect = function () {
        questionDisplayEl.removeChild(question1El);
        questionDisplayEl.removeChild(q1a1El);
        questionDisplayEl.removeChild(q1a2El);
        questionDisplayEl.removeChild(q1a3El);
        questionDisplayEl.removeChild(q1a4El);
        score = score +10;
        createQuestion2();  
    };
    
    var nextQuestionIncorrect = function() {
        questionDisplayEl.removeChild(question1El);
        questionDisplayEl.removeChild(q1a1El);
        questionDisplayEl.removeChild(q1a2El);
        questionDisplayEl.removeChild(q1a3El);
        questionDisplayEl.removeChild(q1a4El);
        console.log("wrong")
        timer = timer -10;
        createQuestion2();
    };

    q1a1El.addEventListener("click", nextQuestionCorrect);
    q1a2El.addEventListener("click", nextQuestionIncorrect);
    q1a3El.addEventListener("click", nextQuestionIncorrect);
    q1a4El.addEventListener("click", nextQuestionIncorrect);
};

var createQuestion2 = function() {
    
    var question2El = document.createElement("div");
    question2El.className = "questions";
    question2El.textContent = "What symbol is used in CSS to reference an ID tag";
    questionDisplayEl.appendChild(question2El);
    
    var q2a1El = document.createElement("button");
    q2a1El.className = "questions-button";
    q2a1El.textContent = ".";
    questionDisplayEl.appendChild(q2a1El);
    
    var q2a2El = document.createElement("button");
    q2a2El.className = "questions-button";
    q2a2El.textContent = "/";
    questionDisplayEl.appendChild(q2a2El);

    var q2a3El = document.createElement("button");
    q2a3El.className = "questions-button";
    q2a3El.textContent = "#";
    questionDisplayEl.appendChild(q2a3El);

    var q2a4El = document.createElement("button");
    q2a4El.className = "questions-button";
    q2a4El.textContent = ">";
    questionDisplayEl.appendChild(q2a4El);

    var nextQuestionCorrect = function () {
        questionDisplayEl.removeChild(question2El);
        questionDisplayEl.removeChild(q2a1El);
        questionDisplayEl.removeChild(q2a2El);
        questionDisplayEl.removeChild(q2a3El);
        questionDisplayEl.removeChild(q2a4El);
        score = score + 10;
        createQuestion3();    
    };
    
    var nextQuestionIncorrect = function() {
        questionDisplayEl.removeChild(question2El);
        questionDisplayEl.removeChild(q2a1El);
        questionDisplayEl.removeChild(q2a2El);
        questionDisplayEl.removeChild(q2a3El);
        questionDisplayEl.removeChild(q2a4El);
        timer = timer -10;
        createQuestion3();
    };

    q2a1El.addEventListener("click", nextQuestionIncorrect);
    q2a2El.addEventListener("click", nextQuestionIncorrect);
    q2a3El.addEventListener("click", nextQuestionCorrect);
    q2a4El.addEventListener("click", nextQuestionIncorrect);
};

var createQuestion3 = function() {

    var question3El = document.createElement("div");
    question3El.className = "questions";
    question3El.textContent = "What does DOM stand for.";
    questionDisplayEl.appendChild(question3El);
    
    var q3a1El = document.createElement("button");
    q3a1El.className = "questions-button";
    q3a1El.textContent = "Div Object Modulation";
    questionDisplayEl.appendChild(q3a1El);
    
    var q3a2El = document.createElement("button");
    q3a2El.className = "questions-button";
    q3a2El.textContent = "Document Object Module";
    questionDisplayEl.appendChild(q3a2El);

    var q3a3El = document.createElement("button");
    q3a3El.className = "questions-button";
    q3a3El.textContent = "Data Object Module";
    questionDisplayEl.appendChild(q3a3El);

    var q3a4El = document.createElement("button");
    q3a4El.className = "questions-button";
    q3a4El.textContent = "Data Object Moderator";
    questionDisplayEl.appendChild(q3a4El);

    var nextQuestionCorrect = function () {
        questionDisplayEl.removeChild(question3El);
        questionDisplayEl.removeChild(q3a1El);
        questionDisplayEl.removeChild(q3a2El);
        questionDisplayEl.removeChild(q3a3El);
        questionDisplayEl.removeChild(q3a4El);
        score = score +10;
        createHighScore();   
    };
    
    var nextQuestionIncorrect = function() {
        questionDisplayEl.removeChild(question3El);
        questionDisplayEl.removeChild(q3a1El);
        questionDisplayEl.removeChild(q3a2El);
        questionDisplayEl.removeChild(q3a3El);
        questionDisplayEl.removeChild(q3a4El);
        timer = timer -10;
        createHighScore();
        createQuestion4();
    };

    q3a1El.addEventListener("click", nextQuestionIncorrect);
    q3a2El.addEventListener("click", nextQuestionCorrect);
    q3a3El.addEventListener("click", nextQuestionIncorrect);
    q3a4El.addEventListener("click", nextQuestionIncorrect);
};

var createQuestion4 = function() {
    console.log(timer);
    console.log(score);
}

var quizerName = function() {
    value = window.prompt("What's Your Name")
    return value;
}
var createHighScore = function() {
    window.alert(quizerName() + " has a High Score of " + score)
    if (score > currentHighScore) {
        localStorage.setItem("currentHighScore", score)
        localStorage.setItem("name", quizerName)
    }
} 






startButton.addEventListener("click", createQuestion1);
