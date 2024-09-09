import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Filters = ({ filter, setFilter }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <FormControl fullWidth>
        <InputLabel>Location</InputLabel>
        <Select
          value={filter.location}
          onChange={(e) => setFilter({ ...filter, location: e.target.value })}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="New York">New York</MenuItem>
          <MenuItem value="San Francisco">San Francisco</MenuItem>
          {/* Add more locations as needed */}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Job Type</InputLabel>
        <Select
          value={filter.jobType}
          onChange={(e) => setFilter({ ...filter, jobType: e.target.value })}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Full-time">Full-time</MenuItem>
          <MenuItem value="Part-time">Part-time</MenuItem>
          {/* Add more job types as needed */}
        </Select>
      </FormControl>
    </div>
  );
};

export default Filters;
