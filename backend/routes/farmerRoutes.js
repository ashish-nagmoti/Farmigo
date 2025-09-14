const express = require('express');
const router = express.Router();
const {
  getFarmerDashboardData,
  getFarmerProducts,
  getFarmerOrders,
  getFarmerTransactions,
  getMarketPrices,
  getWeatherData,
  getCropCalendar
} = require('../controllers/farmerController');

// Get all farmer dashboard data
router.get('/dashboard', getFarmerDashboardData);

// Get farmer's products
router.get('/products', getFarmerProducts);

// Get farmer's orders
router.get('/orders', getFarmerOrders);

// Get farmer's transactions
router.get('/transactions', getFarmerTransactions);

// Get market prices
router.get('/market-prices', getMarketPrices);

// Get weather data
router.get('/weather', getWeatherData);

// Get crop calendar
router.get('/crop-calendar', getCropCalendar);

module.exports = router;
