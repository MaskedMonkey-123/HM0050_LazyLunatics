import express from 'express';
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        const { name, email, password, skills, location } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedPassword,
            skills,
            location
        });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

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

export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.error("Error fetching profile", error);
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const updateProfile = async (req, res) => {
    try {
        const { name, email, skills, location } = req.body;
        const updateData = { name, email, skills, location };
        if (skills) {
            updateData.skills = skills.split(",").map(skill => skill.trim());
        }
        if (req.file) {
            updateData.resumeUrl = req.file.path;
        }
        const updatedUser = await User.findByIdAndUpdate(req.userId, updateData, { new: true }).select("-password");
        res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Error updating profile", error);
        res.status(500).json({ message: "Something went wrong" });
    }
};