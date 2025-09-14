import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions,
  Button,
  Chip,
  Paper,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

const SimpleMarketplace = () => {
  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Organic Apples',
      farmer: 'Rajesh Kumar',
      location: 'Shimla, HP',
      price: 80,
      unit: 'kg',
      category: 'Fruits',
      image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=500&auto=format&fit=crop',
      organic: true
    },
    {
      id: 2,
      name: 'Fresh Potatoes',
      farmer: 'Gurpreet Singh',
      location: 'Jalandhar, Punjab',
      price: 30,
      unit: 'kg',
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop',
      organic: false
    },
    {
      id: 3,
      name: 'Organic Tomatoes',
      farmer: 'Anita Sharma',
      location: 'Solan, HP',
      price: 60,
      unit: 'kg',
      category: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=500&auto=format&fit=crop',
      organic: true
    },
    {
      id: 4,
      name: 'Basmati Rice',
      farmer: 'Vijay Yadav',
      location: 'Karnal, Haryana',
      price: 120,
      unit: 'kg',
      category: 'Grains',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?w=500&auto=format&fit=crop',
      organic: false
    },
    {
      id: 5,
      name: 'Fresh Spinach',
      farmer: 'Lakshmi Devi',
      location: 'Kullu, HP',
      price: 40,
      unit: 'bundle',
      category: 'Leafy Greens',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop',
      organic: true
    },
    {
      id: 6,
      name: 'Organic Strawberries',
      farmer: 'Mohan Lal',
      location: 'Nainital, Uttarakhand',
      price: 180,
      unit: 'box',
      category: 'Berries',
      image: 'https://images.unsplash.com/photo-1587394910644-ab212e7216d9?w=500&auto=format&fit=crop',
      organic: true
    }
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ pt: 3, pb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Farmigo Marketplace
        </Typography>
        
        {/* Search and Filter Section */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search products..."
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      🔍
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Category</InputLabel>
                <Select
                  label="Category"
                  defaultValue=""
                >
                  <MenuItem value="">All Categories</MenuItem>
                  <MenuItem value="Fruits">Fruits</MenuItem>
                  <MenuItem value="Vegetables">Vegetables</MenuItem>
                  <MenuItem value="Grains">Grains</MenuItem>
                  <MenuItem value="Leafy Greens">Leafy Greens</MenuItem>
                  <MenuItem value="Berries">Berries</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Sort By</InputLabel>
                <Select
                  label="Sort By"
                  defaultValue="newest"
                >
                  <MenuItem value="newest">Newest First</MenuItem>
                  <MenuItem value="price_low">Price: Low to High</MenuItem>
                  <MenuItem value="price_high">Price: High to Low</MenuItem>
                  <MenuItem value="popular">Most Popular</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
        
        {/* Products Grid */}
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h6" component="div">
                      {product.name}
                    </Typography>
                    {product.organic && (
                      <Chip 
                        label="Organic" 
                        size="small" 
                        color="success" 
                        sx={{ fontWeight: 'bold' }} 
                      />
                    )}
                  </Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    by {product.farmer} • {product.location}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                    ₹{product.price}/{product.unit}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary" fullWidth>
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SimpleMarketplace;
