// var countdown = require('Assets/visual-countdown-timer/script.js');


//Set up an array of objects with each object having a question, four possible answers, and one correct answer.  Identify the correct answer using index.
var QandA = [
    {
        question: "What year was George R.R. Martin's book 'A Game of Thrones' published?",
        answers: ["1989", "2003", "1996", "2005"],
        rightAnswer: 2
    }, {
        question: "What was the name of Jon Snow's direwolf?",
        answers: ["Lady", "Ghost", "Grey Wind", "Wolf"],
        rightAnswer: 1
    }, {
        question: "At whose castle did the 'Red Wedding' take place?",
        answers: ["Winterfell", "Dragonstone", "Casterly Rock", "Riverrun"],
        rightAnswer: 3
    }, {
        question: "Which dragon did Daenerys ride most frequently?",
        answers: ["Drogon", "Rhaegal", "Viserion", "Aegon"],
        rightAnswer: 0
    }, {
        question: "At the beginning of the series, how many children do Ned and Catelyn Stark have?",
        answers: ["Four", "Five", "Three", "Six"],
        rightAnswer: 1
    }
];

//identifier for the instance of set internal call;
var sid;

//Amount of time left to complete the quiz.
var timeLeft = 75000; //start at 75 seconds or 75000 milliseconds

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

function runClock() {
    $('#counter').text(timeLeft);
    if (timeLeft === 0) {
        stopTimer(sid);
    } else {
        var newTime = --timeLeft;
        console.log(timeLeft);
        $('#counter').text(newTime);
        return timeLeft
    }
};

function startTimer() {
    timeLeft = 75;
    setInterval(runClock, 1000)

    //start the timer by using set interval()
    // setInterval(() => runClock(), 75000);
    // countdown('countdownID', 0, 0, 1, 75);
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
}

function stoptimer() {
    console.log('Timer ran out!');
    clearInterval(sid);
    $config.endtime_message ='Timer expired!';
}

function checkAnswer(qao, chosen) {
    if (qao.rightAnswer === chosen) {
        //TODO: awward points
        score = score + award
    } else {
        penaltyDeduct();
        // TODO: deduct time from timer
    }
}

function penaltyDeduct () {
    timeLeft = timeLeft - penalty
    return timeLeft
    console.log('Sorry, a penalty was deducted from your time.')
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
    // $(welcomeDiv).append(`<button id="rollQuestions" class="startBtnDiv btn btn-warning">Start quiz</button>`);
}

function setup () {

    $("answerListItem").on('click', function () {
        var chosen = this.QNAObject.answers[i];
        checkAnswer(QNAObject.rightAnswer, chosen);
    });

    $("#startBtn").on("click", function startQuiz () {
        showOpeningMessage();
        $('welcomeDiv').addClass('hidden');
        $('hero-text').addClass('hidden')
        $('#startBtn').addClass('hidden');
        $('#rollQuestions').removeClass('hidden');
    });

    $("#rollQuestions").on("click", function () {
        console.log('Rolling quiz. Time left = ' + timeLeft);
        startTimer();
        showQuestionAndAnswer(nextQuestion);
    })
}

setup();