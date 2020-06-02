const router = require("express").Router();
const clientRoutes = require("./client");
const userRoutes = require("./user");

// CatNames routes
router.use("/clients", clientRoutes);
router.use("/users", userRoutes);

module.exports = router;