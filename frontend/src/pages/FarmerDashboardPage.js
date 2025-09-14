import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Button,
  Divider,
  Tabs,
  Tab,
  CircularProgress
} from '@mui/material';
import { 
  AccountCircle as AccountIcon,
  Insights as InsightsIcon, 
  Inventory as InventoryIcon
} from '@mui/icons-material';
import StatCards from '../components/dashboard/StatCards';
import RecentActivities from '../components/dashboard/RecentActivities';
import UpcomingOrders from '../components/dashboard/UpcomingOrders';
import RecentTransactions from '../components/dashboard/RecentTransactions';
import ProductPerformance from '../components/dashboard/ProductPerformance';
import WeatherWidget from '../components/dashboard/WeatherWidget';
import MarketPrices from '../components/dashboard/MarketPrices';
import CropCalendar from '../components/dashboard/CropCalendar';
import CropStatus from '../components/dashboard/CropStatus';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFarmerDashboardData } from '../redux/slices/farmerDashboardSlice';
import Meta from '../components/ui/Meta';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const FarmerDashboardPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const dispatch = useDispatch();
  
  const { 
    loading, 
    data: dashboardData, 
    error 
  } = useSelector(state => state.farmerDashboard);

  useEffect(() => {
    dispatch(fetchFarmerDashboardData());
  }, [dispatch]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="xl">
      <Meta title="Farmer Dashboard | Farmigo" />
      
      <Box sx={{ pt: 3, pb: 6 }}>
        {/* Farmer Profile Card */}
        <Paper 
          elevation={3} 
          sx={{ 
            p: 3, 
            mb: 4, 
            background: 'linear-gradient(120deg, #2E7D32 0%, #43A047 100%)',
            color: 'white'
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Avatar 
                sx={{ 
                  width: 80, 
                  height: 80,
                  bgcolor: 'white',
                  color: '#2E7D32'
                }}
              >
                <AccountIcon fontSize="large" />
              </Avatar>
            </Grid>
            <Grid item xs>
              <Typography variant="h4" gutterBottom>
                Welcome, Rajesh Kumar
              </Typography>
              <Typography variant="subtitle1">
                Organic Fruits & Vegetables Farmer | Himachal Pradesh
              </Typography>
            </Grid>
            <Grid item>
              <Button 
                variant="contained" 
                color="primary" 
                sx={{ 
                  bgcolor: 'white',
                  color: '#2E7D32',
                  '&:hover': {
                    bgcolor: '#e0e0e0',
                  }
                }}
              >
                View Profile
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Dashboard Stats */}
        <StatCards />

        {/* Dashboard Tabs */}
        <Paper sx={{ mt: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="Farmer Dashboard Tabs"
          >
            <Tab icon={<InsightsIcon />} label="Overview" />
            <Tab icon={<InventoryIcon />} label="Inventory & Sales" />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={8}>
                <Grid container spacing={3}>
                  {/* Weather Widget */}
                  <Grid item xs={12} md={6}>
                    <WeatherWidget />
                  </Grid>
                  
                  {/* Crop Calendar */}
                  <Grid item xs={12} md={6}>
                    <CropCalendar />
                  </Grid>
                  
                  {/* Crop Status */}
                  <Grid item xs={12}>
                    <CropStatus />
                  </Grid>
                  
                  {/* Market Prices */}
                  <Grid item xs={12}>
                    <MarketPrices />
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid item xs={12} lg={4}>
                <Grid container spacing={3}>
                  {/* Recent Activities */}
                  <Grid item xs={12}>
                    <RecentActivities />
                  </Grid>
                  
                  {/* Upcoming Orders */}
                  <Grid item xs={12}>
                    <UpcomingOrders />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={3}>
              {/* Product Performance */}
              <Grid item xs={12} lg={8}>
                <ProductPerformance />
              </Grid>
              
              {/* Recent Transactions */}
              <Grid item xs={12} lg={4}>
                <RecentTransactions />
              </Grid>
            </Grid>
          </TabPanel>
        </Paper>
      </Box>
    </Container>
  );
};

export default FarmerDashboardPage;
