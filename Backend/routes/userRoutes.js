import express from 'express';
import { register, loginUser, getProfile, updateProfile } from '../controller/userController.js';
import authMiddleware from '../middleware/auth.js';
import uploadCloudinary from '../middleware/uploadCloudinary.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, getProfile);
router.put("/profile", authMiddleware, uploadCloudinary.single("resume"), updateProfile);

export default router;