import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box component="footer" className="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              FARMIGO
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Connecting farmers, consumers, and cold storage facilities for a sustainable food ecosystem.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="facebook" color="primary">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="twitter" color="primary">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="instagram" color="primary">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="linkedin" color="primary">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Link to="/" color="inherit">
              <Typography variant="body2" color="text.secondary" display="block" gutterBottom>
                Home
              </Typography>
            </Link>
            <Link to="/cold-storage" color="inherit">
              <Typography variant="body2" color="text.secondary" display="block" gutterBottom>
                Cold Storage
              </Typography>
            </Link>
            <Link to="/marketplace" color="inherit">
              <Typography variant="body2" color="text.secondary" display="block" gutterBottom>
                Marketplace
              </Typography>
            </Link>
            <Link to="/standards" color="inherit">
              <Typography variant="body2" color="text.secondary" display="block" gutterBottom>
                Standards & Safety
              </Typography>
            </Link>
          </Grid>
          
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Resources
            </Typography>
            <Link to="/quality-analysis" color="inherit">
              <Typography variant="body2" color="text.secondary" display="block" gutterBottom>
                Quality Analysis
              </Typography>
            </Link>
            <Link to="/" color="inherit">
              <Typography variant="body2" color="text.secondary" display="block" gutterBottom>
                Blog
              </Typography>
            </Link>
            <Link to="/" color="inherit">
              <Typography variant="body2" color="text.secondary" display="block" gutterBottom>
                FAQ
              </Typography>
            </Link>
            <Link to="/" color="inherit">
              <Typography variant="body2" color="text.secondary" display="block" gutterBottom>
                Contact Us
              </Typography>
            </Link>
          </Grid>
          
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Address: 123 Farm Street, Agriville, India
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Email: info@farmigo.com
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Phone: +91 123-456-7890
            </Typography>
          </Grid>
        </Grid>
        
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' Farmigo. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
