import express from "express";

import { createProfile } from "../../controllers/profileController/profileController";

const router = express.Router();

router.post("/", createProfile);

export default router;
