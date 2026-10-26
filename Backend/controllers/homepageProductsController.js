/* eslint-disable no-undef */
const mongoose = require("mongoose");
const HomepageProducts = require("../models/homepageProducts");
const Categories = require("../models/homepageCategories");

const addProduct = async (req, res) => {
  try {
    const products = Array.isArray(req.body) ? req.body : [req.body];

    if (products.length === 0) {
      return res.status(400).json({
        message: "Please provide at least one product",
      });
    }

    for (const product of products) {
      const { name, category, price, oldPrice, image } = product;

      if (!name || !category || price == null || oldPrice == null || !image) {
        return res.status(400).json({
          message: "Please provide all required product fields",
          product: name || "Unknown product",
        });
      }

      if (!mongoose.isValidObjectId(category)) {
        return res.status(400).json({
          message: "Invalid category ID",
          product: name,
          category,
        });
      }

      const existingCategory = await Categories.findById(category);

      if (!existingCategory) {
        return res.status(404).json({
          message: "Category not found",
          product: name,
          category,
        });
      }
    }

    const savedProducts = await HomepageProducts.insertMany(products);

    return res.status(201).json({
      message: "Products added successfully",
      count: savedProducts.length,
      products: savedProducts,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Products not added",
      error: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const products = await HomepageProducts.find()
      .populate("category", "name image")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Products fetched successfully",
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Fetch products error:", error);

    return res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

module.exports = {
  addProduct,
  getProduct,
};
