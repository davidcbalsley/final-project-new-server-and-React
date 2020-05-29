// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

module.exports = function(app) {

    // POST route for saving a new cat name
    app.post("/api/catnames", function(req, res) {
        console.log(req.body);
        db.CatName.create({
            name: req.body.name
        })
        .then(function(dbPost) {
            res.json(dbPost);
        });
    });

}