/* eslint-disable no-undef */
const mongoose = require("mongoose");

const HomepageProducts = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HomepageCategories",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      required: true,
    },
    badge: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("HomepageProducts", HomepageProducts);
