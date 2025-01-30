import express from "express";
import {
   createProfile,
   deleteProfile,
} from "../../controllers/profileController/profileController";

const router = express.Router();

router.post("/", createProfile);
router.delete("/:id", deleteProfile);

export default router;
