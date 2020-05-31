const db = require("../models");

// Defining methods for the userController
module.exports = {
    create: function(req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password,
            userType: req.body.userType
        })
        .then(function(dbUser) {
            // res.redirect(307, "/api/users/login");

            // For now, send back id of new login record
            res.json(dbUser.dataValues.id);
        })
        .catch(function(err) {
            res.status(401).json(err);
        });
    },
    verifyLoginCredentials: function(req, res) {
        res.json(req.user);
    }
}