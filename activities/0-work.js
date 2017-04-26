// classroom exercise

// You will create an Express calculator application with one get route
// that is able to take in three parameters: an operation and two numbers.

// There are four operation values which a user may use:
// addition, subtraction, multiplication, and division.

// When the route is hit, your browser should display
// the result of the math operation and the two numbers on the screen.

// For example, when the user goes to the url http:

// localhost:3000/addition/10/1, the page should display 11.

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");  // part of node


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "view.html"));
});

// Search for Specific Character (or all characters) - provides JSON
// a question mark would make the parameter optional... not used here
app.get("/:operation/:num1/:num2/", function(req, res) {
    var operation = req.params.operation;
    var num1 = req.params.num1;
    var num2 = req.params.num2;
});

app.listen(PORT, function() {
    console.log('express server running on localhost port:', PORT);
});