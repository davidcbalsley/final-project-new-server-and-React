const router = require("express").Router();
const clientController = require("../../controllers/clientController");

// Matches with "/api/clients"
router.route("/")
  .post(clientController.create);

// Matches with "/api/clients/:id"
router.route("/:id")
  .get(clientController.findById);

// Matches with "/api/clients/userid/:id"
router.route("/userid/:id")
  .get(clientController.findByUserId);

// Matches with "/api/clients/plate"
router.route("/plate/platestate=:platestate&license=:license")
  .get(clientController.findByLicensePlate);

module.exports = router;