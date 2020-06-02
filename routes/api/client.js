const router = require("express").Router();
const clientController = require("../../controllers/clientController");

// Matches with "/api/clients"
router.route("/")
  .post(clientController.create);

// Matches with "/api/clients/:id"
router.route("/:id")
  .get(clientController.findById);

// Matched with "/api/clients/userid/:id"
router.route("/userid/:id")
  .get(clientController.findByUserId);

module.exports = router;