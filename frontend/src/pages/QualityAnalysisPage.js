import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Meta from '../components/ui/Meta';

const QualityAnalysisPage = () => {
  return (
    <Container maxWidth="lg">
      <Meta title="Quality Analysis | Farmigo" />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          ML-based Food Quality Analysis
        </Typography>
        <Typography variant="body1" paragraph>
          This page will provide tools to analyze the quality of fruits and vegetables using machine learning.
        </Typography>
      </Box>
    </Container>
  );
};

export default QualityAnalysisPage;
