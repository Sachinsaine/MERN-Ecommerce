/* eslint-disable no-undef */
const express = require("express");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
require("dotenv").config();
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "E-commerce API is running",
  });
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
