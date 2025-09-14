const asyncHandler = require('express-async-handler');

// @desc    Get farmer dashboard data
// @route   GET /api/farmers/dashboard
// @access  Private/Farmer
const getFarmerDashboardData = asyncHandler(async (req, res) => {
  // Mock data for farmer dashboard
  const dashboardData = {
    farmer: {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Shimla, Himachal Pradesh',
      farmSize: '15 acres',
      crops: ['Apples', 'Plums', 'Vegetables'],
      joinedDate: '2020-05-15',
    },
    stats: {
      totalSales: 64500,
      salesGrowth: 15.6,
      harvestCompletion: 75,
      activeOrders: 12,
      newOrders: 3,
      profitMargin: 32.8,
      profitChange: -2.3,
    },
    weather: {
      location: 'Shimla',
      currentTemp: 24,
      condition: 'Partly Cloudy',
      forecast: [
        { day: 'Wed', temp: 25, condition: 'Sunny' },
        { day: 'Thu', temp: 23, condition: 'Cloudy' },
        { day: 'Fri', temp: 21, condition: 'Rain' },
        { day: 'Sat', temp: 19, condition: 'Rain' },
        { day: 'Sun', temp: 22, condition: 'Cloudy' },
      ],
    },
    marketPrices: [
      { crop: 'Royal Gala Apple', price: 120, trend: 'up', change: 15 },
      { crop: 'Red Delicious Apple', price: 105, trend: 'down', change: 8 },
      { crop: 'Golden Delicious Apple', price: 95, trend: 'flat', change: 0 },
      { crop: 'Shimla Apple', price: 85, trend: 'up', change: 5 },
      { crop: 'Kinnaur Apple', price: 130, trend: 'up', change: 20 },
    ],
    activities: [
      { id: 1, activity: 'Shipped 200kg of Apples to Delhi', timestamp: '2 hours ago', completed: true },
      { id: 2, activity: 'Applied organic pesticides to tomato field', timestamp: '9 hours ago', completed: true },
      { id: 3, activity: 'Updated inventory counts for all produce', timestamp: 'Yesterday', completed: true },
      { id: 4, activity: 'Received payment for Golden Delicious apples', timestamp: '2 days ago', completed: true },
      { id: 5, activity: 'Scheduled irrigation for cucumber field', timestamp: '3 days ago', completed: false },
    ],
    orders: [
      { id: 'ORD-2023-8745', customer: 'Himalaya Fresh Foods', product: 'Red Delicious Apples', quantity: '500 kg', dueDate: 'Oct 15, 2023', type: 'Wholesale' },
      { id: 'ORD-2023-8752', customer: 'Farm2Home Delivery', product: 'Organic Vegetables Mix', quantity: '200 kg', dueDate: 'Oct 18, 2023', type: 'Retail' },
      { id: 'ORD-2023-8761', customer: 'Punjab Cold Storage', product: 'Royal Gala Apples', quantity: '750 kg', dueDate: 'Oct 20, 2023', type: 'Storage' },
    ],
    transactions: [
      { id: 'TR-7845', date: 'Oct 12, 2023', description: 'Payment Received - Himalaya Fresh Foods', amount: 25000, type: 'credit' },
      { id: 'TR-7839', date: 'Oct 10, 2023', description: 'Fertilizer Purchase - AgriSupplies', amount: 12500, type: 'debit' },
      { id: 'TR-7834', date: 'Oct 05, 2023', description: 'Payment Received - Farm2Home', amount: 18000, type: 'credit' },
      { id: 'TR-7828', date: 'Oct 01, 2023', description: 'Equipment Rental - Tractor', amount: 8500, type: 'debit' },
      { id: 'TR-7820', date: 'Sep 28, 2023', description: 'Farmigo Platform Fee', amount: 1500, type: 'debit' },
    ],
    productPerformance: [
      { name: 'Royal Gala', sales: 35000, profit: 12500, loss: 0 },
      { name: 'Red Delicious', sales: 28000, profit: 9800, loss: 0 },
      { name: 'Golden Delicious', sales: 22000, profit: 7700, loss: 0 },
      { name: 'Shimla Apple', sales: 18000, profit: 6300, loss: 0 },
      { name: 'Kinnaur Apple', sales: 12000, profit: 3600, loss: 1200 },
      { name: 'Granny Smith', sales: 8000, profit: 2400, loss: 800 },
    ],
  };

  res.json(dashboardData);
});

