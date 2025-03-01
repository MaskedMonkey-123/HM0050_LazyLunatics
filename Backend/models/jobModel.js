import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
<<<<<<< HEAD
  //recruiterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
=======
  recruiterId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
  title: { type: String, required: true },
  employeeType: { type: String, required: true }, // Full-time, Part-time
  location: { type: String, required: true },
  jobDescription: { type: String, required: true },
  requiredSkills: [{ type: String, required: true }],
<<<<<<< HEAD
  salary: { type: Number, required: true},
=======
  createdAt: { type: Date, default: Date.now }
>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
});

const Job = mongoose.model('Job', jobSchema);
export default Job;
