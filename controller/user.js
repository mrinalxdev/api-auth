const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const userController = {
  //Registratiom
  register: asyncHandler((req, res) => {}),

  //Login
  login: asyncHandler((req, res) => {}),

  //Profile
  profile: asyncHandler((req, res) => {}),
};

module.exports = userController;
