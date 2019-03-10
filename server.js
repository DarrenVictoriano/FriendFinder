var friends = require('./app/data/friends.js');
var express = require('express');
var html = require('./app/routing/htmlRoutes');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;

// Parse URL and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// meka path known to express
app.use(express.static('app/public'));

// routes
app.get("/survey", html.survey);
app.get("/repo", html.github);
app.get("/*", html.home);




// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});