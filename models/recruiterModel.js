import mongoose from "mongoose";

const recruiterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const recruiter = mongoose.model("Recruiter", recruiterSchema);
export default recruiter;
