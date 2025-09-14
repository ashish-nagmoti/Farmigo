import React from 'react';
import { Alert, AlertTitle, Box } from '@mui/material';

const Message = ({ severity = 'info', title = null, children }) => {
  return (
    <Box sx={{ width: '100%', my: 2 }}>
      <Alert severity={severity}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {children}
      </Alert>
    </Box>
  );
};

export default Message;
