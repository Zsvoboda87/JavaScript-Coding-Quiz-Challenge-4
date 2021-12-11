var startButton = document.querySelector("#start-button");
var questionDisplayEl = document.querySelector("#question-display");
var displayScore = document.querySelector("#HighScore");
var displayTimer = document.querySelector("#countdown");
var score = 0;
var currentHighScore = localStorage.getItem("currentHighScore");
var highScoreName = localStorage.getItem("highScoreName");
var timer = 60;



var displayHighScore = function () {
    var highScoreEl = document.createElement("div");
    highScoreEl.className = "countdown-highscore";
    highScoreEl.textContent = highScoreName;
    displayScore.appendChild(highScoreEl);

    var highScoreEl2 = document.createElement("div");
    highScoreEl2.className = "countdown-highscore";
    highScoreEl2.textContent = currentHighScore;
    displayScore.appendChild(highScoreEl2);
}
displayHighScore();

var startCountdown = function () {
    var countdown = function () {
        timer--;
        displayTimer.innerHTML = timer;
        if (timer <= 0) {
            clearInterval(startTimer);
            endGame();
        }
    };
    var startTimer = setInterval(countdown, 1000);
};


var createQuestion1 = function () {
    questionDisplayEl.removeChild(startButton);
    // setInterval(myTimer.countDown(), 1000);
     startCountdown();

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
        score = score + 10;
        createQuestion2();
    };

    var nextQuestionIncorrect = function () {
        questionDisplayEl.removeChild(question1El);
        questionDisplayEl.removeChild(q1a1El);
        questionDisplayEl.removeChild(q1a2El);
        questionDisplayEl.removeChild(q1a3El);
        questionDisplayEl.removeChild(q1a4El);
        console.log("wrong")
        timer = timer - 10;
        createQuestion2();
    };

    q1a1El.addEventListener("click", nextQuestionCorrect);
    q1a2El.addEventListener("click", nextQuestionIncorrect);
    q1a3El.addEventListener("click", nextQuestionIncorrect);
    q1a4El.addEventListener("click", nextQuestionIncorrect);
};

var createQuestion2 = function () {

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

    var nextQuestionIncorrect = function () {
        questionDisplayEl.removeChild(question2El);
        questionDisplayEl.removeChild(q2a1El);
        questionDisplayEl.removeChild(q2a2El);
        questionDisplayEl.removeChild(q2a3El);
        questionDisplayEl.removeChild(q2a4El);
        timer = timer - 10;
        createQuestion3();
    };

    q2a1El.addEventListener("click", nextQuestionIncorrect);
    q2a2El.addEventListener("click", nextQuestionIncorrect);
    q2a3El.addEventListener("click", nextQuestionCorrect);
    q2a4El.addEventListener("click", nextQuestionIncorrect);
};

var createQuestion3 = function () {

    var question3El = document.createElement("div");
    question3El.className = "questions";
    question3El.textContent = "What does DOM stand for?";
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
        score = score + 10;
        createQuestion4();
    };

    var nextQuestionIncorrect = function () {
        questionDisplayEl.removeChild(question3El);
        questionDisplayEl.removeChild(q3a1El);
        questionDisplayEl.removeChild(q3a2El);
        questionDisplayEl.removeChild(q3a3El);
        questionDisplayEl.removeChild(q3a4El);
        timer = timer - 10;
        createQuestion4();
    };

    q3a1El.addEventListener("click", nextQuestionIncorrect);
    q3a2El.addEventListener("click", nextQuestionCorrect);
    q3a3El.addEventListener("click", nextQuestionIncorrect);
    q3a4El.addEventListener("click", nextQuestionIncorrect);
};

