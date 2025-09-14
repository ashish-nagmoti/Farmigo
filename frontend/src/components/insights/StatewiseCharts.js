import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Paper,
  Grid,
} from '@mui/material';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatewiseCharts = ({ data }) => {
  // Sort data by total projects descending and take top 10 states
  const topStatesByProjects = [...data]
    .sort((a, b) => b.totalProjects - a.totalProjects)
    .slice(0, 10);

  // Sort data by total capacity descending and take top 10 states
  const topStatesByCapacity = [...data]
    .sort((a, b) => b.totalCapacity - a.totalCapacity)
    .slice(0, 10);

  // Project chart data
  const projectsChartData = {
    labels: topStatesByProjects.map(item => item.state),
    datasets: [
      {
        label: 'Total Projects',
        data: topStatesByProjects.map(item => item.totalProjects),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Capacity chart data
  const capacityChartData = {
    labels: topStatesByCapacity.map(item => item.state),
    datasets: [
      {
        label: 'Total Capacity (MT)',
        data: topStatesByCapacity.map(item => item.totalCapacity),
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const projectsOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Top 10 States by Number of Cold Storage Projects',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Projects'
        }
      }
    }
  };

  const capacityOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Top 10 States by Cold Storage Capacity',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Capacity (Metric Tons)'
        }
      }
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Top States by Cold Storage Projects
          </Typography>
          <Box sx={{ height: 400 }}>
            <Bar data={projectsChartData} options={projectsOptions} />
          </Box>
        </Paper>
      </Grid>
      
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Top States by Cold Storage Capacity
          </Typography>
          <Box sx={{ height: 400 }}>
            <Bar data={capacityChartData} options={capacityOptions} />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default StatewiseCharts;
