/* eslint-disable no-undef */
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const signUp = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    const userExist = await User.findOne({
      $or: [{ email }, { mobile }],
    });

    if (userExist) {
      return res.status(400).json({
        message: "Email or mobile number already registered",
      });
    }

    const user = await User.create({
      name,
      email,
      mobile,
      password,
    });

    res.status(201).json({
      message: "Signup successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
      },
    });
  } catch (error) {
    console.log("Signup Error:", error.message);
    res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const userPassword = await bcrypt.compare(password, user.password);

    if (!userPassword) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    res.status(200).json({
      message: "Signin successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
      },
    });
  } catch (error) {
    console.log("Error:", error);

    res.status(500).json({
      message: "SignIn failed",
      error: error.message,
    });
  }
};

module.exports = { signUp, signIn };
