const router = require("express").Router();
const catNamesRoutes = require("./catNames");

// CatNames routes
router.use("/catnames", catNamesRoutes);

module.exports = router;