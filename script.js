
//Set up an array of objects with each object having a question, four possible answers, and one correct answer.  Identify the correct answer using index.

var QandA = [
    {
        question: "For what sport was Abraham Lincoln enshrined in a Sports Hall of Fame for having a stellar record of just one loss?",
        answers: ["baseball", ",football", "wrestling", "soccer"],
        rightAnswer: 3
    },{
        question: "Which NBA basketball legend appeared in a movie with Bruce Lee?",
        answers: ["Wilt Chamberlain", "Kareem Abdul-Jabbar", "Julius Erving", "Michael Jordan"],
        rightAnswer: 2
    },{
        question: "Which of America's Founding Fathers had a house which was discovered to have about one thousand two hundred bone pieces from about ten human skeletons?",
        answers: ["John Adams", "George Washington", "Alexander Hamilton", "Benjamin Franklin"],
        rightAnswer: 4
    },{
        question: "What city was the first capital of the United States?",
        answers: ["New York NY", "Plymouth MA", "Jamestown VA", "Washington DC"],
        rightAnswer: 1
    },{
        question: "Who was first U.S. president to be impeached?",
        answers: ["Bill Clinton", "Andrew Johnson", "Richard Nixon", "Donald Trump"],
        rightAnswer: 2
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

    function showWelcomeMessage {
//Connect the quiz section on the index.html with a variable pointing to a div.
//Set a reference to a container with Welcome message and set the contents to the message.
        var questionDiv = document.querySelector(".questionDiv");
        console.log("questionsContainer: " + questionsContainer);
    };

    function startQuiz {
    //Get a reference to the container where this info will be displayed.
    //Reset timeLeft if its not at the default value. 

        $("#startBtn").on("click", function() {
            timeLeft = 75000;
            startTimer();
            showQuestion();
        });
    }

    function showQuestionAndAnswer(index) {
        var QNAObject, div, ul, li, button;
        QNAObject = QandA[index];

        // Create Question div
        div = $('<div></div>');
        div.addClass('question');
        div.text(QNAObject.question);
        questionsContainer.append(div);

        // Create Answer Div
        div = $('<div></div>'); // <div></div>
        div.addClass('asnwers'); // <div class="answers"></div>
        ul = $('<ul></ul>');

        for (var i = 0; i < QNAObject.answers.length; i++) {
          li = $('<li></li>');
          button = $('<button></button>');
          button.text(QNAObject.answer[i]);
          button.on('click', function() {
            checkAnswer(QNAObject, i);
          })
          li.append(button);
          ul.append(li);
        }
        
        div.append(ul);
        questionsContainer.append(div); // We are home
        nextQuestion++; // 1
      }

      showQuestionAndAnswer(nextQuestion);

    function callBackFunc() {
        if (timeLeft === 0) {
            stopTimer(sid);
        } else {
            --timeLeft;
        }
    };

    function startTimer(callBackFunc, interval) {
        //start the timer by using set interval()
        sid = setInterval(callBackFunc, interval);
    }

    function stoptimer() {
        clearInterval(sid);
    }

    function checkAnswer(qao, i) {
        if (qao.rightAnswer === i) {
           //TODO: awward points
           score = score + award
        } else {
          // TODO: deduct time from timer
          timeLeft = timeLeft - penalty
        }
      }

    function viewHighScores {
    //Get a reference to the container where this info will be displayed.
     //Retrieve saved high scores from local storage, if any.
    //Iterate through list of high scores and create HTML elements for name and score.
    //Set this list as the contents of the referenced container.
    //Hide all sibling containers and make this container visible.
    //Return values retrieved from local storage by key.
    function getValuesFromLS(key) {
    
    }

    //store values in local storage under a key.
    function saveToLS {
        localStorage.setItem(LS_KEY, highScoreArray);
        //convert to string
        JSON.stringify(values)
        localStorage.getItem(LS_KEY, highScoreArray);
        //convert from string
        JSON.parse(values)
    }
    };