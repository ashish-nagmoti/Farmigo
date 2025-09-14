import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider,
  Paper,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Bar } from 'react-chartjs-2';

const StateDetails = ({ stateData }) => {
  // Get years array
  const years = ['2017-18', '2018-19', '2019-20', '2020-21', '2021-22'];
  
  // Prepare data for the chart
  const chartData = {
    labels: years,
    datasets: [
      {
        label: 'Projects',
        data: years.map((year) => stateData[year].projects),
        backgroundColor: '#4CAF50',
        yAxisID: 'y',
      },
      {
        label: 'Capacity',
        data: years.map((year) => stateData[year].capacity),
        backgroundColor: '#FF8F00',
        yAxisID: 'y1',
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Projects and Capacity by Year',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'Projects',
        },
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: 'Capacity',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              {stateData.state}
            </Typography>
            <Divider sx={{ my: 2 }} />
            
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Summary
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText
                        primary="Total Projects"
                        secondary={stateData.totalProjects}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Total Capacity"
                        secondary={`${stateData.totalCapacity.toLocaleString()} metric tons`}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Average Capacity per Project"
                        secondary={`${Math.round(
                          stateData.totalCapacity / stateData.totalProjects
                        ).toLocaleString()} metric tons`}
                      />
                    </ListItem>
                  </List>
                </Paper>
                
                <Paper elevation={2} sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Year-wise Data
                  </Typography>
                  <List dense>
                    {years.map((year) => (
                      <ListItem key={year}>
                        <ListItemText
                          primary={year}
                          secondary={`Projects: ${
                            stateData[year].projects
                          } | Capacity: ${stateData[year].capacity.toLocaleString()} metric tons`}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ height: 400 }}>
                  <Bar data={chartData} options={chartOptions} />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default StateDetails;
