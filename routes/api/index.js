const router = require("express").Router();
const catNamesRoutes = require("./catnames");
const userRoutes = require("./user");

// CatNames routes
router.use("/catnames", catNamesRoutes);
router.use("/users", userRoutes);

module.exports = router;