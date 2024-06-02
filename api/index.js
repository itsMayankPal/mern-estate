import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
dotenv.config();

const app = express();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to Mongo"))
  .catch((err) => {
    console.log(err);
  });

app.listen(3005, () => console.log("server is running on` 3005!"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/routes/user", userRoutes);
