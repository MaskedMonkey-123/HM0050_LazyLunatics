import mongoose from "mongoose";

const recruiterSchema = new mongoose.Schema({
<<<<<<< HEAD
    companyName: {type:String,required:true},
    name: {type:String,required:true},
    email: {type:String,unique:true,required:true},
    password: {type:String,required:true},
=======
    companyName: String,
    name: String,
    email: String,
    password: String,
>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
});

export default mongoose.model("Recruiter", recruiterSchema);
