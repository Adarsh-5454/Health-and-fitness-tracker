import { Request, Response } from "express";
import User from "../models/User";

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

      const user = new User({ name, email, password });
      const savedUser = await user.save();

      res.status(201).json(savedUser);
   } catch (error) {
      res.status(400).json({ message: "Error creating user" });
   }
};
