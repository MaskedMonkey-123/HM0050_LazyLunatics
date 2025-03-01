import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  //recruiterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  employeeType: { type: String, required: true }, // Full-time, Part-time
  location: { type: String, required: true },
  jobDescription: { type: String, required: true },
  requiredSkills: [{ type: String, required: true }],
  salary: { type: Number, required: true},
});

const Job = mongoose.model('Job', jobSchema);
export default Job;
