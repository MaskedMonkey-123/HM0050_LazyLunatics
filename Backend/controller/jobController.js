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

        // Fetch all users from the database
        const allUsers = await userModel.find({});
        console.log(allUsers);

        // Send email to all users
        for (const user of allUsers) {
            await sendEmail({
                studentEmail: user.email,
                studentName: user.name,
                jobTitle: jobTitle,
                companyName: company,
                jobDescription: jobDescription,
            });
            console.log(`Email sent to ${user.email}`);
        }

        res.status(201).json({ message: "Job posted successfully", job: newJob });

    } catch (error) {
        console.error("Error posting job", error);
        res.status(500).json({ message: "Something went wrong" });
    }
};
//get function routes for getting job