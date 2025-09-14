import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const InsightsSummaryCards = ({ summary }) => {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            height: '100%',
            background: 'linear-gradient(45deg, #4CAF50 30%, #7CC47F 90%)',
            color: 'white',
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h6" component="div">
                Total Projects
              </Typography>
              <StorageIcon fontSize="large" />
            </Box>
            <Typography variant="h3" component="div" sx={{ mt: 2 }}>
              {summary.totalProjects}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Cold storage projects sanctioned from 2017-22
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            height: '100%',
            background: 'linear-gradient(45deg, #FF8F00 30%, #FFB347 90%)',
            color: 'white',
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h6" component="div">
                Total Capacity
              </Typography>
              <SquareFootIcon fontSize="large" />
            </Box>
            <Typography variant="h3" component="div" sx={{ mt: 2 }}>
              {(summary.totalCapacity / 1000000).toFixed(2)}M
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Total capacity in metric tons
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            height: '100%',
            background: 'linear-gradient(45deg, #2196F3 30%, #64B5F6 90%)',
            color: 'white',
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h6" component="div">
                Top State
              </Typography>
              <LocationOnIcon fontSize="large" />
            </Box>
            <Typography variant="h3" component="div" sx={{ mt: 2 }}>
              {summary.stateWithMostProjects}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {summary.maxProjects} projects sanctioned
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            height: '100%',
            background: 'linear-gradient(45deg, #9C27B0 30%, #BA68C8 90%)',
            color: 'white',
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h6" component="div">
                Highest Capacity
              </Typography>
              <TrendingUpIcon fontSize="large" />
            </Box>
            <Typography variant="h3" component="div" sx={{ mt: 2 }}>
              {summary.stateWithHighestCapacity}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {(summary.maxCapacity / 1000).toFixed(1)}K metric tons
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default InsightsSummaryCards;
