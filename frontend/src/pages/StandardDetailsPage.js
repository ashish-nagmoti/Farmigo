import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Meta from '../components/ui/Meta';

const StandardDetailsPage = () => {
  return (
    <Container maxWidth="lg">
      <Meta title="Standard Details | Farmigo" />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Standard Details
        </Typography>
        <Typography variant="body1" paragraph>
          This page will provide detailed information about a specific food safety standard.
        </Typography>
      </Box>
    </Container>
  );
};

export default StandardDetailsPage;
