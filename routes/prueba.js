const User = require("../models/User");
const Team = require("../models/Team");
const Player = require("../models/Player");
exports.getUserData = (req, res) => {
    User.findOne({ _id: req.params.id }, (err, user) => {
        if (!user) {
            return res.status(404).send("Error: Not found");
        }
        if (err) {
            return res.status(500).send("Error: " + err.message);
        }
        Team.populate(user, { path: "teams" }, (err, user) => {
            if (err) {
                return res.status(500).send("Error: " + err.message);
            }
            Player.populate(user.teams, { path: "players" }, (err, player) => {
                if (err) {
                    return res.status(500).send("Error: " + err.message);
                }
                console.log(user);
                res.status(200).send(user);
            });
        });
    });
}