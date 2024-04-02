import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// const mongoose = mongoose();

const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to Mongo"))
  .catch((err) => {
    console.log(err);
  });
app.listen(3005, () => console.log("server is running on` 3005"));

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});
