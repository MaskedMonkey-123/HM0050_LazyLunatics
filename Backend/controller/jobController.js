import jobModel from "../models/jobModel.js";
import userModel from "../models/userModel.js";
import sendEmail from "../services/emailService.js";
import JobSummary from "../models/jobSummaryModel.js";

// export const postJob = async (req, res) => {
//     try {
//         console.log("✅ Received request at /api/jobs/postjob");
//         console.log("Request Body:", req.body);

//         // Extract and rename fields to match schema
//         const { title, employeeType, companyName, jobDescription, requiredSkills, location, salary } = req.body;

//         if (!title || !employeeType || !companyName || !jobDescription || !requiredSkills || !location || !salary) {
//             return res.status(400).json({ message: "All fields are required" });
//         }

//         // Ensure requiredSkills is stored as an array
//         const skillsArray = Array.isArray(requiredSkills) ? requiredSkills : requiredSkills.split(",");

//         // Create job entry in the database
//         const newJob = await jobModel.create({
//             title, // ✅ Matches schema
//             employeeType,
//             companyName, // ✅ Matches schema
//             jobDescription,
//             requiredSkills: skillsArray,
//             location,
//             salary
//         });

//         // Create a job summary for notifications
//         const newJobSummary = new JobSummary({
//             title, // ✅ Correct field name
//             companyName, // ✅ Correct field name
//         });
//         await newJobSummary.save();

//         // Fetch all users from the database
//         const allUsers = await userModel.find({});
//         console.log("✅ All Users:", allUsers);

//         // Send email to all users
//         for (const user of allUsers) {
//             await sendEmail({
//                 studentEmail: user.email,
//                 studentName: user.name,
//                 jobTitle: title, // ✅ Use `title`, not `jobTitle`
//                 companyName, // ✅ Use `companyName`, not `company`
//                 jobDescription,
//             });
//             console.log(`📧 Email sent to ${user.email}`);
//         }

//         res.status(201).json({ message: "Job posted successfully", job: newJob });

//     } catch (error) {
//         console.error("❌ Error posting job:", error);
//         res.status(500).json({ message: "Something went wrong", error: error.message });
//     }
// };



export const postJob = async (req, res) => {
    try {
        // const { jobTitle, employeeType, company, jobDescription, requiredSkills, location, salary } = req.body;
        // const newJob = await jobModel.create({
        //     jobTitle,
        //     employeeType,
        //     company,
        //     jobDescription,
        //     requiredSkills,
        //     location,
        //     salary
        // });

        // const newJobSummary = new JobSummary({
        //     title: jobTitle,
        //     companyName: company,
        // });
        // await newJobSummary.save();
        console.log("✅ Received request at /api/jobs/postjob");
        const { title, employeeType, companyName, jobDescription, requiredSkills, location, salary } = req.body;
        const newJob = await jobModel.create({
            title,
            employeeType,
            companyName,
            jobDescription,
            requiredSkills,
            location,
            salary
        });

        const newJobSummary = new JobSummary({
            title,
            companyName,
        });
        await newJobSummary.save();

        // Fetch all users from the database
        const allUsers = await userModel.find({});
        console.log(allUsers);

        // Send email to all users
        for (const user of allUsers) {
            await sendEmail({
                studentEmail: user.email,
                studentName: user.name,
                jobTitle: title,
                companyName: companyName,
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

export const getJobSummaries = async (req, res) => {
    try {
        const jobSummaries = await JobSummary.find({});
        console.log(jobSummaries);
        res.status(200).json(jobSummaries);
    } catch (error) {
        console.error("Error fetching job summaries", error);
        res.status(500).json({ message: "Something went wrong" });
    }
}