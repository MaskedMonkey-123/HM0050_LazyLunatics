import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,unique:true,required:true},
    password: {type:String,required:true},
    skills: {type:[String],required:true,unique:true}, 
    location: {type:String,required:true},
    //resumeUrl: String, 
})
export default mongoose.model("User",userSchema);