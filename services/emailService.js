import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter=nodemailer.createTransport({
    service:"Gmail",
    auth:
    {
        user:process.env.EMAIL_USER,
        pass:process.env.PASSWORD
    }
});

const sendEmail=async({studentEmail,studentName,jobTitle,companyName,jobDescription})=>{
    try{
        const mailOptions={
            from:process.env.EMAIL_USER,
            to:studentEmail,
            subject:`New Job Alert: ${jobTitle} at ${companyName}`,
            html:`
            <p>Dear ${studentName},</p>
            <p> We found a job opportunity that matches your skills </p>
            <h3> ${jobTitle} at ${companyName}</h3>
            <p> ${jobDescription}</p>
            <p>Best regards,<br>Job Portal Team</p>`
        }
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${studentEmail}`);

    }catch(error){
        console.error(`Error sending email to ${studentEmail}`);
    }
};
export default sendEmail;