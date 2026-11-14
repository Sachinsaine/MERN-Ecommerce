/* eslint-disable no-undef */
const express = require("express");
const {
  signUp,
  signIn,
  Logout,
  getMe,
} = require("../controllers/authController");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

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

// Homepage categories
router.post("/homepage-category", addCategories);
router.get("/homepage-category", getCategories);

// Homepage products
router.post("/homepage-product", addProduct);
router.get("/homepage-product", getHomepageProducts);

// Signup and signin
router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/logout", Logout);
router.get("/me", authMiddleware, getMe);

// Dashboard products
router.post("/addProduct", authMiddleware, addProducts);
router.get("/getProducts", authMiddleware, getProducts);
router.delete("/product/:id", authMiddleware, deleteProduct);

module.exports = router;
