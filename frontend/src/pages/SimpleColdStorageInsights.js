import React from 'react';
import { Container, Typography, Box, Paper, Grid, Card, CardContent } from '@mui/material';

const SimpleColdStorageInsights = () => {
  // Sample data for cold storage facilities
  const storageData = [
    {
      id: 1,
      name: 'Himalayan Fresh Storage',
      location: 'Shimla, Himachal Pradesh',
      capacity: '1200 tons',
      availability: '450 tons',
      temperature: '2°C',
      humidity: '85%'
    },
    {
      id: 2,
      name: 'Punjab Cold Chain',
      location: 'Amritsar, Punjab',
      capacity: '2500 tons',
      availability: '800 tons',
      temperature: '0°C',
      humidity: '90%'
    },
    {
      id: 3,
      name: 'Ganges Valley Storage',
      location: 'Haridwar, Uttarakhand',
      capacity: '800 tons',
      availability: '120 tons',
      temperature: '4°C',
      humidity: '80%'
    }
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ pt: 3, pb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Cold Storage Insights
        </Typography>
        
        <Paper sx={{ p: 3, mb: 4, bgcolor: '#e8f5e9' }}>
          <Typography variant="h6">
            Available Cold Storage Facilities
          </Typography>
          <Typography variant="body1">
            Find available cold storage options for your produce with real-time monitoring
          </Typography>
        </Paper>
        
        <Grid container spacing={3}>
          {storageData.map((storage) => (
            <Grid item xs={12} md={4} key={storage.id}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {storage.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {storage.location}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Capacity:</Typography>
                    <Typography variant="body2" fontWeight="bold">{storage.capacity}</Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Available Space:</Typography>
                    <Typography variant="body2" fontWeight="bold" color="success.main">
                      {storage.availability}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Temperature:</Typography>
                    <Typography variant="body2" fontWeight="bold">{storage.temperature}</Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2">Humidity:</Typography>
                    <Typography variant="body2" fontWeight="bold">{storage.humidity}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SimpleColdStorageInsights;
