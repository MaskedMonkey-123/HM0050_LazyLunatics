
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setTimeout(() => {
      navigate(`/${role.toLowerCase()}/login`);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/20">
      {/* Navigation Bar */}
<<<<<<< HEAD
      <nav className="p-4 flex justify-end">
        <div className="space-x-4">
          <Button variant="outline" asChild>
            <Link to="/employee/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/employee/signup">Sign Up</Link>
          </Button>
        </div>
      </nav>
=======
      {/* Navigation Bar */}
<nav className="p-4 flex justify-between bg-white fixed w-full top-0 z-50">
  {/* Logo */}
  <h1 className="text-xl font-bold text-primary cursor-pointer">SkillMatcher</h1>

  {/* Navigation Links */}
  <div className="space-x-6">
    <a href="#about" className="text-gray-700 hover:text-primary font-medium">About</a>
    <a href="#contact" className="text-gray-700 hover:text-primary font-medium">Contact Us</a>
    
    {/* Login & Signup Buttons */}
    <Button variant="outline" asChild>
      <Link to="/employee/login">Login</Link>
    </Button>
    <Button asChild>
      <Link to="/employee/signup">Sign Up</Link>
    </Button>
  </div>
</nav>

>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7

{/* 
      <nav className="p-4 flex justify-end">
  <div className="space-x-4">
    <Button variant="outline" asChild>
      <Link to="/employee/login">Employee Login</Link>
    </Button>
    <Button asChild>
      <Link to="/recruiter/login">Recruiter Login</Link>
    </Button>
    <Button asChild>
      <Link to="/employee/signup">Employee Signup</Link>
    </Button>
    <Button asChild>
      <Link to="/recruiter/signup">Recruiter Signup</Link>
    </Button>
  </div>
</nav> */}


      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Welcome to SkillMatcher
          </h1>
          <p className="text-lg text-muted-foreground">
<<<<<<< HEAD
=======
            SkillMatcher<br></br>
>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
            Connect with opportunities that match your skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card
              className={`glass p-6 hover-scale cursor-pointer ${
                selectedRole === "Employee" ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => handleRoleSelect("Employee")}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">I'm an Employee</h2>
                <p className="text-muted-foreground text-center">
                  Find jobs that match your skills and experience
                </p>
                <Button variant="outline" className="mt-4">
                  Get Started
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card
              className={`glass p-6 hover-scale cursor-pointer ${
                selectedRole === "Recruiter" ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => handleRoleSelect("Recruiter")}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold">I'm a Recruiter</h2>
                <p className="text-muted-foreground text-center">
                  Post jobs and find the perfect candidates
                </p>
                <Button variant="outline" className="mt-4">
                  Get Started
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-sm text-muted-foreground"
        >
          By continuing, you agree to our Terms of Service and Privacy Policy
        </motion.p>
      </div>
<<<<<<< HEAD
=======
              
      <div id="about" className="py-16 px-6 bg-gray-100 text-center">
  <h2 className="text-3xl font-bold mb-4">About SkillMatcher</h2>
  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
    SkillMatcher is a cutting-edge placement portal designed to bridge the gap between talented professionals 
    and top recruiters. Whether you're a job seeker looking for the perfect opportunity or a recruiter 
    searching for the right candidate, we make the process seamless and efficient.
  </p>
  <div className="mt-6 flex flex-wrap justify-center gap-6">
    <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">For Employees</h3>
      <p className="text-gray-600">
        Discover job openings tailored to your skills and experience. Build your profile, 
        apply with ease, and land your dream job.
      </p>
    </div>
    <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">For Recruiters</h3>
      <p className="text-gray-600">
        Post job listings, filter candidates efficiently, and find the best talent 
        for your company using our smart matching system.
      </p>
    </div>
  </div>
</div>


      {/* Contact Section */}
<div id="contact" className="py-16 px-6 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
    <p className="text-lg text-gray-700 mb-8">
      Have any questions or need assistance? Feel free to reach out to us. We're here to help!
    </p>

    {/* Contact Details */}
    <div className="grid md:grid-cols-2 gap-8 text-left">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Get in Touch</h3>
        <p>Email: <a href="mailto:support@skillmatcher.com" className="text-primary font-medium">support@skillmatcher.com</a></p>
        <p>Phone: <span className="font-medium">+91 9999999999</span></p>
        <p>Sector 26 Pradhikaran Nigdi Pune</p>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg h-32"></textarea>
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80">
            Send Message
          </button>
        </form>
      </div>
    </div>

    {/* Social Links */}
    <div className="mt-12 space-x-6">
      <a href="#" className="text-primary font-medium">Facebook</a>
      <a href="#" className="text-primary font-medium">Twitter</a>
      <a href="#" className="text-primary font-medium">LinkedIn</a>
    </div>
  </div>
</div>


>>>>>>> 33309ae91219871e7aa0691aa9e510a1bb2963c7
    </div>
  );
};

export default Index;
