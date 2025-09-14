import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Meta from '../components/ui/Meta';

const ProductDetailsPage = () => {
  return (
    <Container maxWidth="lg">
      <Meta title="Product Details | Farmigo" />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Product Details
        </Typography>
        <Typography variant="body1" paragraph>
          This page will display detailed information about a specific agricultural product.
        </Typography>
      </Box>
    </Container>
  );
};

export default ProductDetailsPage;
