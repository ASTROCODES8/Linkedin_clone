import express from "express";
import { protectRoute } from "../Middleware/auth.middleware.js";
import {
  generateSuggestedConnections,
  generatePublicProfile,
  updateProfile,
  generateAllUsers,
} from "../Controllers/user.controller.js";

const router = express.Router();

router.get("/suggestions", protectRoute, generateSuggestedConnections);
router.get("/:username", protectRoute, generatePublicProfile);
router.post("/updateprofile", protectRoute, updateProfile);
router.get("/allusers", protectRoute, generateAllUsers);

export default router;
