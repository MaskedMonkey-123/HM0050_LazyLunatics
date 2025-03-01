<<<<<<< HEAD
import axios from "axios";
=======

>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Briefcase } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Jobs = () => {
  const { toast } = useToast();
  const [isPosting, setIsPosting] = useState(false);

<<<<<<< HEAD
  const [jobData, setJobData] = useState({
    title: "",
    location: "",
    employeeType: "",
    jobDescription: "",
    requiredSkills: "",
    salary: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setJobData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/recruiter/postJob", jobData);
      toast({
        title: "Success",
        description: "Job posted successfully!",
      });
      setIsPosting(false);
    } catch (error: any) {
      console.error("Error response:", error.response?.data || error.message);
      toast({
        title: "Error",
        description: "Failed to post job. Please try again.",
      });
    }
=======
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Job posted successfully!",
    });
    setIsPosting(false);
>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Job Postings</h1>
<<<<<<< HEAD
          <p className="text-muted-foreground">
            Manage and create job postings
          </p>
=======
          <p className="text-muted-foreground">Manage and create job postings</p>
>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
        </div>
        <Button onClick={() => setIsPosting(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Post New Job
        </Button>
      </div>

      {isPosting ? (
        <Card className="glass p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                placeholder="e.g., Senior Frontend Developer"
                required
<<<<<<< HEAD
                onChange={handleChange}
=======
>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g., Remote, New York, NY"
                  required
<<<<<<< HEAD
                  onChange={handleChange}
=======
>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Employment Type</Label>
                <Input
<<<<<<< HEAD
                  id="employeeType"
                  placeholder="e.g., Full-time, Contract"
                  required
                  onChange={handleChange}
=======
                  id="type"
                  placeholder="e.g., Full-time, Contract"
                  required
>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
                />
              </div>
            </div>

            <div className="space-y-2">
<<<<<<< HEAD
              <Label htmlFor="salary">Salary</Label>
              <Input
                id="salary"
                type="number"
                placeholder="Enter salary"
                required
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Job Description</Label>
              <Textarea
                id="jobDescription"
                placeholder="Enter detailed job description..."
                className="min-h-[200px]"
                required
                onChange={handleChange}
=======
              <Label htmlFor="description">Job Description</Label>
              <Textarea
                id="description"
                placeholder="Enter detailed job description..."
                className="min-h-[200px]"
                required
>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Requirements</Label>
              <Textarea
<<<<<<< HEAD
                id="requiredSkills"
                placeholder="Enter job requirements..."
                className="min-h-[150px]"
                required
                onChange={handleChange}
=======
                id="requirements"
                placeholder="Enter job requirements..."
                className="min-h-[150px]"
                required
>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsPosting(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Post Job</Button>
            </div>
          </form>
        </Card>
      ) : (
        <Card className="glass p-6">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Briefcase className="h-12 w-12 text-muted-foreground" />
            <h2 className="mt-4 text-xl font-semibold">No Jobs Posted Yet</h2>
            <p className="mt-2 text-muted-foreground">
              Create your first job posting to start receiving applications
            </p>
            <Button onClick={() => setIsPosting(true)} className="mt-6">
              <Plus className="mr-2 h-4 w-4" />
              Post New Job
            </Button>
          </div>
        </Card>
      )}
    </motion.div>
  );
};

export default Jobs;
