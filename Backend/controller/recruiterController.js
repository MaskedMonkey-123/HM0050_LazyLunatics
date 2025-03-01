import express from 'express'
import Recruiter from '../models/recruiterModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
<<<<<<< HEAD
import Job from '../models/jobModel.js'
=======
>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7

export const register =async(req,res)=>{
    try {
        const {name,email,password,companyName}=req.body;
<<<<<<< HEAD

        const existingUser=await Recruiter.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }

=======
>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
        const hashedPassword=await bcrypt.hash(password,10);
       // const resumeUrl=req.file ?req.file.path : '';
        const user=new Recruiter({
            name,email,password:hashedPassword,companyName
        });
        await user.save();
<<<<<<< HEAD

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

=======
>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
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

<<<<<<< HEAD
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        console.log("generated token:", token);
=======
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
        res.json({ message: "Login successful", token, user });
    } catch (error) {
        res.status(500).json({ message: "Login failed", error });
    }
<<<<<<< HEAD
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
=======
};
>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
