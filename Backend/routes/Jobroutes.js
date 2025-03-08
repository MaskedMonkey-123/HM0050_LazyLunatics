import express from "express";

import { postJob,getJobSummaries } from "../controller/jobController.js";
const router = express.Router();

router.post("/postjob", (req, res) => {
    console.log("📌 POST /api/jobs/postjob hit");
    postJob(req, res);
});
//router.get("/getjobs", getJobSummaries);
router.get("/summaries", (req, res) => {
    console.log("📌 GET /api/jobs/summaries hit");
    getJobSummaries(req, res);
});
console.log("Job routes loaded");
export default router;
