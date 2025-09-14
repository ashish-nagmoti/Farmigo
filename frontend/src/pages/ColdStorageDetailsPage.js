import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Divider,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Rating,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import {
  DeviceThermostat as DeviceThermostatIcon,
  LocationOn as LocationOnIcon,
  SquareFoot as SquareFootIcon,
  People as PeopleIcon,
  AccessTime as AccessTimeIcon,
  ElectricBolt as ElectricBoltIcon,
  Security as SecurityIcon
} from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import Meta from '../components/ui/Meta';

// Mock data for a cold storage facility
const coldStorage = {
  id: 1,
  name: 'Himalayan Cold Storage',
  description: 'State-of-the-art cold storage facility with multiple temperature zones for various agricultural products. Equipped with advanced cooling systems and backup generators for uninterrupted operation.',
  location: 'Delhi, India',
  fullAddress: '123 Cold Storage Complex, Industrial Area, Delhi - 110001, India',
  temperature: {
    freezer: '-18°C to -22°C',
    chiller: '0°C to 4°C',
    controlledAtmosphere: '8°C to 12°C'
  },
  capacity: '5000 metric tons',
  available: '2000 metric tons',
  image: '/images/cold-storage-1.jpg',
  gallery: [
    '/images/cold-storage-interior-1.jpg',
    '/images/cold-storage-exterior-1.jpg',
    '/images/cold-storage-loading-1.jpg',
  ],
  features: [
    'Multiple temperature zones',
    '24/7 power backup',
    'Advanced monitoring system',
    'Loading/unloading facilities',
    'Pest control treatment',
    'Fire safety systems',
    'Security surveillance'
  ],
  products: [
    'Fruits',
    'Vegetables',
    'Dairy',
    'Meat',
    'Processed Foods'
  ],
  pricing: [
    {
      type: 'Short term (1-3 months)',
      price: '₹1800 per metric ton'
    },
    {
      type: 'Medium term (3-6 months)',
      price: '₹1500 per metric ton'
    },
    {
      type: 'Long term (6+ months)',
      price: '₹1200 per metric ton'
    }
  ],
  owner: {
    name: 'Rajesh Kumar',
    phone: '+91 9876543210',
    email: 'rajesh@himalayancoldstorage.com'
  },
  operatingHours: '24 hours, 7 days a week',
  rating: 4.5,
  reviews: [
    {
      id: 1,
      user: 'Pradeep Singh',
      date: 'August 15, 2025',
      rating: 5,
      comment: 'Excellent facility with professional management. My fruits remained fresh for months.'
    },
    {
      id: 2,
      user: 'Anita Sharma',
      date: 'July 28, 2025',
      rating: 4,
      comment: 'Good storage conditions and reasonable pricing. Only issue is limited parking space.'
    },
    {
      id: 3,
      user: 'Vikram Patel',
      date: 'July 12, 2025',
      rating: 5,
      comment: 'Top-notch cold storage facility. The temperature control is excellent and staff is helpful.'
    }
  ]
};

