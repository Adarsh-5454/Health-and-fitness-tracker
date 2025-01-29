import express from "express";

import { createProfile } from "../../controllers/profileController/profileController";

const router = express.Router();

router.post("/signup", createProfile);

export default router;
