import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import { Link } from 'react-router-dom';
import StorageIcon from '@mui/icons-material/Storage';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SecurityIcon from '@mui/icons-material/Security';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <Box className="hero-section" sx={{ bgcolor: 'primary.main', mb: 6 }}>
        <Box className="hero-content" sx={{ maxWidth: 800, mx: 'auto', px: 3 }}>
          <Typography variant="h2" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
            Transforming Agricultural Supply Chain
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Connecting farmers, consumers, and cold storage facilities for a sustainable food ecosystem
          </Typography>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Button
              component={Link}
              to="/cold-storage"
              variant="contained"
              color="secondary"
              size="large"
            >
              Find Cold Storage
            </Button>
            <Button
              component={Link}
              to="/marketplace"
              variant="outlined"
              color="inherit"
              size="large"
              sx={{ color: 'white', borderColor: 'white' }}
            >
              Visit Marketplace
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{ mb: 4, textAlign: 'center', fontWeight: 600 }}
        >
          Our Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card className="feature-card card-hover">
              <CardContent sx={{ textAlign: 'center' }}>
                <StorageIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Cold Storage Insights
                </Typography>
                <Typography variant="body1">
                  Find and connect with cold storage facilities all across India with government-verified data.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button component={Link} to="/cold-storage" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card className="feature-card card-hover">
              <CardContent sx={{ textAlign: 'center' }}>
                <StorefrontIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Farmer-Consumer Connect
                </Typography>
                <Typography variant="body1">
                  Direct marketplace connecting farmers with consumers, cutting out middlemen and ensuring better prices.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button component={Link} to="/marketplace" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card className="feature-card card-hover">
              <CardContent sx={{ textAlign: 'center' }}>
                <SecurityIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Standards & Safety
                </Typography>
                <Typography variant="body1">
                  Comprehensive information on food safety standards, regulations, and best practices.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button component={Link} to="/standards" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card className="feature-card card-hover">
              <CardContent sx={{ textAlign: 'center' }}>
                <ImageSearchIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  Quality Detection
                </Typography>
                <Typography variant="body1">
                  ML-based food quality detection for vegetables and fruits using advanced computer vision.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button component={Link} to="/quality-analysis" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* About Section */}
      <Box sx={{ mb: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom>
              About Farmigo
            </Typography>
            <Typography variant="body1" paragraph>
              Farmigo is a comprehensive platform designed to address key challenges in India's agricultural ecosystem by connecting farmers, consumers, and cold storage facilities.
            </Typography>
            <Typography variant="body1" paragraph>
              Our mission is to reduce food wastage, ensure better prices for farmers, provide quality produce to consumers, and optimize the utilization of cold storage infrastructure across the country.
            </Typography>
            <Typography variant="body1" paragraph>
              We leverage government data on cold storage facilities and implement cutting-edge technologies like machine learning for food quality assessment to create a transparent and efficient agricultural marketplace.
            </Typography>
            <Button component={Link} to="/about" variant="contained" color="primary">
              Learn More About Us
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/about-farmigo.jpg"
              alt="About Farmigo"
              sx={{
                width: '100%',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: 'primary.light',
          py: 6,
          px: 3,
          borderRadius: 2,
          textAlign: 'center',
          mb: 6,
        }}
      >
        <Typography variant="h4" component="h3" gutterBottom>
          Ready to Join the Agricultural Revolution?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, maxWidth: 700, mx: 'auto' }}>
          Sign up today to connect with farmers, cold storage facilities, and consumers across India. Whether you're a farmer looking to sell produce, a consumer seeking fresh food, or a cold storage owner, Farmigo is here for you.
        </Typography>
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Button
            component={Link}
            to="/register"
            variant="contained"
            color="secondary"
            size="large"
          >
            Sign Up Now
          </Button>
          <Button
            component={Link}
            to="/contact"
            variant="outlined"
            color="inherit"
            size="large"
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
