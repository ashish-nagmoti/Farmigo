import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  IconButton,
} from '@mui/icons-material';
import {
  Refresh as RefreshIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  TrendingFlat as TrendingFlatIcon,
} from '@mui/icons-material';

const MarketPrices = () => {
  const marketPrices = [
    {
      crop: 'Royal Gala Apple',
      currentPrice: 120,
      trend: 'up',
      change: 15,
      market: 'Delhi Wholesale Market',
    },
    {
      crop: 'Red Delicious Apple',
      currentPrice: 105,
      trend: 'down',
      change: 8,
      market: 'Delhi Wholesale Market',
    },
    {
      crop: 'Golden Delicious Apple',
      currentPrice: 95,
      trend: 'flat',
      change: 0,
      market: 'Delhi Wholesale Market',
    },
    {
      crop: 'Shimla Apple',
      currentPrice: 85,
      trend: 'up',
      change: 5,
      market: 'Delhi Wholesale Market',
    },
    {
      crop: 'Kinnaur Apple',
      currentPrice: 130,
      trend: 'up',
      change: 20,
      market: 'Delhi Wholesale Market',
    },
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up':
        return <TrendingUpIcon fontSize="small" color="success" />;
      case 'down':
        return <TrendingDownIcon fontSize="small" color="error" />;
      case 'flat':
        return <TrendingFlatIcon fontSize="small" color="action" />;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader
        title="Market Prices"
        subheader="Today's rates in key markets"
        action={
          <IconButton aria-label="refresh">
            <RefreshIcon />
          </IconButton>
        }
      />
      <Divider />
      <CardContent>
        <List sx={{ width: '100%' }}>
          {marketPrices.map((item, index) => (
            <React.Fragment key={item.crop}>
              <ListItem alignItems="flex-start" sx={{ py: 1 }}>
                <ListItemText
                  primary={item.crop}
                  secondary={`${item.market}`}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                  }}
                >
                  <Typography variant="body1" component="span">
                    ₹{item.currentPrice}/kg
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {getTrendIcon(item.trend)}
                    <Typography
                      variant="body2"
                      component="span"
                      color={
                        item.trend === 'up'
                          ? 'success.main'
                          : item.trend === 'down'
                          ? 'error.main'
                          : 'text.secondary'
                      }
                      sx={{ ml: 0.5 }}
                    >
                      {item.trend === 'up'
                        ? `+₹${item.change}`
                        : item.trend === 'down'
                        ? `-₹${item.change}`
                        : 'No change'}
                    </Typography>
                  </Box>
                </Box>
              </ListItem>
              {index < marketPrices.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Prices updated as of October 15, 2023. Premium varieties like Kinnaur and Royal Gala 
            are showing strong demand with price increases. Consider prioritizing these varieties 
            for your next market day.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MarketPrices;
