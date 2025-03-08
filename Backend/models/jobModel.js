import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({



  jobTitle: { type: String, required: true },
  employeeType: { type: String, required: true },
  salary: { type: Number, required: true },
  jobDescription: { type: String }, 
  company: { type: String },     
  requiredSkills: { type: [String], required: true },
  location: { type: String },
  postedAt: { type: Date, default: Date.now }

});

const Job = mongoose.model('Job', jobSchema);
export default Job;
