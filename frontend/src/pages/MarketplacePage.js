import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Meta from '../components/ui/Meta';

const MarketplacePage = () => {
  return (
    <Container maxWidth="lg">
      <Meta title="Marketplace | Farmigo" />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Marketplace
        </Typography>
        <Typography variant="body1" paragraph>
          This page will display agricultural products available for purchase directly from farmers.
        </Typography>
      </Box>
    </Container>
  );
};

export default MarketplacePage;
