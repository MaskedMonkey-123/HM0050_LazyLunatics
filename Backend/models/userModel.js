import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
<<<<<<< HEAD
    name: String,
    email: {type:String,unique:true},
    password: String,
    skills: [String], 
    location: String,
    resumeUrl: String, 
    appliedJobs: [{type:mongoose.Schema.Types.ObjectId,ref:"Job"}] //array for job applications
=======
    name: {type:String,required:true},
    email: {type:String,unique:true,required:true},
    password: {type:String,required:true},
    skills: {type:[String],required:true,unique:false}, 
    location: {type:String,required:false},
    //resumeUrl: String, 
>>>>>>> 9f913928a64cb92053d36a3076f53d685604beaa
})


export default mongoose.model("User",userSchema);