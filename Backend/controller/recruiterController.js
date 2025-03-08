
import Recruiter from '../models/recruiterModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register =async(req,res)=>{
    try {
        const { name, email, password } = req.body;

        // Validate required fields
        if (!name || !email || !password ) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the email is already registered
        const existingUser = await Recruiter.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email is already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new Recruiter({
            name,
            email,
            password: hashedPassword,
        });

        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Something went wrong", error });
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

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.json({ message: "Login successful", token, user });
    } catch (error) {
        res.status(500).json({ message: "Login failed", error });
    }
};