# To link a style sheet
    <link rel="stylesheet" href="assets/css/style.css">

# To link a script.js file
    <script type="text/javascript" src="script.js"></script>

# To create a for loop
    for (var i = o; i < variable.length; i++) {
        insert function here (element to pass thru function);
    }

# array of objects
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

# Add To Do Items


# Render To Do Items

var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript", ];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  }
}

// todos.push("Pet the cat");
// renderTodos();

# Set Attributes to change styling with Javascript
// we used querySelector and querySelectorAll to gather our elements into variables rather than using the more specific document methods.
// querySelector because it allows us to select an element by tag, class name, or ID. This makes it more flexible than using getElementById or getElementByClassName.
// querySelectorAll because it allows us to select all elements of the same tag, class name, or ID. This is much more useful than getElementsByTagName or other group selectors.
// These two methods are the most useful and versatile because they can be used to target any element we would ever like to target.


var pTags = document.querySelectorAll("p");
var divTags = document.querySelectorAll("div");
var aTags = document.querySelectorAll("a");
var imgEl = document.querySelectorAll("img");
var changeP = document.querySelector("#change2");

console.log(pTags);


// How was all of the styling done if there is no CSS?
// All the styling done to the page uses the method, .setAttribute.
// The setAttribute method takes in two arguments, first is the name of the attribute, and the second is its value. i.e., `setAttribute("style", "color:white;");

// The major difference between setting styles with .setAttribute vs the .style methods is that when using setAttribute we enter the CSS properties and values like we would in a normal external stylesheet or inline styling.

pTags[0].setAttribute("style", "font-size: 65px;");
changeP.setAttribute("style", "color:blue; border:2px solid black;");
aTags[0].setAttribute("href", "https://github.com");
imgEl[0].setAttribute("src", "images/image_1.jpg");
imgEl[0].setAttribute("style", "width:500px; height:200px;");

for (var i = 0; i < divTags.length; i++) {
  divTags[i].setAttribute("style", "text-decoration:underline; color:red;");
}




# Create an element on the DOM