const db = require("../models");

// Defining methods for the catnamesController
module.exports = {
    create: function(req, res) {
        db.CatName.create({
            name: req.body.name
        })
        .then(function(dbCatName) {
            res.json(dbCatName);
        });
    }
}