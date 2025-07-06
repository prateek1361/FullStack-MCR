import React from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom";

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const { data: job = {} } = useFetch(
    `https://intern-house-two.vercel.app/jobs/${jobId}`,
    {}
  );
  if (!job.title) {
    return <p className="container-fluid px-5 mt-3">Loading job details...</p>;
  }
  return (
    <>
      <div className="container-fluid px-5 py-2">
        <h1>{job.title}</h1>
        <div className="card mt-4">
          <div className="card-body">
            <p>
              <strong>Company:</strong> {job.companyName}
            </p>
            <p>
              <strong>Location:</strong> {job.location}
            </p>
            <p>
              <strong>Salary:</strong> {job.salary}
            </p>
            <p>
              <strong>Job Type:</strong> {job.jobType}
            </p>
            <p>
              <strong>Description:</strong> {job.description}
            </p>
            <p>
              <strong>Qualifications:</strong>{" "}
              <ol>
                {job.qualifications.split(". ").map((qualification, index) => (
                  <li key={index}>{qualification.trim()}</li>
                ))}
              </ol>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetailsPage;
