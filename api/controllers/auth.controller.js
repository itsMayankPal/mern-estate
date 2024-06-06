import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const test = (req, res) => {
  res.json({
    message: "Sign Up API",
  });
};

export const signup = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  const hashedPass = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPass });

  try {
    await newUser.save();
    res.status(201).json("User Created Succesfully");
  } catch (error) {
    res.status(500).json(error.message);
  }

  await newUser.save();
};
