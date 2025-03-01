import express from "express";
import { postJob } from "../controller/jobController.js";
const router = express.Router();

router.post("/postjob", postJob);
export default router;
