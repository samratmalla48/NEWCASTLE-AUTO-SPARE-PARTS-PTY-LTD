import { hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
  try {
    console.log("Top  here");
    // Validation check
    const { name, email, password, phone, address } = req.body;
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!password) {
      return res.send({ error: "Password is required" });
    }
    if (!phone) {
      return res.send({ error: "Phone number is required" });
    }
    if (!address) {
      return res.send({ error: "Address is required" });
    }
    // Check if the user already exists in the database
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "Already Registered. Please login.",
      });
    }
    if (existingUser.email) {
      return res.send({ error: "Email is already there" });
    }

    // Register user if the user doesn't exist
    const hashedPassword = await hashPassword(password); // Assuming there is a hashPassword function defined elsewhere
    console.log(ha);
    const user = new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in registration",
      error,
    });
  }
};
