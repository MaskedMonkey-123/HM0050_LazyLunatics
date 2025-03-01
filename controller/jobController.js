import jobModel from "../models/jobModel.js";
import userModel from "../models/userModel.js";
import sendEmail from "../services/emailService.js";

export const postJob = async (req, res) => {
    try {
        const { jobTitle, employeeType, company, jobDescription, requiredSkills, location, salary } = req.body;
        const newJob = await jobModel.create({
            jobTitle,
            employeeType,
            company,
            jobDescription,
            requiredSkills,
            location,
            salary
        });

        const matchingUsers = await userModel.find({
            role: "employee",
            skills: { $in: requiredSkills }
        });
        for (const user of matchingUsers) {
            await sendEmail({
                studentEmail: user.email,
                studentName: user.name,
                jobTitle: jobTitle,
                companyName: company,
                jobDescription: jobDescription,
            });
        }
        res.status(201).json({ message: "Job posted successfully" });

    } catch (error) {
        console.error("Error posting job", error);
        res.status(500).json({ message: "Something went wrong" });
    }
};