// @desc    Get farmer products
// @route   GET /api/farmers/products
// @access  Private/Farmer
const getFarmerProducts = asyncHandler(async (req, res) => {
  // Mock data for farmer products
  const products = [
    {
      id: 1,
      name: 'Royal Gala Apple',
      category: 'Fruits',
      quantity: 3500,
      unit: 'kg',
      price: 120,
      organic: true,
      imageUrl: '/images/products/royal-gala.jpg',
    },
    {
      id: 2,
      name: 'Red Delicious Apple',
      category: 'Fruits',
      quantity: 2800,
      unit: 'kg',
      price: 105,
      organic: true,
      imageUrl: '/images/products/red-delicious.jpg',
    },
    {
      id: 3,
      name: 'Golden Delicious Apple',
      category: 'Fruits',
      quantity: 2200,
      unit: 'kg',
      price: 95,
      organic: true,
      imageUrl: '/images/products/golden-delicious.jpg',
    },
    {
      id: 4,
      name: 'Shimla Apple',
      category: 'Fruits',
      quantity: 1800,
      unit: 'kg',
      price: 85,
      organic: true,
      imageUrl: '/images/products/shimla-apple.jpg',
    },
    {
      id: 5,
      name: 'Kinnaur Apple',
      category: 'Fruits',
      quantity: 1200,
      unit: 'kg',
      price: 130,
      organic: true,
      imageUrl: '/images/products/kinnaur-apple.jpg',
    },
    {
      id: 6,
      name: 'Granny Smith Apple',
      category: 'Fruits',
      quantity: 800,
      unit: 'kg',
      price: 110,
      organic: true,
      imageUrl: '/images/products/granny-smith.jpg',
    },
    {
      id: 7,
      name: 'Organic Tomatoes',
      category: 'Vegetables',
      quantity: 500,
      unit: 'kg',
      price: 60,
      organic: true,
      imageUrl: '/images/products/tomatoes.jpg',
    },
    {
      id: 8,
      name: 'Organic Potatoes',
      category: 'Vegetables',
      quantity: 750,
      unit: 'kg',
      price: 40,
      organic: true,
      imageUrl: '/images/products/potatoes.jpg',
    },
  ];

  res.json(products);
});

// @desc    Get farmer orders
// @route   GET /api/farmers/orders
// @access  Private/Farmer
const getFarmerOrders = asyncHandler(async (req, res) => {
  // Mock data for farmer orders
  const orders = [
    {
      id: 'ORD-2023-8745',
      customer: {
        name: 'Himalaya Fresh Foods',
        type: 'Wholesale',
        location: 'Delhi',
      },
      products: [
        {
          name: 'Red Delicious Apples',
          quantity: 500,
          unit: 'kg',
          price: 105,
          total: 52500,
        },
      ],
      total: 52500,
      status: 'Pending',
      paymentStatus: 'Paid',
      orderDate: '2023-10-10',
      dueDate: '2023-10-15',
    },
    {
      id: 'ORD-2023-8752',
      customer: {
        name: 'Farm2Home Delivery',
        type: 'Retail',
        location: 'Chandigarh',
      },
      products: [
        {
          name: 'Organic Tomatoes',
          quantity: 100,
          unit: 'kg',
          price: 60,
          total: 6000,
        },
        {
          name: 'Organic Potatoes',
          quantity: 100,
          unit: 'kg',
          price: 40,
          total: 4000,
        },
      ],
      total: 10000,
      status: 'Pending',
      paymentStatus: 'Pending',
      orderDate: '2023-10-12',
      dueDate: '2023-10-18',
    },
    {
      id: 'ORD-2023-8761',
      customer: {
        name: 'Punjab Cold Storage',
        type: 'Storage',
        location: 'Amritsar',
      },
      products: [
        {
          name: 'Royal Gala Apples',
          quantity: 750,
          unit: 'kg',
          price: 120,
          total: 90000,
        },
      ],
      total: 90000,
      status: 'Pending',
      paymentStatus: 'Pending',
      orderDate: '2023-10-12',
      dueDate: '2023-10-20',
    },
    {
      id: 'ORD-2023-8723',
      customer: {
        name: 'Organic Basket',
        type: 'Retail',
        location: 'Shimla',
      },
      products: [
        {
          name: 'Kinnaur Apple',
          quantity: 200,
          unit: 'kg',
          price: 130,
          total: 26000,
        },
      ],
      total: 26000,
      status: 'Completed',
      paymentStatus: 'Paid',
      orderDate: '2023-10-05',
      dueDate: '2023-10-10',
      deliveryDate: '2023-10-08',
    },
  ];

  res.json(orders);
});

