import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  LinearProgress,
  Box,
  Divider,
} from '@mui/material';
import { 
  Grain as GrainIcon,
  LocalFlorist as LocalFloristIcon,
  Spa as SpaIcon,
  Eco as EcoIcon
} from '@mui/icons-material';

const CropStatus = () => {
  const crops = [
    {
      id: 1,
      name: 'Royal Gala Apple',
      variety: 'Apple',
      stage: 'Harvesting',
      progress: 85,
      health: 'Excellent',
      area: '5 acres',
      estimatedYield: '25 tonnes',
      icon: <GrainIcon />,
      color: '#f44336',
    },
    {
      id: 2,
      name: 'Red Delicious Apple',
      variety: 'Apple',
      stage: 'Harvesting',
      progress: 70,
      health: 'Good',
      area: '4 acres',
      estimatedYield: '18 tonnes',
      icon: <GrainIcon />,
      color: '#e91e63',
    },
    {
      id: 3,
      name: 'Golden Delicious Apple',
      variety: 'Apple',
      stage: 'Ripening',
      progress: 60,
      health: 'Good',
      area: '3 acres',
      estimatedYield: '12 tonnes',
      icon: <GrainIcon />,
      color: '#ff9800',
    },
    {
      id: 4,
      name: 'Winter Vegetables',
      variety: 'Mixed Vegetables',
      stage: 'Growing',
      progress: 40,
      health: 'Good',
      area: '2 acres',
      estimatedYield: '8 tonnes',
      icon: <LocalFloristIcon />,
      color: '#4caf50',
    },
  ];

  const getStatusColor = (progress) => {
    if (progress >= 80) return 'success';
    if (progress >= 50) return 'warning';
    return 'info';
  };

  return (
    <Card>
      <CardHeader
        title="Crop Status"
        subheader="Current growing status across your farm"
      />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          {crops.map((crop) => (
            <Grid item xs={12} md={6} key={crop.id}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 1,
                  border: 1,
                  borderColor: 'divider',
                  height: '100%',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      bgcolor: `${crop.color}15`,
                      color: crop.color,
                      mr: 2,
                    }}
                  >
                    {crop.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle1">{crop.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {crop.area} • {crop.variety}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 0.5,
                    }}
                  >
                    <Typography variant="body2">{crop.stage}</Typography>
                    <Typography variant="body2">{crop.progress}%</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={crop.progress}
                    color={getStatusColor(crop.progress)}
                    sx={{ height: 6, borderRadius: 3 }}
                  />
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Health
                    </Typography>
                    <Typography variant="body2">{crop.health}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary">
                      Est. Yield
                    </Typography>
                    <Typography variant="body2">{crop.estimatedYield}</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Royal Gala apples are ready for harvest with excellent quality this season. 
            Red Delicious and Golden Delicious will reach optimal ripeness within the next 7-10 days. 
            Winter vegetable crops are progressing well with no significant pest issues detected.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CropStatus;
