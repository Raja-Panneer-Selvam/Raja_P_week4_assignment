import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const JobCard = ({ job }) => {
  return (
    <Card style={{ margin: '10px 0' }}>
      <CardContent>
        <Typography variant="h6">{job.title}</Typography>
        <Typography variant="body2">{job.company}</Typography>
        <Typography variant="body2">{job.location}</Typography>
        <Typography variant="body2">{job.description}</Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Apply
        </Button>
      </CardContent>
    </Card>
  );
};

export default JobCard;
