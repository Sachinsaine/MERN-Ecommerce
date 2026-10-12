/* eslint-disable no-undef */
const express = require("express");
const { signUp, signIn } = require("../controllers/authController");
const {
  addProducts,
  getProducts,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/addProduct", addProducts);
router.get("/getProducts", getProducts);
router.delete("/product/:id", deleteProduct);

module.exports = router;
