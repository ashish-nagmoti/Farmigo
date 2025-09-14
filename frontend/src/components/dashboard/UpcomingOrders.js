import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Divider,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import {
  LocalShipping as LocalShippingIcon,
  Store as StoreIcon,
  Assignment as AssignmentIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';

const UpcomingOrders = () => {
  const orders = [
    {
      id: 'ORD-2023-8745',
      customer: 'Himalaya Fresh Foods',
      product: 'Red Delicious Apples',
      quantity: '500 kg',
      dueDate: 'Oct 15, 2023',
      type: 'Wholesale',
    },
    {
      id: 'ORD-2023-8752',
      customer: 'Farm2Home Delivery',
      product: 'Organic Vegetables Mix',
      quantity: '200 kg',
      dueDate: 'Oct 18, 2023',
      type: 'Retail',
    },
    {
      id: 'ORD-2023-8761',
      customer: 'Punjab Cold Storage',
      product: 'Royal Gala Apples',
      quantity: '750 kg',
      dueDate: 'Oct 20, 2023',
      type: 'Storage',
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'Wholesale':
        return <LocalShippingIcon />;
      case 'Retail':
        return <StoreIcon />;
      case 'Storage':
        return <AssignmentIcon />;
      default:
        return <LocalShippingIcon />;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case 'Wholesale':
        return 'primary';
      case 'Retail':
        return 'success';
      case 'Storage':
        return 'warning';
      default:
        return 'primary';
    }
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        title="Upcoming Orders"
        action={
          <Button
            size="small"
            endIcon={<ArrowForwardIcon />}
            sx={{ textTransform: 'none' }}
          >
            View All
          </Button>
        }
      />
      <Divider />
      <CardContent>
        <List sx={{ p: 0 }}>
          {orders.map((order) => (
            <React.Fragment key={order.id}>
              <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: `${getColor(order.type)}.light` }}>
                    {getIcon(order.type)}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle2">
                      {order.product} - {order.quantity}
                    </Typography>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                      >
                        {order.customer} • Due {order.dueDate}
                      </Typography>
                      <Typography
                        component="span"
                        variant="caption"
                        sx={{
                          display: 'inline-block',
                          ml: 1,
                          px: 1,
                          py: 0.25,
                          borderRadius: 1,
                          bgcolor: `${getColor(order.type)}.light`,
                          color: `${getColor(order.type)}.main`,
                        }}
                      >
                        {order.type}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              {order.id !== orders[orders.length - 1].id && (
                <Divider variant="inset" component="li" />
              )}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default UpcomingOrders;
