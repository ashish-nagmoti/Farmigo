import React, { useState, useEffect } from 'react';
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
  MenuItem,
  Slider,
  Divider,
  Rating,
  CircularProgress,
  IconButton,
  Badge,
  Pagination
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  ShoppingCart as CartIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  LocationOn as LocationIcon,
  Verified as VerifiedIcon
} from '@mui/icons-material';

const EnhancedMarketplace = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [organicOnly, setOrganicOnly] = useState(false);
  const [sortBy, setSortBy] = useState('newest');
  const [cartItems, setCartItems] = useState(0);
  
  // Simulate data loading
  useEffect(() => {
    // Mock data
    const mockProducts = [
      {
        id: 1,
        name: 'Organic Himachal Apples',
        farmer: 'Rajesh Kumar',
        location: 'Shimla, Himachal Pradesh',
        price: 95,
        originalPrice: 110,
        unit: 'kg',
        category: 'Fruits',
        image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=500&auto=format&fit=crop',
        organic: true,
        verified: true,
        rating: 4.8,
        reviewCount: 156,
        availability: 'In Stock',
        description: 'Premium organic apples grown in the foothills of Himalayas. Sweet, crunchy and packed with nutrients.',
        dateAdded: '2025-09-05'
      },
      {
        id: 2,
        name: 'Fresh Potatoes',
        farmer: 'Gurpreet Singh',
        location: 'Jalandhar, Punjab',
        price: 30,
        originalPrice: 30,
        unit: 'kg',
        category: 'Vegetables',
        image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500&auto=format&fit=crop',
        organic: false,
        verified: true,
        rating: 4.5,
        reviewCount: 92,
        availability: 'In Stock',
        description: 'Farm-fresh potatoes from Punjab\'s fertile soil. Perfect for curries, fries, and mashed potatoes.',
        dateAdded: '2025-09-08'
      },
      {
        id: 3,
        name: 'Organic Cherry Tomatoes',
        farmer: 'Anita Sharma',
        location: 'Solan, Himachal Pradesh',
        price: 75,
        originalPrice: 85,
        unit: 'kg',
        category: 'Vegetables',
        image: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=500&auto=format&fit=crop',
        organic: true,
        verified: true,
        rating: 4.7,
        reviewCount: 108,
        availability: 'Limited Stock',
        description: 'Sweet and juicy organic cherry tomatoes. Handpicked at the peak of ripeness for maximum flavor.',
        dateAdded: '2025-09-10'
      },
      {
        id: 4,
        name: 'Premium Basmati Rice',
        farmer: 'Vijay Yadav',
        location: 'Karnal, Haryana',
        price: 120,
        originalPrice: 140,
        unit: 'kg',
        category: 'Grains',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?w=500&auto=format&fit=crop',
        organic: false,
        verified: true,
        rating: 4.9,
        reviewCount: 203,
        availability: 'In Stock',
        description: 'Aromatic long-grain basmati rice from Haryana. Aged for 12 months for perfect flavor and texture.',
        dateAdded: '2025-08-28'
      },
      {
        id: 5,
        name: 'Fresh Organic Spinach',
        farmer: 'Lakshmi Devi',
        location: 'Kullu, Himachal Pradesh',
        price: 40,
        originalPrice: 45,
        unit: 'bundle',
        category: 'Leafy Greens',
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&auto=format&fit=crop',
        organic: true,
        verified: true,
        rating: 4.6,
        reviewCount: 89,
        availability: 'In Stock',
        description: 'Nutrient-rich organic spinach grown using natural farming methods. Freshly harvested every morning.',
        dateAdded: '2025-09-12'
      },
      {
        id: 6,
        name: 'Organic Strawberries',
        farmer: 'Mohan Lal',
        location: 'Nainital, Uttarakhand',
        price: 180,
        originalPrice: 200,
        unit: 'box',
        category: 'Berries',
        image: 'https://images.unsplash.com/photo-1587394910644-ab212e7216d9?w=500&auto=format&fit=crop',
        organic: true,
        verified: true,
        rating: 4.9,
        reviewCount: 137,
        availability: 'Limited Stock',
        description: 'Sweet and juicy organic strawberries from the hills of Uttarakhand. Perfect for desserts or eating fresh.',
        dateAdded: '2025-09-09'
      },
      {
        id: 7,
        name: 'Farm Fresh Carrots',
        farmer: 'Harpal Singh',
        location: 'Ludhiana, Punjab',
        price: 35,
        originalPrice: 40,
        unit: 'kg',
        category: 'Vegetables',
        image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop',
        organic: false,
        verified: true,
        rating: 4.5,
        reviewCount: 76,
        availability: 'In Stock',
        description: 'Crunchy and sweet carrots, rich in beta-carotene and antioxidants. Great for salads and cooking.',
        dateAdded: '2025-09-07'
      },
      {
        id: 8,
        name: 'Organic Green Peas',
        farmer: 'Sunita Kumari',
        location: 'Dehradun, Uttarakhand',
        price: 65,
        originalPrice: 70,
        unit: 'kg',
        category: 'Vegetables',
        image: 'https://images.unsplash.com/photo-1615396899839-c5432d4bdd4e?w=500&auto=format&fit=crop',
        organic: true,
        verified: false,
        rating: 4.4,
        reviewCount: 58,
        availability: 'In Stock',
        description: 'Sweet and tender organic green peas from the valley of Dehradun. Hand-shelled for the best quality.',
        dateAdded: '2025-09-11'
      },
      {
        id: 9,
        name: 'Premium Alphonso Mangoes',
        farmer: 'Ramesh Patel',
        location: 'Ratnagiri, Maharashtra',
        price: 450,
        originalPrice: 500,
        unit: 'dozen',
        category: 'Fruits',
        image: 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=500&auto=format&fit=crop',
        organic: false,
        verified: true,
        rating: 4.9,
        reviewCount: 312,
        availability: 'Limited Stock',
        description: 'The king of fruits! Premium Alphonso mangoes known for their unmatched sweetness and aroma.',
        dateAdded: '2025-09-02'
      },
      {
        id: 10,
        name: 'Organic Turmeric Powder',
        farmer: 'Krishna Murthy',
        location: 'Erode, Tamil Nadu',
        price: 220,
        originalPrice: 250,
        unit: 'kg',
        category: 'Spices',
        image: 'https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=500&auto=format&fit=crop',
        organic: true,
        verified: true,
        rating: 4.8,
        reviewCount: 145,
        availability: 'In Stock',
        description: 'High curcumin organic turmeric powder, freshly ground from farm-grown turmeric roots.',
        dateAdded: '2025-08-25'
      },
      {
        id: 11,
        name: 'Fresh Coconuts',
        farmer: 'Rajan Nair',
        location: 'Kochi, Kerala',
        price: 45,
        originalPrice: 50,
        unit: 'piece',
        category: 'Fruits',
        image: 'https://images.unsplash.com/photo-1581337204873-1a25ba260077?w=500&auto=format&fit=crop',
        organic: false,
        verified: true,
        rating: 4.6,
        reviewCount: 89,
        availability: 'In Stock',
        description: 'Fresh tender coconuts from Kerala\'s coastal farms. Naturally sweet water and soft kernel.',
        dateAdded: '2025-09-06'
      },
      {
        id: 12,
        name: 'Organic Brown Rice',
        farmer: 'Manohar Reddy',
        location: 'Warangal, Telangana',
        price: 95,
        originalPrice: 110,
        unit: 'kg',
        category: 'Grains',
        image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500&auto=format&fit=crop',
        organic: true,
        verified: true,
        rating: 4.7,
        reviewCount: 126,
        availability: 'In Stock',
        description: 'Nutrient-rich organic brown rice with the bran layer intact. High in fiber and essential nutrients.',
        dateAdded: '2025-09-01'
      }
    ];
    
    setTimeout(() => {
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setLoading(false);
    }, 800);
  }, []);
  
  // Handle filtering and sorting
  useEffect(() => {
    let filtered = [...products];
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        product => 
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.farmer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (categoryFilter) {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }
    
    // Apply price range filter
    filtered = filtered.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply organic filter
    if (organicOnly) {
      filtered = filtered.filter(product => product.organic);
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price_low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price_high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
    }
    
    setFilteredProducts(filtered);
  }, [products, searchTerm, categoryFilter, priceRange, organicOnly, sortBy]);
  
  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  // Handle category filter change
  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };
  
  // Handle price range change
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  
  // Handle organic filter toggle
  const handleOrganicChange = (event) => {
    setOrganicOnly(event.target.checked);
  };
  
  // Handle sort change
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  
  // Handle add to cart
  const handleAddToCart = () => {
    setCartItems(prev => prev + 1);
  };
  
  // Extract unique categories from products
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <Container maxWidth="xl">
      <Box sx={{ pt: 3, pb: 6 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4">
            Farmigo Marketplace
          </Typography>
          <IconButton color="primary" sx={{ position: 'relative' }}>
            <Badge badgeContent={cartItems} color="error">
              <CartIcon />
            </Badge>
          </IconButton>
        </Box>
        
        <Paper sx={{ p: 3, mb: 4, bgcolor: '#f8f9fa' }}>
          <Typography variant="h6" gutterBottom>
            Farm Fresh Produce - Direct from Farmers
          </Typography>
          <Typography variant="body1">
            Browse high-quality fruits, vegetables, and more from verified farmers across India.
            All produce is harvested fresh and delivered directly to you.
          </Typography>
        </Paper>
        
        {/* Search and Filter Section */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {/* Left Sidebar - Filters */}
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <FilterIcon sx={{ mr: 1 }} /> Filters
              </Typography>
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" gutterBottom>Category</Typography>
                <FormControl fullWidth size="small">
                  <Select
                    value={categoryFilter}
                    onChange={handleCategoryChange}
                    displayEmpty
                  >
                    <MenuItem value="">All Categories</MenuItem>
                    {categories.map((category) => (
                      <MenuItem key={category} value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" gutterBottom>Price Range (₹)</Typography>
                <Slider
                  value={priceRange}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={500}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2">₹{priceRange[0]}</Typography>
                  <Typography variant="body2">₹{priceRange[1]}</Typography>
                </Box>
              </Box>
              
              <Box sx={{ mb: 3 }}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Sort By</InputLabel>
                  <Select
                    value={sortBy}
                    onChange={handleSortChange}
                    label="Sort By"
                    size="small"
                  >
                    <MenuItem value="newest">Newest First</MenuItem>
                    <MenuItem value="price_low">Price: Low to High</MenuItem>
                    <MenuItem value="price_high">Price: High to Low</MenuItem>
                    <MenuItem value="rating">Highest Rated</MenuItem>
                  </Select>
                </FormControl>
                
                <FormControl fullWidth>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="checkbox"
                      id="organic-filter"
                      checked={organicOnly}
                      onChange={handleOrganicChange}
                    />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      Show only organic products
                    </Typography>
                  </Box>
                </FormControl>
              </Box>
            </Paper>
          </Grid>
          
          {/* Main Content - Products */}
          <Grid item xs={12} md={9}>
            <Paper sx={{ p: 2, mb: 3 }}>
              <TextField
                fullWidth
                placeholder="Search products, farmers, locations..."
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Paper>
            
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>
                <CircularProgress />
              </Box>
            ) : filteredProducts.length === 0 ? (
              <Paper sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h6" color="text.secondary">
                  No products found matching your criteria.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Try adjusting your filters or search term.
                </Typography>
              </Paper>
            ) : (
              <>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    Showing {filteredProducts.length} of {products.length} products
                  </Typography>
                </Box>
                
                <Grid container spacing={3}>
                  {filteredProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        {product.organic && (
                          <Chip 
                            label="Organic" 
                            size="small" 
                            color="success" 
                            sx={{ 
                              position: 'absolute', 
                              top: 10, 
                              left: 10, 
                              zIndex: 1,
                              fontWeight: 'bold'
                            }} 
                          />
                        )}
                        
                        <CardMedia
                          component="img"
                          height="180"
                          image={product.image}
                          alt={product.name}
                        />
                        
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Typography variant="h6" component="div" gutterBottom>
                              {product.name}
                            </Typography>
                            <IconButton size="small" color="default">
                              <FavoriteBorderIcon fontSize="small" />
                            </IconButton>
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                              <LocationIcon fontSize="small" sx={{ mr: 0.5 }} />
                              {product.location}
                            </Typography>
                            {product.verified && (
                              <Chip 
                                icon={<VerifiedIcon />} 
                                label="Verified" 
                                size="small" 
                                color="info" 
                                variant="outlined"
                                sx={{ ml: 1, height: 20, fontSize: '0.7rem' }}
                              />
                            )}
                          </Box>
                          
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                            by {product.farmer}
                          </Typography>
                          
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Rating value={product.rating} precision={0.1} size="small" readOnly />
                            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                              ({product.reviewCount})
                            </Typography>
                          </Box>
                          
                          <Box sx={{ display: 'flex', alignItems: 'baseline', mt: 2 }}>
                            <Typography variant="h6" color="primary" fontWeight="bold">
                              ₹{product.price}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                              /{product.unit}
                            </Typography>
                            {product.price < product.originalPrice && (
                              <Typography variant="body2" color="text.secondary" sx={{ ml: 1, textDecoration: 'line-through' }}>
                                ₹{product.originalPrice}
                              </Typography>
                            )}
                          </Box>
                          
                          <Chip 
                            label={product.availability} 
                            size="small" 
                            color={product.availability === 'In Stock' ? 'success' : 'warning'} 
                            variant="outlined"
                            sx={{ mt: 1 }}
                          />
                        </CardContent>
                        
                        <CardActions>
                          <Button 
                            size="small" 
                            variant="contained" 
                            color="primary" 
                            fullWidth
                            onClick={handleAddToCart}
                          >
                            Add to Cart
                          </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
                
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                  <Pagination count={3} color="primary" />
                </Box>
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default EnhancedMarketplace;
