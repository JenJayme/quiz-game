//Need an array of questions

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

var questionsContainer = document.querySelector(".questions");


var 

createElement

//function to start timer, and a variable for time left.
// var timeLeft = 60;

// setInterval(function() {
//     timeLeft--}, 1000);
// }

// setInterval(function(){ alert("Hello"); }, 3000);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Need a submit button. 

//Determine correct answer by an event listener, onclick the item is compared to the correct answer. (need input, correct answer and score variables.) If response = correct answer, add to score.  Could we identify the correct answer as an index value in the array of possible answers?

//If response is incorrect, time is subtracted from the clock. 

//Need an event listener to start the timer when start button is clicked, with a function to render the question to the screen along with possible answers.

//Need a gameOver variable to register true when game is over. If timeLeft=0 or loop completed (?) gameOver = true. 

//when gameOver = true go to 'All Done' page that returns score, and has a form field to enter intials. Upon enter, goes to Highscores page, which saves previous entries.

//If gameOver=0, save initials and score to localstorage. Highscores.html page.

var score = 0;
var input;
var gameOver; //true or false 
var input 
