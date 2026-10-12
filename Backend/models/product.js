/* eslint-disable no-undef */
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image_link: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      default: null,
    },
    category: {
      type: String,
      default: "",
    },
    product_type: {
      type: String,
      required: true,
    },
    tag_list: {
      type: [String],
      default: [],
    },
    product_colors: [
      {
        hex_value: String,
        colour_name: String,
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Product", productSchema);
