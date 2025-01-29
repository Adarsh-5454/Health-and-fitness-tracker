import { Request, Response } from "express";
import Profile, { Iprofile } from "../../models/profileModel/profile";
export const createProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userName, fullName, email, dob, address, city, state, pincode } =
    req.body;
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
  }
  try {
    const createProfile: Iprofile = new Profile({
        userName,
        fullName,
        email,
        dob,
        address,
        city,
        state,
        pincode
        });

        const savedProfile = await createProfile.save();
        res.status(201).json({ message: "Profile created successfully", savedProfile });
  } catch (error) {
    res.status(500).json({message:"Error creating Profile"})
  }
};
