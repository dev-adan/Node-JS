//Importing
const express = require("express");

const tourController = require("../controllers/tourController");

//initialization
const router = express.Router();


//Routes

router
.route("/")
.get(tourController.getTours)
.post(tourController.checkBody,tourController.postTours);

router
  .route("/:id")
  .get(tourController.getSingleTour)
  .delete(tourController.deleteSingleTour);

//exporting
module.exports = router;