// @desc    Get farmer transactions
// @route   GET /api/farmers/transactions
// @access  Private/Farmer
const getFarmerTransactions = asyncHandler(async (req, res) => {
  // Mock data for farmer transactions
  const transactions = [
    {
      id: 'TR-7845',
      date: '2023-10-12',
      description: 'Payment Received - Himalaya Fresh Foods',
      amount: 25000,
      type: 'credit',
      balance: 136500,
      category: 'Sales',
      reference: 'ORD-2023-8745',
    },
    {
      id: 'TR-7839',
      date: '2023-10-10',
      description: 'Fertilizer Purchase - AgriSupplies',
      amount: 12500,
      type: 'debit',
      balance: 111500,
      category: 'Farm Supplies',
      reference: 'INV-4567',
    },
    {
      id: 'TR-7834',
      date: '2023-10-05',
      description: 'Payment Received - Farm2Home',
      amount: 18000,
      type: 'credit',
      balance: 124000,
      category: 'Sales',
      reference: 'ORD-2023-8723',
    },
    {
      id: 'TR-7828',
      date: '2023-10-01',
      description: 'Equipment Rental - Tractor',
      amount: 8500,
      type: 'debit',
      balance: 106000,
      category: 'Equipment',
      reference: 'RNT-789',
    },
    {
      id: 'TR-7820',
      date: '2023-09-28',
      description: 'Farmigo Platform Fee',
      amount: 1500,
      type: 'debit',
      balance: 114500,
      category: 'Service Fee',
      reference: 'FEE-345',
    },
    {
      id: 'TR-7815',
      date: '2023-09-25',
      description: 'Payment Received - Delhi Fruits Mart',
      amount: 32000,
      type: 'credit',
      balance: 116000,
      category: 'Sales',
      reference: 'ORD-2023-8702',
    },
    {
      id: 'TR-7808',
      date: '2023-09-20',
      description: 'Packaging Materials - EcoPack',
      amount: 6500,
      type: 'debit',
      balance: 84000,
      category: 'Packaging',
      reference: 'INV-2345',
    },
  ];

  res.json(transactions);
});

// @desc    Get market prices
// @route   GET /api/farmers/market-prices
// @access  Public
const getMarketPrices = asyncHandler(async (req, res) => {
  // Mock data for market prices
  const marketPrices = [
    {
      crop: 'Royal Gala Apple',
      currentPrice: 120,
      trend: 'up',
      change: 15,
      market: 'Delhi Wholesale Market',
      lastUpdated: '2023-10-15',
    },
    {
      crop: 'Red Delicious Apple',
      currentPrice: 105,
      trend: 'down',
      change: 8,
      market: 'Delhi Wholesale Market',
      lastUpdated: '2023-10-15',
    },
    {
      crop: 'Golden Delicious Apple',
      currentPrice: 95,
      trend: 'flat',
      change: 0,
      market: 'Delhi Wholesale Market',
      lastUpdated: '2023-10-15',
    },
    {
      crop: 'Shimla Apple',
      currentPrice: 85,
      trend: 'up',
      change: 5,
      market: 'Delhi Wholesale Market',
      lastUpdated: '2023-10-15',
    },
    {
      crop: 'Kinnaur Apple',
      currentPrice: 130,
      trend: 'up',
      change: 20,
      market: 'Delhi Wholesale Market',
      lastUpdated: '2023-10-15',
    },
    {
      crop: 'Tomatoes',
      currentPrice: 60,
      trend: 'up',
      change: 10,
      market: 'Delhi Wholesale Market',
      lastUpdated: '2023-10-15',
    },
    {
      crop: 'Potatoes',
      currentPrice: 40,
      trend: 'down',
      change: 5,
      market: 'Delhi Wholesale Market',
      lastUpdated: '2023-10-15',
    },
    {
      crop: 'Onions',
      currentPrice: 35,
      trend: 'up',
      change: 8,
      market: 'Delhi Wholesale Market',
      lastUpdated: '2023-10-15',
    },
  ];

  res.json(marketPrices);
});

