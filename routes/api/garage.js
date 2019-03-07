const router = require("express").Router();
const garageController = require("../../controllers/carsController");

// Matches with "/api/cars"
router.route("/")
  .get(garageController.findAll)
  .post(garageController.create);

// Matches with "/api/cars/:id"
router
  .route("/:id")
  .get(garageController.findById)
  .put(garageController.update)
  .delete(garageController.remove);

module.exports = router;