var createQuestion4 = function () {

    var question4El = document.createElement("div");
    question4El.className = "questions";
    question4El.textContent = "What does JSON stand for";
    questionDisplayEl.appendChild(question4El);

    var q4a1El = document.createElement("button");
    q4a1El.className = "questions-button";
    q4a1El.textContent = "JavaScript Operaters Network";
    questionDisplayEl.appendChild(q4a1El);

    var q4a2El = document.createElement("button");
    q4a2El.className = "questions-button";
    q4a2El.textContent = "JavaScript Object Node";
    questionDisplayEl.appendChild(q4a2El);

    var q4a3El = document.createElement("button");
    q4a3El.className = "questions-button";
    q4a3El.textContent = "JavaScript Operaters Node";
    questionDisplayEl.appendChild(q4a3El);

    var q4a4El = document.createElement("button");
    q4a4El.className = "questions-button";
    q4a4El.textContent = "JavaScript Object Notation";
    questionDisplayEl.appendChild(q4a4El);

    var nextQuestionCorrect = function () {
        questionDisplayEl.removeChild(question4El);
        questionDisplayEl.removeChild(q4a1El);
        questionDisplayEl.removeChild(q4a2El);
        questionDisplayEl.removeChild(q4a3El);
        questionDisplayEl.removeChild(q4a4El);
        score = score + 10;
        createQuestion5();
    };

    var nextQuestionIncorrect = function () {
        questionDisplayEl.removeChild(question4El);
        questionDisplayEl.removeChild(q4a1El);
        questionDisplayEl.removeChild(q4a2El);
        questionDisplayEl.removeChild(q4a3El);
        questionDisplayEl.removeChild(q4a4El);
        timer = timer - 10;
        createQuestion5();
    };

    q4a1El.addEventListener("click", nextQuestionIncorrect);
    q4a2El.addEventListener("click", nextQuestionIncorrect);
    q4a3El.addEventListener("click", nextQuestionIncorrect);
    q4a4El.addEventListener("click", nextQuestionCorrect);
};

var createQuestion5 = function () {

    var question5El = document.createElement("div");
    question5El.className = "questions";
    question5El.textContent = "What is text data in JavaScript";
    questionDisplayEl.appendChild(question5El);

    var q5a1El = document.createElement("button");
    q5a1El.className = "questions-button";
    q5a1El.textContent = "Boolean";
    questionDisplayEl.appendChild(q5a1El);

    var q5a2El = document.createElement("button");
    q5a2El.className = "questions-button";
    q5a2El.textContent = "Interger";
    questionDisplayEl.appendChild(q5a2El);

    var q5a3El = document.createElement("button");
    q5a3El.className = "questions-button";
    q5a3El.textContent = "String";
    questionDisplayEl.appendChild(q5a3El);

    var q5a4El = document.createElement("button");
    q5a4El.className = "questions-button";
    q5a4El.textContent = "None of the Above";
    questionDisplayEl.appendChild(q5a4El);

    var nextQuestionCorrect = function () {
        questionDisplayEl.removeChild(question5El);
        questionDisplayEl.removeChild(q5a1El);
        questionDisplayEl.removeChild(q5a2El);
        questionDisplayEl.removeChild(q5a3El);
        questionDisplayEl.removeChild(q5a4El);
        score = score + 10;
        timer = 0;
    };

    var nextQuestionIncorrect = function () {
        questionDisplayEl.removeChild(question5El);
        questionDisplayEl.removeChild(q5a1El);
        questionDisplayEl.removeChild(q5a2El);
        questionDisplayEl.removeChild(q5a3El);
        questionDisplayEl.removeChild(q5a4El);
        timer = 0;
    };

    q5a1El.addEventListener("click", nextQuestionIncorrect);
    q5a2El.addEventListener("click", nextQuestionIncorrect);
    q5a3El.addEventListener("click", nextQuestionCorrect);
    q5a4El.addEventListener("click", nextQuestionIncorrect);
};



var quizerName = function () {
    questionDisplayEl.innerHTML = empty;
    value = window.prompt("Enter Your Initials")
    JSON.stringify(value);
    return value;
}
var createHighScore = function () {
    playerInitials = quizerName()
    window.alert(playerInitials + " has a score of " + score)
    if (score > currentHighScore) {
    localStorage.setItem("currentHighScore", score)
    localStorage.setItem("highScoreName", playerInitials)
    } else {
        localStorage.setItem("currentScore", score)
        localStorage.setItem("currentName", playerInitials)
    }
}

var empty = [];
var endGame = function () {
    window.alert("GameOver");
    questionDisplayEl.innerHTML = empty;
    displayTimer.innerHTML = 0;
    createHighScore();
}




startButton.addEventListener("click", createQuestion1);
