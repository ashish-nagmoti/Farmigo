import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Meta from '../components/ui/Meta';

const ColdStorageCreatePage = () => {
  return (
    <Container maxWidth="lg">
      <Meta title="Create Cold Storage | Farmigo" />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create Cold Storage
        </Typography>
        <Typography variant="body1" paragraph>
          This page will contain a form to create a new cold storage facility.
        </Typography>
      </Box>
    </Container>
  );
};

export default ColdStorageCreatePage;
