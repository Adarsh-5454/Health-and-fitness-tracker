import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    // Call the static signup method from the User model

    const user = await User.signup(name, email, password);

    res.status(201).json({
      userId: user._id,
      message: "User created successfully",
      user,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// login

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) res.status(400).json({ message: "User not found" });
    else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(401).json({ message: "Invalid credentials" });
      }

      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET || "default_secret",
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({
        userId: user._id,
        message: "Logged in successfully",
        token,
      });
    }
  } catch (error) {
    res.status(400).json({ message: " Invalid request" });
  }
};

export const logoutUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.status(200).json({ message: "Successfully Logout" });
  } catch (error) {
    res.status(400).json({ message: "Invalid request" });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const userid = await User.findById(id);

    if (!user) {
      res.status(400).json({ message: "User not found" });
    } else {
      // Validate input
      if (!email && password === undefined) {
        res.status(400).json({
          message: "At least one field is required to update.",
        });
      }

      // Find and update user

      let updateField: any = {};
      if (password) {
        updateField.password = bcrypt.hashSync(password, 10);
      }
      if (email) {
        updateField.email = email;
      }

      const updatedUser = await User.findByIdAndUpdate(
        id,
        { $set: updateField },
        { new: true, runValidators: true }
      );

      // If user not found
      if (!updatedUser) {
        res.status(404).json({ message: "User not found." });
      }

      res.status(200).json({
        message: "User updated successfully",
        user: updatedUser,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
