/* eslint-disable no-undef */
const express = require("express");
const { signUp, signIn } = require("../controllers/authController");

const {
  addProducts,
  getProducts,
  deleteProduct,
} = require("../controllers/productController");

const {
  addCategories,
  getCategories,
} = require("../controllers/homepageCategoryController");

const {
  addProduct,
  getProduct: getHomepageProducts,
} = require("../controllers/homepageProductsController");

const router = express.Router();

// Homepage categories
router.post("/homepage-category", addCategories);
router.get("/homepage-category", getCategories);

// Homepage products
router.post("/homepage-product", addProduct);
router.get("/homepage-product", getHomepageProducts);

// Signup and signin
router.post("/signup", signUp);
router.post("/signin", signIn);

// Dashboard products
router.post("/addProduct", addProducts);
router.get("/getProducts", getProducts);
router.delete("/product/:id", deleteProduct);

module.exports = router;
