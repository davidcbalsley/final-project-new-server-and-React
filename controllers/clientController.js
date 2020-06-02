const db = require("../models");

// Defining methods for the clientController
module.exports = {
    create: function(req, res) {
        db.Client.create({
            userId: req.body.userId,
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
    },
    findById: function(req, res) {
        db.Client.findOne({where: { id: req.params.id }})
        .then(dbClient => res.json(dbClient))
        .catch(err => res.status(422).json(err));
    },
    findByUserId: function(req, res) {
        db.Client.findOne({ where: { userId: req.params.id }})
        .then(dbClient => res.json(dbClient))
        .catch(err => res.status(422).json(err));
    },
    findByLicensePlate: function(req, res) {
        db.Client.findOne({ where: { plateState: req.params.platestate, license: req.params.license }})
        .then(dbClient => res.json(dbClient))
        .catch(err => res.status(422).json(err));
    }
}