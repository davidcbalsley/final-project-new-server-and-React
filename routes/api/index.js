const router = require("express").Router();
const catNamesRoutes = require("./catnames");
const clientRoutes = require("./client");
const userRoutes = require("./user");

// CatNames routes
router.use("/catnames", catNamesRoutes);
router.use("/clients", clientRoutes);
router.use("/users", userRoutes);

module.exports = router;