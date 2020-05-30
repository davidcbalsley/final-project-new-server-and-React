const router = require("express").Router();
const catNamesController = require("../../controllers/catnamesController");

// Matches with "/api/catnames"
router.route("/")
  .post(catNamesController.create);

/*
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);
  */

module.exports = router;