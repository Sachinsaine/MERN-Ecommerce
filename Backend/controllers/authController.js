/* eslint-disable no-undef */
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

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

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

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

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // For local development (localhost):
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    // For deployment (Vercel + Render):
    // res.cookie("token", token, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: "none",
    //   maxAge: 24 * 60 * 60 * 1000,
    // });

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

const Logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    path: "/",
  });

  return res.status(200).json({
    message: "Logout successful",
  });
};

const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.log(error.message || "Get me error.");

    return res.status(500).json({
      message: "Failed to get user",
    });
  }
};

module.exports = { signUp, signIn, Logout, getMe };
