/* eslint-disable no-undef */
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const signUp = async (req, res) => {
  try {
    const { name, email, phone, password, confirmPassword } = req.body;

    if (!name || !email || !phone || !password || !confirmPassword) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }

    const userExist = await User.findOne({
      $or: [{ email: email.trim().toLowerCase() }, { mobile: phone.trim() }],
    });

    if (userExist) {
      return res.status(409).json({
        message: "Email or phone number already registered",
      });
    }

    const user = await User.create({
      name,
      email: email.trim().toLowerCase(),
      mobile: phone.trim(),
      password,
    });

    return res.status(201).json({
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

    if (error.code === 11000) {
      return res.status(409).json({
        message: "Email or phone number already registered",
      });
    }

    return res.status(500).json({
      message: "Registration failed",
    });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email.trim().toLowerCase(),
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    return res.status(200).json({
      message: "Signin successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
      },
    });
  } catch (error) {
    console.log("Signin Error:", error.message);

    return res.status(500).json({
      message: "Signin failed",
    });
  }
};

module.exports = { signUp, signIn };
