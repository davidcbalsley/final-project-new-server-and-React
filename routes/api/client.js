const router = require("express").Router();
const clientController = require("../../controllers/clientController");

// Matches with "/api/clients"
router.route("/")
  .post(clientController.create);

module.exports = router;