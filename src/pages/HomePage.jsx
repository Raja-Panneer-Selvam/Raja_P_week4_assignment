import React, { useState } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import Filters from '../components/Filters.jsx';
import JobList from '../components/JobList.jsx';
import JobForm from '../components/JobForm.jsx';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState({ location: 'All', jobType: 'All' });
  const [currentPage, setCurrentPage] = useState(1);

  const jobs = [
    // Sample job data for demonstration
    { id: 1, title: 'Frontend Developer', company: 'Google', location: 'New York', description: 'Lorem ipsum...' },
    { id: 2, title: 'Backend Developer', company: 'Facebook', location: 'San Francisco', description: 'Lorem ipsum...' },
    // Add more job objects
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      (filter.location === 'All' || job.location === filter.location) &&
      (filter.jobType === 'All' || job.jobType === filter.jobType) &&
      (searchQuery === '' || job.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const jobsPerPage = 5;
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const displayedJobs = filteredJobs.slice((currentPage - 1) * jobsPerPage, currentPage * jobsPerPage);

  const handlePageChange = (event, value) => setCurrentPage(value);

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filters filter={filter} setFilter={setFilter} />
      <JobList jobs={displayedJobs} currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      <JobForm />
    </div>
  );
};

export default HomePage;
