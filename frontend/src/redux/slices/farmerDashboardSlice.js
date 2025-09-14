import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunks for farmer dashboard data
export const fetchFarmerDashboardData = createAsyncThunk(
  'farmerDashboard/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/farmers/dashboard');
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const fetchFarmerProducts = createAsyncThunk(
  'farmerDashboard/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/farmers/products');
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const fetchFarmerOrders = createAsyncThunk(
  'farmerDashboard/fetchOrders',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/farmers/orders');
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

// Mock data for the frontend to use while we develop the backend
const mockDashboardData = {
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

const initialState = {
  loading: false,
  data: mockDashboardData, // Using mock data initially
  error: null,
};

const farmerDashboardSlice = createSlice({
  name: 'farmerDashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFarmerDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFarmerDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFarmerDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // Fallback to mock data if API fails
        if (!state.data) {
          state.data = mockDashboardData;
        }
      });
  },
});

export default farmerDashboardSlice.reducer;
