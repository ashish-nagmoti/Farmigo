import React from 'react';
import { Container, Typography, Box, Paper, Grid } from '@mui/material';

const SimpleFarmerDashboard = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ pt: 3, pb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Farmer Dashboard
        </Typography>
        
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5">
            Welcome, Rajesh Kumar
          </Typography>
          <Typography variant="subtitle1">
            Organic Fruits & Vegetables Farmer | Himachal Pradesh
          </Typography>
        </Paper>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Current Sales
              </Typography>
              <Typography variant="h4">
                ₹64,500
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Active Orders
              </Typography>
              <Typography variant="h4">
                12
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SimpleFarmerDashboard;
