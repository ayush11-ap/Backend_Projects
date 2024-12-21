const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");

const app = express();
dotenv.config();

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Server is connected to DataBase");
  } catch (err) {
    console.log("Server is NOT connected to DataBase", err.message);
  }
};
connectDb();

app.get("/", (req, res) => {
  res.send("API is working1");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log("Server is Running..."));
