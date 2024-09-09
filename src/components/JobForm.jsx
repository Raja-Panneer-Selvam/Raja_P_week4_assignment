import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const JobForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        style={{ marginBottom: '20px' }}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default JobForm;
