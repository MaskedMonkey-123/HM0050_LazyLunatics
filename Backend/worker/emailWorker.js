import Queue from 'bull';
import sendEmail from '../services/emailService';
import dotenv from 'dotenv';
dotenv.config();

const emailQueue = new Queue('emailQueue',{
    redis:{
        host:process.env.REDIS_HOST || "127.0.0.1" ,
        port:process.env.REDIS_PORT  || 6379
    }
});

emailQueue.process(async(Job,done)=>{
    try {
        await sendEmail(Job.data);
        done();
    } catch (error) {
        console.error("Error processing email job",error);
        done(error);
    }
});
export default emailQueue;