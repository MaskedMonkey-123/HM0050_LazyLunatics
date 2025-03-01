import express from 'express';
import { jobpost } from '../controller/recruiterController.js';

const router = express.Router();
router.post("/postjob",jobpost);

export default router;