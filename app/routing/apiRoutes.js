var friends = require('../data/friends.js');

var routes = {
    getFriends: function (req, res) {
        res.send(friends);
    },
    addFriend: function (req, res) {

        console.log(req.body);

        var userScore = req.body.scores.reduce(function (accumulator, item) {
            return parseInt(accumulator) + parseInt(item);
        });

        var matchScore = friends[0].scores.reduce(function (accumulator, item) {
            return parseInt(accumulator) + parseInt(item);
        });

        var diff = Math.abs(userScore - matchScore);

        for (i in friends) {
            var dbScore = friends[i].scores.reduce(function (accumulator, item) {
                return parseInt(accumulator) + parseInt(item);
            });
            var newDiff = Math.abs(userScore - dbScore);
            if (newDiff < diff) {
                diff = newDiff;
                matchScore = dbScore;
            }
        }

        console.log("userScore: " + userScore);
        console.log("matchScore: " + matchScore);
        var theMatch = {};
        for (i in friends) {
            if (matchScore == friends[i].scores.reduce(function (accumulator, item) {
                return parseInt(accumulator) + parseInt(item);
            })) {
                theMatch = friends[i];
            }
        }

        console.log("your match is: " + theMatch.name);

        // add new user to the db
        console.log("pushed to friendlist");
        friends.push(req.body);
        console.log(friends);

        res.send(theMatch);
    }
}

module.exports = routes;