var path = require('path');

var routes = {
    home: function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    },
    survey: function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    },
    github: function (req, res) {
        res.status(300).redirect("https://github.com/DarrenVictoriano/FriendFinder");
    }
}

module.exports = routes;