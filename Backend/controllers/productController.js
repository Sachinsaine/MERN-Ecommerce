/* eslint-disable no-undef */
const products = require("../models/product");

const addProducts = async (req, res) => {
  try {
    const {
      brand,
      name,
      price,
      image_link,
      rating,
      category,
      product_type,
      tag_list,
      product_colors,
    } = req.body;

    const productExist = await products.findOne({
      brand,
      name,
    });

    if (productExist) {
      return res.status(400).json({
        message: "Product already exists",
      });
    }

    const product = await products.create({
      brand,
      name,
      price,
      image_link,
      rating,
      category,
      product_type,
      tag_list,
      product_colors,
    });

    res.status(201).json({
      message: "Product added successfully",
      product: {
        id: product._id,
        brand: product.brand,
        name: product.name,
        price: product.price,
        image_link: product.image_link,
        rating: product.rating,
        category: product.category,
        product_type: product.product_type,
        tag_list: product.tag_list,
        product_colors: product.product_colors,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Product not added",
      error: error.message,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const productList = await products.find();

    return res.status(200).json({
      message: "products fetched successfully",
      products: productList,
    });
  } catch (error) {
    console.log("fetching products error:", error);
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await products.findByIdAndDelete(id);

    if (!deleteProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Product has been deleted successfully",
      product: deleteProduct,
    });
  } catch (error) {
    console.error("DELETE PRODUCT ERROR:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = { addProducts, getProducts, deleteProduct };
