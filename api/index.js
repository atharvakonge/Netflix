const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Intitialize express
const app = express();

// Configurate dotenv
dotenv.config();

// Connect to mongoose
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});
db.once("open", () => {
  console.log("Connected to MongoDB!");
});

// Start the server
app.listen(8800, () => {
  console.log("Backend Server is running");
});
