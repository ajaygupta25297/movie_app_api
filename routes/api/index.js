const router = require("express").Router();
const movieRoutes = require("./movie");

// Movie routes
router.use("/movies", movieRoutes);

module.exports = router;