const ColdStorageDetailsPage = () => {
  const { id } = useParams();
  
  // In a real application, we would fetch the data based on the ID
  // For now, we'll just use the mock data
  
  return (
    <Container maxWidth="lg">
      <Meta title={`${coldStorage.name} | Farmigo Cold Storage`} />
      
      <Box sx={{ my: 4 }}>
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
              <Typography variant="h4" component="h1" gutterBottom>
                {coldStorage.name}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1">
                  {coldStorage.fullAddress}
                </Typography>
              </Box>
              
              <Box 
                component="img"
                src={coldStorage.image || '/images/cold-storage-placeholder.jpg'}
                alt={coldStorage.name}
                sx={{ 
                  width: '100%', 
                  borderRadius: 2,
                  mb: 3
                }}
              />
              
              <Typography variant="h6" gutterBottom>
                About
              </Typography>
              <Typography variant="body1" paragraph>
                {coldStorage.description}
              </Typography>
              
              <Divider sx={{ my: 3 }} />
              
              <Typography variant="h6" gutterBottom>
                Features & Facilities
              </Typography>
              <Grid container spacing={2}>
                {coldStorage.features.map((feature, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <SecurityIcon color="primary" sx={{ mr: 1 }} fontSize="small" />
                      <Typography variant="body1">{feature}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              
              <Divider sx={{ my: 3 }} />
              
              <Typography variant="h6" gutterBottom>
                Storage Conditions
              </Typography>
              <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: 'primary.light' }}>
                      <TableCell>Zone Type</TableCell>
                      <TableCell>Temperature Range</TableCell>
                      <TableCell>Suitable For</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Freezer Zone</TableCell>
                      <TableCell>{coldStorage.temperature.freezer}</TableCell>
                      <TableCell>Meat, Frozen Foods</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Chiller Zone</TableCell>
                      <TableCell>{coldStorage.temperature.chiller}</TableCell>
                      <TableCell>Dairy, Fruits, Vegetables</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Controlled Atmosphere</TableCell>
                      <TableCell>{coldStorage.temperature.controlledAtmosphere}</TableCell>
                      <TableCell>Specific Fruits, Exotic Vegetables</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              
              <Divider sx={{ my: 3 }} />
              
              <Typography variant="h6" gutterBottom>
                Pricing
              </Typography>
              <TableContainer component={Paper} variant="outlined">
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: 'primary.light' }}>
                      <TableCell>Storage Duration</TableCell>
                      <TableCell>Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {coldStorage.pricing.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.type}</TableCell>
                        <TableCell>{item.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              
              <Divider sx={{ my: 3 }} />
              
              <Typography variant="h6" gutterBottom>
                Reviews & Ratings
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Rating value={coldStorage.rating} precision={0.5} readOnly />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  {coldStorage.rating} out of 5 ({coldStorage.reviews.length} reviews)
                </Typography>
              </Box>
              
              <List>
                {coldStorage.reviews.map((review) => (
                  <React.Fragment key={review.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar>{review.user.charAt(0)}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="subtitle1">{review.user}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              {review.date}
                            </Typography>
                          </Box>
                        }
                        secondary={
                          <Box>
                            <Rating value={review.rating} size="small" readOnly />
                            <Typography variant="body2" sx={{ mt: 1 }}>
                              {review.comment}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>
          
          {/* Right Column - Contact and Summary */}
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Summary
              </Typography>
              
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                      <DeviceThermostatIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Temperature Zones"
                    secondary="Multiple zones from -22°C to +12°C"
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                      <SquareFootIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Storage Capacity"
                    secondary={`Total: ${coldStorage.capacity} | Available: ${coldStorage.available}`}
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                      <AccessTimeIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Operating Hours"
                    secondary={coldStorage.operatingHours}
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                      <ElectricBoltIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Power Backup"
                    secondary="24/7 Generator Support"
                  />
                </ListItem>
              </List>
              
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="h6" gutterBottom>
                Suitable Products
              </Typography>
              <Box sx={{ mb: 2 }}>
                {coldStorage.products.map((product, index) => (
                  <Chip
                    key={index}
                    label={product}
                    color="primary"
                    variant="outlined"
                    sx={{ m: 0.5 }}
                  />
                ))}
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                      <PeopleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Manager"
                    secondary={coldStorage.owner.name}
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                      <PeopleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Phone"
                    secondary={coldStorage.owner.phone}
                  />
                </ListItem>
                
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                      <PeopleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Email"
                    secondary={coldStorage.owner.email}
                  />
                </ListItem>
              </List>
              
              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                sx={{ mt: 2 }}
              >
                Book Storage Space
              </Button>
              
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                size="large"
                sx={{ mt: 2 }}
              >
                Contact Manager
              </Button>
            </Paper>
            
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Location
              </Typography>
              <Box
                sx={{
                  width: '100%',
                  height: 200,
                  bgcolor: 'grey.300',
                  borderRadius: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mb: 2
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Map placeholder - Google Maps integration will be added here
                </Typography>
              </Box>
              <Button
                variant="text"
                color="primary"
                startIcon={<LocationOnIcon />}
                fullWidth
              >
                Get Directions
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ColdStorageDetailsPage;
