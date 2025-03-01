import dotenv from "dotenv";
import transporter from "../config/nodemailer.js"; 
dotenv.config();

const sendEmail = async ({ studentEmail, studentName, jobTitle, companyName, jobDescription }) => {
    try {
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: studentEmail,
            subject: `New Job Alert: ${jobTitle} at ${companyName}`,
            html: `
            <p>Dear ${studentName},</p>
            <p> We found a job opportunity that matches your skills </p>
            <h3> ${jobTitle} at ${companyName}</h3>
            <p> ${jobDescription}</p>
            <p>Best regards,<br>Job Portal Team</p>`
        };
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${studentEmail}`);
    } catch (error) {
        console.error(`Error sending email to ${studentEmail}:`, error);
    }
};

export default sendEmail;