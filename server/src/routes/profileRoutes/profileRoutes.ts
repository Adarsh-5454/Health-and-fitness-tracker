import express from "express";
import {
  deleteProfile,
  getProfileDetails,
  updateProfile,
} from "../../controllers/profileController/profileController";

const router = express.Router();
// Update or create profile
router.put("/:userId", updateProfile);

// Get profile (user details + profile details)
router.get("/:userId", getProfileDetails);

// Delete profile (optional)
router.delete("/:id", deleteProfile);

export default router;
