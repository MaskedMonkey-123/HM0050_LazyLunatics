import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,unique:true,required:true},
    password: {type:String,required:true},
    skills: {type:[String],required:true,unique:false}, 
    location: {type:String,required:false},
    //resumeUrl: String, 
})


export default mongoose.model("User",userSchema);