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
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import {
  TrendingUp,
  Inventory,
  LocalShipping,
  Event,
  CheckCircle,
  WbSunny,
  Cloud,
  Opacity
} from '@mui/icons-material';

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

const EnhancedFarmerDashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  // Mock data to simulate API call
  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      const mockData = {
        farmer: {
          name: 'Rajesh Kumar',
          role: 'Organic Fruits & Vegetables Farmer',
          location: 'Shimla, Himachal Pradesh',
          profileImage: null, // would be an image URL in real app
          since: '2018',
          rating: 4.8
        },
        stats: {
          currentSales: 64500,
          activeOrders: 12,
          pendingShipments: 3,
          totalProducts: 8,
          coldStorageUsed: 6500,
          storageCapacity: 10000
        },
        weather: {
          current: {
            temp: 24,
            condition: 'Partly Cloudy',
            humidity: 65,
            precipitation: 20
          },
          forecast: [
            { day: 'Mon', temp: 24, condition: 'Partly Cloudy' },
            { day: 'Tue', temp: 26, condition: 'Sunny' },
            { day: 'Wed', temp: 22, condition: 'Rain' },
            { day: 'Thu', temp: 21, condition: 'Rain' },
            { day: 'Fri', temp: 25, condition: 'Sunny' },
          ]
        },
        crops: [
          { name: 'Apples', status: 'Harvesting', readiness: 95, area: '3.5 acres' },
          { name: 'Tomatoes', status: 'Growing', readiness: 65, area: '1.2 acres' },
          { name: 'Potatoes', status: 'Ready to harvest', readiness: 90, area: '2.0 acres' },
          { name: 'Peas', status: 'Growing', readiness: 45, area: '1.0 acres' },
        ],
        marketPrices: [
          { product: 'Apples', currentPrice: 85, previousPrice: 78, unit: 'kg' },
          { product: 'Tomatoes', currentPrice: 45, previousPrice: 50, unit: 'kg' },
          { product: 'Potatoes', currentPrice: 25, previousPrice: 22, unit: 'kg' },
          { product: 'Peas', currentPrice: 60, previousPrice: 55, unit: 'kg' },
        ],
        recentOrders: [
          { id: 'ORD-7845', customer: 'Fresh Mart Store', items: 3, amount: 12500, status: 'Delivered', date: '2025-09-10' },
          { id: 'ORD-7830', customer: 'Green Grocers', items: 5, amount: 18200, status: 'Shipped', date: '2025-09-08' },
          { id: 'ORD-7822', customer: 'Farm Direct Co-op', items: 2, amount: 8750, status: 'Processing', date: '2025-09-07' },
          { id: 'ORD-7816', customer: 'Organic Wholesalers', items: 4, amount: 15300, status: 'Delivered', date: '2025-09-05' },
        ],
        upcomingTasks: [
          { task: 'Harvest apples in North Block', due: '2025-09-15', priority: 'High' },
          { task: 'Irrigation maintenance', due: '2025-09-16', priority: 'Medium' },
          { task: 'Meet with Cold Storage manager', due: '2025-09-18', priority: 'Medium' },
          { task: 'Order new packaging materials', due: '2025-09-20', priority: 'Low' },
        ]
      };
      
      setDashboardData(mockData);
      setLoading(false);
    }, 1000);
  }, []);

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
                {dashboardData.farmer.name.charAt(0)}
              </Avatar>
            </Grid>
            <Grid item xs>
              <Typography variant="h4" gutterBottom>
                Welcome, {dashboardData.farmer.name}
              </Typography>
              <Typography variant="subtitle1">
                {dashboardData.farmer.role} | {dashboardData.farmer.location}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Typography variant="body2" sx={{ mr: 2 }}>
                  Member since {dashboardData.farmer.since}
                </Typography>
                <Typography variant="body2">
                  Rating: {dashboardData.farmer.rating}/5.0
                </Typography>
              </Box>
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

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">Current Sales</Typography>
                  <Typography variant="h4" sx={{ my: 1 }}>₹{dashboardData.stats.currentSales.toLocaleString()}</Typography>
                  <Typography variant="body2" color="success.main">+12% from last month</Typography>
                </Box>
                <Avatar sx={{ bgcolor: 'success.light' }}>
                  <TrendingUp />
                </Avatar>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">Active Orders</Typography>
                  <Typography variant="h4" sx={{ my: 1 }}>{dashboardData.stats.activeOrders}</Typography>
                  <Typography variant="body2" color="text.secondary">{dashboardData.stats.pendingShipments} pending shipment</Typography>
                </Box>
                <Avatar sx={{ bgcolor: 'primary.light' }}>
                  <LocalShipping />
                </Avatar>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">Products</Typography>
                  <Typography variant="h4" sx={{ my: 1 }}>{dashboardData.stats.totalProducts}</Typography>
                  <Typography variant="body2" color="text.secondary">In your inventory</Typography>
                </Box>
                <Avatar sx={{ bgcolor: 'info.light' }}>
                  <Inventory />
                </Avatar>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Paper sx={{ p: 2, height: '100%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">Cold Storage Used</Typography>
                  <Typography variant="h4" sx={{ my: 1 }}>{dashboardData.stats.coldStorageUsed.toLocaleString()} kg</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <LinearProgress 
                      variant="determinate" 
                      value={(dashboardData.stats.coldStorageUsed / dashboardData.stats.storageCapacity) * 100} 
                      sx={{ flexGrow: 1, mr: 1 }} 
                    />
                    <Typography variant="body2" color="text.secondary">
                      {Math.round((dashboardData.stats.coldStorageUsed / dashboardData.stats.storageCapacity) * 100)}%
                    </Typography>
                  </Box>
                </Box>
                <Avatar sx={{ bgcolor: 'secondary.light' }}>
                  <Inventory />
                </Avatar>
              </Box>
            </Paper>
          </Grid>
        </Grid>

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
            <Tab icon={<TrendingUp />} label="Overview" />
            <Tab icon={<Inventory />} label="Crops & Market" />
          </Tabs>

          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={8}>
                <Grid container spacing={3}>
                  {/* Weather Widget */}
                  <Grid item xs={12}>
                    <Paper sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom>Weather Forecast</Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Box sx={{ textAlign: 'center', mr: 3 }}>
                              {dashboardData.weather.current.condition.includes('Sunny') ? (
                                <WbSunny sx={{ fontSize: 48, color: 'warning.main' }} />
                              ) : dashboardData.weather.current.condition.includes('Cloud') ? (
                                <Cloud sx={{ fontSize: 48, color: 'text.secondary' }} />
                              ) : (
                                <Opacity sx={{ fontSize: 48, color: 'info.main' }} />
                              )}
                            </Box>
                            <Box>
                              <Typography variant="h3">{dashboardData.weather.current.temp}°C</Typography>
                              <Typography variant="body1">{dashboardData.weather.current.condition}</Typography>
                              <Typography variant="body2" color="text.secondary">
                                Humidity: {dashboardData.weather.current.humidity}% | 
                                Precipitation: {dashboardData.weather.current.precipitation}%
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            {dashboardData.weather.forecast.map((day, index) => (
                              <Box key={index} sx={{ textAlign: 'center' }}>
                                <Typography variant="body2">{day.day}</Typography>
                                <Box sx={{ my: 1 }}>
                                  {day.condition.includes('Sunny') ? (
                                    <WbSunny sx={{ color: 'warning.main' }} />
                                  ) : day.condition.includes('Cloud') ? (
                                    <Cloud sx={{ color: 'text.secondary' }} />
                                  ) : (
                                    <Opacity sx={{ color: 'info.main' }} />
                                  )}
                                </Box>
                                <Typography variant="body2">{day.temp}°C</Typography>
                              </Box>
                            ))}
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  
                  {/* Recent Orders */}
                  <Grid item xs={12}>
                    <Paper sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom>Recent Orders</Typography>
                      <TableContainer>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>Order ID</TableCell>
                              <TableCell>Customer</TableCell>
                              <TableCell align="right">Amount</TableCell>
                              <TableCell align="right">Status</TableCell>
                              <TableCell align="right">Date</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {dashboardData.recentOrders.map((order) => (
                              <TableRow key={order.id}>
                                <TableCell>{order.id}</TableCell>
                                <TableCell>{order.customer}</TableCell>
                                <TableCell align="right">₹{order.amount.toLocaleString()}</TableCell>
                                <TableCell align="right">
                                  <Box sx={{ 
                                    display: 'inline-block', 
                                    px: 1, 
                                    py: 0.5, 
                                    borderRadius: 1,
                                    bgcolor: 
                                      order.status === 'Delivered' ? 'success.light' : 
                                      order.status === 'Shipped' ? 'info.light' : 
                                      'warning.light',
                                    color: 
                                      order.status === 'Delivered' ? 'success.dark' : 
                                      order.status === 'Shipped' ? 'info.dark' : 
                                      'warning.dark',
                                  }}>
                                    {order.status}
                                  </Box>
                                </TableCell>
                                <TableCell align="right">{order.date}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              
              <Grid item xs={12} lg={4}>
                <Grid container spacing={3}>
                  {/* Upcoming Tasks */}
                  <Grid item xs={12}>
                    <Paper sx={{ p: 2, height: '100%' }}>
                      <Typography variant="h6" gutterBottom>
                        Upcoming Tasks
                      </Typography>
                      <List>
                        {dashboardData.upcomingTasks.map((task, index) => (
                          <React.Fragment key={index}>
                            <ListItem>
                              <ListItemIcon>
                                <Event color={
                                  task.priority === 'High' ? 'error' : 
                                  task.priority === 'Medium' ? 'warning' : 
                                  'info'
                                } />
                              </ListItemIcon>
                              <ListItemText 
                                primary={task.task} 
                                secondary={`Due: ${task.due} | Priority: ${task.priority}`}
                              />
                            </ListItem>
                            {index < dashboardData.upcomingTasks.length - 1 && <Divider />}
                          </React.Fragment>
                        ))}
                      </List>
                      <Box sx={{ mt: 2, textAlign: 'center' }}>
                        <Button variant="outlined" size="small">
                          View All Tasks
                        </Button>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={3}>
              {/* Crop Status */}
              <Grid item xs={12} lg={6}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>Crop Status</Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Crop</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Area</TableCell>
                          <TableCell align="right">Readiness</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {dashboardData.crops.map((crop) => (
                          <TableRow key={crop.name}>
                            <TableCell>{crop.name}</TableCell>
                            <TableCell>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ 
                                  width: 10, 
                                  height: 10, 
                                  borderRadius: '50%', 
                                  bgcolor: 
                                    crop.readiness > 85 ? 'success.main' : 
                                    crop.readiness > 50 ? 'warning.main' : 
                                    'info.main',
                                  mr: 1
                                }} />
                                {crop.status}
                              </Box>
                            </TableCell>
                            <TableCell>{crop.area}</TableCell>
                            <TableCell align="right">
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <LinearProgress 
                                  variant="determinate" 
                                  value={crop.readiness}
                                  sx={{ 
                                    flexGrow: 1, 
                                    mr: 1,
                                    height: 8,
                                    borderRadius: 1,
                                    bgcolor: 'grey.200',
                                    '& .MuiLinearProgress-bar': {
                                      bgcolor: 
                                        crop.readiness > 85 ? 'success.main' : 
                                        crop.readiness > 50 ? 'warning.main' : 
                                        'info.main',
                                    }
                                  }}
                                />
                                <Typography variant="body2">{crop.readiness}%</Typography>
                              </Box>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
              
              {/* Market Prices */}
              <Grid item xs={12} lg={6}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>Market Prices</Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Product</TableCell>
                          <TableCell align="right">Current Price</TableCell>
                          <TableCell align="right">Previous</TableCell>
                          <TableCell align="right">Change</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {dashboardData.marketPrices.map((item) => {
                          const change = ((item.currentPrice - item.previousPrice) / item.previousPrice) * 100;
                          return (
                            <TableRow key={item.product}>
                              <TableCell>{item.product}</TableCell>
                              <TableCell align="right">₹{item.currentPrice}/{item.unit}</TableCell>
                              <TableCell align="right">₹{item.previousPrice}/{item.unit}</TableCell>
                              <TableCell 
                                align="right"
                                sx={{ 
                                  color: change > 0 ? 'success.main' : change < 0 ? 'error.main' : 'text.primary',
                                  fontWeight: 'medium'
                                }}
                              >
                                {change > 0 ? '+' : ''}{change.toFixed(1)}%
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Box sx={{ mt: 2, textAlign: 'right' }}>
                    <Typography variant="caption" color="text.secondary">
                      Last updated: September 14, 2025
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </TabPanel>
        </Paper>
      </Box>
    </Container>
  );
};

export default EnhancedFarmerDashboard;
