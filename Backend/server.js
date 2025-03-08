import express from "express"
import cors from 'cors'
import 'dotenv/config'
import bodyparser from 'body-parser'
import connectDB from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import recruiterRoutes from './routes/recruiterRoutes.js'





import jobroutes from './routes/Jobroutes.js'




const app = express();


connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

app.use('/api/user', userRoutes);
app.use('/api/recruiter', recruiterRoutes,jobroutes);


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