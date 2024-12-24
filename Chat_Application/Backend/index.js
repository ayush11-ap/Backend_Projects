const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const userRoutes = require("./Routes/userRoutes");
const chatRoutes = require("./Routes/userRoutes");
const messageRoutes = require("./Routes/messageRoutes");

const app = express();
dotenv.config();
app.use(express.json());

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

app.use("/user", userRoutes);
app.use("/chat", chatRoutes);
app.use("/message", messageRoutes);

app.use("/user", userRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log("Server is Running..."));
