import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Icon,
  LinearProgress,
  Divider,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  Inventory as InventoryIcon,
  LocalShipping as LocalShippingIcon,
  MonetizationOn as MonetizationOnIcon,
  PieChart as PieChartIcon,
} from '@mui/icons-material';

const StatCards = () => {
  return (
    <Grid container spacing={3}>
      {/* Total Sales */}
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography color="textSecondary" variant="subtitle2" gutterBottom>
                  Total Sales
                </Typography>
                <Typography variant="h4">₹64,500</Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: 'primary.light',
                  borderRadius: '50%',
                  height: 48,
                  width: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MonetizationOnIcon color="primary" />
              </Box>
            </Box>
            
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
              <TrendingUpIcon fontSize="small" color="success" />
              <Typography variant="body2" color="success.main" sx={{ ml: 0.5 }}>
                +15.6%
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                vs last month
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Harvest Status */}
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography color="textSecondary" variant="subtitle2" gutterBottom>
                  Harvest Status
                </Typography>
                <Typography variant="h4">75%</Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: 'success.light',
                  borderRadius: '50%',
                  height: 48,
                  width: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <InventoryIcon color="success" />
              </Box>
            </Box>
            
            <Box sx={{ mt: 1.5 }}>
              <LinearProgress
                variant="determinate"
                value={75}
                color="success"
                sx={{ height: 8, borderRadius: 4 }}
              />
            </Box>
            
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              Apple crop: 2 weeks to completion
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Active Orders */}
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography color="textSecondary" variant="subtitle2" gutterBottom>
                  Active Orders
                </Typography>
                <Typography variant="h4">12</Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: 'warning.light',
                  borderRadius: '50%',
                  height: 48,
                  width: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <LocalShippingIcon color="warning" />
              </Box>
            </Box>
            
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
              <TrendingUpIcon fontSize="small" color="success" />
              <Typography variant="body2" color="success.main" sx={{ ml: 0.5 }}>
                +3
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                new orders this week
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Profit Margin */}
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box>
                <Typography color="textSecondary" variant="subtitle2" gutterBottom>
                  Profit Margin
                </Typography>
                <Typography variant="h4">32.8%</Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: 'info.light',
                  borderRadius: '50%',
                  height: 48,
                  width: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <PieChartIcon color="info" />
              </Box>
            </Box>
            
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
              <TrendingDownIcon fontSize="small" color="error" />
              <Typography variant="body2" color="error.main" sx={{ ml: 0.5 }}>
                -2.3%
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                vs previous season
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default StatCards;
