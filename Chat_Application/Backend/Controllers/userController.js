const express = require("express");
const UserModel = require("../models/userModel");
const expressAsyncHandler = require("express-async-handler");
const generateToken = require("../Config/generateToken");

const loginController = expressAsyncHandler(async () => {
  const { name, password } = req.body;

  const user = UserModel.findOne({ name });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    throw new Error("Invalid Username or Password");
  }
});

const registerController = expressAsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //check if all fields are filled
  if (!name || !email || !password) {
    res.send(400);
    throw Error("All necessary input fields have not been filled");
  }

  // pre-existing user
  const userExist = await UserModel.findOne({ email });
  if (userExist) {
    throw new Error("User already exists");
  }

  //userName exists or not
  const userNameExist = await UserModel.findOne({ name });
  if (userNameExist) {
    throw new Error("UserName already exists");
  }

  //create an entry in the database
  const user = await UserModel.create({ name, email, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

module.exports = { loginController, registerController };
