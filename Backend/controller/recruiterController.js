import express from 'express'
import Recruiter from '../models/recruiterModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Job from '../models/jobModel.js'

export const register =async(req,res)=>{
    try {
        const {name,email,password,companyName}=req.body;

        const existingUser=await Recruiter.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }

        const hashedPassword=await bcrypt.hash(password,10);
       // const resumeUrl=req.file ?req.file.path : '';
        const user=new Recruiter({
            name,email,password:hashedPassword,companyName
        });
        await user.save();

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

        res.status(201).json({message:"User registered successfully"});
    } catch (error) {
        res.status(500).json({message:"Something went wrong"});
    }
}
export const loginUser = async (req, res) => {
    try {
        console.log("Login request received:", req.body);
        const { email, password } = req.body;
        const user = await Recruiter.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        console.log("generated token:", token);
        res.json({ message: "Login successful", token, user });
    } catch (error) {
        res.status(500).json({ message: "Login failed", error });
    }
};

export const jobpost = async (req, res) => {
    try {
        console.log("Job post request received:", req.body);
        const { title, jobDescription, location, salary, employeeType, requiredSkills } = req.body;
        const job = new Job({
            title, jobDescription, location, salary, employeeType,requiredSkills
        });
        await job.save();
        res.status(201).json({ message: "Job posted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Job post failed", error });
    }
}