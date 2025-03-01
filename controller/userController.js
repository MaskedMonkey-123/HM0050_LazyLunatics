import express from 'express'
import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { cloudinary } from '../utils/cloudinaryConfig.js'

export const register =async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const hashedPassword=await bcrypt.hash(password,10);
        // const result=await cloudinary.uploader.upload(req.file.path,{resource_type:"raw"});
        const user=new User({
            name,
            email,
            password:hashedPassword,
        });
        await user.save();
        res.status(201).json({message:"User registered successfully"});
    } catch (error) {
        res.status(500).json({message:"Something went wrong"});
    }
}
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({ message: "Login successful", token, user });
    } catch (error) {
        res.status(500).json({ message: "Login failed", error });
    }
};
