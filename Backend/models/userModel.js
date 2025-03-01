import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name: String,
    email: {type:String,unique:true},
    password: String,
    skills: [String], 
    location: String,
    resumeUrl: String, 
    appliedJobs: [{type:mongoose.Schema.Types.ObjectId,ref:"Job"}] //array for job applications
})
export default mongoose.model("User",userSchema);