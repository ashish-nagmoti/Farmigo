import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Avatar,
  Button,
  Tabs,
  Tab,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  TextField,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import Meta from '../components/ui/Meta';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const ProfilePage = () => {
  const [tabValue, setTabValue] = React.useState(0);

  // Mock user data (will be replaced with Redux state later)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    address: '123 Farmer Lane, Agricultural District, Delhi',
    userType: 'farmer',
    joinDate: 'September 1, 2025',
    profileImage: '',
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Profile update functionality will be implemented later
    console.log('Profile update submitted');
  };

  return (
    <Container component="main" maxWidth="lg">
      <Meta title="My Profile | Farmigo" />
      
      <Box sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar
                  sx={{ width: 100, height: 100, mb: 2, bgcolor: 'primary.main' }}
                  src={user.profileImage}
                >
                  {user.name.charAt(0)}
                </Avatar>
                <Typography variant="h5" gutterBottom>
                  {user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {user.userType.charAt(0).toUpperCase() + user.userType.slice(1)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Member since {user.joinDate}
                </Typography>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Email" secondary={user.email} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Phone" secondary={user.phone} />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Address" secondary={user.address} />
                </ListItem>
              </List>
              
              <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Edit Profile
              </Button>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Paper elevation={3}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="profile tabs"
                variant="fullWidth"
              >
                <Tab icon={<PersonIcon />} label="Account" />
                <Tab icon={<ShoppingBasketIcon />} label="Activities" />
                <Tab icon={<WarehouseIcon />} label="Storage" />
                <Tab icon={<SettingsIcon />} label="Settings" />
              </Tabs>
              
              <TabPanel value={tabValue} index={0}>
                <Typography variant="h6" gutterBottom>
                  Account Information
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        defaultValue={user.name.split(' ')[0]}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        defaultValue={user.name.split(' ')[1]}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        defaultValue={user.email}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Phone"
                        defaultValue={user.phone}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Address"
                        defaultValue={user.address}
                        multiline
                        rows={3}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                      >
                        Update Information
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
              
              <TabPanel value={tabValue} index={1}>
                <Typography variant="h6" gutterBottom>
                  Your Activities
                </Typography>
                <Typography variant="body1">
                  {user.userType === 'farmer' ? (
                    'You have no products listed in the marketplace yet.'
                  ) : user.userType === 'consumer' ? (
                    'You have not made any purchases yet.'
                  ) : (
                    'You have no cold storage facilities listed yet.'
                  )}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ mt: 2 }}
                >
                  {user.userType === 'farmer' ? 'Add Product' : 
                   user.userType === 'consumer' ? 'Browse Products' : 
                   'Add Cold Storage'}
                </Button>
              </TabPanel>
              
              <TabPanel value={tabValue} index={2}>
                <Typography variant="h6" gutterBottom>
                  Cold Storage Information
                </Typography>
                {user.userType === 'broker' ? (
                  <Typography variant="body1">
                    You have not added any cold storage facilities yet.
                  </Typography>
                ) : (
                  <Typography variant="body1">
                    You are currently not using any cold storage facilities.
                  </Typography>
                )}
                <Button 
                  variant="contained" 
                  color="primary" 
                  sx={{ mt: 2 }}
                >
                  {user.userType === 'broker' ? 'Add Storage Facility' : 'Find Storage'}
                </Button>
              </TabPanel>
              
              <TabPanel value={tabValue} index={3}>
                <Typography variant="h6" gutterBottom>
                  Account Settings
                </Typography>
                <Box component="form" sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Change Password"
                        type="password"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Confirm New Password"
                        type="password"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ mr: 1 }}
                      >
                        Update Password
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                      >
                        Delete Account
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </TabPanel>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProfilePage;
