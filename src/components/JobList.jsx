import React from "react";
import { Pagination } from "@mui/material";
import JobCard from "./JobCard.jsx";

const JobList = ({ jobs, currentPage, totalPages, onPageChange }) => {
  return (
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
        color="primary"
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default JobList;
