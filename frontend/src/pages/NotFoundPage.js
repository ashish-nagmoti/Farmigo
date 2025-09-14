import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import Meta from '../components/ui/Meta';

const NotFoundPage = () => {
  return (
    <Container maxWidth="md">
      <Meta title="404 - Page Not Found | Farmigo" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          py: 8,
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" paragraph>
          The page you are looking for doesn't exist or has been moved.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2 }}
        >
          Go to Homepage
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
