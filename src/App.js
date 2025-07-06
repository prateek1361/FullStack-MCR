import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import JobDetailsPage from "./pages/JobDetailsPage";
import PostAJob from "./pages/PostAJob";

export default function App() {
  return (
    <Router>
      <Header />
      <ToastContainer position="top-center" autoClose={1500} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs/:jobId" element={<JobDetailsPage />} />
        <Route path="/postAJob" element={<PostAJob />} />
      </Routes>
    </Router>
  );
}
