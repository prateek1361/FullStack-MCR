import React from "react";
import { toast } from "react-toastify";
import { useState } from "react";

const PostAJob = () => {
  const [jobData, setJobData] = useState({
    title: "",
    companyName: "",
    location: "",
    salary: "",
    jobType: "",
    description: "",
    qualifications: "",
  });
  console.log(jobData);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://intern-house-two.vercel.app/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...jobData, salary: Number(jobData.salary) }),
      });

      if (res.ok) {
        toast.success("Job posted successfully!");
      } else {
        const errorData = await res.json();
        toast.error(errorData.error || "Failed to post job");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container-fluid px-5 mt-4">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-2">
          <label className="form-label">Job Title:</label>
          <input
            type="text"
            name="title"
            className="form-control"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Company Name:</label>
          <input
            type="text"
            name="companyName"
            className="form-control"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Location:</label>
          <input
            type="text"
            name="location"
            className="form-control"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Salary:</label>
          <input
            type="number"
            name="salary"
            className="form-control"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Job Type</label>
          <select
            name="jobType"
            className="form-select"
            required
            onChange={handleChange}
            value={jobData.jobType}
          >
            <option value="">Select job type</option>
            <option value="Full-time (On-site)">Full-time (On-site)</option>
            <option value="Part-time (On-site)">Part-time (On-site)</option>
            <option value="Full-time (Remote)">Full-time (Remote)</option>
            <option value="Part-time (Remote)">Part-time (Remote)</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="form-label">Job Description:</label>
          <textarea
            name="description"
            className="form-control"
            rows="3"
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Job Qualifications:</label>
          <textarea
            name="qualifications"
            className="form-control"
            rows="3"
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostAJob;
