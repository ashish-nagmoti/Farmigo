import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Box,
  Typography,
  Divider,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  FilterList as FilterListIcon,
} from '@mui/icons-material';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const ProductPerformance = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [timeframe, setTimeframe] = useState('This Month');
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
    handleClose();
  };

  const productData = [
    {
      name: 'Royal Gala',
      sales: 35000,
      profit: 12500,
      loss: 0,
    },
    {
      name: 'Red Delicious',
      sales: 28000,
      profit: 9800,
      loss: 0,
    },
    {
      name: 'Golden Delicious',
      sales: 22000,
      profit: 7700,
      loss: 0,
    },
    {
      name: 'Shimla Apple',
      sales: 18000,
      profit: 6300,
      loss: 0,
    },
    {
      name: 'Kinnaur Apple',
      sales: 12000,
      profit: 3600,
      loss: 1200,
    },
    {
      name: 'Granny Smith',
      sales: 8000,
      profit: 2400,
      loss: 800,
    },
  ];

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        title="Product Performance"
        subheader={timeframe}
        action={
          <Box>
            <Button
              aria-controls="timeframe-menu"
              aria-haspopup="true"
              onClick={handleClick}
              startIcon={<FilterListIcon />}
              size="small"
              sx={{ textTransform: 'none' }}
            >
              Filter
            </Button>
            <Menu
              id="timeframe-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleTimeframeChange('This Week')}>
                This Week
              </MenuItem>
              <MenuItem onClick={() => handleTimeframeChange('This Month')}>
                This Month
              </MenuItem>
              <MenuItem onClick={() => handleTimeframeChange('This Quarter')}>
                This Quarter
              </MenuItem>
              <MenuItem onClick={() => handleTimeframeChange('This Year')}>
                This Year
              </MenuItem>
            </Menu>
          </Box>
        }
      />
      <Divider />
      <CardContent>
        <Box sx={{ height: 300, width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={productData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
              <Legend />
              <Bar dataKey="sales" name="Sales" fill="#4caf50" />
              <Bar dataKey="profit" name="Profit" fill="#2196f3" />
              <Bar dataKey="loss" name="Loss" fill="#f44336" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            Key Insights
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Royal Gala apples are your top performer with ₹35,000 in sales and ₹12,500 in profit this month. 
            Consider increasing production of high-margin varieties like Royal Gala and Red Delicious 
            while reducing Kinnaur Apple production which has shown some losses.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductPerformance;
