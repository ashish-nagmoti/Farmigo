import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Typography, Box, Button, AppBar, Toolbar, Stack, Grid } from '@mui/material';
import EnhancedFarmerDashboard from './pages/EnhancedFarmerDashboard';
import EnhancedColdStorageInsights from './pages/EnhancedColdStorageInsights';
import EnhancedMarketplace from './pages/EnhancedMarketplace';
import EnhancedQualityAnalysis from './pages/EnhancedQualityAnalysis';

// Homepage component
const Homepage = () => (
  <Box sx={{ my: 4, textAlign: 'center' }}>
    <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#2E7D32' }}>
      Farmigo Platform
    </Typography>
    <Typography variant="h6" paragraph sx={{ mb: 3 }}>
      Connecting farmers, cold storage facilities, and consumers in a sustainable ecosystem
    </Typography>
    
    <Box sx={{ maxWidth: 800, mx: 'auto', mb: 5, px: 2 }}>
      <Typography variant="body1" paragraph align="left">
        Farmigo is an integrated agricultural platform that brings together farmers, cold storage providers, and consumers in one ecosystem:
      </Typography>
      <Typography component="ul" align="left" sx={{ pl: 2 }}>
        <li>Farmers can monitor crop quality, manage inventory, and find optimal storage solutions</li>
        <li>Cold storage facilities can showcase available capacity and monitor real-time conditions</li>
        <li>Consumers can buy fresh produce directly from local farmers with quality assurance</li>
        <li>AI-powered quality analysis ensures optimal freshness and reduces food waste</li>
      </Typography>
    </Box>
    
    <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap" sx={{ mb: 5 }}>
      <Button 
        variant="contained" 
        color="primary" 
        component={Link} 
        to="/farmer-dashboard"
        size="large"
        sx={{ px: 3, py: 1.2 }}
      >
        Farmer Dashboard
      </Button>
      <Button 
        variant="contained" 
        color="secondary" 
        component={Link} 
        to="/cold-storage-insights"
        size="large"
        sx={{ px: 3, py: 1.2 }}
      >
        Cold Storage Insights
      </Button>
      <Button 
        variant="contained" 
        color="info" 
        component={Link} 
        to="/quality-analysis"
        size="large"
        sx={{ px: 3, py: 1.2 }}
      >
        Quality Analysis
      </Button>
      <Button 
        variant="outlined" 
        color="primary" 
        component={Link} 
        to="/marketplace"
        size="large"
        sx={{ px: 3, py: 1.2 }}
      >
        Visit Marketplace
      </Button>
    </Stack>
    
    <Box sx={{ bgcolor: '#f5f5f5', py: 4, px: 2, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        Why Choose Farmigo?
      </Typography>
      <Grid container spacing={3} sx={{ mt: 1, justifyContent: 'center' }}>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" color="primary" gutterBottom>Direct Access</Typography>
            <Typography variant="body2">
              Connect directly with farmers and cold storage facilities without intermediaries
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" color="primary" gutterBottom>Quality Assurance</Typography>
            <Typography variant="body2">
              AI-powered quality assessment ensures only the best produce reaches consumers
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" color="primary" gutterBottom>Transparency</Typography>
            <Typography variant="body2">
              Complete visibility of storage conditions and produce journey from farm to table
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

// Navigation component
const Navigation = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
        Farmigo
      </Typography>
      <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Button color="inherit" component={Link} to="/farmer-dashboard">
          Farmer Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/cold-storage-insights">
          Cold Storage
        </Button>
        <Button color="inherit" component={Link} to="/quality-analysis">
          Quality Analysis
        </Button>
        <Button color="inherit" component={Link} to="/marketplace">
          Marketplace
        </Button>
      </Stack>
    </Toolbar>
  </AppBar>
);

// Simple footer component
const SimpleFooter = () => (
  <Box sx={{ p: 2, mt: 4, bgcolor: '#f5f5f5', textAlign: 'center' }}>
    <Typography variant="body2">© 2025 Farmigo. All rights reserved.</Typography>
  </Box>
);

const App = () => {
  return (
    <Router>
      <Navigation />
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/farmer-dashboard" element={<EnhancedFarmerDashboard />} />
          <Route path="/cold-storage-insights" element={<EnhancedColdStorageInsights />} />
          <Route path="/marketplace" element={<EnhancedMarketplace />} />
          <Route path="/quality-analysis" element={<EnhancedQualityAnalysis />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </Container>
      <SimpleFooter />
    </Router>
  );
};

export default App;