// @desc    Get weather data
// @route   GET /api/farmers/weather
// @access  Public
const getWeatherData = asyncHandler(async (req, res) => {
  // Mock data for weather
  const weatherData = {
    location: 'Shimla, Himachal Pradesh',
    currentTemp: 24,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    sunrise: '06:15',
    sunset: '18:05',
    forecast: [
      { day: 'Wed', temp: 25, condition: 'Sunny' },
      { day: 'Thu', temp: 23, condition: 'Cloudy' },
      { day: 'Fri', temp: 21, condition: 'Rain' },
      { day: 'Sat', temp: 19, condition: 'Rain' },
      { day: 'Sun', temp: 22, condition: 'Cloudy' },
    ],
    advisories: [
      'Optimal conditions for apple harvesting this week',
      'Plan irrigation for Friday due to expected rainfall',
      'Good conditions for pesticide application on Wednesday',
    ],
  };

  res.json(weatherData);
});

// @desc    Get crop calendar
// @route   GET /api/farmers/crop-calendar
// @access  Private/Farmer
const getCropCalendar = asyncHandler(async (req, res) => {
  // Mock data for crop calendar
  const cropCalendar = {
    currentMonth: 'October',
    seasonProgress: 65,
    activities: [
      {
        id: 1,
        activity: 'Apple Harvesting',
        crop: 'Apples',
        startDate: '2023-10-15',
        endDate: '2023-10-30',
        status: 'in-progress',
        priority: 'high',
        assignees: 4,
        notes: 'Focus on Royal Gala and Red Delicious varieties first',
      },
      {
        id: 2,
        activity: 'Pesticide Application',
        crop: 'Vegetables',
        startDate: '2023-10-20',
        endDate: '2023-10-21',
        status: 'upcoming',
        priority: 'medium',
        assignees: 2,
        notes: 'Use organic pesticides for tomato field',
      },
      {
        id: 3,
        activity: 'Irrigation Schedule',
        crop: 'All Crops',
        startDate: '2023-10-25',
        endDate: '2023-10-26',
        status: 'upcoming',
        priority: 'medium',
        assignees: 1,
        notes: 'Focus on newly planted areas',
      },
    ],
    completedActivities: [
      {
        id: 4,
        activity: 'Soil Testing',
        crop: 'All Crops',
        completedDate: '2023-10-05',
        notes: 'Results show good nitrogen levels but low potassium',
      },
      {
        id: 5,
        activity: 'Pruning',
        crop: 'Apple Trees',
        completedDate: '2023-09-25',
        notes: 'Completed all orchards',
      },
    ],
    upcomingSeasons: [
      {
        season: 'Winter',
        startDate: '2023-11-15',
        crops: ['Winter Vegetables', 'Garlic', 'Peas'],
        activities: ['Winter Preparation', 'Soil Preparation', 'Planting'],
      },
      {
        season: 'Spring',
        startDate: '2024-03-15',
        crops: ['Spring Vegetables', 'New Apple Trees'],
        activities: ['Fertilizing', 'Irrigation Setup', 'Pest Control'],
      },
    ],
  };

  res.json(cropCalendar);
});

module.exports = {
  getFarmerDashboardData,
  getFarmerProducts,
  getFarmerOrders,
  getFarmerTransactions,
  getMarketPrices,
  getWeatherData,
  getCropCalendar,
};
