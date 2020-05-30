const router = require("express").Router();
const catNamesRoutes = require("./catnamesx");

// CatNames routes
router.use("/catnames", catNamesRoutes);

module.exports = router;