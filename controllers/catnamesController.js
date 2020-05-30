const db = require("../models");

// Defining methods for the catnamesController
module.exports = {
    create: function(req, res) {
        console.log("req.body = " + req.body); // debug

        db.CatName.create({
            name: req.body.name
        })
        .then(function(dbCatName) {
            res.json(dbCatName);
        });
    }
}