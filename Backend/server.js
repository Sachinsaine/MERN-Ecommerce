/* eslint-disable no-undef */
const express = require("express");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://mern-ecommerce-orpin-iota.vercel.app",
    ],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "E-commerce API is running",
  });
});

const PORT = process.env.PORT || 9000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
