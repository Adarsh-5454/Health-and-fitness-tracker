import { Request, Response } from "express";
import Profile, { IProfile } from "../../models/profileModel/profile";
import User from "../../models/User";

export const getProfileDetails = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.params;

    // Find user details
    const user = await User.findById(userId).select("name email");

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Find profile details
    const profile = await Profile.findOne({ userId });

    res.status(200).json({ user, profile });
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile details", error });
  }
};

/**
 * Update user details and profile details
 */ export const updateProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.params;
    const { dob, address, city, state, country, pincode } = req.body;

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    // Check if profile exists
    let profile = await Profile.findOne({ userId });

    if (!profile) {
      // Create new profile if not found
      profile = new Profile({
        userId,
        dob,
        address,
        city,
        state,
        country,
        pincode,
      });
    } else {
      // Update existing profile
      profile.dob = dob;
      profile.address = address;
      profile.city = city;
      profile.state = state;
      profile.country = country;
      profile.pincode = pincode;
    }

    // Save profile
    const updatedProfile = await profile.save();

    res.status(200).json({
      message: "Profile updated successfully",
      profile: updatedProfile,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile", error });
  }
};

export const deleteProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedProfile = await Profile.findByIdAndDelete(id);

    if (!deletedProfile) {
      res.status(404).json({ message: "Profile not found" });
      return;
    }

    res.status(200).json({
      message: "Profile deleted successfully",
      deletedProfile,
    });
  } catch (error) {
    res.status(500).json({ message: "Error deleting profile", error });
  }
};
