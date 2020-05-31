const router = require("express").Router();
const clientController = require("../../controllers/clientController");
const passport = require("../../config/passport");

// Matches with "/api/clients"
router.route("/")
  .post(clientController.create);

// Matches with "/api/clients/:id"
router.route("/:id")
  .get(clientController.findById);

module.exports = router;