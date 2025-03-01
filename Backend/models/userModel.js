import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
<<<<<<< HEAD
    name: {type:String,required:true},
    email: {type:String,unique:true,required:true},
    password: {type:String,required:true},
    skills: {type:[String],required:true,unique:true}, 
    location: {type:String,required:true},
=======
    name: String,
    email: {type:String,unique:true},
    password: String,
    skills: [String], 
    location: String,
>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
    //resumeUrl: String, 
})
export default mongoose.model("User",userSchema);