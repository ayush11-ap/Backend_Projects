const express = require("express");
const {
  loginController,
  registerController,
  fetchAllUsersContoller,
} = require("../Controllers/userController");

const { protect } = require("../middleware/authMiddleware");

const Router = express.Router();

Router.post("/login", loginController);
Router.post("/register", registerController);
Router.get("/fetchUsers", protect, fetchAllUsersContoller);

module.exports = Router;
