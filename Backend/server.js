import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from "./config/db.js";
<<<<<<< HEAD
import userRoutes from './routes/userRoutes.js';
import recruiterRoutes from './routes/recruiterRoutes.js';
=======
import userRoutes from './routes/userRoutes.js'
import recruiterRoutes from './routes/recruiterRoutes.js'
import jobpostRoutes from './routes/jobpostRoutes.js'



const app = express();
>>>>>>> 9f913928a64cb92053d36a3076f53d685604beaa
dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/user', userRoutes);
app.use('/api/recruiter', recruiterRoutes);
app.use('/api/recruiter',jobpostRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});