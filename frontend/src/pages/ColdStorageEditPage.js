import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Meta from '../components/ui/Meta';

const ColdStorageEditPage = () => {
  return (
    <Container maxWidth="lg">
      <Meta title="Edit Cold Storage | Farmigo" />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Edit Cold Storage
        </Typography>
        <Typography variant="body1" paragraph>
          This page will contain a form to edit an existing cold storage facility.
        </Typography>
      </Box>
    </Container>
  );
};

export default ColdStorageEditPage;
