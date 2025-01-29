import { Request, Response } from "express";
import Profile, { IProfile } from "../../models/profileModel/profile";

export const createProfile = async (
   req: Request,
   res: Response
): Promise<void> => {
   try {
      const { userName, fullName, email, dob, address, city, state, pincode } =
         req.body;

      // Validation: Check if all required fields are present
      if (
         !userName ||
         !fullName ||
         !email ||
         !dob ||
         !address ||
         !city ||
         !state ||
         !pincode
      ) {
         res.status(400).json({ message: "Please fill all the fields" });
         return; // Stop execution after response
      }

      // Check if email already exists
      const existingProfile = await Profile.findOne({ email });
      if (existingProfile) {
         res.status(400).json({ message: "Email is already in use" });
         return;
      }

      // Create and save profile
      const newProfile: IProfile = new Profile({
         userName,
         fullName,
         email,
         dob,
         address,
         city,
         state,
         pincode,
      });

      const savedProfile = await newProfile.save();
      res.status(201).json({
         message: "Profile created successfully",
         profile: savedProfile,
      });
   } catch (error: any) {
      res.status(500).json({
         message: "Error creating profile",
         error: error.message,
      });
   }
};
