const router = require("express").Router();
const catNamesRoutes = require("./catnames");

// CatNames routes
router.use("/catnames", catNamesRoutes);

module.exports = router;