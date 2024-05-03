const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../model/User");

const userController = {
  //Registratiom
  register: asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;

    if ((!username || !email || !password, !role)) {
      throw new Error("All field are required");
    }

    const userExits = await User.findOne({ email });
    if (userExits) {
      throw new Error("User already exists !");
    }

    //Hashing the user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Creating the user
    const userCreated = await User.create({
      username,
      password: hashedPassword,
      email,
      role,
    });

    res.json({
      username: userCreated.username,
      email: userCreated.email,
      id: userCreated.id,
      role: userCreated.role,
    });
  }),

  //Login
  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("invalid credentials");
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new Error("invalid credentials");
    }

    const token = jwt.sign({ id: user._id }, "anykey", { expiresIn: "30d" });

    res.json({
      message: "Login Success",
      token,
      id: user._id,
      email: user.email,
      username: user.username,
    });
  }),

  //Profile
  profile: asyncHandler((req, res) => {
    
  }),
};

module.exports = userController;
