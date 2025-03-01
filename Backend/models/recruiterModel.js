import mongoose from "mongoose";

const recruiterSchema = new mongoose.Schema({
    companyName: {type:String,required:true},
    name: {type:String,required:true},
    email: {type:String,unique:true,required:true},
    password: {type:String,required:true},
});

export default mongoose.model("Recruiter", recruiterSchema);
