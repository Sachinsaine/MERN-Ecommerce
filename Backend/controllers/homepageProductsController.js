/* eslint-disable no-undef */
const HomepageProducts = require("../models/homepageProducts");
const Categories = require("../models/homepageCategories");

const addProduct = async (req, res) => {
  try {
    const { name, category, price, oldPrice, rating, image, badge } = req.body;

    if (!name || !category || price == null || oldPrice == null || !image) {
      return res.status(400).json({
        message: "Please provide all required product fields",
      });
    }

    const existingCategory = await Categories.findById(category);

    if (!existingCategory) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    const product = await HomepageProducts.create({
      name,
      category,
      price,
      oldPrice,
      rating,
      image,
      badge,
    });

    return res.status(201).json({
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Product not added",
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
      products,
    });
  } catch (error) {
    console.error(error);

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
