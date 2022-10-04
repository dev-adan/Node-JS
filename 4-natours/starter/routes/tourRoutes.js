//Importing
const express = require("express");

const tourController = require("../controllers/tourController");

//initialization
const router = express.Router();


//Routes

router
.route("/")
.get(tourController.getTours)
.post(tourController.createTour);

router
  .route("/:id")
  .get(tourController.getTour)
  .delete(tourController.deleteTour)
  .patch(tourController.updateTour)

//exporting
module.exports = router;
