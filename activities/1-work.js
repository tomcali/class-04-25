// here we will have two servers going ... express and mysql database server
// the express server runs on node.js
// the mysql server runs on its own server
// client will be the browser

var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var path = require('path');  // part of node


// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();  // must always save express as a function call variable

// Sets an initial port. We"ll use this later in our listener
// how we set things up to switch between hosted or
// 80 for http  443 for https on remote servers
var PORT = process.env.PORT || 8080;

var connection =

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "view.html"));
});




app.listen(PORT, function() {
    console.log('express server running on localhost port:', PORT);
});