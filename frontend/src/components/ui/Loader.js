import React from 'react';
import { Typography, CircularProgress, Box } from '@mui/material';

const Loader = ({ size = 50, message = 'Loading...' }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ py: 5 }}
    >
      <CircularProgress size={size} color="primary" />
      <Typography variant="body1" sx={{ mt: 2 }}>
        {message}
      </Typography>
    </Box>
  );
};

export default Loader;
