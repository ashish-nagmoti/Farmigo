import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Meta from '../components/ui/Meta';

const StandardsPage = () => {
  return (
    <Container maxWidth="lg">
      <Meta title="Food Safety Standards | Farmigo" />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Food Safety Standards
        </Typography>
        <Typography variant="body1" paragraph>
          This page will provide comprehensive information on food safety standards, regulations, and best practices.
        </Typography>
      </Box>
    </Container>
  );
};

export default StandardsPage;
