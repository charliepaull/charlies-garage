const router = require("express").Router();
const garageRoutes = require("./garage");

// Book routes
router.use("/garage", garageRoutes);

module.exports = router;
