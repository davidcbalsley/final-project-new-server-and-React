const db = require("../models");

// Defining methods for the clientController
module.exports = {
    create: function(req, res) {
        db.Client.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            streetAddress: req.body.streetAddress,
            aptNumber: req.body.aptNumber,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            numAdults: req.body.numAdults,
            numChildren: req.body.numChildren,
            numSeniors: req.body.numSeniors,
            plateState: req.body.plateState,
            license: req.body.license
        })
        .then(function(dbClient) {
            res.json(dbClient);
        });
    },
    verifyLoginCredentials: function(req, res) {
        res.json(req.user);
    }
}