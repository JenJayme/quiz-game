//Need an array of questions

//foreach loop to cycle through questions

//function to start timer, and a variable for time left.

//Need an array of answer options, length 4, of which one is the correct answer.

//Determine correct answer by an event listener, onclick the item is compared to the correct answer. (need input, correct answer and score variables.) If response = correct answer, add to score.  Could we identify the correct answer as an index value in the array of possible answers?

//If response is incorrect, time is subtracted from the clock. 

//Need an event listener to start the timer when start button is clicked, with a function to render the question to the screen along with possible answers.

//Need a gameOver variable to register true when game is over. If timeLeft=0 or loop completed (?) gameOver = true. 

//when gameOver = true go to 'All Done' page that returns score, and has a form field to enter intials. Upon enter, goes to Highscores page, which saves previous entries.

//If gameOver=0, save initials and score to localstorage. Highscores.html page.

var score = 0;
var input;
var timeLeft;
var gameOver; //true or false 
var questions = [
    "What former NBA player appeared in a Bruce Lee movie?",
    " ",
    " ",
    " ",

    : Kareem Abdul Jabbar in The Game Of Death 
]
}