import React from "react";
import { useState } from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const { data: jobs = [], setData: setJobs } = useFetch(
    "https://intern-house-two.vercel.app/jobs",
    []
  );

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `https://intern-house-two.vercel.app/jobs/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        setJobs((prev) => prev.filter((job) => job._id !== id));
        toast.success("Job deleted successfully!");
      } else {
        toast.error("Failed to delete job.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <section className="container-fluid px-5">
        <form className=" mt-2 w-50" action="/products" method="GET">
          <div className="input-group ">
            <button
              type="submit"
              className="input-group-text bg-white border-end-0 "
              style={{ cursor: "pointer" }}
            >
              <i className="bi bi-search"></i>
            </button>
            <input
              type="text"
              placeholder="Search by job title..."
              name="q"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control border-start-0"
            />
          </div>
        </form>
      </section>
      <section className="container-fluid mt-2 px-5">
        <h1>All Jobs</h1>
        <div className="row">
          {jobs
            .filter((job) =>
              job.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((job) => (
              <div className="col-md-4 mb-3" key={job._id}>
                <div className="card">
                  <div className="card-body">
                    <h3>{job.title}</h3>
                    <p>
                      <strong>Company name: </strong>
                      {job.companyName}
                    </p>
                    <p>
                      <strong>Location: </strong>
                      {job.location}
                    </p>
                    <p>
                      <strong>Job Type:</strong>
                      {job.jobType}
                    </p>
                    <div className="d-flex gap-2">
                      <Link
                        className="btn btn-primary w-50"
                        to={`/jobs/${job._id}`}
                      >
                        See Details
                      </Link>
                      <button
                        className="btn btn-danger w-50"
                        onClick={() => handleDelete(job._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
