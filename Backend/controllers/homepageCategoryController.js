/* eslint-disable no-undef */
const Categories = require("../models/homepageCategories");

const addCategories = async (req, res) => {
  try {
    const { name, image } = req.body;

    if (!name || !image) {
      return res.status(400).json({
        message: "Category name and image are required",
      });
    }

    const existsCategory = await Categories.findOne({
      name: name.trim(),
    });

    if (existsCategory) {
      return res.status(400).json({
        message: "Category already exists!",
      });
    }

    const categoryCreate = await Categories.create({
      name: name.trim(),
      image,
    });

    return res.status(201).json({
      message: "Category added successfully",
      category: categoryCreate,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Category not added",
      error: error.message,
    });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Categories.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      message: "Categories fetched successfully",
      categories,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Failed to fetch categories",
      error: error.message,
    });
  }
};

module.exports = { addCategories, getCategories };
