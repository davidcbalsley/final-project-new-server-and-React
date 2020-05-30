const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../config/passport");

// Matches with "/api/users/signup"
router.route("/signup")
  .post(userController.create);

// Matches with "/api/users/login"
router.route("/login")
  .post(passport.authenticate("local"), userController.verifyLoginCredentials);

module.exports = router;