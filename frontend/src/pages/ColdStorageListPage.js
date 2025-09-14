import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import { Link } from 'react-router-dom';
import Meta from '../components/ui/Meta';

// Mock data for cold storage facilities
const coldStorages = [
  {
    id: 1,
    name: 'Himalayan Cold Storage',
    location: 'Delhi, India',
    temperature: '-18°C to 4°C',
    capacity: '5000 metric tons',
    available: '2000 metric tons',
    image: '/images/cold-storage-1.jpg',
    description: 'State-of-the-art cold storage facility with multiple temperature zones for various agricultural products.',
    rating: 4.5,
    reviews: 28
  },
  {
    id: 2,
    name: 'Fresh Valley Storage Solutions',
    location: 'Mumbai, India',
    temperature: '-10°C to 10°C',
    capacity: '3500 metric tons',
    available: '1200 metric tons',
    image: '/images/cold-storage-2.jpg',
    description: 'Modern cold storage with specialized chambers for fruits, vegetables, and dairy products.',
    rating: 4.2,
    reviews: 19
  },
  {
    id: 3,
    name: 'Punjab Agro Cold Chain',
    location: 'Chandigarh, India',
    temperature: '-20°C to 2°C',
    capacity: '7000 metric tons',
    available: '3500 metric tons',
    image: '/images/cold-storage-3.jpg',
    description: 'Large capacity cold storage with advanced temperature control systems for long-term storage.',
    rating: 4.7,
    reviews: 34
  },
  {
    id: 4,
    name: 'Coastal Freeze Solutions',
    location: 'Chennai, India',
    temperature: '-15°C to 5°C',
    capacity: '4200 metric tons',
    available: '1800 metric tons',
    image: '/images/cold-storage-4.jpg',
    description: 'Strategically located facility with excellent connectivity to major markets.',
    rating: 4.0,
    reviews: 22
  },
  {
    id: 5,
    name: 'Bengal Cold Storage',
    location: 'Kolkata, India',
    temperature: '-12°C to 8°C',
    capacity: '6000 metric tons',
    available: '4000 metric tons',
    image: '/images/cold-storage-5.jpg',
    description: 'Traditional and modern storage solutions combined with energy-efficient cooling systems.',
    rating: 4.3,
    reviews: 15
  },
  {
    id: 6,
    name: 'Green Field Cold Chain',
    location: 'Bangalore, India',
    temperature: '-5°C to 15°C',
    capacity: '2800 metric tons',
    available: '1000 metric tons',
    image: '/images/cold-storage-6.jpg',
    description: 'Eco-friendly cold storage facility powered by renewable energy sources.',
    rating: 4.6,
    reviews: 31
  },
];

const ColdStorageListPage = () => {
  return (
    <Container maxWidth="lg">
      <Meta title="Cold Storage Facilities | Farmigo" />
      
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Cold Storage Facilities
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Find reliable cold storage facilities across India to store your agricultural produce with optimal conditions.
        </Typography>
        
        {/* Search and Filter Section */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search by name or location"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="location-select-label">Location</InputLabel>
                <Select
                  labelId="location-select-label"
                  id="location-select"
                  label="Location"
                  defaultValue=""
                >
                  <MenuItem value="">All Locations</MenuItem>
                  <MenuItem value="Delhi">Delhi</MenuItem>
                  <MenuItem value="Mumbai">Mumbai</MenuItem>
                  <MenuItem value="Kolkata">Kolkata</MenuItem>
                  <MenuItem value="Chennai">Chennai</MenuItem>
                  <MenuItem value="Bangalore">Bangalore</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="capacity-select-label">Capacity</InputLabel>
                <Select
                  labelId="capacity-select-label"
                  id="capacity-select"
                  label="Capacity"
                  defaultValue=""
                >
                  <MenuItem value="">Any Capacity</MenuItem>
                  <MenuItem value="1000">Less than 1000 MT</MenuItem>
                  <MenuItem value="5000">1000 - 5000 MT</MenuItem>
                  <MenuItem value="10000">5000 - 10000 MT</MenuItem>
                  <MenuItem value="10001">More than 10000 MT</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                startIcon={<FilterListIcon />}
                sx={{ float: 'right' }}
              >
                Apply Filters
              </Button>
            </Grid>
          </Grid>
        </Box>
        
        {/* Cold Storage List */}
        <Grid container spacing={3}>
          {coldStorages.map((storage) => (
            <Grid item key={storage.id} xs={12} sm={6} md={4}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={storage.image || '/images/cold-storage-placeholder.jpg'}
                  alt={storage.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {storage.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOnIcon color="primary" sx={{ mr: 1 }} fontSize="small" />
                    <Typography variant="body2" color="text.secondary">
                      {storage.location}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <DeviceThermostatIcon color="primary" sx={{ mr: 1 }} fontSize="small" />
                    <Typography variant="body2" color="text.secondary">
                      Temperature: {storage.temperature}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <SquareFootIcon color="primary" sx={{ mr: 1 }} fontSize="small" />
                    <Typography variant="body2" color="text.secondary">
                      Available: {storage.available} / {storage.capacity}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {storage.description.length > 100 
                      ? `${storage.description.substring(0, 100)}...` 
                      : storage.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    component={Link} 
                    to={`/cold-storage/${storage.id}`} 
                    size="small" 
                    color="primary"
                  >
                    View Details
                  </Button>
                  <Button size="small" color="primary">
                    Contact
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        
        {/* Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination count={10} color="primary" />
        </Box>
      </Box>
    </Container>
  );
};

export default ColdStorageListPage;
