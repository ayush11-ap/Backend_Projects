const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.get("/", (req, res) => {
  res.send("API is working1");
});
const PORT = process.env.PORT || 1111;

app.listen(PORT, console.log("Server is Running..."));
