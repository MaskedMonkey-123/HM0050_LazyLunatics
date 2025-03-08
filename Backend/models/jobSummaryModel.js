import mongoose from "mongoose";

const jobSummarySchema = new mongoose.Schema({
    title : { type: String, required: true },
    companyName : { type: String, required: true },
});

const JobSummary = mongoose.model("JobSummary", jobSummarySchema);
export default JobSummary;
