import express from "express"
import cors from 'cors'
import 'dotenv/config'
import bodyparser from 'body-parser'
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import recruiterRoutes from './routes/recruiterRoutes.js'
import jobroutes from './routes/jobroutes.js'

//import { jobpost } from "./controller/recruiterController.js";




const app = express();
dotenv.config();

connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

app.use('/api/user', userRoutes);
app.use('/api/recruiter', recruiterRoutes);
//app.use('/api/recruiter',jobroutes);

app.use('/api/jobs',jobroutes);


app.get('/', (req, res) => {
    res.send('Hello World');
});

const port = process.env.PORT || 3000;
app._router.stack.forEach((r) => {
    if (r.route) {
      console.log(`Registered route: ${r.route.stack[0].method.toUpperCase()} ${r.route.path}`);
    }
  });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});