//Imports
const express = require("express");
const userController = require("../controllers/userController");

//Initialization
const router = express.Router();

//Routing
router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUsers);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

//exporting
module.exports = router;
