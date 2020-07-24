
//Set up an array of objects with each object having a question, four possible answers, and one correct answer.  Identify the correct answer using index.
var QandA = [
    {
        question: "For what sport was Abraham Lincoln enshrined in a Sports Hall of Fame for having a stellar record of just one loss?",
        answers: ["baseball", ",football", "wrestling", "soccer"],
        rightAnswer: 2
    }, {
        question: "Which NBA basketball legend appeared in a movie with Bruce Lee?",
        answers: ["Wilt Chamberlain", "Kareem Abdul-Jabbar", "Julius Erving", "Michael Jordan"],
        rightAnswer: 1
    }, {
        question: "Which of America's Founding Fathers had a house which was discovered to have about one thousand two hundred bone pieces from about ten human skeletons?",
        answers: ["John Adams", "George Washington", "Alexander Hamilton", "Benjamin Franklin"],
        rightAnswer: 3
    }, {
        question: "What city was the first capital of the United States?",
        answers: ["New York NY", "Plymouth MA", "Jamestown VA", "Washington DC"],
        rightAnswer: 0
    }, {
        question: "Who was first U.S. president to be impeached?",
        answers: ["Bill Clinton", "Andrew Johnson", "Richard Nixon", "Donald Trump"],
        rightAnswer: 1
    }
];

//identifier for the instance of set internal call;
var sid;

//Amount of time left to complete the quiz.
var timeLeft = 75; //start at 75 seconds or 75000 milliseconds

//index of question to retrieve, default to 0.
var nextQuestion = 0;

//Number of points to award for every correct answer.
var award = 500;

//Number of seconds to deduct for every wrong answer.
var penalty = 15;

//Bucket for score, starts at 0.
var score = 0;

//The key to use for storing the high scores in and retrieving the high scores from local storage.
const LS_KEY = "High Scores";

//A collection of high scores
var highScoreArray = [];

//Create functions for three major tasks.

    //Get a reference to the container where this info will be displayed.
    //Reset timeLeft if its not at the default value. 

function showQuestionAndAnswer(nextQuestion) {
    var QNAObject, div, ul, li, button;

    for (var i = 0; i < QandA.length; i++) {
        QNAObject = QandA[nextQuestion];
        QNAObject.question = QandA[nextQuestion].question;
        QNAObject.answers = QandA[nextQuestion].answers;
        console.log(QNAObject);

        // Create Question div
        div = $('<div></div>');
        div.addClass('question');
        div.text(QNAObject.question);
        console.log('Question: ' + QNAObject.question);
        console.log('Answer: ' + QNAObject.answers);
        $(questionsContainer).append(div);

        // Create Answer Div
        // div = $('<div></div>'); 
        // div.addClass('answers'); 
        // ol = $('<ol></ol>');

        for (var i = 0; i < QNAObject.answers.length; i++) {
            var answerOption = QNAObject.answers[i];
            $(answerList).append(`<div class="col-2"><li><button class="btn btn-warning list-group-item" id="answerListItem">${answerOption}</button></li></div>`);
            console.log(QNAObject.answers[i])
        }
    }

    nextQuestion++;
    console.log(nextQuestion);
}

function callBackFunc() {
    if (timeLeft === 0) {
        stopTimer(sid);
    } else {
        --timeLeft;
    }
};

function startTimer() {
    //start the timer by using set interval()
    countdown('countdownID', 0, 0, 0, 75);
    // // Countdown Loading Bar
    // $config.loadingBars_width = 200;
    // $config.loadingBars_height = 20;
    // $config.loadingBars_border_color ='blue';
    // $config.loadingBars_color = 'darkblue';
    // $config.loadingBars_background_color = 'lightblue';

    // // Countdown Timer
    // $config.timer_color ='blue';
    // $config.timer_font_weight = 700;
    // $config.timer_font ='Verdana';
    // $config.timer_font_size = 12;
    // $config.endtime_message ='Timer expired!';
}


function stoptimer() {
    clearInterval(sid);
}

function checkAnswer(qao, chosen) {
    if (qao.rightAnswer === chosen) {
        //TODO: awward points
        score = score + award
    } else {
        // TODO: deduct time from timer
        timeLeft = timeLeft - penalty
    }
}

function viewHighScores() {
    //Get a reference to the container where this info will be displayed.
    //Retrieve saved high scores from local storage, if any.
    //Iterate through list of high scores and create HTML elements for name and score.
    //Set this list as the contents of the referenced container.
    //Hide all sibling containers and make this container visible.
    //Return values retrieved from local storage by key.
    // function getValuesFromLS(key) {
    // }

    //store values in local storage under a key.
    function saveToLS() {
        localStorage.setItem(LS_KEY, highScoreArray);
        //convert to string
        JSON.stringify(values)
        localStorage.getItem(LS_KEY, highScoreArray);
        //convert from string
        JSON.parse(values)
    }
}

function showOpeningMessage () {
    $(welcomeDiv).text(
    "Following are five questions related to the books and blockbuster HBO series. Once you click start, you'll have 75 seconds to choose from several answers. Easy right? Except, if you answer incorrectly, you'll get a time penalty and 15 seconds will be taken off the clock. Ready? Good luck!")
    $(welcomeDiv).append(`<button id="rollQuestions" class="btn btn-warning">Start quiz</button>`);
}


function setup () {
    $("answerListItem").on('click', function () {
    checkAnswer(QNAObject, i);
    });

    $("#startBtn").on("click", function startQuiz () {
        showOpeningMessage();
        $('welcomeDiv').addClass('hidden');
        $('hero-text').addClass('hidden');
    });

    $("#rollQuestions").on("click", function rollQueiz () {
        startTimer();
        showQuestionAndAnswer(nextQuestion);
    })
}

setup();